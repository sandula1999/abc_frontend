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
    const res = await staffRegister(values);
    console.log("Form data:", res);
    window.location.href = "/staff-login";
    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/image3.png')", // Add your background image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", // Dark overlay for better contrast
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.15)", // Glassmorphism effect
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#fff", fontWeight: "bold", textTransform: "uppercase" }}
          >
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
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: { color: "#fff" },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        },
                      }}
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
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: { color: "#fff" },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        },
                      }}
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
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: { color: "#fff" },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        },
                      }}
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
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: { color: "#fff" },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        },
                      }}
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
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: { color: "#fff" },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        },
                      }}
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
                      InputLabelProps={{ style: { color: "#fff" } }}
                      InputProps={{
                        style: { color: "#fff" },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        },
                      }}
                      helperText={<ErrorMessage name="password" />}
                      error={!!(<ErrorMessage name="password" />)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="role-label" sx={{ color: "#fff" }}>Role</InputLabel>
                      <Field
                        as={Select}
                        labelId="role-label"
                        name="role"
                        label="Role"
                        value={values.role}
                        onChange={(e) => setFieldValue("role", e.target.value)}
                        sx={{
                          color: "#fff",
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
                            "&:hover fieldset": { borderColor: "#ff4081" },
                          },
                        }}
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
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        background: "linear-gradient(90deg, #ff4081, #ff6ec4)",
                        padding: "12px 20px",
                        fontSize: "1.2rem",
                        borderRadius: "50px",
                        "&:hover": {
                          background: "linear-gradient(90deg, #ff6ec4, #ff4081)",
                          transform: "scale(1.05)",
                          transition: "0.3s ease",
                        },
                      }}
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
    </Box>
  );
};

export default StaffRegistrationPage;
