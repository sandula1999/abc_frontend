import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { customerRegister } from "../Services/customerRegister";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  contactNo: Yup.string()
    .required("Contact number is required")
    .matches(/^\d+$/, "Contact number must be numeric"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const CustomerRegistrationPage = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    // Simulate form submission
    try {
      const response = await customerRegister(values);
    window.location.href ="/login"
    } catch (error) {
      alert("Registration unsuccessful!");
    }

    // Send data to the r
    // Example: axios.post('/api/register', values)

    setSubmitting(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundImage: "url(background.png)",
      }}
    >
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Customer Registration
        </Typography>
        <Formik
          initialValues={{
            name: "",
            address: "",
            contactNo: "",
            email: "",
            userName: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="name" />}
                    error={!!(<ErrorMessage name="name" />)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="address"
                    label="Address"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="address" />}
                    error={!!(<ErrorMessage name="address" />)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="contactNo"
                    label="Contact Number"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="contactNo" />}
                    error={!!(<ErrorMessage name="contactNo" />)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="email" />}
                    error={!!(<ErrorMessage name="email" />)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="userName"
                    label="Username"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="userName" />}
                    error={!!(<ErrorMessage name="userName" />)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="password" />}
                    error={!!(<ErrorMessage name="password" />)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default CustomerRegistrationPage;
