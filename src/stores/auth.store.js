import {makeAutoObservable} from "mobx";



class AuthStore {
   user = JSON.parse(localStorage.getItem('user')) || {
     id: null,
     email: null,
     firstName: null,
     lastName: null,
     birthday: null,
     sip: null,
     isSpecialist: null,
     isManagementGroup: null,
     isOwnerAdmin: null,
   }
  isAuth = false
  isLoading = false
  menuAnchorEl = null
  // currentMedicalCenterId = localStorage.getItem('medical_center_id') || '1'

  isNavigateHome = localStorage.getItem('is_navigate_home') || false

  constructor() {
    this.checkAuth()
    makeAutoObservable(this)
  }

  setMenuAnchorEl(element) {
    this.menuAnchorEl = element
  }

  setIsLoading(is_loading) {
    this.isLoading = is_loading
  }


  setIsAuth(is_auth) {
    this.isAuth = is_auth
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
    this.user = user
  }

  async login(username, password) {


    // if (data) {
    //   this.setUser(data.user)
    //   this.setMedicalCentersData(data.centers)
    //   this.setIsNavigateHome(false)
    //   this.setIsAuth(true)
    //   return true
    // }
    return false
  }

  async logout() {

    this.setIsAuth(false)
  }

  setIsNavigateHome(is_navigate){
     this.isNavigateHome = is_navigate
     localStorage.setItem('is_navigate_home', is_navigate)
  }

  checkAuth(){
     if (this.user.id){
       this.setIsAuth(true)
     }
  }

}

const authStore = new AuthStore()
export default authStore