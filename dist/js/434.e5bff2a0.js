"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[434],{4434:function(t,o,s){s.r(o),s.d(o,{default:function(){return c}});var e=function(){var t=this,o=t._self._c;return o("div",{staticClass:"login-container"},[o("van-nav-bar",{staticClass:"page-nav",attrs:{title:"登录"},scopedSlots:t._u([{key:"left",fn:function(){return[o("van-icon",{attrs:{name:"cross"},on:{click:function(o){return t.$router.back()}}})]},proxy:!0}])}),o("van-form",{ref:"loginForm",on:{submit:t.onSubmit}},[o("van-field",{attrs:{name:"mobile",label:"手机号",placeholder:"手机号",rules:t.userFormRules.mobile},scopedSlots:t._u([{key:"left-icon",fn:function(){return[o("i",{staticClass:"toutiao toutiao-shouji"})]},proxy:!0}]),model:{value:t.user.mobile,callback:function(o){t.$set(t.user,"mobile",o)},expression:"user.mobile"}}),o("van-field",{attrs:{type:"password",name:"code",label:"验证码",placeholder:"验证码",rules:t.userFormRules.code},scopedSlots:t._u([{key:"button",fn:function(){return[t.isCountDownShow?o("van-count-down",{attrs:{time:5e3,format:"ss 秒"},on:{finish:function(o){t.isCountDownShow=!1}}}):o("van-button",{attrs:{"native-type":"button",size:"small",type:"default"},on:{click:t.onSendSms}},[t._v("发送验证码")])]},proxy:!0}]),model:{value:t.user.code,callback:function(o){t.$set(t.user,"code",o)},expression:"user.code"}},[o("i",{staticClass:"toutiao toutiao-yanzhengma",attrs:{slot:"left-icon"},slot:"left-icon"})]),o("div",{staticClass:"login-btn-wrap"},[o("van-button",{staticClass:"login-btn",attrs:{block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1)],1)],1)},n=[],a=s(432),i={name:"LoginIndex",data(){return{user:{mobile:"",code:""},userFormRules:{mobile:[{required:!0,message:"手机号不能为空"},{pattern:/^1[3|5|7|8]\d{9}$/,message:"手机号格式错误"}],code:[{required:!0,message:"验证码不能为空"},{pattern:/^\d{6}$/,message:"验证码格式错误"}]},isCountDownShow:!1}},methods:{async onSubmit(){const t=this.$toast.loading({duration:0,message:"加载中...",forbidClick:!0});console.log("submit",this.user);try{const t=await(0,a.UO)({mobile:this.user.mobile,code:this.user.code});this.$toast.success("登录成功"),console.log("登录成功",t),this.$store.commit("setUser",t.data.data),this.$router.back()}catch(o){t.clear(),400===o.response.status?(console.log("手机号或验证码错误",o),this.$toast.fail("手机号或验证码错误")):(console.log("系统错误，请稍后重试",o),this.$toast.fail("系统错误，请稍后重试"))}},async onSendSms(){try{await this.$refs.loginForm.validate("mobile"),console.log("验证成功"),this.isCountDownShow=!0}catch(t){console.log("验证失败",t)}try{await(0,a.p1)(this.user.mobile),this.$toast("验证码发送成功")}catch(t){this.isCountDownShow=!1,429===t.response.status?this.$toast.fail("发送过于频繁，请稍后重试"):this.$toast.fail("发送失败，请重试")}}}},l=i,r=s(1001),u=(0,r.Z)(l,e,n,!1,null,"dc5cc056",null),c=u.exports}}]);
//# sourceMappingURL=434.e5bff2a0.js.map