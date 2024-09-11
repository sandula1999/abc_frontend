import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

// Sample menu items
const menuItems = {
  Appetizers: [
    {
      name: "Bruschetta",
      description: "Grilled bread with fresh tomatoes, garlic, and basil.",
      price: "$8.50",
      image: "/appetizer1.jpg",
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms filled with cheese and herbs.",
      price: "$9.00",
      image: "/appetizer2.jpg",
    },
    {
      name: "Garlic Bread",
      description: "Crunchy garlic bread with melted cheese.",
      price: "$7.50",
      image: "/appetizer3.jpg",
    },
  ],
  "Main Course": [
    {
      name: "Grilled Salmon",
      description: "Served with seasonal vegetables and lemon sauce.",
      price: "$18.00",
      image: "/main1.jpg",
    },
    {
      name: "Steak Frites",
      description: "Grilled steak with crispy fries and peppercorn sauce.",
      price: "$22.50",
      image: "/main2.jpg",
    },
    {
      name: "Pasta Carbonara",
      description: "Classic pasta with pancetta, eggs, and Parmesan.",
      price: "$16.00",
      image: "/main3.jpg",
    },
  ],
  Desserts: [
    {
      name: "Chocolate Lava Cake",
      description: "Molten chocolate cake served with vanilla ice cream.",
      price: "$7.00",
      image: "/dessert1.jpg",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with mascarpone and coffee.",
      price: "$6.50",
      image: "/dessert2.jpg",
    },
    {
      name: "Cheesecake",
      description: "Creamy cheesecake with a graham cracker crust.",
      price: "$6.50",
      image: "/dessert3.jpg",
    },
  ],
  Beverages: [
    {
      name: "Mojito",
      description: "Classic cocktail with rum, mint, and lime.",
      price: "$10.00",
      image: "/beverage1.jpg",
    },
    {
      name: "Lemonade",
      description: "Freshly squeezed lemonade with mint.",
      price: "$5.00",
      image: "/beverage2.jpg",
    },
    {
      name: "Iced Coffee",
      description: "Cold brewed coffee with ice and milk.",
      price: "$5.00",
      image: "/beverage3.jpg",
    },
  ],
};

const MenuPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 900,
          mb: 5,
          letterSpacing: 2,
          color: "#ff4081",
          textTransform: "uppercase",
        }}
      >
        Explore Our Menu
      </Typography>

      {Object.keys(menuItems).map((category) => (
        <Box sx={{ mb: 8 }} key={category}>
          {/* Category Title */}
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 4,
              textTransform: "uppercase",
              color: "#212121",
              borderBottom: "2px solid #ff4081",
              display: "inline-block",
            }}
          >
            {category}
          </Typography>

          {/* Menu Items */}
          <Grid container spacing={4}>
            {menuItems[category].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      filter: "brightness(80%)",
                      transition: "filter 0.3s",
                      "&:hover": {
                        filter: "brightness(100%)",
                      },
                    }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#ff4081", mb: 1 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#757575", mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#212121" }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Button to Make a Reservation */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
          variant="contained"
          href="/reservation"
          size="large"
          sx={{
            backgroundColor: "#ff4081",
            padding: "15px 40px",
            fontSize: "1.2rem",
            borderRadius: "30px",
            boxShadow: "0px 6px 20px rgba(255, 64, 129, 0.4)",
            "&:hover": {
              backgroundColor: "#f50057",
            },
          }}
        >
          Book Your Table
        </Button>
      </Box>
    </Container>
  );
};

export default MenuPage;
