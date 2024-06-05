import React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import doctor from "../../common/assets/img/products/doctor.jpg"



const Header = () => {


  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box>
              <img src={doctor} alt="" style={{ maxWidth: '100%', height: "auto" }}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>

            <Box sx={{
              marginRight: "20px",
              marginTop: "40px"
            }}>
              <Typography variant={"h1"}>
                Best products for your mental health!
              </Typography>

              <Typography variant={"h4"}>
                Buy now!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;