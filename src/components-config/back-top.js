import toTopComponent from '@components/BackTop'

// 添加install方法
toTopComponent.install = function (Vue) {
  Vue.component(toTopComponent.name, toTopComponent)
}

export default toTopComponent
