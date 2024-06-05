import {makeAutoObservable} from "mobx";
import Moment from 'moment';

export default class TableViewStore {

  state = {
    calendarRef:null,
    calendarDate: null,
    calendarFullDate: null,
    openDatePicker: false,
    anchorEl: null,
    openModalRecord: false,
    event: {},
    popoverEvent: {},

    refetching: false
  }

  firstCalendarDate = null
  lastCalendarDate = null

  constructor() {
    makeAutoObservable(this)
  }

  get openDatePicker() {
    return this.state.openDatePicker
  }

  get calendarDate() {
    return this.state.calendarDate
  }

  get calendarFullDate() {
    return this.state.calendarFullDate
  }

  get openModalRecord() {
    return this.state.openModalRecord
  }

  get anchorEl() {
    return this.state.anchorEl
  }

  get isPopoverOpen() {
    return Boolean(this.state.anchorEl)
  }

  get popoverEvent() {
    return this.state.popoverEvent
  }

  setOpenDatePicker(open) {
    this.state.openDatePicker = open
  }

  setCalendarNext() {
    this.state.calendarRef.current.getApi().next()
    this.setCalendarDate()
  }

  setCalendarTimelineDay() {
    this.state.calendarRef.current.getApi().changeView('resourceTimelineDay');
  }

  setCalendarTimelineWeek() {
    this.state.calendarRef.current.getApi().changeView('resourceTimelineWeek');
  }

  setCalendarTimelineMonth() {
    this.state.calendarRef.current.getApi().changeView('resourceTimelineMonth');
  }

  setCalendarPrev() {
    this.state.calendarRef.current.getApi().prev()
    this.setCalendarDate()
  }

  setCalendarToday() {
    this.state.calendarRef.current.getApi().today()
    this.setCalendarDate()
  }

  setCalendarRef(ref) {
    this.state.calendarRef = ref
  }

  setGoCalendarDate(date) {
    this.state.calendarRef.current.getApi().gotoDate(date)
    this.setCalendarDate()
  }

  setCalendarDate() {
    const date = this.state.calendarRef.current.getApi().getDate()
    this.state.calendarDate = Moment(date).format("MMMM YYYY");
    this.state.calendarFullDate = date;
  }

  setAnchorEl(element) {
    this.state.anchorEl = element
  }

  setOpenModalRecord(isOpen) {
    this.state.openModalRecord = isOpen
  }

  setEvent(event) {
    this.state.event = event
  }

  setPopoverEvent(event) {
    this.state.popoverEvent = event
  }

  setRefetching(data) {

    this.state.refetching = data
  }

  get refetching() {
    return this.state.refetching
  }

  setFirstCalendarDate(date) {
    this.firstCalendarDate = date
  }

  setLastCalendarDate(date) {
    this.lastCalendarDate = date
  }
}