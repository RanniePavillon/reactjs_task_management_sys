import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

export const HomeStates = () => {

    const [tabList, setTabList] = useState([
        {name:'All', status:'all', bgcolor:'#E2EDE7'},
        {name:'Todos', status:'1', bgcolor:'#1976d2'},
        {name:'In Progress', status:'2', bgcolor:'#ed6c02'},
        {name:'Completed', status:'3', bgcolor:'#2e7d32'},
        {name:'Trash', status:'trash', bgcolor:'#d32f2f'},
    ])

    const [tasks, setTask] = useState({
        search: '',
        date_filter: {toggled: false, start: moment(moment().subtract(7, 'days').format('MMMM-DD-YYYY [00:00:01]')).toDate(), end: moment(moment().add(7, 'days').format('MMMM-DD-YYYY [23:23:59]')).toDate()},
        selected: {
            toggled: false,
            task: null
        },
        trash: [],
        list: [
            {
                id: uuidv4(),
                title: 'Technical exam',
                task: 'Finish all the task and submit on monday.',
                date: moment().toDate(),
                files: [],
                status: 1,
                trashed: false,
                subtask: [
                    {value:'Create UI of landing page', stat: false,msg: '', disabled: false},
                    {value:'UI login and registration', stat: false,msg: '', disabled: false},
                    {value:'UI for to do list ', stat: false,msg: '', disabled: false},
                    {value:'Functions and validation', stat: false,msg: '', disabled: false},
                    {value:'Test the code and review', stat: false,msg: '', disabled: false},
                    {value:'Create documentation and deploy the projects', stat: false,msg: '', disabled: false}
                ]
            }
        ]
    })

    const [form, setForm] = useState({
        method: null,
        toggled: false,
        confirmation: {toggled: false, type: ''},
        submitted: false,
        id: null,
        inputs: {
            title: {value: '', stat: false, msg: '', disabled: false},
            task: {value: '', stat: false, msg: '', disabled: false},
            date: {value: '', stat: false, msg: '', disabled: false},
            subtask: {
                toggled: false,
                list: [{value: '', stat: false, msg: '', disabled: false}]
            },
            files: [
                // {value: null, object: null, name: 'default_avatar', type: 'default', updated: false, size: 0, stat: false, msg: ''}
            ]
        }
    })

    return {
        tabList: {data: tabList, set: setTabList},
        tasks: {data: tasks, set: setTask},
        form: {data: form, set: setForm},
    }
}