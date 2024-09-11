import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Modal,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { getTables, updateTable } from "../Services/tableService";
import { getReservations } from "../Services/reservation";

// Modal style for table updates
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1e1e1e", // Dark modal background
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  color: "#fff",
};

const StaffDashboard = () => {
  const [tables, setTables] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationsData, setReservationsData] = useState([]);
  const [activeView, setActiveView] = useState("reservations");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTables();
      setTables(response.data);
      const res = await getReservations();
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
    handleClose();
  };

  // Drawer for side navigation
  const drawerWidth = 240;
  const renderSideNav = () => (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#2c2c2c",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem
          button
          selected={activeView === "reservations"}
          onClick={() => setActiveView("reservations")}
        >
          <ListItemText primary="Reservation Overview" sx={{ color: "#fff" }} />
        </ListItem>
        <ListItem
          button
          selected={activeView === "table-management"}
          onClick={() => setActiveView("table-management")}
        >
          <ListItemText primary="Table Management" sx={{ color: "#fff" }} />
        </ListItem>
      </List>
    </Drawer>
  );

  // Render reservations overview
  const renderReservationsOverview = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
        Reservations Overview
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: "#2C2C2C" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#ff4081" }}>ID</TableCell>
              <TableCell sx={{ color: "#ff4081" }}>Reservation Time</TableCell>
              <TableCell sx={{ color: "#ff4081" }}>Guests</TableCell>
              <TableCell sx={{ color: "#ff4081" }}>Special Request</TableCell>
              <TableCell sx={{ color: "#ff4081" }}>Table</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservationsData.map((reservation) => (
              <TableRow key={reservation.reservationId}>
                <TableCell sx={{ color: "#fff" }}>{reservation.reservationId}</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  {new Date(reservation.reservationTime).toLocaleString()}
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>{reservation.numberOfGuests}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{reservation.specialRequest}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{reservation.resturantT.tableId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  // Render table management
  const renderTableManagement = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
        Table Availability Management
      </Typography>
      <Grid container spacing={4}>
        {tables.map((table) => (
          <Grid item xs={12} sm={6} md={3} key={table.tableId}>
            <Card
              sx={{
                borderColor: table.available === true ? "#4CAF50" : "#F44336",
                borderWidth: "2px",
                borderStyle: "solid",
                cursor: "pointer",
                backgroundColor: table.available ? "#2C2C2C" : "#1e1e1e",
                color: table.available ? "#4CAF50" : "#F44336",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(255, 64, 129, 0.6)",
                },
                transition: "all 0.3s ease",
                borderRadius: "10px",
              }}
              onClick={() => handleOpen(table)}
            >
              <CardContent>
                <Typography variant="h6">
                  {table.type} Table (Capacity: {table.capacity})
                </Typography>
                <Typography variant="body2">
                  {table.available === true ? "Available" : "Not Available"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#121212" }}>
      {renderSideNav()}

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#121212",
          backgroundImage: `url('/your-background-image.jpg')`, // Add your background image here
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          position: "relative",
          zIndex: 1,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: "#ff4081", fontWeight: 700 }}>
            Staff Dashboard - ABC RESTAURANT
          </Typography>

          {activeView === "reservations" && renderReservationsOverview()}
          {activeView === "table-management" && renderTableManagement()}
        </Container>
      </Box>

      {/* Modal for Table Availability */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "#ff4081" }}>
            Update Table Availability
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Table: {selectedTable?.type} (Capacity: {selectedTable?.capacity})
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#66BB6A",
                },
                mr: 2,
              }}
              onClick={() => handleTableUpdate(selectedTable.tableId, true)}
            >
              Set Available
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F44336",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#EF5350",
                },
              }}
              onClick={() => handleTableUpdate(selectedTable.tableId, false)}
            >
              Set Not Available
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default StaffDashboard;
