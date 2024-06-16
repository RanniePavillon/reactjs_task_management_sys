import { Menu, MenuItem, Box } from '@mui/material';
import { Logout as ILogout } from "@mui/icons-material"

export const MenuProfile = ({UMAnchor, setUMAnchor, __SESSION, history}) => {

    const logoutHandler = async () => {
        localStorage.removeItem('tms_app_session')
        __SESSION.set(null)
        history.push(`/auth/login`)
    }

    const closeMenuHandler = () => {
        setUMAnchor(null)
    }
    
    return ( 
        <Menu
            onClose={closeMenuHandler}
            onClick={closeMenuHandler}
            anchorEl={UMAnchor}
            open={Boolean(UMAnchor)}
            autoFocus={false}
            PaperProps={{
                elevation: 1,
                sx: {
                    minWidth:"150px",
                    minHeight:'50px',
                    bgcolor:"#FFFFFF",
                    mt:"15px",
                    padding:"16px 0px 16px 0px",
                    borderRadius: '6px',
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem sx={{height:'30px', px:'8px !important', py:'0px !important'}} onClick={(e)=>logoutHandler(e)}>
                <Box fontWeight={400} fontSize={14} lineHeight="16px" color="#283745" display="flex" alignItems="center" gap={1}><ILogout sx={{fontSize: 14}} />Logout</Box>
            </MenuItem>
        </Menu>
    );
}