import { useCallback, useState } from "react";
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
} from "@mui/material";
import Layout from "../../layouts/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [method, setMethod] = useState("email");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home");
  };

  const formik = useFormik({
    initialValues: {
      email: "edsonhrf@gmail.com",
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    // onSubmit: async (values, helpers) => {
    //   try {
    //     await auth.signIn(values.email, values.password);
    //     router.push('/');
    //   } catch (err) {
    //     helpers.setStatus({ success: false });
    //     helpers.setErrors({ submit: err.message });
    //     helpers.setSubmitting(false);
    //   }
    // }
  });

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  return (
    <>
      {/* <head>
        <title>Login | Devias Kit</title>
      </head> */}
      <Layout>
        <Box
          sx={{
            backgroundColor: "#3299CC",
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
                <Tab label="Phone Number" value="phoneNumber" />
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
                      type="password"
                      value={formik.values.password}
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
                      onClick={handleContinue}
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
              {method === "phoneNumber" && (
                <div>
                  <Typography sx={{ mb: 1 }} variant="h6">
                    Not available yet
                  </Typography>
                  <Typography color="text.secondary">
                    It will be available in the next versions{" "}
                  </Typography>
                </div>
              )}
            </div>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Login;
