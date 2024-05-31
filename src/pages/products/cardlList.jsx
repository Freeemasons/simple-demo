import React from 'react';
import { Button, Grid } from "@mui/material"
import Filters from "./filters"
import { observer } from "mobx-react-lite"
import CardItem from "./card"


const CardlList = (observer((props) => {

  const {data, itemsToShow, handleShowMore} = props


  return (
    <Grid
      container
      spacing={2}
    >

      <Grid
        item xs={12} md={3}>
        <Filters />
      </Grid>

      <Grid
        item xs={12} md={9} sx={{}}>

        <Grid
          container
          spacing={2}
        >

          {data && data.slice(0, itemsToShow).map((product) => {

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
                />
              </Grid>
            )
          })}

          {itemsToShow < data?.length &&
            <Button
              onClick={handleShowMore}
              variant={"contained"}
              sx={{
                margin: 2
              }}
            >
              Показать еще
            </Button>
          }

        </Grid>
      </Grid>
    </Grid>
  )

}));

export default CardlList;