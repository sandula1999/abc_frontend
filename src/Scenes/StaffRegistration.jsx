import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { staffRegister } from "../Services/staffRegister";

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
  role: Yup.string().required("Role is required"),
});

const StaffRegistrationPage = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    // Simulate form submission
    const res = await staffRegister(values)
    console.log("Form data:", res);
    window.location.href = "/staff-login";
    setSubmitting(false);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Staff Registration
        </Typography>
        <Formik
          initialValues={{
            name: "",
            address: "",
            contactNo: "",
            email: "",
            userName: "",
            password: "",
            role: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
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
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="role-label">Role</InputLabel>
                    <Field
                      as={Select}
                      labelId="role-label"
                      name="role"
                      label="Role"
                      value={values.role}
                      onChange={(e) => setFieldValue("role", e.target.value)}
                      error={!!(<ErrorMessage name="role" />)}
                    >
                      <MenuItem value="Manager">Manager</MenuItem>
                      <MenuItem value="Staff">Staff</MenuItem>
                      <MenuItem value="Server">Server</MenuItem>
                    </Field>
                    <ErrorMessage name="role" component="div" />
                  </FormControl>
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

export default StaffRegistrationPage;
