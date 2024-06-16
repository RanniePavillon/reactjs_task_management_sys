import { Avatar, Box, Container, IconButton, Tooltip } from "@mui/material"
import { TLogo } from "../../../core/Icons"
import { useHistory } from "react-router-dom"
import { useContext, useState } from "react"
import { AppContext } from "../../../core/contexts/AppContext"
import { MenuProfile } from "./Menu"

export const TNavigation = () => {
    const { app_state } = useContext(AppContext)
    const { __SESSION } = {...app_state}
    const [UMAnchor, setUMAnchor] = useState(null);

    const history = useHistory()
    
    const UMHandler = (e) => {
        e.preventDefault()
        setUMAnchor(e.currentTarget);
    }

    return (
        <Box display="flex" alignItems="center" width="100%" bgcolor="#fff" height={60} sx={{boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.12)', zIndex: 1201}}>
            <Container>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap={1}>
                        <TLogo width={30} height={30} />
                        <Box fontSize={14} fontWeight={600}>Task Management</Box>
                    </Box>
                    <Tooltip title={'Profile'} sx={{margin: '0 14px 0 14px'}}>
                        <IconButton onClick={(e)=>UMHandler(e)} sx={{padding:'4px !important', bgcolor: '#FFFFFF', borderRadius:'8px'}}>
                            <Avatar variant='circle'  sx={{width:24 , height: 24}} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <MenuProfile UMAnchor={UMAnchor} setUMAnchor={setUMAnchor} __SESSION={__SESSION} history={history}/>
            </Container>
        </Box>
    )
}