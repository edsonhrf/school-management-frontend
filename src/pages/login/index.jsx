import { useCallback, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  // FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Layout from "../../layouts/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [method, setMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleContinue = () => {
    navigate("/home");
  };

  const formik = useFormik({
    initialValues: {
      email: "edsonhrf@gmail.com",
      enrollmentNumber: 202300002,
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      enrollmentNumber: Yup.number(),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const response = await fetch("http://localhost:5000/user/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          toast.success("Login successful!");
          handleContinue();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      }

      helpers.setSubmitting(false);
    },
  });

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
                  Login
                </Typography>
                <Typography color="primary" variant="body2">
                  Don&apos;t have an account? &nbsp;
                  <Link
                    // component={NextLink}
                    href="/register"
                    underline="hover"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    Register
                  </Link>
                </Typography>
              </Stack>
              <Tabs
                onChange={handleMethodChange}
                sx={{ mb: 3, color: "text.primary" }}
                value={method}
              >
                <Tab label="Email" value="email" />
                <Tab label="Enroll Number" value="enrollmentNumber" />
              </Tabs>
              {method === "email" && (
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={3}>
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
                              {showPassword ? (
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
                      You can use your <b>email</b> and <b>password</b> to login
                      in the app.
                    </div>
                  </Alert>
                </form>
              )}
              {method === "enrollmentNumber" && (
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={3}>
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
                              {showPassword ? (
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
                  <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                    <div>
                      You can use your <b>enroll number</b> and <b>password</b>{" "}
                      to login in the app.
                    </div>
                  </Alert>
                </form>
              )}
            </div>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Login;
