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
        <Typography variant={"h3"}>Lorem ipsum</Typography>
        <Typography sx={{mb: "20px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae laoreet sapien. Duis aliquam mollis
          accumsan. Quisque vitae faucibus dui. In lectus eros, posuere a ultricies non, maximus in mi. Ut vel dui
          ac turpis ultricies commodo vitae ornare nibh. Praesent a suscipit ligula. Etiam ac purus eros. Integer ut
          vulputate enim. Nam eleifend dignissim laoreet. Mauris malesuada sit amet enim quis tempus.
        </Typography>
        <Typography>
          Pellentesque elit nunc, dignissim in ullamcorper id, egestas lobortis leo. Cras quis nunc ac elit tempus
          gravida eu et urna. Cras tempus tortor urna, vitae tincidunt nulla vulputate interdum. Aenean varius
          consectetur mauris, vel convallis nunc molestie a. Aliquam malesuada tortor et interdum ornare. Nam
          gravida congue neque convallis commodo. Etiam viverra at tortor rhoncus tincidunt. Praesent ipsum purus,
          ornare vel hendrerit et, tempor ut arcu. Sed sed nibh vitae dolor iaculis volutpat id a leo. Morbi cursus
          commodo congue. Nunc turpis erat, dignissim vel suscipit a, interdum vel mauris. Aenean finibus posuere
          ultrices. Pellentesque posuere, neque id convallis sagittis, dui nisi lacinia sem, sed ultricies risus
          augue et lectus. Suspendisse non magna nec augue tempus viverra. Aenean dictum pulvinar neque sit amet
          porta.

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