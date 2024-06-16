import { Box, Button, Divider, Typography } from "@mui/material"
import { TLogo } from "../../core/Icons"
import { SnakeLoader } from "../../core/loaders/SnakeLoader"
import moment from "moment"

export const ActiveList = ({ tab, list, previewHandler, smdevice, sxdevice }) => {
    return list !== null ? (
        list.length > 0 ? (
            sxdevice ? 
                <Box display="grid" gridTemplateColumns="repeat(auto-fill,minmax(200px,1fr))" gap="12px" px={2}>
                    {
                        list.map((v, i) => (
                            <Box key={i} component={Button} disableFocusRipple={true} minWidth="200px" borderRadius="6px" display="flex" flexDirection="column" py="8px" gap="4px" bgcolor="#FFF" sx={{cursor: 'pointer', ':hover':{ bgcolor: '#E2EDE7'}}} onClick={() => previewHandler(true, v)} >
                                <Box display="flex" alignItems="center" justifyContent="space-between" fontSize={14} width="100%" >
                                    <Box color="#517D6E">{moment(v.date).format('MMMM DD, YYYY')}</Box>
                                    <Box  color={v.status === 1 ? '#1976d2' : v.status === 2 ? '#ed6c02' : '#2e7d32'}>{v.status === 1 ? 'Todo' : v.status === 2 ? 'In Progress' : 'Completed'}</Box>
                                </Box>
                                <Divider sx={{width:'100%'}}/>
                                <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" gap="4px" color="#333">
                                    <Box fontWeight={600}>{v.title}</Box>
                                    <Box fontWeight={400} fontSize={12}>{v.task}</Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box> 
            :
                <Box display="flex" flexDirection="column" gap={1.5} sx={{'overflowY': 'auto'}}  pb={3}>
                    {
                        list.map((v, i) => (
                            <Box key={i} display="flex" textAlign="left" py="12px" px={6} bgcolor="#FFFFFF" borderRadius={2} sx={{cursor: 'pointer', ':hover':{ bgcolor: '#E2EDE7'}}} onClick={() => previewHandler(true, v)}>
                                <Typography fontWeight={600} noWrap width="30%">{v.title}</Typography>   
                                <Typography fontWeight={400} noWrap width={sxdevice ? '100%' : smdevice ? '85%' : '70%'}>{v.task}</Typography>   
                                <Typography textAlign="center" fontWeight={400} noWrap width="20%">{moment(v.date).format('MMMM DD, YYYY')}</Typography>
                                <Typography textAlign="center" fontWeight={600} noWrap width="20%" color={v.status === 1 ? 'primary.main' : v.status === 2 ? 'warning.main' : 'success.main'}>{v.status === 1 ? 'Todo' : v.status === 2 ? 'In Progress' : 'Completed'}</Typography>
                            </Box>
                        ))
                    }
                </Box>
        ) : (
            <Box height="100%" width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                No Task found.
            </Box>
        )
    ) : (
        <Box height="100%" width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <TLogo width={60} height={60} />
            <Box mt={4}>
                <SnakeLoader size={10} bg="#009E6A" distance="4px" />
            </Box>
        </Box>
    )
}