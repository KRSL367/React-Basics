import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './index.css'

const App= ()=> {
  const [principle, setPrinciple] = useState(0)
  const [time, setTime] = useState(0)
  const [rate, setRate] = useState(0)
  const [si, setSi] = useState(0)

  const calculate = ()=>{
    setSi(principle*time*rate/100)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField onChange = {(event)=> setPrinciple(event.target.value)} id="filled-basic" label="Enter the Principle" variant="filled" />
      <TextField onChange = {(event)=> setTime(event.target.value)} id="filled-basic" label="Enter the Time" variant="filled" />
      <TextField onChange = {(event)=> setRate(event.target.value)} id="filled-basic" label="Enter the Rate" variant="filled" />
      <br></br><br/>
      <Button onClick={()=> calculate()} variant="outlined">Calcualte</Button>
      <br/><br/>
      <Typography variant="h6" gutterBottom>
        Simple Interest is : {si}
      </Typography>
    </div>
  );
}

export default App;
