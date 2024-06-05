import {makeAutoObservable} from "mobx";

export default class StoreTableModal {


  state = {
    openModal: false,
    openConfirmModal: false
  }
  date = null
  refetching = false

  constructor() {
    makeAutoObservable(this)
  }

  get openModal() {
    return this.state.openModal
  }


  get dateGet () {
    return this.date
  }

  get refetchingGet () {
    return this.refetching
  }

  setOpenTableModal(open) {
    this.state.openModal = open
  }

  setDate(date) {
    this.date = date
  }

  setRefetching(value) {

    this.refetching = value
  }

  getOpenConfirmModal() {
    return this.state.openConfirmModal
  }

  setOpenConfirmModal(value) {
    console.log("confirm?", value)
    this.state.openConfirmModal = value
  }
  }