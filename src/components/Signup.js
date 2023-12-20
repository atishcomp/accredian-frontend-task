import React from 'react'
import Box from '@mui/material/Box';
import {useState} from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import './Signup.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

    const [values,setValues]=useState({
        id:Date.now(),
        username:'',
        email:'',
        password:''
    })

    const [confirmpassword,setConfirmpassword]=useState('')


      function signupuser(){
        if(values.username==''||values.password=='',values.email=='',confirmpassword==''){
            toast.error("Fill All Details",{
                position:'top-center'
             }) 
        
        }else{
            

             if(values.password==confirmpassword){
                console.log("SIGNUP")
                console.log(values)
                axios.post("http://localhost:8081/signup",values)
                .then(res=>{
                    try {
                        if(res.data.code=="ER_DUP_ENTRY"){
                            toast.error("User Already Exists",{
                                position:'top-center'
                             })
                             
                        }else{
                            toast.success("User Created Successfully",{
                                position:'top-center'
                             })
                        }
                    } catch (error) {
                        toast.error("Some Error Occurred",{
                            position:'top-center'
                         })
                    }
                    console.log(res)
                })
                .catch(err=>console.log(err))
              }else{
                toast.error("Password and Confirm password should be same",{
                    position:'top-center'
                 })
              }
        }
      

       
      }

  return (
    <div className="signup">
     <div className='full_screen_login'>
  
  <div className='login_area'>
      <div className='login_images'>
      <h1 style={{color:'skyblue',position:'absolute',margin:'auto',marginTop:200,marginLeft:80}}>Accredian Signup</h1>
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
   
    <TextField id="outlined-basic" type='text' label="Email" variant="outlined" onChange={e=>setValues({...values,email: e.target.value})}/>
    
    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={e=>setValues({...values,password: e.target.value})} />
    
    <TextField id="outlined-basic" type="password" label="Confirm Password" variant="outlined" onChange={(e)=>setConfirmpassword(e.target.value)} />
  </Box>
  <button className='signup_button' onClick={signupuser}>Sign Up</button>
  <div className='login_page'>Already a user? <Link style={{textDecoration:'none',color:'white'}} to="/"><span style={{color:'blue',fontWeight:'bold'}}>Login</span></Link></div>
      </div>
  </div>
  </div>
  <div className='login_mobile'>
  <h1 style={{color:'skyblue',position:'absolute',margin:'auto',marginTop:100,marginLeft:80}}>Accredian Signup</h1>
  <div className='mobile_signup_bars'>

  <TextField id="outlined-basic" type='text' label="Username" variant="outlined" onChange={e=>setValues({...values,username: e.target.value})} style={{marginTop:20,height:80,width:'90%',marginLeft:'5%'}}/>
  
  <TextField id="outlined-basic" type='text' label="Email" variant="outlined" onChange={e=>setValues({...values,email: e.target.value})} style={{marginTop:0,height:80,width:'90%',marginLeft:'5%'}}/>

    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={e=>setValues({...values,password: e.target.value})} style={{width:'90%',marginLeft:'5%'}}/>

    <TextField id="outlined-basic" type="password" label="Confirm Password" variant="outlined" onChange={(e)=>setConfirmpassword(e.target.value)} style={{width:'90%',marginLeft:'5%',marginTop:20}}/>

   

    <button className='signup_button' onClick={signupuser}>Sign Up</button>
  <div className='signup_page'>Already a user? <Link style={{textDecoration:'none',color:'white'}} to="/"> <span style={{color:'blue',fontWeight:'bold'}}>Login</span></Link></div>
  </div>
  

  </div>
  <ToastContainer/>
    </div>
  )
}

export default Signup
