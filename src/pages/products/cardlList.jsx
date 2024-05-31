import React from 'react';
import { Button, Grid } from "@mui/material"
import { observer } from "mobx-react-lite"
import CardItem from "./card"


const CardlList = (observer((props) => {

  const {itemsToShow, handleShowMore, filteredDataSec} = props


  return (
    <Grid
      item xs={12} md={9} sx={{}}>

      <Grid
        container
        spacing={2}
      >

        {filteredDataSec && filteredDataSec.slice(0, itemsToShow).map((product) => {

          const {id, category, description, image, price, rating, title} = product

          return (
            <Grid
              item
              xs={12}
              md={3}
            >
              <CardItem
                key={id}
                category={category}
                description={description}
                image={image}
                price={price}
                rating={rating}
                title={title}
                id={id}
              />
            </Grid>
          )
        })}


      </Grid>

      {itemsToShow < filteredDataSec?.length &&
        <Button
          onClick={handleShowMore}
          variant={"contained"}
          sx={{
            margin: 2
          }}
        >
          Show more
        </Button>
      }

    </Grid>
  )

}));

export default CardlList;