(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Q(){}function bt(t){return t()}function ut(){return Object.create(null)}function D(t){t.forEach(bt)}function kt(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Pt(t){return Object.keys(t).length===0}function T(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ft(t){return document.createTextNode(t)}function it(){return Ft(" ")}function Z(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function W(t,e,n){t.classList[n?"add":"remove"](e)}let lt;function B(t){lt=t}function Lt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const O=[],gt=[],G=[],dt=[],Bt=Promise.resolve();let ot=!1;function qt(){ot||(ot=!0,Bt.then(Nt))}function ft(t){G.push(t)}const rt=new Set;let X=0;function Nt(){const t=lt;do{for(;X<O.length;){const e=O[X];X++,B(e),Qt(e.$$)}for(B(null),O.length=0,X=0;gt.length;)gt.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];rt.has(n)||(rt.add(n),n())}G.length=0}while(O.length);for(;dt.length;)dt.pop()();ot=!1,rt.clear(),B(t)}function Qt(t){if(t.fragment!==null){t.update(),D(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ft)}}const Ht=new Set;function Kt(t,e){t&&t.i&&(Ht.delete(t),t.i(e))}function Rt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||ft(()=>{const a=t.$$.on_mount.map(bt).filter(kt);t.$$.on_destroy?t.$$.on_destroy.push(...a):D(a),t.$$.on_mount=[]}),o.forEach(ft)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(O.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,o,a,g=[-1]){const d=lt;B(t);const s=t.$$={fragment:null,ctx:[],props:o,update:Q,not_equal:r,bound:ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:ut(),dirty:g,skip_bound:!1,root:e.target||d.$$.root};a&&a(s.root);let y=!1;if(s.ctx=n?n(t,e.props||{},(m,v,...c)=>{const p=c.length?c[0]:v;return s.ctx&&r(s.ctx[m],s.ctx[m]=p)&&(!s.skip_bound&&s.bound[m]&&s.bound[m](p),y&&Xt(t,m)),v}):[],s.update(),y=!0,D(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const m=St(e.target);s.fragment&&s.fragment.l(m),m.forEach(H)}else s.fragment&&s.fragment.c();e.intro&&Kt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),Nt()}B(d)}class Gt{$destroy(){Wt(this,1),this.$destroy=Q}$on(e,n){if(!kt(n))return Q;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y=[{name:"bug",color:"#A8B820",halfEffectiveAgainst:["fairy","fighting","fire","flying","ghost","poison","steel"],twiceEffectiveAgainst:["dark","grass","psychic"],zeroEffectiveAgainst:[]},{name:"dark",color:"#705848",halfEffectiveAgainst:["dark","fairy","fighting"],twiceEffectiveAgainst:["ghost","psychic"],zeroEffectiveAgainst:[]},{name:"dragon",color:"#7038F8",halfEffectiveAgainst:["steel"],twiceEffectiveAgainst:["dragon"],zeroEffectiveAgainst:["fairy"]},{name:"electric",color:"#F8D030",halfEffectiveAgainst:["dragon","electric","grass"],twiceEffectiveAgainst:["flying","water"],zeroEffectiveAgainst:[]},{name:"fairy",color:"#EE99AC",halfEffectiveAgainst:["fire","poison","steel"],twiceEffectiveAgainst:["dark","dragon","fighting"],zeroEffectiveAgainst:[]},{name:"fighting",color:"#C03028",halfEffectiveAgainst:["bug","fairy","flying","poison","psychic"],twiceEffectiveAgainst:["dark","ice","normal","rock","steel"],zeroEffectiveAgainst:["ghost"]},{name:"fire",color:"#F08030",halfEffectiveAgainst:["dragon","fire","rock","water"],twiceEffectiveAgainst:["bug","grass","ice","steel"],zeroEffectiveAgainst:[]},{name:"flying",color:"#A890F0",halfEffectiveAgainst:["electric","rock","steel"],twiceEffectiveAgainst:["bug","fighting","grass"],zeroEffectiveAgainst:[]},{name:"ghost",color:"#705898",halfEffectiveAgainst:["dark"],twiceEffectiveAgainst:["ghost","psychic"],zeroEffectiveAgainst:["normal"]},{name:"grass",color:"#78C850",halfEffectiveAgainst:["bug","dragon","fire","flying","grass","poison"],twiceEffectiveAgainst:["ground","rock","water"],zeroEffectiveAgainst:[]},{name:"ground",color:"#E0C068",halfEffectiveAgainst:["bug","grass"],twiceEffectiveAgainst:["electric","fire","poison","rock","steel"],zeroEffectiveAgainst:["flying"]},{name:"ice",color:"#98D8D8",halfEffectiveAgainst:["fire","ice","steel","water"],twiceEffectiveAgainst:["dragon","flying","grass","ground"],zeroEffectiveAgainst:[]},{name:"normal",color:"#A8A878",halfEffectiveAgainst:[],twiceEffectiveAgainst:[],zeroEffectiveAgainst:[]},{name:"poison",color:"#A040A0",halfEffectiveAgainst:["ghost","ground","poison","rock"],twiceEffectiveAgainst:["fairy","grass"],zeroEffectiveAgainst:["steel"]},{name:"psychic",color:"#F85888",halfEffectiveAgainst:["psychic"],twiceEffectiveAgainst:["fighting","poison"],zeroEffectiveAgainst:["dark"]},{name:"rock",color:"#B8A038",halfEffectiveAgainst:["fighting","ground","steel"],twiceEffectiveAgainst:["bug","fire","flying","ice"],zeroEffectiveAgainst:[]},{name:"steel",color:"#B8B8D0",halfEffectiveAgainst:["electric","fire","steel","water"],twiceEffectiveAgainst:["fairy","ice","rock"],zeroEffectiveAgainst:[]},{name:"water",color:"#6890F0",halfEffectiveAgainst:["dragon","grass","water"],twiceEffectiveAgainst:["fire","ground","rock"],zeroEffectiveAgainst:[]}];function Jt(t,e){var n,i=1;t==null&&(t=0),e==null&&(e=0);function r(){var o,a=n.length,g,d=0,s=0;for(o=0;o<a;++o)g=n[o],d+=g.x,s+=g.y;for(d=(d/a-t)*i,s=(s/a-e)*i,o=0;o<a;++o)g=n[o],g.x-=d,g.y-=s}return r.initialize=function(o){n=o},r.x=function(o){return arguments.length?(t=+o,r):t},r.y=function(o){return arguments.length?(e=+o,r):e},r.strength=function(o){return arguments.length?(i=+o,r):i},r}function Ut(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Mt(this.cover(e,n),e,n,t)}function Mt(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,o=t._root,a={data:i},g=t._x0,d=t._y0,s=t._x1,y=t._y1,m,v,c,p,l,f,h,u;if(!o)return t._root=a,t;for(;o.length;)if((l=e>=(m=(g+s)/2))?g=m:s=m,(f=n>=(v=(d+y)/2))?d=v:y=v,r=o,!(o=o[h=f<<1|l]))return r[h]=a,t;if(c=+t._x.call(null,o.data),p=+t._y.call(null,o.data),e===c&&n===p)return a.next=o,r?r[h]=a:t._root=a,t;do r=r?r[h]=new Array(4):t._root=new Array(4),(l=e>=(m=(g+s)/2))?g=m:s=m,(f=n>=(v=(d+y)/2))?d=v:y=v;while((h=f<<1|l)===(u=(p>=v)<<1|c>=m));return r[u]=o,r[h]=a,t}function Vt(t){var e,n,i=t.length,r,o,a=new Array(i),g=new Array(i),d=1/0,s=1/0,y=-1/0,m=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(a[n]=r,g[n]=o,r<d&&(d=r),r>y&&(y=r),o<s&&(s=o),o>m&&(m=o));if(d>y||s>m)return this;for(this.cover(d,s).cover(y,m),n=0;n<i;++n)Mt(this,a[n],g[n],t[n]);return this}function Zt(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,o=(i=Math.floor(e))+1;else{for(var a=r-n||1,g=this._root,d,s;n>t||t>=r||i>e||e>=o;)switch(s=(e<i)<<1|t<n,d=new Array(4),d[s]=g,g=d,a*=2,s){case 0:r=n+a,o=i+a;break;case 1:n=r-a,o=i+a;break;case 2:r=n+a,i=o-a;break;case 3:n=r-a,i=o-a;break}this._root&&this._root.length&&(this._root=g)}return this._x0=n,this._y0=i,this._x1=r,this._y1=o,this}function te(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function ee(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function k(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}function ne(t,e,n){var i,r=this._x0,o=this._y0,a,g,d,s,y=this._x1,m=this._y1,v=[],c=this._root,p,l;for(c&&v.push(new k(c,r,o,y,m)),n==null?n=1/0:(r=t-n,o=e-n,y=t+n,m=e+n,n*=n);p=v.pop();)if(!(!(c=p.node)||(a=p.x0)>y||(g=p.y0)>m||(d=p.x1)<r||(s=p.y1)<o))if(c.length){var f=(a+d)/2,h=(g+s)/2;v.push(new k(c[3],f,h,d,s),new k(c[2],a,h,f,s),new k(c[1],f,g,d,h),new k(c[0],a,g,f,h)),(l=(e>=h)<<1|t>=f)&&(p=v[v.length-1],v[v.length-1]=v[v.length-1-l],v[v.length-1-l]=p)}else{var u=t-+this._x.call(null,c.data),x=e-+this._y.call(null,c.data),_=u*u+x*x;if(_<n){var w=Math.sqrt(n=_);r=t-w,o=e-w,y=t+w,m=e+w,i=c.data}}return i}function ie(t){if(isNaN(y=+this._x.call(null,t))||isNaN(m=+this._y.call(null,t)))return this;var e,n=this._root,i,r,o,a=this._x0,g=this._y0,d=this._x1,s=this._y1,y,m,v,c,p,l,f,h;if(!n)return this;if(n.length)for(;;){if((p=y>=(v=(a+d)/2))?a=v:d=v,(l=m>=(c=(g+s)/2))?g=c:s=c,e=n,!(n=n[f=l<<1|p]))return this;if(!n.length)break;(e[f+1&3]||e[f+2&3]||e[f+3&3])&&(i=e,h=f)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,r?(o?r.next=o:delete r.next,this):e?(o?e[f]=o:delete e[f],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[h]=n:this._root=n),this):(this._root=o,this)}function re(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function oe(){return this._root}function fe(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function ae(t){var e=[],n,i=this._root,r,o,a,g,d;for(i&&e.push(new k(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,o=n.x0,a=n.y0,g=n.x1,d=n.y1)&&i.length){var s=(o+g)/2,y=(a+d)/2;(r=i[3])&&e.push(new k(r,s,y,g,d)),(r=i[2])&&e.push(new k(r,o,y,s,d)),(r=i[1])&&e.push(new k(r,s,a,g,y)),(r=i[0])&&e.push(new k(r,o,a,s,y))}return this}function se(t){var e=[],n=[],i;for(this._root&&e.push(new k(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,g=i.y0,d=i.x1,s=i.y1,y=(a+d)/2,m=(g+s)/2;(o=r[0])&&e.push(new k(o,a,g,y,m)),(o=r[1])&&e.push(new k(o,y,g,d,m)),(o=r[2])&&e.push(new k(o,a,m,y,s)),(o=r[3])&&e.push(new k(o,y,m,d,s))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function le(t){return t[0]}function ce(t){return arguments.length?(this._x=t,this):this._x}function ue(t){return t[1]}function he(t){return arguments.length?(this._y=t,this):this._y}function $t(t,e,n){var i=new ct(e??le,n??ue,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function ct(t,e,n,i,r,o){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function pt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var N=$t.prototype=ct.prototype;N.copy=function(){var t=new ct(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=pt(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=pt(i));return t};N.add=Ut;N.addAll=Vt;N.cover=Zt;N.data=te;N.extent=ee;N.find=ne;N.remove=ie;N.removeAll=re;N.root=oe;N.size=fe;N.visit=ae;N.visitAfter=se;N.x=ce;N.y=he;function q(t){return function(){return t}}function j(t){return(t()-.5)*1e-6}function ge(t){return t.index}function vt(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function de(t){var e=ge,n=m,i,r=q(30),o,a,g,d,s,y=1;t==null&&(t=[]);function m(f){return 1/Math.min(g[f.source.index],g[f.target.index])}function v(f){for(var h=0,u=t.length;h<y;++h)for(var x=0,_,w,A,E,M,$,z;x<u;++x)_=t[x],w=_.source,A=_.target,E=A.x+A.vx-w.x-w.vx||j(s),M=A.y+A.vy-w.y-w.vy||j(s),$=Math.sqrt(E*E+M*M),$=($-o[x])/$*f*i[x],E*=$,M*=$,A.vx-=E*(z=d[x]),A.vy-=M*z,w.vx+=E*(z=1-z),w.vy+=M*z}function c(){if(a){var f,h=a.length,u=t.length,x=new Map(a.map((w,A)=>[e(w,A,a),w])),_;for(f=0,g=new Array(h);f<u;++f)_=t[f],_.index=f,typeof _.source!="object"&&(_.source=vt(x,_.source)),typeof _.target!="object"&&(_.target=vt(x,_.target)),g[_.source.index]=(g[_.source.index]||0)+1,g[_.target.index]=(g[_.target.index]||0)+1;for(f=0,d=new Array(u);f<u;++f)_=t[f],d[f]=g[_.source.index]/(g[_.source.index]+g[_.target.index]);i=new Array(u),p(),o=new Array(u),l()}}function p(){if(a)for(var f=0,h=t.length;f<h;++f)i[f]=+n(t[f],f,t)}function l(){if(a)for(var f=0,h=t.length;f<h;++f)o[f]=+r(t[f],f,t)}return v.initialize=function(f,h){a=f,s=h,c()},v.links=function(f){return arguments.length?(t=f,c(),v):t},v.id=function(f){return arguments.length?(e=f,v):e},v.iterations=function(f){return arguments.length?(y=+f,v):y},v.strength=function(f){return arguments.length?(n=typeof f=="function"?f:q(+f),p(),v):n},v.distance=function(f){return arguments.length?(r=typeof f=="function"?f:q(+f),l(),v):r},v}var pe={value:()=>{}};function zt(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new J(n)}function J(t){this._=t}function ve(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}J.prototype=zt.prototype={constructor:J,on:function(t,e){var n=this._,i=ve(t+"",n),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(t=i[o]).type)&&(r=_e(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(r=(t=i[o]).type)n[r]=_t(n[r],t.name,e);else if(e==null)for(r in n)n[r]=_t(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new J(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function _e(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function _t(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=pe,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var C=0,S=0,P=0,Tt=1e3,tt,L,et=0,I=0,nt=0,K=typeof performance=="object"&&performance.now?performance:Date,It=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function jt(){return I||(It(ye),I=K.now()+nt)}function ye(){I=0}function at(){this._call=this._time=this._next=null}at.prototype=Ct.prototype={constructor:at,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?jt():+n)+(e==null?0:+e),!this._next&&L!==this&&(L?L._next=this:tt=this,L=this),this._call=t,this._time=n,st()},stop:function(){this._call&&(this._call=null,this._time=1/0,st())}};function Ct(t,e,n){var i=new at;return i.restart(t,e,n),i}function me(){jt(),++C;for(var t=tt,e;t;)(e=I-t._time)>=0&&t._call.call(void 0,e),t=t._next;--C}function yt(){I=(et=K.now())+nt,C=S=0;try{me()}finally{C=0,xe(),I=0}}function we(){var t=K.now(),e=t-et;e>Tt&&(nt-=e,et=t)}function xe(){for(var t,e=tt,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:tt=n);L=t,st(i)}function st(t){if(!C){S&&(S=clearTimeout(S));var e=t-I;e>24?(t<1/0&&(S=setTimeout(yt,t-K.now()-nt)),P&&(P=clearInterval(P))):(P||(et=K.now(),P=setInterval(we,Tt)),C=1,It(yt))}}const Ae=1664525,Ee=1013904223,mt=4294967296;function be(){let t=1;return()=>(t=(Ae*t+Ee)%mt)/mt}function ke(t){return t.x}function Ne(t){return t.y}var Me=10,$e=Math.PI*(3-Math.sqrt(5));function ze(t){var e,n=1,i=.001,r=1-Math.pow(i,1/300),o=0,a=.6,g=new Map,d=Ct(m),s=zt("tick","end"),y=be();t==null&&(t=[]);function m(){v(),s.call("tick",e),n<i&&(d.stop(),s.call("end",e))}function v(l){var f,h=t.length,u;l===void 0&&(l=1);for(var x=0;x<l;++x)for(n+=(o-n)*r,g.forEach(function(_){_(n)}),f=0;f<h;++f)u=t[f],u.fx==null?u.x+=u.vx*=a:(u.x=u.fx,u.vx=0),u.fy==null?u.y+=u.vy*=a:(u.y=u.fy,u.vy=0);return e}function c(){for(var l=0,f=t.length,h;l<f;++l){if(h=t[l],h.index=l,h.fx!=null&&(h.x=h.fx),h.fy!=null&&(h.y=h.fy),isNaN(h.x)||isNaN(h.y)){var u=Me*Math.sqrt(.5+l),x=l*$e;h.x=u*Math.cos(x),h.y=u*Math.sin(x)}(isNaN(h.vx)||isNaN(h.vy))&&(h.vx=h.vy=0)}}function p(l){return l.initialize&&l.initialize(t,y),l}return c(),e={tick:v,restart:function(){return d.restart(m),e},stop:function(){return d.stop(),e},nodes:function(l){return arguments.length?(t=l,c(),g.forEach(p),e):t},alpha:function(l){return arguments.length?(n=+l,e):n},alphaMin:function(l){return arguments.length?(i=+l,e):i},alphaDecay:function(l){return arguments.length?(r=+l,e):+r},alphaTarget:function(l){return arguments.length?(o=+l,e):o},velocityDecay:function(l){return arguments.length?(a=1-l,e):1-a},randomSource:function(l){return arguments.length?(y=l,g.forEach(p),e):y},force:function(l,f){return arguments.length>1?(f==null?g.delete(l):g.set(l,p(f)),e):g.get(l)},find:function(l,f,h){var u=0,x=t.length,_,w,A,E,M;for(h==null?h=1/0:h*=h,u=0;u<x;++u)E=t[u],_=l-E.x,w=f-E.y,A=_*_+w*w,A<h&&(M=E,h=A);return M},on:function(l,f){return arguments.length>1?(s.on(l,f),e):s.on(l)}}}function Te(){var t,e,n,i,r=q(-30),o,a=1,g=1/0,d=.81;function s(c){var p,l=t.length,f=$t(t,ke,Ne).visitAfter(m);for(i=c,p=0;p<l;++p)e=t[p],f.visit(v)}function y(){if(t){var c,p=t.length,l;for(o=new Array(p),c=0;c<p;++c)l=t[c],o[l.index]=+r(l,c,t)}}function m(c){var p=0,l,f,h=0,u,x,_;if(c.length){for(u=x=_=0;_<4;++_)(l=c[_])&&(f=Math.abs(l.value))&&(p+=l.value,h+=f,u+=f*l.x,x+=f*l.y);c.x=u/h,c.y=x/h}else{l=c,l.x=l.data.x,l.y=l.data.y;do p+=o[l.data.index];while(l=l.next)}c.value=p}function v(c,p,l,f){if(!c.value)return!0;var h=c.x-e.x,u=c.y-e.y,x=f-p,_=h*h+u*u;if(x*x/d<_)return _<g&&(h===0&&(h=j(n),_+=h*h),u===0&&(u=j(n),_+=u*u),_<a&&(_=Math.sqrt(a*_)),e.vx+=h*c.value*i/_,e.vy+=u*c.value*i/_),!0;if(c.length||_>=g)return;(c.data!==e||c.next)&&(h===0&&(h=j(n),_+=h*h),u===0&&(u=j(n),_+=u*u),_<a&&(_=Math.sqrt(a*_)));do c.data!==e&&(x=o[c.data.index]*i/_,e.vx+=h*x,e.vy+=u*x);while(c=c.next)}return s.initialize=function(c,p){t=c,n=p,y()},s.strength=function(c){return arguments.length?(r=typeof c=="function"?c:q(+c),y(),s):r},s.distanceMin=function(c){return arguments.length?(a=c*c,s):Math.sqrt(a)},s.distanceMax=function(c){return arguments.length?(g=c*c,s):Math.sqrt(g)},s.theta=function(c){return arguments.length?(d=c*c,s):Math.sqrt(d)},s}function wt(t,e,n){const i=t.slice();return i[18]=e[n],i}function xt(t,e,n){const i=t.slice();return i[21]=e[n].source,i[22]=e[n].target,i}function At(t){let e,n,i,r;return{c(){var o;e=V("path"),b(e,"stroke-opacity",n=t[21].id===((o=t[2])==null?void 0:o.id)?1:.7),b(e,"stroke",i=t[3].get(t[21].id)??"transparent"),b(e,"d",r=t[8](t[21],t[22]))},m(o,a){U(o,e,a)},p(o,a){var g;a&6&&n!==(n=o[21].id===((g=o[2])==null?void 0:g.id)?1:.7)&&b(e,"stroke-opacity",n),a&2&&i!==(i=o[3].get(o[21].id)??"transparent")&&b(e,"stroke",i),a&2&&r!==(r=o[8](o[21],o[22]))&&b(e,"d",r)},d(o){o&&H(e)}}}function Et(t){let e,n,i,r,o,a;function g(){return t[11](t[18])}return{c(){var d;e=V("circle"),b(e,"fill",n=t[3].get(t[18].id)??"transparent"),b(e,"cx",i=t[18].x),b(e,"cy",r=t[18].y),b(e,"r",t[4]),W(e,"cursor-grabbing",t[18].id===((d=t[2])==null?void 0:d.id)),W(e,"cursor-grab",t[2]===null)},m(d,s){U(d,e,s),o||(a=[Z(e,"pointerdown",g),Z(e,"touchstart",Ot(t[10]))],o=!0)},p(d,s){var y;t=d,s&1&&n!==(n=t[3].get(t[18].id)??"transparent")&&b(e,"fill",n),s&1&&i!==(i=t[18].x)&&b(e,"cx",i),s&1&&r!==(r=t[18].y)&&b(e,"cy",r),s&5&&W(e,"cursor-grabbing",t[18].id===((y=t[2])==null?void 0:y.id)),s&4&&W(e,"cursor-grab",t[2]===null)},d(d){d&&H(e),o=!1,D(a)}}}function Ie(t){let e,n,i,r,o,a,g,d,s,y,m,v=t[1],c=[];for(let f=0;f<v.length;f+=1)c[f]=At(xt(t,v,f));let p=t[0],l=[];for(let f=0;f<p.length;f+=1)l[f]=Et(wt(t,p,f));return{c(){e=it(),n=R("main"),i=R("h1"),i.textContent="drag around the nodes",r=it(),o=R("figure"),a=V("svg"),g=V("g");for(let f=0;f<c.length;f+=1)c[f].c();for(let f=0;f<l.length;f+=1)l[f].c();d=it(),s=R("a"),s.textContent="josho.dev",document.title="Pokemon Types",b(g,"stroke-width",t[5]),b(a,"fill","none"),b(a,"stroke-linecap","round"),b(a,"viewBox",t[6]),b(a,"xmlns","http://www.w3.org/2000/svg"),b(o,"class","w-full max-w-xl rounded-xl border-4 border-black"),b(s,"class","underline"),b(s,"href","http://josho.dev"),b(n,"class","flex h-screen flex-col items-center justify-around p-2")},m(f,h){U(f,e,h),U(f,n,h),T(n,i),T(n,r),T(n,o),T(o,a),T(a,g);for(let u=0;u<c.length;u+=1)c[u].m(g,null);for(let u=0;u<l.length;u+=1)l[u].m(a,null);T(n,d),T(n,s),y||(m=[Z(a,"pointermove",t[12]),Z(a,"pointerup",t[13])],y=!0)},p(f,[h]){if(h&270){v=f[1];let u;for(u=0;u<v.length;u+=1){const x=xt(f,v,u);c[u]?c[u].p(x,h):(c[u]=At(x),c[u].c(),c[u].m(g,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=v.length}if(h&157){p=f[0];let u;for(u=0;u<p.length;u+=1){const x=wt(f,p,u);l[u]?l[u].p(x,h):(l[u]=Et(x),l[u].c(),l[u].m(a,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=p.length}},i:Q,o:Q,d(f){f&&H(e),f&&H(n),ht(c,f),ht(l,f),y=!1,D(m)}}}const F=100;function je(t,e,n){const i=Y.reduce((w,{name:A,color:E})=>w.set(A,E),new Map),r=2*Math.PI/Y.length,o=F/20,a=o/2,g=2*F,d=[-F,g].flatMap(w=>[w,w]).join(" ");let s=Y.map(({name:w},A)=>{const E=A*r,[M,$]=[Math.cos,Math.sin].map(z=>z(E));return{id:w,x:M,y:$}});const y=Y.flatMap(({name:w,twiceEffectiveAgainst:A})=>A.map(E=>({source:w,target:E})));let m=[];const v=ze(s).force("center",Jt()).force("collide",Te()).force("links",de(y).id(w=>w.id)).on("tick",()=>{n(0,s),n(1,m=y)}),c=(w,A)=>{const E=Math.hypot(w.x-A.x,w.y-A.y);return`M${w.x},${w.y} A${E},${E} 0 0,1 ${A.x},${A.y}`};let p=null;const f=((w,A)=>E=>Math.min(Math.max(E,w),A))(-F,F);function h(w){Lt.call(this,t,w)}return[s,m,p,i,o,a,d,v,c,f,h,w=>{n(2,p=w),v.alphaTarget(.3).restart()},w=>{if(p){const{currentTarget:A,pointerId:E,x:M,y:$}=w;A.setPointerCapture(E);const z=new DOMPoint(M,$).matrixTransform(A.getScreenCTM().inverse());n(2,p.fx=f(z.x),p),n(2,p.fy=f(z.y),p)}},()=>{p&&(n(2,p=null),v.alphaTarget(0))}]}class Ce extends Gt{constructor(e){super(),Yt(this,e,je,Ie,Dt,{})}}new Ce({intro:!0,target:document.body});
