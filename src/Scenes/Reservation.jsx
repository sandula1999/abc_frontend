import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getTables, updateTable } from "../Services/tableService";
import { makeReservation } from "../Services/reservation";

// Validation schema for reservation form
const reservationSchema = Yup.object().shape({
  reservationTime: Yup.string().required("Please select a reservation time"),
  numberOfGuests: Yup.number()
    .required("Please specify number of guests")
    .min(1),
  specialRequest: Yup.string(),
});

const steps = ["Select Time", "Select Guests", "Choose Table"];

const ReservationPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tablesData, setTablesData] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const uID = localStorage.getItem("userId");
    setUserId(uID);

    const fetchTablesData = async () => {
      try {
        const response = await getTables();
        setTablesData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTablesData();
  }, []);

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const renderTables = () => {
    return tablesData.map((table, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            backgroundColor: selectedTable === index ? "#ff4081" : "#2C2C2C",
            color: selectedTable === index ? "#fff" : "#ddd",
            cursor: table.available ? "pointer" : "not-allowed",
            transform: selectedTable === index ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            border: "2px solid",
            borderColor: table.available ? "#4CAF50" : "#F44336",
            "&:hover": table.available && { transform: "scale(1.05)" },
            boxShadow: "0 4px 20px rgba(255, 64, 129, 0.4)", // Adding box shadow for better visibility
          }}
          onClick={() => table.available && setSelectedTable(index)}
        >
          <CardContent>
            <Typography variant="h6">
              {table.type} Table (Capacity: {table.capacity})
            </Typography>
            <Typography variant="body2">
              {table.available ? "Available" : "Not Available"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            backgroundColor: "#2C2C2C",
            borderRadius: "15px",
            color: "#fff",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Make Your Reservation
          </Typography>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              marginBottom: 4,
              "& .MuiStepLabel-label": { color: "#ff4081" },
              "& .MuiStepIcon-root.Mui-active": { color: "#ff4081" },
              "& .MuiStepIcon-root.Mui-completed": { color: "#4CAF50" },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Formik
            initialValues={{
              reservationTime: "",
              numberOfGuests: "",
              specialRequest: "",
            }}
            validationSchema={reservationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const selectedTableData =
                selectedTable !== null ? tablesData[selectedTable] : null;

              if (selectedTableData) {
                try {
                  const updatedTable = {
                    ...selectedTableData,
                    available: false,
                  };
                  await updateTable(selectedTableData.tableId, updatedTable);
                  await makeReservation(
                    userId,
                    selectedTableData.tableId,
                    values
                  );
                  alert("Reservation successful!");
                } catch (error) {
                  alert("Reservation failed!");
                }
              } else {
                alert("Please select a table.");
              }
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                {activeStep === 0 && (
                  <TextField
                    fullWidth
                    id="reservationTime"
                    name="reservationTime"
                    label="Select Reservation Time"
                    type="datetime-local"
                    value={values.reservationTime}
                    onChange={handleChange}
                    error={
                      touched.reservationTime && Boolean(errors.reservationTime)
                    }
                    helperText={
                      touched.reservationTime && errors.reservationTime
                    }
                    sx={{
                      marginBottom: 4,
                      backgroundColor: "#fff", // Light background for form fields
                      borderRadius: "8px",
                    }}
                  />
                )}

                {activeStep === 1 && (
                  <TextField
                    fullWidth
                    id="numberOfGuests"
                    name="numberOfGuests"
                    label="Number of Guests"
                    type="number"
                    value={values.numberOfGuests}
                    onChange={handleChange}
                    error={
                      touched.numberOfGuests && Boolean(errors.numberOfGuests)
                    }
                    helperText={touched.numberOfGuests && errors.numberOfGuests}
                    sx={{
                      marginBottom: 4,
                      backgroundColor: "#fff", // Light background for form fields
                      borderRadius: "8px",
                    }}
                  />
                )}

                {activeStep === 2 && (
                  <Grid container spacing={3}>
                    {renderTables()}
                  </Grid>
                )}

                {activeStep === 3 && (
                  <TextField
                    fullWidth
                    id="specialRequest"
                    name="specialRequest"
                    label="Special Requests"
                    multiline
                    rows={3}
                    value={values.specialRequest}
                    onChange={handleChange}
                    error={
                      touched.specialRequest && Boolean(errors.specialRequest)
                    }
                    helperText={
                      touched.specialRequest && errors.specialRequest
                    }
                    sx={{
                      backgroundColor: "#fff", // Light background for form fields
                      borderRadius: "8px",
                    }}
                  />
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      backgroundColor: "#ff4081",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#ff6ec4",
                      },
                      padding: "10px 20px",
                    }}
                  >
                    Back
                  </Button>
                  {activeStep < steps.length - 1 ? (
                    <Button
                      onClick={handleNext}
                      sx={{
                        backgroundColor: "#ff4081",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#ff6ec4",
                        },
                        padding: "10px 20px",
                      }}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting || selectedTable === null}
                      sx={{
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#66BB6A",
                        },
                        padding: "10px 20px",
                      }}
                    >
                      Confirm Reservation
                    </Button>
                  )}
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default ReservationPage;
