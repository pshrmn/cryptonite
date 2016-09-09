webpackJsonp([0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),l=a(r),s=n(30),o=a(s),u=n(163),i=n(226),c=n(233),d=n(248),h=a(d),f=n(276),m=a(f),p={user:window.__INITIAL_STATE__.user,challenges:{}},g=(0,c.combineReducers)(m["default"]),v=(0,c.createStore)(g,p),w=function(e,t){var n=v.getState(),a=n.user;a.authenticated||t({pathname:"/login",state:{nextPathname:e.location.pathname}})},E=function(e,t){var n=v.getState(),a=n.user;a.authenticated&&t({pathname:"/"})},y=(0,h["default"])(w,E);o["default"].render(l["default"].createElement(i.Provider,{store:v},l["default"].createElement(u.Router,{routes:y,history:u.browserHistory})),document.querySelector("#app-holder"))},248:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return{path:"/",component:l["default"],indexRoute:{component:o["default"]},childRoutes:[{path:"login",component:u.Login,onEnter:t},{path:"signup",component:u.Signup,onEnter:t},{path:"profile",component:u.Profile,onEnter:e},{path:"profile/change-password",component:u.ChangePassword,onEnter:e},{path:"learn",component:c["default"]},{path:"learn/crypto-intro",component:d.CryptoIntro},{path:"learn/shift-cipher",component:d.ShiftCipher},{path:"challenges",component:f["default"]},{path:"challenge/:challengeID",component:p["default"]}]}};var r=n(249),l=a(r),s=n(257),o=a(s),u=n(258),i=n(267),c=a(i),d=n(268),h=n(271),f=a(h),m=n(274),p=a(m)},249:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("div",{id:"app-base"},s["default"].createElement(u["default"],null),s["default"].createElement("main",null,e.children),s["default"].createElement(c["default"],null))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=n(250),u=a(o),i=n(256),c=a(i)},250:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.user,n=e.logoutUser,a=[{key:"learn",component:s["default"].createElement(o.Link,{to:{pathname:"/learn"}},"Learn")},{key:"challenges",component:s["default"].createElement(o.Link,{to:{pathname:"/challenges"}},"Challenges")}];return t.authenticated?(a.push({key:"profile",component:s["default"].createElement(o.Link,{className:"cap",to:{pathname:"profile"}},t.username)}),a.push({key:"logout",component:s["default"].createElement(d,{logoutUser:n})})):(a.push({key:"signup",component:s["default"].createElement(o.Link,{to:{pathname:"/signup"}},"Signup")}),a.push({key:"login",component:s["default"].createElement(o.Link,{to:{pathname:"/login"}},"Login")})),s["default"].createElement("header",null,s["default"].createElement(o.IndexLink,{id:"home",to:{pathname:"/"}},"Cryptonite"),s["default"].createElement("nav",null,s["default"].createElement("ul",null,a.map(function(e){return s["default"].createElement("li",{key:e.key},e.component)}))))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=a(l),o=n(163),u=n(226),i=n(251),c=n(254),d=(0,o.withRouter)(function(e){var t=function(t){t.preventDefault(),(0,i.logout)().then(function(){e.logoutUser(),e.router.push("/")})};return s["default"].createElement("a",{href:"#",onClick:t},"Logout")});t["default"]=(0,u.connect)(function(e){return{user:e.user}},{logoutUser:c.logoutUser})(r)},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changePassword=t.logout=t.signup=t.login=void 0,n(252);var a=n(253),r="/api/auth";t.login=function(e,t){return fetch(r+"/login",{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()},body:JSON.stringify({username:e,password:t})})},t.signup=function(e,t,n){return fetch(r+"/signup",{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()},body:JSON.stringify({username:e,password1:t,password2:n})})},t.logout=function(){return fetch(r+"/logout",{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()}})},t.changePassword=function(e,t,n){return fetch(r+"/change_password",{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()},body:JSON.stringify({old_password:e,new_password1:t,new_password2:n})})}},253:function(e,t){"use strict";function n(){var e=document.cookie.split("&");return e.reduce(function(e,t){if(void 0!==e)return e;var n=t.split("="),r=a(n,2),l=r[0],s=r[1];return"csrftoken"===l?s:e},void 0)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(u){r=!0,l=u}finally{try{!a&&o["return"]&&o["return"]()}finally{if(r)throw l}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.getCSRFToken=n},254:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.loadChallenges=t.loadChallenge=t.logoutUser=t.loginUser=void 0;var r=n(255),l=a(r);t.loginUser=function(e){return{type:l.LOGIN_USER,user:e}},t.logoutUser=function(){return{type:l.LOGOUT_USER}},t.loadChallenge=function(e){return{type:l.LOAD_CHALLENGE,challenge:e}},t.loadChallenges=function(e){return{type:l.LOAD_CHALLENGES,challenges:e}}},255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOGIN_USER="LOGIN_USER",t.LOGOUT_USER="LOGOUT_USER",t.LOAD_CHALLENGE="LOAD_CHALLENGE",t.LOAD_CHALLENGES="LOAD_CHALLENGES"},256:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("footer",null,"made by ",s["default"].createElement("a",{href:"http://www.pshrmn.com"},"pshrmn.com"))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l)},257:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("div",null,s["default"].createElement("p",null,"Cryptonite provides challenges to help you learn the basics of cryptography."))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l)},258:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(259);Object.defineProperty(t,"Login",{enumerable:!0,get:function(){return a(r)["default"]}});var l=n(262);Object.defineProperty(t,"Signup",{enumerable:!0,get:function(){return a(l)["default"]}});var s=n(264);Object.defineProperty(t,"ChangePassword",{enumerable:!0,get:function(){return a(s)["default"]}});var o=n(266);Object.defineProperty(t,"Profile",{enumerable:!0,get:function(){return a(o)["default"]}})},259:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t="/";return e.location.state&&e.location.state.nextPathname&&(t=e.location.state.nextPathname),s["default"].createElement("div",null,s["default"].createElement("h2",null,"Login"),s["default"].createElement(i["default"],{next:t}),s["default"].createElement("p",null,"Don't have an account? ",s["default"].createElement(o.Link,{to:{pathname:"/signup"}},"Sign up here")))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=n(163),u=n(260),i=a(u)},260:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),s=n(226),o=n(163),u=n(261),i=n(251),c=n(254),d=l["default"].createClass({displayName:"LoginForm",getInitialState:function(){return{username:"",password:"",errors:{}}},handleUsername:function(e){this.setState({username:e.target.value})},handlePassword:function(e){this.setState({password:e.target.value})},handleSubmit:function(e){var t=this;e.preventDefault(),(0,i.login)(this.state.username,this.state.password).then(function(e){return e.json()}).then(function(e){return e.success?(t.props.loginUser(e.user),void t.props.router.push(t.props.next||"/")):Promise.reject(e.errors)})["catch"](function(e){t.setState({errors:e})})},render:function(){var e=this.state,t=e.username,n=e.password,a=e.errors,r=void 0===a?{}:a;return l["default"].createElement("form",{onSubmit:this.handleSubmit},l["default"].createElement(u.Errors,{errors:r.__all__}),l["default"].createElement(u.InputRow,{name:"Username",value:t,handler:this.handleUsername,errors:r.username,id:"login-username-input"}),l["default"].createElement(u.InputRow,{name:"Password",value:n,type:"password",handler:this.handlePassword,errors:r.password,id:"login-password-input"}),l["default"].createElement("div",null,l["default"].createElement("button",null,"Login")))}});t["default"]=(0,s.connect)(null,{loginUser:c.loginUser})((0,o.withRouter)(d))},261:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Errors=t.InputRow=void 0;var r=n(1),l=a(r),s=(t.InputRow=function(e){var t=e.name,n=e.value,a=void 0===n?"":n,r=e.type,o=void 0===r?"text":r,u=e.handler,i=e.id,c=void 0===i?"input-"+Math.floor(1e4*Math.random()):i,d=e.errors;return l["default"].createElement("div",{className:"input-row"},l["default"].createElement("div",null,l["default"].createElement(s,{errors:d})),l["default"].createElement("label",{htmlFor:c},t),l["default"].createElement("input",{type:o,id:c,value:a,onChange:u}))},t.Errors=function(e){var t=e.errors;return t&&t.length?l["default"].createElement("ul",{className:"errors"},t.map(function(e,t){return l["default"].createElement("li",{key:t},e)})):null})},262:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t="/";return e.location.state&&e.location.state.nextPathname&&(t=e.location.state.nextPathname),s["default"].createElement("div",null,s["default"].createElement("h2",null,"Sign Up"),s["default"].createElement(i["default"],{next:t}),s["default"].createElement("p",null,"Already have an account? ",s["default"].createElement(o.Link,{to:{pathname:"/login"}},"Login here")))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=n(163),u=n(263),i=a(u)},263:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),s=n(226),o=n(163),u=n(261),i=n(251),c=n(254),d=l["default"].createClass({displayName:"SignupForm",getInitialState:function(){return{username:"",password1:"",password2:""}},handleUsername:function(e){this.setState({username:e.target.value})},handlePassword1:function(e){this.setState({password1:e.target.value})},handlePassword2:function(e){this.setState({password2:e.target.value})},handleSubmit:function(e){var t=this;e.preventDefault(),(0,i.signup)(this.state.username,this.state.password1,this.state.password2).then(function(e){return e.json()}).then(function(e){return e.success?(t.props.loginUser(e.user),void t.props.router.push(t.props.next||"/")):Promise.reject(e.errors)})["catch"](function(e){t.setState({errors:e})})},render:function(){var e=this.state,t=e.username,n=e.password1,a=e.password2,r=e.errors,s=void 0===r?{}:r;return l["default"].createElement("form",{onSubmit:this.handleSubmit},l["default"].createElement(u.Errors,{errors:s.__all__}),l["default"].createElement(u.InputRow,{name:"Username",value:t,handler:this.handleUsername,errors:s.username,id:"signup-username-input"}),l["default"].createElement(u.InputRow,{name:"Password",value:n,type:"password",handler:this.handlePassword1,errors:s.password1,id:"signup-password1-input"}),l["default"].createElement(u.InputRow,{name:"Password (Verify)",value:a,type:"password",handler:this.handlePassword2,errors:s.password2,id:"signup-password2-input"}),l["default"].createElement("div",null,l["default"].createElement("button",null,"Sign Up")))}});t["default"]=(0,s.connect)(null,{loginUser:c.loginUser})((0,o.withRouter)(d))},264:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("div",null,s["default"].createElement("h2",null,"Change Password"),s["default"].createElement(u["default"],null))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=n(265),u=a(o)},265:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),s=n(261),o=n(251),u=l["default"].createClass({displayName:"ChangePasswordForm",getInitialState:function(){return{old_password:"",new_password1:"",new_password2:"",success:!1}},handleOldPassword:function(e){this.setState({old_password:e.target.value,success:!1})},handlePassword1:function(e){this.setState({new_password1:e.target.value,success:!1})},handlePassword2:function(e){this.setState({new_password2:e.target.value,success:!1})},handleSubmit:function(e){var t=this;e.preventDefault();var n=this.state,a=n.old_password,r=n.new_password1,l=n.new_password2;(0,o.changePassword)(a,r,l).then(function(e){return e.json()}).then(function(e){return e.success?void t.setState({success:!0,errors:{}}):Promise.reject(e.errors)})["catch"](function(e){t.setState({errors:e})})},render:function(){var e=this.state,t=e.old_password,n=e.new_password1,a=e.new_password2,r=e.success,o=e.errors,u=void 0===o?{}:o;return l["default"].createElement("form",{onSubmit:this.handleSubmit},r?l["default"].createElement("p",null,"Password change successful"):null,l["default"].createElement(s.Errors,{errors:u.__all__}),l["default"].createElement(s.InputRow,{name:"Old Password",value:t,type:"password",handler:this.handleOldPassword,errors:u.old_password,id:"password-old_password-input"}),l["default"].createElement(s.InputRow,{name:"Password",value:n,type:"password",handler:this.handlePassword1,errors:u.new_password1,id:"password-password1-input"}),l["default"].createElement(s.InputRow,{name:"Password (Verify)",value:a,type:"password",handler:this.handlePassword2,errors:u.new_password2,id:"password-password2-input"}),l["default"].createElement("div",null,l["default"].createElement("button",null,"Change Password")))}});t["default"]=u},266:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){e.user;return s["default"].createElement("div",null,s["default"].createElement(u.Link,{to:{pathname:"profile/change-password"}},"Change Password"))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=a(l),o=n(226),u=n(163);t["default"]=(0,o.connect)(function(e){return{user:e.user}})(r)},267:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("div",null,s["default"].createElement("h1",null,"Lessons"),s["default"].createElement("ol",null,s["default"].createElement("li",null,s["default"].createElement(o.Link,{to:{pathname:"/learn/crypto-intro"}},"Introduction to Cryptography")),s["default"].createElement("li",null,s["default"].createElement(o.Link,{to:{pathname:"/learn/shift-cipher"}},"Shift Ciphers"))))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=n(163)},268:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(269);Object.defineProperty(t,"CryptoIntro",{enumerable:!0,get:function(){return a(r)["default"]}});var l=n(270);Object.defineProperty(t,"ShiftCipher",{enumerable:!0,get:function(){return a(l)["default"]}})},269:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("div",null,s["default"].createElement("h1",null,"Introduction to Cryptography"),s["default"].createElement("p",null,"Imagine that you have a message that you want to pass to a friend:"),s["default"].createElement("div",{className:"message"},"math is fun"),s["default"].createElement("p",null,"The information in the message is important and you don't want anyone else who sees the message to know what it says. What should you do? You should encrypt the message so that only people who know how to decrypt it can read it. Encryption is the process of transforming a plain text message into an encrypted message. Decryption is the process of transforming an encrypted message into a plain text message."),s["default"].createElement("p",null,"You and your friend agree to use the ROT13 cipher to encrypt the message. A cipher is a set of steps that must be taken to transform the characters in a message. You then encrypt the message and your friend gets the encrypted message:"),s["default"].createElement("div",{className:"message"},"zngu vf sha"),s["default"].createElement("p",null,"Luckily, she knows that the message was encrypted using ROT13 and that in order to decrypt it, she needs to reverse the encryption cipher with a decryption cipher. For ROT13 encryption, the decryption cipher is also ROT13. Using that cipher, she can decrypt the message and reply:"),s["default"].createElement("div",{className:"message"},"qrsvavgryl"),s["default"].createElement("p",null,"After you decrypt her message, you see that her response is:"),s["default"].createElement("div",{className:"message"},"totally"),s["default"].createElement("p",null,"What would happen if someone else saw the messages that you passed? That depends on whether or not they know how to decrypt the messages. To someone that does not know how to decrypt them, the messages are just nonsense. Someone who does know how to decrypt the messages, can easily read them."),s["default"].createElement("p",null,"The ROT13 cipher isn't very secure. Even if somebody who intercepts a message doesn't know how it was encrypted, it is very easy for them to brute force attack the encrypted message to determine the plain text message."),s["default"].createElement("p",null,"Thanks to computers, modern ciphers are much more secure. However, we will be focusing on older ciphers in the lessons so that the encryption and decryption can be done by hand."))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l)},270:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement("div",null,s["default"].createElement("h1",null,"Shift Cipher"),s["default"].createElement("p",null,"The shift cipher is a simple substitution cipher. Julius Caesar, the Roman Emperor, used a shift cipher to encrypt messages, so they are also referred to as Caesar ciphers."),s["default"].createElement("section",null,s["default"].createElement("h2",null,"What is a substitution cipher?"),s["default"].createElement("p",null,"In order to create a substitution cipher we need to start with a set of characters. We will use the English alphabet, which consists of 26 characters."),s["default"].createElement("div",{className:"message"},"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"),s["default"].createElement("p",null,'As the name implies, a substitution cipher substitutes each character in a message with a different character. For example, the character "A" might be substituted by the character "X". Then, when you are encrypting a message using the cipher, each "A" in the message would be substituted with an "X". The decryption cipher would then need to invert the encryption. When the encrypted message is decrypted, and each "X" would be substituted with an "A".'),s["default"].createElement("div",{className:"message"},"X R M G P E N W H Y U Z T B O I C F L V A Q J S D K"),s["default"].createElement("p",null,'The important thing is that the cipher substitutes each letter uniquely. If both "A" and "E" were substituted with an "X", when you try to decrypt the message, you wouldn\'t know whether to substitute "X"s with an "A" or an "E".')),s["default"].createElement("section",null,s["default"].createElement("h2",null,"A Bit of Math"),s["default"].createElement("p",null,"Before we go further, it is important to get a basic understanding of modular arithmetic. If you remember when you first learned division, instead of figuring out decimal places, you left a remainder. For example, 25 divided by 4 is 6.25, but is also 6 remainder 1. Modular arithmetic is essentially getting the remainder value from division. Therefore, 25 modulo 4 = 1."),s["default"].createElement("p",null,'Now, lets take a look at a series of numbers modulo 4. Note that it is common to express modulo using the word "mod" or the symbol "%". I.e., 24 mod 4 = 0 and 25 % 4 = 1.'),s["default"].createElement("ul",null,s["default"].createElement("li",null,"24 ÷ 4 = 6 remainder 0, so 24 mod 4 = 0"),s["default"].createElement("li",null,"25 ÷ 4 = 6 remainder 1, so 25 mod 4 = 1"),s["default"].createElement("li",null,"26 ÷ 4 = 6 remainder 2, so 26 mod 4 = 2"),s["default"].createElement("li",null,"27 ÷ 4 = 6 remainder 3, so 27 mod 4 = 3"),s["default"].createElement("li",null,"28 ÷ 4 = 7 remainder 0, so 28 mod 4 = 0"),s["default"].createElement("li",null,"29 ÷ 4 = 7 remainder 1, so 29 mod 4 = 1")),s["default"].createElement("p",null,"Looking at the modulo values, you can see that they have the cycle 0, 1, 2, 3, 0, 1, ... that contains the range 0 through our modulo number minus one (3 in this case)."),s["default"].createElement("p",null,"One way to compute the modulo value is to subtract the modulo number from our initial value, and continue doing this with the result until the result is less than the modulo number (and greater than or equal to 0)."),s["default"].createElement("div",{className:"message"},"25 mod 4 = 25 - 4 = 21 - 4 = 17 - 4 = 13 - 4 = 9 - 4 = 5 - 4 = 1"),s["default"].createElement("p",null,"For negative numbers, the reverse applies. We would keep adding the modulo number until we are greater than or equal to 0 (and less than the modulo number)."),s["default"].createElement("div",{className:"message"},"-25 mod 4 = -25 + 4 = -21 + 4 = -17 + 4 = -13 + 4 = -9 + 4 = -5 + 4 = -1 + 4 = 3")),s["default"].createElement("section",null,s["default"].createElement("h2",null,"Shift-y Business"),s["default"].createElement("p",null,"One approach to a substitution cipher would be to randomize the ordering of the letters. The problem with this is that the person who needs to decrypt the message would also have to know this randomized ordering. A simpler solution is to use a shift cipher."),s["default"].createElement("p",null,'We can assign each character in our set an index number based on its position in the set. Here the index of each character is based on alphabetical order. "A" is the first character, so we will give it the index of 0. We start at 0 instead of 1 because we will be using modular arithmetic. "B" will be index 1, so on and so forth until we get to the character "Z" which will be index 25.'),s["default"].createElement("div",{className:"message"},"A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15 Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25"),s["default"].createElement("p",null,"A shift cipher provides a controlled way to encrypt and decrypt messages by substituting a character with the one a set distance from it. For example, if we were encrypting a message using a shift cipher of 3, for each character in the plain text message, we would add 3 to its index and substitute it with the character at the computed index."),s["default"].createElement("div",{className:"message"},"computed index = index + 3"),s["default"].createElement("p",null,'"A" has an index of 0, so we add 3 to it to get the computed index of 3. We would then substitute the character at index 3, "D" for the "A".'),s["default"].createElement("p",null,"There is one issue though, which is that some characters get shifted to numbers that are outside of our number of characters, so they have no character to substitute for them."),s["default"].createElement("div",{className:"message"},"A=3 B=4 C=5 D=6 E=7 F=8 G=9 H=10 I=11 J=12 K=13 L=14 M=15 N=16 O=17 P=18 Q=19 R=20 S=21 T=22 U=23 V=24 W=25 X=26 Y=27 Z=28"),s["default"].createElement("p",null,"This is where modular arithmetic comes in. After adding the shift value to the index, we need to take the modulo of that sum using the total number of characters. In our case, we have 26 characters, so our cipher will use modulo 26."),s["default"].createElement("div",{className:"message"},"computed index = (index + 3) mod 26"),s["default"].createElement("p",null,"That will ensure that all of our characters shift to an index that aligns with a character."),s["default"].createElement("div",{className:"message"},"A=3 B=4 C=5 D=6 E=7 F=8 G=9 H=10 I=11 J=12 K=13 L=14 M=15 N=16 O=17 P=18 Q=19 R=20 S=21 T=22 U=23 V=24 W=25 X=0 Y=1 Z=2")),s["default"].createElement("section",null,s["default"].createElement("h2",null,"Got Your Message, I'll Decrypt It to Reverse It"),s["default"].createElement("p",null,"In order to decrypt a shift cipher, the characters have to be shifted in the opposite direction. Above our cipher added 3 to the index value of each character in order to encrypt the message. We need to reverse that in order to decrypt the message, so our cipher should subtract 3 from each character's index to get its original index."),s["default"].createElement("div",{className:"message"},"original index = (index - 3) mod 26"),s["default"].createElement("p",null,"That will give us back our original alphabetical ordered indices to use for decrypting the encrypted message."),s["default"].createElement("div",{className:"message"},"A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15 Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25"),s["default"].createElement("p",null,"Another way to look at the reverse cipher is that we need to return the character to its original index, and since we have 26 characters, we need to add a number to each index so that the encryption shift value and the decryption shift value sum to 26. For the encryption shift cipher of 3, this means that we need to add 23 to each encrypted character's index."),s["default"].createElement("div",{className:"message"},"original index = (index - 3) mod 26 = (index + 23) mod 26"),s["default"].createElement("p",null,"One cipher that is common for demonstrations is ROT13, which is a shift cipher of 13. The reason that ROT13 is interesting is that because the English alphabet contains 26 letters, the encryption and decryption ciphers are the same.")),s["default"].createElement("section",null,s["default"].createElement("h2",null,"Actually Encrypting and Decrypting"),s["default"].createElement("p",null,"Finally, we should encrypt and decrypt an actual message. One thing to note is that so far we have talked about upper and lower case letters and haven't included punctuation. Typically, all letters would be treated as being the same case and punctuation would be omitted. This is partially done to be convenient and also partly to avoid leaking information."),s["default"].createElement("p",null,"The message that we will be encrypting is:"),s["default"].createElement("div",{className:"message"},"The bell rings at two."),s["default"].createElement("p",null,"Ignoring punctuation and treating all letters as the same case, we can convert this message to:"),s["default"].createElement("div",{className:"message"},"THE BELL RINGS AT TWO."),s["default"].createElement("p",null,'Now, we need to determine how much our cipher should shift. Seven is a popular "random" number choice, so we\'ll go with that. So, given the input indices:'),s["default"].createElement("div",{className:"message"},"A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15 Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25"),s["default"].createElement("p",null,"We will substitute each letter with the letter that has an index seven index values higher (modulo 26)."),s["default"].createElement("div",{className:"message"},"A=7 B=8 C=9 D=10 E=11 F=12 G=13 H=14 I=15 J=16 K=17 L=18 M=19 N=20 O=21 P=22 Q=23 R=24 S=25 T=0 U=1 V=2 W=3 X=4 Y=5 Z=6"),s["default"].createElement("p",null,"Now, we need to determine the index of each character in the message that we are encrypting."),s["default"].createElement("div",{className:"message"},"T=0 H=14 E=11 B=8 E=11 L=18 L=18 R=24 I=15 N=20 G=13 S=25 A=7 T=0 T=0 W=3 O=21"),s["default"].createElement("p",null,"Now, we need to lookup the index value for each character and substitute the character at the index."),s["default"].createElement("div",{className:"message"},"0=A 14=O 11=L 8=I 11=L 18=S 18=S 24=Y 15=P 20=U 13=N 25=Z 7=H 0=A 0=A 3=D 21=V"),s["default"].createElement("p",null,"That leaves us with our encrypted message:"),s["default"].createElement("div",{className:"message"},"AOL ILSS YPUNZ HA ADV"),s["default"].createElement("p",null,"Now, if we are the recipient of the message and we need to decrypt the message to read it. First we should determine the index of each character."),s["default"].createElement("div",{className:"message"},"A=0 O=14 L=11 I=8 L=11 S=18 S=18 Y=24 P=15 U=20 N=13 Z=25 H=7 A=0 A=0 D=3 V=21"),s["default"].createElement("p",null,"We know that the plain text message was encrypted using a shift cipher of 7, we know that we need to subtract 7 from the index of each character to get the original index values (using modulo 26)."),s["default"].createElement("div",{className:"message"},"A=19 O=7 L=4 I=1 L=4 S=11 S=11 Y=17 P=8 U=13 N=6 Z=18 H=0 A=19 A=19 D=22 V=14"),s["default"].createElement("p",null,"Then, we just need to map the computed original indices to the original index values to get the correct letters."),s["default"].createElement("div",{className:"message"},"19=T 7=H 4=E 1=B 4=E 11=L 11=L 17=R 8=I 13=N 6=G 18=S 0=A 19=T 19=T 22=W 14=0"),s["default"].createElement("p",null,"Which leaves us with our original message:"),s["default"].createElement("div",{className:"message"},"THE BELL RINGS AT TWO")))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l)},271:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement(u["default"],null)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=(n(163),n(272)),u=a(o)},272:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),s=n(226),o=n(163),u=n(261),i=n(273),c=n(254),d=l["default"].createClass({displayName:"Challenges",getInitialState:function(){return{errors:{}}},componentDidMount:function(){var e=this;(0,i.all_challenges)().then(function(e){return e.json()}).then(function(t){return t.success?void e.props.loadChallenges(t.challenges):Promise.reject(t.errors)})["catch"](function(t){e.setState({errors:t})})},render:function(){var e=this.props.challenges,t=void 0===e?{}:e,n=this.state.errors,a=void 0===n?{}:n,r=Object.keys(t).map(function(e){var n=t[e];return l["default"].createElement("li",{key:n.pk},l["default"].createElement(o.Link,{to:{pathname:"/challenge/"+n.pk}},n.name),l["default"].createElement("span",{className:"completed"},n.completed?"✓":null))});return l["default"].createElement("div",null,l["default"].createElement("h1",null,"Challenges"),l["default"].createElement(u.Errors,{errors:a.__all__}),l["default"].createElement("ol",null,r))}});t["default"]=(0,s.connect)(function(e){return{challenges:e.challenges}},{loadChallenges:c.loadChallenges})(d)},273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.check=t.challenge=t.all_challenges=void 0,n(252);var a=n(253),r="/api/challenge";t.all_challenges=function(){return fetch(r+"/all",{method:"GET",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()}})},t.challenge=function(e){return fetch(r+"/"+e+"/",{
method:"GET",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()}})},t.check=function(e,t){return fetch(r+"/"+e+"/check",{method:"POST",credentials:"same-origin",headers:{"X-CSRFToken":(0,a.getCSRFToken)()},body:JSON.stringify({message:t})})}},274:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){return s["default"].createElement(u["default"],{challengeID:e.params.challengeID})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=n(1),s=a(l),o=n(275),u=a(o)},275:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=a(r),s=n(163),o=n(226),u=n(261),i=n(273),c=n(254),d=l["default"].createClass({displayName:"Challenge",getInitialState:function(){return{errors:void 0,message:"",decrypted:!1}},componentDidMount:function(){var e=this,t=this.props,n=(t.challenge,t.challengeID),a=t.loadChallenge;void 0===this.props.challenge&&(0,i.challenge)(n).then(function(e){return e.json()}).then(function(e){return e.success?void a(e.challenge):Promise.reject(e.errors)})["catch"](function(t){e.setState({errors:t})})},handleMessage:function(e){this.setState({message:e.target.value})},checkMessage:function(e){var t=this;e.preventDefault(),(0,i.check)(this.props.challengeID,this.state.message).then(function(e){return e.json()}).then(function(e){return e.success?void t.setState({decrypted:!0,errors:{}}):Promise.reject(e.errors)})["catch"](function(e){t.setState({errors:e})})},render:function(){var e=this.props,t=e.user,n=e.challenge,a=void 0===n?{}:n,r=e.challengeID,o=this.state,i=o.errors,c=void 0===i?{}:i,d=o.message,h=o.decrypted;if(!t||!t.authenticated){var f={nextPathname:"/challenge/"+r};return l["default"].createElement("div",null,l["default"].createElement("p",null,"You must be logged in to do the challenges. If you have an account, please"," ",l["default"].createElement(s.Link,{to:{pathname:"/login",state:f}},"login"),". Otherwise, you can"," ",l["default"].createElement(s.Link,{to:{pathname:"/signup",state:f}},"create")," ","a new account."))}return l["default"].createElement("div",{className:"challenge"},l["default"].createElement("h1",null,a.name,h||a.completed?"✓":null),a.description,l["default"].createElement("p",{className:"encrypted"},a.encrypted),l["default"].createElement("form",{onSubmit:this.checkMessage},l["default"].createElement(u.Errors,{errors:c.__all__}),l["default"].createElement("textarea",{className:"decrypted",value:d,onChange:this.handleMessage}),l["default"].createElement("div",null,l["default"].createElement("button",null,"Check"))))}});t["default"]=(0,o.connect)(function(e,t){var n=t.challengeID;return{user:e.user,challenge:e.challenges[n]}},{loadChallenge:c.loadChallenge})(d)},276:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(277),l=a(r),s=n(278),o=a(s);t["default"]={user:l["default"],challenges:o["default"]}},277:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case l.LOGIN_USER:return Object.assign({},t.user,{authenticated:!0});case l.LOGOUT_USER:return{authenticated:!1};default:return e}};var r=n(255),l=a(r)},278:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case s.LOAD_CHALLENGE:var n=t.challenge;return Object.assign({},e,r({},n.pk,n));case s.LOAD_CHALLENGES:var a=t.challenges.reduce(function(e,t){return e[t.pk]=t,e},{});return Object.assign({},e,a);default:return e}};var l=n(255),s=a(l)}});