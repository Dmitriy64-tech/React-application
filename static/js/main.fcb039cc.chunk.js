(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{136:function(e,t,n){e.exports={preloaderIMG:"Preloader_preloaderIMG__34bRm"}},22:function(e,t,n){e.exports={nav:"Navbar_nav__157BH",item:"Navbar_item__3rQl_",activeLink:"Navbar_activeLink__2oPsy"}},246:function(e,t,n){},247:function(e,t,n){},29:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2E1W7",dialogsItems:"Dialogs_dialogsItems__3e3N-",messages:"Dialogs_messages__3hRA5",message:"Dialogs_message__34Skv",person:"Dialogs_person__MY6F1",activeDialog:"Dialogs_activeDialog__1V244",text:"Dialogs_text__3gLYe",textButtonArea:"Dialogs_textButtonArea__3bwXc"}},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(7),r=n(10),a=n.n(r),o=n(16),i=n(33),c=n(3),u=n(131),l=n.n(u).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"97132c0f-39d9-4230-aaf8-d365f7c03dce"}}),d={getUsers:function(e,t){return l.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Follow:function(e){return l.post("/follow/".concat(e)).then((function(e){return e.data}))},unFollow:function(e){return l.delete("/follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),f.getProfile(e)}},j=function(){return l.get("auth/me")},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return l.post("auth/login",{email:e,password:t,rememberMe:n})},b=function(){return l.delete("auth/login")},f={getProfile:function(e){return l.get("/profile/".concat(e))},getStatus:function(e){return l.get("profile/status/"+e)},updateStatus:function(e){return l.put("profile/status",{status:e})}},g="ADD-POST",O="SET_USER_PROFILE",h="SET_STATUS",m="DELETE_POST",v={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],status:"",profile:null},x=function(e){return{type:h,status:e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var n=e.posts.length,s={id:n,message:t.newPostBody,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[s])});case O:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case m:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postID}))});case h:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}},w="SEND_MESSAGE",P={dialogs:[{id:1,name:"Anna"},{id:2,name:"Vitaliy"},{id:3,name:"Ivan"},{id:4,name:"Dima"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n=e.messages.length,s=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),[{id:n,message:s}])});default:return e}},S={},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e},k=function(e,t,n,s){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),s):e}))},C="UNFOLLOW",I="FOLLOW",U="SET_USERS",F="SET_CURRENT_PAGE",T="SET_TOTAL_USERS_COUNT",B="TOGGLE_IS_FETCHING",E="TOGGLE_IS_FOLLOWING_PROGRESS",A={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowingInProgress:[]},D=function(e){return{type:I,userId:e}},L=function(e){return{type:C,userId:e}},M=function(e){return{type:U,users:e}},z=function(e){return{type:F,currentPage:e}},R=function(e){return{type:B,isFetching:e}},H=function(e,t){return{type:E,isFollowingInProgress:e,userId:t}},G=function(){var e=Object(o.a)(a.a.mark((function e(t,n,s,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(!0,n)),e.next=3,s(n);case 3:0==e.sent.resultCode&&t(r(n)),t(H(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(c.a)(Object(c.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!0})});case C:return Object(c.a)(Object(c.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!1})});case U:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case F:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case T:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalCount});case B:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case E:return Object(c.a)(Object(c.a)({},e),{},{isFollowingInProgress:t.isFollowingInProgress?[].concat(Object(i.a)(e.isFollowingInProgress),[t.userId]):e.isFollowingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Y=n(38),J="/auth/SET_USER_DATA",K={userID:null,email:null,login:null,isAuth:!1},V=function(e,t,n,s){return{type:J,payload:{userID:e,email:t,login:n,isAuth:s}}},X=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,s,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,r=s.id,o=s.login,i=s.email,t(V(r,i,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}},Q=n(132),q=n(130),$="INITIALIZED_SUCCESED",ee={isInitialized:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(c.a)(Object(c.a)({},e),{},{isInitialized:!0});default:return e}},ne=Object(s.c)({profilePage:_,dialogsPage:N,sidebar:y,usersPage:W,auth:Z,form:q.a,app:te}),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,re=Object(s.e)(ne,se(Object(s.a)(Q.a)));window.store=re;var ae=re,oe=n(1),ie=n.n(oe),ce=n(69),ue=n.n(ce),le=(n(246),n(25)),de=n(26),je=n(28),pe=n(27),be=(n(247),n(57)),fe=n.n(be),ge=n(13),Oe=n(0),he=function(e){return Object(Oe.jsxs)("header",{className:fe.a.header,children:[Object(Oe.jsx)(ge.b,{to:"/profile",activeClassName:fe.a.activeLink,children:Object(Oe.jsx)("img",{src:"https://www.vectorlogo.zone/logos/telegram/telegram-tile.svg"})}),Object(Oe.jsx)("span",{className:fe.a.title,children:"FakeTelegram"}),Object(Oe.jsxs)("div",{className:fe.a.loginBlock,children:[" ",Object(Oe.jsxs)(ge.b,{to:"/login",children:[" ",e.isAuth?Object(Oe.jsxs)("div",{children:[e.login," ",Object(Oe.jsx)("button",{onClick:e.logout,children:"Log Out"})]}):"Log In"]})]})]})},me=n(11),ve=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){return Object(le.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(Oe.jsx)(he,Object(c.a)({},this.props))}}]),n}(ie.a.Component),xe=Object(me.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:0===e.sent.data.resultCode&&t(V(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ve),_e=n(22),we=n.n(_e),Pe=function(){return Object(Oe.jsxs)("nav",{className:we.a.nav,children:[Object(Oe.jsx)("div",{className:we.a.item,children:Object(Oe.jsx)(ge.b,{to:"/profile",activeClassName:we.a.activeLink,children:"Profile"})}),Object(Oe.jsx)("div",{className:"".concat(we.a.item," ").concat(we.a.active),children:Object(Oe.jsx)(ge.b,{to:"/dialogs",activeClassName:we.a.activeLink,children:"Messages"})}),Object(Oe.jsx)("div",{className:we.a.item,children:Object(Oe.jsx)(ge.b,{to:"/users",activeClassName:we.a.activeLink,children:"Users"})}),Object(Oe.jsx)("div",{className:we.a.item,children:Object(Oe.jsx)("a",{children:"Music"})}),Object(Oe.jsx)("div",{className:we.a.item,children:Object(Oe.jsx)("a",{children:"Settings"})})]})},Ne=n(12),Se=n(56),ye=n(35),ke=n.n(ye),Ce=n.p+"static/media/36b78c8b7cd957e082f53148b74787ea.e911d43c.jpg",Ie=function(e){var t=e.user,n=e.isFollowingInProgress,s=e.unfollow,r=e.follow;return Object(Oe.jsx)("div",{children:Object(Oe.jsxs)("div",{className:ke.a.users,children:[Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("div",{children:Object(Oe.jsx)(ge.b,{to:"/profile/"+t.id,children:Object(Oe.jsx)("img",{className:ke.a.avatar,src:null!=t.photos.small?t.photos.small:Ce})})}),Object(Oe.jsx)("div",{children:t.followed?Object(Oe.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:ke.a.followBTN,onClick:function(){s(t.id)},children:"Unfollow"}):Object(Oe.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:ke.a.followBTN,onClick:function(){r(t.id)},children:"Follow"})})]}),Object(Oe.jsxs)("div",{className:ke.a.userInfo,children:[Object(Oe.jsxs)("span",{className:ke.a.aboutUser,children:[Object(Oe.jsx)("div",{children:t.name}),Object(Oe.jsx)("div",{children:t.status})]}),Object(Oe.jsxs)("span",{className:ke.a.location,children:[Object(Oe.jsx)("div",{children:"country"}),Object(Oe.jsx)("div",{children:"city"})]})]})]})})},Ue=n(72),Fe=n(40),Te=n(74),Be=n.n(Te),Ee=n(135),Ae=n.n(Ee),De=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,r=e.onPageChanged,a=e.portionSize,o=void 0===a?10:a,i=Math.ceil(t/n),c=[],u=1;u<=i;u++)c.push(u);var l=Math.ceil(i/o),d=Object(oe.useState)(1),j=Object(Fe.a)(d,2),p=j[0],b=j[1],f=(p-1)*o+1,g=p*o;return Object(Oe.jsxs)("div",{className:Be.a.paginator,children:[p>1&&Object(Oe.jsx)("button",{onClick:function(){b(p-1)},children:"PREV"}),c.filter((function(e){return e>=f&&e<=g})).map((function(e){return Object(Oe.jsx)("span",{className:Ae()(Object(Ue.a)({},Be.a.selectedPage,s===e),Be.a.pageNumber),onClick:function(t){r(e)},children:e},e)})),l>p&&Object(Oe.jsx)("button",{onClick:function(){b(p+1)},children:"NEXT"})]})},Le=function(e){var t=e.onPageClick,n=e.currentPage,s=e.totalUsersCount,r=e.pageSize,a=e.isFollowingInProgress,o=e.follow,i=e.unfollow,c=Object(Se.a)(e,["onPageClick","currentPage","totalUsersCount","pageSize","isFollowingInProgress","follow","unfollow"]);return Object(Oe.jsxs)("div",{children:[c.users.map((function(e){return Object(Oe.jsx)(Ie,{user:e,isFollowingInProgress:a,follow:o,unfollow:i},e.id)})),Object(Oe.jsx)(De,{currentPage:n,onPageChanged:t,totalItemsCount:s,pageSize:r})]})},Me=n.p+"static/media/preloader.0c178750.svg",ze=n(136),Re=n.n(ze);function He(){return Object(Oe.jsxs)("div",{className:Re.a.preloaderIMG,children:[Object(Oe.jsx)("img",{src:Me})," "]})}var Ge=function(e){return{isAuth:e.auth.isAuth}},We=function(e){var t=function(t){Object(je.a)(s,t);var n=Object(pe.a)(s);function s(){return Object(le.a)(this,s),n.apply(this,arguments)}return Object(de.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(Oe.jsx)(e,Object(c.a)({},this.props)):Object(Oe.jsx)(Ne.a,{to:"/login"})}}]),s}(ie.a.Component);return Object(me.b)(Ge)(t)},Ye=n(137),Je=Object(Ye.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ke=function(e){return e.usersPage.pageSize},Ve=function(e){return e.usersPage.totalUsersCount},Xe=function(e){return e.usersPage.currentPage},Ze=function(e){return e.usersPage.isFetching},Qe=function(e){return e.usersPage.isFollowingInProgress},qe=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){var e;Object(le.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageClick=function(t){var n=e.props.pageSize;e.props.getUsersOnPageClick(t,n)},e}return Object(de.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(Oe.jsx)(Oe.Fragment,{children:this.props.isFetching?Object(Oe.jsx)(He,{}):Object(Oe.jsx)(Le,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageClick:this.onPageClick,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,isFollowingInProgress:this.props.isFollowingInProgress})})}}]),n}(oe.Component),$e=Object(s.d)(Object(me.b)((function(e){return{users:Je(e),pageSize:Ke(e),totalUsersCount:Ve(e),currentPage:Xe(e),isFetching:Ze(e),isFollowingInProgress:Qe(e)}}),{follow:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=d.Follow.bind(e),G(n,e,s,D);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=d.unFollow.bind(e),G(n,e,s,L);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleIsFollowing:H,getUsers:function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(s){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.getUsers(e,t);case 2:r=n.sent,s(R(!0)),s(M(r.items)),s((a=r.totalCount,{type:T,totalCount:a})),s(R(!1));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},getUsersOnPageClick:function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(s){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.getUsers(e,t);case 2:r=n.sent,s(R(!0)),s(z(e)),s(M(r.items)),s(R(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),We)(qe),et=n(58),tt=n.n(et),nt=function(e){var t=Object(oe.useState)(!1),n=Object(Fe.a)(t,2),s=n[0],r=n[1],a=Object(oe.useState)(e.status),o=Object(Fe.a)(a,2),i=o[0],c=o[1];Object(oe.useEffect)((function(){c(e.status)}),[e.status]);return Object(Oe.jsx)("div",{children:s?Object(Oe.jsx)("div",{children:Object(Oe.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)},onChange:function(e){c(e.currentTarget.value)},value:i})}):Object(Oe.jsx)("div",{children:Object(Oe.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"No status"})})})},st=function(e){return e.profile?Object(Oe.jsx)("div",{children:Object(Oe.jsxs)("div",{className:tt.a.descriptionBlock,children:[Object(Oe.jsx)("img",{className:tt.a.avatar,src:e.profile.photos.large}),Object(Oe.jsx)("p",{className:tt.a.profileName,children:e.profile.fullName}),Object(Oe.jsx)("div",{className:tt.a.status,children:Object(Oe.jsx)(nt,{status:e.status,updateStatus:e.updateStatus})}),Object(Oe.jsxs)("p",{children:["Looking for a job: ",e.profile.lookingForAJobDescription]}),Object(Oe.jsxs)("p",{children:["GitHub: ",e.profile.contacts.github]}),Object(Oe.jsxs)("p",{children:["FaceBook: ",e.profile.contacts.facebook]}),Object(Oe.jsxs)("p",{children:["Instagram: ",e.profile.contacts.instagram]}),Object(Oe.jsxs)("p",{children:["Twitter: ",e.profile.contacts.twitter]})]})}):Object(Oe.jsx)(He,{})},rt=n(128),at=n(129),ot=n(59),it=n.n(ot),ct=function(e){var t=e.meta,n=t.touched,s=t.error,r=e.children,a=n&&s;return Object(Oe.jsxs)("div",{className:it.a.formControl+" "+(a?it.a.error:""),children:[Object(Oe.jsx)("div",{children:r}),a?Object(Oe.jsx)("span",{children:s}):""]})},ut=function(e){e.child;var t=e.input,n=(e.meta,Object(Se.a)(e,["child","input","meta"]));return Object(Oe.jsx)(ct,Object(c.a)(Object(c.a)({},e),{},{children:Object(Oe.jsx)("textarea",Object(c.a)(Object(c.a)({className:it.a.text},t),n))}))},lt=function(e){e.child;var t=e.input,n=(e.meta,Object(Se.a)(e,["child","input","meta"]));return Object(Oe.jsx)(ct,Object(c.a)(Object(c.a)({},e),{},{children:Object(Oe.jsx)("input",Object(c.a)(Object(c.a)({className:it.a.text},t),n))}))},dt=function(e,t,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return Object(Oe.jsx)(rt.a,{validate:n,placeholder:e,name:t,component:s,type:r})},jt=n(60),pt=n.n(jt),bt=n(46),ft=n.n(bt),gt=function(e){var t=ie.a.useState(e.likesCount),n=Object(Fe.a)(t,2),s=n[0],r=n[1];return Object(Oe.jsxs)("div",{className:ft.a.item,children:[Object(Oe.jsx)("img",{className:ft.a.profilePH,src:"https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"}),Object(Oe.jsx)("span",{className:ft.a.postText,children:e.message}),Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("span",{onClick:function(){s==e.likesCount?r(s+1):s>e.likesCount&&r(s-1)},children:Object(Oe.jsx)("img",{className:ft.a.like,src:"https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"})}),Object(Oe.jsx)("span",{className:ft.a.likesCount,children:s})]})]})},Ot=function(e){if(!e)return"Field is required"},ht=function(e){return function(t){if(t.length>e)return"Max ".concat(e," symbols")}},mt=Ot,vt=ht(1e3),xt=ie.a.memo((function(e){var t=Object(i.a)(e.posts).reverse().map((function(e){return Object(Oe.jsx)(gt,{message:e.message,likesCount:e.likesCount},e.message)}));return Object(Oe.jsxs)("div",{className:pt.a.postsBlock,children:[Object(Oe.jsx)("h3",{children:"My posts"}),Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("p",{children:"Write down the post:"}),Object(Oe.jsx)(_t,{onSubmit:function(t){e.addPost(t.newPostBody),t.newPostBody=""}})]}),Object(Oe.jsx)("div",{className:pt.a.posts,children:t})]})})),_t=Object(at.a)({form:"addPost"})((function(e){return Object(Oe.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Oe.jsx)("div",{className:pt.a.addPostArea,children:Object(Oe.jsx)(rt.a,{validate:[mt,vt],placeholder:"New Post",component:ut,name:"newPostBody"})}),Object(Oe.jsx)("button",{className:pt.a.addPostBTN,children:"Add post"})]})})),wt=xt,Pt=Object(me.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:g,newPostBody:e}}(t))}}}))(wt),Nt=function(e){return Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)(st,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(Oe.jsx)(Pt,{})]})},St=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){return Object(le.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e=this.props.loginedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(Oe.jsx)(Nt,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(ie.a.Component),yt=Object(s.d)(Object(me.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,loginedUserId:e.auth.userID,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.getProfile(e);case 2:s=t.sent,n((r=s.data,{type:O,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getStatus(e);case 2:s=t.sent,n(x(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(x(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Ne.f,We)(St),kt=n(76),Ct=n.n(kt),It=Object(at.a)({form:"Login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(Oe.jsxs)("form",{onSubmit:t,children:[Object(Oe.jsx)("div",{children:dt("Email","email",[mt],lt)}),Object(Oe.jsx)("div",{children:dt("Password","password",[mt],lt,"password")}),Object(Oe.jsxs)("div",{children:[dt(null,"rememberMe",[],"input","checkbox",Ct.a.remember),"remember me"]}),n&&Object(Oe.jsx)("div",{className:Ct.a.formSummaryError,children:n}),Object(Oe.jsx)("div",{children:Object(Oe.jsx)("button",{className:Ct.a.loginBTN,children:"Login"})})]})})),Ut=Object(me.b)((function(e){return{isAuth:e.auth.isAuth}}),{logIn:function(e,t,n){return function(){var s=Object(o.a)(a.a.mark((function s(r){var o,i;return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p(e,t,n);case 2:0===(o=s.sent).data.resultCode?r(X()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(Y.a)("Login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(Oe.jsx)(Ne.a,{to:"/profile"}):Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("h1",{children:"Login Form"}),Object(Oe.jsx)(It,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}})]})})),Ft=n(29),Tt=n.n(Ft),Bt=function(e){var t="/dialogs/"+e.id;return Object(Oe.jsx)("div",{children:Object(Oe.jsx)(ge.b,{activeClassName:Tt.a.activeDialog,className:Tt.a.person,to:t,children:e.name})})},Et=function(e){return Object(Oe.jsx)("div",{className:Tt.a.dialog,children:e.message})},At=ht(1e3),Dt=Object(at.a)({form:"sendMessage"})((function(e){return Object(Oe.jsx)("div",{children:Object(Oe.jsxs)("form",{onSubmit:e.handleSubmit,className:Tt.a.textButtonArea,children:[Object(Oe.jsx)(rt.a,{validate:[Ot,At],component:ut,name:"newMessageBody"}),Object(Oe.jsx)("div",{children:Object(Oe.jsx)("button",{children:"Send"})})]})})})),Lt=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(Oe.jsx)(Bt,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(Oe.jsx)(Et,{message:e.message},e.id)}));return Object(Oe.jsxs)("div",{className:Tt.a.dialogs,children:[Object(Oe.jsx)("div",{className:Tt.a.dialogsItems,children:n}),Object(Oe.jsxs)("div",{className:Tt.a.messages,children:[Object(Oe.jsx)("div",{children:s}),Object(Oe.jsx)(Dt,{onSubmit:function(t){e.sendMessage(t.newMessageBody),t.newMessageBody=""}})]})]})},Mt=Object(s.d)(Object(me.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:w,newMessageBody:e}}(t))}}})),We)(Lt),zt=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){return Object(le.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"componentDidMount",value:function(){this.props.initilizeApp()}},{key:"render",value:function(){return this.props.isInitialized?Object(Oe.jsxs)("div",{className:"app-wrapper",children:[Object(Oe.jsx)(xe,{}),Object(Oe.jsx)(Pe,{}),Object(Oe.jsxs)("div",{className:"app-wrapper-content",children:[Object(Oe.jsx)(Ne.b,{path:"/dialogs",render:function(){return Object(Oe.jsx)(Mt,{})}}),Object(Oe.jsx)(Ne.b,{path:"/profile/:userID?",render:function(){return Object(Oe.jsx)(yt,{})}}),Object(Oe.jsx)(Ne.b,{path:"/users",render:function(){return Object(Oe.jsx)($e,{})}}),Object(Oe.jsx)(Ne.b,{path:"/login",render:function(){return Object(Oe.jsx)(Ut,{})}})]})]}):Object(Oe.jsx)(He,{})}}]),n}(ie.a.Component),Rt=Object(s.d)(Ne.f,Object(me.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initilizeApp:function(){return function(e){e(X()).then((function(){e({type:$})}))}}}))(zt);ue.a.render(Object(Oe.jsx)(ge.a,{children:Object(Oe.jsx)(me.a,{store:ae,children:Object(Oe.jsx)(Rt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t,n){e.exports={pageBTN:"Users_pageBTN__3jsUH",followBTN:"Users_followBTN__3wR1w",getUsersBTN:"Users_getUsersBTN__21NM3",userInfo:"Users_userInfo__2H1Nn",users:"Users_users__36A9F",avatar:"Users_avatar__n4B1c",aboutUser:"Users_aboutUser__3ZqWS",location:"Users_location__3WQI5",selectedPage:"Users_selectedPage__1AQX8",page:"Users_page__1QsaK",preloader:"Users_preloader__1BDAh"}},46:function(e,t,n){e.exports={item:"Post_item__3vmwz",profilePH:"Post_profilePH__3UCF8",postText:"Post_postText__N8KPb",like:"Post_like__xqKg3"}},57:function(e,t,n){e.exports={header:"Header_header__o1S2-",title:"Header_title__JxuRg",loginBlock:"Header_loginBlock__2JIDk"}},58:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3dCa2",avatar:"ProfileInfo_avatar__2yRcv",profileName:"ProfileInfo_profileName__1RgKY",status:"ProfileInfo_status__2Y-B-"}},59:function(e,t,n){e.exports={formControl:"FormControls_formControl__2MWe9",error:"FormControls_error__3Ztry",formSummaryError:"FormControls_formSummaryError__2TFZp",text:"FormControls_text__2SF-c"}},60:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__GVH_v",posts:"MyPosts_posts__3JNgW",addPostBTN:"MyPosts_addPostBTN__4Hplh"}},74:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__PhbMb",pageNumber:"Paginator_pageNumber__Wdc0H",paginator:"Paginator_paginator__29S8b"}},76:function(e,t,n){e.exports={email:"Login_email__1L1dZ",pass:"Login_pass__RENn2",remember:"Login_remember__2ISws",formSummaryError:"Login_formSummaryError__6n6nu",loginBTN:"Login_loginBTN__3Sip5"}}},[[291,1,2]]]);
//# sourceMappingURL=main.fcb039cc.chunk.js.map