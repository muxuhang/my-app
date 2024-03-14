// 用来定义默认数据，并导出一个函数
// 定义默认数据
const defaultState = {
  str: "前端开发"
}
// 导出一个函数
// 传实际参数就用实际参数，没有传参数就用defaultState
export default (state = defaultState, action: any) => {
  return state
};