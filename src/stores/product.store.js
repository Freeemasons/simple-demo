import { makeAutoObservable, toJS } from "mobx";



class ProductStore{

  state = {
    data: null
  }

  constructor() {
    makeAutoObservable(this)
  }

  setProductData(data){

    this.state.data = data
  }

  get data(){

    return this.state.data
  }

}

export default ProductStore