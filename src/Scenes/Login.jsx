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

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await login(values.username, values.password);
      //console.log(response);
      
      if (response.data.length !== 0) {
        localStorage.setItem("userId", response.data.userId);
        window.location.href = "/reservation";
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
        backgroundImage: "url('/image3.jpg')", // Add your background image URL
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
        maxWidth="xs"
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
            Welcome Back
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: "#fff", mb: 3 }}
          >
            Please login to continue
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
                      InputLabelProps={{ style: { color: "#fff" } }} // Floating label style
                      InputProps={{
                        style: {
                          color: "#fff",
                        },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.6)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#ff4081",
                            },
                          },
                        },
                      }}
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
                      InputLabelProps={{ style: { color: "#fff" } }} // Floating label style
                      InputProps={{
                        style: {
                          color: "#fff",
                        },
                        sx: {
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.6)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#ff4081",
                            },
                          },
                        },
                      }}
                      helperText={<ErrorMessage name="password" />}
                      error={!!(<ErrorMessage name="password" />)}
                    />
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
                      Login
                    </Button>
                    <Typography
                      align="center"
                      sx={{ color: "#fff", mt: 2, fontSize: "0.9rem" }}
                    >
                      Don't have an account?{" "}
                      <a href="/customer-register" style={{ color: "#ff4081" }}>
                        Register
                      </a>
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

export default LoginPage;
