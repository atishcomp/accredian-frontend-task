import React from 'react'
import Box from '@mui/material/Box';
import {useState,useEffect} from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './Signup.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {


    const [confirmpassword,setConfirmpassword]=useState('')
    const [values,setValues]=useState({
        username:'',
        password:''
    })

     const loginuser=async()=>{
        console.log(values.username)
        console.log(values.password)
        if(values.username==''||values.password==''){
            toast.error("Fill all details",{
                position:'top-center'
             })
        }else{
            try {
                const result = await axios(`http://localhost:8081/login?username=${values.username}&&password=${values.password}`)
    
                console.log(result.data)
                const response = result.data.Message
                
                if(result.data.Message=="Login Successful"){
                 //here we can set the cookies, using generated token
                    toast.success("Logged in successfully",{
                        position:'top-center'
                     })
                }else{
                    toast.error(response,{
                        position:'top-center'
                     })
                }
                
             } catch (error) {
               console.log(error)  
             }
        }

         

        
     }

    return (
        <div className="signup">
         <div className='full_screen_login'>
      
      <div className='login_area'>
          <div className='login_images'>
          
           <h1 style={{color:'skyblue',position:'absolute',margin:'auto',marginTop:200,marginLeft:80}}>Accredian Login</h1>
          </div>
          <div className='login_form'>
    
          <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch'},
        }}
        noValidate
        autoComplete="off"
      >
       <TextField style={{marginTop:100}} id="outlined-basic" type="text" label="Username" variant="outlined" onChange={e=>setValues({...values,username: e.target.value})}/>
       
        
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={e=>setValues({...values,password: e.target.value})} />
        
    
      </Box>
      <button className='signup_button' onClick={loginuser}>Login</button>
      <div className='login_page'>Already a user? <Link style={{textDecoration:'none',color:'white'}} to="/signup"><span style={{color:'blue',fontWeight:'bold'}}>Signup</span></Link></div>
          </div>
      </div>
      </div>
      <div className='login_mobile'>
    
      <h1 style={{color:'skyblue',position:'absolute',margin:'auto',marginTop:100,marginLeft:80}}>Accredian Login</h1>
      <div className='mobile_signup_bars'>
    
      <TextField id="outlined-basic" type='text' label="Username" variant="outlined" onChange={e=>setValues({...values,username: e.target.value})} style={{marginTop:20,height:80,width:'90%',marginLeft:'5%'}}/>
      
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={e=>setValues({...values,password: e.target.value})} style={{width:'90%',marginLeft:'5%'}}/>
    
        <button className='signup_button' onClick={loginuser}>Login</button>
      <div className='signup_page'>Already a user? <Link style={{textDecoration:'none',color:'white'}} to="/signup"> <span style={{color:'blue',fontWeight:'bold'}}>Signup</span></Link></div>
      </div>
      
    
      </div>
      <ToastContainer/>
        </div>
      )
}

export default Login
