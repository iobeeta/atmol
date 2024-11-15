(()=>{"use strict";var t={680:(t,e)=>{e.o=void 0;var o=function(){function t(){this.b64c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",this.b64u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",this.b64pad="="}return t.prototype.encode=function(t){var e=unescape(encodeURIComponent(t));return this.encodeData(e,e.length,this.b64c)},t.prototype.urlEncode=function(t){var e=unescape(encodeURIComponent(t));return this.encodeData(e,e.length,this.b64u)},t.prototype.decode=function(t){var e,o,n,r,a,s="";for(e=0;e<t.length-3;e+=4)o=this.charIndex(t.charAt(e+0)),n=this.charIndex(t.charAt(e+1)),r=this.charIndex(t.charAt(e+2)),a=this.charIndex(t.charAt(e+3)),s+=String.fromCharCode(o<<2|n>>>4),t.charAt(e+2)!==this.b64pad&&(s+=String.fromCharCode(n<<4&240|r>>>2&15)),t.charAt(e+3)!==this.b64pad&&(s+=String.fromCharCode(r<<6&192|a));return decodeURIComponent(escape(s))},t.prototype.urlSniff=function(t){return t.indexOf("-")>=0||t.indexOf("_")>=0},t.prototype.encodeData=function(t,e,o){var n="",r=0;for(r=0;r<=e-3;r+=3)n+=o.charAt(t.charCodeAt(r)>>>2),n+=o.charAt((3&t.charCodeAt(r))<<4|t.charCodeAt(r+1)>>>4),n+=o.charAt((15&t.charCodeAt(r+1))<<2|t.charCodeAt(r+2)>>>6),n+=o.charAt(63&t.charCodeAt(r+2));return e%3==2?(n+=o.charAt(t.charCodeAt(r)>>>2),n+=o.charAt((3&t.charCodeAt(r))<<4|t.charCodeAt(r+1)>>>4),n+=o.charAt((15&t.charCodeAt(r+1))<<2),n+=this.b64pad):e%3==1&&(n+=o.charAt(t.charCodeAt(r)>>>2),n+=o.charAt((3&t.charCodeAt(r))<<4),n+=this.b64pad,n+=this.b64pad),n},t.prototype.charIndex=function(t){return"+"===t?62:"/"===t?63:this.b64u.indexOf(t)},t}();e.o=o},745:(t,e)=>{var o=Object.prototype.hasOwnProperty;function n(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}function r(t){try{return encodeURIComponent(t)}catch(t){return null}}e.stringify=function(t,e){e=e||"";var n,a,s=[];for(a in"string"!=typeof e&&(e="?"),t)if(o.call(t,a)){if((n=t[a])||null!=n&&!isNaN(n)||(n=""),a=r(a),n=r(n),null===a||null===n)continue;s.push(a+"="+n)}return s.length?e+s.join("&"):""},e.parse=function(t){for(var e,o=/([^=?#&]+)=?([^&]*)/g,r={};e=o.exec(t);){var a=n(e[1]),s=n(e[2]);null===a||null===s||a in r||(r[a]=s)}return r}},520:t=>{t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},732:(t,e,o)=>{var n=o(520),r=o(745),a=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,s=/[\n\r\t]/g,c=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,i=/:\d+$/,p=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,h=/^[a-zA-Z]:/;function u(t){return(t||"").toString().replace(a,"")}var l=[["#","hash"],["?","query"],function(t,e){return m(e.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function f(t){var e,n=("undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{}).location||{},r={},a=typeof(t=t||n);if("blob:"===t.protocol)r=new y(unescape(t.pathname),{});else if("string"===a)for(e in r=new y(t,{}),d)delete r[e];else if("object"===a){for(e in t)e in d||(r[e]=t[e]);void 0===r.slashes&&(r.slashes=c.test(t.href))}return r}function m(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function g(t,e){t=(t=u(t)).replace(s,""),e=e||{};var o,n=p.exec(t),r=n[1]?n[1].toLowerCase():"",a=!!n[2],c=!!n[3],i=0;return a?c?(o=n[2]+n[3]+n[4],i=n[2].length+n[3].length):(o=n[2]+n[4],i=n[2].length):c?(o=n[3]+n[4],i=n[3].length):o=n[4],"file:"===r?i>=2&&(o=o.slice(2)):m(r)?o=n[4]:r?a&&(o=o.slice(2)):i>=2&&m(e.protocol)&&(o=n[4]),{protocol:r,slashes:a||m(r),slashesCount:i,rest:o}}function y(t,e,o){if(t=(t=u(t)).replace(s,""),!(this instanceof y))return new y(t,e,o);var a,c,i,p,d,w,C=l.slice(),b=typeof e,A=this,v=0;for("object"!==b&&"string"!==b&&(o=e,e=null),o&&"function"!=typeof o&&(o=r.parse),a=!(c=g(t||"",e=f(e))).protocol&&!c.slashes,A.slashes=c.slashes||a&&e.slashes,A.protocol=c.protocol||e.protocol||"",t=c.rest,("file:"===c.protocol&&(2!==c.slashesCount||h.test(t))||!c.slashes&&(c.protocol||c.slashesCount<2||!m(A.protocol)))&&(C[3]=[/(.*)/,"pathname"]);v<C.length;v++)"function"!=typeof(p=C[v])?(i=p[0],w=p[1],i!=i?A[w]=t:"string"==typeof i?~(d="@"===i?t.lastIndexOf(i):t.indexOf(i))&&("number"==typeof p[2]?(A[w]=t.slice(0,d),t=t.slice(d+p[2])):(A[w]=t.slice(d),t=t.slice(0,d))):(d=i.exec(t))&&(A[w]=d[1],t=t.slice(0,d.index)),A[w]=A[w]||a&&p[3]&&e[w]||"",p[4]&&(A[w]=A[w].toLowerCase())):t=p(t,A);o&&(A.query=o(A.query)),a&&e.slashes&&"/"!==A.pathname.charAt(0)&&(""!==A.pathname||""!==e.pathname)&&(A.pathname=function(t,e){if(""===t)return e;for(var o=(e||"/").split("/").slice(0,-1).concat(t.split("/")),n=o.length,r=o[n-1],a=!1,s=0;n--;)"."===o[n]?o.splice(n,1):".."===o[n]?(o.splice(n,1),s++):s&&(0===n&&(a=!0),o.splice(n,1),s--);return a&&o.unshift(""),"."!==r&&".."!==r||o.push(""),o.join("/")}(A.pathname,e.pathname)),"/"!==A.pathname.charAt(0)&&m(A.protocol)&&(A.pathname="/"+A.pathname),n(A.port,A.protocol)||(A.host=A.hostname,A.port=""),A.username=A.password="",A.auth&&(~(d=A.auth.indexOf(":"))?(A.username=A.auth.slice(0,d),A.username=encodeURIComponent(decodeURIComponent(A.username)),A.password=A.auth.slice(d+1),A.password=encodeURIComponent(decodeURIComponent(A.password))):A.username=encodeURIComponent(decodeURIComponent(A.auth)),A.auth=A.password?A.username+":"+A.password:A.username),A.origin="file:"!==A.protocol&&m(A.protocol)&&A.host?A.protocol+"//"+A.host:"null",A.href=A.toString()}y.prototype={set:function(t,e,o){var a=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(o||r.parse)(e)),a[t]=e;break;case"port":a[t]=e,n(e,a.protocol)?e&&(a.host=a.hostname+":"+e):(a.host=a.hostname,a[t]="");break;case"hostname":a[t]=e,a.port&&(e+=":"+a.port),a.host=e;break;case"host":a[t]=e,i.test(e)?(e=e.split(":"),a.port=e.pop(),a.hostname=e.join(":")):(a.hostname=e,a.port="");break;case"protocol":a.protocol=e.toLowerCase(),a.slashes=!o;break;case"pathname":case"hash":if(e){var s="pathname"===t?"/":"#";a[t]=e.charAt(0)!==s?s+e:e}else a[t]=e;break;case"username":case"password":a[t]=encodeURIComponent(e);break;case"auth":var c=e.indexOf(":");~c?(a.username=e.slice(0,c),a.username=encodeURIComponent(decodeURIComponent(a.username)),a.password=e.slice(c+1),a.password=encodeURIComponent(decodeURIComponent(a.password))):a.username=encodeURIComponent(decodeURIComponent(e))}for(var p=0;p<l.length;p++){var h=l[p];h[4]&&(a[h[1]]=a[h[1]].toLowerCase())}return a.auth=a.password?a.username+":"+a.password:a.username,a.origin="file:"!==a.protocol&&m(a.protocol)&&a.host?a.protocol+"//"+a.host:"null",a.href=a.toString(),a},toString:function(t){t&&"function"==typeof t||(t=r.stringify);var e,o=this,n=o.host,a=o.protocol;a&&":"!==a.charAt(a.length-1)&&(a+=":");var s=a+(o.protocol&&o.slashes||m(o.protocol)?"//":"");return o.username?(s+=o.username,o.password&&(s+=":"+o.password),s+="@"):o.password?(s+=":"+o.password,s+="@"):"file:"!==o.protocol&&m(o.protocol)&&!n&&"/"!==o.pathname&&(s+="@"),(":"===n[n.length-1]||i.test(o.hostname)&&!o.port)&&(n+=":"),s+=n+o.pathname,(e="object"==typeof o.query?t(o.query):o.query)&&(s+="?"!==e.charAt(0)?"?"+e:e),o.hash&&(s+=o.hash),s}},y.extractProtocol=g,y.location=f,y.trimLeft=u,y.qs=r,t.exports=y}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n=o(680),r=o(732),a=o.n(r);const s=(new n.o).decode(a()(window.location.href).hash.slice(1));$(document).ready((function(){const t=$("#DATA_TABLE > tbody");t.delegate("button","click",(function(){let t=$(this).parents("tr").find("td:first-child").text();$(this).parents("tr").remove(),o([s].concat([t,0]).join("/"))}));const e=function(e){t.empty(),e.length>0?$.each(e,(function(e,o){$("<tr><td>"+o.uuid+"</td><td>"+o.username+'</td><td class="text-end">'+o.amount+'</td><td class="text-center"><button class="btn btn-danger btn-sm" type="button">DELETE</button></td></tr>').appendTo(t)})):$('<tr><td class="text-center" colspan="4"><em>No data</em></td></tr>').appendTo(t)},o=function(t){$.ajax({url:t,jsonp:"callback",dataType:"jsonp",data:{},success:e})};$("#ADD").on("click",(function(){let t={UUID:"",AMOUNT:""};$(this).parent().find("input").each((function(){let e=$(this).val();if(""==e)return!1;t[$(this).attr("name")]=e})),""!=t.UUID&&""!=t.AMOUNT&&($(this).parent().find("input").val(""),o([s].concat(Object.values(t)).join("/")))})),setInterval((()=>{o(s)}),3e4),o(s)}))})();