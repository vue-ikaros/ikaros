import Icon from './components/icon'

const ikaros = {
  Icon
}

const install = function (Vue, opts) {
  Object.keys(ikaros).forEach((key) => {
    Vue.component(key, ikaros[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(ikaros, {install})
