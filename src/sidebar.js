import React from 'react';
import cashwise from './cashwise.png';
import './sidebar.css';
import Paper from '@mui/material/Paper';
import { Icon, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderIcon from '@mui/icons-material/Folder';

function Sidebar  (){
    const menuItems = [
        {name: 'Document Generation',id:'',icon:CreateNewFolderIcon},
        {name: 'Corporate Documents',id:'',icon:FolderSharedIcon},
        {name: 'Filing Documents',id:'',icon:FolderIcon},
    ];
    return (
        <div className='sidebar'>
            <div>
                <img src={cashwise} className="Cashwise-logo" alt="cashwise" style={{marginTop:'20px',marginLeft:'20px'}}/>
            </div>
            <div>
                <Paper style={{backgroundColor:'rgba(250,250,250,0.2)' ,
                display:'flex',flexDirection:'row',width:'300px',height:'92px',marginLeft:'10px',marginTop:'20px'}} >
                    <Paper style={{height:'42px',width:'42px',marginLeft:'10px',marginTop:'20px'}}>
                        <Typography variant='h4' color='#194BF7 '>R</Typography>
                    </Paper>
                    
                    <div style={{display:'flex',flexDirection:'column',marginTop:'20px',marginLeft:'10px'}}>
                    <Typography variant='subtitle1' fontSize={'0.8rem'} color='white'>Rajdeep Sarkar</Typography>
                    <Typography variant='subtitle1' fontSize={'0.8rem'}  color='white'>rajdeepsarkar999@gmail.com</Typography>
                  
                    </div>
                    <div style={{marginTop:'20px',marginLeft:'auto',marginRight:3}}>
                        <Paper style={{height:'25px',width:'25px',borderRadius:'50%',
                        backgroundColor:'rgba(250,250,250,0.2)'}}>
                        <ChevronRightIcon sx={{color:'white'}}/>
                        </Paper>
                     
                      </div>
                </Paper>
                <div>
                {menuItems.map((i)=>{
                    const Icon1 = i.icon
                    return(
                        <>
                        
                    {/* <Icon icon ={i.icon} style={{color:'white'}}/> */}
                    <div style={{display:'flex',flexDirection:'row',marginLeft:'30px',marginTop:'20px'}}>
                    <Icon1 style={{color:'white',marginRight:'20px'}}/>
                    <Typography variant='subtitle1' fontSize={'0.8rem'} color='white'>{i.name}</Typography>
                    </div>
                    </>)
                })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;