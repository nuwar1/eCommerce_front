import { Box, Typography, TextField, Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'


export default function Register() {
  const {register,handleSubmit} = useForm({})
  const registerForm = async(values)=>{
    try{
      const response = await axios.post("https://knowledgeshop.runasp.net/api/Auth/Account/Register",values);
    }catch(err){
    }
  }
  return (
    <Container maxWidth="md">
      <Box className="register-form">
        <Typography variant='h3' component="h1" sx={{ textAlign: "center", mt: 5 }}>Create Account</Typography>
        <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
          <TextField label="User Name" {...register('userName')} variant="outlined" />
          <TextField label="Full Name" {...register('fullName')} variant="outlined" />
          <TextField label="Email" {...register('email')} variant="outlined" />
          <TextField label="Password" {...register('password')} variant="outlined" />
          <TextField label="Phone Number" {...register('phoneNumber')} variant="outlined" />
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt:2}}>
            <Button variant='contained' type="submit" fullWidth size='large' sx={{
              py: 4,
              fontSize: "1.4rem",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#d52345",
              },
            }}>Create Account</Button>
            <Button component={Link} to="/auth/login" variant='outlined' fullWidth size='large' sx={{
              py: 4,
              fontSize: "1.4rem",
              borderColor: "#000",
              color: "#000",
              "&:hover": {
                color:"#fff",
                borderColor: "#000",
                backgroundColor: "#000",
              },
            }}>Login</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
