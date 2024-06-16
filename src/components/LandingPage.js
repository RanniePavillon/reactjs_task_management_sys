import { Box, Container, useMediaQuery } from "@mui/material"
import { TLogo } from "../core/Icons"
import { Link } from "react-router-dom"
import BG5 from "../assets/images/core/dlist.png"
import BG6 from "../assets/images/core/mlist.png"
import BG7 from "../assets/images/core/dview.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// LANDING PAGE FOR UNAUTHENTICATED USERS
export const LandingPage = () => {
    const smdevice = useMediaQuery('(max-width:658px)');
    return (
        <Box width="100%" height="100%" display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" width="100%" bgcolor="#fff" height={60} sx={{zIndex: 1201}}>
                <Container>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center" gap={1}>
                            <TLogo width={30} height={30} />
                            {!smdevice && (<Box fontSize={14} fontWeight={600}>Task Management</Box>)}
                        </Box>
                        <Box display="flex" gap={2} fontWeight={300} fontSize={13}>
                            <Box component={Link} to="/auth/login" color="#535768" py={1}>Login</Box>
                            <Box component={Link} to="/auth/registration" bgcolor="#6161FF" borderRadius={5} width="130px" height="40px" display="flex" alignItems="center" justifyContent="center" color="#FFFFFF">Get Started<ArrowRightAltIcon/></Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box width="100%" height="100%">
                <Container sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Box display="flex" alignItems="center" width="100%" height="100%" borderRadius={4}>
                        <Box width={smdevice ? '100%' : '50%'} textAlign="center" px={2}>
                            <Box fontSize={40} fontWeight={800} lineHeight="100%" mt={smdevice ? 20 : 5} color="#313131">Effortlessly organize and prioritize your tasks to achieve more each day </Box>
                            <Box mt={2} fontSize={16} fontWeight={300}> Experience the power of seamless task management designed to keep you on track and in control.</Box>
                            <Box pt={2} fontSize={13} width="100%" display="flex" alignItems="center" justifyContent="center">
                                <Box component={Link} to="/auth/registration" bgcolor="#6161FF" borderRadius={5} width="130px" height="40px" display="flex" alignItems="center" justifyContent="center" color="#FFFFFF">Get Started<ArrowRightAltIcon/></Box>
                            </Box>
                        </Box>
                        <Box width="50%" height="100%" bgcolor="#E2EDE7" display={smdevice ? 'none' : 'block'}>
                            <Box height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={3}>
                                <Box className="image-container">
                                    <img src={BG5} alt="First" className="image first-image" />
                                    <img src={BG6} alt="Second" className="image second-image" />
                                    <img src={BG7} alt="Second" className="image third-image" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}