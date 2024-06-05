import React, { useCallback, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite"
import Header from "./header"
import SearchField from "./searchField"
import CardlList from "./cardlList"
import { useInstance } from "react-ioc"
import NavStore from "../../stores/nav.store"
import { Grid } from "@mui/material"
import Filters from "./filters"
import ProductStore from "../../stores/product.store"



const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];


const ProductListPage = (observer(() => {

  const nav = useInstance(NavStore)
  const productStore = useInstance(ProductStore)

  const [data, dataSet] = useState(null)

  const [itemsToShow, setItemsToShow] = useState(8);
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    document.title = "Products";
    nav?.setHeaderTitle("Products");
    nav?.setSelectedIndex(6);
  }, [nav]);

  const fetchProducts = useCallback(() => {
    return new Promise((resolve, reject) => {
      fetch(`https://fakestoreapi.com/products`)
        .then(response => {

          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          dataSet(data);
          productStore.setProductData(data)
          resolve(data);
        })
        .catch(error => {

          alert(`Ошибка! ${error}`)
          // reject(error);
        });
    });
  }, []);


  useEffect(() => {

    fetchProducts()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function

  }, [selectedCategories])


  const handleSearch = (event) => {

    setSearchText(event?.target?.value);
  };


  const searchResults = productStore?.data && productStore?.data.filter(obj => obj.title.toLowerCase().includes(searchText.toLowerCase()));

  const handleShowMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 8);
  };


  const handleCheckboxChange = (category) => {

    if (selectedCategories.includes(category)) {

      setSelectedCategories(selectedCategories?.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  const filteredDataSec = searchResults && searchResults?.filter(item => {


    if (selectedCategories.length <= 0) {
      return selectedCategories
    } else return selectedCategories.includes(item.category)
  });


  return (
    <>
      <Header />

      <SearchField handleSearch={handleSearch} searchText={searchText} />

      <Grid
        container
        spacing={2}
      >
        <Filters
          categories={categories}
          selectedCategories={selectedCategories}
          handleCheckboxChange={handleCheckboxChange}
          dataSet={dataSet}
          fetchProducts={fetchProducts}
          setSelectedCategories={setSelectedCategories}
          setSearchText={setSearchText}
          setItemsToShow={setItemsToShow}
        />

        <CardlList
          itemsToShow={itemsToShow}
          handleShowMore={handleShowMore}
          filteredDataSec={filteredDataSec}
        />

      </Grid>
    </>
  )

}));

export default ProductListPage;