import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useSendCode from "../../hooks/useSendCode";


const SendCodeSchema = yup.object({
  email: yup.string().email("Invalid Email Format").required("Email Is Required"),
});

export default function SendCode() {
  const { serverErrors, sendCodeMutation } = useSendCode();

  const { register, handleSubmit,
    formState: { errors, isSubmitting } } = useForm({
      resolver: yupResolver(SendCodeSchema),
      mode: "onBlur",
    });

  const sendCodeForm = async (values) => {
    sendCodeMutation.mutateAsync(values);
  };

  return (
    <Container maxWidth="md">
      <Box className="register-form">
        <Typography variant="h3" component="h1" sx={{ textAlign: "center", mt: 5 }}>
          Reset Your Password
        </Typography>

        {serverErrors.length > 0 ? serverErrors.map((err) => (
          <Typography sx={{ color: "red", mt: 2 }}>
            {err}
          </Typography>))
          : null}

        <Box onSubmit={handleSubmit(sendCodeForm)} component={"form"}
          sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5 }}>
          <TextField label="Email" {...register("email")} variant="outlined"
            error={errors.email} helperText={errors.email?.message} />

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", alignItems: "center", mt: 2 }}>
            <Button variant="contained" type="submit" disabled={isSubmitting} fullWidth
              size="large" sx={{
                py: 3,
                fontSize: "1.4rem",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#d52345" },
              }}>
              {isSubmitting ? <CircularProgress /> : "Send Code"}
            </Button>

            <Button component={Link} to="/auth/login" fullWidth sx={{
              py: 3,
              fontSize: "1.4rem",
              color: "#666060ff",
              textDecoration: "underline",
              "&:hover": {
                color: "#d52345"
              },
            }}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

