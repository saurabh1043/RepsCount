import Vue from 'vue'
import moment from 'moment'
import numeral from 'numeral'

Vue.filter('moment', (date, format) => {
  return format ? moment(date).format(format) : moment(date).format('YYYY-MM-DD')
})

Vue.filter('numeral', (value, format, hideZero) => {
  const data = format ? numeral(value).format(format) : numeral(value).format('0,0.[00]')
  return hideZero && Number(data) === 0 ? '' : data
})
