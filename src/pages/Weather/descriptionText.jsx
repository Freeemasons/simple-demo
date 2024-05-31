import React from 'react';
import { observer } from "mobx-react-lite"
import { Grid, Paper, Typography } from "@mui/material"

const DescriptionText = (observer(() => {


  return (
    <Grid item xs={12} sm={6} md={6} lg={8}>
      <Paper sx={{
        p: "20px",
        mb: "20px"
      }}>
        <Typography variant={"h3"}>Weather widget</Typography>
        <Typography sx={{mb: "20px"}}>
          The weather widget is connected to the api and shows the weather depending on the city, which is specified via
          a text field. The widget displays current data and location time. Additional information: how temperature
          feels like,
          wind speed, humidity, precipitation and pressure feel.
        </Typography>
        
      </Paper>

      <Paper sx={{
        p: "20px"
      }}>
        <Typography variant={"h4"}>Lorem ipsum</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae laoreet sapien. Duis aliquam mollis
          accumsan. Quisque vitae faucibus dui. In lectus eros, posuere a ultricies non, maximus in mi. Ut vel dui
          ac turpis ultricies commodo vitae ornare nibh. Praesent a suscipit ligula. Etiam ac purus eros. Integer ut
          vulputate enim. Nam eleifend dignissim laoreet. Mauris malesuada sit amet enim quis tempus.
        </Typography>
      </Paper>
    </Grid>
  )

}));

export default DescriptionText;