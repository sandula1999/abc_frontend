import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { FiWifi, FiMusic, FiUser, FiCoffee, FiMapPin } from "react-icons/fi";
import { FaParking, FaWineBottle } from "react-icons/fa";
const HomeScreen = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h1" gutterBottom>
            Welcome to Dragon Cafe
          </Typography>
          <Typography variant="h5" gutterBottom>
            Experience world-class cuisine with unmatched service.
          </Typography>
          <a href="/login">
            <Button variant="contained" color="primary" size="large">
              Make a Reservation
            </Button>
          </a>
        </Box>
      </Box>

      {/* About Section */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Discover Our Story
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          We bring you the finest dining experience, offering the best
          ingredients and impeccable service.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="about.png"
            alt="About Us"
            width="100%"
            style={{ maxWidth: "600px", borderRadius: "10px" }}
          />
        </Box>
      </Container>

      {/* Services Section */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Dining Options
        </Typography>
        <Grid container spacing={4}>
          <ServiceCard
            title="Dine-in"
            description="Experience our cozy atmosphere."
          />
          <ServiceCard
            title="Delivery"
            description="Delicious meals delivered to your doorstep."
          />
          <ServiceCard
            title="Catering"
            description="Perfect for any event or gathering."
          />
          <ServiceCard
            title="Private Dining"
            description="Exclusive dining for special occasions."
          />
        </Grid>
      </Container>

      {/* Special Offers Section */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Current Offers
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <OfferCard offer="20% Off on Weekday Lunches!" />
          <OfferCard offer="Free Dessert with Dinner Reservations on Weekends!" />
          <OfferCard offer="Book a Table for 4, Get a Free Bottle of Wine!" />
        </Box>
      </Container>

      {/* Facilities Section */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={4}>
          <Facility icon={<FiWifi />} label="Free Wi-Fi" />
          <Facility icon={<FiMusic />} label="Live Music" />
          <Facility icon={<FaParking />} label="Parking Available" />
          <Facility icon={<FiCoffee />} label="Outdoor Seating" />
          <Facility icon={<FiUser />} label="Private Event Rooms" />
          <Facility icon={<FaWineBottle />} label="Wine Service" />
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container sx={{ my: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Explore Our Atmosphere
        </Typography>
        <Gallery images={["image1.png", "image2.png", "image3.png"]} />
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#333", color: "#fff", py: 4 }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} [Restaurant Name]. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

const ServiceCard = ({ title, description }) => (
  <Grid item xs={12} md={3}>
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const OfferCard = ({ offer }) => (
  <Card sx={{ width: 250, m: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {offer}
      </Typography>
    </CardContent>
  </Card>
);

const Facility = ({ icon, label }) => (
  <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
    <Box>
      <Box sx={{ fontSize: "3rem", mb: 2 }}>{icon}</Box>
      <Typography variant="body1">{label}</Typography>
    </Box>
  </Grid>
);

const Gallery = ({ images }) => (
  <Grid container spacing={2}>
    {images.map((img, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <img
          src={img}
          alt="Gallery"
          width="100%"
          style={{ borderRadius: "10px" }}
        />
      </Grid>
    ))}
  </Grid>
);

export default HomeScreen;
