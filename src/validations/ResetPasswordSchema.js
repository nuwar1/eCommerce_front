import * as yup from "yup";

export const ResetPasswordSchema = yup.object({
  email: yup.string().email("Invalid Email Format").required("Email Is Required"),
  code: yup.string().required("Reset code is required"),
  newPassword: yup.string().required("Password Is Required")
    .min(8, "Password must contain at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%&?]/, "Password must contain at least one special character"),
});