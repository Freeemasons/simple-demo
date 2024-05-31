import React, { useCallback, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite"
import Header from "./header"
import SearchField from "./searchField"
import CardlList from "./cardlList"
import { useInstance } from "react-ioc"
import NavStore from "../../stores/nav.store"

const ProductListPage = (observer(() => {

  const nav = useInstance(NavStore)

  useEffect(() => {
    document.title = "Products";
    nav?.setHeaderTitle("Products");
    nav?.setSelectedIndex(6);
  }, [nav]);


  const [data, dataSet] = useState(null)
  const [itemsToShow, setItemsToShow] = useState(8);

  const handleShowMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 8);
  };


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


  return (
    <>
      <Header />
      <SearchField />
      <CardlList
        data={data}
        itemsToShow={itemsToShow}
        handleShowMore={handleShowMore}
      />
    </>
  )

}));

export default ProductListPage;