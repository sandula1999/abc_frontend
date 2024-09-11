import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import { FaArrowDown } from "react-icons/fa";
import {
  FaCocktail, FaConciergeBell,
} from 'react-icons/fa';
import {
  GiWineGlass, GiChefToque
} from 'react-icons/gi';
import {
  MdEvent, MdOutdoorGrill
} from 'react-icons/md';


const HomeScreen = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#333", boxShadow: "none" }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Restaurant Name */}
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              ABC Restaurant
            </Typography>

            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 4 }}>
              <Button href="/" sx={{ color: "#fff", textTransform: "none" }}>
                Home
              </Button>
              <Button href="/about" sx={{ color: "#fff", textTransform: "none" }}>
                About Us
              </Button>
              <Button href="/menu" sx={{ color: "#fff", textTransform: "none" }}>
                Menu
              </Button>
              <Button href="/reservation" sx={{ color: "#fff", textTransform: "none" }}>
                Reservations
              </Button>
              <Button href="/contact" sx={{ color: "#fff", textTransform: "none" }}>
                Contact
              </Button>
            </Box>

            {/* Login Button */}
            <Button
              href="/login"
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#ff4081",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f50057",
                },
              }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Header Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url('/home.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          animation: "zoomIn 8s ease-in-out forwards",
          "@keyframes zoomIn": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.1)" },
          },
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to right, rgba(255,0,150,0.5), rgba(0,153,255,0.5))`,
            opacity: 0.6,
            zIndex: 1,
            animation: "shiftGradient 10s infinite alternate",
          },
          "@keyframes shiftGradient": {
            "0%": {
              background: `linear-gradient(to right, rgba(255,0,150,0.6), rgba(0,153,255,0.6))`,
            },
            "100%": {
              background: `linear-gradient(to right, rgba(0,153,255,0.6), rgba(255,0,150,0.6))`,
            },
          },
        }}
      >
        <Box sx={{ zIndex: 2 }}>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: 8,
              textTransform: "uppercase",           
              mb: 3,
              fontSize: { xs: "4rem", md: "5rem" },
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.9), 0px 0px 25px #f5d742",
              color: "#f5d742", // Golden yellow for a premium look
            }}
          >
            ABC Restaurant
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: 5,
              textTransform: "uppercase",
              mb: 3,
              fontSize: { xs: "3rem", md: "4rem" },
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.9), 0px 0px 20px #ff4081",
              position: "relative",
              "::after": {
                content: '""',
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                backgroundColor: "#ff4081",
                borderRadius: "5px",
                mt: 1,
              },
            }}
          >
            Taste the Extraordinary
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              fontSize: { xs: "1rem", md: "1.5rem" },
              maxWidth: "600px",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
              textAlign: "center",
            }}
          >
            Discover the ultimate dining experience where cuisine meets art.
          </Typography>
          <a href="/login">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ff4081",
              padding: "15px 30px",
              fontSize: "1.2rem",
              borderRadius: "30px",
              boxShadow: "0px 4px 15px rgba(255,64,129,0.7)",
              transition: "transform 0.3s ease",
              "&:hover": {
                backgroundColor: "#f50057",
                transform: "scale(1.1)",
              },
            }}
          >
            Book Your Table
        </Button>
        </a>
        </Box>

        {/* Scroll Arrow */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            animation: "bounce 2s infinite",
            cursor: "pointer",
          }}
        >
          <FaArrowDown size={30} />
        </Box>

        {/* Keyframes for Arrow Animation */}
        <style>
          {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
          `}
        </style>
      </Box>

      {/* Rest of the Sections */}
      {/* About Us Section */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: `url('/ab.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: "700" }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.7, mb: 4 }}>
              At Dragon Cafe, we believe that dining should be a multisensory experience, where every dish tells a story.
              Our team of expert chefs crafts meals using the finest ingredients sourced from around the world, combining traditional techniques with modern innovation.
              From the moment you walk in, you're not just having dinner, you're embarking on a culinary journey.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "30px",
                padding: "10px 25px",
                borderColor: "#ff4081",
                color: "#ff4081",
                "&:hover": {
                  backgroundColor: "#ff4081",
                  color: "#fff",
                  borderColor: "#ff4081",
                },
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section with Parallax Background */}
      <Box
        sx={{
          backgroundImage: `url('services-bg.jpg')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ mb: 6, fontWeight: 700 }}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <ServiceCard icon={<FaCocktail />} title="Signature Cocktails" description="Handcrafted cocktails that blend unique flavors." />
            <ServiceCard icon={<GiWineGlass />} title="Fine Dining" description="A refined dining experience with exquisite dishes." />
            <ServiceCard icon={<MdEvent />} title="Private Events" description="Celebrate special moments in an exclusive setting." />
            <ServiceCard icon={<MdOutdoorGrill />} title="Outdoor Barbecue" description="Enjoy a casual BBQ experience with premium ingredients." />
            <ServiceCard icon={<FaConciergeBell />} title="Concierge Service" description="Personalized services tailored to your needs." />
            <ServiceCard icon={<GiChefToque />} title="Chef's Special" description="Exclusive dishes prepared by our top chefs." />
          </Grid>
        </Container>
      </Box>

      {/* Featured Dishes Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 700 }}>
          Featured Dishes
        </Typography>
        <Grid container spacing={4}>
          {["/dish1.jpg", "/dish2.jpg", "/dish3.jpg"].map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ position: "relative", boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}>
                <CardMedia component="img" height="300" image={image} alt="Featured Dish" />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Learn More
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Special Offers Section with Card Carousel */}
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700 }}>
            Special Offers
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", overflowX: "scroll", gap: 4 }}>
            {["20% Off on Weekdays", "Free Dessert on Weekends", "Happy Hour Specials"].map((offer, index) => (
              <OfferCard key={index} offer={offer} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#333", color: "#fff", py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            {/* About Us */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                About ABC Restaurant
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
                ABC Restaurant offers a premium dining experience with gourmet dishes curated by expert chefs. Our mission is to provide a culinary journey that tantalizes your taste buds.
              </Typography>
              <Typography variant="body2" sx={{ color: "#ff4081", fontWeight: 600 }}>
                Learn More &rarr;
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li>
                  <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a>
                </li>
                <li>
                  <a href="/menu" style={{ color: "#fff", textDecoration: "none" }}>Menu</a>
                </li>
                <li>
                  <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
                </li>
                <li>
                  <a href="/careers" style={{ color: "#fff", textDecoration: "none" }}>Careers</a>
                </li>
              </ul>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
                123 Culinary Blvd, Food City, FC 45678
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
                Phone: (123) 456-7890
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
                Email: info@abcrestaurant.com
              </Typography>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="body2" sx={{ color: "#fff", mb: 2 }}>
              Follow Us:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" style={{ color: "#fff", fontSize: "24px" }}></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" style={{ color: "#fff", fontSize: "24px" }}></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ color: "#fff", fontSize: "24px" }}></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" style={{ color: "#fff", fontSize: "24px" }}></i>
              </a>
            </Box>
          </Box>

          {/* Copyright */}
          <Typography variant="body2" align="center" sx={{ mt: 4, color: "#ccc" }}>
            &copy; {new Date().getFullYear()} ABC Restaurant. All rights reserved.
          </Typography>
        </Container>
      </Box>

    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper
      elevation={3}
      sx={{
        p: 4,
        textAlign: "center",
        backgroundColor: "#212121",
        color: "#fff",
        borderRadius: "20px",
        "&:hover": {
          backgroundColor: "#ff4081",
          transform: "scale(1.05)",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <Box sx={{ fontSize: "3rem", mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, fontSize: "0.9rem", color: "#ccc" }}>
        {description}
      </Typography>
    </Paper>
  </Grid>
);

const OfferCard = ({ offer }) => (
  <Card
    sx={{
      minWidth: 250,
      height: 150,
      backgroundColor: "#ff4081",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        transform: "translateY(-10px)",
        transition: "transform 0.3s ease",
      },
    }}
  >
    <CardContent>
      <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
        {offer}
      </Typography>
    </CardContent>
  </Card>
);

export default HomeScreen;
