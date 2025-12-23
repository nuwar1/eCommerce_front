import { Box, Typography, TextField, Button, Container, CircularProgress } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../../validations/RegisterSchema'
import useRegister from '../../hooks/useRegister'

export default function Register() {

  const {register,handleSubmit, formState: { errors, isSubmitting }} = useForm({
     resolver: yupResolver(RegisterSchema),
     mode: "onBlur"
  })
  const {registerMutation, serverErrors} = useRegister();
  const registerForm = async(values)=>{
    registerMutation.mutateAsync(values);
  }

  return (
    <Container maxWidth="md">
      <Box className="register-form">
        <Typography variant='h3' component="h1" sx={{ textAlign: "center", mt: 5 }}>Create Account</Typography>
        {serverErrors.length > 0 ? serverErrors.map((err)=>(
          <Typography sx={{color:"red"}}>{err}</Typography>
        ))
        :null}
        <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
          <TextField label="Username" {...register('userName')} variant="outlined" error={errors.userName} helperText={errors.userName?.message}/>
          <TextField label="Full Name" {...register('fullName')} variant="outlined" error={errors.fullName} helperText={errors.fullName?.message}/>
          <TextField label="Email" {...register('email')} variant="outlined" error={errors.email} helperText={errors.email?.message}/>
          <TextField label="Password" {...register('password')} variant="outlined" error={errors.password} helperText={errors.password?.message}/>
          <TextField label="Phone Number" {...register('phoneNumber')} variant="outlined" error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt:2}}>
            <Button variant='contained' type="submit" disabled={isSubmitting} fullWidth size='large' sx={{
              py: 3,
              fontSize: "1.4rem",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#d52345",
              },
            }}>{isSubmitting ? <CircularProgress/>:"Create Account"}</Button>
            <Button component={Link} to="/auth/login" variant='outlined' fullWidth size='large' sx={{
              py: 3,
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
