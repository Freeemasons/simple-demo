import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite"
import Gallery from "../../UI/gallery/Gallery"
import { useInstance } from "react-ioc"
import { Box, Button, Grid, Grow, Paper, Rating, Typography } from "@mui/material"
import ProductStore from "../../stores/product.store"
import { toJS } from "mobx"
import { useLocation } from 'react-router-dom';
import NavStore from "../../stores/nav.store"
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Review from "./reviews/review"


const ProductItemPage = (observer((props) => {


  const nav = useInstance(NavStore)
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

  useEffect(() => {
    document.title = `Shop ${findProduct.title}`;
    nav?.setHeaderTitle(`Shop ${findProduct.title}`);
    // nav?.setSelectedIndex(6);
  }, [nav]);


  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };


  const items = [
    {
      id: 1, content:

        <Grid container>
          <Grid item xs={12} md={3}>
            <Box sx={{
              display: "flex",
              gap: "20px",
              flexWrap: {xs: "wrap", md: "noWrap"},
              justifyContent: {xs: "center", md: "flex-start"}
            }}>

              <Review
                price={findProduct.price}
                rating={findProduct.rating.rate}
              />

              <Review price={findProduct.price}
                      rating={findProduct.rating.rate}
              />

              <Review price={findProduct.price}
                      rating={findProduct.rating.rate}
              />
            </Box>
          </Grid>
        </Grid>
    },
    {
      id: 2, content: <Grid container>
        <Grid item xs={12} md={3}>
          <Box sx={{
            display: "flex",
            gap: "20px",
            flexWrap: {xs: "wrap", md: "noWrap"},
            justifyContent: {xs: "center", md: "flex-start"}
          }}>

            <Review
              price={findProduct.price}
              rating={findProduct.rating.rate}
            />

            <Review price={findProduct.price}
                    rating={findProduct.rating.rate}
            />

            <Review price={findProduct.price}
                    rating={findProduct.rating.rate}
            />
          </Box>
        </Grid>
      </Grid>
    },
    {
      id: 3, content: <Grid container>
        <Grid item xs={12} md={3}>
          <Box sx={{
            display: "flex",
            gap: "20px",
            flexWrap: {xs: "wrap", md: "noWrap"},
            justifyContent: {xs: "center", md: "flex-start"}
          }}>

            <Review
              price={findProduct.price}
              rating={findProduct.rating.rate}
            />

            <Review price={findProduct.price}
                    rating={findProduct.rating.rate}
            />

            <Review price={findProduct.price}
                    rating={findProduct.rating.rate}
            />
          </Box>
        </Grid>
      </Grid>
    }
  ];

  return (

    <>
      <Grid container spacing={1}>

        <Grid item xs={12} md={4}>
          <Gallery data={imagesArray} startIndex={0} />
        </Grid>

        <Grid item xs={12} md={8}
              sx={{
                paddingLeft: "40px"
              }}
        >
          <Typography variant={"h3"}
                      sx={{
                        paddingLeft: {md: "40px", xs: "5px"},
                      }}
          >
            {findProduct.title}
          </Typography>


          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                paddingLeft: {md: "40px", xs: "5px"},
              }}>
                <Rating name="read-only" value={findProduct.rating.rate} readOnly />
                <Typography sx={{
                  fontWeight: "bold"
                }}>
                  {findProduct.rating.count} Reviews
                </Typography>
              </Box>

              <Box sx={{
                marginTop: "10px",
                paddingLeft: {md: "40px", xs: "5px"},
              }}>
                <IconButton>
                  <ShareIcon />
                </IconButton>

                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>


              <Box sx={{
                marginTop: "40px",
                paddingLeft: {md: "40px", xs: "5px"},
              }}>
                <Typography variant={"subtitle1"}
                            sx={{
                              fontWeight: "bold"
                            }}
                >
                  Characteristics
                </Typography>
              </Box>


              <Box sx={{
                marginTop: "10px",
                paddingLeft: {md: "40px", xs: "5px"},
              }}>
                <Typography>
                  {findProduct.description}
                </Typography>
                <Typography>
                  {findProduct.category}
                </Typography>
              </Box>

            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{
                p: "20px",
                background: "#f3f3f7"
              }}>
                <Box>

                  <Typography
                    sx={{
                      fontSize: "28px",
                      lineHeight: "36px",
                      fontWeight: "700"
                    }}
                  >
                    {findProduct.price} $
                  </Typography>
                  <Button
                    fullWidth
                    sx={{
                      background: "red",
                      color: "#fff",
                      '&:hover': {
                        background: "darkred",
                        color: "#fff"
                      }
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>

              </Paper>
            </Grid>

          </Grid>
        </Grid>


        <Grid container spacing={1}
              sx={{
                marginTop: "60px",
                marginBottom: "30px"
              }}
        >
          <Grid item xs={12} sx={{}}>
            <Typography variant={"h4"}>
              Reviews
            </Typography>
          </Grid>
        </Grid>


        <Grid container justifyContent="center" alignItems="center">
          <IconButton onClick={handlePrev}>
            <ArrowBackIosIcon />
          </IconButton>
          {items.map((item) => (
            <Grow
              in={activeIndex === item.id - 1}
              key={item.id}
              style={{transformOrigin: '0 0'}}
              timeout={{enter: 500, exit: 0}}
            >
              <Grid item className={activeIndex === item.id - 1 ? 'slide-active' : 'slide-inactive'}>
                {item.content}
              </Grid>
            </Grow>
          ))}

          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>

      </Grid>
    </>
  )

}));

export default ProductItemPage;