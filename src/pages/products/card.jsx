import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Rating, Typography } from "@mui/material"
import {Link as RouterLink} from "react-router-dom";


const CardItem = (props) => {

  const {image, price, title, rating, id} = props


  return (
    <>
      <Link component={RouterLink} to={`/products/${id}`}
            // sx={{width: '100%', textAlign: 'center'}}
      >

        <Card
          // sx={{ height: 345 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={title}
              title={"titleasdasdsada"}
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />

            <CardContent
              gutterBottom
              sx={{
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h5" component="div" sx={{
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "overflow": "hidden",
                "-webkit-line-clamp": "2",
                marginBottom: "20px"
              }}>
                {title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pt: 2
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {price} $
                </Typography>
                <Rating name="read-only" value={rating.rate} readOnly />
              </Box>

            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

    </>
  );
};

export default CardItem;