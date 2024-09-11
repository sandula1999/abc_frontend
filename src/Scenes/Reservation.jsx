import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Box,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getTables, updateTable } from "../Services/tableService";
import { makeReservation } from "../Services/reservation";

// Example data for tables from backend
// const tablesData = [
//   { capacity: 2, available: "true", type: "Regular" },
//   { capacity: 4, available: "false", type: "Booth" },
//   { capacity: 6, available: "true", type: "Private" },
//   { capacity: 2, available: "true", type: "Regular" },
//   { capacity: 4, available: "false", type: "Booth" },
// ];

// Validation schema for reservation form
const reservationSchema = Yup.object().shape({
  reservationTime: Yup.string().required("Please select a reservation time"),
  numberOfGuests: Yup.number()
    .required("Please specify number of guests")
    .min(1),
  specialRequest: Yup.string(),
});

const ReservationPage = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [tablesData, setTablesData] = useState([]);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const uID = localStorage.getItem("userId");
    setUserId(uID);
    const fetchAllStudentData = async () => {
      try {
        const response = await getTables();
        setTablesData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllStudentData();
  }, []);
  const renderTables = () => {
    return tablesData.map((table, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card
          sx={{
            borderColor: table.available === true ? "green" : "red",
            borderWidth: "2px",
            borderStyle: "solid",
            backgroundColor: selectedTable === index ? "#f0f0f0" : "#fff",
            cursor: table.available === true ? "pointer" : "not-allowed",
          }}
          onClick={() => table.available === true && setSelectedTable(index)}
        >
          <CardMedia
            component="img"
            height="140"
            image={`https://via.placeholder.com/150/000000/FFFFFF?text=${table.type}+Table`}
            alt={`${table.type} table`}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {table.type} Table (Capacity: {table.capacity})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {table.available === true ? "Available" : "Not Available"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(image1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Make a Reservation at ABC Restaurant
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Choose your preferred reservation time, number of guests, and select a
          table. Special requests can also be submitted.
        </Typography>

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
              //   const dataToSubmit = {
              //     ...values,
              //     table: selectedTableData,
              //   };
              // Log the form data
              try {
                const test = {
                  ...selectedTableData,
                  available: false,
                };
                const tableRes = await updateTable(
                  selectedTableData.tableId,
                  test
                );
                const reservationRes = await makeReservation(
                  userId,
                  selectedTableData.tableId,
                  values
                );

                alert("Successfully make your reservation!");
              } catch (error) {
                alert("Making reservation is unsuccessful!");
              }

              // Submit the form data to backend (you can replace this with your backend call)
            } else {
              console.log("No table selected");
            }
            setSubmitting(false); // Ensure form submission state is reset
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
              <Grid
                container
                spacing={4}
                sx={{ backgroundColor: "white", padding: "20px" }}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="reservationTime"
                    name="reservationTime"
                    label="Reservation Time"
                    type="datetime-local"
                    fullWidth
                    value={values.reservationTime}
                    onChange={handleChange}
                    error={
                      touched.reservationTime && Boolean(errors.reservationTime)
                    }
                    helperText={
                      touched.reservationTime && errors.reservationTime
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="numberOfGuests"
                    name="numberOfGuests"
                    label="Number of Guests"
                    type="number"
                    fullWidth
                    value={values.numberOfGuests}
                    onChange={handleChange}
                    error={
                      touched.numberOfGuests && Boolean(errors.numberOfGuests)
                    }
                    helperText={touched.numberOfGuests && errors.numberOfGuests}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="specialRequest"
                    name="specialRequest"
                    label="Special Requests"
                    multiline
                    rows={4}
                    fullWidth
                    value={values.specialRequest}
                    onChange={handleChange}
                    error={
                      touched.specialRequest && Boolean(errors.specialRequest)
                    }
                    helperText={touched.specialRequest && errors.specialRequest}
                  />
                </Grid>
              </Grid>

              <Typography variant="h5" align="center" sx={{ my: 4 }}>
                Available Tables
              </Typography>

              {/* Table Selection */}
              <Grid container spacing={4}>
                {renderTables()}
              </Grid>

              {selectedTable !== null && (
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <Typography variant="h6">
                    You have selected a {tablesData[selectedTable].type} table
                    (Capacity: {tablesData[selectedTable].capacity}).
                  </Typography>
                </Box>
              )}

              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={selectedTable === null || isSubmitting}
                >
                  Confirm Reservation
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default ReservationPage;
