"use strict";(self["webpackChunkjojo_shopping"]=self["webpackChunkjojo_shopping"]||[]).push([[886],{886:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.getPicCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.MsgCode,expression:"MsgCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.MsgCode},on:{input:function(e){e.target.composing||(t.MsgCode=e.target.value)}}}),e("button",{on:{click:t.getCode}},[t._v(t._s(t.second===t.totalSecond?"获取验证码":t.second+"秒后重新发送"))])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],a=s(471);const n=()=>a.Z.get("/captcha/image"),c=(t,e,s)=>a.Z.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:s}}),l=(t,e)=>a.Z.post("/passport/login",{form:{isParty:!1,mobile:t,partyData:{},smsCode:e}});var r={name:"LoginIndex",data(){return{picCode:"",picKey:"",picUrl:"",totalSecond:60,second:60,timer:null,mobile:"13811112222",MsgCode:""}},async created(){this.getPicCode()},methods:{async getPicCode(){const{data:{base64:t,key:e}}=await n();this.picUrl=t,this.picKey=e},validFn(){return/^1[3-9]\d{9}$/.test(this.mobile)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("请输入正确的图形验证码"),!1):(this.$toast("请输入正确的手机号"),!1)},async getCode(){this.validFn()&&(this.timer||this.second!==this.totalSecond||(await c(this.picCode,this.picKey,this.mobile),this.$toast("短信发送成功，请注意查收"),this.timer=setInterval((()=>{this.second--,this.MsgCode="246810",this.second<=0&&(clearInterval(this.timer),this.timer=null,this.second=this.totalSecond)}),1e3)))},async login(){if(!this.validFn())return;if(!/^\d{6}$/.test(this.MsgCode))return void this.$toast("请输入正确的短信验证码");const t=await l(this.mobile,this.MsgCode);this.$store.commit("user/setUserInfo",t.data),console.log(t),this.$toast("登录成功");const e=this.$route.query.backUrl||"/";this.$router.replace(e)}},destroyed(){clearInterval(this.timer)}},d=r,p=s(1001),m=(0,p.Z)(d,i,o,!1,null,"a29bf940",null),h=m.exports}}]);
//# sourceMappingURL=886.2ae123ce.js.map