import { Box, Button, Container, InputBase, Typography, useMediaQuery } from "@mui/material"
import { tf } from "../../core/styles/global"
import { Add, CalendarMonthOutlined} from "@mui/icons-material"
import { Form } from "./modals/Form"
import { useContext } from "react"
import { AppContext } from "../../core/contexts/AppContext"
import { Confirmation } from "./modals/Confirmation"
import { ActiveList } from "./List"
import { Preview } from "./modals/Preview"
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom"
import { useMemo } from "react"
import moment from "moment"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SearchIcons } from "../../core/global/Icons"

export const Home = ({ match }) => {
    const { home_state } = useContext(AppContext)
    const { tabList, form, tasks } = {...home_state}
    const { tab } = {...match.params}
    const lgdevice = useMediaQuery('(max-width:1039px)');
    const smdevice = useMediaQuery('(max-width:987px)');
    const sxdevice = useMediaQuery('(max-width:658px)');
    const xsdevice = useMediaQuery('(max-width:380px)');
    const l = {active: ActiveList, trash: ActiveList}
    const List = l[tab!=='trash' ? 'active' : 'trash']
    const classes = tf()
    const history = useHistory()
    
    const __filter  = useMemo(() => {
        let list = tab === 'trash' ? tasks.data.trash : tasks.data.list.filter((l) => l.status === (tab !== 'all' ? JSON.parse(tab) : l.status))
        const sd = moment(tasks.data.date_filter.start)
        const ed = moment(tasks.data.date_filter.end)
        list = list.filter((l) => {
            const dtc = moment(l.date)
            return dtc.isBetween(sd, ed, null, '[)')
        })

        if (tasks.data.search === '') return list

        return list.filter((l) => (
            l.title.toLowerCase().includes(tasks.data.search.toLowerCase()) || l.task.toLowerCase().includes(tasks.data.search.toLowerCase())
        ))
    }, [tab, tasks.data.list, tasks.data.trash, tasks.data.search, tasks.data.date_filter.start, tasks.data.date_filter.end])

    const searchHandler = (e) => {
        const { value } = e.target
        tasks.set({...tasks.data, search: value})
    }

    const dateFilterHandler = (dates) => {
        const [start, end] = dates;
        const fs = moment(moment(start).format('MMMM-DD-YYYY'))
        const fe = moment(moment(end).format('MMMM-DD-YYYY'))
        if (fs.isSame(fe, 'day')) {
            tasks.set({...tasks.data, date_filter: {toggled: true, start: moment(moment(fs).format('MMMM-DD-YYYY [00:00:01]')).toDate(), end: moment(moment(fe).format('MMMM-DD-YYYY [23:23:59]')).toDate()}})
        } else {
            tasks.set({...tasks.data, date_filter: {toggled: true, start, end}})
        }
    }

    const tabHandler = (t) => {
        history.push(`/tasks/${t}`)
    }

    const formHandler = (method, toggled) => {
        form.set({
            method, toggled, confirmation: {toggled: false, type: ''}, submitted: false,
            inputs: {
                title: {value: '', stat: false, msg: '', disabled: false},
                task: {value: '', stat: false, msg: '', disabled: false},
                date: {value: '', stat: false, msg: '', disabled: false},
                subtask: {
                    toggled: false,
                    list: [{value: '', stat: false, msg: '', disabled: false}]
                },
                files: []
            }
        })
    }

    const editHandler = () => {
        form.set({
            method: 'update', toggled: true, confirmation: {toggled: false, type: ''}, submitted: false,
            id: tasks.data.selected.task.id,
            inputs: {
                title: {value: tasks.data.selected.task.title , stat: false, msg: '', disabled: false},
                task: {value: tasks.data.selected.task.task , stat: false, msg: '', disabled: false},
                date: {value: tasks.data.selected.task.date , stat: false, msg: '', disabled: false},
                subtask: {
                    toggled: tasks.data.selected.task.subtask.length > 0,
                    list: tasks.data.selected.task.subtask.length > 0 ? tasks.data.selected.task.subtask : [{value: '', stat: false, msg: '', disabled: false}]
                },
                files: tasks.data.selected.task.files
            }
        })

        previewHandler(false, null)
    }

    const confirmHandler = (toggled, type) => {
		form.set({...form.data, confirmation: {...form.data.confirmation, toggled, type}})
	}

    const submitHandler = (m) => {
        let list = [...tasks.data.list]
        let task = {
            title: form.data.inputs.title.value,
            task: form.data.inputs.task.value,
            date: form.data.inputs.date.value,
            files: form.data.inputs.files,
            subtask: form.data.inputs.subtask.toggled ? form.data.inputs.subtask.list : []
        }

        if (m === 'add') {
            task.id = uuidv4()
            task.status = 1
            task.trashed = false
            list = [task, ...list].sort((a, b) => b.date - a.date)
        } else {
            list = list.map((l) => {
                if (l.id === form.data.id) {
                    return {...l, ...task}
                }

                return l
            })
        }

        tasks.set({...tasks.data, list})
        formHandler(null, false)
    }

    const previewHandler = (toggled, task) => {
        tasks.set({...tasks.data, selected: {toggled, task}})
    }

    const updateStatHandler = (status) => {
        let tlist = [...tasks.data.list]
        let rlist = [...tasks.data.trash]
        let h = 'trash'

        if (status === 2 || status === 3) {
            tlist = tlist.map((t) => {
                if (t.id === tasks.data.selected.task.id) {
                    return {...t, status}
                }

                return t
            })
            h = status
        }
        if (status === 'remove') {
            rlist = [tasks.data.selected.task, ...rlist]
            tlist = tlist.filter((t) => t.id !== tasks.data.selected.task.id)
            h = 'trash'
        }

        if (status === 'restore') {
            tlist = [tasks.data.selected.task, ...tlist]
            rlist = rlist.filter((t) => t.id !== tasks.data.selected.task.id)
            h = tasks.data.selected.task.status
        }

        if (status === 'premove') rlist = rlist.filter((r) => r.id !== tasks.data.selected.task.id)

        tlist = tlist.sort((a, b) => b.date - a.date)
        rlist = rlist.sort((a, b) => b.date - a.date)
        tasks.set({...tasks.data, selected: {toggled: false, task: null}, list: tlist, trash: rlist})
        confirmHandler(false, '')
        history.push(h)
    }

    const CreateButton = () => {
        return (
            <Box component={Button} onClick={() => formHandler('create', true)} bgcolor="#009E6A" borderRadius={2} px={3} gap={1} color="#fff" sx={{':hover': {bgcolor: '#009E6A'}}}><Add /> {!xsdevice && 'Create Task'} </Box>
        )
    }

    return (
        <Container sx={{height: '100%', display: 'flex', flexDirection: 'column'}} height="100%" maxWidth={smdevice ? 'xl' : 'lg'} disableGutters={sxdevice}>
            <Box display="flex" flexDirection="column" gap={1.5} py={3} width="100%" height="100%">
                <Box minHeight={xsdevice ? "280px": sxdevice ? "190px" : "245px"} display="flex" flexDirection="column" gap={3}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" px={sxdevice ? 2 : 0}>
                        <Box fontSize={20} fontWeight={700}>Tasks List</Box>
                        {sxdevice && <CreateButton/>}
                    </Box>
                    <Box display="flex" flexDirection={sxdevice ? 'column' : 'row'} justifyContent={sxdevice ? 'center' : 'space-between'} alignItems={sxdevice ? 'center' : 'space-between'} gap={sxdevice ? 3 : 2} px={xsdevice && 2}>
                        <Box display="flex" flexWrap={xsdevice ? "wrap" : "nowrap"} justifyContent={sxdevice ? 'center' : 'flex-start'} alignItems="center" gap={.5}>
                            {tabList.data?.map((v, i) => (
                                <Box key={i} component={Button} fontSize={12} color={tab === v.status ? v.status === 'all' ?"#107038":"#FFF":"#A2A3A9"} height="33px" px={lgdevice ? 1 : 3} 
                                sx={{bgcolor:tab === v.status?v.bgcolor:'#fff'}}
                                fontWeight={600}
                                onClick={() => tabHandler(v.status)}>
                                    {v.name}
                                </Box>
                            ))}
                        </Box>
                        {!sxdevice && <CreateButton/>}
                    </Box>
                    <Box display="flex" flexDirection={xsdevice ? 'column':'row'} justifyContent={sxdevice ? "center":"flex-end"} alignItems="center" gap={1.5} px={xsdevice && 2}>
                        <Box sx={{position: 'relative'}}>
                            <Box component={Button} minWidth={48} height={48} bgcolor="#fff" color="#333" borderRadius={3} onClick={() => tasks.set({...tasks.data, date_filter: {...tasks.data.date_filter, toggled: !tasks.data.date_filter.toggled}})}>
                                <Box p="2px 8px" borderRadius={10} fontSize={12}>{moment(tasks.data.date_filter.start).format('MMM DD, YYYY')}</Box>
                                -
                                <Box p="2px 8px" borderRadius={10} fontSize={12}>{moment(tasks.data.date_filter.end).format('MMM DD, YYYY')}</Box>
                                <CalendarMonthOutlined />
                            </Box>
                            <Box sx={{position: 'absolute', bottom: -250, left: 0, zIndex: 1}}>
                                {
                                    tasks.data.date_filter.toggled && (
                                        <DatePicker
                                            onChange={dateFilterHandler}
                                            startDate={tasks.data.date_filter.start}
                                            endDate={tasks.data.date_filter.end}
                                            selectsRange
                                            inline
                                        />
                                    )
                                }
                            </Box>
                        </Box>
                        <InputBase
                            onInput={searchHandler}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }} endAdornment={ <Box pr={1} pt={.5}><SearchIcons /></Box> }
                            sx={{backgroundColor: "#FFFFFF", border: "#D9EBE8 solid 2px", borderRadius: '10px', padding: '5px 5px 5px 20px', minWidth: '291', height: '49px'}}
                        />
                    </Box>
                    {!sxdevice && (
                        <Box display="flex" textAlign="left" py="12px" px={6} bgcolor="#E0E8E8" color="#517D6E" borderRadius={2}>
                            <Typography fontWeight={600} noWrap width="30%">Title</Typography>   
                            <Typography fontWeight={600} noWrap width={sxdevice ? '100%' : smdevice ? '85%' : '70%'}>Task</Typography>   
                            <Typography textAlign="center" fontWeight={600} noWrap width="20%">Date</Typography>
                            <Typography textAlign="center" fontWeight={600} noWrap width="20%">Status</Typography>
                        </Box>
                    )}
                </Box>
                <Box display="flex" flexDirection="column" borderRadius={3} gap={2} height="100%" sx={{'overflowY': 'auto'}}>
                    <List tab={tab} list={__filter} previewHandler={previewHandler} smdevice={smdevice} sxdevice={sxdevice} />
                </Box>
            </Box>
            <Form form={form} formHandler={formHandler} confirmHandler={confirmHandler} classes={classes} smdevice={smdevice} sxdevice={sxdevice} />
            <Preview tasks={tasks} confirmHandler={confirmHandler} previewHandler={previewHandler} editHandler={editHandler} tab={tab} smdevice={smdevice} sxdevice={sxdevice} />
            <Confirmation form={form} confirmHandler={confirmHandler} submitHandler={submitHandler} updateStatHandler={updateStatHandler} />
        </Container>
    )
}