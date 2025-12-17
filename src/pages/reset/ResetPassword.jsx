import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "../../validations/ResetPasswordSchema";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../API/axiosInstance";


export default function ResetPassword() {
  const [serverErrors, setServerErrors] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    mode: "onBlur"
  });

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const resetPasswordForm = async (values) => {
    try {
      const response = await axiosInstance.patch("/Auth/Account/ResetPassword", values);
      setSuccess(true);
      setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  };

  return (
    <Container maxWidth="md">
      <Box className="register-form">
        <Typography variant="h3" component="h1" sx={{ textAlign: "center", mt: 5 }}>
          Reset Password
        </Typography>

        {serverErrors.length > 0 ? serverErrors.map((err) => (
          <Typography sx={{ color: "red", mt: 2 }}>{err}</Typography>
        ))
          : null}

        <Box onSubmit={handleSubmit(resetPasswordForm)} component={"form"}
          sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
          <TextField label="Email" {...register("email")} variant="outlined"
            error={errors.email} helperText={errors.email?.message} />

          <TextField label="Code" {...register("code")} variant="outlined"
            error={errors.code} helperText={errors.code?.message} />

          <TextField label="New Password" {...register("newPassword")} variant="outlined"
            error={errors.newPassword} helperText={errors.newPassword?.message} />

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 2 }}>
            <Button variant="contained" type="submit"
              disabled={isSubmitting} fullWidth
              size="large" sx={{
                py: 3,
                fontSize: "1.4rem",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#d52345" },
              }}>
              {isSubmitting ? <CircularProgress /> : "Reset Password"}</Button>

            <Button component={Link} to="/auth/login" variant="outlined"
              fullWidth size="large"
              sx={{
                py: 3,
                fontSize: "1.4rem",
                borderColor: "#000",
                color: "#000",
                "&:hover": {
                  color: "#fff",
                  borderColor: "#000",
                  backgroundColor: "#000",
                },
              }}>
              Login</Button>
          </Box>

          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Didn’t get a code?
            <Link to="/auth/send-code" style={{ color: "#000" }}>
              Send again
            </Link>
          </Typography>
        </Box>
        <Snackbar
          open={success}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Password reset successfully.
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

