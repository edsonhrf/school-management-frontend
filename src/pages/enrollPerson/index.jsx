import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Topbar from "../../components/global/Topbar";
import Sidebar from "../../components/global/Sidebar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnrollPersonForm = () => {
  const [radioValue, setRadioValue] = useState(null);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const valuesWithEnrollType = { ...values, enrollType: radioValue };

      const response = await fetch("http://localhost:5000/employee/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(valuesWithEnrollType),
      });

      if (response.ok) {
        toast.success("Registration created successfully!");
        resetForm();
        setRadioValue(null);
      } else {
        const data = await response.json();
        if (
          data.error.includes("duplicate key error") &&
          data.error.includes("email")
        ) {
          toast.error("Email already registered!");
        } else {
          toast.error("Registration failed! Please consult logs for details!");
        }
      }
    } catch (error) {
      console.error("Request error: ", error);
    }
  };

  return (
    <div className="app">
      {<Sidebar />}
      <main className="content">
        {<Topbar />}
        <Box m="20px">
          <Header
            title="ENROLL PERSON"
            subtitle="Enroll a New Person in the Institution"
          />

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <Box
                    sx={{
                      gridColumn: "span 4",
                      marginTop: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ marginBottom: "10px" }}
                    >
                      Enroll Type
                    </Typography>
                    <Box display="flex">
                      <RadioGroup
                        aria-label="Enroll Type"
                        name="enrollType"
                        value={radioValue}
                        onChange={(event) => setRadioValue(event.target.value)}
                      >
                        <Box display="flex" gap="100%">
                          <FormControlLabel
                            value="student"
                            control={
                              <Radio
                                sx={{
                                  "&.Mui-checked": {
                                    color: "#4cceac",
                                  },
                                }}
                                required
                              />
                            }
                            label="Student"
                          />
                          <FormControlLabel
                            value="employee"
                            control={
                              <Radio
                                sx={{
                                  "&.Mui-checked": {
                                    color: "#4cceac",
                                  },
                                }}
                                required
                              />
                            }
                            label="Employee"
                          />
                        </Box>
                      </RadioGroup>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    ENROLL PERSON
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </main>
      {/* <ToastContainer /> */}
    </div>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
});
const initialValues = {
  name: "",
  email: "",
  contact: "",
  address: "",
};

export default EnrollPersonForm;
