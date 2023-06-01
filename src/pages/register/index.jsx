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
} from "@mui/material";
import Layout from "../../layouts/auth/layout";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home");
  };

  const formik = useFormik({
    initialValues: {
      email: "edsonhrf@gmail.com",
      name: "Edson Henrique Ramos Figueiredo",
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
      name: Yup.string().max(255).required("Name is required"),
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
                <Typography variant="h4" color="primary">Register</Typography>
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
                    <TextField
                        error={
                          !!(formik.touched.name && formik.errors.name)
                        }
                        fullWidth
                        helperText={
                          formik.touched.name && formik.errors.name
                        }
                        label="Name"
                        name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.name}
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
                      You should use your <b>name</b>, <b>email</b> and <b>password</b> to register in the app.
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
