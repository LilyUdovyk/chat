(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var a=n(5),r=Object(a.createAsyncAction)("message/SEND_MESSAGE_REQUEST","message/SEND_MESSAGE_SUCCESS","message/SEND_MESSAGE_FAILURE")(),c=Object(a.createAction)("message/ON_MESSAGE",(function(e){return e}))(),s=Object(a.createAction)("message/SAVE_ORIGINAL_MESSAGE",(function(e){return e}))(),u=Object(a.createAsyncAction)("message/REPLY_TO_MESSAGE_REQUEST","message/REPLY_TO_MESSAGE_SUCCESS","message/REPLY_TO_MESSAGE_FAILURE")(),i=Object(a.createAsyncAction)("message/FORWARD_MESSAGE_REQUEST","message/FORWARD_MESSAGE_SUCCESS","message/FORWARD_MESSAGE_FAILURE")()},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(5),r=Object(a.createAsyncAction)("user/GET_USER_REQUEST","user/GET_USER_SUCCESS","user/GET_USER_FAILURE")(),c=Object(a.createAsyncAction)("user/UPDATE_USER_REQUEST","user/UPDATE_USER_SUCCESS","user/UPDATE_USER_FAILURE")(),s=Object(a.createAction)("user/LOGOUT")()},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(5),r=Object(a.createAsyncAction)("auth/AUTH_BY_CREDS_REQUEST","auth/AUTH_BY_CREDS_SUCCESS","auth/AUTH_BY_CREDS_FAILURE")(),c=Object(a.createAsyncAction)("auth/REG_BY_CREDS_REQUEST","auth/REG_BY_CREDS_SUCCESS","auth/REG_BY_CREDS_FAILURE")()},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(5),r=Object(a.createAsyncAction)("media/UPLOAD_FILE_REQUEST","media/UPLOAD_FILE_SUCCESS","media/UPLOAD_FILE_FAILURE")()},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(5),r=Object(a.createAsyncAction)("contacts/GET_CONTACTS_REQUEST","contacts/GET_CONTACTS_SUCCESS","contacts/GET_CONTACTS_FAILURE")()},47:function(e,t,n){e.exports=n(63)},52:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(31),s=n.n(c),u=(n(52),n(21)),i=n(22),o=n(45),l=n(43),d=n(23),b=n(42),p=n(12),h=n(20),g=Object(h.a)(),O=n(3),f=n(5),j=n(17),_={authData:{authToken:null,id:"",login:"",error:null}},m=n(15),v={error:null,userData:{_id:"",createdAt:"",login:"",nick:"",avatar:{_id:"",url:""},chats:[]}},x=n(33),y=n(25),w={error:null,contactsData:[]},S=n(9),E={error:null,chatSuccessData:{activeChatName:"Chat",activeChat:{_id:"",owner:{_id:"",login:"",nick:"",avatar:{_id:"",url:""}},title:"",createdAt:"",members:[],messages:[],avatar:{_id:"",url:""}}}},k=n(13),T={error:null,newMessage:null,savedMessage:{originalMessage:null,isReply:!1,isForward:!1},messageData:{_id:"",createdAt:"",owner:{_id:"",login:"",nick:"",avatar:{_id:"",url:""}},chat:{_id:"",owner:{_id:"",login:"",nick:"",avatar:{_id:"",url:""}},title:"",createdAt:"",members:[],messages:[],avatar:{_id:"",url:""}},text:"",media:[],replies:[],replyTo:{_id:"",text:"",media:[],owner:{_id:"",login:"",nick:""}},forwarded:{_id:"",text:"",media:[],owner:{_id:"",login:"",nick:""}},forwardWith:[]}},A=n(24),U={error:null,fileData:{_id:null,url:null},mediaData:{_id:"",createdAt:"",owner:{_id:"",login:"",nick:"",avatar:{_id:"",url:""}},text:"",url:"",originalFileName:"",type:"",userAvatar:{_id:"",login:"",nick:"",avatar:{_id:"",url:""}},chatAvatar:[],messages:[]}},C=Object(u.c)({router:Object(d.b)(g),auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(f.getType)(j.a.success):return Object(O.a)(Object(O.a)({},e),{},{authData:Object(O.a)(Object(O.a)({},e.authData),{},{authToken:t.payload.authToken,id:t.payload.id,login:t.payload.login,error:null})});case Object(f.getType)(j.a.failure):return Object(O.a)(Object(O.a)({},e),{},{authData:Object(O.a)(Object(O.a)({},e.authData),{},{authToken:null,error:t.payload})});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(f.getType)(m.a.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,userData:t.payload});case Object(f.getType)(m.a.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(m.c.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,userData:t.payload});case Object(f.getType)(m.c.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(m.b):return Object(O.a)(Object(O.a)({},e),{},{error:null,userData:{_id:"",createdAt:"",login:"",nick:"",avatar:{_id:"",url:""},chats:[]}});default:return e}},contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(f.getType)(y.a.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,contactsData:[].concat(Object(x.a)(e.contactsData),Object(x.a)(t.payload))});case Object(f.getType)(y.a.failure):return Object(O.a)(Object(O.a)({},e),{},{contactsData:[],error:t.payload});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(f.getType)(S.c.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,chatSuccessData:Object(O.a)(Object(O.a)({},e.chatSuccessData),{},{activeChat:t.payload.activeChat,activeChatName:t.payload.activeChatName})});case Object(f.getType)(S.c.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(S.a.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,chatSuccessData:Object(O.a)(Object(O.a)({},e.chatSuccessData),{},{activeChat:t.payload.activeChat,activeChatName:t.payload.activeChatName})});case Object(f.getType)(S.a.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(S.b.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,chatSuccessData:Object(O.a)(Object(O.a)({},e.chatSuccessData),{},{activeChat:t.payload.activeChat,activeChatName:t.payload.activeChatName})});case Object(f.getType)(S.b.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(S.d.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,chatSuccessData:Object(O.a)(Object(O.a)({},e.chatSuccessData),{},{activeChat:t.payload.activeChat,activeChatName:t.payload.activeChatName})});case Object(f.getType)(S.d.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(f.getType)(k.e.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,messageData:t.payload});case Object(f.getType)(k.e.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(k.b):return Object(O.a)(Object(O.a)({},e),{},{error:null,newMessage:{newMessageId:t.payload._id,newMessageChatId:t.payload.chat._id},messageData:t.payload});case Object(f.getType)(k.d):return Object(O.a)(Object(O.a)({},e),{},{error:null,savedMessage:Object(O.a)(Object(O.a)({},e.savedMessage),{},{originalMessage:t.payload.originalMessage,isReply:t.payload.isReply,isForward:t.payload.isForward})});case Object(f.getType)(k.c.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,messageData:t.payload,savedMessage:Object(O.a)(Object(O.a)({},e.savedMessage),{},{originalMessage:null,isReply:!1})});case Object(f.getType)(k.c.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});case Object(f.getType)(k.a.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,messageData:t.payload,savedMessage:Object(O.a)(Object(O.a)({},e.savedMessage),{},{originalMessage:null,isForward:!1})});case Object(f.getType)(k.a.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}},media:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(f.getType)(A.a.success):return Object(O.a)(Object(O.a)({},e),{},{error:null,fileData:t.payload});case Object(f.getType)(A.a.failure):return Object(O.a)(Object(O.a)({},e),{},{error:t.payload});default:return e}}}),D=n(4),R=n.n(D),$=n(2),I=n(14),M=n(37),F=n.n(M),N=n(10),G=function(){var e=Object(N.a)(R.a.mark((function e(t,n,a){var r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://chat.fs.a-level.com.ua/graphql",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:t},body:JSON.stringify({query:n,variables:a})});case 3:return r=e.sent,c=r.json(),e.abrupt("return",r.ok?c:new Error("Status is not 200"));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",new Error("dataPost failed"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),q=function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.next=4,G("","query log ($login:String, $password:String) {\n  login(login:$login, password:$password)\n}",{login:t,password:n});case 4:return a=e.sent,e.abrupt("return",a.data.login);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P="mutation reg($nick:String, $login:String, $password:String) {\n  UserUpsert(user: {nick:$nick, login:$login, password:$password}) \n  ".concat("{\n  _id\n  login\n  nick\n  createdAt\n  avatar{\n    _id, url\n  }\n  chats{\n    _id\n    createdAt\n    title\n    owner{\n      _id login nick\n      avatar{\n        _id, url\n      }\n    }\n    members{\n      _id login nick\n      avatar{\n        _id, url\n      }\n    }\n    messages{\n      _id createdAt text\n      owner{\n        _id login nick\n        avatar{\n          _id, url\n        }\n      }\n    }\n    avatar{\n      _id, url\n    }\n  }\n}","\n}"),L=function(){var e=Object(N.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.next=4,G("",P,{nick:t,login:n,password:a});case 4:return r=e.sent,e.abrupt("return",r.data.UserUpsert);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),B="{\n  _id\n  login\n  nick\n  createdAt\n  avatar{\n    _id, url\n  }\n  chats{\n    _id\n    createdAt\n    title\n    owner{\n      _id login nick\n      avatar{\n        _id, url\n      }\n    }\n    members{\n      _id login nick\n      avatar{\n        _id, url\n      }\n    }\n    messages{\n      _id createdAt text\n      owner{\n        _id login nick\n        avatar{\n          _id, url\n        }\n      }\n    }\n    avatar{\n      _id, url\n    }\n  }\n}",Q="query getUsers($activeUserQuery: String){\n  UserFindOne(query: $activeUserQuery)\n  ".concat(B,"\n}"),Y=function(){var e=Object(N.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='[{"_id": "'.concat(t,'"}]'),e.next=3,G("Bearer ".concat(localStorage.authToken),Q,{activeUserQuery:n});case 3:return a=e.sent,e.abrupt("return",a.data.UserFindOne);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H="mutation settings ($user_id: ID, $image_id: ID, $nick:String, $login:String, $password:String) {\n  UserUpsert(user: {_id: $user_id, \n    nick: $nick, \n    login: $login,\n    password: $password\n    avatar: {_id: $image_id}}) ".concat(B,"\n}"),W=function(){var e=Object(N.a)(R.a.mark((function e(t,n,a,r,c){var s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),H,{user_id:t,image_id:n,nick:a,login:r,password:c});case 2:return s=e.sent,e.abrupt("return",s.data.UserUpsert);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),z=R.a.mark(J),V=R.a.mark(K);function J(){var e,t,n,a,r,c,s,u,i,o,l;return R.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:if(!(e=localStorage.getItem("authToken"))){d.next=9;break}return t=F()(e),n=t.sub.id,a=t.sub.login,d.next=7,Object($.d)(j.a.success({authToken:e,id:n,login:a}));case 7:return d.next=9,Object($.c)(Object(I.d)("/profile"));case 9:return d.next=12,Object($.g)(j.a.request);case 12:return r=d.sent,c=r.payload,d.prev=14,d.next=17,Object($.b)(q,c.login,c.password);case 17:if(!(s=d.sent)){d.next=34;break}return u=F()(s),i=u.sub.id,o=u.sub.login,localStorage.setItem("authToken",s),d.next=25,Object($.d)(j.a.success({authToken:s,id:i,login:o}));case 25:return d.next=27,Object($.b)(Y,i);case 27:return l=d.sent,d.next=30,Object($.d)(m.a.success(l));case 30:return d.next=32,Object($.c)(Object(I.d)("/profile"));case 32:d.next=36;break;case 34:return d.next=36,Object($.c)(j.a.failure("Wrong login or password"));case 36:d.next=42;break;case 38:return d.prev=38,d.t0=d.catch(14),d.next=42,Object($.c)(j.a.failure(d.t0.message));case 42:d.next=9;break;case 44:case"end":return d.stop()}}),z,null,[[14,38]])}function K(){var e,t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object($.g)(j.b.request);case 3:return e=n.sent,t=e.payload,n.prev=5,n.next=8,Object($.b)(L,t.nick,t.login,t.password);case 8:n.sent,n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(5),n.next=15,Object($.c)(j.b.failure(n.t0.message));case 15:return n.next=17,Object($.c)(j.a.request({login:t.login,password:t.password}));case 17:return n.next=19,Object($.c)(Object(I.d)("/profile"));case 19:n.next=0;break;case 21:case"end":return n.stop()}}),V,null,[[5,11]])}var X=R.a.mark(te),Z=R.a.mark(ne),ee=R.a.mark(ae);function te(){var e,t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object($.g)(m.a.request);case 3:return n.prev=3,n.next=6,Object($.e)((function(e){return e.auth.authData.id}));case 6:return e=n.sent,n.next=9,Object($.b)(Y,e);case 9:return t=n.sent,n.next=12,Object($.d)(m.a.success(t));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(3),n.next=18,Object($.c)(m.a.failure(n.t0.message));case 18:n.next=0;break;case 20:case"end":return n.stop()}}),X,null,[[3,14]])}function ne(){var e,t,n,a,r,c,s,u;return R.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=3,Object($.g)(m.c.request);case 3:return e=i.sent,t=e.payload,i.prev=5,i.next=8,Object($.e)((function(e){return e.user.userData.avatar}));case 8:return n=i.sent,a=n?n._id:null,i.next=12,Object($.e)((function(e){return e.user.userData.password}));case 12:return r=i.sent,c=null===t.imageId?a:t.imageId,s=""===t.password?r:t.password,i.next=17,Object($.b)(W,t.userId,c,t.nick,t.login,s);case 17:return u=i.sent,i.next=20,Object($.d)(m.c.success(u));case 20:return i.next=22,Object($.c)(Object(I.d)("/profile"));case 22:i.next=28;break;case 24:return i.prev=24,i.t0=i.catch(5),i.next=28,Object($.c)(m.c.failure(i.t0.message));case 28:i.next=0;break;case 30:case"end":return i.stop()}}),Z,null,[[5,24]])}function ae(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object($.g)(m.b);case 3:return localStorage.clear(),e.next=6,Object($.c)(Object(I.d)("/log-in"));case 6:e.next=0;break;case 8:case"end":return e.stop()}}),ee)}var re=function(){var e=Object(N.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),'query users {\n    UserFind(query:"[{}]"){\n      _id\n      login\n      nick\n      createdAt\n      avatar{\n        _id, url\n      }\n    }\n  }');case 2:return t=e.sent,e.abrupt("return",t.data.UserFind);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=R.a.mark(se);function se(){var e;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object($.g)(y.a.request);case 3:return t.prev=3,t.next=6,Object($.b)(re);case 6:return e=t.sent,t.next=9,Object($.d)(y.a.success(e));case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(3),t.next=15,Object($.c)(y.a.failure(t.t0.message));case 15:t.next=0;break;case 17:case"end":return t.stop()}}),ce,null,[[3,11]])}var ue="{\n  _id\n  title\n  createdAt\n  owner {\n    _id\n    login\n    nick\n    avatar {\n      _id\n      url\n    }\n  }\n  avatar {\n    _id\n    url\n  }\n  members {\n    _id\n    login\n    nick\n    avatar {\n      _id\n      url\n    }\n  }\n  messages{\n    _id\n    text\n    createdAt \n    owner{\n      _id\n      login\n      nick\n    }\n    media{\n      _id\n      url\n      type\n      originalFileName\n      text\n    }\n    replies {\n      _id\n      text\n      owner {\n        _id\n        login\n        nick\n      }\n      media{\n        _id\n        text\n        url\n        type\n        originalFileName\n      }\n    }\n    replyTo {\n      _id\n      text\n      owner {\n        _id\n        login\n        nick\n      }\n      media{\n        _id\n        text\n        url\n        type\n        originalFileName\n      }\n    }\n    forwarded {\n      _id\n      text\n      owner {\n        _id\n        login\n        nick\n      }\n      media{\n        _id\n        text\n        url\n        type\n        originalFileName\n      }\n    }\n    forwardWith {\n      _id\n      text\n      owner {\n        _id\n        login\n        nick\n      }\n      media{\n        _id\n        text\n        url\n        type\n        originalFileName\n      }\n    }\n  }\n}",ie="query getActiveChat($activeChatQuery: String){\n  ChatFindOne(query: $activeChatQuery)\n  ".concat(ue,"\n}"),oe=function(){var e=Object(N.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='[{"_id": "'.concat(t,'"}]'),e.next=3,G("Bearer ".concat(localStorage.authToken),ie,{activeChatQuery:n});case 3:return a=e.sent,e.abrupt("return",a.data.ChatFindOne);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le="mutation addChat ($firstMember_id:ID, $secondMember_id:ID) {\n  ChatUpsert(chat: {   \n        members: [\n      {_id: $firstMember_id}, {_id: $secondMember_id}\n    ]}) ".concat(ue,"\n}"),de=function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),le,{firstMember_id:t,secondMember_id:n});case 2:return a=e.sent,e.abrupt("return",a.data.ChatUpsert);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be="mutation addNewGroup ($chat_title:String, $members:[UserInput]) {\n  ChatUpsert(chat: {\n    title: $chat_title,\n    members: $members\n  }) ".concat(ue,"\n}"),pe=function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.map((function(e){return{_id:e._id}})),e.next=3,G("Bearer ".concat(localStorage.authToken),be,{chat_title:t,members:a});case 3:return r=e.sent,e.abrupt("return",r.data.ChatUpsert);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),he="mutation changeChatTitle ($chat_id:ID, $chat_title: String) {\n  ChatUpsert(chat: { \n    _id: $chat_id, \n    title: $chat_title\n  }) ".concat(ue,"\n}"),ge=function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),he,{chat_id:t,chat_title:n});case 2:return a=e.sent,e.abrupt("return",a.data.ChatUpsert);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Oe=R.a.mark(me),fe=R.a.mark(xe),je=R.a.mark(ye),_e=R.a.mark(we);function me(){var e,t,n,a,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object($.g)(S.c.request);case 3:return e=c.sent,t=e.payload,c.prev=5,c.next=8,Object($.e)((function(e){return e.auth.authData.id}));case 8:return n=c.sent,c.next=11,Object($.b)(oe,t);case 11:return a=c.sent,c.next=14,Object($.b)(ve,a,n);case 14:return r=c.sent,c.next=17,Object($.d)(S.c.success({activeChat:a,activeChatName:r}));case 17:c.next=23;break;case 19:return c.prev=19,c.t0=c.catch(5),c.next=23,Object($.c)(S.c.failure(c.t0.message));case 23:c.next=0;break;case 25:case"end":return c.stop()}}),Oe,null,[[5,19]])}var ve=function(e,t){if(e.title)return e.title;if(1===e.members.length)return"You";if(e.members.length>2)return"Group";var n=e.members.find((function(e){return e._id!==t}));return n&&(n.nick||n.login)};function xe(){var e,t,n,a,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object($.g)(S.a.request);case 3:return e=c.sent,t=e.payload,c.prev=5,c.next=8,Object($.e)((function(e){return e.auth.authData.id}));case 8:return n=c.sent,c.next=11,Object($.b)(de,n,t);case 11:return a=c.sent,c.next=14,Object($.b)(ve,a,n);case 14:return r=c.sent,c.next=17,Object($.d)(S.a.success({activeChat:a,activeChatName:r}));case 17:c.next=23;break;case 19:return c.prev=19,c.t0=c.catch(5),c.next=23,Object($.c)(S.a.failure(c.t0.message));case 23:c.next=0;break;case 25:case"end":return c.stop()}}),fe,null,[[5,19]])}function ye(){var e,t,n,a,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object($.g)(S.b.request);case 3:return e=c.sent,t=e.payload,c.prev=5,c.next=8,Object($.b)(pe,t.chatTitle,t.members);case 8:return n=c.sent,c.next=11,Object($.e)((function(e){return e.auth.authData.id}));case 11:return a=c.sent,c.next=14,Object($.b)(ve,n,a);case 14:return r=c.sent,c.next=17,Object($.d)(S.b.success({activeChat:n,activeChatName:r}));case 17:return c.next=19,Object($.c)(Object(I.d)("/profile"));case 19:c.next=25;break;case 21:return c.prev=21,c.t0=c.catch(5),c.next=25,Object($.c)(S.b.failure(c.t0.message));case 25:c.next=0;break;case 27:case"end":return c.stop()}}),je,null,[[5,21]])}function we(){var e,t,n,a,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Object($.g)(S.d.request);case 3:return e=c.sent,t=e.payload,c.prev=5,c.next=8,Object($.b)(ge,t.chatId,t.title);case 8:return n=c.sent,c.next=11,Object($.e)((function(e){return e.auth.authData.id}));case 11:return a=c.sent,c.next=14,Object($.b)(ve,n,a);case 14:return r=c.sent,c.next=17,Object($.d)(S.d.success({activeChat:n,activeChatName:r}));case 17:return c.next=19,Object($.c)(Object(I.d)("/profile"));case 19:c.next=25;break;case 21:return c.prev=21,c.t0=c.catch(5),c.next=25,Object($.c)(S.d.failure(c.t0.message));case 25:c.next=0;break;case 27:case"end":return c.stop()}}),_e,null,[[5,21]])}var Se="{\n  _id\n  createdAt\n  text\n  owner {\n    _id\n    login\n    nick\n  }\n  media{\n    _id\n    text\n    url\n    originalFileName\n    type\n  }\n  replies {\n    _id\n    text\n    owner {\n      _id\n      login\n      nick\n    }\n    media{\n      _id\n      text\n      url\n      originalFileName\n      type\n    }\n  }\n  replyTo {\n    _id\n    text\n    owner {\n      _id\n      login\n      nick\n    }\n    media{\n      _id\n      text\n      url\n      originalFileName\n      type\n    }\n  }\n  forwarded {\n    _id\n    text\n    owner {\n      _id\n      login\n      nick\n    }\n    media{\n      _id\n      text\n      url\n      originalFileName\n      type\n    }\n  }\n  forwardWith {\n    _id\n    text\n    owner {\n      _id\n      login\n      nick\n    }\n    media{\n      _id\n      text\n      url\n      originalFileName\n      type\n    }\n  }\n}",Ee="mutation sendMessage ($chat_id:ID, $text:String) {\n  MessageUpsert(message: {\n      chat: {_id: $chat_id}, \n      text: $text\n  }) ".concat(Se,"\n}"),ke=function(){var e=Object(N.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),Ee,{chat_id:t,text:n});case 2:return a=e.sent,console.log("messageContent.data.MessageUpsert",a.data.MessageUpsert),e.abrupt("return",a.data.MessageUpsert);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Te="mutation sendMessage ($chat_id:ID, $text:String, $media_id:ID) {\n  MessageUpsert(message: {\n      chat: {_id: $chat_id}, \n      text: $text,\n    \tmedia:[{_id: $media_id}]\n  }) ".concat(Se,"\n}"),Ae=function(){var e=Object(N.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),Te,{chat_id:t,text:n,media_id:a});case 2:return r=e.sent,e.abrupt("return",r.data.MessageUpsert);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Ue="mutation replyToMessage ($message_id:ID, $chat_id:ID, $text:String) {\n  MessageUpsert(message: {\n    chat: {_id: $chat_id},\n    text: $text\n    replyTo: {\n      _id: $message_id,\n    }\n  }) ".concat(Se,"\n}"),Ce=function(){var e=Object(N.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),Ue,{chat_id:t,text:n,message_id:a});case 2:return r=e.sent,e.abrupt("return",r.data.MessageUpsert);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),De="mutation forwardedMessage ($chat_id:ID, $message_id:ID, $text:String) {\n  MessageUpsert(message: {\n    chat: {_id: $chat_id},\n    text: $text,\n    forwarded: {\n    \t_id: $message_id,\n    }\n  }) ".concat(Se,"\n}"),Re=function(){var e=Object(N.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("Bearer ".concat(localStorage.authToken),De,{chat_id:t,text:n,message_id:a});case 2:return r=e.sent,e.abrupt("return",r.data.MessageUpsert);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),$e=R.a.mark(Ne),Ie=R.a.mark(Ge),Me=R.a.mark(Pe),Fe=R.a.mark(Le);function Ne(){var e,t,n;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object($.g)(k.e.request);case 3:if(e=a.sent,t=e.payload,a.prev=5,!t.mediaId){a.next=12;break}return a.next=9,Object($.b)(Ae,t.activeChatId,t.text,t.mediaId);case 9:a.t0=a.sent,a.next=15;break;case 12:return a.next=14,Object($.b)(ke,t.activeChatId,t.text);case 14:a.t0=a.sent;case 15:return n=a.t0,a.next=18,Object($.d)(k.e.success(n));case 18:a.next=24;break;case 20:return a.prev=20,a.t1=a.catch(5),a.next=24,Object($.c)(k.e.failure(a.t1.message));case 24:a.next=0;break;case 26:case"end":return a.stop()}}),$e,null,[[5,20]])}function Ge(){var e,t,n,a;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object($.g)(k.b);case 3:return e=r.sent,t=e.payload,r.next=7,Object($.e)((function(e){return e.user.userData._id}));case 7:return n=r.sent,t.owner._id!==n&&qe(),r.next=11,Object($.e)((function(e){return e.chat.chatSuccessData.activeChat._id}));case 11:if((a=r.sent)!==t.chat._id){r.next=15;break}return r.next=15,Object($.c)(S.c.request(a));case 15:r.next=0;break;case 17:case"end":return r.stop()}}),Ie)}var qe=function(){new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatedible.ogg").play()};function Pe(){var e,t,n;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object($.g)(k.c.request);case 3:return e=a.sent,t=e.payload,a.prev=5,a.next=8,Object($.b)(Ce,t.activeChatId,t.text,t.originalMessageId);case 8:return n=a.sent,a.next=11,Object($.d)(k.c.success(n));case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(5),a.next=17,Object($.c)(k.c.failure(a.t0.message));case 17:a.next=0;break;case 19:case"end":return a.stop()}}),Me,null,[[5,13]])}function Le(){var e,t,n;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object($.g)(k.a.request);case 3:return e=a.sent,t=e.payload,a.prev=5,a.next=8,Object($.b)(Re,t.activeChatId,t.text,t.originalMessageId);case 8:return n=a.sent,a.next=11,Object($.d)(k.a.success(n));case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(5),a.next=17,Object($.c)(k.a.failure(a.t0.message));case 17:a.next=0;break;case 19:case"end":return a.stop()}}),Fe,null,[[5,13]])}var Be=function(){var e=Object(N.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://chat.fs.a-level.com.ua/upload",{method:"POST",headers:localStorage.authToken?{Authorization:"Bearer "+localStorage.authToken}:{},body:new FormData(t)});case 3:return n=e.sent,a=n.json(),e.abrupt("return",n.ok?a:new Error("Status is not 200"));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",new Error("DataPost failed"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Qe=R.a.mark(Ye);function Ye(){var e,t,n;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object($.g)(A.a.request);case 3:return e=a.sent,t=e.payload,a.prev=5,a.next=8,Object($.b)(Be,t);case 8:return n=a.sent,console.log(n),a.next=12,Object($.d)(A.a.success(n));case 12:a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(5),a.next=18,Object($.c)(A.a.failure(a.t0.message));case 18:a.next=0;break;case 20:case"end":return a.stop()}}),Qe,null,[[5,14]])}var He=R.a.mark(We);function We(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.f)(J),Object($.f)(K),Object($.f)(te),Object($.f)(se),Object($.f)(me),Object($.f)(Ne),Object($.f)(xe),Object($.f)(ae),Object($.f)(Ge),Object($.f)(Ye),Object($.f)(Pe),Object($.f)(Le),Object($.f)(ye),Object($.f)(ne),Object($.f)(we)]);case 2:case"end":return e.stop()}}),He)}var ze=n(29),Ve=r.a.lazy((function(){return n.e(9).then(n.bind(null,233))})),Je=r.a.lazy((function(){return n.e(7).then(n.bind(null,234))})),Ke=r.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,238))})),Xe=r.a.lazy((function(){return n.e(5).then(n.bind(null,235))})),Ze=r.a.lazy((function(){return n.e(6).then(n.bind(null,236))})),et=r.a.lazy((function(){return n.e(8).then(n.bind(null,237))})),tt=Object(i.c)((function(e){return{authToken:e.auth.authData.authToken}}))(r.a.memo((function(e){var t=e.authToken;return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(ze.d,null,r.a.createElement(ze.b,{exact:!0,path:"/log-in",component:Je}),r.a.createElement(ze.b,{exact:!0,path:"/registration",component:Ve}),!t&&r.a.createElement(ze.a,{from:"/",to:"/log-in"}),r.a.createElement(ze.b,{exact:!0,path:"/profile",component:Ke}),r.a.createElement(ze.b,{exact:!0,path:"/new-group",component:Xe}),r.a.createElement(ze.b,{exact:!0,path:"/user-settings",component:Ze}),r.a.createElement(ze.b,{exact:!0,path:"/chat-settings",component:et}),t&&r.a.createElement(ze.a,{from:"/",to:"/profile"}),r.a.createElement(ze.b,{path:"/",render:function(){return r.a.createElement("div",null,"Page Not Found")}})))})));b.b.add(p.q,p.m,p.l,p.a,p.s,p.e,p.p,p.h,p.i,p.g,p.k,p.j,p.r,p.b,p.f,p.n,p.o,p.c,p.d,p.t);var nt=Object(o.a)(),at=Object(u.e)(C,Object(u.a)(Object(l.a)(g),nt));nt.run(We);var rt=function(){return r.a.createElement(i.a,{store:at},r.a.createElement(d.a,{history:g},r.a.createElement(tt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(rt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return u}));var a=n(5),r=Object(a.createAsyncAction)("chat/GET_ACTIVE_CHAT_REQUEST","chat/GET_ACTIVE_CHAT_SUCCESS","chat/GET_ACTIVE_CHAT_FAILURE")(),c=Object(a.createAsyncAction)("chat/ADD_CHAT_REQUEST","chat/ADD_CHAT_SUCCESS","chat/ADD_CHAT_FAILURE")(),s=Object(a.createAsyncAction)("chat/ADD_GROUP_REQUEST","chat/ADD_GROUP_SUCCESS","chat/ADD_GROUP_FAILURE")(),u=Object(a.createAsyncAction)("chat/UPDATE_GROUP_REQUEST","chat/UPDATE_GROUP_SUCCESS","chat/UPDATE_GROUP_FAILURE")()}},[[47,1,3]]]);
//# sourceMappingURL=main.f6bf5090.chunk.js.map