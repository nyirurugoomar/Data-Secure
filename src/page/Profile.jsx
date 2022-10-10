import React from 'react'
import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Profile = () => {
  
    const [name, setName] = React.useState('');
    const handleChange = (event) => {
      setName(event.target.value);
    };
    return (
      <>  
        <Sidebar/>
        <div className='profile'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Firstname:"
          value={name}
          onChange={handleChange}
        />
        
        <TextField
          id="outlined-lastname"
          label="Lastname:"
          defaultValue=""
        />
        <br/>
        <TextField
          id="outlined-age"
          label="Age:"
          defaultValue=""
        />
        
        <TextField
          id="outlined-tel"
          label="Tel:"
          
          defaultValue=""
        />
        
    </Box>

    
    
        </div>
      </>  
    )
}

export default Profile