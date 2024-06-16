import { Box, Button, Modal, Slide } from "@mui/material"
import { SnakeLoader } from "../../../core/loaders/SnakeLoader"
import remove from "../../../assets/images/icons/remove.png"
import restore from "../../../assets/images/icons/restore.png"

export const Confirmation = ({form, submitHandler, confirmHandler, updateStatHandler }) => {
    const content = {
        add: {msg: 'Add this task?', handler: submitHandler, status: 'add'},
        update: {msg: 'Update this task?', handler: submitHandler, status: 'update'},
        ip: {msg: 'Move this task to In progress?', handler: updateStatHandler, status: 2},
        complete: {msg: 'Mark this task as complete?', handler: updateStatHandler, status: 3},
        remove: {msg: 'Remove this task?', handler: updateStatHandler, status: 'remove'},
        restore: {msg: 'Restore this task?', handler: updateStatHandler, status: 'restore'},
        premove: {msg: 'Permanently remove this task?', handler: updateStatHandler, status: 'premove'},
    }

    return (
        <Modal open={form.data.confirmation.toggled} sx={{zIndex:1304}} className="noutlined">
            <Slide in={form.data.confirmation.toggled} direction="up" className="noutlined">
                <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
                    <Box height="308px" width="343px" bgcolor="#FFFFFF" borderRadius="6px" display="flex" flexDirection="column" mx={2}>
                        {form.data.confirmation.type === 'remove' ? 
                            <img src={remove} alt={remove} width="100%"/>  
                        :
                            <img src={restore} alt={restore} width="100%"/>  
                        }
                        <Box p="34px 24px 24px 24px" height="100%" width="100%" display="flex" flexDirection="column">
                        <Box height="100%" width="100%" >
                            <Box fontSize={20} fontWeight={600} lineHeight="16px">{form.data.confirmation.type !== '' && content[form.data.confirmation.type].msg}</Box>
                        </Box>
                            <Box display="flex" alignItems="center" minHeight={40}>
                                <Button fullWidth variant="outlined"  onClick={() => confirmHandler(false, '')}
                                    sx={{mr: 1, height: 40, borderRadius: '6px', bgcolor: '#E2EDE7', '&:hover':{bgcolor: '#A4CAB4'} }}>
                                        No
                                </Button>
                                <Button fullWidth variant='contained' disableElevation  onClick={() => content[form.data.confirmation.type].handler(content[form.data.confirmation.type].status)}
                                     sx={{height: 40, borderRadius: '6px',  }}
                                >
                                    {form.data.submitted ? <SnakeLoader size="5px" bg="#fff" distance="2px" /> : 'Yes'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slide>
        </Modal>
    )
}