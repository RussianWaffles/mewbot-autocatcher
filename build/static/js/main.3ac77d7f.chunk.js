(this["webpackJsonpmewbot-autocatcher"]=this["webpackJsonpmewbot-autocatcher"]||[]).push([[0],{43:function(e,t,a){e.exports=a(98)},95:function(e,t){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(39),s=a.n(l),r=a(5),c=a.n(r),i=a(17),u=a(6),m=a(22),d=a(18),h=a(19),v=a(4),g=a(21),f=a(20),b=a(1),p=a.n(b),w=a(40),E=a(41),y=a.n(E),k=a(42),C=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(d.a)(this,a);for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return(n=t.call.apply(t,[this,e].concat(l))).renderThumb=n.renderThumb.bind(Object(v.a)(n)),n.renderView=n.renderView.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"renderView",value:function(e){var t=e.style,a=Object(m.a)(e,["style"]);return o.a.createElement("div",Object.assign({className:"box",style:Object(u.a)(Object(u.a)({},t),{overflowX:"hidden",overflowY:"scroll"})},a))}},{key:"renderThumb",value:function(e){var t=e.style,a=Object(m.a)(e,["style"]);return o.a.createElement("div",Object.assign({style:Object(u.a)(Object(u.a)({},t),{backgroundColor:"white",borderRadius:"3px"})},a))}},{key:"render",value:function(){return o.a.createElement(w.Scrollbars,Object.assign({autoHide:!1,renderView:this.renderView,renderThumbHorizontal:this.renderThumb,renderThumbVertical:this.renderThumb},this.props))}}]),a}(n.Component),B=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).websocket=y()("ws://"+window.location.hostname+":3001/"),e.state={config:null,bot1:null,bot2:null,bot3:null,servers:null,botlogs:[],debuglogs:[],averagerecognitiontime:0,pokemoncaught:0,pinglatency:0,unknownpokemon:0,uptime:0,commandserverstatus:"Not Connected",jsonversion:"0.0.0",botversion:"0.0.0",blacklist:{},whitelist:{}},e.websocket.once("connect",(function(){e.websocket.emit("init",(function(t){e.setState({config:t.data.config,whitelist:t.data.whitelist,blacklist:t.data.blacklist},(function(){e.ping()}))}))})),e.websocket.on("error",(function(e){p.a.fire({title:"Error",html:e,icon:"error",allowEnterKey:!0})})),e.websocket.once("disconnect",(function(){window.location.reload()})),e}return Object(h.a)(a,[{key:"ping",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,this.websocket.emit("dataping",function(){var e=Object(i.a)(c.a.mark((function e(n){var o,l,s,r,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in o=new Date,l=new Date(n.data.uptime).toISOString().substring(11,19),(s={botlogs:a.state.botlogs,debuglogs:a.state.debuglogs,pinglatency:o-t,averagerecognitiontime:n.data.averagerecognitiontime,pokemoncaught:n.data.pokemoncaught,unknownpokemon:n.data.unknownpokemon,uptime:l,commandserverstatus:n.data.commandserverstatus,jsonversion:n.data.jsonversion,botversion:n.data.botversion,bot1:n.data.bot1,bot2:n.data.bot2,bot3:n.data.bot3,servers:n.data.servers}).servers)(i=s.servers[r]).icon||(i.icon=a.serverIcon(i.acronym)),s.servers[r]=i;return 0!==n.data.botlogs.length&&n.data.botlogs.forEach((function(e){a.state.config.botlogs&&s.botlogs.push(e)})),0!==n.data.debuglogs.length&&n.data.debuglogs.forEach((function(e){a.state.config.debuglogs&&s.debuglogs.push(e)})),0!==n.data.botlogs.length||0!==n.data.debuglogs.length?(a.setState({newstate:s}),(u=document.getElementsByClassName("debuglogs")[0].lastChild.firstChild.firstChild).scrollTop=u.scrollHeight,(u=document.getElementsByClassName("botlogs")[0].lastChild.firstChild.firstChild).scrollTop=u.scrollHeight):a.setState(s),e.next=9,k(1e3);case 9:a.ping();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateConfig",value:function(e,t){var a=this;if("spam"===e&&!0===t)p.a.fire({title:"Spam Interval",input:"text",showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,inputPlaceholder:"Spam Interval(seconds)",confirmButtonText:"Set Spam Interval",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",inputValidator:function(e){return isNaN(e)?"Spam Interval must be number":parseInt(e)<0?"Spam Interval must be a number above 0":void 0}}).then((function(n){if(n.value){""===n.value&&(n.value="0"),n.value=1e3*parseInt(n.value);var o=a.state.config;o[e]=t,a.setState({config:o}),a.websocket.emit("configupdate","spaminterval",n.value,(function(){a.websocket.emit("configupdate",e,t,(function(){}))}))}}));else if("authenticationenabled"===e&&!0===t)p.a.fire({title:"Enable Authentication",html:'\n                <input id="swal2-authentication-username" type="textbox" class="swal2-input" placeholder="Username" style="margin: 0.5vw auto" value="'.concat(this.state.config.authentication.username,'">\n                <input id="swal2-authentication-password" type="textbox" class="swal2-input" placeholder="Password" style="margin: 0.5vw auto" value="').concat(this.state.config.authentication.password,'">\n                '),showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Enable Authentication",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",preConfirm:function(){return{username:document.getElementById("swal2-authentication-username").value,password:document.getElementById("swal2-authentication-password").value}}}).then((function(n){if(n.value){var o=a.state.config;o[e]=t,o.authentication={username:n.value.username,password:n.value.password},a.setState({config:o}),a.websocket.emit("configupdate","authentication",{username:n.value.username,password:n.value.password},(function(){a.websocket.emit("configupdate",e,t,(function(){}))}))}}));else{var n=this.state.config;n[e]=t,this.setState({config:n}),this.websocket.emit("configupdate",e,t,(function(){}))}}},{key:"updateServer",value:function(e){var t=this;p.a.fire({title:e.name+" Config",html:'\n            <input id="swal2-autocatch" type="checkbox" '.concat(e.autocatch?"checked":"",'/>\n            <label for="swal2-autocatch">Autocatch</label>&nbsp;\n            <input id="swal2-spam" type="checkbox" ').concat(e.spam?"checked":"",'/>\n            <label for="swal2-spam">Spam</label><br>\n            <input id="swal2-spamchannel" type="textbox" class="swal2-input" placeholder="Spam Channel(ID)" style="margin: 0.5vw auto" value="').concat(e.spamchannel,'">\n            <input id="swal2-prefix" type="textbox" class="swal2-input" placeholder="Mewbot Prefix" style="margin: 0.5vw auto" value="').concat(e.prefix,'">\n            <input id="swal2-delay" type="textbox" class="swal2-input" placeholder="Autocatch Delay(seconds)" style="margin: 0.5vw auto" value="').concat(e.delay,'">\n            '),showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Update Settings",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",preConfirm:function(){return{id:e.id,autocatch:document.getElementById("swal2-autocatch").checked,spam:document.getElementById("swal2-spam").checked,spamchannel:document.getElementById("swal2-spamchannel").value,prefix:document.getElementById("swal2-prefix").value,delay:document.getElementById("swal2-delay").value}}}).then((function(a){if(a.value){var n="";a.value.spam&&18!==a.value.spamchannel.length&&(n+="Spam Channel ID must be 18 characters<br>"),a.value.autocatch&&(isNaN(a.value.delay)&&(n+="Delay must be a number<br>"),parseFloat(a.value.delay)<0&&(n+="Delay must be a number above 0<br>"),""===a.value.delay&&(a.value.delay="0"),a.value.delay=parseFloat(a.value.delay)),""!==n?p.a.fire({title:"Error",html:n,icon:"error",allowEnterKey:!0}):t.websocket.emit("serverconfigupdate",a.value.id,a.value,(function(){var n=t.state.servers;a.value.autocatch||a.value.spam?n[e.id].active=!0:n[e.id].active=!1,t.setState({servers:n}),p.a.fire({title:"Success",html:"Settings Updated!",icon:"success",allowEnterKey:!0})}))}}))}},{key:"loading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"000";return o.a.createElement("div",{style:{fontSize:"2vw",fontFamily:"caviar_dreamsregular",color:"#"+e}},"Loading...")}},{key:"updatebot",value:function(e,t){var a=this;"No User#0000"===this.state[t].username?p.a.fire({title:"Bot Login",showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Login",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",input:"text",inputPlaceholder:"Token",inputValidator:function(e){if(!e.match(/.{24}\..{6}\..{27}/))return"Invalid token format!"}}).then((function(t){t.value&&a.websocket.emit("login",t.value,e,(function(e){"success"===e.status?p.a.fire({title:"Success",html:"Token Valid",icon:"success",allowEnterKey:!0}):p.a.fire({title:"Error",html:e.message,icon:"error",allowEnterKey:!0})}))})):p.a.fire({title:"Execute Command",showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Next",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",input:"select",inputOptions:["Send Message","Change Status","Change Avatar","Logout"]}).then((function(n){n.value&&("0"===n.value?p.a.fire({title:"Send Message",html:'\n                            <input id="swal2-sendmessage-message" type="textbox" class="swal2-input" placeholder="Message" style="margin: 0.5vw auto">\n                            <input id="swal2-sendmessage-channel" type="textbox" class="swal2-input" placeholder="Channel ID" style="margin: 0.5vw auto">\n                            ',showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Send Message",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",preConfirm:function(){return{message:document.getElementById("swal2-sendmessage-message").value,channel:document.getElementById("swal2-sendmessage-channel").value}}}).then((function(e){if(e.value){var n="";""===e.value.message&&(n+="Message must not be empty<br>"),18!==e.value.channel.length&&(n+="Channel ID must be 18 characters<br>"),""!==n?p.a.fire({title:"Error",html:n,icon:"error",allowEnterKey:!0}):a.websocket.emit("sendmessage",t,e.value.channel,e.value.message,(function(e){"success"===e.status?p.a.fire({title:"Success",html:"Message Sent!",icon:"success",allowEnterKey:!0}):p.a.fire({title:"Error",html:e.message,icon:"error",allowEnterKey:!0})}))}})):"1"===n.value?p.a.fire({title:"Change Status",showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Change Status",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",input:"select",inputOptions:["Online","Idle","Do Not Disturb","Invisible"]}).then((function(e){e.value&&a.websocket.emit("setstatus",t,"0"===e.value?"online":"1"===e.value?"idle":"2"===e.value?"dnd":"invisible",(function(){p.a.fire({title:"Success",html:"Status Changed!",icon:"success",allowEnterKey:!0})}))})):"2"===n.value?p.a.fire({title:"Change Avatar",showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Change Avatar",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10",input:"text",inputPlaceholder:"Avatar URL"}).then((function(e){e.value&&a.websocket.emit("setavatar",t,e.value,(function(e){"success"===e.status?p.a.fire({title:"Success",html:"Avatar Changed!",icon:"success",allowEnterKey:!0}):p.a.fire({title:"Error",html:e.message,icon:"error",allowEnterKey:!0})}))})):"3"===n.value&&p.a.fire({title:"Are you sure?",showCancelButton:!0,reverseButtons:!0,allowEnterKey:!0,confirmButtonText:"Logout",cancelButtonColor:"#d33",confirmButtonColor:"#10AA10"}).then((function(n){n.value&&a.websocket.emit("logout",t,e,(function(){var n={};n[t]=null,n.config=a.state.config,n.config[e]="","bot1"===t&&(n.servers=null),a.setState(n),p.a.fire({title:"Success",html:"Logged Out!",icon:"success",allowEnterKey:!0})}))})))}))}},{key:"serverIcon",value:function(e){var t=document.createElement("canvas");t.width=128,t.height=128;var a=t.getContext("2d");return a.font="50px caviar_dreamsregular",a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",a.fillText(e,64,64),t.toDataURL("image/png")}},{key:"listUpdate",value:function(e,t){var a=this;this.websocket.emit("listupdate",t.toLowerCase(),e,(function(t){var n={};n[e]=t.data,a.setState(n)}))}},{key:"loaded",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("center",null,o.a.createElement("h1",{className:"test"},"Mewbot Autocatcher - By RussianWaffles")),o.a.createElement("div",{className:"bots"},o.a.createElement("center",null,o.a.createElement("h2",null,"Bots")),o.a.createElement("div",{className:"frame"},this.state.bot1?o.a.createElement("div",{className:"bot"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:this.state.bot1.avatar,alt:"Avatar",onClick:function(){e.updatebot("token1","bot1")}})),o.a.createElement("div",{className:"username"},this.state.bot1.username)):o.a.createElement("div",{className:"bot"},this.loading("fff")),this.state.bot2?o.a.createElement("div",{className:"bot"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:this.state.bot2.avatar,alt:"Avatar",onClick:function(){e.updatebot("token2","bot2")}})),o.a.createElement("div",{className:"username"},this.state.bot2.username)):o.a.createElement("div",{className:"bot"},this.loading("fff")),this.state.bot3?o.a.createElement("div",{className:"bot"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:this.state.bot3.avatar,alt:"Avatar",onClick:function(){e.updatebot("token3","bot3")}})),o.a.createElement("div",{className:"username"},this.state.bot3.username)):o.a.createElement("div",{className:"bot"},this.loading("fff")))),o.a.createElement("div",{className:"servers"},o.a.createElement("center",null,o.a.createElement("h2",null,"Servers")),o.a.createElement("div",{className:"frame"},o.a.createElement(C,null,this.state.servers?Object.values(this.state.servers).map((function(t){return o.a.createElement("div",{className:"server",key:t.id,onClick:function(){e.websocket.emit("serverconfig",t.id,(function(t){e.updateServer(t.data)}))}},o.a.createElement("img",{src:t.icon,alt:"Icon"}),t.active?o.a.createElement("div",null,o.a.createElement("div",{className:"overlay"}),o.a.createElement("i",{className:"fas fa-check"})):o.a.createElement(o.a.Fragment,null))})):o.a.createElement(o.a.Fragment,null)))),o.a.createElement("div",{className:"options"},o.a.createElement("center",null,o.a.createElement("h2",null,"Options")),o.a.createElement("div",{className:"frame"},o.a.createElement("div",{className:"option"},o.a.createElement("input",{id:"autocatch",type:"checkbox",checked:!!this.state.config.autocatch,onChange:function(t){e.updateConfig("autocatch",t.currentTarget.checked)}}),o.a.createElement("label",{htmlFor:"autocatch"},"Autocatch")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{id:"spam",type:"checkbox",checked:!!this.state.config.spam,onChange:function(t){e.updateConfig("spam",t.currentTarget.checked)}}),o.a.createElement("label",{htmlFor:"spam"},"Spam")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{id:"botlogs",type:"checkbox",checked:!!this.state.config.botlogs,onChange:function(t){e.updateConfig("botlogs",t.currentTarget.checked),e.setState({botlogs:[]})}}),o.a.createElement("label",{htmlFor:"botlogs"},"Bot Logs")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{id:"debuglogs",type:"checkbox",checked:!!this.state.config.debuglogs,onChange:function(t){e.updateConfig("debuglogs",t.currentTarget.checked),e.setState({debuglogs:[]})}}),o.a.createElement("label",{htmlFor:"debuglogs"},"Debug Logs")),o.a.createElement("div",{className:"option"},o.a.createElement("input",{id:"authenticationenabled",type:"checkbox",checked:!!this.state.config.authenticationenabled,onChange:function(t){e.updateConfig("authenticationenabled",t.currentTarget.checked)}}),o.a.createElement("label",{htmlFor:"authenticationenabled"},"Authentication")))),o.a.createElement("div",{className:"botlogs"},o.a.createElement("center",null,o.a.createElement("h2",null,"Bot Logs")),o.a.createElement("div",{className:"frame"},o.a.createElement(C,null,this.state.botlogs?this.state.botlogs.map((function(e,t){return o.a.createElement("div",{className:"log",key:t},o.a.createElement("p",null,e))})):o.a.createElement(o.a.Fragment,null)))),o.a.createElement("div",{className:"debuglogs"},o.a.createElement("center",null,o.a.createElement("h2",null,"Debug Logs")),o.a.createElement("div",{className:"frame"},o.a.createElement(C,null,this.state.debuglogs?this.state.debuglogs.map((function(e,t){return o.a.createElement("div",{className:"log",key:t},o.a.createElement("p",null,e))})):o.a.createElement(o.a.Fragment,null)))),o.a.createElement("div",{className:"stats"},o.a.createElement("center",null,o.a.createElement("h2",null,"Statistics")),o.a.createElement("div",{className:"frame",style:{color:"white",fontFamily:"caviar_dreamsregular"}},"Average Recognition Time: ",this.state.averagerecognitiontime+"ms",o.a.createElement("br",null),"Pokemon Caught: ",this.state.pokemoncaught,o.a.createElement("br",null),"Uptime: ",this.state.uptime,o.a.createElement("br",null),"Unknown Pokemon: ",this.state.unknownpokemon,o.a.createElement("br",null),"Ping Latency: ",this.state.pinglatency+"ms",o.a.createElement("br",null),"Command Server: ",this.state.commandserverstatus,o.a.createElement("br",null),"JSON Version: ",this.state.jsonversion,o.a.createElement("br",null),"Bot Version: ",this.state.botversion)))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.state.config?this.loaded():this.loading())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3ac77d7f.chunk.js.map