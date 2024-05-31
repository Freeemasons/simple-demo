import React from 'react';
import { observer } from "mobx-react-lite"
import Gallery from "../../UI/gallery/Gallery"
import { useInstance } from "react-ioc"
import { Grid, Typography } from "@mui/material"
import ProductStore from "../../stores/product.store"
import { toJS } from "mobx"
import { useLocation } from 'react-router-dom';


const ProductItemPage = (observer((props) => {

  const productStore = useInstance(ProductStore)

  const location = useLocation();
  // const currentPath = location.pathname;
  const getIdFromPath = location.pathname.split("/").slice(2)
  const getId = +getIdFromPath.join()
  const findProduct = productStore?.data && toJS(productStore?.data.find((el) => {
    return el.id === getId
  }))


  const imagesArray = [{
    original: findProduct.image,
    thumbnail: findProduct.image,
    id: findProduct.id
  }];


  return (

    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Gallery data={imagesArray} startIndex={0}/>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant={"h3"}>
            {findProduct.title}
          </Typography>
          <Typography >
            {findProduct.price}
          </Typography>
          <Typography >
            {findProduct.rating.rate}
          </Typography>
          <Typography >
            {findProduct.description}
          </Typography>
          <Typography >
            {findProduct.category}
          </Typography>
        </Grid>
      </Grid>
    </>
  )

}));

export default ProductItemPage;