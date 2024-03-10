/* import Vant from 'vant'
import 'vant/lib/index.css'
// 插件安装初始化：内部会将所有的vant组件进行导入注册
Vue.use(Vant) */
import Vue from 'vue'
import { Icon, Search, Swipe, SwipeItem, Grid, GridItem, Button, Switch, Rate, Tabbar, TabbarItem, NavBar, Toast, ActionSheet, Dialog, Checkbox, CheckboxGroup } from 'vant'

Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Rate)
