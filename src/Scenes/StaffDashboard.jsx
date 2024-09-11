import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Modal,
} from "@mui/material";
import { getTables, updateTable } from "../Services/tableService";
import { getReservations } from "../Services/reservation";

// Example data for reservations and tables from backend
// const reservationsData = [
//   {
//     id: 1,
//     reservationTime: "2024-10-01T20:00:00",
//     numberOfGuests: 6,
//     specialRequest: "Vegetarian options",
//     table: "Regular",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     reservationTime: "2024-10-02T18:00:00",
//     numberOfGuests: 4,
//     specialRequest: "Birthday event",
//     table: "Booth",
//     status: "Confirmed",
//   },
// ];

// const queriesData = [
//   { id: 1, name: "John Doe", message: "Do you offer gluten-free options?" },
//   { id: 2, name: "Jane Smith", message: "Can I change my reservation to an earlier time?" },
// ];

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StaffDashboard = () => {
  const [tables, setTables] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationsData, setReservationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTables();
      setTables(response.data);
      const res = await getReservations();
      console.log(res);

      setReservationsData(res.data);
    };
    fetchData();
  }, []);
  const handleOpen = (table) => {
    setSelectedTable(table);

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleTableUpdate = async (id, available) => {
    setTables(
      tables.map((table) =>
        table.tableId === id
          ? { ...table, available: available ? true : false }
          : table
      )
    );
    const updatedTable = {
      ...selectedTable,
      available: available,
    };

    const response = await updateTable(id, updatedTable);
    console.log(response);
    handleClose();
  };

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Dragon Cafe Restaurant Staff Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Reservations Section */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Reservations Overview
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Reservation Time</TableCell>
                  <TableCell>Guests</TableCell>
                  <TableCell>Special Request</TableCell>
                  <TableCell>Table</TableCell>
                  {/* <TableCell>Status</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {reservationsData.map((reservation) => (
                  <TableRow key={reservation.reservationId}>
                    <TableCell>{reservation.reservationId}</TableCell>
                    <TableCell>
                      {new Date(reservation.reservationTime).toLocaleString()}
                    </TableCell>
                    <TableCell>{reservation.numberOfGuests}</TableCell>
                    <TableCell>{reservation.specialRequest}</TableCell>
                    <TableCell>{reservation.resturantT.tableId}</TableCell>
                    {/* <TableCell>{reservation.status}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Table Availability Section */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Table Availability Management
          </Typography>
          <Grid container spacing={4}>
            {tables.map((table) => (
              <Grid item xs={12} sm={6} md={3} key={table.tableId}>
                <Card
                  sx={{
                    borderColor: table.available === true ? "green" : "red",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpen(table)}
                >
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
            ))}
          </Grid>
        </Grid>

        {/* Customer Queries Section */}
        {/* <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Customer Queries
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Query</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {queriesData.map((query) => (
                  <TableRow key={query.id}>
                    <TableCell>{query.id}</TableCell>
                    <TableCell>{query.name}</TableCell>
                    <TableCell>{query.message}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Respond
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid> */}
      </Grid>

      {/* Modal for Table Availability */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Table Availability
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Table: {selectedTable?.type} (Capacity: {selectedTable?.capacity})
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleTableUpdate(selectedTable.tableId, true)}
              sx={{ mr: 2 }}
            >
              Set Available
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleTableUpdate(selectedTable.tableId, false)}
            >
              Set Not Available
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default StaffDashboard;
