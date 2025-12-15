import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


const SendCodeSchema = yup.object({
  email: yup.string().email("Invalid Email Format").required("Email Is Required"),
});

export default function SendCode() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);

  const {register, handleSubmit,
    formState: { errors, isSubmitting }} = useForm({
    resolver: yupResolver(SendCodeSchema),
    mode: "onBlur",
  });

  const sendCodeForm = async (values) => {
    setServerErrors([]);
    try {
      await axios.post("https://knowledgeshop.runasp.net/api/Auth/Account/SendCode", values);
      navigate("/auth/reset-password")
    } catch (err) {
      setServerErrors(err.response.data.message);
    }
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
            error={errors.email} helperText={errors.email?.message}/>

          <Box sx={{ display: "flex", gap: 3, justifyContent: "center", alignItems:"center", mt: 2 }}>
            <Button variant="contained" type="submit" disabled={isSubmitting} fullWidth
              size="large" sx={{
                py: 3,
                fontSize: "1.4rem",
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#d52345" },
              }}>
              {isSubmitting ? <CircularProgress/> : "Send Code"}
            </Button>

            <Button component={Link} to="/auth/login" fullWidth sx={{
                py: 3,
                fontSize: "1.4rem",
                color: "#666060ff",
                textDecoration: "underline",
                "&:hover": {
                  color: "#d52345"},
              }}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

