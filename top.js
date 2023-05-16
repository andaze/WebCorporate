(()=>{var No="141";var wu=0,Il=1,Mu=2;var Kc=1,bu=2,As=3,Ps=0,je=1,Qn=2,Su=1;var Ui=0,Zn=1,br=2,Fl=3,zl=4,Tu=5,Xn=100,Au=101,Eu=102,Ol=103,Nl=104,Cu=200,Pu=201,Ru=202,Lu=203,Qc=204,jc=205,Du=206,Iu=207,Fu=208,zu=209,Ou=210,Nu=0,Bu=1,Uu=2,Za=3,ku=4,Vu=5,Hu=6,Gu=7,qr=0,Wu=1,qu=2,Mi=0,Xu=1,Yu=2,Ju=3,Zu=4,$u=5,th=300,jn=301,ts=302,$a=303,Ka=304,Xr=306,Qa=1e3,Ke=1001,ja=1002,Se=1003,Bl=1004;var Ul=1005;var Ue=1006,Ku=1007;var Yr=1008;var cn=1009,Qu=1010,ju=1011,eh=1012,tf=1013,sn=1014,rn=1015,Rs=1016,ef=1017,nf=1018,$n=1020,sf=1021,rf=1022,Qe=1023,af=1024,of=1025,on=1026,es=1027,lf=1028,cf=1029,hf=1030,uf=1031,ff=1033,ga=33776,_a=33777,xa=33778,ya=33779,kl=35840,Vl=35841,Hl=35842,Gl=35843,df=36196,Wl=37492,ql=37496,Xl=37808,Yl=37809,Jl=37810,Zl=37811,$l=37812,Kl=37813,Ql=37814,jl=37815,tc=37816,ec=37817,ic=37818,nc=37819,sc=37820,rc=37821,ac=36492;var Sr=2300,Tr=2301,va=2302,oc=2400,lc=2401,cc=2402;var pf=2501;var hn=3e3,kt=3001,mf=3200,gf=3201,as=0,_f=1;var vi="srgb",an="srgb-linear";var wa=7680;var xf=519,hc=35044;var uc="300 es",to=1035,ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},se=[];for(let o=0;o<256;o++)se[o]=(o<16?"0":"")+o.toString(16);var Ma=Math.PI/180,fc=180/Math.PI;function Os(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(se[o&255]+se[o>>8&255]+se[o>>16&255]+se[o>>24&255]+"-"+se[t&255]+se[t>>8&255]+"-"+se[t>>16&15|64]+se[t>>24&255]+"-"+se[e&63|128]+se[e>>8&255]+"-"+se[e>>16&255]+se[e>>24&255]+se[i&255]+se[i>>8&255]+se[i>>16&255]+se[i>>24&255]).toLowerCase()}function Te(o,t,e){return Math.max(t,Math.min(e,o))}function yf(o,t){return(o%t+t)%t}function ba(o,t,e){return(1-e)*o+e*t}function dc(o){return(o&o-1)===0&&o!==0}function eo(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}var ht=class{constructor(t=0,e=0){this.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,n,s,a,r,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],d=n[0],p=n[3],_=n[6],w=n[1],T=n[4],v=n[7],y=n[2],A=n[5],C=n[8];return s[0]=a*d+r*w+l*y,s[3]=a*p+r*T+l*A,s[6]=a*_+r*v+l*C,s[1]=c*d+h*w+u*y,s[4]=c*p+h*T+u*A,s[7]=c*_+h*v+u*C,s[2]=f*d+m*w+g*y,s[5]=f*p+m*T+g*A,s[8]=f*_+m*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-i*s*h+i*r*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*a-r*c,f=r*l-h*s,m=c*s-a*l,g=e*u+i*f+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/g;return t[0]=u*d,t[1]=(n*c-h*i)*d,t[2]=(r*i-n*a)*d,t[3]=f*d,t[4]=(h*e-n*l)*d,t[5]=(n*s-r*e)*d,t[6]=m*d,t[7]=(i*l-c*e)*d,t[8]=(a*e-i*s)*d,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*r)+a+t,-n*c,n*l,-n*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){let e=Math.cos(t),i=Math.sin(t),n=this.elements,s=n[0],a=n[3],r=n[6],l=n[1],c=n[4],h=n[7];return n[0]=e*s+i*l,n[3]=e*a+i*c,n[6]=e*r+i*h,n[1]=-i*s+e*l,n[4]=-i*a+e*c,n[7]=-i*r+e*h,this}translate(t,e){let i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};function ih(o){for(let t=o.length-1;t>=0;--t)if(o[t]>65535)return!0;return!1}function Ls(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ln(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var Sa={[vi]:{[an]:ln},[an]:{[vi]:Mr}},Ye={legacyMode:!0,get workingColorSpace(){return an},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Sa[t]&&Sa[t][e]!==void 0){let i=Sa[t][e];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={r:0,g:0,b:0},Je={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Ta(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function er(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}var ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=an){return this.r=t,this.g=e,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=an){if(t=yf(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ta(a,s,t+1/3),this.g=Ta(a,s,t),this.b=Ta(a,s,t-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(t,e=vi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s,a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ye.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ye.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){let l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,h,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ye.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=vi){let i=nh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Ye.fromWorkingColorSpace(er(this,Yt),t),Te(Yt.r*255,0,255)<<16^Te(Yt.g*255,0,255)<<8^Te(Yt.b*255,0,255)<<0}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=an){Ye.fromWorkingColorSpace(er(this,Yt),e);let i=Yt.r,n=Yt.g,s=Yt.b,a=Math.max(i,n,s),r=Math.min(i,n,s),l,c,h=(r+a)/2;if(r===a)l=0,c=0;else{let u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=an){return Ye.fromWorkingColorSpace(er(this,Yt),e),t.r=Yt.r,t.g=Yt.g,t.b=Yt.b,t}getStyle(t=vi){return Ye.fromWorkingColorSpace(er(this,Yt),t),t!==vi?`color(${t} ${Yt.r} ${Yt.g} ${Yt.b})`:`rgb(${Yt.r*255|0},${Yt.g*255|0},${Yt.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Je),Je.h+=t,Je.s+=e,Je.l+=i,this.setHSL(Je.h,Je.s,Je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Je),t.getHSL(tr);let i=ba(Je.h,tr.h,e),n=ba(Je.s,tr.s,e),s=ba(Je.l,tr.l,e);return this.setHSL(i,n,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};ft.NAMES=nh;var Dn,Ar=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=Ls("canvas")),Dn.width=t.width,Dn.height=t.height;let i=Dn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ls("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ln(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Er=class{constructor(t=null){this.isSource=!0,this.uuid=Os(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Aa(n[a].image)):s.push(Aa(n[a]))}else s=Aa(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Aa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ar.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vf=0,Ae=class extends ki{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,i=Ke,n=Ke,s=Ue,a=Yr,r=Qe,l=cn,c=1,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Os(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=th;var ee=class{constructor(t=0,e=0,i=0,n=1){this.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(m+1)/2,y=(_+1)/2,A=(h+f)/4,C=(u+d)/4,x=(g+p)/4;return T>v&&T>y?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=A/i,s=C/i):v>y?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=A/n,s=x/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=C/s,n=x/s),this.set(i,n,s,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-d)*(u-d)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-d)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ce=class extends ki{constructor(t,e,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let n={width:t,height:e,depth:1};this.texture=new Ae(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ue,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class extends Ae{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var io=class extends Ae{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerp(t,e,i,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(t,e,n)}static slerpFlat(t,e,i,n,s,a,r){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(u!==d||l!==f||c!==m||h!==g){let p=1-r,_=l*f+c*m+h*g+u*d,w=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){let y=Math.sqrt(T),A=Math.atan2(y,_*w);p=Math.sin(p*A)/y,r=Math.sin(r*A)/y}let v=r*w;if(l=l*p+f*v,c=c*p+m*v,h=h*p+g*v,u=u*p+d*v,p===1-r){let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let r=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=r*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-r*m,t[e+2]=c*g+h*m+r*f-l*u,t[e+3]=h*g-r*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(n/2),u=r(s/2),f=l(i/2),m=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+r+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-n)*m}else if(i>r&&i>u){let m=2*Math.sqrt(1+i-r-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+c)/m}else if(r>u){let m=2*Math.sqrt(1+r-i-u);this._w=(s-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-r);this._w=(a-n)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*r+n*c-s*l,this._y=n*h+a*l+s*r-i*c,this._z=s*h+a*c+i*l-n*r,this._w=a*h-i*r-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-r*r;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(t=0,e=0,i=0){this.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,l=t.w,c=l*e+a*n-r*i,h=l*i+r*e-s*n,u=l*n+s*i-a*e,f=-s*e-a*i-r*n;return this.x=c*l+f*-s+h*-r-u*-a,this.y=h*l+f*-a+u*-s-c*-r,this.z=u*l+f*-r+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ea=new D,pc=new hi,un=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){let h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>s&&(s=h),u>a&&(a=u),f>r&&(r=f)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){let h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>s&&(s=h),u>a&&(a=u),f>r&&(r=f)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let a=0,r=s.count;a<r;a++)Qi.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Qi)}else i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox),Ca.applyMatrix4(t.matrixWorld),this.union(Ca);let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),ir.subVectors(this.max,bs),In.subVectors(t.a,bs),Fn.subVectors(t.b,bs),zn.subVectors(t.c,bs),Di.subVectors(Fn,In),Ii.subVectors(zn,Fn),ji.subVectors(In,zn);let e=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!Pa(e,In,Fn,zn,ir)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,In,Fn,zn,ir))?!1:(nr.crossVectors(Di,Ii),e=[nr.x,nr.y,nr.z],Pa(e,In,Fn,zn,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new D,new D,new D,new D,new D,new D,new D,new D],Qi=new D,Ca=new un,In=new D,Fn=new D,zn=new D,Di=new D,Ii=new D,ji=new D,bs=new D,ir=new D,nr=new D,tn=new D;function Pa(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){tn.fromArray(o,s);let r=n.x*Math.abs(tn.x)+n.y*Math.abs(tn.y)+n.z*Math.abs(tn.z),l=t.dot(tn),c=e.dot(tn),h=i.dot(tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}var wf=new un,mc=new D,sr=new D,Ra=new D,is=class{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):wf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ra.subVectors(t,this.center);let e=Ra.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.add(Ra.multiplyScalar(n/i)),this.radius+=n}return this}union(t){return this.center.equals(t.center)===!0?sr.set(0,0,1).multiplyScalar(t.radius):sr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(mc.copy(t.center).add(sr)),this.expandByPoint(mc.copy(t.center).sub(sr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new D,La=new D,rr=new D,Fi=new D,Da=new D,ar=new D,Ia=new D,Ds=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.direction).multiplyScalar(e).add(this.origin),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){La.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(La);let s=t.distanceTo(e)*.5,a=-this.direction.dot(rr),r=Fi.dot(this.direction),l=-Fi.dot(rr),c=Fi.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*l-r,f=a*r-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let d=1/h;u*=d,f*=d,m=u*(u+a*f+2*r)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+r)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+r)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+r)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(a*s+r)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+r)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(rr).multiplyScalar(f).add(La),m}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let i=gi.dot(this.direction),n=gi.dot(gi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),r=i-a,l=i+a;return r<0&&l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>n||((s>i||i!==i)&&(i=s),(a<n||n!==n)&&(n=a),u>=0?(r=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(r=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,n,s){Da.subVectors(e,t),ar.subVectors(i,t),Ia.crossVectors(Da,ar);let a=this.direction.dot(Ia),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Fi.subVectors(this.origin,t);let l=r*this.direction.dot(ar.crossVectors(Fi,ar));if(l<0)return null;let c=r*this.direction.dot(Da.cross(Fi));if(c<0||l+c>a)return null;let h=-r*Fi.dot(Ia);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,n,s,a,r,l,c,h,u,f,m,g,d,p){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=s,_[5]=a,_[9]=r,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/On.setFromMatrixColumn(t,0).length(),s=1/On.setFromMatrixColumn(t,1).length(),a=1/On.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,m=a*u,g=r*h,d=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-d*c,e[9]=-r*l,e[2]=d-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,g=c*h,d=c*u;e[0]=f+d*r,e[4]=g*r-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-r,e[2]=m*r-g,e[6]=d+f*r,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,g=c*h,d=c*u;e[0]=f-d*r,e[4]=-a*u,e[8]=g+m*r,e[1]=m+g*r,e[5]=a*h,e[9]=d-f*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*u,g=r*h,d=r*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+d,e[1]=l*u,e[5]=d*c+f,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=r*l,d=r*c;e[0]=l*h,e[4]=d-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-d*u}else if(t.order==="XZY"){let f=a*l,m=a*c,g=r*l,d=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+d,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=r*h,e[10]=d*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,bf)}lookAt(t,e,i){let n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),zi.crossVectors(i,Ie),zi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),zi.crossVectors(i,Ie)),zi.normalize(),or.crossVectors(Ie,zi),n[0]=zi.x,n[4]=or.x,n[8]=Ie.x,n[1]=zi.y,n[5]=or.y,n[9]=Ie.y,n[2]=zi.z,n[6]=or.z,n[10]=Ie.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],d=i[6],p=i[10],_=i[14],w=i[3],T=i[7],v=i[11],y=i[15],A=n[0],C=n[4],x=n[8],b=n[12],L=n[1],I=n[5],Y=n[9],Z=n[13],R=n[2],k=n[6],z=n[10],G=n[14],q=n[3],N=n[7],V=n[11],Q=n[15];return s[0]=a*A+r*L+l*R+c*q,s[4]=a*C+r*I+l*k+c*N,s[8]=a*x+r*Y+l*z+c*V,s[12]=a*b+r*Z+l*G+c*Q,s[1]=h*A+u*L+f*R+m*q,s[5]=h*C+u*I+f*k+m*N,s[9]=h*x+u*Y+f*z+m*V,s[13]=h*b+u*Z+f*G+m*Q,s[2]=g*A+d*L+p*R+_*q,s[6]=g*C+d*I+p*k+_*N,s[10]=g*x+d*Y+p*z+_*V,s[14]=g*b+d*Z+p*G+_*Q,s[3]=w*A+T*L+v*R+y*q,s[7]=w*C+T*I+v*k+y*N,s[11]=w*x+T*Y+v*z+y*V,s[15]=w*b+T*Z+v*G+y*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+s*l*u-n*c*u-s*r*f+i*c*f+n*r*m-i*l*m)+d*(+e*l*m-e*c*f+s*a*f-n*a*m+n*c*h-s*l*h)+p*(+e*c*u-e*r*m-s*a*u+i*a*m+s*r*h-i*c*h)+_*(-n*r*h-e*l*u+e*r*f+n*a*u-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],w=u*p*c-d*f*c+d*l*m-r*p*m-u*l*_+r*f*_,T=g*f*c-h*p*c-g*l*m+a*p*m+h*l*_-a*f*_,v=h*d*c-g*u*c+g*r*m-a*d*m-h*r*_+a*u*_,y=g*u*l-h*d*l-g*r*f+a*d*f+h*r*p-a*u*p,A=e*w+i*T+n*v+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=w*C,t[1]=(d*f*s-u*p*s-d*n*m+i*p*m+u*n*_-i*f*_)*C,t[2]=(r*p*s-d*l*s+d*n*c-i*p*c-r*n*_+i*l*_)*C,t[3]=(u*l*s-r*f*s-u*n*c+i*f*c+r*n*m-i*l*m)*C,t[4]=T*C,t[5]=(h*p*s-g*f*s+g*n*m-e*p*m-h*n*_+e*f*_)*C,t[6]=(g*l*s-a*p*s-g*n*c+e*p*c+a*n*_-e*l*_)*C,t[7]=(a*f*s-h*l*s+h*n*c-e*f*c-a*n*m+e*l*m)*C,t[8]=v*C,t[9]=(g*u*s-h*d*s-g*i*m+e*d*m+h*i*_-e*u*_)*C,t[10]=(a*d*s-g*r*s+g*i*c-e*d*c-a*i*_+e*r*_)*C,t[11]=(h*r*s-a*u*s-h*i*c+e*u*c+a*i*m-e*r*m)*C,t[12]=y*C,t[13]=(h*d*n-g*u*n+g*i*f-e*d*f-h*i*p+e*u*p)*C,t[14]=(g*r*n-a*d*n-g*i*l+e*d*l+a*i*p-e*r*p)*C,t[15]=(a*u*n-h*r*n+h*i*l-e*u*l-a*i*f+e*r*f)*C,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,l=t.z,c=s*a,h=s*r;return this.set(c*a+i,c*r-n*l,c*l+n*r,0,c*r+n*l,h*r+i,h*l-n*a,0,c*l-n*r,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,c=s+s,h=a+a,u=r+r,f=s*c,m=s*h,g=s*u,d=a*h,p=a*u,_=r*u,w=l*c,T=l*h,v=l*u,y=i.x,A=i.y,C=i.z;return n[0]=(1-(d+_))*y,n[1]=(m+v)*y,n[2]=(g-T)*y,n[3]=0,n[4]=(m-v)*A,n[5]=(1-(f+_))*A,n[6]=(p+w)*A,n[7]=0,n[8]=(g+T)*C,n[9]=(p-w)*C,n[10]=(1-(f+d))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=On.set(n[0],n[1],n[2]).length(),a=On.set(n[4],n[5],n[6]).length(),r=On.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ze.copy(this);let c=1/s,h=1/a,u=1/r;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let r=this.elements,l=2*s/(e-t),c=2*s/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,n,s,a){let r=this.elements,l=1/(e-t),c=1/(i-n),h=1/(a-s),u=(e+t)*l,f=(i+n)*c,m=(a+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},On=new D,Ze=new Zt,Mf=new D(0,0,0),bf=new D(1,1,1),zi=new D,or=new D,Ie=new D,gc=new Zt,_c=new hi,fn=class{constructor(t=0,e=0,i=0,n=fn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],r=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};fn.DefaultOrder="XYZ";fn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,xc=new D,Nn=new hi,_i=new Zt,lr=new D,Ss=new D,Tf=new D,Af=new hi,yc=new D(1,0,0),vc=new D(0,1,0),wc=new D(0,0,1),Ef={type:"added"},Mc={type:"removed"},Ee=class extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DefaultUp.clone();let t=new D,e=new fn,i=new hi,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ve}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Ee.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.premultiply(Nn),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lr.copy(t):lr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ss,lr,this.up):_i.lookAt(lr,Ss,this.up),this.quaternion.setFromRotationMatrix(_i),n&&(_i.extractRotation(n.matrixWorld),Nn.setFromRotationMatrix(_i),this.quaternion.premultiply(Nn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mc)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Mc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];n.animations.push(s(t.animations,l))}}if(e){let r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){let l=[];for(let c in r){let h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Ee.DefaultUp=new D(0,1,0);Ee.DefaultMatrixAutoUpdate=!0;var $e=new D,xi=new D,Fa=new D,yi=new D,Bn=new D,Un=new D,bc=new D,za=new D,Oa=new D,Na=new D,ke=class{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),$e.subVectors(t,e),n.cross($e);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){$e.subVectors(n,e),xi.subVectors(i,e),Fa.subVectors(t,e);let a=$e.dot($e),r=$e.dot(xi),l=$e.dot(Fa),c=xi.dot(xi),h=xi.dot(Fa),u=a*c-r*r;if(u===0)return s.set(-2,-1,-1);let f=1/u,m=(c*l-r*h)*f,g=(a*h-r*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(t,e,i,n,s,a,r,l){return this.getBarycoord(t,e,i,n,yi),l.set(0,0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(r,yi.z),l}static isFrontFacing(t,e,i,n){return $e.subVectors(i,e),xi.subVectors(t,e),$e.cross(xi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),$e.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return ke.getUV(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,r;Bn.subVectors(n,i),Un.subVectors(s,i),za.subVectors(t,i);let l=Bn.dot(za),c=Un.dot(za);if(l<=0&&c<=0)return e.copy(i);Oa.subVectors(t,n);let h=Bn.dot(Oa),u=Un.dot(Oa);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Bn,a);Na.subVectors(t,s);let m=Bn.dot(Na),g=Un.dot(Na);if(g>=0&&m<=g)return e.copy(s);let d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(i).addScaledVector(Un,r);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return bc.subVectors(s,n),r=(u-h)/(u-h+(m-g)),e.copy(n).addScaledVector(bc,r);let _=1/(p+d+f);return a=d*_,r=f*_,e.copy(i).addScaledVector(Bn,a).addScaledVector(Un,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cf=0,$t=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Zn,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qc,this.blendDst=jc,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Su;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(i.blending=this.blending),this.side!==Ps&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){let a=[];for(let r in s){let l=s[r];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(t){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}};$t.fromType=function(){return null};var bi=class extends $t{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xt=new D,cr=new ht,Gt=class{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=hc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new ft),e[i++]=a.r,e[i++]=a.g,e[i++]=a.b}return this}copyVector2sArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new ht),e[i++]=a.x,e[i++]=a.y}return this}copyVector3sArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new D),e[i++]=a.x,e[i++]=a.y,e[i++]=a.z}return this}copyVector4sArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new ee),e[i++]=a.x,e[i++]=a.y,e[i++]=a.z,e[i++]=a.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix3(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix4(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyNormalMatrix(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.transformDirection(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}};var Pr=class extends Gt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Rr=class extends Gt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends Gt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Pf=0,Be=new Zt,Ba=new Ee,kn=new D,Fe=new un,Ts=new un,te=new D,he=class extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ih(t)?Rr:Pr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Fe.setFromBufferAttribute(s),this.morphTargetsRelative?(te.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(te),te.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(te)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let r=e[s];Ts.setFromBufferAttribute(r),this.morphTargetsRelative?(te.addVectors(Fe.min,Ts.min),Fe.expandByPoint(te),te.addVectors(Fe.max,Ts.max),Fe.expandByPoint(te)):(Fe.expandByPoint(Ts.min),Fe.expandByPoint(Ts.max))}Fe.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)te.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(te));if(e)for(let s=0,a=e.length;s<a;s++){let r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)te.fromBufferAttribute(r,c),l&&(kn.fromBufferAttribute(t,c),te.add(kn)),n=Math.max(n,i.distanceToSquared(te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<r;L++)c[L]=new D,h[L]=new D;let u=new D,f=new D,m=new D,g=new ht,d=new ht,p=new ht,_=new D,w=new D;function T(L,I,Y){u.fromArray(n,L*3),f.fromArray(n,I*3),m.fromArray(n,Y*3),g.fromArray(a,L*2),d.fromArray(a,I*2),p.fromArray(a,Y*2),f.sub(u),m.sub(u),d.sub(g),p.sub(g);let Z=1/(d.x*p.y-p.x*d.y);isFinite(Z)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(Z),w.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(Z),c[L].add(_),c[I].add(_),c[Y].add(_),h[L].add(w),h[I].add(w),h[Y].add(w))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let L=0,I=v.length;L<I;++L){let Y=v[L],Z=Y.start,R=Y.count;for(let k=Z,z=Z+R;k<z;k+=3)T(i[k+0],i[k+1],i[k+2])}let y=new D,A=new D,C=new D,x=new D;function b(L){C.fromArray(s,L*3),x.copy(C);let I=c[L];y.copy(I),y.sub(C.multiplyScalar(C.dot(I))).normalize(),A.crossVectors(x,I);let Z=A.dot(h[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=Z}for(let L=0,I=v.length;L<I;++L){let Y=v[L],Z=Y.start,R=Y.count;for(let k=Z,z=Z+R;k<z;k+=3)b(i[k+0]),b(i[k+1]),b(i[k+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let n=new D,s=new D,a=new D,r=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let n in i){if(t.attributes[n]===void 0)continue;let a=i[n].array,r=t.attributes[n],l=r.array,c=r.itemSize*e,h=Math.min(l.length,a.length-c);for(let u=0,f=c;u<h;u++,f++)a[f]=l[u]}return this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)te.fromBufferAttribute(t,e),te.normalize(),t.setXYZ(e,te.x,te.y,te.z)}toNonIndexed(){function t(r,l){let c=r.array,h=r.itemSize,u=r.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let d=0,p=l.length;d<p;d++){r.isInterleavedBufferAttribute?m=l[d]*r.data.stride+r.offset:m=l[d]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new Gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new he,i=this.index.array,n=this.attributes;for(let r in n){let l=n[r],c=t(l,i);e.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let r=0,l=a.length;r<l;r++){let c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new Zt,Vn=new Ds,Ua=new is,Oi=new D,Ni=new D,Bi=new D,ka=new D,Va=new D,Ha=new D,hr=new D,ur=new D,fr=new D,dr=new ht,pr=new ht,mr=new ht,Ga=new D,gr=new D,_e=class extends Ee{constructor(t=new he,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),t.ray.intersectsSphere(Ua)===!1)||(Sc.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(Sc),i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1))return;let a,r=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(r!==null)if(Array.isArray(n))for(let d=0,p=m.length;d<p;d++){let _=m[d],w=n[_.materialIndex],T=Math.max(_.start,g.start),v=Math.min(r.count,Math.min(_.start+_.count,g.start+g.count));for(let y=T,A=v;y<A;y+=3){let C=r.getX(y),x=r.getX(y+1),b=r.getX(y+2);a=_r(this,w,t,Vn,l,c,h,u,f,C,x,b),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{let d=Math.max(0,g.start),p=Math.min(r.count,g.start+g.count);for(let _=d,w=p;_<w;_+=3){let T=r.getX(_),v=r.getX(_+1),y=r.getX(_+2);a=_r(this,n,t,Vn,l,c,h,u,f,T,v,y),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let d=0,p=m.length;d<p;d++){let _=m[d],w=n[_.materialIndex],T=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=T,A=v;y<A;y+=3){let C=y,x=y+1,b=y+2;a=_r(this,w,t,Vn,l,c,h,u,f,C,x,b),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{let d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,w=p;_<w;_+=3){let T=_,v=_+1,y=_+2;a=_r(this,n,t,Vn,l,c,h,u,f,T,v,y),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}};function Rf(o,t,e,i,n,s,a,r){let l;if(t.side===je?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,t.side!==Qn,r),l===null)return null;gr.copy(r),gr.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:o}}function _r(o,t,e,i,n,s,a,r,l,c,h,u){Oi.fromBufferAttribute(n,c),Ni.fromBufferAttribute(n,h),Bi.fromBufferAttribute(n,u);let f=o.morphTargetInfluences;if(s&&f){hr.set(0,0,0),ur.set(0,0,0),fr.set(0,0,0);for(let g=0,d=s.length;g<d;g++){let p=f[g],_=s[g];p!==0&&(ka.fromBufferAttribute(_,c),Va.fromBufferAttribute(_,h),Ha.fromBufferAttribute(_,u),a?(hr.addScaledVector(ka,p),ur.addScaledVector(Va,p),fr.addScaledVector(Ha,p)):(hr.addScaledVector(ka.sub(Oi),p),ur.addScaledVector(Va.sub(Ni),p),fr.addScaledVector(Ha.sub(Bi),p)))}Oi.add(hr),Ni.add(ur),Bi.add(fr)}o.isSkinnedMesh&&(o.boneTransform(c,Oi),o.boneTransform(h,Ni),o.boneTransform(u,Bi));let m=Rf(o,t,e,i,Oi,Ni,Bi,Ga);if(m){r&&(dr.fromBufferAttribute(r,c),pr.fromBufferAttribute(r,h),mr.fromBufferAttribute(r,u),m.uv=ke.getUV(Ga,Oi,Ni,Bi,dr,pr,mr,new ht)),l&&(dr.fromBufferAttribute(l,c),pr.fromBufferAttribute(l,h),mr.fromBufferAttribute(l,u),m.uv2=ke.getUV(Ga,Oi,Ni,Bi,dr,pr,mr,new ht));let g={a:c,b:h,c:u,normal:new D,materialIndex:0};ke.getNormal(Oi,Ni,Bi,g.normal),m.face=g}return m}var dn=class extends he{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(d,p,_,w,T,v,y,A,C,x,b){let L=v/C,I=y/x,Y=v/2,Z=y/2,R=A/2,k=C+1,z=x+1,G=0,q=0,N=new D;for(let V=0;V<z;V++){let Q=V*I-Z;for(let J=0;J<k;J++){let j=J*L-Y;N[d]=j*w,N[p]=Q*T,N[_]=R,c.push(N.x,N.y,N.z),N[d]=0,N[p]=0,N[_]=A>0?1:-1,h.push(N.x,N.y,N.z),u.push(J/C),u.push(1-V/x),G+=1}}for(let V=0;V<x;V++)for(let Q=0;Q<C;Q++){let J=f+Q+k*V,j=f+Q+k*(V+1),rt=f+(Q+1)+k*(V+1),dt=f+(Q+1)+k*V;l.push(J,j,dt),l.push(j,rt,dt),q+=6}r.addGroup(m,q,b),m+=q,f+=G}}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(o){let t={};for(let e in o){t[e]={};for(let i in o[e]){let n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function le(o){let t={};for(let e=0;e<o.length;e++){let i=ns(o[e]);for(let n in i)t[n]=i[n]}return t}var os={clone:ns,merge:le},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends $t{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Lr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ge=class extends Lr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hn=90,Gn=1,no=class extends Ee{constructor(t,e,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let n=new ge(Hn,Gn,t,e);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new D(1,0,0)),this.add(n);let s=new ge(Hn,Gn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);let a=new ge(Hn,Gn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new D(0,1,0)),this.add(a);let r=new ge(Hn,Gn,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new D(0,-1,0)),this.add(r);let l=new ge(Hn,Gn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);let c=new ge(Hn,Gn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[n,s,a,r,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=Mi,t.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,r),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Dr=class extends Ae{constructor(t,e,i,n,s,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:jn,super(t,e,i,n,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends ce{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Dr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new dn(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Ui});s.uniforms.tEquirect.value=e;let a=new _e(n,s),r=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Ue),new no(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Wa=new D,If=new D,Ff=new Ve,wi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Wa.subVectors(i,e).cross(If.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let i=t.delta(Wa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ff.getNormalMatrix(t),n=this.coplanarPoint(Wa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new is,xr=new D,Ir=class{constructor(t=new wi,e=new wi,i=new wi,n=new wi,s=new wi,a=new wi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){let e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],r=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],m=i[9],g=i[10],d=i[11],p=i[12],_=i[13],w=i[14],T=i[15];return e[0].setComponents(r-n,u-l,d-f,T-p).normalize(),e[1].setComponents(r+n,u+l,d+f,T+p).normalize(),e[2].setComponents(r+s,u+c,d+m,T+_).normalize(),e[3].setComponents(r-s,u-c,d-m,T-_).normalize(),e[4].setComponents(r-a,u-h,d-g,T-w).normalize(),e[5].setComponents(r+a,u+h,d+g,T+w).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(xr.x=n.normal.x>0?t.max.x:t.min.x,xr.y=n.normal.y>0?t.max.y:t.min.y,xr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sh(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function zf(o,t){let e=t.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){let f=h.array,m=h.updateRange;o.bindBuffer(u,c),m.count===-1?o.bufferSubData(u,0,f):(e?o.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(o.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:r,update:l}}var pn=class extends he{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,r=Math.floor(i),l=Math.floor(n),c=r+1,h=l+1,u=t/r,f=e/l,m=[],g=[],d=[],p=[];for(let _=0;_<h;_++){let w=_*f-a;for(let T=0;T<c;T++){let v=T*u-s;g.push(v,-w,0),d.push(0,0,1),p.push(T/r),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<r;w++){let T=w+c*_,v=w+c*(_+1),y=w+1+c*(_+1),A=w+1+c*_;m.push(T,v,A),m.push(v,y,A)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2))}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}},Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf="vec3 transformed = vec3( position );",Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qf=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ld=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Zd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ap=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ep=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Np=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tt={alphamap_fragment:Of,alphamap_pars_fragment:Nf,alphatest_fragment:Bf,alphatest_pars_fragment:Uf,aomap_fragment:kf,aomap_pars_fragment:Vf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:qf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:$f,color_fragment:Kf,color_pars_fragment:Qf,color_pars_vertex:jf,color_vertex:td,common:ed,cube_uv_reflection_fragment:id,defaultnormal_vertex:nd,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:ad,emissivemap_pars_fragment:od,encodings_fragment:ld,encodings_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:fd,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Sd,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:xd,gradientmap_pars_fragment:yd,lightmap_fragment:vd,lightmap_pars_fragment:wd,lights_lambert_vertex:Md,lights_pars_begin:bd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Ed,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Id,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:Nd,map_fragment:Bd,map_pars_fragment:Ud,map_particle_fragment:kd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Gd,morphcolor_vertex:Wd,morphnormal_vertex:qd,morphtarget_pars_vertex:Xd,morphtarget_vertex:Yd,normal_fragment_begin:Jd,normal_fragment_maps:Zd,normal_pars_fragment:$d,normal_pars_vertex:Kd,normal_vertex:Qd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:ip,iridescence_pars_fragment:np,output_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:dp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:yp,specularmap_fragment:vp,specularmap_pars_fragment:wp,tonemapping_fragment:Mp,tonemapping_pars_fragment:bp,transmission_fragment:Sp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Ep,uv_vertex:Cp,uv2_pars_fragment:Pp,uv2_pars_vertex:Rp,uv2_vertex:Lp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Fp,cube_vert:zp,cube_frag:Op,depth_vert:Np,depth_frag:Bp,distanceRGBA_vert:Up,distanceRGBA_frag:kp,equirect_vert:Vp,equirect_frag:Hp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:qp,meshbasic_frag:Xp,meshlambert_vert:Yp,meshlambert_frag:Jp,meshmatcap_vert:Zp,meshmatcap_frag:$p,meshnormal_vert:Kp,meshnormal_frag:Qp,meshphong_vert:jp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:im,meshtoon_vert:nm,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},nt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ve},uv2Transform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}}},ci={basic:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.fog,nt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:le([nt.points,nt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:le([nt.common,nt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:le([nt.sprite,nt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},cube:{uniforms:le([nt.envmap,{opacity:{value:1}}]),vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:le([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:le([nt.lights,nt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ci.physical={uniforms:le([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ht(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function um(o,t,e,i,n,s){let a=new ft(0),r=n===!0?0:1,l,c,h=null,u=0,f=null;function m(d,p){let _=!1,w=p.isScene===!0?p.background:null;w&&w.isTexture&&(w=t.get(w));let T=o.xr,v=T.getSession&&T.getSession();v&&v.environmentBlendMode==="additive"&&(w=null),w===null?g(a,r):w&&w.isColor&&(g(w,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Xr)?(c===void 0&&(c=new _e(new dn(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ns(ci.cube.uniforms),vertexShader:ci.cube.vertexShader,fragmentShader:ci.cube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||u!==w.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new _e(new pn(2,2),new Kt({name:"BackgroundMaterial",uniforms:ns(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),r=p,g(a,r)},getClearAlpha:function(){return r},setClearAlpha:function(d){r=d,g(a,r)},render:m}}function fm(o,t,e,i){let n=o.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,r={},l=p(null),c=l,h=!1;function u(R,k,z,G,q){let N=!1;if(a){let V=d(G,z,k);c!==V&&(c=V,m(c.object)),N=_(R,G,z,q),N&&w(R,G,z,q)}else{let V=k.wireframe===!0;(c.geometry!==G.id||c.program!==z.id||c.wireframe!==V)&&(c.geometry=G.id,c.program=z.id,c.wireframe=V,N=!0)}q!==null&&e.update(q,34963),(N||h)&&(h=!1,x(R,k,z,G),q!==null&&o.bindBuffer(34963,e.get(q).buffer))}function f(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?o.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?o.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function d(R,k,z){let G=z.wireframe===!0,q=r[R.id];q===void 0&&(q={},r[R.id]=q);let N=q[k.id];N===void 0&&(N={},q[k.id]=N);let V=N[G];return V===void 0&&(V=p(f()),N[G]=V),V}function p(R){let k=[],z=[],G=[];for(let q=0;q<n;q++)k[q]=0,z[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:G,object:R,attributes:{},index:null}}function _(R,k,z,G){let q=c.attributes,N=k.attributes,V=0,Q=z.getAttributes();for(let J in Q)if(Q[J].location>=0){let rt=q[J],dt=N[J];if(dt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;V++}return c.attributesNum!==V||c.index!==G}function w(R,k,z,G){let q={},N=k.attributes,V=0,Q=z.getAttributes();for(let J in Q)if(Q[J].location>=0){let rt=N[J];rt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor));let dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),q[J]=dt,V++}c.attributes=q,c.attributesNum=V,c.index=G}function T(){let R=c.newAttributes;for(let k=0,z=R.length;k<z;k++)R[k]=0}function v(R){y(R,0)}function y(R,k){let z=c.newAttributes,G=c.enabledAttributes,q=c.attributeDivisors;z[R]=1,G[R]===0&&(o.enableVertexAttribArray(R),G[R]=1),q[R]!==k&&((i.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),q[R]=k)}function A(){let R=c.newAttributes,k=c.enabledAttributes;for(let z=0,G=k.length;z<G;z++)k[z]!==R[z]&&(o.disableVertexAttribArray(z),k[z]=0)}function C(R,k,z,G,q,N){i.isWebGL2===!0&&(z===5124||z===5125)?o.vertexAttribIPointer(R,k,z,q,N):o.vertexAttribPointer(R,k,z,G,q,N)}function x(R,k,z,G){if(i.isWebGL2===!1&&(R.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();let q=G.attributes,N=z.getAttributes(),V=k.defaultAttributeValues;for(let Q in N){let J=N[Q];if(J.location>=0){let j=q[Q];if(j===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){let rt=j.normalized,dt=j.itemSize,W=e.get(j);if(W===void 0)continue;let Ut=W.buffer,wt=W.type,Mt=W.bytesPerElement;if(j.isInterleavedBufferAttribute){let at=j.data,zt=at.stride,At=j.offset;if(at.isInstancedInterleavedBuffer){for(let xt=0;xt<J.locationSize;xt++)y(J.location+xt,at.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<J.locationSize;xt++)v(J.location+xt);o.bindBuffer(34962,Ut);for(let xt=0;xt<J.locationSize;xt++)C(J.location+xt,dt/J.locationSize,wt,rt,zt*Mt,(At+dt/J.locationSize*xt)*Mt)}else{if(j.isInstancedBufferAttribute){for(let at=0;at<J.locationSize;at++)y(J.location+at,j.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let at=0;at<J.locationSize;at++)v(J.location+at);o.bindBuffer(34962,Ut);for(let at=0;at<J.locationSize;at++)C(J.location+at,dt/J.locationSize,wt,rt,dt*Mt,dt/J.locationSize*at*Mt)}}else if(V!==void 0){let rt=V[Q];if(rt!==void 0)switch(rt.length){case 2:o.vertexAttrib2fv(J.location,rt);break;case 3:o.vertexAttrib3fv(J.location,rt);break;case 4:o.vertexAttrib4fv(J.location,rt);break;default:o.vertexAttrib1fv(J.location,rt)}}}}A()}function b(){Y();for(let R in r){let k=r[R];for(let z in k){let G=k[z];for(let q in G)g(G[q].object),delete G[q];delete k[z]}delete r[R]}}function L(R){if(r[R.id]===void 0)return;let k=r[R.id];for(let z in k){let G=k[z];for(let q in G)g(G[q].object),delete G[q];delete k[z]}delete r[R.id]}function I(R){for(let k in r){let z=r[k];if(z[R.id]===void 0)continue;let G=z[R.id];for(let q in G)g(G[q].object),delete G[q];delete z[R.id]}}function Y(){Z(),h=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:Z,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:v,disableUnusedAttributes:A}}function dm(o,t,e,i){let n=i.isWebGL2,s;function a(c){s=c}function r(c,h){o.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,m;if(n)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,u),e.update(h,s,u)}this.setMode=a,this.render=r,this.renderInstances=l}function pm(o,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext,r=e.precision!==void 0?e.precision:"highp",l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),w=o.getParameter(36349),T=f>0,v=a||t.has("OES_texture_float"),y=T&&v,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:A}}function mm(o){let t=this,e=null,i=0,n=!1,s=!1,a=new wi,r=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){let g=u.length!==0||f||i!==0||n;return n=f,e=h(u,m,0),i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,m){let g=u.clippingPlanes,d=u.clipIntersection,p=u.clipShadows,_=o.get(u);if(!n||g===null||g.length===0||s&&!p)s?h(null):c();else{let w=s?0:i,T=w*4,v=_.clippingState||null;l.value=v,v=h(g,f,T,m);for(let y=0;y!==T;++y)v[y]=e[y];_.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){let d=u!==null?u.length:0,p=null;if(d!==0){if(p=l.value,g!==!0||p===null){let _=m+d*4,w=f.matrixWorldInverse;r.getNormalMatrix(w),(p===null||p.length<_)&&(p=new Float32Array(_));for(let T=0,v=m;T!==d;++T,v+=4)a.copy(u[T]).applyMatrix4(w,r),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function gm(o){let t=new WeakMap;function e(a,r){return r===$a?a.mapping=jn:r===Ka&&(a.mapping=ts),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let r=a.mapping;if(r===$a||r===Ka)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new so(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let r=a.target;r.removeEventListener("dispose",n);let l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var mn=class extends Lr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,r=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yn=4,Tc=[.125,.215,.35,.446,.526,.582],nn=20,qa=new mn,Ac=new ft,Xa=null,en=(1+Math.sqrt(5))/2,qn=1/en,Ec=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,en,qn),new D(0,en,-qn),new D(qn,0,en),new D(-qn,0,en),new D(en,qn,0),new D(-en,qn,0)],Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Xa=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa),t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jn||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Rs,format:Qe,encoding:hn,depthBuffer:!1},n=Cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=xm(s,t,e)}return n}_compileMaterial(t){let e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,i,n){let r=new ge(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ac),h.toneMapping=Mi,h.autoClear=!1;let m=new bi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new _e(new dn,m),d=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(Ac),d=!0);for(let _=0;_<6;_++){let w=_%3;w===0?(r.up.set(0,l[_],0),r.lookAt(c[_],0,0)):w===1?(r.up.set(0,0,l[_]),r.lookAt(0,c[_],0)):(r.up.set(0,l[_],0),r.lookAt(0,0,c[_]));let T=this._cubeSize;yr(n,w*T,_>2?T:0,T,T),h.setRenderTarget(n),d&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===jn||t.mapping===ts;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;let l=this._cubeSize;yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,qa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Ec[(n-1)%Ec.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _e(this._lodPlanes[n],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nn-1),d=s/g,p=isFinite(s)?1+Math.floor(h*d):nn;p>nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nn}`);let _=[],w=0;for(let C=0;C<nn;++C){let x=C/d,b=Math.exp(-x*x/2);_.push(b),C===0?w+=b:C<p&&(w+=2*b)}for(let C=0;C<_.length;C++)_[C]=_[C]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",r&&(f.poleAxis.value=r);let{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;let v=this._sizeLods[n],y=3*v*(n>T-Yn?n-T+Yn:0),A=4*(this._cubeSize-v);yr(e,y,A,3*v,2*v),l.setRenderTarget(e),l.render(u,qa)}};function _m(o){let t=[],e=[],i=[],n=o,s=o-Yn+1+Tc.length;for(let a=0;a<s;a++){let r=Math.pow(2,n);e.push(r);let l=1/r;a>o-Yn?l=Tc[a-o+Yn-1]:a===0&&(l=0),i.push(l);let c=1/(r-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,d=3,p=2,_=1,w=new Float32Array(d*g*m),T=new Float32Array(p*g*m),v=new Float32Array(_*g*m);for(let A=0;A<m;A++){let C=A%3*2/3-1,x=A>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];w.set(b,d*g*A),T.set(f,p*g*A);let L=[A,A,A,A,A,A];v.set(L,_*g*A)}let y=new he;y.setAttribute("position",new Gt(w,d)),y.setAttribute("uv",new Gt(T,p)),y.setAttribute("faceIndex",new Gt(v,_)),t.push(y),n>Yn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cc(o,t,e){let i=new ce(o,t,e);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function xm(o,t,e){let i=new Float32Array(nn),n=new D(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Pc(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Rc(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ym(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){let l=r.mapping,c=l===$a||l===Ka,h=l===jn||l===ts;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new Fr(o)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{let u=r.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new Fr(o));let f=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function n(r){let l=0,c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){let l=r.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function vm(o){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function wm(o,t,e,i){let n={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];let m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function r(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],34962);let m=u.morphAttributes;for(let g in m){let d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function c(u){let f=[],m=u.index,g=u.attributes.position,d=0;if(m!==null){let w=m.array;d=m.version;for(let T=0,v=w.length;T<v;T+=3){let y=w[T+0],A=w[T+1],C=w[T+2];f.push(y,A,A,C,C,y)}}else{let w=g.array;d=g.version;for(let T=0,v=w.length/3-1;T<v;T+=3){let y=T+0,A=T+1,C=T+2;f.push(y,A,A,C,C,y)}}let p=new(ih(f)?Rr:Pr)(f,1);p.version=d;let _=s.get(u);_&&t.remove(_),s.set(u,p)}function h(u){let f=s.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Mm(o,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let r,l;function c(f){r=f.type,l=f.bytesPerElement}function h(f,m){o.drawElements(s,m,r,f*l),e.update(m,s,1)}function u(f,m,g){if(g===0)return;let d,p;if(n)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,r,f*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function bm(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Sm(o,t){return o[0]-t[0]}function Tm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Ya(o,t){let e=1,i=t.isInterleavedBufferAttribute?t.data.array:t.array;i instanceof Int8Array?e=127:i instanceof Int16Array?e=32767:i instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),o.divideScalar(e)}function Am(o,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ee,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,u,f){let m=c.morphTargetInfluences;if(t.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=g!==void 0?g.length:0,p=s.get(h);if(p===void 0||p.count!==d){let k=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",k)};p!==void 0&&p.texture.dispose();let T=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],x=h.morphAttributes.color||[],b=0;T===!0&&(b=1),v===!0&&(b=2),y===!0&&(b=3);let L=h.attributes.position.count*b,I=1;L>t.maxTextureSize&&(I=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);let Y=new Float32Array(L*I*4*d),Z=new Cr(Y,L,I,d);Z.type=rn,Z.needsUpdate=!0;let R=b*4;for(let z=0;z<d;z++){let G=A[z],q=C[z],N=x[z],V=L*I*4*z;for(let Q=0;Q<G.count;Q++){let J=Q*R;T===!0&&(a.fromBufferAttribute(G,Q),G.normalized===!0&&Ya(a,G),Y[V+J+0]=a.x,Y[V+J+1]=a.y,Y[V+J+2]=a.z,Y[V+J+3]=0),v===!0&&(a.fromBufferAttribute(q,Q),q.normalized===!0&&Ya(a,q),Y[V+J+4]=a.x,Y[V+J+5]=a.y,Y[V+J+6]=a.z,Y[V+J+7]=0),y===!0&&(a.fromBufferAttribute(N,Q),N.normalized===!0&&Ya(a,N),Y[V+J+8]=a.x,Y[V+J+9]=a.y,Y[V+J+10]=a.z,Y[V+J+11]=N.itemSize===4?a.w:1)}}p={count:d,texture:Z,size:new ht(L,I)},s.set(h,p),h.addEventListener("dispose",k)}let _=0;for(let T=0;T<m.length;T++)_+=m[T];let w=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(o,"morphTargetBaseInfluence",w),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{let g=m===void 0?0:m.length,d=i[h.id];if(d===void 0||d.length!==g){d=[];for(let v=0;v<g;v++)d[v]=[v,0];i[h.id]=d}for(let v=0;v<g;v++){let y=d[v];y[0]=v,y[1]=m[v]}d.sort(Tm);for(let v=0;v<8;v++)v<g&&d[v][1]?(r[v][0]=d[v][0],r[v][1]=d[v][1]):(r[v][0]=Number.MAX_SAFE_INTEGER,r[v][1]=0);r.sort(Sm);let p=h.morphAttributes.position,_=h.morphAttributes.normal,w=0;for(let v=0;v<8;v++){let y=r[v],A=y[0],C=y[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+v)!==p[A]&&h.setAttribute("morphTarget"+v,p[A]),_&&h.getAttribute("morphNormal"+v)!==_[A]&&h.setAttribute("morphNormal"+v,_[A]),n[v]=C,w+=C):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),_&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),n[v]=0)}let T=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(o,"morphTargetBaseInfluence",T),f.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function Em(o,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);return n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function a(){n=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var rh=new Ae,ah=new Cr,oh=new io,lh=new Dr,Lc=[],Dc=[],Ic=new Float32Array(16),Fc=new Float32Array(9),zc=new Float32Array(4);function ls(o,t,e){let i=o[0];if(i<=0||i>0)return o;let n=t*e,s=Lc[n];if(s===void 0&&(s=new Float32Array(n),Lc[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function ye(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function ve(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function Jr(o,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function Cm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Pm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;o.uniform2fv(this.addr,t),ve(e,t)}}function Rm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;o.uniform3fv(this.addr,t),ve(e,t)}}function Lm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;o.uniform4fv(this.addr,t),ve(e,t)}}function Dm(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,i))return;zc.set(i),o.uniformMatrix2fv(this.addr,!1,zc),ve(e,i)}}function Im(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,i))return;Fc.set(i),o.uniformMatrix3fv(this.addr,!1,Fc),ve(e,i)}}function Fm(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,i))return;Ic.set(i),o.uniformMatrix4fv(this.addr,!1,Ic),ve(e,i)}}function zm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Om(o,t){let e=this.cache;ye(e,t)||(o.uniform2iv(this.addr,t),ve(e,t))}function Nm(o,t){let e=this.cache;ye(e,t)||(o.uniform3iv(this.addr,t),ve(e,t))}function Bm(o,t){let e=this.cache;ye(e,t)||(o.uniform4iv(this.addr,t),ve(e,t))}function Um(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function km(o,t){let e=this.cache;ye(e,t)||(o.uniform2uiv(this.addr,t),ve(e,t))}function Vm(o,t){let e=this.cache;ye(e,t)||(o.uniform3uiv(this.addr,t),ve(e,t))}function Hm(o,t){let e=this.cache;ye(e,t)||(o.uniform4uiv(this.addr,t),ve(e,t))}function Gm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||rh,n)}function Wm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||oh,n)}function qm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||lh,n)}function Xm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ah,n)}function Ym(o){switch(o){case 5126:return Cm;case 35664:return Pm;case 35665:return Rm;case 35666:return Lm;case 35674:return Dm;case 35675:return Im;case 35676:return Fm;case 5124:case 35670:return zm;case 35667:case 35671:return Om;case 35668:case 35672:return Nm;case 35669:case 35673:return Bm;case 5125:return Um;case 36294:return km;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Jm(o,t){o.uniform1fv(this.addr,t)}function Zm(o,t){let e=ls(t,this.size,2);o.uniform2fv(this.addr,e)}function $m(o,t){let e=ls(t,this.size,3);o.uniform3fv(this.addr,e)}function Km(o,t){let e=ls(t,this.size,4);o.uniform4fv(this.addr,e)}function Qm(o,t){let e=ls(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function jm(o,t){let e=ls(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function tg(o,t){let e=ls(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function eg(o,t){o.uniform1iv(this.addr,t)}function ig(o,t){o.uniform2iv(this.addr,t)}function ng(o,t){o.uniform3iv(this.addr,t)}function sg(o,t){o.uniform4iv(this.addr,t)}function rg(o,t){o.uniform1uiv(this.addr,t)}function ag(o,t){o.uniform2uiv(this.addr,t)}function og(o,t){o.uniform3uiv(this.addr,t)}function lg(o,t){o.uniform4uiv(this.addr,t)}function cg(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTexture2D(t[s]||rh,n[s])}function hg(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTexture3D(t[s]||oh,n[s])}function ug(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTextureCube(t[s]||lh,n[s])}function fg(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||ah,n[s])}function dg(o){switch(o){case 5126:return Jm;case 35664:return Zm;case 35665:return $m;case 35666:return Km;case 35674:return Qm;case 35675:return jm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}var ro=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Ym(e.type)}},ao=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=dg(e.type)}},oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let r=n[s];r.setValue(t,e[r.id],i)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function Oc(o,t){o.seq.push(t),o.map[t.id]=t}function pg(o,t,e){let i=o.name,n=i.length;for(Ja.lastIndex=0;;){let s=Ja.exec(i),a=Ja.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===n){Oc(e,c===void 0?new ro(r,o,t):new ao(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new oo(r),Oc(e,u)),e=u}}}var Kn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);pg(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let r=e[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Nc(o,t,e){let i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}var mg=0;function gg(o,t){let e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function _g(o){switch(o){case hn:return["Linear","( value )"];case kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Bc(o,t,e){let i=o.getShaderParameter(t,35713),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+gg(o.getShaderSource(t),a)}else return n}function xg(o,t){let e=_g(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function yg(o,t){let e;switch(t){case Xu:e="Linear";break;case Yu:e="Reinhard";break;case Ju:e="OptimizedCineon";break;case Zu:e="ACESFilmic";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function wg(o){let t=[];for(let e in o){let i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mg(o,t){let e={},i=o.getProgramParameter(t,35721);for(let n=0;n<i;n++){let s=o.getActiveAttrib(t,n),a=s.name,r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Es(o){return o!==""}function Uc(o,t){return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(o){return o.replace(bg,Sg)}function Sg(o,t){let e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return lo(e)}var Tg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(o){return o.replace(Ag,ch).replace(Tg,Eg)}function Eg(o,t,e,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ch(o,t,e,i)}function ch(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Hc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===As&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case jn:case ts:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Lg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qr:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case qu:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ig(o,t,e,i){let n=o.getContext(),s=e.defines,a=e.vertexShader,r=e.fragmentShader,l=Cg(e),c=Pg(e),h=Rg(e),u=Lg(e),f=Dg(e),m=e.isWebGL2?"":vg(e),g=wg(s),d=n.createProgram(),p,_,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Es).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Es).join(`
`),_.length>0&&(_+=`
`)):(p=[Hc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),_=[m,Hc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Tt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,xg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=lo(a),a=Uc(a,e),a=kc(a,e),r=lo(r),r=Uc(r,e),r=kc(r,e),a=Vc(a),r=Vc(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let T=w+p+a,v=w+_+r,y=Nc(n,35633,T),A=Nc(n,35632,v);if(n.attachShader(d,y),n.attachShader(d,A),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),o.debug.checkShaderErrors){let b=n.getProgramInfoLog(d).trim(),L=n.getShaderInfoLog(y).trim(),I=n.getShaderInfoLog(A).trim(),Y=!0,Z=!0;if(n.getProgramParameter(d,35714)===!1){Y=!1;let R=Bc(n,y,"vertex"),k=Bc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+R+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||I==="")&&(Z=!1);Z&&(this.diagnostics={runnable:Y,programLog:b,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:_}})}n.deleteShader(y),n.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new Kn(n,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Mg(n,d)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=A,this}var Fg=0,co=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){let e=this.shaderCache;if(e.has(t)===!1){let i=new ho(t);e.set(t,i)}return e.get(t)}},ho=class{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}};function zg(o,t,e,i,n,s,a){let r=new Is,l=new co,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,b,L,I,Y){let Z=I.fog,R=Y.geometry,k=x.isMeshStandardMaterial?I.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),G=z&&z.mapping===Xr?z.image.height:null,q=g[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let N=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,V=N!==void 0?N.length:0,Q=0;R.morphAttributes.position!==void 0&&(Q=1),R.morphAttributes.normal!==void 0&&(Q=2),R.morphAttributes.color!==void 0&&(Q=3);let J,j,rt,dt;if(q){let zt=ci[q];J=zt.vertexShader,j=zt.fragmentShader}else J=x.vertexShader,j=x.fragmentShader,l.update(x),rt=l.getVertexShaderID(x),dt=l.getFragmentShaderID(x);let W=o.getRenderTarget(),Ut=x.alphaTest>0,wt=x.clearcoat>0,Mt=x.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:x.type,vertexShader:J,fragmentShader:j,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:hn,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:G,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===_f,tangentSpaceNormalMap:x.normalMapType===as,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===kt,clearcoat:wt,clearcoatMap:wt&&!!x.clearcoatMap,clearcoatRoughnessMap:wt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:wt&&!!x.clearcoatNormalMap,iridescence:Mt,iridescenceMap:Mt&&!!x.iridescenceMap,iridescenceThicknessMap:Mt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Zn,alphaMap:!!x.alphaMap,alphaTest:Ut,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Z,useFog:x.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Mi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===je,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(b,x),w(b,x),b.push(o.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function w(x,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.map&&r.enable(4),b.matcap&&r.enable(5),b.envMap&&r.enable(6),b.lightMap&&r.enable(7),b.aoMap&&r.enable(8),b.emissiveMap&&r.enable(9),b.bumpMap&&r.enable(10),b.normalMap&&r.enable(11),b.objectSpaceNormalMap&&r.enable(12),b.tangentSpaceNormalMap&&r.enable(13),b.clearcoat&&r.enable(14),b.clearcoatMap&&r.enable(15),b.clearcoatRoughnessMap&&r.enable(16),b.clearcoatNormalMap&&r.enable(17),b.iridescence&&r.enable(18),b.iridescenceMap&&r.enable(19),b.iridescenceThicknessMap&&r.enable(20),b.displacementMap&&r.enable(21),b.specularMap&&r.enable(22),b.roughnessMap&&r.enable(23),b.metalnessMap&&r.enable(24),b.gradientMap&&r.enable(25),b.alphaMap&&r.enable(26),b.alphaTest&&r.enable(27),b.vertexColors&&r.enable(28),b.vertexAlphas&&r.enable(29),b.vertexUvs&&r.enable(30),b.vertexTangents&&r.enable(31),b.uvsVertexOnly&&r.enable(32),b.fog&&r.enable(33),x.push(r.mask),r.disableAll(),b.useFog&&r.enable(0),b.flatShading&&r.enable(1),b.logarithmicDepthBuffer&&r.enable(2),b.skinning&&r.enable(3),b.morphTargets&&r.enable(4),b.morphNormals&&r.enable(5),b.morphColors&&r.enable(6),b.premultipliedAlpha&&r.enable(7),b.shadowMapEnabled&&r.enable(8),b.physicallyCorrectLights&&r.enable(9),b.doubleSided&&r.enable(10),b.flipSided&&r.enable(11),b.useDepthPacking&&r.enable(12),b.dithering&&r.enable(13),b.specularIntensityMap&&r.enable(14),b.specularColorMap&&r.enable(15),b.transmission&&r.enable(16),b.transmissionMap&&r.enable(17),b.thicknessMap&&r.enable(18),b.sheen&&r.enable(19),b.sheenColorMap&&r.enable(20),b.sheenRoughnessMap&&r.enable(21),b.decodeVideoTexture&&r.enable(22),b.opaque&&r.enable(23),x.push(r.mask)}function T(x){let b=g[x.type],L;if(b){let I=ci[b];L=os.clone(I.uniforms)}else L=x.uniforms;return L}function v(x,b){let L;for(let I=0,Y=c.length;I<Y;I++){let Z=c[I];if(Z.cacheKey===b){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new Ig(o,b,x,s),c.push(L)),L}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:T,acquireProgram:v,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:C}}function Og(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function i(s,a,r){o.get(s)[a]=r}function n(){o=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Ng(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Wc(){let o=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,m,g,d,p){let _=o[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:d,group:p},o[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=d,_.group=p),t++,_}function r(u,f,m,g,d,p){let _=a(u,f,m,g,d,p);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):e.push(_)}function l(u,f,m,g,d,p){let _=a(u,f,m,g,d,p);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):e.unshift(_)}function c(u,f){e.length>1&&e.sort(u||Ng),i.length>1&&i.sort(f||Gc),n.length>1&&n.sort(f||Gc)}function h(){for(let u=t,f=o.length;u<f;u++){let m=o[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:h,sort:c}}function Bg(){let o=new WeakMap;function t(i,n){let s;return o.has(i)===!1?(s=new Wc,o.set(i,[s])):n>=o.get(i).length?(s=new Wc,o.get(i).push(s)):s=o.get(i)[n],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function Ug(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ft};break;case"SpotLight":e={position:new D,direction:new D,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new D,halfWidth:new D,halfHeight:new D};break}return o[t.id]=e,e}}}function kg(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var Vg=0;function Hg(o,t){return(t.castShadow?1:0)-(o.castShadow?1:0)}function Gg(o,t){let e=new Ug,i=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)n.probe.push(new D);let s=new D,a=new Zt,r=new Zt;function l(h,u){let f=0,m=0,g=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,_=0,w=0,T=0,v=0,y=0,A=0;h.sort(Hg);let C=u!==!0?Math.PI:1;for(let b=0,L=h.length;b<L;b++){let I=h[b],Y=I.color,Z=I.intensity,R=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=Y.r*Z*C,m+=Y.g*Z*C,g+=Y.b*Z*C;else if(I.isLightProbe)for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],Z);else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){let G=I.shadow,q=i.get(I);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=z,d++}else if(I.isSpotLight){let z=e.get(I);if(z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(Y).multiplyScalar(Z*C),z.distance=R,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,I.castShadow){let G=I.shadow,q=i.get(I);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=k,n.spotShadowMatrix[_]=I.shadow.matrix,A++}n.spot[_]=z,_++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(Y).multiplyScalar(Z),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=z,w++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*C),z.distance=I.distance,z.decay=I.decay,I.castShadow){let G=I.shadow,q=i.get(I);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=z,p++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(Z*C),z.groundColor.copy(I.groundColor).multiplyScalar(Z*C),n.hemi[T]=z,T++}}w>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;let x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==w||x.hemiLength!==T||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=w,n.point.length=p,n.hemi.length=T,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotShadowMatrix.length=A,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=w,x.hemiLength=T,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=A,n.version=Vg++)}function c(h,u){let f=0,m=0,g=0,d=0,p=0,_=u.matrixWorldInverse;for(let w=0,T=h.length;w<T;w++){let v=h[w];if(v.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),f++}else if(v.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(v.isRectAreaLight){let y=n.rectArea[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),r.identity(),a.copy(v.matrixWorld),a.premultiply(_),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),d++}else if(v.isPointLight){let y=n.point[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){let y=n.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:n}}function qc(o,t){let e=new Gg(o,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function r(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:r}}function Wg(o,t){let e=new WeakMap;function i(s,a=0){let r;return e.has(s)===!1?(r=new qc(o,t),e.set(s,[r])):a>=e.get(s).length?(r=new qc(o,t),e.get(s).push(r)):r=e.get(s)[a],r}function n(){e=new WeakMap}return{get:i,dispose:n}}var zr=class extends $t{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Or=class extends $t{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(o,t,e){let i=new Ir,n=new ht,s=new ht,a=new ee,r=new zr({depthPacking:gf}),l=new Or,c={},h=e.maxTextureSize,u={0:je,1:Ps,2:Qn},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:qg,fragmentShader:Xg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new _e(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc,this.render=function(v,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let C=o.getRenderTarget(),x=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Ui),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let I=0,Y=v.length;I<Y;I++){let Z=v[I],R=Z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);let k=R.getFrameExtents();if(n.multiply(k),s.copy(R.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/k.x),n.x=s.x*k.x,R.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/k.y),n.y=s.y*k.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===As&&(R.map=new ce(n.x,n.y),R.map.texture.name=Z.name+".shadowMap",R.mapPass=new ce(n.x,n.y),R.camera.updateProjectionMatrix()),R.map===null){let G={minFilter:Se,magFilter:Se,format:Qe};R.map=new ce(n.x,n.y,G),R.map.texture.name=Z.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();let z=R.getViewportCount();for(let G=0;G<z;G++){let q=R.getViewport(G);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),L.viewport(a),R.updateMatrices(Z,G),i=R.getFrustum(),T(y,A,R.camera,Z,this.type)}!R.isPointLightShadow&&this.type===As&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,b)};function _(v,y){let A=t.update(d);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(y,null,A,f,d,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(y,null,A,m,d,null)}function w(v,y,A,C,x,b){let L=null,I=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0?L=I:L=A.isPointLight===!0?l:r,o.localClippingEnabled&&y.clipShadows===!0&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){let Y=L.uuid,Z=y.uuid,R=c[Y];R===void 0&&(R={},c[Y]=R);let k=R[Z];k===void 0&&(k=L.clone(),R[Z]=k),L=k}return L.visible=y.visible,L.wireframe=y.wireframe,b===As?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:u[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function T(v,y,A,C,x){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===As)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);let I=t.update(v),Y=v.material;if(Array.isArray(Y)){let Z=I.groups;for(let R=0,k=Z.length;R<k;R++){let z=Z[R],G=Y[z.materialIndex];if(G&&G.visible){let q=w(v,G,C,A.near,A.far,x);o.renderBufferDirect(A,null,I,q,v,z)}}}else if(Y.visible){let Z=w(v,Y,C,A.near,A.far,x);o.renderBufferDirect(A,null,I,Z,v,null)}}let L=v.children;for(let I=0,Y=L.length;I<Y;I++)T(L[I],y,A,C,x)}}function Jg(o,t,e){let i=e.isWebGL2;function n(){let P=!1,it=new ee,et=null,pt=new ee(0,0,0,0);return{setMask:function(lt){et!==lt&&!P&&(o.colorMask(lt,lt,lt,lt),et=lt)},setLocked:function(lt){P=lt},setClear:function(lt,gt,K,_t,Dt){Dt===!0&&(lt*=_t,gt*=_t,K*=_t),it.set(lt,gt,K,_t),pt.equals(it)===!1&&(o.clearColor(lt,gt,K,_t),pt.copy(it))},reset:function(){P=!1,et=null,pt.set(-1,0,0,0)}}}function s(){let P=!1,it=null,et=null,pt=null;return{setTest:function(lt){lt?dt(2929):W(2929)},setMask:function(lt){it!==lt&&!P&&(o.depthMask(lt),it=lt)},setFunc:function(lt){if(et!==lt){if(lt)switch(lt){case Nu:o.depthFunc(512);break;case Bu:o.depthFunc(519);break;case Uu:o.depthFunc(513);break;case Za:o.depthFunc(515);break;case ku:o.depthFunc(514);break;case Vu:o.depthFunc(518);break;case Hu:o.depthFunc(516);break;case Gu:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);et=lt}},setLocked:function(lt){P=lt},setClear:function(lt){pt!==lt&&(o.clearDepth(lt),pt=lt)},reset:function(){P=!1,it=null,et=null,pt=null}}}function a(){let P=!1,it=null,et=null,pt=null,lt=null,gt=null,K=null,_t=null,Dt=null;return{setTest:function(It){P||(It?dt(2960):W(2960))},setMask:function(It){it!==It&&!P&&(o.stencilMask(It),it=It)},setFunc:function(It,pe,ni){(et!==It||pt!==pe||lt!==ni)&&(o.stencilFunc(It,pe,ni),et=It,pt=pe,lt=ni)},setOp:function(It,pe,ni){(gt!==It||K!==pe||_t!==ni)&&(o.stencilOp(It,pe,ni),gt=It,K=pe,_t=ni)},setLocked:function(It){P=It},setClear:function(It){Dt!==It&&(o.clearStencil(It),Dt=It)},reset:function(){P=!1,it=null,et=null,pt=null,lt=null,gt=null,K=null,_t=null,Dt=null}}}let r=new n,l=new s,c=new a,h={},u={},f=new WeakMap,m=[],g=null,d=!1,p=null,_=null,w=null,T=null,v=null,y=null,A=null,C=!1,x=null,b=null,L=null,I=null,Y=null,Z=o.getParameter(35661),R=!1,k=0,z=o.getParameter(7938);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),R=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),R=k>=2);let G=null,q={},N=o.getParameter(3088),V=o.getParameter(2978),Q=new ee().fromArray(N),J=new ee().fromArray(V);function j(P,it,et){let pt=new Uint8Array(4),lt=o.createTexture();o.bindTexture(P,lt),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let gt=0;gt<et;gt++)o.texImage2D(it+gt,0,6408,1,1,0,6408,5121,pt);return lt}let rt={};rt[3553]=j(3553,3553,1),rt[34067]=j(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),dt(2929),l.setFunc(Za),oe(!1),be(Il),dt(2884),At(Ui);function dt(P){h[P]!==!0&&(o.enable(P),h[P]=!0)}function W(P){h[P]!==!1&&(o.disable(P),h[P]=!1)}function Ut(P,it){return u[P]!==it?(o.bindFramebuffer(P,it),u[P]=it,i&&(P===36009&&(u[36160]=it),P===36160&&(u[36009]=it)),!0):!1}function wt(P,it){let et=m,pt=!1;if(P)if(et=f.get(it),et===void 0&&(et=[],f.set(it,et)),P.isWebGLMultipleRenderTargets){let lt=P.texture;if(et.length!==lt.length||et[0]!==36064){for(let gt=0,K=lt.length;gt<K;gt++)et[gt]=36064+gt;et.length=lt.length,pt=!0}}else et[0]!==36064&&(et[0]=36064,pt=!0);else et[0]!==1029&&(et[0]=1029,pt=!0);pt&&(e.isWebGL2?o.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Mt(P){return g!==P?(o.useProgram(P),g=P,!0):!1}let at={[Xn]:32774,[Au]:32778,[Eu]:32779};if(i)at[Ol]=32775,at[Nl]=32776;else{let P=t.get("EXT_blend_minmax");P!==null&&(at[Ol]=P.MIN_EXT,at[Nl]=P.MAX_EXT)}let zt={[Cu]:0,[Pu]:1,[Ru]:768,[Qc]:770,[Ou]:776,[Fu]:774,[Du]:772,[Lu]:769,[jc]:771,[zu]:775,[Iu]:773};function At(P,it,et,pt,lt,gt,K,_t){if(P===Ui){d===!0&&(W(3042),d=!1);return}if(d===!1&&(dt(3042),d=!0),P!==Tu){if(P!==p||_t!==C){if((_!==Xn||v!==Xn)&&(o.blendEquation(32774),_=Xn,v=Xn),_t)switch(P){case Zn:o.blendFuncSeparate(1,771,1,771);break;case br:o.blendFunc(1,1);break;case Fl:o.blendFuncSeparate(0,769,0,1);break;case zl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zn:o.blendFuncSeparate(770,771,1,771);break;case br:o.blendFunc(770,1);break;case Fl:o.blendFuncSeparate(0,769,0,1);break;case zl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,T=null,y=null,A=null,p=P,C=_t}return}lt=lt||it,gt=gt||et,K=K||pt,(it!==_||lt!==v)&&(o.blendEquationSeparate(at[it],at[lt]),_=it,v=lt),(et!==w||pt!==T||gt!==y||K!==A)&&(o.blendFuncSeparate(zt[et],zt[pt],zt[gt],zt[K]),w=et,T=pt,y=gt,A=K),p=P,C=null}function xt(P,it){P.side===Qn?W(2884):dt(2884);let et=P.side===je;it&&(et=!et),oe(et),P.blending===Zn&&P.transparent===!1?At(Ui):At(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),r.setMask(P.colorWrite);let pt=P.stencilWrite;c.setTest(pt),pt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ii(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?dt(32926):W(32926)}function oe(P){x!==P&&(P?o.frontFace(2304):o.frontFace(2305),x=P)}function be(P){P!==wu?(dt(2884),P!==b&&(P===Il?o.cullFace(1029):P===Mu?o.cullFace(1028):o.cullFace(1032))):W(2884),b=P}function De(P){P!==L&&(R&&o.lineWidth(P),L=P)}function ii(P,it,et){P?(dt(32823),(I!==it||Y!==et)&&(o.polygonOffset(it,et),I=it,Y=et)):W(32823)}function ne(P){P?dt(3089):W(3089)}function Ot(P){P===void 0&&(P=33984+Z-1),G!==P&&(o.activeTexture(P),G=P)}function di(P,it){G===null&&Ot();let et=q[G];et===void 0&&(et={type:void 0,texture:void 0},q[G]=et),(et.type!==P||et.texture!==it)&&(o.bindTexture(P,it||rt[P]),et.type=P,et.texture=it)}function pi(){let P=q[G];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(P){Q.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function ct(P){J.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function ot(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},G=null,q={},u={},f=new WeakMap,m=[],g=null,d=!1,p=null,_=null,w=null,T=null,v=null,y=null,A=null,C=!1,x=null,b=null,L=null,I=null,Y=null,Q.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:dt,disable:W,bindFramebuffer:Ut,drawBuffers:wt,useProgram:Mt,setBlending:At,setMaterial:xt,setFlipSided:oe,setCullFace:be,setLineWidth:De,setPolygonOffset:ii,setScissorTest:ne,activeTexture:Ot,bindTexture:di,unbindTexture:pi,compressedTexImage2D:E,texImage2D:yt,texImage3D:U,texStorage2D:tt,texStorage3D:st,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:$,scissor:ut,viewport:ct,reset:ot}}function Zg(o,t,e,i,n,s,a){let r=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,d,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(E,M){return _?new OffscreenCanvas(E,M):Ls("canvas")}function T(E,M,H,$){let tt=1;if((E.width>$||E.height>$)&&(tt=$/Math.max(E.width,E.height)),tt<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let st=M?eo:Math.floor,yt=st(tt*E.width),U=st(tt*E.height);d===void 0&&(d=w(yt,U));let ut=H?w(yt,U):d;return ut.width=yt,ut.height=U,ut.getContext("2d").drawImage(E,0,0,yt,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+yt+"x"+U+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function v(E){return dc(E.width)&&dc(E.height)}function y(E){return r?!1:E.wrapS!==Ke||E.wrapT!==Ke||E.minFilter!==Se&&E.minFilter!==Ue}function A(E,M){return E.generateMipmaps&&M&&E.minFilter!==Se&&E.minFilter!==Ue}function C(E){o.generateMipmap(E)}function x(E,M,H,$,tt=!1){if(r===!1)return M;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=M;return M===6403&&(H===5126&&(st=33326),H===5131&&(st=33325),H===5121&&(st=33321)),M===33319&&(H===5126&&(st=33328),H===5131&&(st=33327),H===5121&&(st=33323)),M===6408&&(H===5126&&(st=34836),H===5131&&(st=34842),H===5121&&(st=$===kt&&tt===!1?35907:32856),H===32819&&(st=32854),H===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function b(E,M,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Se&&E.minFilter!==Ue?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){return E===Se||E===Bl||E===Ul?9728:9729}function I(E){let M=E.target;M.removeEventListener("dispose",I),Z(M),M.isVideoTexture&&g.delete(M)}function Y(E){let M=E.target;M.removeEventListener("dispose",Y),k(M)}function Z(E){let M=i.get(E);if(M.__webglInit===void 0)return;let H=E.source,$=p.get(H);if($){let tt=$[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(E),Object.keys($).length===0&&p.delete(H)}i.remove(E)}function R(E){let M=i.get(E);o.deleteTexture(M.__webglTexture);let H=E.source,$=p.get(H);delete $[M.__cacheKey],a.memory.textures--}function k(E){let M=E.texture,H=i.get(E),$=i.get(M);if($.__webglTexture!==void 0&&(o.deleteTexture($.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)o.deleteFramebuffer(H.__webglFramebuffer[tt]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[tt]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let tt=0;tt<H.__webglColorRenderbuffer.length;tt++)H.__webglColorRenderbuffer[tt]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[tt]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let tt=0,st=M.length;tt<st;tt++){let yt=i.get(M[tt]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),a.memory.textures--),i.remove(M[tt])}i.remove(M),i.remove(E)}let z=0;function G(){z=0}function q(){let E=z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),z+=1,E}function N(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function V(E,M){let H=i.get(E);if(E.isVideoTexture&&di(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(H,E,M);return}}e.activeTexture(33984+M),e.bindTexture(3553,H.__webglTexture)}function Q(E,M){let H=i.get(E);if(E.version>0&&H.__version!==E.version){wt(H,E,M);return}e.activeTexture(33984+M),e.bindTexture(35866,H.__webglTexture)}function J(E,M){let H=i.get(E);if(E.version>0&&H.__version!==E.version){wt(H,E,M);return}e.activeTexture(33984+M),e.bindTexture(32879,H.__webglTexture)}function j(E,M){let H=i.get(E);if(E.version>0&&H.__version!==E.version){Mt(H,E,M);return}e.activeTexture(33984+M),e.bindTexture(34067,H.__webglTexture)}let rt={[Qa]:10497,[Ke]:33071,[ja]:33648},dt={[Se]:9728,[Bl]:9984,[Ul]:9986,[Ue]:9729,[Ku]:9985,[Yr]:9987};function W(E,M,H){if(H?(o.texParameteri(E,10242,rt[M.wrapS]),o.texParameteri(E,10243,rt[M.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,rt[M.wrapR]),o.texParameteri(E,10240,dt[M.magFilter]),o.texParameteri(E,10241,dt[M.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(M.wrapS!==Ke||M.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,L(M.magFilter)),o.texParameteri(E,10241,L(M.minFilter)),M.minFilter!==Se&&M.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let $=t.get("EXT_texture_filter_anisotropic");if(M.type===rn&&t.has("OES_texture_float_linear")===!1||r===!1&&M.type===Rs&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(o.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ut(E,M){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",I));let $=M.source,tt=p.get($);tt===void 0&&(tt={},p.set($,tt));let st=N(M);if(st!==E.__cacheKey){tt[st]===void 0&&(tt[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[st].usedTimes++;let yt=tt[E.__cacheKey];yt!==void 0&&(tt[E.__cacheKey].usedTimes--,yt.usedTimes===0&&R(M)),E.__cacheKey=st,E.__webglTexture=tt[st].texture}return H}function wt(E,M,H){let $=3553;M.isDataArrayTexture&&($=35866),M.isData3DTexture&&($=32879);let tt=Ut(E,M),st=M.source;if(e.activeTexture(33984+H),e.bindTexture($,E.__webglTexture),st.version!==st.__currentVersion||tt===!0){o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);let yt=y(M)&&v(M.image)===!1,U=T(M.image,yt,!1,h);U=pi(M,U);let ut=v(U)||r,ct=s.convert(M.format,M.encoding),ot=s.convert(M.type),P=x(M.internalFormat,ct,ot,M.encoding,M.isVideoTexture);W($,M,ut);let it,et=M.mipmaps,pt=r&&M.isVideoTexture!==!0,lt=st.__currentVersion===void 0||tt===!0,gt=b(M,U,ut);if(M.isDepthTexture)P=6402,r?M.type===rn?P=36012:M.type===sn?P=33190:M.type===$n?P=35056:P=33189:M.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===on&&P===6402&&M.type!==eh&&M.type!==sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sn,ot=s.convert(M.type)),M.format===es&&P===6402&&(P=34041,M.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$n,ot=s.convert(M.type))),lt&&(pt?e.texStorage2D(3553,1,P,U.width,U.height):e.texImage2D(3553,0,P,U.width,U.height,0,ct,ot,null));else if(M.isDataTexture)if(et.length>0&&ut){pt&&lt&&e.texStorage2D(3553,gt,P,et[0].width,et[0].height);for(let K=0,_t=et.length;K<_t;K++)it=et[K],pt?e.texSubImage2D(3553,K,0,0,it.width,it.height,ct,ot,it.data):e.texImage2D(3553,K,P,it.width,it.height,0,ct,ot,it.data);M.generateMipmaps=!1}else pt?(lt&&e.texStorage2D(3553,gt,P,U.width,U.height),e.texSubImage2D(3553,0,0,0,U.width,U.height,ct,ot,U.data)):e.texImage2D(3553,0,P,U.width,U.height,0,ct,ot,U.data);else if(M.isCompressedTexture){pt&&lt&&e.texStorage2D(3553,gt,P,et[0].width,et[0].height);for(let K=0,_t=et.length;K<_t;K++)it=et[K],M.format!==Qe?ct!==null?pt?e.compressedTexSubImage2D(3553,K,0,0,it.width,it.height,ct,it.data):e.compressedTexImage2D(3553,K,P,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(3553,K,0,0,it.width,it.height,ct,ot,it.data):e.texImage2D(3553,K,P,it.width,it.height,0,ct,ot,it.data)}else if(M.isDataArrayTexture)pt?(lt&&e.texStorage3D(35866,gt,P,U.width,U.height,U.depth),e.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ct,ot,U.data)):e.texImage3D(35866,0,P,U.width,U.height,U.depth,0,ct,ot,U.data);else if(M.isData3DTexture)pt?(lt&&e.texStorage3D(32879,gt,P,U.width,U.height,U.depth),e.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ct,ot,U.data)):e.texImage3D(32879,0,P,U.width,U.height,U.depth,0,ct,ot,U.data);else if(M.isFramebufferTexture){if(lt)if(pt)e.texStorage2D(3553,gt,P,U.width,U.height);else{let K=U.width,_t=U.height;for(let Dt=0;Dt<gt;Dt++)e.texImage2D(3553,Dt,P,K,_t,0,ct,ot,null),K>>=1,_t>>=1}}else if(et.length>0&&ut){pt&&lt&&e.texStorage2D(3553,gt,P,et[0].width,et[0].height);for(let K=0,_t=et.length;K<_t;K++)it=et[K],pt?e.texSubImage2D(3553,K,0,0,ct,ot,it):e.texImage2D(3553,K,P,ct,ot,it);M.generateMipmaps=!1}else pt?(lt&&e.texStorage2D(3553,gt,P,U.width,U.height),e.texSubImage2D(3553,0,0,0,ct,ot,U)):e.texImage2D(3553,0,P,ct,ot,U);A(M,ut)&&C($),st.__currentVersion=st.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Mt(E,M,H){if(M.image.length!==6)return;let $=Ut(E,M),tt=M.source;if(e.activeTexture(33984+H),e.bindTexture(34067,E.__webglTexture),tt.version!==tt.__currentVersion||$===!0){o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);let st=M.isCompressedTexture||M.image[0].isCompressedTexture,yt=M.image[0]&&M.image[0].isDataTexture,U=[];for(let K=0;K<6;K++)!st&&!yt?U[K]=T(M.image[K],!1,!0,c):U[K]=yt?M.image[K].image:M.image[K],U[K]=pi(M,U[K]);let ut=U[0],ct=v(ut)||r,ot=s.convert(M.format,M.encoding),P=s.convert(M.type),it=x(M.internalFormat,ot,P,M.encoding),et=r&&M.isVideoTexture!==!0,pt=tt.__currentVersion===void 0||$===!0,lt=b(M,ut,ct);W(34067,M,ct);let gt;if(st){et&&pt&&e.texStorage2D(34067,lt,it,ut.width,ut.height);for(let K=0;K<6;K++){gt=U[K].mipmaps;for(let _t=0;_t<gt.length;_t++){let Dt=gt[_t];M.format!==Qe?ot!==null?et?e.compressedTexSubImage2D(34069+K,_t,0,0,Dt.width,Dt.height,ot,Dt.data):e.compressedTexImage2D(34069+K,_t,it,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?e.texSubImage2D(34069+K,_t,0,0,Dt.width,Dt.height,ot,P,Dt.data):e.texImage2D(34069+K,_t,it,Dt.width,Dt.height,0,ot,P,Dt.data)}}}else{gt=M.mipmaps,et&&pt&&(gt.length>0&&lt++,e.texStorage2D(34067,lt,it,U[0].width,U[0].height));for(let K=0;K<6;K++)if(yt){et?e.texSubImage2D(34069+K,0,0,0,U[K].width,U[K].height,ot,P,U[K].data):e.texImage2D(34069+K,0,it,U[K].width,U[K].height,0,ot,P,U[K].data);for(let _t=0;_t<gt.length;_t++){let It=gt[_t].image[K].image;et?e.texSubImage2D(34069+K,_t+1,0,0,It.width,It.height,ot,P,It.data):e.texImage2D(34069+K,_t+1,it,It.width,It.height,0,ot,P,It.data)}}else{et?e.texSubImage2D(34069+K,0,0,0,ot,P,U[K]):e.texImage2D(34069+K,0,it,ot,P,U[K]);for(let _t=0;_t<gt.length;_t++){let Dt=gt[_t];et?e.texSubImage2D(34069+K,_t+1,0,0,ot,P,Dt.image[K]):e.texImage2D(34069+K,_t+1,it,ot,P,Dt.image[K])}}}A(M,ct)&&C(34067),tt.__currentVersion=tt.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function at(E,M,H,$,tt){let st=s.convert(H.format,H.encoding),yt=s.convert(H.type),U=x(H.internalFormat,st,yt,H.encoding);i.get(M).__hasExternalTextures||(tt===32879||tt===35866?e.texImage3D(tt,0,U,M.width,M.height,M.depth,0,st,yt,null):e.texImage2D(tt,0,U,M.width,M.height,0,st,yt,null)),e.bindFramebuffer(36160,E),Ot(M)?f.framebufferTexture2DMultisampleEXT(36160,$,tt,i.get(H).__webglTexture,0,ne(M)):o.framebufferTexture2D(36160,$,tt,i.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(E,M,H){if(o.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(H||Ot(M)){let tt=M.depthTexture;tt&&tt.isDepthTexture&&(tt.type===rn?$=36012:tt.type===sn&&($=33190));let st=ne(M);Ot(M)?f.renderbufferStorageMultisampleEXT(36161,st,$,M.width,M.height):o.renderbufferStorageMultisample(36161,st,$,M.width,M.height)}else o.renderbufferStorage(36161,$,M.width,M.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){let $=ne(M);H&&Ot(M)===!1?o.renderbufferStorageMultisample(36161,$,35056,M.width,M.height):Ot(M)?f.renderbufferStorageMultisampleEXT(36161,$,35056,M.width,M.height):o.renderbufferStorage(36161,34041,M.width,M.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{let $=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let tt=0;tt<$.length;tt++){let st=$[tt],yt=s.convert(st.format,st.encoding),U=s.convert(st.type),ut=x(st.internalFormat,yt,U,st.encoding),ct=ne(M);H&&Ot(M)===!1?o.renderbufferStorageMultisample(36161,ct,ut,M.width,M.height):Ot(M)?f.renderbufferStorageMultisampleEXT(36161,ct,ut,M.width,M.height):o.renderbufferStorage(36161,ut,M.width,M.height)}}o.bindRenderbuffer(36161,null)}function At(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let $=i.get(M.depthTexture).__webglTexture,tt=ne(M);if(M.depthTexture.format===on)Ot(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,tt):o.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===es)Ot(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,tt):o.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function xt(E){let M=i.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");At(M.__webglFramebuffer,E)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=o.createRenderbuffer(),zt(M.__webglDepthbuffer[$],E,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=o.createRenderbuffer(),zt(M.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function oe(E,M,H){let $=i.get(E);M!==void 0&&at($.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&xt(E)}function be(E){let M=E.texture,H=i.get(E),$=i.get(M);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=M.version,a.memory.textures++);let tt=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,yt=v(E)||r;if(tt){H.__webglFramebuffer=[];for(let U=0;U<6;U++)H.__webglFramebuffer[U]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),st)if(n.drawBuffers){let U=E.texture;for(let ut=0,ct=U.length;ut<ct;ut++){let ot=i.get(U[ut]);ot.__webglTexture===void 0&&(ot.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&E.samples>0&&Ot(E)===!1){let U=st?M:[M];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let ut=0;ut<U.length;ut++){let ct=U[ut];H.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[ut]);let ot=s.convert(ct.format,ct.encoding),P=s.convert(ct.type),it=x(ct.internalFormat,ot,P,ct.encoding),et=ne(E);o.renderbufferStorageMultisample(36161,et,it,E.width,E.height),o.framebufferRenderbuffer(36160,36064+ut,36161,H.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(tt){e.bindTexture(34067,$.__webglTexture),W(34067,M,yt);for(let U=0;U<6;U++)at(H.__webglFramebuffer[U],E,M,36064,34069+U);A(M,yt)&&C(34067),e.unbindTexture()}else if(st){let U=E.texture;for(let ut=0,ct=U.length;ut<ct;ut++){let ot=U[ut],P=i.get(ot);e.bindTexture(3553,P.__webglTexture),W(3553,ot,yt),at(H.__webglFramebuffer,E,ot,36064+ut,3553),A(ot,yt)&&C(3553)}e.unbindTexture()}else{let U=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(r?U=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(U,$.__webglTexture),W(U,M,yt),at(H.__webglFramebuffer,E,M,36064,U),A(M,yt)&&C(U),e.unbindTexture()}E.depthBuffer&&xt(E)}function De(E){let M=v(E)||r,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0,tt=H.length;$<tt;$++){let st=H[$];if(A(st,M)){let yt=E.isWebGLCubeRenderTarget?34067:3553,U=i.get(st).__webglTexture;e.bindTexture(yt,U),C(yt),e.unbindTexture()}}}function ii(E){if(r&&E.samples>0&&Ot(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,$=E.height,tt=16384,st=[],yt=E.stencilBuffer?33306:36096,U=i.get(E),ut=E.isWebGLMultipleRenderTargets===!0;if(ut)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,U.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,U.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){st.push(36064+ct),E.depthBuffer&&st.push(yt);let ot=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(ot===!1&&(E.depthBuffer&&(tt|=256),E.stencilBuffer&&(tt|=1024)),ut&&o.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[ct]),ot===!0&&(o.invalidateFramebuffer(36008,[yt]),o.invalidateFramebuffer(36009,[yt])),ut){let P=i.get(M[ct]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,P,0)}o.blitFramebuffer(0,0,H,$,0,0,H,$,tt,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ut)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ct,36161,U.__webglColorRenderbuffer[ct]);let ot=i.get(M[ct]).__webglTexture;e.bindFramebuffer(36160,U.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ct,3553,ot,0)}e.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function ne(E){return Math.min(u,E.samples)}function Ot(E){let M=i.get(E);return r&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function di(E){let M=a.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function pi(E,M){let H=E.encoding,$=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===to||H!==hn&&(H===kt?r===!1?t.has("EXT_sRGB")===!0&&$===Qe?(E.format=to,E.minFilter=Ue,E.generateMipmaps=!1):M=Ar.sRGBToLinear(M):($!==Qe||tt!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=oe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ii,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ot}function $g(o,t,e){let i=e.isWebGL2;function n(s,a=null){let r;if(s===cn)return 5121;if(s===ef)return 32819;if(s===nf)return 32820;if(s===Qu)return 5120;if(s===ju)return 5122;if(s===eh)return 5123;if(s===tf)return 5124;if(s===sn)return 5125;if(s===rn)return 5126;if(s===Rs)return i?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===sf)return 6406;if(s===Qe)return 6408;if(s===af)return 6409;if(s===of)return 6410;if(s===on)return 6402;if(s===es)return 34041;if(s===lf)return 6403;if(s===rf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===to)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===cf)return 36244;if(s===hf)return 33319;if(s===uf)return 33320;if(s===ff)return 36249;if(s===ga||s===_a||s===xa||s===ya)if(a===kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kl||s===Vl||s===Hl||s===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===df)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wl||s===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Wl)return a===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===ql)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xl||s===Yl||s===Jl||s===Zl||s===$l||s===Kl||s===Ql||s===jl||s===tc||s===ec||s===ic||s===nc||s===sc||s===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Xl)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yl)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jl)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zl)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$l)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kl)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ql)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jl)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ec)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ic)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rc)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===ac)return a===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$n?i?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}var uo=class extends ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jn=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(r!==null&&(n=e.getPose(t.targetRaySpace,i),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Kg))),c&&t.hand){a=!0;for(let d of t.hand.values()){let p=e.getJointPose(d,i);if(c.joints[d.jointName]===void 0){let w=new Jn;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[d.jointName]=w,c.add(w)}let _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}},fo=class extends Ae{constructor(t,e,i,n,s,a,r,l,c,h){if(h=h!==void 0?h:on,h!==on&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===on&&(i=sn),i===void 0&&h===es&&(i=$n),super(null,n,s,a,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1}},po=class extends ki{constructor(t,e){super();let i=this,n=null,s=1,a=null,r="local-floor",l=null,c=null,h=null,u=null,f=null,m=null,g=e.getContextAttributes(),d=null,p=null,_=[],w=new Map,T=new ge;T.layers.enable(1),T.viewport=new ee;let v=new ge;v.layers.enable(2),v.viewport=new ee;let y=[T,v],A=new uo;A.layers.enable(1),A.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=_[N];return V===void 0&&(V=new Cs,_[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=_[N];return V===void 0&&(V=new Cs,_[N]=V),V.getGripSpace()},this.getHand=function(N){let V=_[N];return V===void 0&&(V=new Cs,_[N]=V),V.getHandSpace()};function b(N){let V=w.get(N.inputSource);V!==void 0&&V.dispatchEvent({type:N.type,data:N.inputSource})}function L(){n.removeEventListener("select",b),n.removeEventListener("selectstart",b),n.removeEventListener("selectend",b),n.removeEventListener("squeeze",b),n.removeEventListener("squeezestart",b),n.removeEventListener("squeezeend",b),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",I),w.forEach(function(N,V){N!==void 0&&N.disconnect(V)}),w.clear(),C=null,x=null,t.setRenderTarget(d),f=null,u=null,h=null,n=null,p=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",b),n.addEventListener("selectstart",b),n.addEventListener("selectend",b),n.addEventListener("squeeze",b),n.addEventListener("squeezestart",b),n.addEventListener("squeezeend",b),n.addEventListener("end",L),n.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let V={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,V),n.updateRenderState({baseLayer:f}),p=new ce(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:cn,encoding:t.outputEncoding})}else{let V=null,Q=null,J=null;g.depth&&(J=g.stencil?35056:33190,V=g.stencil?es:on,Q=g.stencil?$n:sn);let j={colorFormat:t.outputEncoding===kt?35907:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(j),n.updateRenderState({layers:[u]}),p=new ce(u.textureWidth,u.textureHeight,{format:Qe,type:cn,depthTexture:new fo(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let rt=t.properties.get(p);rt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(r),q.setContext(n),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(N){let V=n.inputSources;for(let Q=0;Q<V.length;Q++){let J=V[Q].handedness==="right"?1:0;w.set(V[Q],_[J])}for(let Q=0;Q<N.removed.length;Q++){let J=N.removed[Q],j=w.get(J);j&&(j.dispatchEvent({type:"disconnected",data:J}),w.delete(J))}for(let Q=0;Q<N.added.length;Q++){let J=N.added[Q],j=w.get(J);j&&j.dispatchEvent({type:"connected",data:J})}}let Y=new D,Z=new D;function R(N,V,Q){Y.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(Q.matrixWorld);let J=Y.distanceTo(Z),j=V.projectionMatrix.elements,rt=Q.projectionMatrix.elements,dt=j[14]/(j[10]-1),W=j[14]/(j[10]+1),Ut=(j[9]+1)/j[5],wt=(j[9]-1)/j[5],Mt=(j[8]-1)/j[0],at=(rt[8]+1)/rt[0],zt=dt*Mt,At=dt*at,xt=J/(-Mt+at),oe=xt*-Mt;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(oe),N.translateZ(xt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let be=dt+xt,De=W+xt,ii=zt-oe,ne=At+(J-oe),Ot=Ut*W/De*be,di=wt*W/De*be;N.projectionMatrix.makePerspective(ii,ne,Ot,di,be,De)}function k(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;A.near=v.near=T.near=N.near,A.far=v.far=T.far=N.far,(C!==A.near||x!==A.far)&&(n.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,x=A.far);let V=N.parent,Q=A.cameras;k(A,V);for(let j=0;j<Q.length;j++)k(Q[j],V);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),N.position.copy(A.position),N.quaternion.copy(A.quaternion),N.scale.copy(A.scale),N.matrix.copy(A.matrix),N.matrixWorld.copy(A.matrixWorld);let J=N.children;for(let j=0,rt=J.length;j<rt;j++)J[j].updateMatrixWorld(!0);Q.length===2?R(A,T,v):A.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){u!==null&&(u.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let z=null;function G(N,V){if(c=V.getViewerPose(l||a),m=V,c!==null){let J=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let j=!1;J.length!==A.cameras.length&&(A.cameras.length=0,j=!0);for(let rt=0;rt<J.length;rt++){let dt=J[rt],W=null;if(f!==null)W=f.getViewport(dt);else{let wt=h.getViewSubImage(u,dt);W=wt.viewport,rt===0&&(t.setRenderTargetTextures(p,wt.colorTexture,u.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(p))}let Ut=y[rt];Ut===void 0&&(Ut=new ge,Ut.layers.enable(rt),Ut.viewport=new ee,y[rt]=Ut),Ut.matrix.fromArray(dt.transform.matrix),Ut.projectionMatrix.fromArray(dt.projectionMatrix),Ut.viewport.set(W.x,W.y,W.width,W.height),rt===0&&A.matrix.copy(Ut.matrix),j===!0&&A.cameras.push(Ut)}}let Q=n.inputSources;for(let J=0;J<_.length;J++){let j=Q[J],rt=w.get(j);rt!==void 0&&rt.update(j,V,l||a)}z&&z(N,V),m=null}let q=new sh;q.setAnimationLoop(G),this.setAnimationLoop=function(N){z=N},this.dispose=function(){}}};function Qg(o,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,_,w,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(d,p):p.isMeshToonMaterial?(n(d,p),h(d,p)):p.isMeshPhongMaterial?(n(d,p),c(d,p)):p.isMeshStandardMaterial?(n(d,p),u(d,p),p.isMeshPhysicalMaterial&&f(d,p,T)):p.isMeshMatcapMaterial?(n(d,p),m(d,p)):p.isMeshDepthMaterial?n(d,p):p.isMeshDistanceMaterial?(n(d,p),g(d,p)):p.isMeshNormalMaterial?n(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?r(d,p,_,w):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===je&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===je&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;let v=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.iridescenceMap?w=p.iridescenceMap:p.iridescenceThicknessMap?w=p.iridescenceThicknessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uv2Transform.value.copy(T.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function r(d,p,_,w){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=w*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uvTransform.value.copy(T.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===je&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function jg(){let o=Ls("canvas");return o.style.display="block",o}function Uo(o={}){this.isWebGLRenderer=!0;let t=o.canvas!==void 0?o.canvas:jg(),e=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,f=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hn,this.physicallyCorrectLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let d=this,p=!1,_=0,w=0,T=null,v=-1,y=null,A=new ee,C=new ee,x=null,b=t.width,L=t.height,I=1,Y=null,Z=null,R=new ee(0,0,b,L),k=new ee(0,0,b,L),z=!1,G=new Ir,q=!1,N=!1,V=null,Q=new Zt,J=new ht,j=new D,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return T===null?I:1}let W=e;function Ut(S,F){for(let B=0;B<S.length;B++){let O=S[B],X=t.getContext(O,F);if(X!==null)return X}return null}try{let S={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",P,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",et,!1),W===null){let F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),W=Ut(F,S),W===null)throw Ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let wt,Mt,at,zt,At,xt,oe,be,De,ii,ne,Ot,di,pi,E,M,H,$,tt,st,yt,U,ut;function ct(){wt=new vm(W),Mt=new pm(W,wt,o),wt.init(Mt),U=new $g(W,wt,Mt),at=new Jg(W,wt,Mt),zt=new bm(W),At=new Og,xt=new Zg(W,wt,at,At,Mt,U,zt),oe=new gm(d),be=new ym(d),De=new zf(W,Mt),ut=new fm(W,wt,De,Mt),ii=new wm(W,De,zt,ut),ne=new Em(W,ii,De,zt),tt=new Am(W,Mt,xt),M=new mm(At),Ot=new zg(d,oe,be,wt,Mt,ut,M),di=new Qg(d,At),pi=new Bg,E=new Wg(wt,Mt),$=new um(d,oe,at,ne,h,a),H=new Yg(d,ne,Mt),st=new dm(W,wt,zt,Mt),yt=new Mm(W,wt,zt,Mt),zt.programs=Ot.programs,d.capabilities=Mt,d.extensions=wt,d.properties=At,d.renderLists=pi,d.shadowMap=H,d.state=at,d.info=zt}ct();let ot=new po(d,W);this.xr=ot,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let S=wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(S){S!==void 0&&(I=S,this.setSize(b,L,!1))},this.getSize=function(S){return S.set(b,L)},this.setSize=function(S,F,B){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=S,L=F,t.width=Math.floor(S*I),t.height=Math.floor(F*I),B!==!1&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(b*I,L*I).floor()},this.setDrawingBufferSize=function(S,F,B){b=S,L=F,I=B,t.width=Math.floor(S*B),t.height=Math.floor(F*B),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(R)},this.setViewport=function(S,F,B,O){S.isVector4?R.set(S.x,S.y,S.z,S.w):R.set(S,F,B,O),at.viewport(A.copy(R).multiplyScalar(I).floor())},this.getScissor=function(S){return S.copy(k)},this.setScissor=function(S,F,B,O){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,F,B,O),at.scissor(C.copy(k).multiplyScalar(I).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(S){at.setScissorTest(z=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(S=!0,F=!0,B=!0){let O=0;S&&(O|=16384),F&&(O|=256),B&&(O|=1024),W.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",P,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",et,!1),pi.dispose(),E.dispose(),At.dispose(),oe.dispose(),be.dispose(),ne.dispose(),ut.dispose(),Ot.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Dt),ot.removeEventListener("sessionend",It),V&&(V.dispose(),V=null),pe.stop()};function P(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let S=zt.autoReset,F=H.enabled,B=H.autoUpdate,O=H.needsUpdate,X=H.type;ct(),zt.autoReset=S,H.enabled=F,H.autoUpdate=B,H.needsUpdate=O,H.type=X}function et(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pt(S){let F=S.target;F.removeEventListener("dispose",pt),lt(F)}function lt(S){gt(S),At.remove(S)}function gt(S){let F=At.get(S).programs;F!==void 0&&(F.forEach(function(B){Ot.releaseProgram(B)}),S.isShaderMaterial&&Ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,B,O,X,mt){F===null&&(F=rt);let vt=X.isMesh&&X.matrixWorld.determinant()<0,St=xu(S,F,B,O,X);at.setMaterial(O,vt);let bt=B.index,Ft=B.attributes.position;if(bt===null){if(Ft===void 0||Ft.count===0)return}else if(bt.count===0)return;let Ct=1;O.wireframe===!0&&(bt=ii.getWireframeAttribute(B),Ct=2),ut.setup(X,O,St,B,bt);let Pt,Ht=st;bt!==null&&(Pt=De.get(bt),Ht=yt,Ht.setIndex(Pt));let Ki=bt!==null?bt.count:Ft.count,Pn=B.drawRange.start*Ct,Rn=B.drawRange.count*Ct,si=mt!==null?mt.start*Ct:0,Rt=mt!==null?mt.count*Ct:1/0,Ln=Math.max(Pn,si),qt=Math.min(Ki,Pn+Rn,si+Rt)-1,ri=Math.max(0,qt-Ln+1);if(ri!==0){if(X.isMesh)O.wireframe===!0?(at.setLineWidth(O.wireframeLinewidth*dt()),Ht.setMode(1)):Ht.setMode(4);else if(X.isLine){let Li=O.linewidth;Li===void 0&&(Li=1),at.setLineWidth(Li*dt()),X.isLineSegments?Ht.setMode(1):X.isLineLoop?Ht.setMode(2):Ht.setMode(3)}else X.isPoints?Ht.setMode(0):X.isSprite&&Ht.setMode(4);if(X.isInstancedMesh)Ht.renderInstances(Ln,ri,X.count);else if(B.isInstancedBufferGeometry){let Li=Math.min(B.instanceCount,B._maxInstanceCount);Ht.renderInstances(Ln,ri,Li)}else Ht.render(Ln,ri)}},this.compile=function(S,F){f=E.get(S),f.init(),g.push(f),S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(d.physicallyCorrectLights),S.traverse(function(B){let O=B.material;if(O)if(Array.isArray(O))for(let X=0;X<O.length;X++){let mt=O[X];da(mt,S,B)}else da(O,S,B)}),g.pop(),f=null};let K=null;function _t(S){K&&K(S)}function Dt(){pe.stop()}function It(){pe.start()}let pe=new sh;pe.setAnimationLoop(_t),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(S){K=S,ot.setAnimationLoop(S),S===null?pe.stop():pe.start()},ot.addEventListener("sessionstart",Dt),ot.addEventListener("sessionend",It),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(F),F=ot.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,F,T),f=E.get(S,g.length),f.init(),g.push(f),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G.setFromProjectionMatrix(Q),N=this.localClippingEnabled,q=M.init(this.clippingPlanes,N,F),u=pi.get(S,m.length),u.init(),m.push(u),ni(S,F,0,d.sortObjects),u.finish(),d.sortObjects===!0&&u.sort(Y,Z),q===!0&&M.beginShadows();let B=f.state.shadowsArray;if(H.render(B,S,F),q===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(u,S),f.setupLights(d.physicallyCorrectLights),F.isArrayCamera){let O=F.cameras;for(let X=0,mt=O.length;X<mt;X++){let vt=O[X];Ll(u,S,vt,vt.viewport)}}else Ll(u,S,F);T!==null&&(xt.updateMultisampleRenderTarget(T),xt.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(d,S,F),ut.resetDefaultState(),v=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function ni(S,F,B,O){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){O&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let vt=ne.update(S),St=S.material;St.visible&&u.push(S,vt,St,B,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==zt.render.frame&&(S.skeleton.update(),S.skeleton.frame=zt.render.frame),!S.frustumCulled||G.intersectsObject(S))){O&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let vt=ne.update(S),St=S.material;if(Array.isArray(St)){let bt=vt.groups;for(let Ft=0,Ct=bt.length;Ft<Ct;Ft++){let Pt=bt[Ft],Ht=St[Pt.materialIndex];Ht&&Ht.visible&&u.push(S,vt,Ht,B,j.z,Pt)}}else St.visible&&u.push(S,vt,St,B,j.z,null)}}let mt=S.children;for(let vt=0,St=mt.length;vt<St;vt++)ni(mt[vt],F,B,O)}function Ll(S,F,B,O){let X=S.opaque,mt=S.transmissive,vt=S.transparent;f.setupLightsView(B),mt.length>0&&gu(X,F,B),O&&at.viewport(A.copy(O)),X.length>0&&js(X,F,B),mt.length>0&&js(mt,F,B),vt.length>0&&js(vt,F,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function gu(S,F,B){let O=Mt.isWebGL2;V===null&&(V=new ce(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?Rs:cn,minFilter:Yr,samples:O&&s===!0?4:0})),d.getDrawingBufferSize(J),O?V.setSize(J.x,J.y):V.setSize(eo(J.x),eo(J.y));let X=d.getRenderTarget();d.setRenderTarget(V),d.clear();let mt=d.toneMapping;d.toneMapping=Mi,js(S,F,B),d.toneMapping=mt,xt.updateMultisampleRenderTarget(V),xt.updateRenderTargetMipmap(V),d.setRenderTarget(X)}function js(S,F,B){let O=F.isScene===!0?F.overrideMaterial:null;for(let X=0,mt=S.length;X<mt;X++){let vt=S[X],St=vt.object,bt=vt.geometry,Ft=O===null?vt.material:O,Ct=vt.group;St.layers.test(B.layers)&&_u(St,F,B,bt,Ft,Ct)}}function _u(S,F,B,O,X,mt){S.onBeforeRender(d,F,B,O,X,mt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(d,F,B,O,S,mt),X.transparent===!0&&X.side===Qn?(X.side=je,X.needsUpdate=!0,d.renderBufferDirect(B,F,O,X,S,mt),X.side=Ps,X.needsUpdate=!0,d.renderBufferDirect(B,F,O,X,S,mt),X.side=Qn):d.renderBufferDirect(B,F,O,X,S,mt),S.onAfterRender(d,F,B,O,X,mt)}function da(S,F,B){F.isScene!==!0&&(F=rt);let O=At.get(S),X=f.state.lights,mt=f.state.shadowsArray,vt=X.state.version,St=Ot.getParameters(S,X.state,mt,F,B),bt=Ot.getProgramCacheKey(St),Ft=O.programs;O.environment=S.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(S.isMeshStandardMaterial?be:oe).get(S.envMap||O.environment),Ft===void 0&&(S.addEventListener("dispose",pt),Ft=new Map,O.programs=Ft);let Ct=Ft.get(bt);if(Ct!==void 0){if(O.currentProgram===Ct&&O.lightsStateVersion===vt)return Dl(S,St),Ct}else St.uniforms=Ot.getUniforms(S),S.onBuild(B,St,d),S.onBeforeCompile(St,d),Ct=Ot.acquireProgram(St,bt),Ft.set(bt,Ct),O.uniforms=St.uniforms;let Pt=O.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=M.uniform),Dl(S,St),O.needsLights=vu(S),O.lightsStateVersion=vt,O.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.directionalShadowMap.value=X.state.directionalShadowMap,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotShadowMap.value=X.state.spotShadowMap,Pt.spotShadowMatrix.value=X.state.spotShadowMatrix,Pt.pointShadowMap.value=X.state.pointShadowMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix);let Ht=Ct.getUniforms(),Ki=Kn.seqWithValue(Ht.seq,Pt);return O.currentProgram=Ct,O.uniformsList=Ki,Ct}function Dl(S,F){let B=At.get(S);B.outputEncoding=F.outputEncoding,B.instancing=F.instancing,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function xu(S,F,B,O,X){F.isScene!==!0&&(F=rt),xt.resetTextureUnits();let mt=F.fog,vt=O.isMeshStandardMaterial?F.environment:null,St=T===null?d.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:hn,bt=(O.isMeshStandardMaterial?be:oe).get(O.envMap||vt),Ft=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!O.normalMap&&!!B.attributes.tangent,Pt=!!B.morphAttributes.position,Ht=!!B.morphAttributes.normal,Ki=!!B.morphAttributes.color,Pn=O.toneMapped?d.toneMapping:Mi,Rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,si=Rn!==void 0?Rn.length:0,Rt=At.get(O),Ln=f.state.lights;if(q===!0&&(N===!0||S!==y)){let ai=S===y&&O.id===v;M.setState(O,S,ai)}let qt=!1;O.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ln.state.version||Rt.outputEncoding!==St||X.isInstancedMesh&&Rt.instancing===!1||!X.isInstancedMesh&&Rt.instancing===!0||X.isSkinnedMesh&&Rt.skinning===!1||!X.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==bt||O.fog===!0&&Rt.fog!==mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==M.numPlanes||Rt.numIntersection!==M.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==Ct||Rt.morphTargets!==Pt||Rt.morphNormals!==Ht||Rt.morphColors!==Ki||Rt.toneMapping!==Pn||Mt.isWebGL2===!0&&Rt.morphTargetsCount!==si)&&(qt=!0):(qt=!0,Rt.__version=O.version);let ri=Rt.currentProgram;qt===!0&&(ri=da(O,F,X));let Li=!1,ws=!1,pa=!1,me=ri.getUniforms(),Ms=Rt.uniforms;if(at.useProgram(ri.program)&&(Li=!0,ws=!0,pa=!0),O.id!==v&&(v=O.id,ws=!0),Li||y!==S){if(me.setValue(W,"projectionMatrix",S.projectionMatrix),Mt.logarithmicDepthBuffer&&me.setValue(W,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),y!==S&&(y=S,ws=!0,pa=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){let ai=me.map.cameraPosition;ai!==void 0&&ai.setValue(W,j.setFromMatrixPosition(S.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&me.setValue(W,"isOrthographic",S.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||X.isSkinnedMesh)&&me.setValue(W,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){me.setOptional(W,X,"bindMatrix"),me.setOptional(W,X,"bindMatrixInverse");let ai=X.skeleton;ai&&(Mt.floatVertexTextures?(ai.boneTexture===null&&ai.computeBoneTexture(),me.setValue(W,"boneTexture",ai.boneTexture,xt),me.setValue(W,"boneTextureSize",ai.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ma=B.morphAttributes;return(ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0&&Mt.isWebGL2===!0)&&tt.update(X,B,O,ri),(ws||Rt.receiveShadow!==X.receiveShadow)&&(Rt.receiveShadow=X.receiveShadow,me.setValue(W,"receiveShadow",X.receiveShadow)),ws&&(me.setValue(W,"toneMappingExposure",d.toneMappingExposure),Rt.needsLights&&yu(Ms,pa),mt&&O.fog===!0&&di.refreshFogUniforms(Ms,mt),di.refreshMaterialUniforms(Ms,O,I,L,V),Kn.upload(W,Rt.uniformsList,Ms,xt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Kn.upload(W,Rt.uniformsList,Ms,xt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&me.setValue(W,"center",X.center),me.setValue(W,"modelViewMatrix",X.modelViewMatrix),me.setValue(W,"normalMatrix",X.normalMatrix),me.setValue(W,"modelMatrix",X.matrixWorld),ri}function yu(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function vu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,F,B){At.get(S.texture).__webglTexture=F,At.get(S.depthTexture).__webglTexture=B;let O=At.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=B===void 0,O.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){let B=At.get(S);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,B=0){T=S,_=F,w=B;let O=!0;if(S){let bt=At.get(S);bt.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(36160,null),O=!1):bt.__webglFramebuffer===void 0?xt.setupRenderTarget(S):bt.__hasExternalTextures&&xt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture)}let X=null,mt=!1,vt=!1;if(S){let bt=S.texture;(bt.isData3DTexture||bt.isDataArrayTexture)&&(vt=!0);let Ft=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Ft[F],mt=!0):Mt.isWebGL2&&S.samples>0&&xt.useMultisampledRTT(S)===!1?X=At.get(S).__webglMultisampledFramebuffer:X=Ft,A.copy(S.viewport),C.copy(S.scissor),x=S.scissorTest}else A.copy(R).multiplyScalar(I).floor(),C.copy(k).multiplyScalar(I).floor(),x=z;if(at.bindFramebuffer(36160,X)&&Mt.drawBuffers&&O&&at.drawBuffers(S,X),at.viewport(A),at.scissor(C),at.setScissorTest(x),mt){let bt=At.get(S.texture);W.framebufferTexture2D(36160,36064,34069+F,bt.__webglTexture,B)}else if(vt){let bt=At.get(S.texture),Ft=F||0;W.framebufferTextureLayer(36160,36064,bt.__webglTexture,B||0,Ft)}v=-1},this.readRenderTargetPixels=function(S,F,B,O,X,mt,vt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){at.bindFramebuffer(36160,St);try{let bt=S.texture,Ft=bt.format,Ct=bt.type;if(Ft!==Qe&&U.convert(Ft)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Pt=Ct===Rs&&(wt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ct!==cn&&U.convert(Ct)!==W.getParameter(35738)&&!(Ct===rn&&(Mt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-O&&B>=0&&B<=S.height-X&&W.readPixels(F,B,O,X,U.convert(Ft),U.convert(Ct),mt)}finally{let bt=T!==null?At.get(T).__webglFramebuffer:null;at.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(S,F,B=0){let O=Math.pow(2,-B),X=Math.floor(F.image.width*O),mt=Math.floor(F.image.height*O);xt.setTexture2D(F,0),W.copyTexSubImage2D(3553,B,0,0,S.x,S.y,X,mt),at.unbindTexture()},this.copyTextureToTexture=function(S,F,B,O=0){let X=F.image.width,mt=F.image.height,vt=U.convert(B.format),St=U.convert(B.type);xt.setTexture2D(B,0),W.pixelStorei(37440,B.flipY),W.pixelStorei(37441,B.premultiplyAlpha),W.pixelStorei(3317,B.unpackAlignment),F.isDataTexture?W.texSubImage2D(3553,O,S.x,S.y,X,mt,vt,St,F.image.data):F.isCompressedTexture?W.compressedTexSubImage2D(3553,O,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,vt,F.mipmaps[0].data):W.texSubImage2D(3553,O,S.x,S.y,vt,St,F.image),O===0&&B.generateMipmaps&&W.generateMipmap(3553),at.unbindTexture()},this.copyTextureToTexture3D=function(S,F,B,O,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=S.max.x-S.min.x+1,vt=S.max.y-S.min.y+1,St=S.max.z-S.min.z+1,bt=U.convert(O.format),Ft=U.convert(O.type),Ct;if(O.isData3DTexture)xt.setTexture3D(O,0),Ct=32879;else if(O.isDataArrayTexture)xt.setTexture2DArray(O,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,O.flipY),W.pixelStorei(37441,O.premultiplyAlpha),W.pixelStorei(3317,O.unpackAlignment);let Pt=W.getParameter(3314),Ht=W.getParameter(32878),Ki=W.getParameter(3316),Pn=W.getParameter(3315),Rn=W.getParameter(32877),si=B.isCompressedTexture?B.mipmaps[0]:B.image;W.pixelStorei(3314,si.width),W.pixelStorei(32878,si.height),W.pixelStorei(3316,S.min.x),W.pixelStorei(3315,S.min.y),W.pixelStorei(32877,S.min.z),B.isDataTexture||B.isData3DTexture?W.texSubImage3D(Ct,X,F.x,F.y,F.z,mt,vt,St,bt,Ft,si.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ct,X,F.x,F.y,F.z,mt,vt,St,bt,si.data)):W.texSubImage3D(Ct,X,F.x,F.y,F.z,mt,vt,St,bt,Ft,si),W.pixelStorei(3314,Pt),W.pixelStorei(32878,Ht),W.pixelStorei(3316,Ki),W.pixelStorei(3315,Pn),W.pixelStorei(32877,Rn),X===0&&O.generateMipmaps&&W.generateMipmap(Ct),at.unbindTexture()},this.initTexture=function(S){xt.setTexture2D(S,0),at.unbindTexture()},this.resetState=function(){_=0,w=0,T=null,at.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var mo=class extends Uo{};mo.prototype.isWebGL1Renderer=!0;var Nr=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}};var go=class extends $t{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};var Br=class extends $t{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var Ur=class extends $t{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xc=new Zt,_o=new Ds,vr=new is,wr=new D,kr=class extends Ee{constructor(t=new he,e=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(n),vr.radius+=s,t.ray.intersectsSphere(vr)===!1)return;Xc.copy(n).invert(),_o.copy(t.ray).applyMatrix4(Xc);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,d=m;g<d;g++){let p=c.getX(g);wr.fromBufferAttribute(u,p),Yc(wr,p,l,n,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,d=m;g<d;g++)wr.fromBufferAttribute(u,g),Yc(wr,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}};function Yc(o,t,e,i,n,s,a){let r=_o.distanceSqToPoint(o);if(r<e){let l=new D;_o.closestPointToPoint(o,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,object:a})}}function ko(){let o=0,t=0,e=0,i=0;function n(s,a,r,l){o=s,t=r,e=-3*s+3*a-2*r-l,i=2*s-2*a+r+l}return{initCatmullRom:function(s,a,r,l,c){n(a,r,c*(r-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,r,l,c,h,u){let f=(a-s)/c-(r-s)/(c+h)+(r-a)/h,m=(r-a)/h-(l-a)/(h+u)+(l-r)/u;f*=h,m*=h,n(a,r,f,m)},calc:function(s){let a=s*s,r=a*s;return o+t*s+e*a+i*r}}}var V_=new D,H_=new ko,G_=new ko,W_=new ko;var q_=new D,X_=new D,Y_=new D,J_=new ke;var xo=class extends $t{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ft(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Fs=class extends Kt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vr=class extends $t{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yo=class extends Vr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},vo=class extends $t{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wo=class extends $t{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mo=class extends $t{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},bo=class extends $t{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},So=class extends $t{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ft(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},To=class extends Br{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}},t0={ShadowMaterial:xo,SpriteMaterial:go,RawShaderMaterial:Fs,ShaderMaterial:Kt,PointsMaterial:Ur,MeshPhysicalMaterial:yo,MeshStandardMaterial:Vr,MeshPhongMaterial:vo,MeshToonMaterial:wo,MeshNormalMaterial:Mo,MeshLambertMaterial:bo,MeshDepthMaterial:zr,MeshDistanceMaterial:Or,MeshBasicMaterial:bi,MeshMatcapMaterial:So,LineDashedMaterial:To,LineBasicMaterial:Br,Material:$t};$t.fromType=function(o){return new t0[o]};var Jt={arraySlice:function(o,t,e){return Jt.isTypedArray(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)},convertArray:function(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function t(n,s){return o[n]-o[s]}let e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i},sortedArray:function(o,t,e){let i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){let r=e[s]*t;for(let l=0;l!==t;++l)n[a++]=o[r+l]}return n},flattenJSON:function(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=o[n++];while(s!==void 0)},subclip:function(o,t,e,i,n=30){let s=o.clone();s.name=t;let a=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],f=[];for(let m=0;m<c.times.length;++m){let g=c.times[m]*n;if(!(g<e||g>=i)){u.push(c.times[m]);for(let d=0;d<h;++d)f.push(c.values[m*h+d])}}u.length!==0&&(c.times=Jt.convertArray(u,c.times.constructor),c.values=Jt.convertArray(f,c.values.constructor),a.push(c))}s.tracks=a;let r=1/0;for(let l=0;l<s.tracks.length;++l)r>s.tracks[l].times[0]&&(r=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*r);return s.resetDuration(),s},makeClipAdditive:function(o,t=0,e=o,i=30){i<=0&&(i=30);let n=e.tracks.length,s=t/i;for(let a=0;a<n;++a){let r=e.tracks[a],l=r.ValueTypeName;if(l==="bool"||l==="string")continue;let c=o.tracks.find(function(_){return _.name===r.name&&_.ValueTypeName===l});if(c===void 0)continue;let h=0,u=r.getValueSize();r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0,m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=m/3);let g=r.times.length-1,d;if(s<=r.times[0]){let _=h,w=u-h;d=Jt.arraySlice(r.values,_,w)}else if(s>=r.times[g]){let _=g*u+h,w=_+u-h;d=Jt.arraySlice(r.values,_,w)}else{let _=r.createInterpolant(),w=h,T=u-h;_.evaluate(s),d=Jt.arraySlice(_.resultBuffer,w,T)}l==="quaternion"&&new hi().fromArray(d).normalize().conjugate().toArray(d);let p=c.times.length;for(let _=0;_<p;++_){let w=_*m+f;if(l==="quaternion")hi.multiplyQuaternionsFlat(c.values,w,d,0,c.values,w);else{let T=m-f*2;for(let v=0;v<T;++v)c.values[w+v]-=d[v]}}}return o.blendMode=pf,o}},ss=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let r=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let r=e[1];t<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let r=i+a>>>1;t<e[r]?a=r:i=r+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends ss{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case lc:s=t,r=2*e-i;break;case cc:s=n.length-2,r=e+n[s]-n[s+1];break;default:s=t,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:a=t,l=2*i-e;break;case cc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-e)/(n-e),d=g*g,p=d*g,_=-f*p+2*f*d-f*g,w=(1+f)*p+(-1.5-2*f)*d+(-.5+f)*g+1,T=(-1-m)*p+(1.5+m)*d+.5*g,v=m*p-m*d;for(let y=0;y!==r;++y)s[y]=_*a[h+y]+w*a[c+y]+T*a[l+y]+v*a[u+y];return s}},Eo=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==r;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},Co=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jt.convertArray(e,this.TimeBufferType),this.values=Jt.convertArray(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Jt.convertArray(t.times,Array),values:Jt.convertArray(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Tr:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let r=this.getValueSize();this.times=Jt.arraySlice(i,s,a),this.values=Jt.arraySlice(this.values,s*r,a*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){let l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(n!==void 0&&Jt.isTypedArray(n))for(let r=0,l=n.length;r!==l;++r){let c=n[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){let t=Jt.arraySlice(this.times),e=Jt.arraySlice(this.values),i=this.getValueSize(),n=this.getInterpolation()===va,s=t.length-1,a=1;for(let r=1;r<s;++r){let l=!1,c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(n)l=!0;else{let u=r*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let d=e[u+g];if(d!==e[f+g]||d!==e[m+g]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];let u=r*i,f=a*i;for(let m=0;m!==i;++m)e[f+m]=e[u+m]}++a}}if(s>0){t[a]=t[s];for(let r=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=Jt.arraySlice(t,0,a),this.values=Jt.arraySlice(e,0,a*i)):(this.times=t,this.values=e),this}clone(){let t=Jt.arraySlice(this.times,0),e=Jt.arraySlice(this.values,0),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Tr;var gn=class extends ti{};gn.prototype.ValueTypeName="bool";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=Sr;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends ti{};Po.prototype.ValueTypeName="color";var Ro=class extends ti{};Ro.prototype.ValueTypeName="number";var Lo=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-e)/(n-e),c=t*r;for(let h=c+r;c!==h;c+=4)hi.slerpFlat(s,0,a,c-r,a,c,l);return s}},zs=class extends ti{InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.DefaultInterpolation=Tr;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends ti{};_n.prototype.ValueTypeName="string";_n.prototype.ValueBufferType=Array;_n.prototype.DefaultInterpolation=Sr;_n.prototype.InterpolantFactoryMethodLinear=void 0;_n.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends ti{};Do.prototype.ValueTypeName="vector";var Jc={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},Io=class{constructor(t,e,i){let n=this,s=!1,a=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){r++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,r),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,r),a===r&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},e0=new Io,Hr=class{constructor(t){this.manager=t!==void 0?t:e0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};var Fo=class extends Hr{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Jc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let r=Ls("img");function l(){h(),Jc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}};var Gr=class extends Hr{constructor(t){super(t)}load(t,e,i,n){let s=new Ae,a=new Fo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}};var rs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zc(){return(typeof performance>"u"?Date:performance).now()}var Vo="\\[\\]\\.:\\/",i0=new RegExp("["+Vo+"]","g"),Ho="[^"+Vo+"]",n0="[^"+Vo.replace("\\.","")+"]",s0=/((?:WC+[\/:])*)/.source.replace("WC",Ho),r0=/(WCOD+)?/.source.replace("WCOD",n0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ho),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ho),l0=new RegExp("^"+s0+r0+a0+o0+"$"),c0=["material","materials","bones"],zo=class{constructor(t,e,i){let n=i||Lt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Lt=class{constructor(t,e,i){this.path=e,this.parsedPath=i||Lt.parseTrackName(e),this.node=Lt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Lt.Composite(t,e,i):new Lt(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){let e=l0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);c0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let r=s[a];if(r.name===e||r.uuid===e)return r;let l=i(r.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=Lt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=zo;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wr=class{constructor(t,e,i=0,n=1/0){this.ray=new Ds(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Oo(t,this,i,e),i.sort($c),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Oo(t[n],this,i,e);return i.sort($c),i}};function $c(o,t){return o.distance-t.distance}function Oo(o,t,e,i){if(o.layers.test(t.layers)&&o.raycast(t,e),i===!0){let n=o.children;for(let s=0,a=n.length;s<a;s++)Oo(n[s],t,e,!0)}}var hh=new ArrayBuffer(4),Z_=new Float32Array(hh),$_=new Uint32Array(hh),oi=new Uint32Array(512),li=new Uint32Array(512);for(let o=0;o<256;++o){let t=o-127;t<-27?(oi[o]=0,oi[o|256]=32768,li[o]=24,li[o|256]=24):t<-14?(oi[o]=1024>>-t-14,oi[o|256]=1024>>-t-14|32768,li[o]=-t-1,li[o|256]=-t-1):t<=15?(oi[o]=t+15<<10,oi[o|256]=t+15<<10|32768,li[o]=13,li[o|256]=13):t<128?(oi[o]=31744,oi[o|256]=64512,li[o]=24,li[o|256]=24):(oi[o]=31744,oi[o|256]=64512,li[o]=13,li[o|256]=13)}var uh=new Uint32Array(2048),Ns=new Uint32Array(64),h0=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,uh[o]=t|e}for(let o=1024;o<2048;++o)uh[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)Ns[o]=o<<23;Ns[31]=1199570944;Ns[32]=2147483648;for(let o=33;o<63;++o)Ns[o]=2147483648+(o-32<<23);Ns[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(h0[o]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);var cs={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var ei=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},f0=new mn(-1,1,1,-1,0,1),Go=new he;Go.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3));Go.setAttribute("uv",new xe([0,2,0,0,2,0],2));var hs=class{constructor(t){this._mesh=new _e(Go,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,f0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Bs=class extends ei{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Kt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=os.clone(t.uniforms),this.material=new Kt({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new hs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}};var Us=class extends ei{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Zr=class extends ei{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var $r=class{constructor(t,e){if(this.renderer=t,e===void 0){let i=t.getSize(new ht);this._pixelRatio=t.getPixelRatio(),this._width=i.width,this._height=i.height,e=new ce(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],cs===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Bs===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Bs(cs),this.clock=new rs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Us!==void 0&&(a instanceof Us?i=!0:a instanceof Zr&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}};var hx=new mn(-1,1,1,-1,0,1),fh=new he;fh.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3));fh.setAttribute("uv",new xe([0,2,0,0,2,0],2));var Kr=class extends ei{constructor(t,e,i,n,s){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),s=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Wo={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Si=class extends ei{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ce(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new ce(s,a);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new ce(s,a);m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}Wo===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let r=Wo;this.highPassUniforms=os.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new ht(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,cs===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let h=cs;this.copyUniforms=os.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:br,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new bi,this.fsQuad=new hs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.texSize.value=new ht(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Si.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Si.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){return new Kt({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Kt({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Si.BlurDirectionX=new ht(1,0);Si.BlurDirectionY=new ht(0,1);function Ti(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function yh(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Le={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},rl,Ge=1e8,Bt=1/Ge,Ko=Math.PI*2,d0=Ko/4,p0=0,vh=Math.sqrt,m0=Math.cos,g0=Math.sin,jt=function(t){return typeof t=="string"},ie=function(t){return typeof t=="function"},Ci=function(t){return typeof t=="number"},aa=function(t){return typeof t>"u"},Pi=function(t){return typeof t=="object"},Re=function(t){return t!==!1},wh=function(){return typeof window<"u"},Qr=function(t){return ie(t)||jt(t)},Mh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},de=Array.isArray,Qo=/(?:-?\.?\d|\.)+/gi,al=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ol=/[+-]=-?[.\d]+/,bh=/[^,'"\[\]\s]+/gi,_0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,ui,jo,ll,ze={},ta={},Sh,Th=function(t){return(ta=vn(t,ze))&&Oe},oa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ea=function(t,e){return!e&&console.warn(t)},Ah=function(t,e){return t&&(ze[t]=e)&&ta&&(ta[t]=e)||ze},qs=function(){return 0},cl={},Hi=[],tl={},Eh,Ce={},Xo={},dh=30,jr=[],hl="",ul=function(t){var e=t[0],i,n;if(Pi(e)||ie(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=jr.length;n--&&!jr[n].targetTest(e););i=jr[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new ml(t[n],i)))||t.splice(n,1);return t},Gi=function(t){return t._gsap||ul(We(t))[0]._gsap},fl=function(t,e,i){return(i=t[e])&&ie(i)?t[e]():aa(i)&&t.getAttribute&&t.getAttribute(e)||i},we=function(t,e){return(t=t.split(",")).forEach(e)||t},Wt=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Mn=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},x0=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},ia=function(){var t=Hi.length,e=Hi.slice(0),i,n;for(tl={},Hi.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ch=function(t,e,i,n){Hi.length&&ia(),t.render(e,i,n),Hi.length&&ia()},Ph=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(bh).length<2?e:jt(t)?t.trim():t},Rh=function(t){return t},Xe=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},y0=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},vn=function(t,e){for(var i in e)t[i]=e[i];return t},ph=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Pi(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},na=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Hs=function(t){var e=t.parent||Vt,i=t.keyframes?y0(de(t.keyframes)):Xe;if(Re(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},v0=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Lh=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t[n],r;if(s)for(r=e[s];a&&a[s]>r;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},la=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Ai=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},xn=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},w0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},M0=function o(t){return!t||t._ts&&o(t.parent)},mh=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},sa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ca=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Bt)||0))},dl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ue(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ca(t),i._dirty||xn(i,t)),t},Dh=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=sa(t.rawTime(),e),(!e._dur||Js(0,e.totalDuration(),i)-e._tTime>Bt)&&e.render(i,!0)),xn(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Bt}},fi=function(t,e,i,n){return e.parent&&Ai(e),e._start=ue((Ci(i)?i:i||t!==Vt?He(t,i,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lh(t,e,"_first","_last",t._sort?"_start":0),el(e)||(t._recent=e),n||Dh(t,e),t},Ih=function(t,e){return(ze.ScrollTrigger||oa("scrollTrigger",e))&&ze.ScrollTrigger.create(e,t)},Fh=function(t,e,i,n){if(xl(t,e),!t._initted)return 1;if(!i&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Eh!==Pe.frame)return Hi.push(t),t._lazy=[e,n],1},b0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},el=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},S0=function(t,e,i,n){var s=t.ratio,a=e<0||!e&&(!t._start&&b0(t)&&!(!t._initted&&el(t))||(t._ts<0||t._dp._ts<0)&&!el(t))?0:1,r=t._rDelay,l=0,c,h,u;if(r&&t._repeat&&(l=Js(0,t._tDur,e),h=ds(l,r),t._yoyo&&h&1&&(a=1-a),h!==ds(t._tTime,r)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||n||t._zTime===Bt||!e&&t._zTime){if(!t._initted&&Fh(t,e,n,i))return;for(u=t._zTime,t._zTime=e||(i?Bt:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!i&&qe(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ai(t,1),i||(qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},T0=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ps=function(t,e,i,n){var s=t._repeat,a=ue(e)||0,r=t._tTime/t._tDur;return r&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ue(a*(s+1)+t._rDelay*s):a,r>0&&!n?dl(t,t._tTime=t._tDur*r):t.parent&&ca(t),i||xn(t.parent,t),t},gh=function(t){return t instanceof fe?xn(t):ps(t,t._dur)},A0={_start:0,endTime:qs,totalDuration:qs},He=function o(t,e,i){var n=t.labels,s=t._recent||A0,a=t.duration()>=Ge?s.endTime(!1):t._dur,r,l,c;return jt(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",r=e.indexOf("="),l==="<"||l===">"?(r>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(r<0?s:i).totalDuration()/100:1)):r<0?(e in n||(n[e]=a),n[e]):(l=parseFloat(e.charAt(r-1)+e.substr(r+1)),c&&i&&(l=l/100*(de(i)?i[0]:i).totalDuration()),r>1?o(t,e.substr(0,r-1),i)+l:a+l)):e==null?a:+e},Gs=function(t,e,i){var n=Ci(e[1]),s=(n?2:1)+(t<2?0:1),a=e[s],r,l;if(n&&(a.duration=e[1]),a.parent=i,t){for(r=a,l=i;l&&!("immediateRender"in r);)r=l.vars.defaults||{},l=Re(l.vars.inherit)&&l.parent;a.immediateRender=Re(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Qt(e[0],a,e[s+1])},Wi=function(t,e){return t||t===0?e(t):e},Js=function(t,e,i){return i<t?t:i>e?e:i},re=function(t,e){return!jt(t)||!(e=_0.exec(t))?"":e[1]},E0=function(t,e,i){return Wi(i,function(n){return Js(t,e,n)})},il=[].slice,zh=function(t,e){return t&&Pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pi(t[0]))&&!t.nodeType&&t!==ui},C0=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return jt(n)&&!e||zh(n,1)?(s=i).push.apply(s,We(n)):i.push(n)})||i},We=function(t,e,i){return jt(t)&&!i&&(jo||!ms())?il.call((e||ll).querySelectorAll(t),0):de(t)?C0(t,i):zh(t)?il.call(t,0):t?[t]:[]},P0=function(t){return t=We(t)[0]||ea("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return We(e,i.querySelectorAll?i:i===t?ea("Invalid scope")||ll.createElement("div"):t)}},Oh=function(t){return t.sort(function(){return .5-Math.random()})},Nh=function(t){if(ie(t))return t;var e=Pi(t)?t:{each:t},i=yn(e.ease),n=e.from||0,s=parseFloat(e.base)||0,a={},r=n>0&&n<1,l=isNaN(n)||r,c=e.axis,h=n,u=n;return jt(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!r&&l&&(h=n[0],u=n[1]),function(f,m,g){var d=(g||e).length,p=a[d],_,w,T,v,y,A,C,x,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,Ge])[1],!b){for(C=-Ge;C<(C=g[b++].getBoundingClientRect().left)&&b<d;);b--}for(p=a[d]=[],_=l?Math.min(b,d)*h-.5:n%b,w=b===Ge?0:l?d*u/b-.5:n/b|0,C=0,x=Ge,A=0;A<d;A++)T=A%b-_,v=w-(A/b|0),p[A]=y=c?Math.abs(c==="y"?v:T):vh(T*T+v*v),y>C&&(C=y),y<x&&(x=y);n==="random"&&Oh(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(b>d?d-1:c?c==="y"?d/b:b:Math.max(b,d/b))||0)*(n==="edges"?-1:1),p.b=d<0?s-d:s,p.u=re(e.amount||e.each)||0,i=i&&d<0?Wh(i):i}return d=(p[f]-p.min)/p.max||0,ue(p.b+(i?i(d):d)*p.v)+p.u}},nl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Math.round(parseFloat(i)/t)*t*e;return(n-n%1)/e+(Ci(i)?0:re(i))}},Bh=function(t,e){var i=de(t),n,s;return!i&&Pi(t)&&(n=i=t.radius||Ge,t.values?(t=We(t.values),(s=!Ci(t[0]))&&(n*=n)):t=nl(t.increment)),Wi(e,i?ie(t)?function(a){return s=t(a),Math.abs(s-a)<=n?s:a}:function(a){for(var r=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ge,h=0,u=t.length,f,m;u--;)s?(f=t[u].x-r,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-r),f<c&&(c=f,h=u);return h=!n||c<=n?t[h]:a,s||h===a||Ci(a)?h:h+re(a)}:nl(t))},Uh=function(t,e,i,n){return Wi(de(t)?!e:i===!0?!!(i=0):!n,function(){return de(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},R0=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,a){return a(s)},n)}},L0=function(t,e){return function(i){return t(parseFloat(i))+(e||re(i))}},D0=function(t,e,i){return Vh(t,e,0,1,i)},kh=function(t,e,i){return Wi(i,function(n){return t[~~e(n)]})},I0=function o(t,e,i){var n=e-t;return de(t)?kh(t,o(0,t.length),e):Wi(i,function(s){return(n+(s-t)%n)%n+t})},F0=function o(t,e,i){var n=e-t,s=n*2;return de(t)?kh(t,o(0,t.length-1),e):Wi(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>n?s-a:a)})},gs=function(t){for(var e=0,i="",n,s,a,r;~(n=t.indexOf("random(",e));)a=t.indexOf(")",n),r=t.charAt(n+7)==="[",s=t.substr(n+7,a-n-7).match(r?bh:Qo),i+=t.substr(e,n-e)+Uh(r?s:+s[0],r?0:+s[1],+s[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},Vh=function(t,e,i,n,s){var a=e-t,r=n-i;return Wi(s,function(l){return i+((l-t)/a*r||0)})},z0=function o(t,e,i,n){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=jt(t),r={},l,c,h,u,f;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(de(t)&&!de(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(o(t[c-1],t[c]));u--,s=function(g){g*=u;var d=Math.min(f,~~g);return h[d](g-d)},i=e}else n||(t=vn(de(t)?[]:{},t));if(!h){for(l in e)gl.call(r,t,l,"get",e[l]);s=function(g){return wl(g,r)||(a?t.p:t)}}}return Wi(i,s)},_h=function(t,e,i){var n=t.labels,s=Ge,a,r,l;for(a in n)r=n[a]-e,r<0==!!i&&r&&s>(r=Math.abs(r))&&(l=a,s=r);return l},qe=function(t,e,i){var n=t.vars,s=n[e],a,r;if(s)return a=n[e+"Params"],r=n.callbackScope||t,i&&Hi.length&&ia(),a?s.apply(r,a):s.call(r)},ks=function(t){return Ai(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&qe(t,"onInterrupt"),t},us,O0=function(t){t=!t.name&&t.default||t;var e=t.name,i=ie(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:qs,render:wl,add:gl,kill:Q0,modifier:K0,rawVars:0},a={targetTest:0,get:0,getSetter:ha,aliases:{},register:0};if(ms(),t!==n){if(Ce[e])return;Xe(n,Xe(na(t,s),a)),vn(n.prototype,vn(s,na(t,a))),Ce[n.prop=e]=n,t.targetTest&&(jr.push(n),cl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ah(e,n),t.register&&t.register(Oe,n,Me)},Nt=255,Vs={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Yo=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Nt+.5|0},Hh=function(t,e,i){var n=t?Ci(t)?[t>>16,t>>8&Nt,t&Nt]:0:Vs.black,s,a,r,l,c,h,u,f,m,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vs[t])n=Vs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),r=t.charAt(3),t="#"+s+s+a+a+r+r+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Nt,n&Nt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Nt,t&Nt]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(Qo),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=Yo(l+1/3,s,a),n[1]=Yo(l,s,a),n[2]=Yo(l-1/3,s,a);else if(~t.indexOf("="))return n=t.match(al),i&&n.length<4&&(n[3]=1),n}else n=t.match(Qo)||Vs.transparent;n=n.map(Number)}return e&&!g&&(s=n[0]/Nt,a=n[1]/Nt,r=n[2]/Nt,u=Math.max(s,a,r),f=Math.min(s,a,r),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===s?(a-r)/m+(a<r?6:0):u===a?(r-s)/m+2:(s-a)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Gh=function(t){var e=[],i=[],n=-1;return t.split(Ei).forEach(function(s){var a=s.match(wn)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},xh=function(t,e,i){var n="",s=(t+n).match(Ei),a=e?"hsla(":"rgba(",r=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Hh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Gh(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Ei,"1").split(wn),u=c.length-1;r<u;r++)n+=c[r]+(~l.indexOf(r)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=t.split(Ei),u=c.length-1;r<u;r++)n+=c[r]+s[r];return n+c[u]},Ei=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vs)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),N0=/hsl[a]?\(/,pl=function(t){var e=t.join(" "),i;if(Ei.lastIndex=0,Ei.test(e))return i=N0.test(e),t[1]=xh(t[1],i),t[0]=xh(t[0],i,Gh(t[1])),!0},Xs,Pe=function(){var o=Date.now,t=500,e=33,i=o(),n=i,s=1e3/240,a=s,r=[],l,c,h,u,f,m,g=function d(p){var _=o()-n,w=p===!0,T,v,y,A;if(_>t&&(i+=_-e),n+=_,y=n-i,T=y-a,(T>0||w)&&(A=++u.frame,f=y-u.time*1e3,u.time=y=y/1e3,a+=T+(T>=s?4:s-T),v=1),w||(l=c(d)),v)for(m=0;m<r.length;m++)r[m](y,f,A,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Sh&&(!jo&&wh()&&(ui=jo=window,ll=ui.document||{},ze.gsap=Oe,(ui.gsapVersions||(ui.gsapVersions=[])).push(Oe.version),Th(ta||ui.GreenSockGlobals||!ui.gsap&&ui||{}),h=ui.requestAnimationFrame),l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Xs=1,g(2))},sleep:function(){(h?ui.cancelAnimationFrame:clearTimeout)(l),Xs=0,c=qs},lagSmoothing:function(p,_){t=p||1/Bt,e=Math.min(_,t,0)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,_,w){var T=_?function(v,y,A,C){p(v,y,A,C),u.remove(T)}:p;return u.remove(p),r[w?"unshift":"push"](T),ms(),T},remove:function(p,_){~(_=r.indexOf(p))&&r.splice(_,1)&&m>=_&&m--},_listeners:r},u}(),ms=function(){return!Xs&&Pe.wake()},Et={},B0=/^[\d.\-M][\d.\-,\s]/,U0=/["']/g,k0=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,a=i.length,r,l,c;s<a;s++)l=i[s],r=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,r),e[n]=isNaN(c)?c.replace(U0,"").trim():+c,n=l.substr(r+1).trim();return e},V0=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},H0=function(t){var e=(t+"").split("("),i=Et[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[k0(e[1])]:V0(t).split(",").map(Ph)):Et._CE&&B0.test(t)?Et._CE("",t):i},Wh=function(t){return function(e){return 1-t(1-e)}},qh=function o(t,e){for(var i=t._first,n;i;)i instanceof fe?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},yn=function(t,e){return t&&(ie(t)?t:Et[t]||H0(t))||e},bn=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},a;return we(t,function(r){Et[r]=ze[r]=s,Et[a=r.toLowerCase()]=i;for(var l in s)Et[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Et[r+"."+l]=s[l]}),s},Xh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Jo=function o(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/Ko*(Math.asin(1/n)||0),r=function(h){return h===1?1:n*Math.pow(2,-10*h)*g0((h-a)*s)+1},l=t==="out"?r:t==="in"?function(c){return 1-r(1-c)}:Xh(r);return s=Ko/s,l.config=function(c,h){return o(t,c,h)},l},Zo=function o(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Xh(i);return n.config=function(s){return o(t,s)},n};we("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;bn(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;bn("Elastic",Jo("in"),Jo("out"),Jo());(function(o,t){var e=1/t,i=2*e,n=2.5*e,s=function(r){return r<e?o*r*r:r<i?o*Math.pow(r-1.5/t,2)+.75:r<n?o*(r-=2.25/t)*r+.9375:o*Math.pow(r-2.625/t,2)+.984375};bn("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);bn("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});bn("Circ",function(o){return-(vh(1-o*o)-1)});bn("Sine",function(o){return o===1?1:-m0(o*d0)+1});bn("Back",Zo("in"),Zo("out"),Zo());Et.SteppedEase=Et.steps=ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,a=1-Bt;return function(r){return((n*Js(0,a,r)|0)+s)*i}}};fs.ease=Et["quad.out"];we("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return hl+=o+","+o+"Params,"});var ml=function(t,e){this.id=p0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:fl,this.set=e?e.getSetter:ha},Ys=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,Xs||Pe.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dl(this,i),!s._dp||s.parent||Dh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Bt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ch(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+mh(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+mh(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?sa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Bt?0:this._rts,this.totalTime(Js(-this._delay,this._tDur,n),!0),ca(this),w0(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&fi(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Re(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sa(n.rawTime(i),this):this._tTime:this._tTime},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,gh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,gh(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(He(this,i),Re(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Re(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Bt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Bt)},t.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this;return new Promise(function(s){var a=ie(i)?i:Rh,r=function(){var c=n.then;n.then=null,ie(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),s(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?r():n._prom=r})},t.kill=function(){ks(this)},o}();Xe(Ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var fe=function(o){yh(t,o);function t(i,n){var s;return i===void 0&&(i={}),s=o.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Re(i.sortChildren),Vt&&fi(i.parent||Vt,Ti(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Ih(Ti(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,a){return Gs(0,arguments,this),this},e.from=function(n,s,a){return Gs(1,arguments,this),this},e.fromTo=function(n,s,a,r){return Gs(2,arguments,this),this},e.set=function(n,s,a){return s.duration=0,s.parent=this,Hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(n,s,He(this,a),1),this},e.call=function(n,s,a){return fi(this,Qt.delayedCall(0,n,s),a)},e.staggerTo=function(n,s,a,r,l,c,h){return a.duration=s,a.stagger=a.stagger||r,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Qt(n,a,He(this,l)),this},e.staggerFrom=function(n,s,a,r,l,c,h){return a.runBackwards=1,Hs(a).immediateRender=Re(a.immediateRender),this.staggerTo(n,s,a,r,l,c,h)},e.staggerFromTo=function(n,s,a,r,l,c,h,u){return r.startAt=a,Hs(r).immediateRender=Re(r.immediateRender),this.staggerTo(n,s,r,l,c,h,u)},e.render=function(n,s,a){var r=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:ue(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,m,g,d,p,_,w,T,v,y,A,C;if(this!==Vt&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(r!==this._time&&c&&(h+=this._time-r,n+=this._time-r),f=h,v=this._start,T=this._ts,_=!T,u&&(c||(r=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,s,a);if(f=ue(h%p),h===l?(d=this._repeat,f=c):(d=~~(h/p),d&&d===h/p&&(f=c,d--),f>c&&(f=c)),y=ds(this._tTime,p),!r&&this._tTime&&y!==d&&(y=d),A&&d&1&&(f=c-f,C=1),d!==y&&!this._lock){var x=A&&y&1,b=x===(A&&d&1);if(d<y&&(x=!x),r=x?0:c,this._lock=1,this.render(r||(C?0:ue(d*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qe(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),r&&r!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,r=x?c:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;qh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=T0(this,ue(r),ue(f)),w&&(h-=f-(f=w._start))),this._tTime=h,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,r=0),!r&&f&&!s&&(qe(this,"onStart"),this._tTime!==h))return this;if(f>=r&&n>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(n,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!_){w=0,g&&(h+=this._zTime=-Bt);break}}m=g}else{m=this._last;for(var L=n<0?n:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(n,s,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!_){w=0,g&&(h+=this._zTime=L?-Bt:Bt);break}}m=g}}if(w&&!s&&(this.pause(),w.render(f>=r?0:-Bt)._zTime=f>=r?1:-1,this._ts))return this._start=v,ca(this),this.render(n,s,a);this._onUpdate&&!s&&qe(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&r)&&(v===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!s&&!(n<0&&!r)&&(h||r||!l)&&(qe(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var a=this;if(Ci(s)||(s=He(this,s,n)),!(n instanceof Ys)){if(de(n))return n.forEach(function(r){return a.add(r,s)}),this;if(jt(n))return this.addLabel(n,s);if(ie(n))n=Qt.delayedCall(0,n);else return this}return this!==n?fi(this,n,s):this},e.getChildren=function(n,s,a,r){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=-Ge);for(var l=[],c=this._first;c;)c._start>=r&&(c instanceof Qt?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},e.remove=function(n){return jt(n)?this.removeLabel(n):ie(n)?this.killTweensOf(n):(la(this,n),n===this._recent&&(this._recent=this._last),xn(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(Pe.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),o.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=He(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,a){var r=Qt.delayedCall(0,s||qs,a);return r.data="isPause",this._hasPause=1,fi(this,r,He(this,n))},e.removePause=function(n){var s=this._first;for(n=He(this,n);s;)s._start===n&&s.data==="isPause"&&Ai(s),s=s._next},e.killTweensOf=function(n,s,a){for(var r=this.getTweensOf(n,a),l=r.length;l--;)Vi!==r[l]&&r[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var a=[],r=We(n),l=this._first,c=Ci(s),h;l;)l instanceof Qt?x0(l._targets,r)&&(c?(!Vi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(r,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(n,s){s=s||{};var a=this,r=He(a,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=Qt.to(a,Xe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:s.duration||Math.abs((r-(c&&"time"in c?c.time:a._time))/a.timeScale())||Bt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((r-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ps(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(n,s,a){return this.tweenTo(s,Xe({startAt:{time:He(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),_h(this,He(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),_h(this,He(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Bt)},e.shiftChildren=function(n,s,a){a===void 0&&(a=0);for(var r=this._first,l=this.labels,c;r;)r._start>=a&&(r._start+=n,r._end+=n),r=r._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return xn(this)},e.invalidate=function(){var n=this._first;for(this._lock=0;n;)n.invalidate(),n=n._next;return o.prototype.invalidate.call(this)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),xn(this)},e.totalDuration=function(n){var s=0,a=this,r=a._last,l=Ge,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;r;)c=r._prev,r._dirty&&r.totalDuration(),h=r._start,h>l&&a._sort&&r._ts&&!a._lock?(a._lock=1,fi(a,r,h-r._delay,1)._lock=0):l=h,h<0&&r._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),r._end>s&&r._ts&&(s=r._end),r=c;ps(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(Vt._ts&&(Ch(Vt,sa(n,Vt)),Eh=Pe.frame),Pe.frame>=dh){dh+=Le.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Le.autoSleep&&Pe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pe.sleep()}}},t}(Ys);Xe(fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var G0=function(t,e,i,n,s,a,r){var l=new Me(this._pt,t,e,0,1,vl,null,s),c=0,h=0,u,f,m,g,d,p,_,w;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=gs(n)),a&&(w=[i,n],a(w,t,e),i=w[0],n=w[1]),f=i.match(qo)||[];u=qo.exec(n);)g=u[0],d=n.substring(c,u.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:d||h===1?d:",",s:p,c:g.charAt(1)==="="?Mn(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=qo.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=r,(ol.test(n)||_)&&(l.e=0),this._pt=l,l},gl=function(t,e,i,n,s,a,r,l,c){ie(n)&&(n=n(s||0,t,a));var h=t[e],u=i!=="get"?i:ie(h)?c?t[e.indexOf("set")||!ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=ie(h)?c?J0:Zh:yl,m;if(jt(n)&&(~n.indexOf("random(")&&(n=gs(n)),n.charAt(1)==="="&&(m=Mn(u,n)+(re(u)||0),(m||m===0)&&(n=m))),u!==n||sl)return!isNaN(u*n)&&n!==""?(m=new Me(this._pt,t,e,+u||0,n-(u||0),typeof h=="boolean"?$0:$h,0,f),c&&(m.fp=c),r&&m.modifier(r,this,t),this._pt=m):(!h&&!(e in t)&&oa(e,n),G0.call(this,t,e,u,n,f,l||Le.stringFilter,c))},W0=function(t,e,i,n,s){if(ie(t)&&(t=Ws(t,s,e,i,n)),!Pi(t)||t.style&&t.nodeType||de(t)||Mh(t))return jt(t)?Ws(t,s,e,i,n):t;var a={},r;for(r in t)a[r]=Ws(t[r],s,e,i,n);return a},_l=function(t,e,i,n,s,a){var r,l,c,h;if(Ce[t]&&(r=new Ce[t]).init(s,r.rawVars?e[t]:W0(e[t],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new Me(i._pt,s,t,0,1,r.render,r,0,r.priority),i!==us))for(c=i._ptLookup[i._targets.indexOf(s)],h=r._props.length;h--;)c[r._props[h]]=l;return r},Vi,sl,xl=function o(t,e){var i=t.vars,n=i.ease,s=i.startAt,a=i.immediateRender,r=i.lazy,l=i.onUpdate,c=i.onUpdateParams,h=i.callbackScope,u=i.runBackwards,f=i.yoyoEase,m=i.keyframes,g=i.autoRevert,d=t._dur,p=t._startAt,_=t._targets,w=t.parent,T=w&&w.data==="nested"?w.parent._targets:_,v=t._overwrite==="auto"&&!rl,y=t.timeline,A,C,x,b,L,I,Y,Z,R,k,z,G,q;if(y&&(!m||!n)&&(n="none"),t._ease=yn(n,fs.ease),t._yEase=f?Wh(yn(f===!0?n:f,fs.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!y&&!!i.runBackwards,!y||m&&!i.stagger){if(Z=_[0]?Gi(_[0]).harness:0,G=Z&&i[Z.prop],A=na(i,cl),p&&(Ai(p.render(-1,!0)),p._lazy=0),s)if(Ai(t._startAt=Qt.set(_,Xe({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:Re(r),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:h,stagger:0},s))),e<0&&!a&&!g&&t._startAt.render(-1,!0),a){if(e>0&&!g&&(t._startAt=0),d&&e<=0){e&&(t._zTime=e);return}}else g===!1&&(t._startAt=0);else if(u&&d){if(p)!g&&(t._startAt=0);else if(e&&(a=!1),x=Xe({overwrite:!1,data:"isFromStart",lazy:a&&Re(r),immediateRender:a,stagger:0,parent:w},A),G&&(x[Z.prop]=G),Ai(t._startAt=Qt.set(_,x)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!a)o(t._startAt,Bt);else if(!e)return}for(t._pt=t._ptCache=0,r=d&&Re(r)||r&&!d,C=0;C<_.length;C++){if(L=_[C],Y=L._gsap||ul(_)[C]._gsap,t._ptLookup[C]=k={},tl[Y.id]&&Hi.length&&ia(),z=T===_?C:T.indexOf(L),Z&&(R=new Z).init(L,G||A,t,z,T)!==!1&&(t._pt=b=new Me(t._pt,L,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(N){k[N]=b}),R.priority&&(I=1)),!Z||G)for(x in A)Ce[x]&&(R=_l(x,A,t,z,L,T))?R.priority&&(I=1):k[x]=b=gl.call(t,L,x,"get",A[x],z,T,0,i.stringFilter);t._op&&t._op[C]&&t.kill(L,t._op[C]),v&&t._pt&&(Vi=t,Vt.killTweensOf(L,k,t.globalTime(e)),q=!t.parent,Vi=0),t._pt&&r&&(tl[Y.id]=1)}I&&Ml(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!q,m&&e<=0&&y.render(Ge,!0,!0)},q0=function(t,e,i,n,s,a,r){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,u=t._targets.length;u--;){if(c=h[u][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e;)c=c._next;if(!c)return sl=1,t.vars[e]="+=0",xl(t,r),sl=0,1;l.push(c)}for(u=l.length;u--;)c=l[u],c.s=(n||n===0)&&!s?n:c.s+(n||0)+a*c.c,c.c=i-c.s,c.e&&(c.e=Wt(i)+re(c.e)),c.b&&(c.b=c.s+re(c.b))},X0=function(t,e){var i=t[0]?Gi(t[0]).harness:0,n=i&&i.aliases,s,a,r,l;if(!n)return e;s=vn({},e);for(a in n)if(a in s)for(l=n[a].split(","),r=l.length;r--;)s[l[r]]=s[a];return s},Y0=function(t,e,i,n){var s=e.ease||n||"power1.inOut",a,r;if(de(e))r=i[t]||(i[t]=[]),e.forEach(function(l,c){return r.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)r=i[a]||(i[a]=[]),a==="ease"||r.push({t:parseFloat(t),v:e[a],e:s})},Ws=function(t,e,i,n,s){return ie(t)?t.call(e,i,n,s):jt(t)&&~t.indexOf("random(")?gs(t):t},Yh=hl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jh={};we(Yh+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Jh[o]=1});var Qt=function(o){yh(t,o);function t(i,n,s,a){var r;typeof n=="number"&&(s.duration=n,n=s,s=null),r=o.call(this,a?n:Hs(n))||this;var l=r.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,w=n.parent||Vt,T=(de(i)||Mh(i)?Ci(i[0]):"length"in n)?[i]:We(i),v,y,A,C,x,b,L,I;if(r._targets=T.length?ul(T):ea("GSAP target "+i+" not found. https://greensock.com",!Le.nullTargetWarn)||[],r._ptLookup=[],r._overwrite=m,g||f||Qr(c)||Qr(h)){if(n=r.vars,v=r.timeline=new fe({data:"nested",defaults:d||{}}),v.kill(),v.parent=v._dp=Ti(r),v._start=0,f||Qr(c)||Qr(h)){if(C=T.length,L=f&&Nh(f),Pi(f))for(x in f)~Yh.indexOf(x)&&(I||(I={}),I[x]=f[x]);for(y=0;y<C;y++)A=na(n,Jh),A.stagger=0,_&&(A.yoyoEase=_),I&&vn(A,I),b=T[y],A.duration=+Ws(c,Ti(r),y,b,T),A.delay=(+Ws(h,Ti(r),y,b,T)||0)-r._delay,!f&&C===1&&A.delay&&(r._delay=h=A.delay,r._start+=h,A.delay=0),v.to(b,A,L?L(y,b,T):0),v._ease=Et.none;v.duration()?c=h=0:r.timeline=0}else if(g){Hs(Xe(v.vars.defaults,{ease:"none"})),v._ease=yn(g.ease||n.ease||"none");var Y=0,Z,R,k;if(de(g))g.forEach(function(z){return v.to(T,z,">")});else{A={};for(x in g)x==="ease"||x==="easeEach"||Y0(x,g[x],A,g.easeEach);for(x in A)for(Z=A[x].sort(function(z,G){return z.t-G.t}),Y=0,y=0;y<Z.length;y++)R=Z[y],k={ease:R.e,duration:(R.t-(y?Z[y-1].t:0))/100*c},k[x]=R.v,v.to(T,k,Y),Y+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||r.duration(c=v.duration())}else r.timeline=0;return m===!0&&!rl&&(Vi=Ti(r),Vt.killTweensOf(T),Vi=0),fi(w,Ti(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),(u||!c&&!g&&r._start===ue(w._time)&&Re(u)&&M0(Ti(r))&&w.data!=="nested")&&(r._tTime=-Bt,r.render(Math.max(0,-h))),p&&Ih(Ti(r),p),r}var e=t.prototype;return e.render=function(n,s,a){var r=this._time,l=this._tDur,c=this._dur,h=n>l-Bt&&n>=0?l:n<Bt?0:n,u,f,m,g,d,p,_,w,T;if(!c)S0(this,n,s,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=n<0){if(u=h,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(g*100+n,s,a);if(u=ue(h%g),h===l?(m=this._repeat,u=c):(m=~~(h/g),m&&m===h/g&&(u=c,m--),u>c&&(u=c)),p=this._yoyo&&m&1,p&&(T=this._yEase,u=c-u),d=ds(this._tTime,g),u===r&&!a&&this._initted)return this._tTime=h,this;m!==d&&(w&&this._yEase&&qh(w,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(ue(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Fh(this,n<0?n:u,a,s))return this._tTime=0,this;if(r!==this._time)return this;if(c!==this._dur)return this.render(n,s,a)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(T||this._ease)(u/c),this._from&&(this.ratio=_=1-_),u&&!r&&!s&&(qe(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;w&&w.render(n<0?n:!u&&p?-Bt:w._dur*w._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(n<0&&this._startAt&&this._startAt.render(n,!0,a),qe(this,"onUpdate")),this._repeat&&m!==d&&this.vars.onRepeat&&!s&&this.parent&&qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(n<0&&this._startAt&&!this._onUpdate&&this._startAt.render(n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!s&&!(n<0&&!r)&&(h||r)&&(qe(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},e.resetTo=function(n,s,a,r){Xs||Pe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||xl(this,l),c=this._ease(l/this._dur),q0(this,n,s,a,r,c,l)?this.resetTo(n,s,a,r):(dl(this,0),this.parent||Lh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Vi&&Vi.vars.overwrite!==!0)._first||ks(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var r=this._targets,l=n?We(n):r,c=this._ptLookup,h=this._pt,u,f,m,g,d,p,_;if((!s||s==="all")&&v0(r,l))return s==="all"&&(this._pt=0),ks(this);for(u=this._op=this._op||[],s!=="all"&&(jt(s)&&(d={},we(s,function(w){return d[w]=1}),s=d),s=X0(r,s)),_=r.length;_--;)if(~l.indexOf(r[_])){f=c[_],s==="all"?(u[_]=s,g=f,m={}):(m=u[_]=u[_]||{},g=s);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&la(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&h&&ks(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return Gs(1,arguments)},t.delayedCall=function(n,s,a,r){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:r})},t.fromTo=function(n,s,a){return Gs(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,a){return Vt.killTweensOf(n,s,a)},t}(Ys);Xe(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});we("staggerTo,staggerFrom,staggerFromTo",function(o){Qt[o]=function(){var t=new fe,e=il.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var yl=function(t,e,i){return t[e]=i},Zh=function(t,e,i){return t[e](i)},J0=function(t,e,i,n){return t[e](n.fp,i)},Z0=function(t,e,i){return t.setAttribute(e,i)},ha=function(t,e){return ie(t[e])?Zh:aa(t[e])&&t.setAttribute?Z0:yl},$h=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},$0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},vl=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},wl=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},K0=function(t,e,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(t,e,i),s=a},Q0=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?la(this,e,"_pt"):e.dep||(i=1),e=n;return!i},j0=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Ml=function(t){for(var e=t._pt,i,n,s,a;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=s},Me=function(){function o(e,i,n,s,a,r,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=r||$h,this.d=l||this,this.set=c||yl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=j0,this.m=i,this.mt=s,this.tween=n},o}();we(hl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return cl[o]=1});ze.TweenMax=ze.TweenLite=Qt;ze.TimelineLite=ze.TimelineMax=fe;Vt=new fe({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Le.stringFilter=pl;var ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return O0(n)})},timeline:function(t){return new fe(t)},getTweensOf:function(t,e){return Vt.getTweensOf(t,e)},getProperty:function(t,e,i,n){jt(t)&&(t=We(t)[0]);var s=Gi(t||{}).get,a=i?Rh:Ph;return i==="native"&&(i=""),t&&(e?a((Ce[e]&&Ce[e].get||s)(t,e,i,n)):function(r,l,c){return a((Ce[r]&&Ce[r].get||s)(t,r,l,c))})},quickSetter:function(t,e,i){if(t=We(t),t.length>1){var n=t.map(function(h){return Oe.quickSetter(h,e,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}t=t[0]||{};var a=Ce[e],r=Gi(t),l=r.harness&&(r.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;us._pt=0,u.init(t,i?h+i:h,us,0,[t]),u.render(1,u),us._pt&&wl(1,us)}:r.set(t,l);return a?c:function(h){return c(t,l,i?h+i:h,r,1)}},quickTo:function(t,e,i){var n,s=Oe.to(t,vn((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Vt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=yn(t.ease,fs.ease)),ph(fs,t||{})},config:function(t){return ph(Le,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(r){return r&&!Ce[r]&&!ze[r]&&ea(e+" effect requires "+r+" plugin.")}),Xo[e]=function(r,l,c){return i(We(r),Xe(l||{},s),c)},a&&(fe.prototype[e]=function(r,l,c){return this.add(Xo[e](r,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Et[t]=yn(e)},parseEase:function(t,e){return arguments.length?yn(t,e):Et},getById:function(t){return Vt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new fe(t),n,s;for(i.smoothChildTiming=Re(t.smoothChildTiming),Vt.remove(i),i._dp=0,i._time=i._tTime=Vt._time,n=Vt._first;n;)s=n._next,(e||!(!n._dur&&n instanceof Qt&&n.vars.onComplete===n._targets[0]))&&fi(i,n,n._start-n._delay),n=s;return fi(Vt,i,0),i},utils:{wrap:I0,wrapYoyo:F0,distribute:Nh,random:Uh,snap:Bh,normalize:D0,getUnit:re,clamp:E0,splitColor:Hh,toArray:We,selector:P0,mapRange:Vh,pipe:R0,unitize:L0,interpolate:z0,shuffle:Oh},install:Th,effects:Xo,ticker:Pe,updateRoot:fe.updateRoot,plugins:Ce,globalTimeline:Vt,core:{PropTween:Me,globals:Ah,Tween:Qt,Timeline:fe,Animation:Ys,getCache:Gi,_removeLinkedListItem:la,suppressOverwrites:function(t){return rl=t}}};we("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ra[o]=Qt[o]});Pe.add(fe.updateRoot);us=ra.to({},{duration:0});var t_=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},e_=function(t,e){var i=t._targets,n,s,a;for(n in e)for(s=i.length;s--;)a=t._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=t_(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[s],n))},$o=function(t,e){return{name:t,rawVars:1,init:function(n,s,a){a._onInit=function(r){var l,c;if(jt(s)&&(l={},we(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}e_(r,s)}}}},Oe=ra.registerPlugin({name:"attr",init:function(t,e,i,n,s){var a,r;for(a in e)r=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],n,s,0,0,a),r&&(r.op=a),this._props.push(a)}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i])}},$o("roundProps",nl),$o("modifiers"),$o("snap",Bh))||ra;Qt.version=fe.version=Oe.version="3.10.4";Sh=1;wh()&&ms();var i_=Et.Power0,n_=Et.Power1,s_=Et.Power2,r_=Et.Power3,a_=Et.Power4,o_=Et.Linear,l_=Et.Quad,c_=Et.Cubic,h_=Et.Quart,u_=Et.Quint,f_=Et.Strong,d_=Et.Elastic,p_=Et.Back,m_=Et.SteppedEase,g_=Et.Bounce,__=Et.Sine,x_=Et.Expo,y_=Et.Circ;var Kh,qi,xs,Cl,Cn,v_,Qh,w_=function(){return typeof window<"u"},Ji={},An=180/Math.PI,ys=Math.PI/180,_s=Math.atan2,jh=1e8,au=/([A-Z])/g,M_=/(left|right|width|margin|padding|x)/i,b_=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ou=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},S_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},T_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A_=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},lu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},E_=function(t,e,i){return t.style[e]=i},C_=function(t,e,i){return t.style.setProperty(e,i)},P_=function(t,e,i){return t._gsap[e]=i},R_=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},L_=function(t,e,i,n,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},D_=function(t,e,i,n,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},ae="transform",Zi=ae+"Origin",hu,Tl=function(t,e){var i=qi.createElementNS?qi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qi.createElement(t);return i.style?i:qi.createElement(t)},Ri=function o(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(au,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&o(t,vs(e)||e,1)||""},tu="O,Moz,ms,Ms,Webkit".split(","),vs=function(t,e,i){var n=e||Cn,s=n.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(tu[a]+t in s););return a<0?null:(a===3?"ms":a>=0?tu[a]:"")+t},Al=function(){w_()&&window.document&&(Kh=window,qi=Kh.document,xs=qi.documentElement,Cn=Tl("div")||{style:{}},v_=Tl("div"),ae=vs(ae),Zi=ae+"Origin",Cn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hu=!!vs("perspective"),Cl=1)},bl=function o(t){var e=Tl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,a;if(xs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),xs.removeChild(e),this.style.cssText=s,a},eu=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},uu=function(t){var e;try{e=t.getBBox()}catch{e=bl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===bl||(e=bl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+eu(t,["x","cx","x1"])||0,y:+eu(t,["y","cy","y1"])||0,width:0,height:0}:e},fu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&uu(t))},$s=function(t,e){if(e){var i=t.style;e in Ji&&e!==Zi&&(e=ae),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(au,"-$1").toLowerCase())):i.removeAttribute(e)}},Yi=function(t,e,i,n,s,a){var r=new Me(t._pt,e,i,0,1,a?cu:lu);return t._pt=r,r.b=n,r.e=s,t._props.push(i),r},iu={deg:1,rad:1,turn:1},$i=function o(t,e,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",r=Cn.style,l=M_.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",m=n==="%",g,d,p,_;return n===a||!s||iu[n]||iu[a]?s:(a!=="px"&&!f&&(s=o(t,e,i,"px")),_=t.getCTM&&fu(t),(m||a==="%")&&(Ji[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[h],Wt(m?s/g*u:s/100*g)):(r[l?"width":"height"]=u+(f?a:n),d=~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===qi||!d.appendChild)&&(d=qi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Pe.time?Wt(s/p.width*u):((m||a==="%")&&(r.position=Ri(t,"position")),d===t&&(r.position="static"),d.appendChild(Cn),g=Cn[h],d.removeChild(Cn),r.position="absolute",l&&m&&(p=Gi(d),p.time=Pe.time,p.width=d[h]),Wt(f?g*s/u:g&&s?u/g*s:0))))},En=function(t,e,i,n){var s;return Cl||Al(),e in Xi&&e!=="transform"&&(e=Xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ji[e]&&e!=="transform"?(s=Qs(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fa(Ri(t,Zi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=ua[e]&&ua[e](t,e,i)||Ri(t,e)||fl(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?$i(t,e,s,i)+i:s},I_=function(t,e,i,n){if(!i||i==="none"){var s=vs(e,t,1),a=s&&Ri(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=Ri(t,"borderTopColor"))}var r=new Me(this._pt,t.style,e,0,1,vl),l=0,c=0,h,u,f,m,g,d,p,_,w,T,v,y;if(r.b=i,r.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=Ri(t,e)||n,t.style[e]=i),h=[i,n],pl(h),i=h[0],n=h[1],f=i.match(wn)||[],y=n.match(wn)||[],y.length){for(;u=wn.exec(n);)p=u[0],w=n.substring(l,u.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,v=d.substr((m+"").length),p.charAt(1)==="="&&(p=Mn(m,p)+v),_=parseFloat(p),T=p.substr((_+"").length),l=wn.lastIndex-T.length,T||(T=T||Le.units[e]||v,l===n.length&&(n+=T,r.e+=T)),v!==T&&(m=$i(t,e,d,T)||0),r._pt={_next:r._pt,p:w||c===1?w:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});r.c=l<n.length?n.substring(l,n.length):""}else r.r=e==="display"&&n==="none"?cu:lu;return ol.test(n)&&(r.e=0),this._pt=r,r},nu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},F_=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=nu[i]||i,e[1]=nu[n]||n,e.join(" ")},z_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,a=i._gsap,r,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)r=s[c],Ji[r]&&(l=1,r=r==="transformOrigin"?Zi:ae),$s(i,r);l&&($s(i,ae),a&&(a.svg&&i.removeAttribute("transform"),Qs(i,1),a.uncache=1))}},ua={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var a=t._pt=new Me(t._pt,e,i,0,0,z_);return a.u=n,a.pr=-10,a.tween=s,t._props.push(i),1}}},Ks=[1,0,0,1,0,0],du={},pu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},su=function(t){var e=Ri(t,ae);return pu(e)?Ks:e.substr(7).match(al).map(Wt)},Pl=function(t,e){var i=t._gsap||Gi(t),n=t.style,s=su(t),a,r,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ks:s):(s===Ks&&!t.offsetParent&&t!==xs&&!i.svg&&(l=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,r=t.nextSibling,xs.appendChild(t)),s=su(t),l?n.display=l:$s(t,"display"),c&&(r?a.insertBefore(t,r):a?a.appendChild(t):xs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},El=function(t,e,i,n,s,a){var r=t._gsap,l=s||Pl(t,!0),c=r.xOrigin||0,h=r.yOrigin||0,u=r.xOffset||0,f=r.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],w=l[5],T=e.split(" "),v=parseFloat(T[0])||0,y=parseFloat(T[1])||0,A,C,x,b;i?l!==Ks&&(C=m*p-g*d)&&(x=v*(p/C)+y*(-d/C)+(d*w-p*_)/C,b=v*(-g/C)+y*(m/C)-(m*w-g*_)/C,v=x,y=b):(A=uu(t),v=A.x+(~T[0].indexOf("%")?v/100*A.width:v),y=A.y+(~(T[1]||T[0]).indexOf("%")?y/100*A.height:y)),n||n!==!1&&r.smooth?(_=v-c,w=y-h,r.xOffset=u+(_*m+w*d)-_,r.yOffset=f+(_*g+w*p)-w):r.xOffset=r.yOffset=0,r.xOrigin=v,r.yOrigin=y,r.smooth=!!n,r.origin=e,r.originIsAbsolute=!!i,t.style[Zi]="0px 0px",a&&(Yi(a,r,"xOrigin",c,v),Yi(a,r,"yOrigin",h,y),Yi(a,r,"xOffset",u,r.xOffset),Yi(a,r,"yOffset",f,r.yOffset)),t.setAttribute("data-svg-origin",v+" "+y)},Qs=function(t,e){var i=t._gsap||new ml(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,a="px",r="deg",l=Ri(t,Zi)||"0",c,h,u,f,m,g,d,p,_,w,T,v,y,A,C,x,b,L,I,Y,Z,R,k,z,G,q,N,V,Q,J,j,rt;return c=h=u=g=d=p=_=w=T=0,f=m=1,i.svg=!!(t.getCTM&&fu(t)),A=Pl(t,i.svg),i.svg&&(z=(!i.uncache||l==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),El(t,z||l,!!z||i.originIsAbsolute,i.smooth!==!1,A)),v=i.xOrigin||0,y=i.yOrigin||0,A!==Ks&&(L=A[0],I=A[1],Y=A[2],Z=A[3],c=R=A[4],h=k=A[5],A.length===6?(f=Math.sqrt(L*L+I*I),m=Math.sqrt(Z*Z+Y*Y),g=L||I?_s(I,L)*An:0,_=Y||Z?_s(Y,Z)*An+g:0,_&&(m*=Math.abs(Math.cos(_*ys))),i.svg&&(c-=v-(v*L+y*Y),h-=y-(v*I+y*Z))):(rt=A[6],J=A[7],N=A[8],V=A[9],Q=A[10],j=A[11],c=A[12],h=A[13],u=A[14],C=_s(rt,Q),d=C*An,C&&(x=Math.cos(-C),b=Math.sin(-C),z=R*x+N*b,G=k*x+V*b,q=rt*x+Q*b,N=R*-b+N*x,V=k*-b+V*x,Q=rt*-b+Q*x,j=J*-b+j*x,R=z,k=G,rt=q),C=_s(-Y,Q),p=C*An,C&&(x=Math.cos(-C),b=Math.sin(-C),z=L*x-N*b,G=I*x-V*b,q=Y*x-Q*b,j=Z*b+j*x,L=z,I=G,Y=q),C=_s(I,L),g=C*An,C&&(x=Math.cos(C),b=Math.sin(C),z=L*x+I*b,G=R*x+k*b,I=I*x-L*b,k=k*x-R*b,L=z,R=G),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,p=180-p),f=Wt(Math.sqrt(L*L+I*I+Y*Y)),m=Wt(Math.sqrt(k*k+rt*rt)),C=_s(R,k),_=Math.abs(C)>2e-4?C*An:0,T=j?1/(j<0?-j:j):0),i.svg&&(z=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!pu(Ri(t,ae)),z&&t.setAttribute("transform",z))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(f*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=u+a,i.scaleX=Wt(f),i.scaleY=Wt(m),i.rotation=Wt(g)+r,i.rotationX=Wt(d)+r,i.rotationY=Wt(p)+r,i.skewX=_+r,i.skewY=w+r,i.transformPerspective=T+a,(i.zOrigin=parseFloat(l.split(" ")[2])||0)&&(n[Zi]=fa(l)),i.xOffset=i.yOffset=0,i.force3D=Le.force3D,i.renderTransform=i.svg?N_:hu?mu:O_,i.uncache=0,i},fa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Sl=function(t,e,i){var n=re(e);return Wt(parseFloat(e)+parseFloat($i(t,"x",i+"px",n)))+n},O_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mu(t,e)},Sn="0deg",Zs="0px",Tn=") ",mu=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,r=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,m=i.skewY,g=i.scaleX,d=i.scaleY,p=i.transformPerspective,_=i.force3D,w=i.target,T=i.zOrigin,v="",y=_==="auto"&&t&&t!==1||_===!0;if(T&&(u!==Sn||h!==Sn)){var A=parseFloat(h)*ys,C=Math.sin(A),x=Math.cos(A),b;A=parseFloat(u)*ys,b=Math.cos(A),a=Sl(w,a,C*b*-T),r=Sl(w,r,-Math.sin(A)*-T),l=Sl(w,l,x*b*-T+T)}p!==Zs&&(v+="perspective("+p+Tn),(n||s)&&(v+="translate("+n+"%, "+s+"%) "),(y||a!==Zs||r!==Zs||l!==Zs)&&(v+=l!==Zs||y?"translate3d("+a+", "+r+", "+l+") ":"translate("+a+", "+r+Tn),c!==Sn&&(v+="rotate("+c+Tn),h!==Sn&&(v+="rotateY("+h+Tn),u!==Sn&&(v+="rotateX("+u+Tn),(f!==Sn||m!==Sn)&&(v+="skew("+f+", "+m+Tn),(g!==1||d!==1)&&(v+="scale("+g+", "+d+Tn),w.style[ae]=v||"translate(0, 0)"},N_=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,r=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,m=i.target,g=i.xOrigin,d=i.yOrigin,p=i.xOffset,_=i.yOffset,w=i.forceCSS,T=parseFloat(a),v=parseFloat(r),y,A,C,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ys,c*=ys,y=Math.cos(l)*u,A=Math.sin(l)*u,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=ys,b=Math.tan(c-h),b=Math.sqrt(1+b*b),C*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),y*=b,A*=b)),y=Wt(y),A=Wt(A),C=Wt(C),x=Wt(x)):(y=u,x=f,A=C=0),(T&&!~(a+"").indexOf("px")||v&&!~(r+"").indexOf("px"))&&(T=$i(m,"x",a,"px"),v=$i(m,"y",r,"px")),(g||d||p||_)&&(T=Wt(T+g-(g*y+d*C)+p),v=Wt(v+d-(g*A+d*x)+_)),(n||s)&&(b=m.getBBox(),T=Wt(T+n/100*b.width),v=Wt(v+s/100*b.height)),b="matrix("+y+","+A+","+C+","+x+","+T+","+v+")",m.setAttribute("transform",b),w&&(m.style[ae]=b)},B_=function(t,e,i,n,s){var a=360,r=jt(s),l=parseFloat(s)*(r&&~s.indexOf("rad")?An:1),c=l-n,h=n+c+"deg",u,f;return r&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*jh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*jh)%a-~~(c/a)*a)),t._pt=f=new Me(t._pt,e,i,n,c,S_),f.e=h,f.u="deg",t._props.push(i),f},ru=function(t,e){for(var i in e)t[i]=e[i];return t},U_=function(t,e,i){var n=ru({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,r,l,c,h,u,f,m,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[ae]=e,r=Qs(i,1),$s(i,ae),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ae],a[ae]=e,r=Qs(i,1),a[ae]=c);for(l in Ji)c=n[l],h=r[l],c!==h&&s.indexOf(l)<0&&(m=re(c),g=re(h),u=m!==g?$i(i,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Me(t._pt,r,l,u,f-u,ou),t._pt.u=g||0,t._props.push(l));ru(r,n)};we("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",n="Bottom",s="Left",a=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(r){return t<2?o+r:"border"+r+o});ua[t>1?"border"+o:o]=function(r,l,c,h,u){var f,m;if(arguments.length<4)return f=a.map(function(g){return En(r,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),r.init(l,m,u)}});var Rl={name:"css",register:Al,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var a=this._props,r=t.style,l=i.vars.startAt,c,h,u,f,m,g,d,p,_,w,T,v,y,A,C;Cl||Al();for(d in e)if(d!=="autoRound"&&(h=e[d],!(Ce[d]&&_l(d,e,i,n,t,s)))){if(m=typeof h,g=ua[d],m==="function"&&(h=h.call(i,n,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=gs(h)),g)g(this,t,d,h,i)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(d)+"").trim(),h+="",Ei.lastIndex=0,Ei.test(c)||(p=re(c),_=re(h)),_?p!==_&&(c=$i(t,d,c,_)+_):p&&(h+=p),this.add(r,"setProperty",c,h,n,s,0,0,d),a.push(d);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(i,n,t,s):l[d],jt(c)&&~c.indexOf("random(")&&(c=gs(c)),re(c+"")||(c+=Le.units[d]||re(En(t,d))||""),(c+"").charAt(1)==="="&&(c=En(t,d))):c=En(t,d),f=parseFloat(c),w=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),u=parseFloat(h),d in Xi&&(d==="autoAlpha"&&(f===1&&En(t,"visibility")==="hidden"&&u&&(f=0),Yi(this,r,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),d!=="scale"&&d!=="transform"&&(d=Xi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),T=d in Ji,T){if(v||(y=t._gsap,y.renderTransform&&!e.parseTransform||Qs(t,e.parseTransform),A=e.smoothOrigin!==!1&&y.smooth,v=this._pt=new Me(this._pt,r,ae,0,1,y.renderTransform,y,0,-1),v.dep=1),d==="scale")this._pt=new Me(this._pt,y,"scaleY",y.scaleY,(w?Mn(y.scaleY,w+u):u)-y.scaleY||0),a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){h=F_(h),y.svg?El(t,h,0,A,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==y.zOrigin&&Yi(this,y,"zOrigin",y.zOrigin,_),Yi(this,r,d,fa(c),fa(h)));continue}else if(d==="svgOrigin"){El(t,h,1,A,0,this);continue}else if(d in du){B_(this,y,d,f,w?Mn(f,w+h):h);continue}else if(d==="smoothOrigin"){Yi(this,y,"smooth",y.smooth,h);continue}else if(d==="force3D"){y[d]=h;continue}else if(d==="transform"){U_(this,h,t);continue}}else d in r||(d=vs(d)||d);if(T||(u||u===0)&&(f||f===0)&&!b_.test(h)&&d in r)p=(c+"").substr((f+"").length),u||(u=0),_=re(h)||(d in Le.units?Le.units[d]:p),p!==_&&(f=$i(t,d,c,_)),this._pt=new Me(this._pt,T?y:r,d,f,(w?Mn(f,w+u):u)-f,!T&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?A_:ou),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=T_);else if(d in r)I_.call(this,t,d,c,w?w+h:h);else if(d in t)this.add(t,d,c||t[d],w?w+h:h,n,s);else{oa(d,h);continue}a.push(d)}}C&&Ml(this)},get:En,aliases:Xi,getSetter:function(t,e,i){var n=Xi[e];return n&&n.indexOf(",")<0&&(e=n),e in Ji&&e!==Zi&&(t._gsap.x||En(t,"x"))?i&&Qh===i?e==="scale"?R_:P_:(Qh=i||{})&&(e==="scale"?L_:D_):t.style&&!aa(t.style[e])?E_:~e.indexOf("-")?C_:ha(t,e)},core:{_removeProperty:$s,_getMatrix:Pl}};Oe.utils.checkPrefix=vs;(function(o,t,e,i){var n=we(o+","+t+","+e,function(s){Ji[s]=1});we(t,function(s){Le.units[s]="deg",du[s]=1}),Xi[n[13]]=o+","+t,we(i,function(s){var a=s.split(":");Xi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");we("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Le.units[o]="px"});Oe.registerPlugin(Rl);var Ne=Oe.registerPlugin(Rl)||Oe,Px=Ne.core.Tween;k_();async function k_(){let o,t,e=document.getElementById("loading");class i{constructor(){if(setTimeout(()=>{this.header_height=document.getElementById("header_nav").clientHeight}),this.canvas_element=document.getElementById("webgl"),document.getElementById("company_section")){let u=document.getElementById("company_section").clientHeight,f=document.getElementById("hidden_cover");f.style.height=u+f.clientHeight+"px"}}callFunctions(){this.setMainHeight(),this.blackOut(),this.ResponseToEvent()}setMainHeight(){setTimeout(()=>{this.header_height=document.getElementById("header_nav").clientHeight,this.canvas_element&&(this.canvas_element.style.marginTop=this.header_height+"px")})}blackOut(){let u=document.getElementById("hidden_cover");if(document.getElementById("key-visual")){let g=document.getElementById("key-visual").getBoundingClientRect().bottom+window.pageYOffset-window.innerHeight*.88,d=document.getElementById("company_section").getBoundingClientRect().bottom+window.pageYOffset;window.scrollY<g?(u.style.opacity=0,u.style.visibility="invisible"):window.scrollY<=d&&window.scrollY>g?(u.style.opacity=.5,u.style.visibility="visible"):(u.style.opacity=1,u.style.visibility="visible")}}ResponseToEvent(){window.addEventListener("load",this.blackOut.bind(this)),window.addEventListener("scroll",this.blackOut.bind(this)),window.addEventListener("resize",()=>{this.setMainHeight(),this.blackOut()})}}class n{constructor(){this.scene=new Nr,this.canvas=document.createElement("canvas"),this.resized_width=window.innerWidth,this.resized_height=window.innerHeight,this.camera=new ge(75,this.width/this.height,.1,1500),this.camera.position.x=0,this.camera.position.y=30,this.clock=new rs,this.fadein_times=4,this.interval_time=500,this.show_guide_time=this.fadein_times*this.interval_time+3500,this.moving_flag=!1,this.detection=!1,this.shouldAnimate=!0,this.particle_pos=new ht,this.time=0,this.move=0,this.raycaster=new Wr,this.mouse=new ht(-1e3,-1e3),this.point=new ht,this.isMobile=typeof window.ontouchstart<"u"}callFunctions(){this.img.addEventListener("load",()=>{this.init(),this.mouseInteraction(),this.animate(),this.showGuide(),this.setSize(),this.resize()})}setImage(){this.img=new Image,this.isMobile?this.img.src="../img/logo_color_small.png":this.img.src="../img/logo_color.png",this.img.crossOrigin="anonymous"}init(){this.setRendere(),this.addObjects(),this.removeLoadingEnd(),this.fadeParticles(this.fadein_times-1),window.setTimeout(function(){this.moving_flag=!this.moving_flag}.bind(this),this.fadein_times*this.interval_time),window.setTimeout(function(){Ne.to(this.material.uniforms.paramAlpha,{value:.5,duration:1,delay:1})}.bind(this),this.fadein_times*this.interval_time),this.gather2D(this.fadein_times-1,this.interval_time),window.setTimeout(()=>{this.lightOn()},this.fadein_times*this.interval_time+3e3),window.setTimeout(()=>{this.diffusionLoop()},this.show_guide_time+500)}setRendere(){this.renderer=new Uo,this.renderer.setSize(this.width,this.height-this.header_height),this.renderer.physicallyCorrectLights=!0,this.renderer.setClearColor(),this.renderScene=new Kr(this.scene,this.camera),this.bloomPass=new Si(new ht(window.innerWidth,window.innerHeight),1.5,.4,.85),this.bloomPass.threshold=0,this.bloomPass.strength=0,this.bloomPass.radius=0,this.composer=new $r(this.renderer),this.composer.addPass(this.renderScene),this.composer.addPass(this.bloomPass),this.wrapper=document.querySelector("#webgl"),this.wrapper&&this.wrapper.appendChild(this.renderer.domElement)}addObjects(){this.geometry=new he,this.pixcel_img=this.ImagePixel(this.img,this.img.width,this.img.height,2);let u=new Gt(new Float32Array(this.pixcel_img.position),3),f=new Gt(new Float32Array(this.pixcel_img.color),3),m=new Gt(new Float32Array(this.pixcel_img.alpha),1),g=[],d=[],p=[],_=[],w=[],T=[];this.vertces=this.pixcel_img.position.length/3;for(let L=0;L<this.vertces;L++)g.push((Math.random()-1)*2,(Math.random()-1)*2),d.push(1),p.push(a(-1e3,1e3)),_.push(a(.4,1)),w.push(a(.4,1)),T.push(Math.random()>.5?1:-1);let v=new Gt(new Float32Array(g),2),y=new Gt(new Float32Array(d),1),A=new Gt(new Float32Array(p),1),C=new Gt(new Float32Array(_),1),x=new Gt(new Float32Array(w),1),b=new Gt(new Float32Array(T),1);this.geometry.setAttribute("position",u),this.geometry.setAttribute("color",f),this.geometry.setAttribute("alpha",m),this.geometry.setAttribute("rand",v),this.geometry.setAttribute("flag",y),this.geometry.setAttribute("aSpeed",A),this.geometry.setAttribute("aOffset",C),this.geometry.setAttribute("aPress",x),this.geometry.setAttribute("aDirection",b),this.material=new Fs({vertexShader:document.querySelector("#js-vertex-shader").textContent,fragmentShader:document.querySelector("#js-fragment-shader").textContent,uniforms:{u_ratio:{type:"f",value:0},u_time:{type:"f",value:0},u_value:{type:"f",value:0},pointTexture:{value:new Gr().load("../img/triangle.png")},mouse:{type:"v2",value:new ht(0,0)},mousePressed:{type:"f",value:0},move:{type:"f",value:0},time:{type:"f",value:0},mousePressed:{type:"f",value:0},diffusionScale:{type:"f",value:0},circleScale:{type:"f",value:0},cameraZ:{type:"f",value:0},paramAlpha:{type:"f",value:0}},transparent:!0,depthTest:!1}),this.mesh=new kr(this.geometry,this.material),this.mesh.frustumCulled=!1,this.attribute=this.mesh.geometry.attributes.position,this.particlePositions=this.attribute.array,this.particleAlpha=this.mesh.geometry.attributes.alpha.array,this.particleFlag=this.mesh.geometry.attributes.flag.array,this.scene.add(this.mesh)}ImagePixel(u,f,m,g){this.ctx=this.canvas.getContext("2d"),this.canvas_width=f,this.canvas_height=m,this.canvas.width=this.canvas_width,this.canvas.height=this.canvas_height,this.ctx.drawImage(u,0,0),this.data=this.ctx.getImageData(0,0,this.canvas_width,this.canvas_height).data,this.position=[],this.color=[],this.alpha=[];for(let d=0;d<this.canvas_height;d+=g)for(let p=0;p<this.canvas_width;p+=g)this.index=(d*this.canvas_width+p)*4,this.pX=p-this.canvas_width/2,this.pY=-(d-this.canvas_height/2),this.pZ=0,this.r=this.data[this.index+0]/255,this.g=this.data[this.index+1]/255,this.b=this.data[this.index+2]/255,this.a=this.data[this.index+3]/255,this.a>.5&&(this.position.push(this.pX,this.pY,this.pZ),this.color.push(this.r,this.g,this.b),this.alpha.push(this.a));return{position:this.position,color:this.color,alpha:this.alpha}}removeLoadingEnd(){e.style.opacity=0,e.style.visibility="invisible"}fadeParticles(u){for(let f=0;f<u+1;f++)for(let m=0;m<this.vertces;m++){let g=m+Math.floor(Math.random()*2)+1;this.particleAlpha[g]>0&&(this.particleAlpha[g]=.5**(f+6))}}gather2D(u,f){for(let m=0;m<this.vertces;m++){let g={posX:this.attribute.getX(m),posY:this.attribute.getY(m),alpha:this.particleAlpha[m],moveFlag:this.particleFlag[m]};for(let d=0;d<u+1;d++)this.particleAlpha[m]===.5**(d+6)&&Ne.to(g,{alpha:1,moveFlag:1,delay:d*(f/1e3),duration:(f+1e3)/1e3,ease:"Power1.easeOut",onUpdate:()=>{this.particleAlpha[m]=g.alpha,this.particleFlag[m]=g.moveFlag}});Ne.fromTo(g,{posX:s(600,0)*r(),posY:s(600,0)*r()},{posX:this.pixcel_img.position[3*m],posY:this.pixcel_img.position[3*m+1],duration:3,ease:"Power1.easeOut",onUpdate:()=>{this.particlePositions[3*m]=g.posX,this.particlePositions[3*m+1]=g.posY}})}}lightOn(){Ne.fromTo(this.bloomPass,{strength:0,radius:0},{strength:.5,radius:1.5,duration:3})}diffusionLoop(){let u=null;if(document.getElementById("company_section")){let f=document.getElementById("company_section").getBoundingClientRect().bottom+window.pageYOffset;window.scrollY<=f&&u===null&&this.shouldAnimate&&(u=setInterval(function(){this.autoDiffusion()}.bind(this),1e3)),window.addEventListener("scroll",()=>{window.scrollY>f&&u!==null?(clearInterval(u),u=null):window.scrollY<=f&&u===null&&(u=setInterval(function(){this.autoDiffusion()}.bind(this),1e3))}),window.addEventListener("blur",()=>{u!==null&&!this.shouldAnimate&&(clearInterval(u),u=null)}),window.addEventListener("focus",()=>{window.scrollY<=f&&u===null&&this.shouldAnimate&&setTimeout(()=>{u=setInterval(function(){this.autoDiffusion()}.bind(this),1e3)},3e3)})}}autoDiffusion(){if(!this.shouldAnimate)return;let u=new ht,f=new ht,m=new ht,g=new ht,d=new ht,p=new D;u={x:s(375,0),y:s(410,0)},f={x:-1*s(400,0),y:-1*s(230,0)},m={x:[u.x,f.x],y:[u.y,f.y]},g={x:l(m.x),y:l(m.y)},d={x:s(200,5)*r(),y:s(200,5)*r()};let _=20,w=s(200,50),T=[[Math.random(),Math.random()],[-1*Math.random(),Math.random()],[Math.random(),-1*Math.random()],[-1*Math.random(),-1*Math.random()]],v={x:l(T)[0]*w,y:l(T)[1]*w};for(let y=0;y<this.vertces;y++){let A={x:this.attribute.getX(y)*(500/this.camera.position.z)-8,y:this.attribute.getY(y)*(500/this.camera.position.z)+8},C=Math.sqrt(Math.pow(A.x-g.x,2)+Math.pow(A.y-g.y,2)),x=s(110,80)*.001;if(this.particleFlag[y]===1&C<_){this.particleFlag[y]=0;let b=s(300,280)*s(1500,1e3);p={x:this.particlePositions[3*y]+v.x+d.x/(x*b),y:this.particlePositions[3*y+1]+v.y+d.y/(x*b),z:this.particlePositions[3*y+2]+a(200,0)};let L={posX:this.attribute.getX(y),posY:this.attribute.getY(y),posZ:this.attribute.getZ(y),moveFlag:this.particleFlag[y]},I=Ne.timeline();if(I.to(L,{posX:p.x,posY:p.y,posZ:p.z,moveFlag:0,duration:x*b/1e3,repeat:1,yoyo:!0,ease:"Power1.easeOut",onUpdate:()=>{this.particlePositions[3*y]=L.posX,this.particlePositions[3*y+1]=L.posY,this.particlePositions[3*y+2]=L.posZ,this.particleFlag[y]=L.moveFlag}}),window.addEventListener("blur",()=>{I.pause()}),window.addEventListener("focus",()=>{I.resume()}),this.moving_flag&this.mesh.position.z+2e3/(x*500)<=this.camera.position.z*.3){let Y=Ne.timeline();Y.to(this.mesh.rotation,{x:p.y/1e3*-1,y:p.x/1e3*-1,duration:10,repeat:1,delay:2,yoyo:!0}),Y.to(this.mesh.position,{x:p.x/(x*1e3),y:p.y*-1/(x*1e3),z:this.mesh.position.z+2e3/(x*500),duration:10,repeat:1,delay:2,yoyo:!0},"<"),Y.to(this.bloomPass,{strength:2,radius:.5,duration:10,repeat:1,delay:2,yoyo:!0,onComplete:()=>{setTimeout(()=>{this.moving_flag=!this.moving_flag},a(1e3,3e3))}},"<"),window.addEventListener("blur",()=>{Y.pause()}),window.addEventListener("focus",()=>{Y.resume()}),this.moving_flag=!this.moving_flag}}}}mouseInteraction(){let u=new _e(new pn(2e3,2e3),new bi),f=document.getElementById("hidden_cover");this.isMobile?(window.addEventListener("touchstart",m=>{this.mouse.x=m.changedTouches[0].clientX/this.resized_width*2-1,this.mouse.y=-(m.changedTouches[0].clientY/this.resized_height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let g=this.raycaster.intersectObjects([u]);this.point.x=g[0].point.x,this.point.y=g[0].point.y,f.style.opacity==0&&Ne.to(this.material.uniforms.mousePressed,{duration:.3,value:1,ease:"ease.out(1, 0.3)"})}),window.addEventListener("touchend",m=>{Ne.to(this.material.uniforms.mousePressed,{duration:.3,value:0,ease:"ease.out(1, 0.3)"})}),window.addEventListener("touchmove",m=>{this.mouse.x=m.changedTouches[0].clientX/this.resized_width*2-1,this.mouse.y=-(m.changedTouches[0].clientY/this.resized_height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let g=this.raycaster.intersectObjects([u]);this.point.x=g[0].point.x,this.point.y=g[0].point.y},!1)):window.addEventListener("mousemove",m=>{this.mouse.x=m.clientX/window.innerWidth*2-1,this.mouse.y=-(m.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let g=this.raycaster.intersectObjects([u]);this.point.x=g[0].point.x,this.point.y=g[0].point.y,document.getElementById("hidden_cover")&&(document.getElementById("hidden_cover").style.opacity==0?Ne.to(this.material.uniforms.mousePressed,{duration:.3,value:1,ease:"ease.out(1, 0.3)"}):Ne.to(this.material.uniforms.mousePressed,{duration:.3,value:0,ease:"ease.out(1, 0.3)"}))},!1)}animate(){this.shouldAnimate&&(this.time++,this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.render(),this.getDeltaTime=this.clock.getDelta(),document.querySelector("#webgl")&&requestAnimationFrame(this.animate.bind(this)),window.setTimeout(()=>{this.mesh.material.uniforms.u_time.value+=2*this.getDeltaTime,this.mesh.material.uniforms.mouse.value=this.point,this.mesh.material.uniforms.time.value=this.time,this.mesh.material.uniforms.move.value=this.move,typeof window.ontouchstart>"u"?(this.mesh.material.uniforms.diffusionScale.value=180,this.mesh.material.uniforms.circleScale.value=50):(this.mesh.material.uniforms.diffusionScale.value=80,this.mesh.material.uniforms.circleScale.value=25)},this.fadein_times*this.interval_time),this.mesh.geometry.attributes.alpha.needsUpdate=!0,this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.flag.needsUpdate=!0,window.addEventListener("blur",()=>{this.shouldAnimate=!1}),window.addEventListener("focus",()=>{this.shouldAnimate||(this.shouldAnimate=!0,this.animate())}))}showGuide(){this.nav_block=document.getElementById("nav_block"),this.circle=document.getElementById("circle"),this.animation_nav=Ne.timeline(),this.animation_nav.to(this.circle,{duration:.5,opacity:.7,y:5}).to(this.circle,{duration:.5,x:anime_nav.clientWidth*.5}).to(this.circle,{duration:.4,opacity:0,x:anime_nav.clientWidth*.8,y:-5}),this.animation_nav.repeat(-1),window.addEventListener("blur",()=>{this.animation_nav.pause()}),window.addEventListener("focus",()=>{this.animation_nav.resume()}),window.setTimeout(()=>{this.nav_block.style.opacity=1,this.nav_block.style.visibility="visible"},this.fadein_times*this.interval_time+5e3)}setSize(){this.width=window.innerWidth,this.height=window.innerHeight,this.header_height=document.getElementById("header_nav").clientHeight,this.camera.aspect=this.width/(this.height-this.header_height),this.camera.updateProjectionMatrix(),this.updateCameraAndUniforms(this.isMobile,this.width,this.height,this.camera,this.mesh,nav_block),this.renderer.setSize(this.width,this.height-this.header_height),this.resized_width=window.innerWidth,this.resized_height=window.innerHeight}updateCameraAndUniforms(u,f,m,g,d,p){let _=f/m,w=C=>m/f*C,T=(C,x)=>{d.material.uniforms.u_value.value=(f+m)/C-(x+m)/f},v=700,y=864;u?f>=1440?f<m?(g.position.z=d.material.uniforms.cameraZ.value=w(230),T(180,1200)):_>1.85?(g.position.z=d.material.uniforms.cameraZ.value=w(120),T(200,2800)):(g.position.z=d.material.uniforms.cameraZ.value=w(170),T(180,2800)):f<m?(g.position.z=d.material.uniforms.cameraZ.value=w(200),T(180,1600),p.style.bottom=m*.15+"px"):_>1.8?(g.position.z=d.material.uniforms.cameraZ.value=w(120),T(200,3400),p.style.display="none"):(g.position.z=d.material.uniforms.cameraZ.value=w(330),T(200,2800),p.style.bottom=m*.15+"px"):f>=v?(g.position.z=d.material.uniforms.cameraZ.value=400,m<=y?T(1e3,1200):T(600,1200)):(g.position.z=d.material.uniforms.cameraZ.value=w(400),T(1800,1200))}resize(){this.currentWidth=window.innerWidth,this.currentHeight=window.innerHeight,window.addEventListener("resize",function(){if(this.currentWidth==window.innerWidth&typeof window.ontouchstart<"u"){this.currentHeight<window.innerHeight?this.nav_block.style.bottom=this.height*.15+80+"px":this.nav_block.style.bottom=this.height*.15+"px";return}this.currentWidth=window.innerWidth,this.setSize()}.bind(this))}}await c();function s(h,u){return Math.floor(Math.random()*h+1-u)+u}function a(h,u){return h+(u-h)*Math.random()}function r(){return Math.random()<.5?1:-1}function l(h){return h[Math.floor(Math.random()*h.length)]}function c(){document.querySelector("#webgl")&&(o=new i,t=new n,t.setImage(),o.callFunctions(),t.callFunctions())}}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2022 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.10.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.10.4
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
