import {makeAutoObservable} from "mobx";

export default class NavStore {
  menuId = 'primary-search-account-menu'
  mobileMenuId = 'primary-search-account-mobile-menu'
  menuAnchorEl = null
  mobileMenuAnchorEl = null
  headerTitle = 'Расписание'
  drawerWidth = 240
  isMobileOpen = false
  isMenuOpen = false
  isMobileMenuOpen = false
  selectedIndex = 0
  paperPadding = 3
  copyTextForClipboard = null

  currentPagePath = ""

  constructor() {
    makeAutoObservable(this)
  }

  get copyText() {
    return this.copyTextForClipboard
  }

  setCopyText(str) {
    this.copyTextForClipboard = str
  }

  setCurrentPathName(name) {
    this.currentPagePath = name
  }

  get currentPathName() {
    return this.currentPagePath
  }

  setMenuOpen(isOpen) {
    this.isMenuOpen = isOpen
  }

  setMobileMenuOpen(isOpen) {
    this.isMobileMenuOpen = isOpen
  }

  setMenuAnchorEl(element) {
    this.menuAnchorEl = element
  }

  setMobileMenuAnchorEl(element) {
    this.mobileMenuAnchorEl = element
  }

  setHeaderTitle(text) {
    this.headerTitle = text
  }

  setSelectedIndex(index) {
    this.setCopyText(null)
    this.selectedIndex = index
  }

  toggleMobileOpen() {
    this.isMobileOpen = !this.isMobileOpen
  }

  closeMobileMenu() {
    this.isMobileOpen = false
  }
}