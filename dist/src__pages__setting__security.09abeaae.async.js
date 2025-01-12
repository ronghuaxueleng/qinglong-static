"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5530],{18659:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(98037),o=r(63313),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=r(71760),i=function(e,t){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:n}))};i.displayName="CheckOutlined";var s=o.forwardRef(i)},13388:function(e,t,r){r.r(t);var a=r(54306),o=r.n(a),n=r(88265),l=r(63313),i=r(22267),s=r(78045),c=r(74493),u=r(48079),p=r(97567),g=r(45724),d=r(95012),f=r(99606),h=r(71370),m=r(93386),P=r(48039),Z=r.n(P),v=r(40971),b=r(85315),y=r(3517),x=r(33006),k=(r(24301),r(11527)),w=i.Z.Title,q=i.Z.Link;t.default=function(e){var t=e.user,r=e.userChange,a=(0,l.useState)(!1),i=o()(a,2),P=i[0],B=i[1],C=(0,l.useState)(),j=o()(C,2),E=j[0],S=j[1],T=(0,l.useState)(!1),_=o()(T,2),O=_[0],A=_[1],K=(0,l.useState)(),R=o()(K,2),z=R[0],W=R[1],U=(0,l.useState)(),H=o()(U,2),N=H[0],M=H[1],Q=(0,l.useState)(),X=o()(Q,2),D=X[0],I=X[1],L=function(){f.W.put("".concat(h.Z.apiPrefix,"user/two-factor/deactive")).then((function(e){var t=e.code,a=e.data;200===t&&a&&(S(!1),r())})).catch((function(e){console.log(e)}))},G=function(){f.W.get("".concat(h.Z.apiPrefix,"user/two-factor/init")).then((function(e){var t=e.code,r=e.data;200===t&&W(r)})).catch((function(e){console.log(e)}))};return(0,l.useEffect)((function(){S(t&&t.twoFactorActivated),I(t.avatar&&"".concat(h.Z.apiPrefix,"static/").concat(t.avatar))}),[t]),O?(0,k.jsx)(k.Fragment,{children:z?(0,k.jsxs)("div",{children:[(0,k.jsx)(w,{level:5,children:n.ZP.get("第一步")}),n.ZP.get("下载两步验证手机应用，比如 Google Authenticator 、"),(0,k.jsx)(q,{href:"https://www.microsoft.com/en-us/security/mobile-authenticator-app",target:"_blank",children:"Microsoft Authenticator"}),"、",(0,k.jsx)(q,{href:"https://authy.com/download/",target:"_blank",children:"Authy"}),"、",(0,k.jsx)(q,{href:"https://support.1password.com/one-time-passwords/",target:"_blank",children:"1Password"}),"、",(0,k.jsx)(q,{href:"https://support.logmeininc.com/lastpass/help/lastpass-authenticator-lp030014",target:"_blank",children:"LastPass Authenticator"}),(0,k.jsx)(w,{style:{marginTop:5},level:5,children:n.ZP.get("第二步")}),n.ZP.get("使用手机应用扫描二维码，或者输入秘钥")," ",null==z?void 0:z.secret,(0,k.jsx)("div",{style:{marginTop:10},children:(0,k.jsx)(Z(),{style:{border:"1px solid #21262d",borderRadius:6},includeMargin:!0,size:187,value:null==z?void 0:z.url})}),(0,k.jsx)(w,{style:{marginTop:5},level:5,children:n.ZP.get("第三步")}),n.ZP.get("输入手机应用上的6位数字"),(0,k.jsx)(c.Z,{style:{margin:"10px 0 10px 0",display:"block",maxWidth:200},value:N,onChange:function(e){return M(e.target.value)},placeholder:"123456"}),(0,k.jsx)(u.Z,{type:"primary",loading:P,onClick:function(){B(!0),f.W.put("".concat(h.Z.apiPrefix,"user/two-factor/active"),{code:N}).then((function(e){var t=e.code,a=e.data;200===t&&(a?(s.ZP.success(n.ZP.get("激活成功")),A(!1),S(!0),r()):s.ZP.success(n.ZP.get("验证失败")))})).catch((function(e){console.log(e)})).finally((function(){return B(!1)}))},children:n.ZP.get("完成设置")})]}):(0,k.jsx)(v.Z,{})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{style:{fontSize:18,borderBottom:"1px solid #f0f0f0",marginBottom:8,paddingBottom:4},children:n.ZP.get("修改用户名密码")}),(0,k.jsxs)(p.Z,{onFinish:function(e){f.W.put("".concat(h.Z.apiPrefix,"user"),{username:e.username,password:e.password}).then((function(e){var t=e.code;e.data;200===t&&(localStorage.removeItem(h.Z.authKey),m.history.push("/login"))})).catch((function(e){console.log(e)}))},layout:"vertical",children:[(0,k.jsx)(p.Z.Item,{label:n.ZP.get("用户名"),name:"username",rules:[{required:!0}],hasFeedback:!0,style:{maxWidth:300},children:(0,k.jsx)(c.Z,{autoComplete:"username",placeholder:n.ZP.get("用户名")})}),(0,k.jsx)(p.Z.Item,{label:n.ZP.get("密码"),name:"password",rules:[{required:!0},{pattern:/^(?!admin$).*$/,message:n.ZP.get("密码不能为admin")}],hasFeedback:!0,style:{maxWidth:300},children:(0,k.jsx)(c.Z,{type:"password",autoComplete:"current-password",placeholder:n.ZP.get("密码")})}),(0,k.jsx)(u.Z,{type:"primary",htmlType:"submit",children:n.ZP.get("保存")})]}),(0,k.jsx)("div",{style:{fontSize:18,borderBottom:"1px solid #f0f0f0",marginBottom:8,paddingBottom:4,marginTop:16},children:n.ZP.get("两步验证")}),(0,k.jsx)(u.Z,{type:"primary",danger:E,onClick:function(){E?L():(G(),A(!0))},children:E?n.ZP.get("禁用"):n.ZP.get("启用")}),(0,k.jsx)("div",{style:{fontSize:18,borderBottom:"1px solid #f0f0f0",marginBottom:8,paddingBottom:4,marginTop:16},children:n.ZP.get("头像")}),(0,k.jsx)(g.C,{size:128,shape:"square",icon:(0,k.jsx)(b.Z,{}),src:D}),(0,k.jsx)(x.Z,{rotationSlider:!0,children:(0,k.jsx)(d.Z,{method:"put",showUploadList:!1,maxCount:1,action:"".concat(h.Z.apiPrefix,"user/avatar"),onChange:function(e){e.file&&e.file.response&&(I("".concat(h.Z.apiPrefix,"static/").concat(e.file.response.data)),r())},name:"avatar",headers:{Authorization:"Bearer ".concat(localStorage.getItem(h.Z.authKey))},children:(0,k.jsx)(u.Z,{icon:(0,k.jsx)(y.Z,{}),style:{marginLeft:8},children:n.ZP.get("更换头像")})})})]})}},71370:function(e,t,r){var a=r(88265),o=window.__ENV__QlBaseUrl||"/";t.Z={siteName:a.ZP.get("青龙"),baseUrl:o,apiPrefix:"".concat(o,"api/"),authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Português",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:a.ZP.get("中文"),flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:a.ZP.get("定时任务"),value:"crons"},{name:a.ZP.get("环境变量"),value:"envs"},{name:a.ZP.get("订阅管理"),value:"subscriptions"},{name:a.ZP.get("配置文件"),value:"configs"},{name:a.ZP.get("脚本管理"),value:"scripts"},{name:a.ZP.get("日志管理"),value:"logs"},{name:a.ZP.get("依赖管理"),value:"dependencies"},{name:a.ZP.get("系统信息"),value:"system"}],scopesMap:{crons:a.ZP.get("定时任务"),envs:a.ZP.get("环境变量"),subscriptions:a.ZP.get("订阅管理"),configs:a.ZP.get("配置文件"),scripts:a.ZP.get("脚本管理"),logs:a.ZP.get("日志管理"),dependencies:a.ZP.get("依赖管理"),system:a.ZP.get("系统信息")},notificationModes:[{value:"gotify",label:"Gotify"},{value:"ntfy",label:"Ntfy"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:a.ZP.get("Server酱")},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:a.ZP.get("Telegram机器人")},{value:"dingtalkBot",label:a.ZP.get("钉钉机器人")},{value:"weWorkBot",label:a.ZP.get("企业微信机器人")},{value:"weWorkApp",label:a.ZP.get("企业微信应用")},{value:"aibotk",label:a.ZP.get("智能微秘书")},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"wePlusBot",label:a.ZP.get("微加机器人")},{value:"chat",label:a.ZP.get("群晖chat")},{value:"email",label:a.ZP.get("邮箱")},{value:"lark",label:a.ZP.get("飞书机器人")},{value:"pushMe",label:"PushMe"},{value:"chronocat",label:"Chronocat"},{value:"webhook",label:a.ZP.get("自定义通知")},{value:"closed",label:a.ZP.get("已关闭")}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:a.ZP.get("gotify的url地址，例如 https://push.example.de:8080"),required:!0},{label:"gotifyToken",tip:a.ZP.get("gotify的消息应用token码"),required:!0},{label:"gotifyPriority",tip:a.ZP.get("推送消息的优先级")}],ntfy:[{label:"ntfyUrl",tip:a.ZP.get("ntfy的url地址，例如 https://ntfy.sh"),required:!0},{label:"ntfyTopic",tip:a.ZP.get("ntfy的消息应用topic"),required:!0},{label:"ntfyPriority",tip:a.ZP.get("推送消息的优先级")}],chat:[{label:"chatUrl",tip:a.ZP.get("chat的url地址"),required:!0},{label:"chatToken",tip:a.ZP.get("chat的token码"),required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:a.ZP.get("推送到个人QQ: http://127.0.0.1/send_private_msg，群：http://127.0.0.1/send_group_msg"),required:!0},{label:"goCqHttpBotToken",tip:a.ZP.get("访问密钥"),required:!0},{label:"goCqHttpBotQq",tip:a.ZP.get("如果GOBOT_URL设置 /send_private_msg 则需要填入 user_id=个人QQ 相反如果是 /send_group_msg 则需要填入 group_id=QQ群"),required:!0}],serverChan:[{label:"serverChanKey",tip:a.ZP.get("Server酱SENDKEY"),required:!0}],pushDeer:[{label:"pushDeerKey",tip:a.ZP.get("PushDeer的Key，https://github.com/easychen/pushdeer"),required:!0},{label:"pushDeerUrl",tip:a.ZP.get("PushDeer的自架API endpoint，默认是 https://api2.pushdeer.com/message/push")}],bark:[{label:"barkPush",tip:a.ZP.get("Bark的信息IP/设备码，例如：https://api.day.app/XXXXXXXX"),required:!0},{label:"barkIcon",tip:a.ZP.get("BARK推送图标，自定义推送图标 (需iOS15或以上才能显示)")},{label:"barkSound",tip:a.ZP.get("BARK推送铃声，铃声列表去APP查看复制填写")},{label:"barkGroup",tip:a.ZP.get("BARK推送消息的分组，默认为qinglong")},{label:"barkLevel",tip:a.ZP.get("BARK推送消息的时效性，默认为active")},{label:"barkUrl",tip:a.ZP.get("BARK推送消息的跳转URL")},{label:"barkArchive",tip:a.ZP.get("BARK是否保存推送消息")}],telegramBot:[{label:"telegramBotToken",tip:a.ZP.get("telegram机器人的token，例如：1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw"),required:!0},{label:"telegramBotUserId",tip:a.ZP.get("telegram用户的id，例如：129xxx206"),required:!0},{label:"telegramBotProxyHost",tip:a.ZP.get("代理IP")},{label:"telegramBotProxyPort",tip:a.ZP.get("代理端口")},{label:"telegramBotProxyAuth",tip:a.ZP.get("telegram代理配置认证参数，用户名与密码用英文冒号连接 user:password")},{label:"telegramBotApiHost",tip:a.ZP.get("telegram api自建的反向代理地址，默认tg官方api")}],dingtalkBot:[{label:"dingtalkBotToken",tip:a.ZP.get("钉钉机器人webhook token，例如：5a544165465465645d0f31dca676e7bd07415asdasd"),required:!0},{label:"dingtalkBotSecret",tip:a.ZP.get("密钥，机器人安全设置页面，加签一栏下面显示的SEC开头的字符串")}],weWorkBot:[{label:"weWorkBotKey",tip:a.ZP.get("企业微信机器人的webhook(详见文档 https://work.weixin.qq.com/api/doc/90000/90136/91770)，例如：693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa"),required:!0},{label:"weWorkOrigin",tip:a.ZP.get("企业微信代理地址")}],weWorkApp:[{label:"weWorkAppKey",tip:a.ZP.get("corpid、corpsecret、touser(注:多个成员ID使用|隔开)、agentid、消息类型(选填，不填默认文本消息类型) 注意用,号隔开(英文输入法的逗号)，例如：wwcfrs,B-76WERQ,qinglong,1000001,2COat"),required:!0},{label:"weWorkOrigin",tip:a.ZP.get("企业微信代理地址")}],aibotk:[{label:"aibotkKey",tip:a.ZP.get("密钥key，智能微秘书个人中心获取apikey，申请地址：https://wechat.aibotk.com/signup?from=ql"),required:!0},{label:"aibotkType",tip:a.ZP.get("发送的目标，群组或者好友"),required:!0,placeholder:a.ZP.get("请输入要发送的目标"),items:[{value:"room",label:a.ZP.get("群聊")},{value:"contact",label:a.ZP.get("好友")}]},{label:"aibotkName",tip:a.ZP.get("要发送的用户昵称或群名，如果目标是群，需要填群名，如果目标是好友，需要填好友昵称"),required:!0}],iGot:[{label:"iGotPushKey",tip:a.ZP.get("iGot的信息推送key，例如：https://push.hellyw.com/XXXXXXXX"),required:!0}],pushPlus:[{label:"pushPlusToken",tip:a.ZP.get("微信扫码登录后一对一推送或一对多推送下面的token(您的Token)，不提供PUSH_PLUS_USER则默认为一对一推送，参考 https://www.pushplus.plus/"),required:!0},{label:"pushPlusUser",tip:a.ZP.get("一对多推送的“群组编码”（一对多推送下面->您的群组(如无则创建)->群组编码，如果您是创建群组人。也需点击“查看二维码”扫描绑定，否则不能接受群组消息推送）")}],wePlusBot:[{label:"wePlusBotToken",tip:a.ZP.get("用户令牌，扫描登录后 我的—>设置->令牌 中获取，参考 https://www.weplusbot.com/"),required:!0},{label:"wePlusBotReceiver",tip:a.ZP.get("消息接收人")},{label:"wePlusBotVersion",tip:a.ZP.get("调用版本；专业版填写pro，个人版填写personal，为空默认使用专业版")}],lark:[{label:"larkKey",tip:a.ZP.get("飞书群组机器人：https://www.feishu.cn/hc/zh-CN/articles/360024984973"),required:!0}],email:[{label:"emailService",tip:a.ZP.get("邮箱服务名称，比如126、163、Gmail、QQ等，支持列表https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json"),required:!0},{label:"emailUser",tip:a.ZP.get("邮箱地址"),required:!0},{label:"emailPass",tip:a.ZP.get("SMTP 登录密码，也可能为特殊口令，视具体邮件服务商说明而定"),required:!0}],pushMe:[{label:"pushMeKey",tip:a.ZP.get("PushMe的Key，https://push.i-i.me/"),required:!0},{label:"pushMeUrl",tip:a.ZP.get("自建的PushMeServer消息接口地址，例如：http://127.0.0.1:3010，不填则使用官方消息接口"),required:!1}],chronocat:[{label:"chronocatURL",tip:a.ZP.get("Chronocat Red 服务的连接地址 https://chronocat.vercel.app/install/docker/official/"),required:!0},{label:"chronocatQQ",tip:a.ZP.get("个人:user_id=个人QQ 群则填入group_id=QQ群 多个用英文;隔开同时支持个人和群 如：user_id=xxx;group_id=xxxx;group_id=xxxxx"),required:!0},{label:"chronocatToken",tip:a.ZP.get("docker安装在持久化config目录下的chronocat.yml文件可找到"),required:!0}],webhook:[{label:"webhookMethod",tip:a.ZP.get("请求方法"),required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:a.ZP.get("请求头Content-Type"),required:!0,items:[{value:"text/plain"},{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:a.ZP.get("请求链接以http或者https开头。url或者body中必须包含$title，$content可选，对应api内容的位置"),required:!0,placeholder:"https://xxx.cn/api?content=$title\n"},{label:"webhookHeaders",tip:a.ZP.get("请求头格式Custom-Header1: Header1，多个换行分割"),placeholder:"Custom-Header1: Header1\nCustom-Header2: Header2"},{label:"webhookBody",tip:a.ZP.get("请求体格式key1: value1，多个换行分割。url或者body中必须包含$title，$content可选，对应api内容的位置"),placeholder:"key1: $title\nkey2: $content"}]},documentTitleMap:{"/login":a.ZP.get("登录"),"/initialization":a.ZP.get("初始化"),"/crontab":a.ZP.get("定时任务"),"/env":a.ZP.get("环境变量"),"/subscription":a.ZP.get("订阅管理"),"/config":a.ZP.get("配置文件"),"/script":a.ZP.get("脚本管理"),"/diff":a.ZP.get("对比工具"),"/log":a.ZP.get("日志管理"),"/setting":a.ZP.get("系统设置"),"/error":a.ZP.get("错误日志"),"/dependence":a.ZP.get("依赖管理")},dependenceTypes:["nodejs","python3","linux"]}},99606:function(e,t,r){r.d(t,{W:function(){return h}});var a=r(25359),o=r.n(a),n=r(49811),l=r.n(n),i=r(88265),s=r(78045),c=r(71370),u=r(93386),p=r(73669);s.ZP.config({duration:2});var g=Date.now(),d=p.Z.create({timeout:6e4,params:{t:g}}),f=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];d.interceptors.request.use((function(e){var t=localStorage.getItem(c.Z.authKey);return t&&!f.includes(e.url)?(e.headers.Authorization="Bearer ".concat(t),e):e})),d.interceptors.response.use(function(){var e=l()(o()().mark((function e(t){var r,a,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.status,![502,504].includes(r)){e.next=5;break}u.history.push("/error"),e.next=18;break;case 5:if(401!==r){e.next=9;break}"/login"!==u.history.location.pathname&&(localStorage.removeItem(c.Z.authKey),u.history.push("/login")),e.next=18;break;case 9:return e.prev=9,200!==(a=t.data).code&&(n=a.message||a.data)&&s.ZP.error({content:n,style:{maxWidth:500,margin:"0 auto"}}),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(9);case 17:case 18:return e.abrupt("return",t);case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){if(e.response){var t=e.response.data?e.response.data.message||e.message||e.response.data:e.response.statusText,r=e.response.status;if([502,504].includes(r))u.history.push("/error");else if(401===r)"/login"!==u.history.location.pathname&&(s.ZP.error(i.ZP.get("登录已过期，请重新登录")),localStorage.removeItem(c.Z.authKey),u.history.push("/login"));else{var a,o;if("function"==typeof(null===(a=e.config)||void 0===a?void 0:a.onError))return null===(o=e.config)||void 0===o?void 0:o.onError(e.response);s.ZP.error({content:t,style:{maxWidth:500,margin:"0 auto"}})}}else console.log(e.message);return Promise.reject(e)}));var h=d},54802:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(99459),o=r(63313);function n(){var e=o.useReducer((function(e){return e+1}),0);return(0,a.Z)(e,2)[1]}},45724:function(e,t,r){r.d(t,{C:function(){return T}});var a=r(2053),o=r(57904),n=r(24744),l=r(99459),i=r(82187),s=r.n(i),c=r(12682),u=r(37987),p=r(63313),g=r(99394),d=r(84396),f=r(81571),h=p.createContext("default"),m=function(e){var t=e.children,r=e.size;return p.createElement(h.Consumer,null,(function(e){return p.createElement(h.Provider,{value:r||e},t)}))},P=h,Z=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r},v=function(e,t){var r,i,h=p.useContext(P),m=p.useState(1),v=(0,l.Z)(m,2),b=v[0],y=v[1],x=p.useState(!1),k=(0,l.Z)(x,2),w=k[0],q=k[1],B=p.useState(!0),C=(0,l.Z)(B,2),j=C[0],E=C[1],S=p.useRef(null),T=p.useRef(null),_=(0,u.sQ)(t,S),O=p.useContext(g.E_).getPrefixCls,A=function(){if(T.current&&S.current){var t=T.current.offsetWidth,r=S.current.offsetWidth;if(0!==t&&0!==r){var a=e.gap,o=void 0===a?4:a;2*o<r&&y(r-2*o<t?(r-2*o)/t:1)}}};p.useEffect((function(){q(!0)}),[]),p.useEffect((function(){E(!0),y(1)}),[e.src]),p.useEffect((function(){A()}),[e.gap]);var K,R=e.prefixCls,z=e.shape,W=void 0===z?"circle":z,U=e.size,H=void 0===U?"default":U,N=e.src,M=e.srcSet,Q=e.icon,X=e.className,D=e.alt,I=e.draggable,L=e.children,G=e.crossOrigin,F=Z(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),$="default"===H?h:H,V=Object.keys("object"===(0,n.Z)($)&&$||{}).some((function(e){return["xs","sm","md","lg","xl","xxl"].includes(e)})),Y=(0,d.Z)(V),J=p.useMemo((function(){if("object"!==(0,n.Z)($))return{};var e=f.c4.find((function(e){return Y[e]})),t=$[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:Q?t/2:18}:{}}),[Y,$]),ee=O("avatar",R),te=s()((r={},(0,o.Z)(r,"".concat(ee,"-lg"),"large"===$),(0,o.Z)(r,"".concat(ee,"-sm"),"small"===$),r)),re=p.isValidElement(N),ae=s()(ee,te,(i={},(0,o.Z)(i,"".concat(ee,"-").concat(W),!!W),(0,o.Z)(i,"".concat(ee,"-image"),re||N&&j),(0,o.Z)(i,"".concat(ee,"-icon"),!!Q),i),X),oe="number"==typeof $?{width:$,height:$,lineHeight:"".concat($,"px"),fontSize:Q?$/2:18}:{};if("string"==typeof N&&j)K=p.createElement("img",{src:N,draggable:I,srcSet:M,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&E(!1)},alt:D,crossOrigin:G});else if(re)K=N;else if(Q)K=Q;else if(w||1!==b){var ne="scale(".concat(b,") translateX(-50%)"),le={msTransform:ne,WebkitTransform:ne,transform:ne},ie="number"==typeof $?{lineHeight:"".concat($,"px")}:{};K=p.createElement(c.Z,{onResize:A},p.createElement("span",{className:"".concat(ee,"-string"),ref:T,style:(0,a.Z)((0,a.Z)({},ie),le)},L))}else K=p.createElement("span",{className:"".concat(ee,"-string"),style:{opacity:0},ref:T},L);return delete F.onError,delete F.gap,p.createElement("span",(0,a.Z)({},F,{style:(0,a.Z)((0,a.Z)((0,a.Z)({},oe),J),F.style),className:ae,ref:_}),K)};var b=p.forwardRef(v),y=r(73444),x=r(46109),k=function(e){return e?"function"==typeof e?e():e:null},w=r(34374),q=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r},B=function(e){var t=e.title,r=e.content,a=e.prefixCls;return t||r?p.createElement(p.Fragment,null,t&&p.createElement("div",{className:"".concat(a,"-title")},k(t)),p.createElement("div",{className:"".concat(a,"-inner-content")},k(r))):null};var C=p.forwardRef((function(e,t){var r=e.prefixCls,o=e.title,n=e.content,l=e._overlay,i=e.placement,s=void 0===i?"top":i,c=e.trigger,u=void 0===c?"hover":c,d=e.mouseEnterDelay,f=void 0===d?.1:d,h=e.mouseLeaveDelay,m=void 0===h?.1:h,P=e.overlayStyle,Z=void 0===P?{}:P,v=q(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),b=p.useContext(g.E_).getPrefixCls,y=b("popover",r),k=b();return p.createElement(x.Z,(0,a.Z)({placement:s,trigger:u,mouseEnterDelay:f,mouseLeaveDelay:m,overlayStyle:Z},v,{prefixCls:y,ref:t,overlay:l||p.createElement(B,{prefixCls:y,title:o,content:n}),transitionName:(0,w.mL)(k,"zoom-big",v.transitionName)}))})),j=r(22209),E=function(e){var t=p.useContext(g.E_),r=t.getPrefixCls,a=t.direction,n=e.prefixCls,l=e.className,i=void 0===l?"":l,c=e.maxCount,u=e.maxStyle,d=e.size,f=r("avatar-group",n),h=s()(f,(0,o.Z)({},"".concat(f,"-rtl"),"rtl"===a),i),P=e.children,Z=e.maxPopoverPlacement,v=void 0===Z?"top":Z,x=e.maxPopoverTrigger,k=void 0===x?"hover":x,w=(0,y.Z)(P).map((function(e,t){return(0,j.Tm)(e,{key:"avatar-key-".concat(t)})})),q=w.length;if(c&&c<q){var B=w.slice(0,c),E=w.slice(c,q);return B.push(p.createElement(C,{key:"avatar-popover-key",content:E,trigger:k,placement:v,overlayClassName:"".concat(f,"-popover")},p.createElement(b,{style:u},"+".concat(q-c)))),p.createElement(m,{size:d},p.createElement("div",{className:h,style:e.style},B))}return p.createElement(m,{size:d},p.createElement("div",{className:h,style:e.style},w))},S=b;S.Group=E;var T=S},84396:function(e,t,r){var a=r(63313),o=r(54802),n=r(81571);t.Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,a.useRef)({}),r=(0,o.Z)();return(0,a.useEffect)((function(){var a=n.ZP.subscribe((function(a){t.current=a,e&&r()}));return function(){return n.ZP.unsubscribe(a)}}),[]),t.current}},65154:function(e,t,r){r(43654)}}]);