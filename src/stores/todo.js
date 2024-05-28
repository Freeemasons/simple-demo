import { makeAutoObservable, toJS } from "mobx";

class TodosStore {

  todos = []

  constructor() {
    makeAutoObservable(this)
  }


}