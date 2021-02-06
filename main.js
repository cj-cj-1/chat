import Vue from 'vue'
import App from './App'
import {myHttp, myUploadFile} from './request/index.js'
import io from '@/util/js/weapp.socket.io.js'

let serverUrl = 'http://localhost:3002'
Vue.config.productionTip = false
Vue.prototype.$myHttp = myHttp
Vue.prototype.$myUploadFile = myUploadFile
Vue.prototype.socket = io(serverUrl)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
