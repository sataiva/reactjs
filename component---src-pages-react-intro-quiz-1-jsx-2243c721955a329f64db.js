webpackJsonp([0x21e2a0feed7bc000],{"./node_modules/prismjs/prism.js":function(e,t){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=n.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=a.util.type(e);switch(t){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=a.util.clone(e[r]));return n;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var s=r[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);return s}var i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);i[l]=s[l]}return a.languages.DFS(a.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=i)}),r[e]=i},DFS:function(e,t,n,r){r=r||{};for(var s in e)e.hasOwnProperty(s)&&(t.call(e,s,e[s],n||s),"Object"!==a.util.type(e[s])||r[a.util.objId(e[s])]?"Array"!==a.util.type(e[s])||r[a.util.objId(e[s])]||(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,s,r)):(r[a.util.objId(e[s])]=!0,a.languages.DFS(e[s],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,s=n.elements||document.querySelectorAll(n.selector),o=0;r=s[o++];)a.highlightElement(r,e===!0,n.callback)},highlightElement:function(t,r,s){for(var o,i,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),i=a.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var u=t.textContent,c={element:t,language:o,grammar:i,code:u};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(c.element.textContent=c.code),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),r&&n.Worker){var d=new Worker(a.filename);d.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(t),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},highlight:function(e,t,n){var s=a.tokenize(e,t);return r.stringify(a.util.encode(s),n)},tokenize:function(e,t,n){var r=a.Token,s=[e],o=t.rest;if(o){for(var i in o)t[i]=o[i];delete t.rest}e:for(var i in t)if(t.hasOwnProperty(i)&&t[i]){var l=t[i];l="Array"===a.util.type(l)?l:[l];for(var u=0;u<l.length;++u){var c=l[u],d=c.inside,p=!!c.lookbehind,g=!!c.greedy,f=0,m=c.alias;if(g&&!c.pattern.global){var h=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,h+"g")}c=c.pattern||c;for(var y=0,b=0;y<s.length;b+=s[y].length,++y){var v=s[y];if(s.length>e.length)break e;if(!(v instanceof r)){c.lastIndex=0;var k=c.exec(v),w=1;if(!k&&g&&y!=s.length-1){if(c.lastIndex=b,k=c.exec(e),!k)break;for(var j=k.index+(p?k[1].length:0),_=k.index+k[0].length,x=y,E=b,P=s.length;x<P&&E<_;++x)E+=s[x].length,j>=E&&(++y,b=E);if(s[y]instanceof r||s[x-1].greedy)continue;w=x-y,v=e.slice(b,E),k.index-=b}if(k){p&&(f=k[1].length);var j=k.index+f,k=k[0].slice(f),_=j+k.length,O=v.slice(0,j),A=v.slice(_),C=[y,w];O&&C.push(O);var N=new r(i,d?a.tokenize(k,d):k,m,k,g);C.push(N),A&&C.push(A),Array.prototype.splice.apply(s,C)}}}}}return s},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var s={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,o)}a.hooks.run("wrap",s);var i=Object.keys(s.attributes).map(function(e){return e+'="'+(s.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(i?" "+i:"")+">"+s.content+"</"+s.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,s=t.code,o=t.immediateClose;n.postMessage(a.highlight(s,a.languages[r],r)),o&&n.close()},!1),n.Prism):n.Prism;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(a.filename=s.src,document.addEventListener&&!s.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=a),"undefined"!=typeof t&&(t.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,r=t.getAttribute("data-src"),s=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;s&&!o.test(s.className);)s=s.parentNode;if(s&&(n=(t.className.match(o)||[,""])[1]),!n){var i=(r.match(/\.(\w+)$/)||[,""])[1];n=e[i]||i}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",r,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,a.highlightElement(l)):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(t,function(){return this}())},"./node_modules/react-prism/lib/components/PrismCode.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n("./node_modules/react/react.js"),u=a(l),c=n("./node_modules/prop-types/index.js"),d=function(e){function t(){var e,n,a,o;r(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a._handleRefMount=function(e){a._domNode=e},o=n,s(a,o)}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,a=e.children;return u.default.createElement(n,{ref:this._handleRefMount,className:t},a)}}]),t}(l.PureComponent);d.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},d.defaultProps={component:"code"},t.default=d},"./node_modules/react-prism/lib/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react-prism/lib/components/PrismCode.js");Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return a(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},"./src/components/Block.jsx":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n("./node_modules/react/react.js"),s=a(r),o=n("./node_modules/react-prism/lib/index.js"),i=a(o);n("./node_modules/prismjs/prism.js"),t.default=function(e){var t=e.title,n=e.value;return s.default.createElement("div",null,s.default.createElement("h3",null,t),s.default.createElement("div",{className:"gatsby-highlight"},s.default.createElement("pre",null,s.default.createElement(i.default,{className:"language-javascript"},n))))},e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/vysakh/docs/reactjs-sataiva/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-plugin-lodash/lib/index.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-preset-stage-0/lib/index.js","/Users/vysakh/docs/reactjs-sataiva/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/react-intro/quiz-1.jsx':function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),l=a(i),u=n("./src/components/MainLayout.jsx"),c=a(u),d=n("./src/components/CtaButton.jsx"),p=a(d),g=n("./src/components/Block.jsx"),f=a(g),m=[{name:"Array"},{name:"Object"},{name:"Function"}],h=function(e){function t(){var n,a,o;r(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=s(this,e.call.apply(e,[this].concat(l))),a.state={res:null,checked:"Two"},o=n,s(a,o)}return o(t,e),t.prototype.render=function(){var e=this;return console.log(this.state.checked),l.default.createElement("div",null,l.default.createElement("div",{style:{width:"30%"}},l.default.createElement(f.default,{title:"",value:this.props.ques})),l.default.createElement("div",null,m.map(function(t){return l.default.createElement("label",{className:"container"},t.name,l.default.createElement("input",{type:"radio",checked:t.name==e.state.checked,name:"radio",onChange:function(){var n=e.props.ans===t.name;e.setState({checked:t.name,res:n})}}),l.default.createElement("span",{className:"checkmark"}))}),null==this.state.res?null:this.state.res?l.default.createElement("p",null," You're right "):l.default.createElement("p",null," Please try again ")),l.default.createElement("hr",null))},t}(l.default.Component);t.default=function(e){return l.default.createElement(c.default,null,l.default.createElement("h3",null,"  A quick quiz "),l.default.createElement("p",null,"Next time when you see curly braces or dot or parenthesis, it should be your cue"),l.default.createElement(h,{key:"1",ques:"[]",ans:"Array"}),l.default.createElement(h,{key:"2",ques:"function {}",ans:"Function"}),l.default.createElement(h,{key:"3",ques:"{}",ans:"Object"}),l.default.createElement(h,{key:"4",ques:"() => {}",ans:"Function"}),l.default.createElement(h,{key:"5",ques:"a()",ans:"Function"}),l.default.createElement(h,{key:"6",ques:"b.name",ans:"Object"}),l.default.createElement(p.default,{to:"/react-intro/javascript-essentials"},"Done, next."))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-react-intro-quiz-1-jsx-2243c721955a329f64db.js.map