import { makeAutoObservable, toJS } from "mobx";



class ProductStore{

  state = {

  }

  constructor() {
    makeAutoObservable(this)
  }




}

export default ProductStore