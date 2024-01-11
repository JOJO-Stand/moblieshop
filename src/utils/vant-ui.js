/* import Vant from 'vant'
import 'vant/lib/index.css'
// 插件安装初始化：内部会将所有的vant组件进行导入注册
Vue.use(Vant) */
import Vue from 'vue'
import { Button, Switch, Rate, Tabbar, TabbarItem, NavBar, Toast } from 'vant'

Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Rate)
