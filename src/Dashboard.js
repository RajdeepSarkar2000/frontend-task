import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import './dashboard.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import Tooltip from '@mui/material/Tooltip';

function Dashboard(){
    return(
        <div className='dashboard' style={{display:'flex',flexDirection:'column',marginLeft:'30px',marginTop:'20px'}}>
            <div style={{display:'flex',flexDirection:'row',marginBottom:'15px',}}>
            <ChevronLeftIcon/><Typography ml={2}>Co-Workers</Typography></div>
            <Paper style={{height:'300px',width:'70%',marginBottom:'40px'}}>
                <Typography ml={4} mt={4}>Invite your co-workers to collaborate on Cashwise</Typography>
                <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'32px',marginBottom:'30px',marginTop:'20px'}}>
                <Paper style={{backgroundColor:'#e0e3e8',height:'50px',width:'400px'}}>
                <Typography ml={2} mt={2}>Email</Typography>    
                </Paper>
                <Paper style={{backgroundColor:'#e0e3e8',height:'50px',width:'140px',marginLeft:'20px'}}>
                  <Typography  ml={2} mt={2}> Admin</Typography>   
                </Paper>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'32px',marginBottom:'30px',marginTop:'20px'}}>
                <Paper style={{backgroundColor:'#e0e3e8',height:'50px',width:'400px'}}>
                   <Typography  ml={2} mt={2}>Email</Typography> 
                </Paper>
                <Paper style={{backgroundColor:'#e0e3e8',height:'50px',width:'140px',marginLeft:'20px'}}>
                   <Typography  ml={2} mt={2}>Admin</Typography>   
                </Paper>
                </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
                    <ControlPointIcon sx={{color:'blue'}}/><Typography>Add more</Typography>
                    <div style={{marginLeft:'auto',marginRight:'20px'}}>
                     <Button variant="contained">Send Invite</Button></div>
                </div>
               
            </Paper>

            <Paper style={{height:'300px',width:'70%'}}>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'30px',marginTop:'40px'}}>
                        <Typography sx={{fontWeight:600}}>Email</Typography>
                        <Typography mt={2} mb={2}>rajdeepsarkar999@gmail.com</Typography>
                        <Typography>rajdeepsarkar999@gmail.com</Typography>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'30px',marginTop:'40px'}}>
                        <Typography sx={{fontWeight:600}}>Roles</Typography>
                        <Typography  mt={2} mb={2}>Owner</Typography>
                        <Typography>Admin</Typography>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'30px',marginTop:'80px'}}>
                        <Tooltip title="Delete">
                        <DeleteIcon sx={{marginBottom:'16px'}}/></Tooltip>
                         <Tooltip title="Delete">
                        <DeleteIcon sx={{marginBottom:'16px'}}/></Tooltip>
                    </div>
                     <div style={{display:'flex',flexDirection:'column',marginLeft:'30px',marginTop:'80px'}}>
                        <Tooltip title="Resend Invite">
                        <ReplayIcon/></Tooltip>
                     </div>
                </div>
            </Paper>
             
        </div>
    )
}

export default Dashboard;