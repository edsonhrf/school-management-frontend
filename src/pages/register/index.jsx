import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Layout from "../../layouts/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      enrollmentNumber: "202300002",
      email: "edsonhrf@gmail.com",
      name: "Edson Henrique Ramos Figueiredo",
      password: "Password123!",
      confirmPassword: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      enrollmentNumber: Yup.number()
        .max(999999999)
        .required("Enrollment number is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
      confirmPassword: Yup.string().max(255).required("Password is required"),
      name: Yup.string().max(255).required("Name is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        if (formik.values.password !== formik.values.confirmPassword) {
          formik.setErrors({
            confirmPassword: "Passwords don't match!",
            password: "Passwords don't match!",
          });
          return;
        }

        const response = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast.success(
            "User created successfully! Use your email or enrollment number and your password to login!"
          );
          resetForm();
        } else {
          const data = await response.json();
          if (data.error.includes("enrollment number already exists")) {
            toast.error("A user with this enrollment number already exists!");
          } else if (data.error.includes("Enrollment number not found")){
            toast.error("Enrollment number not found in the institution!");
          }
          else {
            toast.error(
              "Registration failed! Please consult logs for details!"
            );
          }
        }
      } catch (error) {
        console.error("Request error: ", error);
      }
    },
  });

  return (
    <>
      {/* <head>
        <title>Login | Devias Kit</title>
      </head> */}
      <Layout>
        <Box
          sx={{
            backgroundColor: "#e89746",
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            height: "100%",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              maxWidth: 550,
              px: 3,
              py: "100px",
              width: "100%",
            }}
          >
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4" color="primary">
                  Register
                </Typography>
                <Typography color="primary" variant="body2">
                  Already have an account? &nbsp;
                  <Link
                    // component={NextLink}
                    href="/login"
                    underline="hover"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    Log in
                  </Link>
                </Typography>
              </Stack>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  {/* <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.name}
                  /> */}
                  <TextField
                    error={
                      !!(
                        formik.touched.enrollmentNumber &&
                        formik.errors.enrollmentNumber
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.enrollmentNumber &&
                      formik.errors.enrollmentNumber
                    }
                    label="Enrollment Number"
                    name="enrollmentNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="number"
                    value={formik.values.enrollmentNumber}
                  />
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowPassword}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label="toggle password visibility"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    error={
                      !!(
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    label="Confirm Password"
                    name="confirmPassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type={showConfirmPassword ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label="toggle confirm password visibility"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                {/* <FormHelperText sx={{ mt: 1 }}>
                  Optionally you can skip.
                </FormHelperText> */}
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                {/* <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  // onClick={handleSkip}
                >
                  Skip authentication
                </Button> */}
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    You should use your <b>name</b>, <b>email</b> and{" "}
                    <b>password</b> to register in the app.
                  </div>
                </Alert>
              </form>
            </div>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Register;
