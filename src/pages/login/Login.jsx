import { Box, Typography, TextField, Button, Container } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import useLogin from '../../hooks/useLogin';

export default function Login() {
  const { register, handleSubmit } = useForm({})
  const {loginMutation, serverErrors} = useLogin();
  const LoginForm = async (values) => {
    loginMutation.mutateAsync(values);
  }
  return (
    <Container maxWidth="md">
      <Box className="register-form">
        <Typography variant='h3' component="h1" sx={{ textAlign: "center", mt: 5 }}>Sign In</Typography>
        <Box onSubmit={handleSubmit(LoginForm)} component={"form"} sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
          <TextField label="Email" {...register('email')} variant="outlined" />
          <TextField label="Password" {...register('password')} variant="outlined" />
          <Link component={RouterLink} to="/auth/send-code/" sx={{
            color: "#000", textDecorationColor: "#000",
            "&:hover": {
              color: "#d52345ff",
              textDecorationColor: "#d52345",}}}>Forgot your password?</Link>
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 2}}>
            <Button variant='contained' type="submit" fullWidth size='large' sx={{
              py: 3,
              fontSize: "1.4rem",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#d52345",
              }}}>Sign In</Button>
            <Button component={RouterLink} to="/auth/register" variant='outlined' fullWidth size='large' sx={{
              py: 3,
              fontSize: "1.4rem",
              borderColor: "#000",
              color: "#000",
              "&:hover": {
                color: "#fff",
                borderColor: "#000",
                backgroundColor: "#000",
              },
            }}>Create Account</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
