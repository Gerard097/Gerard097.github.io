(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+oPb":function(e,t,n){"use strict";n("OGtf")("blink",(function(e){return function(){return e(this,"blink","","")}}))},"8Z9I":function(e,t,n){n("bWfx"),n("8+KV"),n("DNiP"),n("XfO3"),n("HEwt"),n("+oPb"),n("V+eJ"),n("pIFo"),n("Oyvg"),n("rGqo"),n("yt8O"),n("f3/d"),n("LK8F"),n("rE2o"),n("ioFf"),n("2Spj"),n("Z2Ku"),n("FLlr"),n("VRzm"),n("Btvt"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=p(i),u=p(n(2)),l=p(n(10)),s=p(n(12)),c=p(n(13)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function p(e){return e&&e.__esModule?e:{default:e}}var d=["🔙","⏰"],y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,o){var i=n.props.avgTypingDelay,a=n.props.stdTypingDelay;return n.props.delayGenerator(i,a,{line:e,lineIdx:t,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return f.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,o=n.props.onLineTyped;return f.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):f.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise((function(e,i){n.setState({textLines:n.state.textLines.concat([""])},(function(){f.eachPromise(r,n.typeCharacter,r,t).then((function(){return o(r,t)})).then(e).catch(i)}))}))},n.typeCharacter=function(e,t,r,o){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise((function(a){var u=n.state.textLines.slice();f.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var l="🔙"===e;if("⏰"===e)a();else{if(l&&o>0){for(var s=o-1,c=u[s],f=s;f>=0&&(!(c.length>0)||d.includes(c[0]));f--)c=u[s=f];u[s]=c.substr(0,c.length-1)}else u[o]+=e;n.setState({textLines:u},(function(){var u=n.delayGenerator(r,o,e,t);i(e,t),setTimeout(a,u)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=f.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return f.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,o=this.state.isDone,i=f.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return a.default.createElement("div",{className:"Typist "+t},i,a.default.createElement(l.default,r({isDone:o},n)))}}]),t}(i.Component);y.propTypes={children:u.default.node,className:u.default.string,avgTypingDelay:u.default.number,stdTypingDelay:u.default.number,startDelay:u.default.number,cursor:u.default.object,onCharacterTyped:u.default.func,onLineTyped:u.default.func,onTypingDone:u.default.func,delayGenerator:u.default.func},y.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:f.gaussianRnd},t.default=y,y.Backspace=s.default,y.Delay=c.default},function(e,t){e.exports=n("q1tI")},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(6),a=n(7),u=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="@@iterator";var s="<<anonymous>>",c={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:d(r.thatReturnsNull),arrayOf:function(e){return d((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new p("Invalid "+o+" `"+i+"` of type `"+m(u)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<u.length;l++){var s=e(u,l,r,o,i+"["+l+"]",a);if(s instanceof Error)return s}return null}))},element:d((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+m(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return d((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||s;return new p("Invalid "+o+" `"+i+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return s;return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}))},node:d((function(e,t,n,r,o){return h(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],l=m(u);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var c=e(u,s,r,o,i+"."+s,a);if(c instanceof Error)return c}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return d((function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(f(a,e[u]))return null;return new p("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",g(n),t),r.thatReturnsNull}return d((function(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return d((function(t,n,r,o,i){var u=t[n],l=m(u);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var c=e[s];if(c){var f=c(u,s,r,o,i+"."+s,a);if(f)return f}}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){this.message=e,this.stack=""}function d(e){function n(n,r,i,u,l,c,f){(u=u||s,c=c||i,f!==a)&&(t&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[i]?n?null===r[i]?new p("The "+l+" `"+c+"` is marked as required in `"+u+"`, but its value is `null`."):new p("The "+l+" `"+c+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,i,u,l,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function y(e){return d((function(t,n,r,o,i,a){var u=t[n];return m(u)!==e?new p("Invalid "+o+" `"+i+"` of type `"+v(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[l]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!h(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!h(a[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,c.checkPropTypes=u,c.PropTypes=c,c}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";var n=function(e){};e.exports=function(e,t,r,o,i,a,u,l){if(n(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,o,i,a,u,l],f=0;(s=new Error(t.replace(/%s/g,(function(){return c[f++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=u(o),a=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}n(11);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return i.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(o.Component);l.propTypes={blink:a.default.bool,show:a.default.bool,element:a.default.node,hideWhenDone:a.default.bool,hideWhenDoneDelay:a.default.number,isDone:a.default.bool},l.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=l},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Backspace",a.propTypes={count:o.default.number,delay:o.default.number},a.defaultProps={count:1,delay:0},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Delay",a.propTypes={ms:o.default.number.isRequired},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return Array.from(e).reduce((function(e,n,o){return e.then((function(){return t.apply(void 0,[n,o].concat(r))}))}),Promise.resolve())},t.exclude=u,t.isBackspaceElement=l,t.isDelayElement=s,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(a.default.isValidElement(r))l(r)||s(r)?n.unshift(r):a.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var o=!0,i=!1,u=void 0;try{for(var c,f=r[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var p=c.value;t.push(p)}}catch(d){i=!0,u=d}finally{try{!o&&f.return&&f.return()}finally{if(i)throw u}}}else n.unshift(r)}return n},t.cloneElement=c,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return function e(t,n,o){if(o>=n.length)return[null,o];var i=o,u=function(t){var o=e(t,n,i),a=r(o,2),u=a[0],l=a[1];return i=l,u};if(a.default.isValidElement(t)&&!l(t)&&!s(t)){var f=a.default.Children.map(t.props.children,u)||[];return[c(t,f),i]}if(Array.isArray(t)){return[t.map(u),i]}return[n[i],i+1]}(t,n,0)[0]};var o,i=n(1),a=(o=i)&&o.__esModule?o:{default:o};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function u(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function l(e){return e&&e.type&&"Backspace"===e.type.componentName}function s(e){return e&&e.type&&"Delay"===e.type.componentName}function c(e,t){var n=e.type,r=u(e.props,["children"]),o=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+o,a.default.createElement.apply(a.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}}])},FLlr:function(e,t,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},RXBc:function(e,t,n){"use strict";n.r(t);n("bHtr"),n("KKXr"),n("Vd3H");var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("8Z9I"),u=n.n(a),l=n("QijF");String.prototype.replaceAt=function(e,t){return this.substr(0,e)+t+this.substr(e+t.length)};var s=Object(i.b)(u.a).withConfig({displayName:"pages__STypist",componentId:"ifild7-0"})(["color:",";font-size:2.8rem;font-family:consolas;text-align:center;align-self:center;user-select:none;display:inline;"],l.a.secondary),c=i.b.div.withConfig({displayName:"pages__SSpan",componentId:"ifild7-1"})(["color:",";font-size:2.8rem;font-family:consolas;text-align:center;align-self:center;text-shadow:0px 0px 0.5rem ",";user-select:none;display:block;"],l.a.primaryVariant,l.a.primaryVariant),f=i.b.div.withConfig({displayName:"pages__TextCenterd",componentId:"ifild7-2"})(["padding:10rem 2rem;width:100%;display:flex;flex-direction:column;"]),p=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},d=function(e){return e.split("").sort((function(){return.5-Math.random()})).join("")},y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$@&%?",h=d(y)+d(y)+d(y),m=0;console.log(h);var v=function(e){var t=m;return(m+=e)>=h.length&&(t=h.length-e,m=0),h.substr(t,e)},g=["Gamer","Software Engineer","Web Developer","Game Developer","Dreamer","Wizard","Coder","Traveler","C++ Nerd","Team Player","Entrepreneur","Investor"],b=[],T=0,x=1,D=2,w=[],_=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={currentTitle:"",targetTitle:"",titleFormat:"",stateIndex:-1},n.targetDifference=0,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){var e=this;this.mounted=!0,setTimeout((function(){return e.randomizeTitle()}),100)},i.componentWillUnmount=function(){console.log("Unmount"),this.mounted=!1},i.selectTargetTitle=function(){var e=this;0===b.length&&(b=Array.apply(null,Array(g.length)).map((function(e,t){return t})),p(b));var t=b.splice(0,1)[0],n=g[t],r=new Array(n.length).fill(0);w=Array.apply(null,Array(r.length)).map((function(e,t){return t})),p(w);var o={targetTitle:n,stateIndex:T,titleFormat:r};this.setState(o,(function(){e.triggerRandomTitle()}))},i.randomizeTitle=function(){var e=this;if(this.mounted){if(0===this.state.stateIndex||1===this.state.stateIndex){for(var t=this.state,n=t.currentTitle,r=t.titleFormat,o=t.targetTitle,i="",a=0;a<n.length;++a){if(a<o.length){if(" "===o[a]){i+=" ";continue}if(0!==r[a]){i+=n[a];continue}}i+=v(1)}this.setState({currentTitle:i})}setTimeout((function(){return e.randomizeTitle()}),50)}},i.triggerRandomTitle=function(){var e=this;setTimeout((function t(){if(e.mounted){var n=e.state.stateIndex,r=100;if(n===T){var o=e.state.currentTitle,i=e.state.targetTitle,a=i.length-o.length;if(0===e.targetDifference&&(e.targetDifference=Math.abs(a)),0===a)e.setState({stateIndex:x}),r=750;else r=750/e.targetDifference,a>0?o+=v(1):o=o.substr(0,o.length-1),e.setState({currentTitle:o}),i.length-o.length==0&&e.setState({stateIndex:x})}else{if(n!==x)return e.selectTargetTitle(),void e.setState({stateIndex:T});if(w.length){var u=w.splice(0,1)[0],l=e.state,s=l.currentTitle,c=l.targetTitle,f=l.titleFormat,p=s.replaceAt(u,c[u]),d=f.slice();d[u]=1,r=1e3/s.length,e.setState({currentTitle:p,titleFormat:d})}else r=2500,e.setState({stateIndex:D}),e.targetDifference=0}setTimeout(t,r)}}),150)},i.render=function(){var e=this;return o.a.createElement(f,null,o.a.createElement(s,{startDelay:1e3,onTypingDone:function(){return e.selectTargetTitle()},cursor:{show:!0,hideWhenDone:!0,hideWhenDoneDelay:0}},"Hi.",o.a.createElement(u.a.Delay,{ms:700})," My name is Gerardo, ",o.a.createElement(u.a.Delay,{ms:350}),"and I'm a"),o.a.createElement(c,null,this.state.currentTitle))},r}(o.a.Component);t.default=_},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},l0Rn:function(e,t,n){"use strict";var r=n("RYi7"),o=n("vhPU");e.exports=function(e){var t=String(o(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}}}]);
//# sourceMappingURL=component---src-pages-index-js-404cd87dc67c5098d5be.js.map