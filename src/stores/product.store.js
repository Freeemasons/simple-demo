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
    console.log("DATA", toJS(this.state.data))
  }

  get data(){

    return this.state.data
  }

}

export default ProductStore