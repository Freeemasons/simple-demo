import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Grid, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { observer } from "mobx-react-lite"
import RefreshIcon from "@mui/icons-material/Refresh"
import { toJS } from "mobx"
import { useInstance } from "react-ioc"
import ProductStore from "../../stores/product.store"

const Filters = (observer((props) => {

  const productStore = useInstance(ProductStore)
  console.log("productStore?.data", toJS(productStore?.data))


  const {
    categories, selectedCategories, handleCheckboxChange,
    fetchProducts, setSelectedCategories, setSearchText, setItemsToShow
  } = props


  return (

    <Grid item xs={12} md={3}>
      <Accordion
        disableGutters
        // elevation={0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            Filters
          </Typography>

        </AccordionSummary>
        <AccordionDetails>

          <Box sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Typography>
              Category
            </Typography>

            <Button
              onClick={() => {
                // dataSet(null)
                productStore.setProductData([])
                fetchProducts()
                setSelectedCategories([])
                setSearchText("")
                setItemsToShow(8)
              }}
            >
              <RefreshIcon /> Clear search
            </Button>
          </Box>


          {categories && categories.map((category) => (
            <div key={category}>
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </div>
          ))}

        </AccordionDetails>
      </Accordion>
    </Grid>
  )

}));

export default Filters;