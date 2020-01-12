export default {
  changeCityxxx (state, city) { // state公用数据
    state.cityxxx = city
    try { // 使用try包裹的原因是为了防止用户开启隐身模式导致的localStorage失效
      localStorage.city = city // 直接将city赋值给localStorage
    } catch (e) {}
  }
}
