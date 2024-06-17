import { Box, Container, Skeleton, useMediaQuery } from "@mui/material"
import { TLogo } from "../core/Icons"
import { Link } from "react-router-dom"
import BG5 from "../assets/images/core/dlist.png"
import BG6 from "../assets/images/core/mlist.png"
import BG7 from "../assets/images/core/dview.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const LandingPage = () => {
    const smdevice = useMediaQuery('(max-width:800px)');
    const xsdevice = useMediaQuery('(max-width:460px)');
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
                            <Box component={Link} to="/auth/registration" bgcolor="#6161FF" borderRadius={5} width="130px" height="32px" display="flex" alignItems="center" justifyContent="center" color="#FFFFFF">Get Started<ArrowRightAltIcon/></Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box width="100%" height="100%">
                <Container sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Box display="flex" alignItems="center" width="100%" height="100%" borderRadius={4}>
                        <Box height="100%" width={smdevice ? "100%":"50%"} display="flex" flexDirection="column">
                            <Box minHeight="150px" display={smdevice ? 'none' : 'block'} />
                            <Box textAlign="center" height="100%" width="100%" display="flex" flexDirection="column" gap={5}>
                                <Box width="100%" display="flex" flexDirection="column" gap={3}>
                                    <Box fontSize={40} fontWeight={800} lineHeight="100%" mt={smdevice ? 20 : 5} color="#313131">Effortlessly organize and prioritize tasks to achieve more daily</Box>
                                    <Box fontSize={16} fontWeight={300}> Experience the power of seamless task management designed to keep you on track and in control.</Box>
                                </Box>
                                <Box fontSize={13} width="100%" display="flex" alignItems="center" justifyContent="center">
                                    <Box component={Link} to="/auth/registration" bgcolor="#6161FF" borderRadius={5} width="130px" height="32px" display="flex" alignItems="center" justifyContent="center" color="#FFFFFF">Get Started<ArrowRightAltIcon/></Box>
                                </Box>
                            </Box>
                            {!xsdevice && (
                                <Box width="100%" display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                                    <Box component="img" src={BG6} alt="img" sx={{height:'150px',  width: '150px'}}/>
                                    <Box component="img" src={BG5} alt="img" sx={{height:'150px',  width: '150px'}}/>
                                    <Box component="img" src={BG7} alt="img" sx={{height:'150px',  width: '150px'}}/>
                                </Box>
                            )}
                            
                        </Box>
                        <Box width="30px" display={smdevice ? 'none' : 'block'}/>
                        <Box width="50%" height="100%" bgcolor="#E2EDE7" display={smdevice ? 'none' : 'block'}>
                            <Box height="100%" display="flex" flexDirection="column" gap={3} p={3}>
                                <Box display="flex" flexDirection="column" gap={3} height="100%" bgcolor="#fff" borderRadius={4} p={3}>
                                    <Box display="flex" justifyContent="space-between">
                                        <Box width="50%" display="flex" alignItems="center" gap={1}>
                                            <Skeleton variant="rectangular" sx={{height: '36px', width:'36px', borderRadius:3}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:2}} />
                                        </Box>
                                        <Skeleton variant="rectangular" sx={{height: '24px', width:'24px', borderRadius:3}} />
                                    </Box>
                                    <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:1}} />
                                    <Box width="100%" display="flex" gap={1}>
                                        <Box width="100%" display="flex" gap={.5}>
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'10%'}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'10%'}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'10%'}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'10%'}} />
                                        </Box>
                                        <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:1}} />
                                    </Box>
                                    <Box width="100%" display="flex" justifyContent="flex-end" gap={1}>
                                        <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:1}} />
                                        <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:1}} />
                                    </Box>
                                    <Skeleton variant="rectangular" sx={{height: '15px', width:'100%', borderRadius:1}} />
                                    <Skeleton variant="rectangular" sx={{height: '15px', width:'100%', borderRadius:1}} />
                                    <Skeleton variant="rectangular" sx={{height: '15px', width:'100%', borderRadius:1}} />
                                    <Skeleton variant="rectangular" sx={{height: '15px', width:'100%', borderRadius:1}} />
                                </Box>
                                <Box width="100%" display="flex" gap={3} height="100%">
                                    <Box width="50%" display="flex" flexDirection="column" gap={3} height="100%" bgcolor="#fff" borderRadius={4} p={3}>
                                        <Box display="flex" justifyContent="space-between">
                                            <Box width="50%" display="flex" alignItems="center" gap={1}>
                                                <Skeleton variant="rectangular" sx={{height: '24px', width:'24px', borderRadius:3}} />
                                                <Skeleton variant="rectangular" sx={{height: '15px', width:'40%', borderRadius:2}} />
                                            </Box>
                                            <Skeleton variant="rectangular" sx={{height: '18px', width:'18px', borderRadius:3}} />
                                        </Box>
                                        <Box width="100%" display="flex" justifyContent="space-between">
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:1}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'20%', borderRadius:1}} />
                                        </Box>
                                        <Box width="100%" display="flex" gap={.5}>
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'100%'}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'100%'}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'100%'}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'100%'}} />
                                        </Box>
                                        <Box width="100%" display="flex" justifyContent="flex-end" gap={1}>
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'50%', borderRadius:1}} />
                                            <Skeleton variant="rectangular" sx={{height: '15px', width:'50%', borderRadius:1}} />
                                        </Box>
                                        <Skeleton variant="rectangular" sx={{height: '30px', width:'100%', borderRadius:1}} />
                                        <Skeleton variant="rectangular" sx={{height: '30px', width:'100%', borderRadius:1}} />
                                        <Skeleton variant="rectangular" sx={{height: '30px', width:'100%', borderRadius:1}} />
                                    </Box>
                                    <Box width="50%" display="flex" flexDirection="column" gap={3} height="100%">
                                        <Box height="50%" display="flex" flexDirection="column" gap={1} bgcolor="#fff" borderRadius={4} p={3}>
                                            <Box width="100%" display="flex" alignItems="center" gap={1}>
                                                <Skeleton variant="rectangular" sx={{height: '36px', minWidth:'36px', borderRadius:10}} />
                                                <Skeleton variant="rectangular" sx={{height: '15px', width:'100%', borderRadius:2}} />
                                            </Box>
                                            <Skeleton variant="rectangular" sx={{height: '100%', width:'100%', borderRadius:2}} />
                                        </Box>
                                        <Box height="50%" display="flex" flexDirection="column" gap={1} bgcolor="#fff" borderRadius={4} p={3}>
                                            <Skeleton variant="rectangular" sx={{height: '100%', width:'100%', borderRadius:2}} />
                                            <Box width="100%" display="flex" alignItems="center" gap={1}>
                                                <Skeleton variant="rectangular" sx={{height: '30px', width:'50%', borderRadius:2}} />
                                                <Skeleton variant="rectangular" sx={{height: '30px', width:'50%', borderRadius:2}} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}