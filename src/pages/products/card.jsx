import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const CardItem = (props) => {

  const {image, price, title} = props


  return (
    <>
      <Card sx={{ height: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CardItem;