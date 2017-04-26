import Icon from './components/icon'
import Card from './components/card'
import Button from './components/button'
import Breadcrumb from './components/breadcrumb'

const ikaros = {
  Icon,
  Card,
  Button,
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.item
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
