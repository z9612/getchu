/** 알림 창 스낵바
 * 사용하려면 다음 인자들을 상위 컴포넌트에서 선언
 * const [open, setOpen] = useState(false)
 * 
 * 그 후 AlertSnackbar에 인자들 전달
 * open, setOpen, severity, message
 * (message = '')
 * (severity = 'error' ('warning', 'info' 등 가능))
 * 
 * 알림 조건 만족 시 setOpen(true) 실행
 */

import { forwardRef } from 'react'
import { 
  Snackbar,
  Alert as MuiAlert
} from '@mui/material'

const Alert = forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert 
      elevation={6} 
      ref={ref} 
      variant="filled" 
      {...props} 
    />
  );
});

const AlertSnackbar = ({ 
  severity, 
  message,
  open,
  setOpen 
}) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
      <Snackbar 
        open={open} 
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        autoHideDuration={3000} 
        sx={{marginBottom: '100px'}}
        onClose={handleClose}
      >
        <Alert severity={severity}>{ message }</Alert>
      </Snackbar>
    // <Stack spacing={2} sx={{ width: '100%' }}>
    //   <Button variant="outlined" onClick={handleClick}>
    //     Open success snackbar
    //   </Button>
    //   {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    //     This is a success message!
    //   </Alert>
    //   <Alert severity="warning">This is a warning message!</Alert>
    //   <Alert severity="info">This is an information message!</Alert>
    //   <Alert severity="success">This is a success message!</Alert> */}
    // </Stack>
  );
}

export default AlertSnackbar