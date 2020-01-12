let defaultCity = '北京'

try {
  if (localStorage.city) { // 默认从localStorage去取，取不到则取北京
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  cityxxx: defaultCity
}
