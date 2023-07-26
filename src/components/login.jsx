import React,{useState,useEffect} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { TextField, Button ,Box, Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = (props)=>{
    const [userName,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const [error,setError]=useState({error:false,message:""})
    const Navigate = useNavigate();

    const handleLogin = ()=>{
        if(!userName || !password){
            setError({error:true,message:"Incomplete Data"});
           
            return;
        }if(userName!=="Kundan" || password!=="123456"){
            setError({error:true,message:"Wrong Email or Password"});
            alert("Wrong username and password")
            return;
        }
        Navigate('/dash-board');
    }
    return <><div
    style={{
      width: "320px",
      padding: "2em",
      margin: "1em",
      borderRadius: "5px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

    }}
  ><h3>Login</h3>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    
    <FormControl fullWidth>
      <TextField id="username" label="username" variant="outlined" onChange={(event, value) =>{setUsername(event.target.value)}}/>
      
    </FormControl>
    <FormControl fullWidth>
      <TextField id="password"  label="password" variant="outlined" onChange={(event,value)=>{setPassword(event.target.value)}} />
      
    </FormControl>

    <FormControl fullWidth>
      <Button variant="contained" on onClick={handleLogin}>Login</Button>
    </FormControl>
    </Box>
  </div></>;
}

export default Login;