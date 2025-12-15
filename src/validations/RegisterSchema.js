import * as yup from "yup"

export const RegisterSchema = yup.object({
  fullName: yup.string().required("Full Name is Required"),
  email: yup.string().email("Invalid Email Format").required("Email Is Required"),
  userName: yup.string().matches(/^[a-zA-Z0-9._-]+$/, "Invalid Username")
  .min(4, "Username must contain at least 4 Characters").required("Username Is Required"),
  phoneNumber: yup.string().required("Phone Number Is Required"),
  password: yup.string().required("Password Is Required").min(8, "Password must contain at least 8 characters")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[!@#$%&?]/, "Password must contain at least one special character")
})
