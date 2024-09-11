import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Alert,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../Services/loginService";
import { staffLogin } from "../Services/staffLogin";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const StaffLoginPage = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await staffLogin(values.username, values.password);
      console.log(response);

      if (response.data.length !== 0) {
        // localStorage.setItem("userId", response.data.userId);
        window.location.href = "/staff-dashboard";
      }
    } catch (error) {
      alert("Invalid username or password");
    }

    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url(image3.png)", // Add your background image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Formik
            initialValues={{
              username: "",
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
                      name="username"
                      label="Username"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="username" />}
                      error={!!(<ErrorMessage name="username" />)}
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
                      Login
                    </Button>
                    <Typography>
                      Doesn't have an account?{" "}
                      <a href="/customer-register">Register</a>
                    </Typography>
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

export default StaffLoginPage;
