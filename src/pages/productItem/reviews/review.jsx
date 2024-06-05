import React from 'react';
import { Box, Grid, Paper, Rating, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"


const Review = (observer((props) => {

  const {rating} = props

  return (
    <Paper sx={{
      p: "20px",
      background: "#f3f3f7"
    }}>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box sx={{
              minWidth: {xs: "200px", md: "250px"},
            }}>
              <Typography
                sx={{
                  fontWeight: "bold"
                }}
              >
                Rose
                <Typography component={"span"} sx={{
                  marginLeft: "20px"
                }}>
                6 september 2024
              </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Rating name="read-only" value={rating} readOnly />
          </Grid>
        </Grid>

      <Grid container sx={{
        marginTop: "40px"
      }}>
        <Grid item xs={12}>
          <Typography sx={{
            fontWeight: "bold"
          }}
          >
            Advantages
          </Typography>
          <Typography >
            Quality
          </Typography>

          <Typography sx={{
            fontWeight: "bold",
            marginTop: "20px"
          }}>
            disadvantages
          </Typography>
          <Typography>
            no
          </Typography>
        </Grid>
      </Grid>

    </Paper>
  )

}));

export default Review;