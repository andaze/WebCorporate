(()=>{var No="141";var wu=0,Il=1,Mu=2;var Kc=1,bu=2,As=3,Ps=0,je=1,Qn=2,Su=1;var ki=0,Zn=1,br=2,Fl=3,zl=4,Tu=5,Xn=100,Au=101,Eu=102,Ol=103,Nl=104,Cu=200,Pu=201,Ru=202,Lu=203,Qc=204,jc=205,Du=206,Iu=207,Fu=208,zu=209,Ou=210,Nu=0,Bu=1,ku=2,Za=3,Uu=4,Vu=5,Hu=6,Gu=7,qr=0,Wu=1,qu=2,Mi=0,Xu=1,Yu=2,Ju=3,Zu=4,$u=5,th=300,jn=301,ts=302,$a=303,Ka=304,Xr=306,Qa=1e3,Ke=1001,ja=1002,Se=1003,Bl=1004;var kl=1005;var ke=1006,Ku=1007;var Yr=1008;var cn=1009,Qu=1010,ju=1011,eh=1012,tf=1013,sn=1014,rn=1015,Rs=1016,ef=1017,nf=1018,$n=1020,sf=1021,rf=1022,Qe=1023,af=1024,of=1025,on=1026,es=1027,lf=1028,cf=1029,hf=1030,uf=1031,ff=1033,ga=33776,_a=33777,xa=33778,va=33779,Ul=35840,Vl=35841,Hl=35842,Gl=35843,df=36196,Wl=37492,ql=37496,Xl=37808,Yl=37809,Jl=37810,Zl=37811,$l=37812,Kl=37813,Ql=37814,jl=37815,tc=37816,ec=37817,ic=37818,nc=37819,sc=37820,rc=37821,ac=36492;var Sr=2300,Tr=2301,ya=2302,oc=2400,lc=2401,cc=2402;var pf=2501;var hn=3e3,Ut=3001,mf=3200,gf=3201,as=0,_f=1;var yi="srgb",an="srgb-linear";var wa=7680;var xf=519,hc=35044;var uc="300 es",to=1035,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},se=[];for(let o=0;o<256;o++)se[o]=(o<16?"0":"")+o.toString(16);var Ma=Math.PI/180,fc=180/Math.PI;function Os(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(se[o&255]+se[o>>8&255]+se[o>>16&255]+se[o>>24&255]+"-"+se[t&255]+se[t>>8&255]+"-"+se[t>>16&15|64]+se[t>>24&255]+"-"+se[e&63|128]+se[e>>8&255]+"-"+se[e>>16&255]+se[e>>24&255]+se[i&255]+se[i>>8&255]+se[i>>16&255]+se[i>>24&255]).toLowerCase()}function Te(o,t,e){return Math.max(t,Math.min(e,o))}function vf(o,t){return(o%t+t)%t}function ba(o,t,e){return(1-e)*o+e*t}function dc(o){return(o&o-1)===0&&o!==0}function eo(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}var ht=class{constructor(t=0,e=0){this.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,n,s,a,r,c,l){let h=this.elements;return h[0]=t,h[1]=n,h[2]=r,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],m=i[5],g=i[8],d=n[0],p=n[3],_=n[6],v=n[1],T=n[4],y=n[7],M=n[2],A=n[5],C=n[8];return s[0]=a*d+r*v+c*M,s[3]=a*p+r*T+c*A,s[6]=a*_+r*y+c*C,s[1]=l*d+h*v+f*M,s[4]=l*p+h*T+f*A,s[7]=l*_+h*y+f*C,s[2]=u*d+m*v+g*M,s[5]=u*p+m*T+g*A,s[8]=u*_+m*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*r*l-i*s*h+i*r*c+n*s*l-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=h*a-r*l,u=r*c-h*s,m=l*s-a*c,g=e*f+i*u+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/g;return t[0]=f*d,t[1]=(n*l-h*i)*d,t[2]=(r*i-n*a)*d,t[3]=u*d,t[4]=(h*e-n*c)*d,t[5]=(n*s-r*e)*d,t[6]=m*d,t[7]=(i*c-l*e)*d,t[8]=(a*e-i*s)*d,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*r)+a+t,-n*l,n*c,-n*(-l*a+c*r)+r+e,0,0,1),this}scale(t,e){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){let e=Math.cos(t),i=Math.sin(t),n=this.elements,s=n[0],a=n[3],r=n[6],c=n[1],l=n[4],h=n[7];return n[0]=e*s+i*c,n[3]=e*a+i*l,n[6]=e*r+i*h,n[1]=-i*s+e*c,n[4]=-i*a+e*l,n[7]=-i*r+e*h,this}translate(t,e){let i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};function ih(o){for(let t=o.length-1;t>=0;--t)if(o[t]>65535)return!0;return!1}function Ls(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ln(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var Sa={[yi]:{[an]:ln},[an]:{[yi]:Mr}},Ye={legacyMode:!0,get workingColorSpace(){return an},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Sa[t]&&Sa[t][e]!==void 0){let i=Sa[t][e];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={r:0,g:0,b:0},Je={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Ta(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function er(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}var ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=an){return this.r=t,this.g=e,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=an){if(t=vf(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ta(a,s,t+1/3),this.g=Ta(a,s,t),this.b=Ta(a,s,t-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(t,e=yi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s,a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ye.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ye.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){let c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(c,l,h,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ye.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=yi){let i=nh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ye.fromWorkingColorSpace(er(this,Yt),t),Te(Yt.r*255,0,255)<<16^Te(Yt.g*255,0,255)<<8^Te(Yt.b*255,0,255)<<0}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=an){Ye.fromWorkingColorSpace(er(this,Yt),e);let i=Yt.r,n=Yt.g,s=Yt.b,a=Math.max(i,n,s),r=Math.min(i,n,s),c,l,h=(r+a)/2;if(r===a)c=0,l=0;else{let f=a-r;switch(l=h<=.5?f/(a+r):f/(2-a-r),a){case i:c=(n-s)/f+(n<s?6:0);break;case n:c=(s-i)/f+2;break;case s:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=an){return Ye.fromWorkingColorSpace(er(this,Yt),e),t.r=Yt.r,t.g=Yt.g,t.b=Yt.b,t}getStyle(t=yi){return Ye.fromWorkingColorSpace(er(this,Yt),t),t!==yi?`color(${t} ${Yt.r} ${Yt.g} ${Yt.b})`:`rgb(${Yt.r*255|0},${Yt.g*255|0},${Yt.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Je),Je.h+=t,Je.s+=e,Je.l+=i,this.setHSL(Je.h,Je.s,Je.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Je),t.getHSL(tr);let i=ba(Je.h,tr.h,e),n=ba(Je.s,tr.s,e),s=ba(Je.l,tr.l,e);return this.setHSL(i,n,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};ft.NAMES=nh;var Dn,Ar=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=Ls("canvas")),Dn.width=t.width,Dn.height=t.height;let i=Dn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ls("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ln(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Er=class{constructor(t=null){this.isSource=!0,this.uuid=Os(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Aa(n[a].image)):s.push(Aa(n[a]))}else s=Aa(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Aa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ar.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yf=0,Ae=class extends Ui{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,i=Ke,n=Ke,s=ke,a=Yr,r=Qe,c=cn,l=1,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Os(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=th;var ee=class{constructor(t=0,e=0,i=0,n=1){this.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,y=(m+1)/2,M=(_+1)/2,A=(h+u)/4,C=(f+d)/4,x=(g+p)/4;return T>y&&T>M?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=A/i,s=C/i):y>M?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=A/n,s=x/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=C/s,n=x/s),this.set(i,n,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-d)/v,this.z=(u-h)/v,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ce=class extends Ui{constructor(t,e,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let n={width:t,height:e,depth:1};this.texture=new Ae(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ke,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class extends Ae{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var io=class extends Ae{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerp(t,e,i,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(t,e,n)}static slerpFlat(t,e,i,n,s,a,r){let c=i[n+0],l=i[n+1],h=i[n+2],f=i[n+3],u=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(f!==d||c!==u||l!==m||h!==g){let p=1-r,_=c*u+l*m+h*g+f*d,v=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){let M=Math.sqrt(T),A=Math.atan2(M,_*v);p=Math.sin(p*A)/M,r=Math.sin(r*A)/M}let y=r*v;if(c=c*p+u*y,l=l*p+m*y,h=h*p+g*y,f=f*p+d*y,p===1-r){let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,s,a){let r=i[n],c=i[n+1],l=i[n+2],h=i[n+3],f=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return t[e]=r*g+h*f+c*m-l*u,t[e+1]=c*g+h*u+l*f-r*m,t[e+2]=l*g+h*m+r*u-c*f,t[e+3]=h*g-r*f-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,c=Math.sin,l=r(i/2),h=r(n/2),f=r(s/2),u=c(i/2),m=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"YZX":this._x=u*h*f+l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f-u*m*g;break;case"XZY":this._x=u*h*f-l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+r+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-n)*m}else if(i>r&&i>f){let m=2*Math.sqrt(1+i-r-f);this._w=(h-c)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(s+l)/m}else if(r>f){let m=2*Math.sqrt(1+r-i-f);this._w=(s-l)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-i-r);this._w=(a-n)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*r+n*l-s*c,this._y=n*h+a*c+s*r-i*l,this._z=s*h+a*l+i*c-n*r,this._w=a*h-i*r-n*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-r*r;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,r),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=n*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(t=0,e=0,i=0){this.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,c=t.w,l=c*e+a*n-r*i,h=c*i+r*e-s*n,f=c*n+s*i-a*e,u=-s*e-a*i-r*n;return this.x=l*c+u*-s+h*-r-f*-a,this.y=h*c+u*-a+f*-s-l*-r,this.z=f*c+u*-r+l*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,c=e.z;return this.x=n*c-s*r,this.y=s*a-i*c,this.z=i*r-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ea=new D,pc=new hi,un=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let c=0,l=t.length;c<l;c+=3){let h=t[c],f=t[c+1],u=t[c+2];h<e&&(e=h),f<i&&(i=f),u<n&&(n=u),h>s&&(s=h),f>a&&(a=f),u>r&&(r=u)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let c=0,l=t.count;c<l;c++){let h=t.getX(c),f=t.getY(c),u=t.getZ(c);h<e&&(e=h),f<i&&(i=f),u<n&&(n=u),h>s&&(s=h),f>a&&(a=f),u>r&&(r=u)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let a=0,r=s.count;a<r;a++)Qi.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Qi)}else i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox),Ca.applyMatrix4(t.matrixWorld),this.union(Ca);let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),ir.subVectors(this.max,bs),In.subVectors(t.a,bs),Fn.subVectors(t.b,bs),zn.subVectors(t.c,bs),Di.subVectors(Fn,In),Ii.subVectors(zn,Fn),ji.subVectors(In,zn);let e=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!Pa(e,In,Fn,zn,ir)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,In,Fn,zn,ir))?!1:(nr.crossVectors(Di,Ii),e=[nr.x,nr.y,nr.z],Pa(e,In,Fn,zn,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},mi=[new D,new D,new D,new D,new D,new D,new D,new D],Qi=new D,Ca=new un,In=new D,Fn=new D,zn=new D,Di=new D,Ii=new D,ji=new D,bs=new D,ir=new D,nr=new D,tn=new D;function Pa(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){tn.fromArray(o,s);let r=n.x*Math.abs(tn.x)+n.y*Math.abs(tn.y)+n.z*Math.abs(tn.z),c=t.dot(tn),l=e.dot(tn),h=i.dot(tn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}var wf=new un,mc=new D,sr=new D,Ra=new D,is=class{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):wf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ra.subVectors(t,this.center);let e=Ra.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.add(Ra.multiplyScalar(n/i)),this.radius+=n}return this}union(t){return this.center.equals(t.center)===!0?sr.set(0,0,1).multiplyScalar(t.radius):sr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(mc.copy(t.center).add(sr)),this.expandByPoint(mc.copy(t.center).sub(sr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new D,La=new D,rr=new D,Fi=new D,Da=new D,ar=new D,Ia=new D,Ds=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.direction).multiplyScalar(e).add(this.origin),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){La.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(La);let s=t.distanceTo(e)*.5,a=-this.direction.dot(rr),r=Fi.dot(this.direction),c=-Fi.dot(rr),l=Fi.lengthSq(),h=Math.abs(1-a*a),f,u,m,g;if(h>0)if(f=a*c-r,u=a*r-c,g=s*h,f>=0)if(u>=-g)if(u<=g){let d=1/h;f*=d,u*=d,m=f*(f+a*u+2*r)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+r)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+r)),m=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+r)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(a*s+r)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+r)),m=-f*f+u*(u+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),n&&n.copy(rr).multiplyScalar(u).add(La),m}intersectSphere(t,e){gi.subVectors(t.center,this.origin);let i=gi.dot(this.direction),n=gi.dot(gi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),r=i-a,c=i+a;return r<0&&c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>n||((s>i||i!==i)&&(i=s),(a<n||n!==n)&&(n=a),f>=0?(r=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(r=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,n,s){Da.subVectors(e,t),ar.subVectors(i,t),Ia.crossVectors(Da,ar);let a=this.direction.dot(Ia),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Fi.subVectors(this.origin,t);let c=r*this.direction.dot(ar.crossVectors(Fi,ar));if(c<0)return null;let l=r*this.direction.dot(Da.cross(Fi));if(l<0||c+l>a)return null;let h=-r*Fi.dot(Ia);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,n,s,a,r,c,l,h,f,u,m,g,d,p){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=s,_[5]=a,_[9]=r,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=u,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/On.setFromMatrixColumn(t,0).length(),s=1/On.setFromMatrixColumn(t,1).length(),a=1/On.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=a*h,m=a*f,g=r*h,d=r*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=u-d*l,e[9]=-r*c,e[2]=d-u*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,m=c*f,g=l*h,d=l*f;e[0]=u+d*r,e[4]=g*r-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-r,e[2]=m*r-g,e[6]=d+u*r,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,m=c*f,g=l*h,d=l*f;e[0]=u-d*r,e[4]=-a*f,e[8]=g+m*r,e[1]=m+g*r,e[5]=a*h,e[9]=d-u*r,e[2]=-a*l,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,m=a*f,g=r*h,d=r*f;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+d,e[1]=c*f,e[5]=d*l+u,e[9]=m*l-g,e[2]=-l,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,m=a*l,g=r*c,d=r*l;e[0]=c*h,e[4]=d-u*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-r*h,e[2]=-l*h,e[6]=m*f+g,e[10]=u-d*f}else if(t.order==="XZY"){let u=a*c,m=a*l,g=r*c,d=r*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+d,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=r*h,e[10]=d*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,bf)}lookAt(t,e,i){let n=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),zi.crossVectors(i,Fe),zi.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),zi.crossVectors(i,Fe)),zi.normalize(),or.crossVectors(Fe,zi),n[0]=zi.x,n[4]=or.x,n[8]=Fe.x,n[1]=zi.y,n[5]=or.y,n[9]=Fe.y,n[2]=zi.z,n[6]=or.z,n[10]=Fe.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],m=i[13],g=i[2],d=i[6],p=i[10],_=i[14],v=i[3],T=i[7],y=i[11],M=i[15],A=n[0],C=n[4],x=n[8],b=n[12],I=n[1],R=n[5],J=n[9],Z=n[13],L=n[2],k=n[6],z=n[10],H=n[14],G=n[3],N=n[7],V=n[11],K=n[15];return s[0]=a*A+r*I+c*L+l*G,s[4]=a*C+r*R+c*k+l*N,s[8]=a*x+r*J+c*z+l*V,s[12]=a*b+r*Z+c*H+l*K,s[1]=h*A+f*I+u*L+m*G,s[5]=h*C+f*R+u*k+m*N,s[9]=h*x+f*J+u*z+m*V,s[13]=h*b+f*Z+u*H+m*K,s[2]=g*A+d*I+p*L+_*G,s[6]=g*C+d*R+p*k+_*N,s[10]=g*x+d*J+p*z+_*V,s[14]=g*b+d*Z+p*H+_*K,s[3]=v*A+T*I+y*L+M*G,s[7]=v*C+T*R+y*k+M*N,s[11]=v*x+T*J+y*z+M*V,s[15]=v*b+T*Z+y*H+M*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+s*c*f-n*l*f-s*r*u+i*l*u+n*r*m-i*c*m)+d*(+e*c*m-e*l*u+s*a*u-n*a*m+n*l*h-s*c*h)+p*(+e*l*f-e*r*m-s*a*f+i*a*m+s*r*h-i*l*h)+_*(-n*r*h-e*c*f+e*r*u+n*a*f-i*a*u+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],v=f*p*l-d*u*l+d*c*m-r*p*m-f*c*_+r*u*_,T=g*u*l-h*p*l-g*c*m+a*p*m+h*c*_-a*u*_,y=h*d*l-g*f*l+g*r*m-a*d*m-h*r*_+a*f*_,M=g*f*c-h*d*c-g*r*u+a*d*u+h*r*p-a*f*p,A=e*v+i*T+n*y+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=v*C,t[1]=(d*u*s-f*p*s-d*n*m+i*p*m+f*n*_-i*u*_)*C,t[2]=(r*p*s-d*c*s+d*n*l-i*p*l-r*n*_+i*c*_)*C,t[3]=(f*c*s-r*u*s-f*n*l+i*u*l+r*n*m-i*c*m)*C,t[4]=T*C,t[5]=(h*p*s-g*u*s+g*n*m-e*p*m-h*n*_+e*u*_)*C,t[6]=(g*c*s-a*p*s-g*n*l+e*p*l+a*n*_-e*c*_)*C,t[7]=(a*u*s-h*c*s+h*n*l-e*u*l-a*n*m+e*c*m)*C,t[8]=y*C,t[9]=(g*f*s-h*d*s-g*i*m+e*d*m+h*i*_-e*f*_)*C,t[10]=(a*d*s-g*r*s+g*i*l-e*d*l-a*i*_+e*r*_)*C,t[11]=(h*r*s-a*f*s-h*i*l+e*f*l+a*i*m-e*r*m)*C,t[12]=M*C,t[13]=(h*d*n-g*f*n+g*i*u-e*d*u-h*i*p+e*f*p)*C,t[14]=(g*r*n-a*d*n-g*i*c+e*d*c+a*i*p-e*r*p)*C,t[15]=(a*f*n-h*r*n+h*i*c-e*f*c-a*i*u+e*r*u)*C,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,c=t.z,l=s*a,h=s*r;return this.set(l*a+i,l*r-n*c,l*c+n*r,0,l*r+n*c,h*r+i,h*c-n*a,0,l*c-n*r,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,r=e._z,c=e._w,l=s+s,h=a+a,f=r+r,u=s*l,m=s*h,g=s*f,d=a*h,p=a*f,_=r*f,v=c*l,T=c*h,y=c*f,M=i.x,A=i.y,C=i.z;return n[0]=(1-(d+_))*M,n[1]=(m+y)*M,n[2]=(g-T)*M,n[3]=0,n[4]=(m-y)*A,n[5]=(1-(u+_))*A,n[6]=(p+v)*A,n[7]=0,n[8]=(g+T)*C,n[9]=(p-v)*C,n[10]=(1-(u+d))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=On.set(n[0],n[1],n[2]).length(),a=On.set(n[4],n[5],n[6]).length(),r=On.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ze.copy(this);let l=1/s,h=1/a,f=1/r;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=f,Ze.elements[9]*=f,Ze.elements[10]*=f,e.setFromRotationMatrix(Ze),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let r=this.elements,c=2*s/(e-t),l=2*s/(i-n),h=(e+t)/(e-t),f=(i+n)/(i-n),u=-(a+s)/(a-s),m=-2*a*s/(a-s);return r[0]=c,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=f,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,n,s,a){let r=this.elements,c=1/(e-t),l=1/(i-n),h=1/(a-s),f=(e+t)*c,u=(i+n)*l,m=(a+s)*h;return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-f,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},On=new D,Ze=new Zt,Mf=new D(0,0,0),bf=new D(1,1,1),zi=new D,or=new D,Fe=new D,gc=new Zt,_c=new hi,fn=class{constructor(t=0,e=0,i=0,n=fn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],r=n[8],c=n[1],l=n[5],h=n[9],f=n[2],u=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};fn.DefaultOrder="XYZ";fn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,xc=new D,Nn=new hi,_i=new Zt,lr=new D,Ss=new D,Tf=new D,Af=new hi,vc=new D(1,0,0),yc=new D(0,1,0),wc=new D(0,0,1),Ef={type:"added"},Mc={type:"removed"},Ee=class extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DefaultUp.clone();let t=new D,e=new fn,i=new hi,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ve}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Ee.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.premultiply(Nn),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lr.copy(t):lr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ss,lr,this.up):_i.lookAt(lr,Ss,this.up),this.quaternion.setFromRotationMatrix(_i),n&&(_i.extractRotation(n.matrixWorld),Nn.setFromRotationMatrix(_i),this.quaternion.premultiply(Nn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mc)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Mc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){let c=this.animations[r];n.animations.push(s(t.animations,c))}}if(e){let r=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){let c=[];for(let l in r){let h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Ee.DefaultUp=new D(0,1,0);Ee.DefaultMatrixAutoUpdate=!0;var $e=new D,xi=new D,Fa=new D,vi=new D,Bn=new D,kn=new D,bc=new D,za=new D,Oa=new D,Na=new D,Ue=class{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),$e.subVectors(t,e),n.cross($e);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){$e.subVectors(n,e),xi.subVectors(i,e),Fa.subVectors(t,e);let a=$e.dot($e),r=$e.dot(xi),c=$e.dot(Fa),l=xi.dot(xi),h=xi.dot(Fa),f=a*l-r*r;if(f===0)return s.set(-2,-1,-1);let u=1/f,m=(l*c-r*h)*u,g=(a*h-r*c)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,vi),vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(t,e,i,n,s,a,r,c){return this.getBarycoord(t,e,i,n,vi),c.set(0,0),c.addScaledVector(s,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(r,vi.z),c}static isFrontFacing(t,e,i,n){return $e.subVectors(i,e),xi.subVectors(t,e),$e.cross(xi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),$e.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ue.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ue.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Ue.getUV(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Ue.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ue.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,r;Bn.subVectors(n,i),kn.subVectors(s,i),za.subVectors(t,i);let c=Bn.dot(za),l=kn.dot(za);if(c<=0&&l<=0)return e.copy(i);Oa.subVectors(t,n);let h=Bn.dot(Oa),f=kn.dot(Oa);if(h>=0&&f<=h)return e.copy(n);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Bn,a);Na.subVectors(t,s);let m=Bn.dot(Na),g=kn.dot(Na);if(g>=0&&m<=g)return e.copy(s);let d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(i).addScaledVector(kn,r);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return bc.subVectors(s,n),r=(f-h)/(f-h+(m-g)),e.copy(n).addScaledVector(bc,r);let _=1/(p+d+u);return a=d*_,r=u*_,e.copy(i).addScaledVector(Bn,a).addScaledVector(kn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cf=0,$t=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Zn,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qc,this.blendDst=jc,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Su;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(i.blending=this.blending),this.side!==Ps&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){let a=[];for(let r in s){let c=s[r];delete c.metadata,a.push(c)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(t){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}};$t.fromType=function(){return null};var bi=class extends $t{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xt=new D,cr=new ht,Gt=class{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=hc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new ft),e[i++]=a.r,e[i++]=a.g,e[i++]=a.b}return this}copyVector2sArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new ht),e[i++]=a.x,e[i++]=a.y}return this}copyVector3sArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new D),e[i++]=a.x,e[i++]=a.y,e[i++]=a.z}return this}copyVector4sArray(t){let e=this.array,i=0;for(let n=0,s=t.length;n<s;n++){let a=t[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new ee),e[i++]=a.x,e[i++]=a.y,e[i++]=a.z,e[i++]=a.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix3(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix4(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyNormalMatrix(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.transformDirection(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}};var Pr=class extends Gt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Rr=class extends Gt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends Gt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Pf=0,Be=new Zt,Ba=new Ee,Un=new D,ze=new un,Ts=new un,te=new D,he=class extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ih(t)?Rr:Pr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(te.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(te),te.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(te)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let r=e[s];Ts.setFromBufferAttribute(r),this.morphTargetsRelative?(te.addVectors(ze.min,Ts.min),ze.expandByPoint(te),te.addVectors(ze.max,Ts.max),ze.expandByPoint(te)):(ze.expandByPoint(Ts.min),ze.expandByPoint(Ts.max))}ze.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)te.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(te));if(e)for(let s=0,a=e.length;s<a;s++){let r=e[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)te.fromBufferAttribute(r,l),c&&(Un.fromBufferAttribute(t,l),te.add(Un)),n=Math.max(n,i.distanceToSquared(te))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let I=0;I<r;I++)l[I]=new D,h[I]=new D;let f=new D,u=new D,m=new D,g=new ht,d=new ht,p=new ht,_=new D,v=new D;function T(I,R,J){f.fromArray(n,I*3),u.fromArray(n,R*3),m.fromArray(n,J*3),g.fromArray(a,I*2),d.fromArray(a,R*2),p.fromArray(a,J*2),u.sub(f),m.sub(f),d.sub(g),p.sub(g);let Z=1/(d.x*p.y-p.x*d.y);isFinite(Z)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(Z),v.copy(m).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(Z),l[I].add(_),l[R].add(_),l[J].add(_),h[I].add(v),h[R].add(v),h[J].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let I=0,R=y.length;I<R;++I){let J=y[I],Z=J.start,L=J.count;for(let k=Z,z=Z+L;k<z;k+=3)T(i[k+0],i[k+1],i[k+2])}let M=new D,A=new D,C=new D,x=new D;function b(I){C.fromArray(s,I*3),x.copy(C);let R=l[I];M.copy(R),M.sub(C.multiplyScalar(C.dot(R))).normalize(),A.crossVectors(x,R);let Z=A.dot(h[I])<0?-1:1;c[I*4]=M.x,c[I*4+1]=M.y,c[I*4+2]=M.z,c[I*4+3]=Z}for(let I=0,R=y.length;I<R;++I){let J=y[I],Z=J.start,L=J.count;for(let k=Z,z=Z+L;k<z;k+=3)b(i[k+0]),b(i[k+1]),b(i[k+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let n=new D,s=new D,a=new D,r=new D,c=new D,l=new D,h=new D,f=new D;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),d=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(n,s),h.cross(f),r.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),l.fromBufferAttribute(i,p),r.add(h),c.add(h),l.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(d,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(n,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let i=this.attributes;for(let n in i){if(t.attributes[n]===void 0)continue;let a=i[n].array,r=t.attributes[n],c=r.array,l=r.itemSize*e,h=Math.min(c.length,a.length-l);for(let f=0,u=l;f<h;f++,u++)a[u]=c[f]}return this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)te.fromBufferAttribute(t,e),te.normalize(),t.setXYZ(e,te.x,te.y,te.z)}toNonIndexed(){function t(r,c){let l=r.array,h=r.itemSize,f=r.normalized,u=new l.constructor(c.length*h),m=0,g=0;for(let d=0,p=c.length;d<p;d++){r.isInterleavedBufferAttribute?m=c[d]*r.data.stride+r.offset:m=c[d]*h;for(let _=0;_<h;_++)u[g++]=l[m++]}return new Gt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new he,i=this.index.array,n=this.attributes;for(let r in n){let c=n[r],l=t(c,i);e.setAttribute(r,l)}let s=this.morphAttributes;for(let r in s){let c=[],l=s[r];for(let h=0,f=l.length;h<f;h++){let u=l[h],m=t(u,i);c.push(m)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let r=0,c=a.length;r<c;r++){let l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(n[c]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Sc=new Zt,Vn=new Ds,ka=new is,Oi=new D,Ni=new D,Bi=new D,Ua=new D,Va=new D,Ha=new D,hr=new D,ur=new D,fr=new D,dr=new ht,pr=new ht,mr=new ht,Ga=new D,gr=new D,_e=class extends Ee{constructor(t=new he,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),t.ray.intersectsSphere(ka)===!1)||(Sc.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(Sc),i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1))return;let a,r=i.index,c=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative,f=i.attributes.uv,u=i.attributes.uv2,m=i.groups,g=i.drawRange;if(r!==null)if(Array.isArray(n))for(let d=0,p=m.length;d<p;d++){let _=m[d],v=n[_.materialIndex],T=Math.max(_.start,g.start),y=Math.min(r.count,Math.min(_.start+_.count,g.start+g.count));for(let M=T,A=y;M<A;M+=3){let C=r.getX(M),x=r.getX(M+1),b=r.getX(M+2);a=_r(this,v,t,Vn,c,l,h,f,u,C,x,b),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{let d=Math.max(0,g.start),p=Math.min(r.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){let T=r.getX(_),y=r.getX(_+1),M=r.getX(_+2);a=_r(this,n,t,Vn,c,l,h,f,u,T,y,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(n))for(let d=0,p=m.length;d<p;d++){let _=m[d],v=n[_.materialIndex],T=Math.max(_.start,g.start),y=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let M=T,A=y;M<A;M+=3){let C=M,x=M+1,b=M+2;a=_r(this,v,t,Vn,c,l,h,f,u,C,x,b),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{let d=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let _=d,v=p;_<v;_+=3){let T=_,y=_+1,M=_+2;a=_r(this,n,t,Vn,c,l,h,f,u,T,y,M),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}};function Rf(o,t,e,i,n,s,a,r){let c;if(t.side===je?c=i.intersectTriangle(a,s,n,!0,r):c=i.intersectTriangle(n,s,a,t.side!==Qn,r),c===null)return null;gr.copy(r),gr.applyMatrix4(o.matrixWorld);let l=e.ray.origin.distanceTo(gr);return l<e.near||l>e.far?null:{distance:l,point:gr.clone(),object:o}}function _r(o,t,e,i,n,s,a,r,c,l,h,f){Oi.fromBufferAttribute(n,l),Ni.fromBufferAttribute(n,h),Bi.fromBufferAttribute(n,f);let u=o.morphTargetInfluences;if(s&&u){hr.set(0,0,0),ur.set(0,0,0),fr.set(0,0,0);for(let g=0,d=s.length;g<d;g++){let p=u[g],_=s[g];p!==0&&(Ua.fromBufferAttribute(_,l),Va.fromBufferAttribute(_,h),Ha.fromBufferAttribute(_,f),a?(hr.addScaledVector(Ua,p),ur.addScaledVector(Va,p),fr.addScaledVector(Ha,p)):(hr.addScaledVector(Ua.sub(Oi),p),ur.addScaledVector(Va.sub(Ni),p),fr.addScaledVector(Ha.sub(Bi),p)))}Oi.add(hr),Ni.add(ur),Bi.add(fr)}o.isSkinnedMesh&&(o.boneTransform(l,Oi),o.boneTransform(h,Ni),o.boneTransform(f,Bi));let m=Rf(o,t,e,i,Oi,Ni,Bi,Ga);if(m){r&&(dr.fromBufferAttribute(r,l),pr.fromBufferAttribute(r,h),mr.fromBufferAttribute(r,f),m.uv=Ue.getUV(Ga,Oi,Ni,Bi,dr,pr,mr,new ht)),c&&(dr.fromBufferAttribute(c,l),pr.fromBufferAttribute(c,h),mr.fromBufferAttribute(c,f),m.uv2=Ue.getUV(Ga,Oi,Ni,Bi,dr,pr,mr,new ht));let g={a:l,b:h,c:f,normal:new D,materialIndex:0};Ue.getNormal(Oi,Ni,Bi,g.normal),m.face=g}return m}var dn=class extends he{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function g(d,p,_,v,T,y,M,A,C,x,b){let I=y/C,R=M/x,J=y/2,Z=M/2,L=A/2,k=C+1,z=x+1,H=0,G=0,N=new D;for(let V=0;V<z;V++){let K=V*R-Z;for(let Y=0;Y<k;Y++){let j=Y*I-J;N[d]=j*v,N[p]=K*T,N[_]=L,l.push(N.x,N.y,N.z),N[d]=0,N[p]=0,N[_]=A>0?1:-1,h.push(N.x,N.y,N.z),f.push(Y/C),f.push(1-V/x),H+=1}}for(let V=0;V<x;V++)for(let K=0;K<C;K++){let Y=u+K+k*V,j=u+K+k*(V+1),rt=u+(K+1)+k*(V+1),dt=u+(K+1)+k*V;c.push(Y,j,dt),c.push(j,rt,dt),G+=6}r.addGroup(m,G,b),m+=G,u+=H}}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(o){let t={};for(let e in o){t[e]={};for(let i in o[e]){let n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function le(o){let t={};for(let e=0;e<o.length;e++){let i=ns(o[e]);for(let n in i)t[n]=i[n]}return t}var os={clone:ns,merge:le},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends $t{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Lr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ge=class extends Lr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hn=90,Gn=1,no=class extends Ee{constructor(t,e,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let n=new ge(Hn,Gn,t,e);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new D(1,0,0)),this.add(n);let s=new ge(Hn,Gn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);let a=new ge(Hn,Gn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new D(0,1,0)),this.add(a);let r=new ge(Hn,Gn,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new D(0,-1,0)),this.add(r);let c=new ge(Hn,Gn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);let l=new ge(Hn,Gn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[n,s,a,r,c,l]=this.children,h=t.getRenderTarget(),f=t.toneMapping,u=t.xr.enabled;t.toneMapping=Mi,t.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,r),t.setRenderTarget(i,4),t.render(e,c),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=f,t.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},Dr=class extends Ae{constructor(t,e,i,n,s,a,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:jn,super(t,e,i,n,s,a,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends ce{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Dr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new dn(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:ki});s.uniforms.tEquirect.value=e;let a=new _e(n,s),r=e.minFilter;return e.minFilter===Yr&&(e.minFilter=ke),new no(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Wa=new D,If=new D,Ff=new Ve,wi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Wa.subVectors(i,e).cross(If.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let i=t.delta(Wa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ff.getNormalMatrix(t),n=this.coplanarPoint(Wa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new is,xr=new D,Ir=class{constructor(t=new wi,e=new wi,i=new wi,n=new wi,s=new wi,a=new wi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){let e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],r=i[3],c=i[4],l=i[5],h=i[6],f=i[7],u=i[8],m=i[9],g=i[10],d=i[11],p=i[12],_=i[13],v=i[14],T=i[15];return e[0].setComponents(r-n,f-c,d-u,T-p).normalize(),e[1].setComponents(r+n,f+c,d+u,T+p).normalize(),e[2].setComponents(r+s,f+l,d+m,T+_).normalize(),e[3].setComponents(r-s,f-l,d-m,T-_).normalize(),e[4].setComponents(r-a,f-h,d-g,T-v).normalize(),e[5].setComponents(r+a,f+h,d+g,T+v).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(xr.x=n.normal.x>0?t.max.x:t.min.x,xr.y=n.normal.y>0?t.max.y:t.min.y,xr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sh(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function zf(o,t){let e=t.isWebGL2,i=new WeakMap;function n(l,h){let f=l.array,u=l.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,f,u),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){let u=h.array,m=h.updateRange;o.bindBuffer(f,l),m.count===-1?o.bufferSubData(f,0,u):(e?o.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):o.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(o.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=i.get(l);(!u||u.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=i.get(l);f===void 0?i.set(l,n(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:a,remove:r,update:c}}var pn=class extends he{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,h=c+1,f=t/r,u=e/c,m=[],g=[],d=[],p=[];for(let _=0;_<h;_++){let v=_*u-a;for(let T=0;T<l;T++){let y=T*f-s;g.push(y,-v,0),d.push(0,0,1),p.push(T/r),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<r;v++){let T=v+l*_,y=v+l*(_+1),M=v+1+l*(_+1),A=v+1+l*_;m.push(T,y,A),m.push(y,M,A)}this.setIndex(m),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2))}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}},Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
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
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
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
}`,kp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Tt={alphamap_fragment:Of,alphamap_pars_fragment:Nf,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:Uf,aomap_pars_fragment:Vf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:qf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:$f,color_fragment:Kf,color_pars_fragment:Qf,color_pars_vertex:jf,color_vertex:td,common:ed,cube_uv_reflection_fragment:id,defaultnormal_vertex:nd,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:ad,emissivemap_pars_fragment:od,encodings_fragment:ld,encodings_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:fd,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Sd,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:xd,gradientmap_pars_fragment:vd,lightmap_fragment:yd,lightmap_pars_fragment:wd,lights_lambert_vertex:Md,lights_pars_begin:bd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ad,lights_phong_fragment:Ed,lights_phong_pars_fragment:Cd,lights_physical_fragment:Pd,lights_physical_pars_fragment:Rd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Id,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:Nd,map_fragment:Bd,map_pars_fragment:kd,map_particle_fragment:Ud,map_particle_pars_fragment:Vd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Gd,morphcolor_vertex:Wd,morphnormal_vertex:qd,morphtarget_pars_vertex:Xd,morphtarget_vertex:Yd,normal_fragment_begin:Jd,normal_fragment_maps:Zd,normal_pars_fragment:$d,normal_pars_vertex:Kd,normal_vertex:Qd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:ip,iridescence_pars_fragment:np,output_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:dp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:vp,specularmap_fragment:yp,specularmap_pars_fragment:wp,tonemapping_fragment:Mp,tonemapping_pars_fragment:bp,transmission_fragment:Sp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Ep,uv_vertex:Cp,uv2_pars_fragment:Pp,uv2_pars_vertex:Rp,uv2_vertex:Lp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Fp,cube_vert:zp,cube_frag:Op,depth_vert:Np,depth_frag:Bp,distanceRGBA_vert:kp,distanceRGBA_frag:Up,equirect_vert:Vp,equirect_frag:Hp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:qp,meshbasic_frag:Xp,meshlambert_vert:Yp,meshlambert_frag:Jp,meshmatcap_vert:Zp,meshmatcap_frag:$p,meshnormal_vert:Kp,meshnormal_frag:Qp,meshphong_vert:jp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:im,meshtoon_vert:nm,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},nt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ve},uv2Transform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}}},ci={basic:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.fog,nt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:le([nt.points,nt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:le([nt.common,nt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:le([nt.sprite,nt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},cube:{uniforms:le([nt.envmap,{opacity:{value:1}}]),vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:le([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:le([nt.lights,nt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ci.physical={uniforms:le([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ht(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function um(o,t,e,i,n,s){let a=new ft(0),r=n===!0?0:1,c,l,h=null,f=0,u=null;function m(d,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=t.get(v));let T=o.xr,y=T.getSession&&T.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?g(a,r):v&&v.isColor&&(g(v,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xr)?(l===void 0&&(l=new _e(new dn(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ns(ci.cube.uniforms),vertexShader:ci.cube.vertexShader,fragmentShader:ci.cube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(h!==v||f!==v.version||u!==o.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _e(new pn(2,2),new Kt({name:"BackgroundMaterial",uniforms:ns(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),r=p,g(a,r)},getClearAlpha:function(){return r},setClearAlpha:function(d){r=d,g(a,r)},render:m}}function fm(o,t,e,i){let n=o.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,r={},c=p(null),l=c,h=!1;function f(L,k,z,H,G){let N=!1;if(a){let V=d(H,z,k);l!==V&&(l=V,m(l.object)),N=_(L,H,z,G),N&&v(L,H,z,G)}else{let V=k.wireframe===!0;(l.geometry!==H.id||l.program!==z.id||l.wireframe!==V)&&(l.geometry=H.id,l.program=z.id,l.wireframe=V,N=!0)}G!==null&&e.update(G,34963),(N||h)&&(h=!1,x(L,k,z,H),G!==null&&o.bindBuffer(34963,e.get(G).buffer))}function u(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?o.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?o.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function d(L,k,z){let H=z.wireframe===!0,G=r[L.id];G===void 0&&(G={},r[L.id]=G);let N=G[k.id];N===void 0&&(N={},G[k.id]=N);let V=N[H];return V===void 0&&(V=p(u()),N[H]=V),V}function p(L){let k=[],z=[],H=[];for(let G=0;G<n;G++)k[G]=0,z[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:H,object:L,attributes:{},index:null}}function _(L,k,z,H){let G=l.attributes,N=k.attributes,V=0,K=z.getAttributes();for(let Y in K)if(K[Y].location>=0){let rt=G[Y],dt=N[Y];if(dt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;V++}return l.attributesNum!==V||l.index!==H}function v(L,k,z,H){let G={},N=k.attributes,V=0,K=z.getAttributes();for(let Y in K)if(K[Y].location>=0){let rt=N[Y];rt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));let dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),G[Y]=dt,V++}l.attributes=G,l.attributesNum=V,l.index=H}function T(){let L=l.newAttributes;for(let k=0,z=L.length;k<z;k++)L[k]=0}function y(L){M(L,0)}function M(L,k){let z=l.newAttributes,H=l.enabledAttributes,G=l.attributeDivisors;z[L]=1,H[L]===0&&(o.enableVertexAttribArray(L),H[L]=1),G[L]!==k&&((i.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),G[L]=k)}function A(){let L=l.newAttributes,k=l.enabledAttributes;for(let z=0,H=k.length;z<H;z++)k[z]!==L[z]&&(o.disableVertexAttribArray(z),k[z]=0)}function C(L,k,z,H,G,N){i.isWebGL2===!0&&(z===5124||z===5125)?o.vertexAttribIPointer(L,k,z,G,N):o.vertexAttribPointer(L,k,z,H,G,N)}function x(L,k,z,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();let G=H.attributes,N=z.getAttributes(),V=k.defaultAttributeValues;for(let K in N){let Y=N[K];if(Y.location>=0){let j=G[K];if(j===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let rt=j.normalized,dt=j.itemSize,q=e.get(j);if(q===void 0)continue;let kt=q.buffer,wt=q.type,Mt=q.bytesPerElement;if(j.isInterleavedBufferAttribute){let at=j.data,zt=at.stride,At=j.offset;if(at.isInstancedInterleavedBuffer){for(let xt=0;xt<Y.locationSize;xt++)M(Y.location+xt,at.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<Y.locationSize;xt++)y(Y.location+xt);o.bindBuffer(34962,kt);for(let xt=0;xt<Y.locationSize;xt++)C(Y.location+xt,dt/Y.locationSize,wt,rt,zt*Mt,(At+dt/Y.locationSize*xt)*Mt)}else{if(j.isInstancedBufferAttribute){for(let at=0;at<Y.locationSize;at++)M(Y.location+at,j.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let at=0;at<Y.locationSize;at++)y(Y.location+at);o.bindBuffer(34962,kt);for(let at=0;at<Y.locationSize;at++)C(Y.location+at,dt/Y.locationSize,wt,rt,dt*Mt,dt/Y.locationSize*at*Mt)}}else if(V!==void 0){let rt=V[K];if(rt!==void 0)switch(rt.length){case 2:o.vertexAttrib2fv(Y.location,rt);break;case 3:o.vertexAttrib3fv(Y.location,rt);break;case 4:o.vertexAttrib4fv(Y.location,rt);break;default:o.vertexAttrib1fv(Y.location,rt)}}}}A()}function b(){J();for(let L in r){let k=r[L];for(let z in k){let H=k[z];for(let G in H)g(H[G].object),delete H[G];delete k[z]}delete r[L]}}function I(L){if(r[L.id]===void 0)return;let k=r[L.id];for(let z in k){let H=k[z];for(let G in H)g(H[G].object),delete H[G];delete k[z]}delete r[L.id]}function R(L){for(let k in r){let z=r[k];if(z[L.id]===void 0)continue;let H=z[L.id];for(let G in H)g(H[G].object),delete H[G];delete z[L.id]}}function J(){Z(),h=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:J,resetDefaultState:Z,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:y,disableUnusedAttributes:A}}function dm(o,t,e,i){let n=i.isWebGL2,s;function a(l){s=l}function r(l,h){o.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,f){if(f===0)return;let u,m;if(n)u=o,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,f),e.update(h,s,f)}this.setMode=a,this.render=r,this.renderInstances=c}function pm(o,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext,r=e.precision!==void 0?e.precision:"highp",c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);let l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=o.getParameter(34930),u=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),v=o.getParameter(36349),T=u>0,y=a||t.has("OES_texture_float"),M=T&&y,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:T,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function mm(o){let t=this,e=null,i=0,n=!1,s=!1,a=new wi,r=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u,m){let g=f.length!==0||u||i!==0||n;return n=u,e=h(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,u,m){let g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=o.get(f);if(!n||g===null||g.length===0||s&&!p)s?h(null):l();else{let v=s?0:i,T=v*4,y=_.clippingState||null;c.value=y,y=h(g,u,T,m);for(let M=0;M!==T;++M)y[M]=e[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,m,g){let d=f!==null?f.length:0,p=null;if(d!==0){if(p=c.value,g!==!0||p===null){let _=m+d*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let T=0,y=m;T!==d;++T,y+=4)a.copy(f[T]).applyMatrix4(v,r),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function gm(o){let t=new WeakMap;function e(a,r){return r===$a?a.mapping=jn:r===Ka&&(a.mapping=ts),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let r=a.mapping;if(r===$a||r===Ka)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new so(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){let r=a.target;r.removeEventListener("dispose",n);let c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var mn=class extends Lr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yn=4,Tc=[.125,.215,.35,.446,.526,.582],nn=20,qa=new mn,Ac=new ft,Xa=null,en=(1+Math.sqrt(5))/2,qn=1/en,Ec=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,en,qn),new D(0,en,-qn),new D(qn,0,en),new D(-qn,0,en),new D(en,qn,0),new D(-en,qn,0)],Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Xa=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa),t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jn||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Rs,format:Qe,encoding:hn,depthBuffer:!1},n=Cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=xm(s,t,e)}return n}_compileMaterial(t){let e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,i,n){let r=new ge(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Ac),h.toneMapping=Mi,h.autoClear=!1;let m=new bi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new _e(new dn,m),d=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(Ac),d=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(r.up.set(0,c[_],0),r.lookAt(l[_],0,0)):v===1?(r.up.set(0,0,c[_]),r.lookAt(0,l[_],0)):(r.up.set(0,c[_],0),r.lookAt(0,0,l[_]));let T=this._cubeSize;vr(n,v*T,_>2?T:0,T,T),h.setRenderTarget(n),d&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===jn||t.mapping===ts;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;let c=this._cubeSize;vr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,qa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Ec[(n-1)%Ec.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new _e(this._lodPlanes[n],l),u=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*nn-1),d=s/g,p=isFinite(s)?1+Math.floor(h*d):nn;p>nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nn}`);let _=[],v=0;for(let C=0;C<nn;++C){let x=C/d,b=Math.exp(-x*x/2);_.push(b),C===0?v+=b:C<p&&(v+=2*b)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=a==="latitudinal",r&&(u.poleAxis.value=r);let{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-i;let y=this._sizeLods[n],M=3*y*(n>T-Yn?n-T+Yn:0),A=4*(this._cubeSize-y);vr(e,M,A,3*y,2*y),c.setRenderTarget(e),c.render(f,qa)}};function _m(o){let t=[],e=[],i=[],n=o,s=o-Yn+1+Tc.length;for(let a=0;a<s;a++){let r=Math.pow(2,n);e.push(r);let c=1/r;a>o-Yn?c=Tc[a-o+Yn-1]:a===0&&(c=0),i.push(c);let l=1/(r-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,d=3,p=2,_=1,v=new Float32Array(d*g*m),T=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){let C=A%3*2/3-1,x=A>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(b,d*g*A),T.set(u,p*g*A);let I=[A,A,A,A,A,A];y.set(I,_*g*A)}let M=new he;M.setAttribute("position",new Gt(v,d)),M.setAttribute("uv",new Gt(T,p)),M.setAttribute("faceIndex",new Gt(y,_)),t.push(M),n>Yn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cc(o,t,e){let i=new ce(o,t,e);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vr(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function xm(o,t,e){let i=new Float32Array(nn),n=new D(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Pc(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Rc(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}function vm(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){let c=r.mapping,l=c===$a||c===Ka,h=c===jn||c===ts;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new Fr(o)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{let f=r.image;if(l&&f&&f.height>0||h&&f&&n(f)){e===null&&(e=new Fr(o));let u=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function n(r){let c=0,l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){let c=r.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ym(o){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function wm(o,t,e,i){let n={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];let m=s.get(u);m&&(t.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(f,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],34962);let m=f.morphAttributes;for(let g in m){let d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function l(f){let u=[],m=f.index,g=f.attributes.position,d=0;if(m!==null){let v=m.array;d=m.version;for(let T=0,y=v.length;T<y;T+=3){let M=v[T+0],A=v[T+1],C=v[T+2];u.push(M,A,A,C,C,M)}}else{let v=g.array;d=g.version;for(let T=0,y=v.length/3-1;T<y;T+=3){let M=T+0,A=T+1,C=T+2;u.push(M,A,A,C,C,M)}}let p=new(ih(u)?Rr:Pr)(u,1);p.version=d;let _=s.get(f);_&&t.remove(_),s.set(f,p)}function h(f){let u=s.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:r,update:c,getWireframeAttribute:h}}function Mm(o,t,e,i){let n=i.isWebGL2,s;function a(u){s=u}let r,c;function l(u){r=u.type,c=u.bytesPerElement}function h(u,m){o.drawElements(s,m,r,u*c),e.update(m,s,1)}function f(u,m,g){if(g===0)return;let d,p;if(n)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,r,u*c,g),e.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f}function bm(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Sm(o,t){return o[0]-t[0]}function Tm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Ya(o,t){let e=1,i=t.isInterleavedBufferAttribute?t.data.array:t.array;i instanceof Int8Array?e=127:i instanceof Int16Array?e=32767:i instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),o.divideScalar(e)}function Am(o,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ee,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,f,u){let m=l.morphTargetInfluences;if(t.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=g!==void 0?g.length:0,p=s.get(h);if(p===void 0||p.count!==d){let k=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",k)};p!==void 0&&p.texture.dispose();let T=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],x=h.morphAttributes.color||[],b=0;T===!0&&(b=1),y===!0&&(b=2),M===!0&&(b=3);let I=h.attributes.position.count*b,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let J=new Float32Array(I*R*4*d),Z=new Cr(J,I,R,d);Z.type=rn,Z.needsUpdate=!0;let L=b*4;for(let z=0;z<d;z++){let H=A[z],G=C[z],N=x[z],V=I*R*4*z;for(let K=0;K<H.count;K++){let Y=K*L;T===!0&&(a.fromBufferAttribute(H,K),H.normalized===!0&&Ya(a,H),J[V+Y+0]=a.x,J[V+Y+1]=a.y,J[V+Y+2]=a.z,J[V+Y+3]=0),y===!0&&(a.fromBufferAttribute(G,K),G.normalized===!0&&Ya(a,G),J[V+Y+4]=a.x,J[V+Y+5]=a.y,J[V+Y+6]=a.z,J[V+Y+7]=0),M===!0&&(a.fromBufferAttribute(N,K),N.normalized===!0&&Ya(a,N),J[V+Y+8]=a.x,J[V+Y+9]=a.y,J[V+Y+10]=a.z,J[V+Y+11]=N.itemSize===4?a.w:1)}}p={count:d,texture:Z,size:new ht(I,R)},s.set(h,p),h.addEventListener("dispose",k)}let _=0;for(let T=0;T<m.length;T++)_+=m[T];let v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(o,"morphTargetBaseInfluence",v),u.getUniforms().setValue(o,"morphTargetInfluences",m),u.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{let g=m===void 0?0:m.length,d=i[h.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];i[h.id]=d}for(let y=0;y<g;y++){let M=d[y];M[0]=y,M[1]=m[y]}d.sort(Tm);for(let y=0;y<8;y++)y<g&&d[y][1]?(r[y][0]=d[y][0],r[y][1]=d[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(Sm);let p=h.morphAttributes.position,_=h.morphAttributes.normal,v=0;for(let y=0;y<8;y++){let M=r[y],A=M[0],C=M[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+y)!==p[A]&&h.setAttribute("morphTarget"+y,p[A]),_&&h.getAttribute("morphNormal"+y)!==_[A]&&h.setAttribute("morphNormal"+y,_[A]),n[y]=C,v+=C):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),_&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}let T=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(o,"morphTargetBaseInfluence",T),u.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:c}}function Em(o,t,e,i){let n=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,f=t.get(c,h);return n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function a(){n=new WeakMap}function r(c){let l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}var rh=new Ae,ah=new Cr,oh=new io,lh=new Dr,Lc=[],Dc=[],Ic=new Float32Array(16),Fc=new Float32Array(9),zc=new Float32Array(4);function ls(o,t,e){let i=o[0];if(i<=0||i>0)return o;let n=t*e,s=Lc[n];if(s===void 0&&(s=new Float32Array(n),Lc[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function ve(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function ye(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function Jr(o,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function Cm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Pm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;o.uniform2fv(this.addr,t),ye(e,t)}}function Rm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;o.uniform3fv(this.addr,t),ye(e,t)}}function Lm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;o.uniform4fv(this.addr,t),ye(e,t)}}function Dm(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,i))return;zc.set(i),o.uniformMatrix2fv(this.addr,!1,zc),ye(e,i)}}function Im(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,i))return;Fc.set(i),o.uniformMatrix3fv(this.addr,!1,Fc),ye(e,i)}}function Fm(o,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,i))return;Ic.set(i),o.uniformMatrix4fv(this.addr,!1,Ic),ye(e,i)}}function zm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Om(o,t){let e=this.cache;ve(e,t)||(o.uniform2iv(this.addr,t),ye(e,t))}function Nm(o,t){let e=this.cache;ve(e,t)||(o.uniform3iv(this.addr,t),ye(e,t))}function Bm(o,t){let e=this.cache;ve(e,t)||(o.uniform4iv(this.addr,t),ye(e,t))}function km(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Um(o,t){let e=this.cache;ve(e,t)||(o.uniform2uiv(this.addr,t),ye(e,t))}function Vm(o,t){let e=this.cache;ve(e,t)||(o.uniform3uiv(this.addr,t),ye(e,t))}function Hm(o,t){let e=this.cache;ve(e,t)||(o.uniform4uiv(this.addr,t),ye(e,t))}function Gm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||rh,n)}function Wm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||oh,n)}function qm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||lh,n)}function Xm(o,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ah,n)}function Ym(o){switch(o){case 5126:return Cm;case 35664:return Pm;case 35665:return Rm;case 35666:return Lm;case 35674:return Dm;case 35675:return Im;case 35676:return Fm;case 5124:case 35670:return zm;case 35667:case 35671:return Om;case 35668:case 35672:return Nm;case 35669:case 35673:return Bm;case 5125:return km;case 36294:return Um;case 36295:return Vm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Jm(o,t){o.uniform1fv(this.addr,t)}function Zm(o,t){let e=ls(t,this.size,2);o.uniform2fv(this.addr,e)}function $m(o,t){let e=ls(t,this.size,3);o.uniform3fv(this.addr,e)}function Km(o,t){let e=ls(t,this.size,4);o.uniform4fv(this.addr,e)}function Qm(o,t){let e=ls(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function jm(o,t){let e=ls(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function tg(o,t){let e=ls(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function eg(o,t){o.uniform1iv(this.addr,t)}function ig(o,t){o.uniform2iv(this.addr,t)}function ng(o,t){o.uniform3iv(this.addr,t)}function sg(o,t){o.uniform4iv(this.addr,t)}function rg(o,t){o.uniform1uiv(this.addr,t)}function ag(o,t){o.uniform2uiv(this.addr,t)}function og(o,t){o.uniform3uiv(this.addr,t)}function lg(o,t){o.uniform4uiv(this.addr,t)}function cg(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTexture2D(t[s]||rh,n[s])}function hg(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTexture3D(t[s]||oh,n[s])}function ug(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTextureCube(t[s]||lh,n[s])}function fg(o,t,e){let i=t.length,n=Jr(e,i);o.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||ah,n[s])}function dg(o){switch(o){case 5126:return Jm;case 35664:return Zm;case 35665:return $m;case 35666:return Km;case 35674:return Qm;case 35675:return jm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}var ro=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Ym(e.type)}},ao=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=dg(e.type)}},oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let r=n[s];r.setValue(t,e[r.id],i)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function Oc(o,t){o.seq.push(t),o.map[t.id]=t}function pg(o,t,e){let i=o.name,n=i.length;for(Ja.lastIndex=0;;){let s=Ja.exec(i),a=Ja.lastIndex,r=s[1],c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&a+2===n){Oc(e,l===void 0?new ro(r,o,t):new ao(r,o,t));break}else{let f=e.map[r];f===void 0&&(f=new oo(r),Oc(e,f)),e=f}}}var Kn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);pg(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let r=e[s],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Nc(o,t,e){let i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}var mg=0;function gg(o,t){let e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function _g(o){switch(o){case hn:return["Linear","( value )"];case Ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Bc(o,t,e){let i=o.getShaderParameter(t,35713),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+gg(o.getShaderSource(t),a)}else return n}function xg(o,t){let e=_g(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function vg(o,t){let e;switch(t){case Xu:e="Linear";break;case Yu:e="Reinhard";break;case Ju:e="OptimizedCineon";break;case Zu:e="ACESFilmic";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function wg(o){let t=[];for(let e in o){let i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mg(o,t){let e={},i=o.getProgramParameter(t,35721);for(let n=0;n<i;n++){let s=o.getActiveAttrib(t,n),a=s.name,r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Es(o){return o!==""}function kc(o,t){return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(o){return o.replace(bg,Sg)}function Sg(o,t){let e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return lo(e)}var Tg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(o){return o.replace(Ag,ch).replace(Tg,Eg)}function Eg(o,t,e,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ch(o,t,e,i)}function ch(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Hc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===As&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case jn:case ts:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Lg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qr:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case qu:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ig(o,t,e,i){let n=o.getContext(),s=e.defines,a=e.vertexShader,r=e.fragmentShader,c=Cg(e),l=Pg(e),h=Rg(e),f=Lg(e),u=Dg(e),m=e.isWebGL2?"":yg(e),g=wg(s),d=n.createProgram(),p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Es).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Es).join(`
`),_.length>0&&(_+=`
`)):(p=[Hc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),_=[m,Hc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Tt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,xg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=lo(a),a=kc(a,e),a=Uc(a,e),r=lo(r),r=kc(r,e),r=Uc(r,e),a=Vc(a),r=Vc(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let T=v+p+a,y=v+_+r,M=Nc(n,35633,T),A=Nc(n,35632,y);if(n.attachShader(d,M),n.attachShader(d,A),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),o.debug.checkShaderErrors){let b=n.getProgramInfoLog(d).trim(),I=n.getShaderInfoLog(M).trim(),R=n.getShaderInfoLog(A).trim(),J=!0,Z=!0;if(n.getProgramParameter(d,35714)===!1){J=!1;let L=Bc(n,M,"vertex"),k=Bc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+L+`
`+k)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(I===""||R==="")&&(Z=!1);Z&&(this.diagnostics={runnable:J,programLog:b,vertexShader:{log:I,prefix:p},fragmentShader:{log:R,prefix:_}})}n.deleteShader(M),n.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new Kn(n,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Mg(n,d)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=A,this}var Fg=0,co=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){let e=this.shaderCache;if(e.has(t)===!1){let i=new ho(t);e.set(t,i)}return e.get(t)}},ho=class{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}};function zg(o,t,e,i,n,s,a){let r=new Is,c=new co,l=[],h=n.isWebGL2,f=n.logarithmicDepthBuffer,u=n.vertexTextures,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,b,I,R,J){let Z=R.fog,L=J.geometry,k=x.isMeshStandardMaterial?R.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),H=z&&z.mapping===Xr?z.image.height:null,G=g[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let N=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,V=N!==void 0?N.length:0,K=0;L.morphAttributes.position!==void 0&&(K=1),L.morphAttributes.normal!==void 0&&(K=2),L.morphAttributes.color!==void 0&&(K=3);let Y,j,rt,dt;if(G){let zt=ci[G];Y=zt.vertexShader,j=zt.fragmentShader}else Y=x.vertexShader,j=x.fragmentShader,c.update(x),rt=c.getVertexShaderID(x),dt=c.getFragmentShaderID(x);let q=o.getRenderTarget(),kt=x.alphaTest>0,wt=x.clearcoat>0,Mt=x.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:x.type,vertexShader:Y,fragmentShader:j,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:u,outputEncoding:q===null?o.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:hn,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:H,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===_f,tangentSpaceNormalMap:x.normalMapType===as,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ut,clearcoat:wt,clearcoatMap:wt&&!!x.clearcoatMap,clearcoatRoughnessMap:wt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:wt&&!!x.clearcoatNormalMap,iridescence:Mt,iridescenceMap:Mt&&!!x.iridescenceMap,iridescenceThicknessMap:Mt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Zn,alphaMap:!!x.alphaMap,alphaTest:kt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Z,useFog:x.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Mi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qn,flipSided:x.side===je,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(b,x),v(b,x),b.push(o.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.map&&r.enable(4),b.matcap&&r.enable(5),b.envMap&&r.enable(6),b.lightMap&&r.enable(7),b.aoMap&&r.enable(8),b.emissiveMap&&r.enable(9),b.bumpMap&&r.enable(10),b.normalMap&&r.enable(11),b.objectSpaceNormalMap&&r.enable(12),b.tangentSpaceNormalMap&&r.enable(13),b.clearcoat&&r.enable(14),b.clearcoatMap&&r.enable(15),b.clearcoatRoughnessMap&&r.enable(16),b.clearcoatNormalMap&&r.enable(17),b.iridescence&&r.enable(18),b.iridescenceMap&&r.enable(19),b.iridescenceThicknessMap&&r.enable(20),b.displacementMap&&r.enable(21),b.specularMap&&r.enable(22),b.roughnessMap&&r.enable(23),b.metalnessMap&&r.enable(24),b.gradientMap&&r.enable(25),b.alphaMap&&r.enable(26),b.alphaTest&&r.enable(27),b.vertexColors&&r.enable(28),b.vertexAlphas&&r.enable(29),b.vertexUvs&&r.enable(30),b.vertexTangents&&r.enable(31),b.uvsVertexOnly&&r.enable(32),b.fog&&r.enable(33),x.push(r.mask),r.disableAll(),b.useFog&&r.enable(0),b.flatShading&&r.enable(1),b.logarithmicDepthBuffer&&r.enable(2),b.skinning&&r.enable(3),b.morphTargets&&r.enable(4),b.morphNormals&&r.enable(5),b.morphColors&&r.enable(6),b.premultipliedAlpha&&r.enable(7),b.shadowMapEnabled&&r.enable(8),b.physicallyCorrectLights&&r.enable(9),b.doubleSided&&r.enable(10),b.flipSided&&r.enable(11),b.useDepthPacking&&r.enable(12),b.dithering&&r.enable(13),b.specularIntensityMap&&r.enable(14),b.specularColorMap&&r.enable(15),b.transmission&&r.enable(16),b.transmissionMap&&r.enable(17),b.thicknessMap&&r.enable(18),b.sheen&&r.enable(19),b.sheenColorMap&&r.enable(20),b.sheenRoughnessMap&&r.enable(21),b.decodeVideoTexture&&r.enable(22),b.opaque&&r.enable(23),x.push(r.mask)}function T(x){let b=g[x.type],I;if(b){let R=ci[b];I=os.clone(R.uniforms)}else I=x.uniforms;return I}function y(x,b){let I;for(let R=0,J=l.length;R<J;R++){let Z=l[R];if(Z.cacheKey===b){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new Ig(o,b,x,s),l.push(I)),I}function M(x){if(--x.usedTimes===0){let b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function C(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:C}}function Og(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function i(s,a,r){o.get(s)[a]=r}function n(){o=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Ng(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Wc(){let o=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(f,u,m,g,d,p){let _=o[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},o[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),t++,_}function r(f,u,m,g,d,p){let _=a(f,u,m,g,d,p);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):e.push(_)}function c(f,u,m,g,d,p){let _=a(f,u,m,g,d,p);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):e.unshift(_)}function l(f,u){e.length>1&&e.sort(f||Ng),i.length>1&&i.sort(u||Gc),n.length>1&&n.sort(u||Gc)}function h(){for(let f=t,u=o.length;f<u;f++){let m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:c,finish:h,sort:l}}function Bg(){let o=new WeakMap;function t(i,n){let s;return o.has(i)===!1?(s=new Wc,o.set(i,[s])):n>=o.get(i).length?(s=new Wc,o.get(i).push(s)):s=o.get(i)[n],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function kg(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ft};break;case"SpotLight":e={position:new D,direction:new D,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new D,halfWidth:new D,halfHeight:new D};break}return o[t.id]=e,e}}}function Ug(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var Vg=0;function Hg(o,t){return(t.castShadow?1:0)-(o.castShadow?1:0)}function Gg(o,t){let e=new kg,i=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)n.probe.push(new D);let s=new D,a=new Zt,r=new Zt;function c(h,f){let u=0,m=0,g=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,_=0,v=0,T=0,y=0,M=0,A=0;h.sort(Hg);let C=f!==!0?Math.PI:1;for(let b=0,I=h.length;b<I;b++){let R=h[b],J=R.color,Z=R.intensity,L=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=J.r*Z*C,m+=J.g*Z*C,g+=J.b*Z*C;else if(R.isLightProbe)for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],Z);else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){let H=R.shadow,G=i.get(R);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=z,d++}else if(R.isSpotLight){let z=e.get(R);if(z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(J).multiplyScalar(Z*C),z.distance=L,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,R.castShadow){let H=R.shadow,G=i.get(R);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=k,n.spotShadowMatrix[_]=R.shadow.matrix,A++}n.spot[_]=z,_++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(J).multiplyScalar(Z),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=z,v++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity*C),z.distance=R.distance,z.decay=R.decay,R.castShadow){let H=R.shadow,G=i.get(R);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=z,p++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(Z*C),z.groundColor.copy(R.groundColor).multiplyScalar(Z*C),n.hemi[T]=z,T++}}v>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=g;let x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==v||x.hemiLength!==T||x.numDirectionalShadows!==y||x.numPointShadows!==M||x.numSpotShadows!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=v,n.point.length=p,n.hemi.length=T,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotShadowMatrix.length=A,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=v,x.hemiLength=T,x.numDirectionalShadows=y,x.numPointShadows=M,x.numSpotShadows=A,n.version=Vg++)}function l(h,f){let u=0,m=0,g=0,d=0,p=0,_=f.matrixWorldInverse;for(let v=0,T=h.length;v<T;v++){let y=h[v];if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),u++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){let M=n.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),r.identity(),a.copy(y.matrixWorld),a.premultiply(_),r.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),d++}else if(y.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:n}}function qc(o,t){let e=new Gg(o,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function Wg(o,t){let e=new WeakMap;function i(s,a=0){let r;return e.has(s)===!1?(r=new qc(o,t),e.set(s,[r])):a>=e.get(s).length?(r=new qc(o,t),e.get(s).push(r)):r=e.get(s)[a],r}function n(){e=new WeakMap}return{get:i,dispose:n}}var zr=class extends $t{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Or=class extends $t{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qg=`void main() {
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
}`;function Yg(o,t,e){let i=new Ir,n=new ht,s=new ht,a=new ee,r=new zr({depthPacking:gf}),c=new Or,l={},h=e.maxTextureSize,f={0:je,1:Ps,2:Qn},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:qg,fragmentShader:Xg}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new _e(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc,this.render=function(y,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;let C=o.getRenderTarget(),x=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),I=o.state;I.setBlending(ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let R=0,J=y.length;R<J;R++){let Z=y[R],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;n.copy(L.mapSize);let k=L.getFrameExtents();if(n.multiply(k),s.copy(L.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/k.x),n.x=s.x*k.x,L.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/k.y),n.y=s.y*k.y,L.mapSize.y=s.y)),L.map===null&&!L.isPointLightShadow&&this.type===As&&(L.map=new ce(n.x,n.y),L.map.texture.name=Z.name+".shadowMap",L.mapPass=new ce(n.x,n.y),L.camera.updateProjectionMatrix()),L.map===null){let H={minFilter:Se,magFilter:Se,format:Qe};L.map=new ce(n.x,n.y,H),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}o.setRenderTarget(L.map),o.clear();let z=L.getViewportCount();for(let H=0;H<z;H++){let G=L.getViewport(H);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(a),L.updateMatrices(Z,H),i=L.getFrustum(),T(M,A,L.camera,Z,this.type)}!L.isPointLightShadow&&this.type===As&&_(L,A),L.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,b)};function _(y,M){let A=t.update(d);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,A,u,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,A,m,d,null)}function v(y,M,A,C,x,b){let I=null,R=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(R!==void 0?I=R:I=A.isPointLight===!0?c:r,o.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){let J=I.uuid,Z=M.uuid,L=l[J];L===void 0&&(L={},l[J]=L);let k=L[Z];k===void 0&&(k=I.clone(),L[Z]=k),I=k}return I.visible=M.visible,I.wireframe=M.wireframe,b===As?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:f[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=C,I.farDistance=x),I}function T(y,M,A,C,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===As)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);let R=t.update(y),J=y.material;if(Array.isArray(J)){let Z=R.groups;for(let L=0,k=Z.length;L<k;L++){let z=Z[L],H=J[z.materialIndex];if(H&&H.visible){let G=v(y,H,C,A.near,A.far,x);o.renderBufferDirect(A,null,R,G,y,z)}}}else if(J.visible){let Z=v(y,J,C,A.near,A.far,x);o.renderBufferDirect(A,null,R,Z,y,null)}}let I=y.children;for(let R=0,J=I.length;R<J;R++)T(I[R],M,A,C,x)}}function Jg(o,t,e){let i=e.isWebGL2;function n(){let P=!1,it=new ee,et=null,pt=new ee(0,0,0,0);return{setMask:function(lt){et!==lt&&!P&&(o.colorMask(lt,lt,lt,lt),et=lt)},setLocked:function(lt){P=lt},setClear:function(lt,gt,Q,_t,Dt){Dt===!0&&(lt*=_t,gt*=_t,Q*=_t),it.set(lt,gt,Q,_t),pt.equals(it)===!1&&(o.clearColor(lt,gt,Q,_t),pt.copy(it))},reset:function(){P=!1,et=null,pt.set(-1,0,0,0)}}}function s(){let P=!1,it=null,et=null,pt=null;return{setTest:function(lt){lt?dt(2929):q(2929)},setMask:function(lt){it!==lt&&!P&&(o.depthMask(lt),it=lt)},setFunc:function(lt){if(et!==lt){if(lt)switch(lt){case Nu:o.depthFunc(512);break;case Bu:o.depthFunc(519);break;case ku:o.depthFunc(513);break;case Za:o.depthFunc(515);break;case Uu:o.depthFunc(514);break;case Vu:o.depthFunc(518);break;case Hu:o.depthFunc(516);break;case Gu:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);et=lt}},setLocked:function(lt){P=lt},setClear:function(lt){pt!==lt&&(o.clearDepth(lt),pt=lt)},reset:function(){P=!1,it=null,et=null,pt=null}}}function a(){let P=!1,it=null,et=null,pt=null,lt=null,gt=null,Q=null,_t=null,Dt=null;return{setTest:function(It){P||(It?dt(2960):q(2960))},setMask:function(It){it!==It&&!P&&(o.stencilMask(It),it=It)},setFunc:function(It,pe,ni){(et!==It||pt!==pe||lt!==ni)&&(o.stencilFunc(It,pe,ni),et=It,pt=pe,lt=ni)},setOp:function(It,pe,ni){(gt!==It||Q!==pe||_t!==ni)&&(o.stencilOp(It,pe,ni),gt=It,Q=pe,_t=ni)},setLocked:function(It){P=It},setClear:function(It){Dt!==It&&(o.clearStencil(It),Dt=It)},reset:function(){P=!1,it=null,et=null,pt=null,lt=null,gt=null,Q=null,_t=null,Dt=null}}}let r=new n,c=new s,l=new a,h={},f={},u=new WeakMap,m=[],g=null,d=!1,p=null,_=null,v=null,T=null,y=null,M=null,A=null,C=!1,x=null,b=null,I=null,R=null,J=null,Z=o.getParameter(35661),L=!1,k=0,z=o.getParameter(7938);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),L=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),L=k>=2);let H=null,G={},N=o.getParameter(3088),V=o.getParameter(2978),K=new ee().fromArray(N),Y=new ee().fromArray(V);function j(P,it,et){let pt=new Uint8Array(4),lt=o.createTexture();o.bindTexture(P,lt),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let gt=0;gt<et;gt++)o.texImage2D(it+gt,0,6408,1,1,0,6408,5121,pt);return lt}let rt={};rt[3553]=j(3553,3553,1),rt[34067]=j(34067,34069,6),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),dt(2929),c.setFunc(Za),oe(!1),be(Il),dt(2884),At(ki);function dt(P){h[P]!==!0&&(o.enable(P),h[P]=!0)}function q(P){h[P]!==!1&&(o.disable(P),h[P]=!1)}function kt(P,it){return f[P]!==it?(o.bindFramebuffer(P,it),f[P]=it,i&&(P===36009&&(f[36160]=it),P===36160&&(f[36009]=it)),!0):!1}function wt(P,it){let et=m,pt=!1;if(P)if(et=u.get(it),et===void 0&&(et=[],u.set(it,et)),P.isWebGLMultipleRenderTargets){let lt=P.texture;if(et.length!==lt.length||et[0]!==36064){for(let gt=0,Q=lt.length;gt<Q;gt++)et[gt]=36064+gt;et.length=lt.length,pt=!0}}else et[0]!==36064&&(et[0]=36064,pt=!0);else et[0]!==1029&&(et[0]=1029,pt=!0);pt&&(e.isWebGL2?o.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Mt(P){return g!==P?(o.useProgram(P),g=P,!0):!1}let at={[Xn]:32774,[Au]:32778,[Eu]:32779};if(i)at[Ol]=32775,at[Nl]=32776;else{let P=t.get("EXT_blend_minmax");P!==null&&(at[Ol]=P.MIN_EXT,at[Nl]=P.MAX_EXT)}let zt={[Cu]:0,[Pu]:1,[Ru]:768,[Qc]:770,[Ou]:776,[Fu]:774,[Du]:772,[Lu]:769,[jc]:771,[zu]:775,[Iu]:773};function At(P,it,et,pt,lt,gt,Q,_t){if(P===ki){d===!0&&(q(3042),d=!1);return}if(d===!1&&(dt(3042),d=!0),P!==Tu){if(P!==p||_t!==C){if((_!==Xn||y!==Xn)&&(o.blendEquation(32774),_=Xn,y=Xn),_t)switch(P){case Zn:o.blendFuncSeparate(1,771,1,771);break;case br:o.blendFunc(1,1);break;case Fl:o.blendFuncSeparate(0,769,0,1);break;case zl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zn:o.blendFuncSeparate(770,771,1,771);break;case br:o.blendFunc(770,1);break;case Fl:o.blendFuncSeparate(0,769,0,1);break;case zl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,T=null,M=null,A=null,p=P,C=_t}return}lt=lt||it,gt=gt||et,Q=Q||pt,(it!==_||lt!==y)&&(o.blendEquationSeparate(at[it],at[lt]),_=it,y=lt),(et!==v||pt!==T||gt!==M||Q!==A)&&(o.blendFuncSeparate(zt[et],zt[pt],zt[gt],zt[Q]),v=et,T=pt,M=gt,A=Q),p=P,C=null}function xt(P,it){P.side===Qn?q(2884):dt(2884);let et=P.side===je;it&&(et=!et),oe(et),P.blending===Zn&&P.transparent===!1?At(ki):At(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),r.setMask(P.colorWrite);let pt=P.stencilWrite;l.setTest(pt),pt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ii(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?dt(32926):q(32926)}function oe(P){x!==P&&(P?o.frontFace(2304):o.frontFace(2305),x=P)}function be(P){P!==wu?(dt(2884),P!==b&&(P===Il?o.cullFace(1029):P===Mu?o.cullFace(1028):o.cullFace(1032))):q(2884),b=P}function Ie(P){P!==I&&(L&&o.lineWidth(P),I=P)}function ii(P,it,et){P?(dt(32823),(R!==it||J!==et)&&(o.polygonOffset(it,et),R=it,J=et)):q(32823)}function ne(P){P?dt(3089):q(3089)}function Ot(P){P===void 0&&(P=33984+Z-1),H!==P&&(o.activeTexture(P),H=P)}function di(P,it){H===null&&Ot();let et=G[H];et===void 0&&(et={type:void 0,texture:void 0},G[H]=et),(et.type!==P||et.texture!==it)&&(o.bindTexture(P,it||rt[P]),et.type=P,et.texture=it)}function pi(){let P=G[H];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function E(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function w(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(P){K.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function ct(P){Y.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function ot(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},H=null,G={},f={},u=new WeakMap,m=[],g=null,d=!1,p=null,_=null,v=null,T=null,y=null,M=null,A=null,C=!1,x=null,b=null,I=null,R=null,J=null,K.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:dt,disable:q,bindFramebuffer:kt,drawBuffers:wt,useProgram:Mt,setBlending:At,setMaterial:xt,setFlipSided:oe,setCullFace:be,setLineWidth:Ie,setPolygonOffset:ii,setScissorTest:ne,activeTexture:Ot,bindTexture:di,unbindTexture:pi,compressedTexImage2D:E,texImage2D:vt,texImage3D:U,texStorage2D:tt,texStorage3D:st,texSubImage2D:w,texSubImage3D:W,compressedTexSubImage2D:$,scissor:ut,viewport:ct,reset:ot}}function Zg(o,t,e,i,n,s,a){let r=n.isWebGL2,c=n.maxTextures,l=n.maxCubemapSize,h=n.maxTextureSize,f=n.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,d,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,w){return _?new OffscreenCanvas(E,w):Ls("canvas")}function T(E,w,W,$){let tt=1;if((E.width>$||E.height>$)&&(tt=$/Math.max(E.width,E.height)),tt<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let st=w?eo:Math.floor,vt=st(tt*E.width),U=st(tt*E.height);d===void 0&&(d=v(vt,U));let ut=W?v(vt,U):d;return ut.width=vt,ut.height=U,ut.getContext("2d").drawImage(E,0,0,vt,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+U+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return dc(E.width)&&dc(E.height)}function M(E){return r?!1:E.wrapS!==Ke||E.wrapT!==Ke||E.minFilter!==Se&&E.minFilter!==ke}function A(E,w){return E.generateMipmaps&&w&&E.minFilter!==Se&&E.minFilter!==ke}function C(E){o.generateMipmap(E)}function x(E,w,W,$,tt=!1){if(r===!1)return w;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=w;return w===6403&&(W===5126&&(st=33326),W===5131&&(st=33325),W===5121&&(st=33321)),w===33319&&(W===5126&&(st=33328),W===5131&&(st=33327),W===5121&&(st=33323)),w===6408&&(W===5126&&(st=34836),W===5131&&(st=34842),W===5121&&(st=$===Ut&&tt===!1?35907:32856),W===32819&&(st=32854),W===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function b(E,w,W){return A(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Se&&E.minFilter!==ke?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function I(E){return E===Se||E===Bl||E===kl?9728:9729}function R(E){let w=E.target;w.removeEventListener("dispose",R),Z(w),w.isVideoTexture&&g.delete(w)}function J(E){let w=E.target;w.removeEventListener("dispose",J),k(w)}function Z(E){let w=i.get(E);if(w.__webglInit===void 0)return;let W=E.source,$=p.get(W);if($){let tt=$[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(E),Object.keys($).length===0&&p.delete(W)}i.remove(E)}function L(E){let w=i.get(E);o.deleteTexture(w.__webglTexture);let W=E.source,$=p.get(W);delete $[w.__cacheKey],a.memory.textures--}function k(E){let w=E.texture,W=i.get(E),$=i.get(w);if($.__webglTexture!==void 0&&(o.deleteTexture($.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++)o.deleteFramebuffer(W.__webglFramebuffer[tt]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[tt]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let tt=0;tt<W.__webglColorRenderbuffer.length;tt++)W.__webglColorRenderbuffer[tt]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[tt]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let tt=0,st=w.length;tt<st;tt++){let vt=i.get(w[tt]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(w[tt])}i.remove(w),i.remove(E)}let z=0;function H(){z=0}function G(){let E=z;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),z+=1,E}function N(E){let w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.encoding),w.join()}function V(E,w){let W=i.get(E);if(E.isVideoTexture&&di(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(W,E,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,W.__webglTexture)}function K(E,w){let W=i.get(E);if(E.version>0&&W.__version!==E.version){wt(W,E,w);return}e.activeTexture(33984+w),e.bindTexture(35866,W.__webglTexture)}function Y(E,w){let W=i.get(E);if(E.version>0&&W.__version!==E.version){wt(W,E,w);return}e.activeTexture(33984+w),e.bindTexture(32879,W.__webglTexture)}function j(E,w){let W=i.get(E);if(E.version>0&&W.__version!==E.version){Mt(W,E,w);return}e.activeTexture(33984+w),e.bindTexture(34067,W.__webglTexture)}let rt={[Qa]:10497,[Ke]:33071,[ja]:33648},dt={[Se]:9728,[Bl]:9984,[kl]:9986,[ke]:9729,[Ku]:9985,[Yr]:9987};function q(E,w,W){if(W?(o.texParameteri(E,10242,rt[w.wrapS]),o.texParameteri(E,10243,rt[w.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,rt[w.wrapR]),o.texParameteri(E,10240,dt[w.magFilter]),o.texParameteri(E,10241,dt[w.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(w.wrapS!==Ke||w.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,I(w.magFilter)),o.texParameteri(E,10241,I(w.minFilter)),w.minFilter!==Se&&w.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let $=t.get("EXT_texture_filter_anisotropic");if(w.type===rn&&t.has("OES_texture_float_linear")===!1||r===!1&&w.type===Rs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(o.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function kt(E,w){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",R));let $=w.source,tt=p.get($);tt===void 0&&(tt={},p.set($,tt));let st=N(w);if(st!==E.__cacheKey){tt[st]===void 0&&(tt[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),tt[st].usedTimes++;let vt=tt[E.__cacheKey];vt!==void 0&&(tt[E.__cacheKey].usedTimes--,vt.usedTimes===0&&L(w)),E.__cacheKey=st,E.__webglTexture=tt[st].texture}return W}function wt(E,w,W){let $=3553;w.isDataArrayTexture&&($=35866),w.isData3DTexture&&($=32879);let tt=kt(E,w),st=w.source;if(e.activeTexture(33984+W),e.bindTexture($,E.__webglTexture),st.version!==st.__currentVersion||tt===!0){o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);let vt=M(w)&&y(w.image)===!1,U=T(w.image,vt,!1,h);U=pi(w,U);let ut=y(U)||r,ct=s.convert(w.format,w.encoding),ot=s.convert(w.type),P=x(w.internalFormat,ct,ot,w.encoding,w.isVideoTexture);q($,w,ut);let it,et=w.mipmaps,pt=r&&w.isVideoTexture!==!0,lt=st.__currentVersion===void 0||tt===!0,gt=b(w,U,ut);if(w.isDepthTexture)P=6402,r?w.type===rn?P=36012:w.type===sn?P=33190:w.type===$n?P=35056:P=33189:w.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===on&&P===6402&&w.type!==eh&&w.type!==sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=sn,ot=s.convert(w.type)),w.format===es&&P===6402&&(P=34041,w.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=$n,ot=s.convert(w.type))),lt&&(pt?e.texStorage2D(3553,1,P,U.width,U.height):e.texImage2D(3553,0,P,U.width,U.height,0,ct,ot,null));else if(w.isDataTexture)if(et.length>0&&ut){pt&&lt&&e.texStorage2D(3553,gt,P,et[0].width,et[0].height);for(let Q=0,_t=et.length;Q<_t;Q++)it=et[Q],pt?e.texSubImage2D(3553,Q,0,0,it.width,it.height,ct,ot,it.data):e.texImage2D(3553,Q,P,it.width,it.height,0,ct,ot,it.data);w.generateMipmaps=!1}else pt?(lt&&e.texStorage2D(3553,gt,P,U.width,U.height),e.texSubImage2D(3553,0,0,0,U.width,U.height,ct,ot,U.data)):e.texImage2D(3553,0,P,U.width,U.height,0,ct,ot,U.data);else if(w.isCompressedTexture){pt&&lt&&e.texStorage2D(3553,gt,P,et[0].width,et[0].height);for(let Q=0,_t=et.length;Q<_t;Q++)it=et[Q],w.format!==Qe?ct!==null?pt?e.compressedTexSubImage2D(3553,Q,0,0,it.width,it.height,ct,it.data):e.compressedTexImage2D(3553,Q,P,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(3553,Q,0,0,it.width,it.height,ct,ot,it.data):e.texImage2D(3553,Q,P,it.width,it.height,0,ct,ot,it.data)}else if(w.isDataArrayTexture)pt?(lt&&e.texStorage3D(35866,gt,P,U.width,U.height,U.depth),e.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ct,ot,U.data)):e.texImage3D(35866,0,P,U.width,U.height,U.depth,0,ct,ot,U.data);else if(w.isData3DTexture)pt?(lt&&e.texStorage3D(32879,gt,P,U.width,U.height,U.depth),e.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ct,ot,U.data)):e.texImage3D(32879,0,P,U.width,U.height,U.depth,0,ct,ot,U.data);else if(w.isFramebufferTexture){if(lt)if(pt)e.texStorage2D(3553,gt,P,U.width,U.height);else{let Q=U.width,_t=U.height;for(let Dt=0;Dt<gt;Dt++)e.texImage2D(3553,Dt,P,Q,_t,0,ct,ot,null),Q>>=1,_t>>=1}}else if(et.length>0&&ut){pt&&lt&&e.texStorage2D(3553,gt,P,et[0].width,et[0].height);for(let Q=0,_t=et.length;Q<_t;Q++)it=et[Q],pt?e.texSubImage2D(3553,Q,0,0,ct,ot,it):e.texImage2D(3553,Q,P,ct,ot,it);w.generateMipmaps=!1}else pt?(lt&&e.texStorage2D(3553,gt,P,U.width,U.height),e.texSubImage2D(3553,0,0,0,ct,ot,U)):e.texImage2D(3553,0,P,ct,ot,U);A(w,ut)&&C($),st.__currentVersion=st.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function Mt(E,w,W){if(w.image.length!==6)return;let $=kt(E,w),tt=w.source;if(e.activeTexture(33984+W),e.bindTexture(34067,E.__webglTexture),tt.version!==tt.__currentVersion||$===!0){o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);let st=w.isCompressedTexture||w.image[0].isCompressedTexture,vt=w.image[0]&&w.image[0].isDataTexture,U=[];for(let Q=0;Q<6;Q++)!st&&!vt?U[Q]=T(w.image[Q],!1,!0,l):U[Q]=vt?w.image[Q].image:w.image[Q],U[Q]=pi(w,U[Q]);let ut=U[0],ct=y(ut)||r,ot=s.convert(w.format,w.encoding),P=s.convert(w.type),it=x(w.internalFormat,ot,P,w.encoding),et=r&&w.isVideoTexture!==!0,pt=tt.__currentVersion===void 0||$===!0,lt=b(w,ut,ct);q(34067,w,ct);let gt;if(st){et&&pt&&e.texStorage2D(34067,lt,it,ut.width,ut.height);for(let Q=0;Q<6;Q++){gt=U[Q].mipmaps;for(let _t=0;_t<gt.length;_t++){let Dt=gt[_t];w.format!==Qe?ot!==null?et?e.compressedTexSubImage2D(34069+Q,_t,0,0,Dt.width,Dt.height,ot,Dt.data):e.compressedTexImage2D(34069+Q,_t,it,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?e.texSubImage2D(34069+Q,_t,0,0,Dt.width,Dt.height,ot,P,Dt.data):e.texImage2D(34069+Q,_t,it,Dt.width,Dt.height,0,ot,P,Dt.data)}}}else{gt=w.mipmaps,et&&pt&&(gt.length>0&&lt++,e.texStorage2D(34067,lt,it,U[0].width,U[0].height));for(let Q=0;Q<6;Q++)if(vt){et?e.texSubImage2D(34069+Q,0,0,0,U[Q].width,U[Q].height,ot,P,U[Q].data):e.texImage2D(34069+Q,0,it,U[Q].width,U[Q].height,0,ot,P,U[Q].data);for(let _t=0;_t<gt.length;_t++){let It=gt[_t].image[Q].image;et?e.texSubImage2D(34069+Q,_t+1,0,0,It.width,It.height,ot,P,It.data):e.texImage2D(34069+Q,_t+1,it,It.width,It.height,0,ot,P,It.data)}}else{et?e.texSubImage2D(34069+Q,0,0,0,ot,P,U[Q]):e.texImage2D(34069+Q,0,it,ot,P,U[Q]);for(let _t=0;_t<gt.length;_t++){let Dt=gt[_t];et?e.texSubImage2D(34069+Q,_t+1,0,0,ot,P,Dt.image[Q]):e.texImage2D(34069+Q,_t+1,it,ot,P,Dt.image[Q])}}}A(w,ct)&&C(34067),tt.__currentVersion=tt.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function at(E,w,W,$,tt){let st=s.convert(W.format,W.encoding),vt=s.convert(W.type),U=x(W.internalFormat,st,vt,W.encoding);i.get(w).__hasExternalTextures||(tt===32879||tt===35866?e.texImage3D(tt,0,U,w.width,w.height,w.depth,0,st,vt,null):e.texImage2D(tt,0,U,w.width,w.height,0,st,vt,null)),e.bindFramebuffer(36160,E),Ot(w)?u.framebufferTexture2DMultisampleEXT(36160,$,tt,i.get(W).__webglTexture,0,ne(w)):o.framebufferTexture2D(36160,$,tt,i.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(E,w,W){if(o.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let $=33189;if(W||Ot(w)){let tt=w.depthTexture;tt&&tt.isDepthTexture&&(tt.type===rn?$=36012:tt.type===sn&&($=33190));let st=ne(w);Ot(w)?u.renderbufferStorageMultisampleEXT(36161,st,$,w.width,w.height):o.renderbufferStorageMultisample(36161,st,$,w.width,w.height)}else o.renderbufferStorage(36161,$,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){let $=ne(w);W&&Ot(w)===!1?o.renderbufferStorageMultisample(36161,$,35056,w.width,w.height):Ot(w)?u.renderbufferStorageMultisampleEXT(36161,$,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{let $=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0;tt<$.length;tt++){let st=$[tt],vt=s.convert(st.format,st.encoding),U=s.convert(st.type),ut=x(st.internalFormat,vt,U,st.encoding),ct=ne(w);W&&Ot(w)===!1?o.renderbufferStorageMultisample(36161,ct,ut,w.width,w.height):Ot(w)?u.renderbufferStorageMultisampleEXT(36161,ct,ut,w.width,w.height):o.renderbufferStorage(36161,ut,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function At(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let $=i.get(w.depthTexture).__webglTexture,tt=ne(w);if(w.depthTexture.format===on)Ot(w)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,tt):o.framebufferTexture2D(36160,36096,3553,$,0);else if(w.depthTexture.format===es)Ot(w)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,tt):o.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function xt(E){let w=i.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");At(w.__webglFramebuffer,E)}else if(W){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=o.createRenderbuffer(),zt(w.__webglDepthbuffer[$],E,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),zt(w.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function oe(E,w,W){let $=i.get(E);w!==void 0&&at($.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&xt(E)}function be(E){let w=E.texture,W=i.get(E),$=i.get(w);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=w.version,a.memory.textures++);let tt=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,vt=y(E)||r;if(tt){W.__webglFramebuffer=[];for(let U=0;U<6;U++)W.__webglFramebuffer[U]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),st)if(n.drawBuffers){let U=E.texture;for(let ut=0,ct=U.length;ut<ct;ut++){let ot=i.get(U[ut]);ot.__webglTexture===void 0&&(ot.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&E.samples>0&&Ot(E)===!1){let U=st?w:[w];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let ut=0;ut<U.length;ut++){let ct=U[ut];W.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[ut]);let ot=s.convert(ct.format,ct.encoding),P=s.convert(ct.type),it=x(ct.internalFormat,ot,P,ct.encoding),et=ne(E);o.renderbufferStorageMultisample(36161,et,it,E.width,E.height),o.framebufferRenderbuffer(36160,36064+ut,36161,W.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(tt){e.bindTexture(34067,$.__webglTexture),q(34067,w,vt);for(let U=0;U<6;U++)at(W.__webglFramebuffer[U],E,w,36064,34069+U);A(w,vt)&&C(34067),e.unbindTexture()}else if(st){let U=E.texture;for(let ut=0,ct=U.length;ut<ct;ut++){let ot=U[ut],P=i.get(ot);e.bindTexture(3553,P.__webglTexture),q(3553,ot,vt),at(W.__webglFramebuffer,E,ot,36064+ut,3553),A(ot,vt)&&C(3553)}e.unbindTexture()}else{let U=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(r?U=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(U,$.__webglTexture),q(U,w,vt),at(W.__webglFramebuffer,E,w,36064,U),A(w,vt)&&C(U),e.unbindTexture()}E.depthBuffer&&xt(E)}function Ie(E){let w=y(E)||r,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0,tt=W.length;$<tt;$++){let st=W[$];if(A(st,w)){let vt=E.isWebGLCubeRenderTarget?34067:3553,U=i.get(st).__webglTexture;e.bindTexture(vt,U),C(vt),e.unbindTexture()}}}function ii(E){if(r&&E.samples>0&&Ot(E)===!1){let w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,$=E.height,tt=16384,st=[],vt=E.stencilBuffer?33306:36096,U=i.get(E),ut=E.isWebGLMultipleRenderTargets===!0;if(ut)for(let ct=0;ct<w.length;ct++)e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,U.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,U.__webglFramebuffer);for(let ct=0;ct<w.length;ct++){st.push(36064+ct),E.depthBuffer&&st.push(vt);let ot=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(ot===!1&&(E.depthBuffer&&(tt|=256),E.stencilBuffer&&(tt|=1024)),ut&&o.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[ct]),ot===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),ut){let P=i.get(w[ct]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,P,0)}o.blitFramebuffer(0,0,W,$,0,0,W,$,tt,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ut)for(let ct=0;ct<w.length;ct++){e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ct,36161,U.__webglColorRenderbuffer[ct]);let ot=i.get(w[ct]).__webglTexture;e.bindFramebuffer(36160,U.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ct,3553,ot,0)}e.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function ne(E){return Math.min(f,E.samples)}function Ot(E){let w=i.get(E);return r&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function di(E){let w=a.render.frame;g.get(E)!==w&&(g.set(E,w),E.update())}function pi(E,w){let W=E.encoding,$=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===to||W!==hn&&(W===Ut?r===!1?t.has("EXT_sRGB")===!0&&$===Qe?(E.format=to,E.minFilter=ke,E.generateMipmaps=!1):w=Ar.sRGBToLinear(w):($!==Qe||tt!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=oe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ii,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ot}function $g(o,t,e){let i=e.isWebGL2;function n(s,a=null){let r;if(s===cn)return 5121;if(s===ef)return 32819;if(s===nf)return 32820;if(s===Qu)return 5120;if(s===ju)return 5122;if(s===eh)return 5123;if(s===tf)return 5124;if(s===sn)return 5125;if(s===rn)return 5126;if(s===Rs)return i?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===sf)return 6406;if(s===Qe)return 6408;if(s===af)return 6409;if(s===of)return 6410;if(s===on)return 6402;if(s===es)return 34041;if(s===lf)return 6403;if(s===rf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===to)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===cf)return 36244;if(s===hf)return 33319;if(s===uf)return 33320;if(s===ff)return 36249;if(s===ga||s===_a||s===xa||s===va)if(a===Ut)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ul||s===Vl||s===Hl||s===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===df)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wl||s===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Wl)return a===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===ql)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xl||s===Yl||s===Jl||s===Zl||s===$l||s===Kl||s===Ql||s===jl||s===tc||s===ec||s===ic||s===nc||s===sc||s===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Xl)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yl)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jl)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zl)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$l)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kl)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ql)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jl)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ec)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ic)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rc)return a===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===ac)return a===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$n?i?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}var uo=class extends ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jn=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(r!==null&&(n=e.getPose(t.targetRaySpace,i),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Kg))),l&&t.hand){a=!0;for(let d of t.hand.values()){let p=e.getJointPose(d,i);if(l.joints[d.jointName]===void 0){let v=new Jn;v.matrixAutoUpdate=!1,v.visible=!1,l.joints[d.jointName]=v,l.add(v)}let _=l.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}},fo=class extends Ae{constructor(t,e,i,n,s,a,r,c,l,h){if(h=h!==void 0?h:on,h!==on&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===on&&(i=sn),i===void 0&&h===es&&(i=$n),super(null,n,s,a,r,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Se,this.minFilter=c!==void 0?c:Se,this.flipY=!1,this.generateMipmaps=!1}},po=class extends Ui{constructor(t,e){super();let i=this,n=null,s=1,a=null,r="local-floor",c=null,l=null,h=null,f=null,u=null,m=null,g=e.getContextAttributes(),d=null,p=null,_=[],v=new Map,T=new ge;T.layers.enable(1),T.viewport=new ee;let y=new ge;y.layers.enable(2),y.viewport=new ee;let M=[T,y],A=new uo;A.layers.enable(1),A.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=_[N];return V===void 0&&(V=new Cs,_[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=_[N];return V===void 0&&(V=new Cs,_[N]=V),V.getGripSpace()},this.getHand=function(N){let V=_[N];return V===void 0&&(V=new Cs,_[N]=V),V.getHandSpace()};function b(N){let V=v.get(N.inputSource);V!==void 0&&V.dispatchEvent({type:N.type,data:N.inputSource})}function I(){n.removeEventListener("select",b),n.removeEventListener("selectstart",b),n.removeEventListener("selectend",b),n.removeEventListener("squeeze",b),n.removeEventListener("squeezestart",b),n.removeEventListener("squeezeend",b),n.removeEventListener("end",I),n.removeEventListener("inputsourceschange",R),v.forEach(function(N,V){N!==void 0&&N.disconnect(V)}),v.clear(),C=null,x=null,t.setRenderTarget(d),u=null,f=null,h=null,n=null,p=null,G.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",b),n.addEventListener("selectstart",b),n.addEventListener("selectend",b),n.addEventListener("squeeze",b),n.addEventListener("squeezestart",b),n.addEventListener("squeezeend",b),n.addEventListener("end",I),n.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let V={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,e,V),n.updateRenderState({baseLayer:u}),p=new ce(u.framebufferWidth,u.framebufferHeight,{format:Qe,type:cn,encoding:t.outputEncoding})}else{let V=null,K=null,Y=null;g.depth&&(Y=g.stencil?35056:33190,V=g.stencil?es:on,K=g.stencil?$n:sn);let j={colorFormat:t.outputEncoding===Ut?35907:32856,depthFormat:Y,scaleFactor:s};h=new XRWebGLBinding(n,e),f=h.createProjectionLayer(j),n.updateRenderState({layers:[f]}),p=new ce(f.textureWidth,f.textureHeight,{format:Qe,type:cn,depthTexture:new fo(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let rt=t.properties.get(p);rt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await n.requestReferenceSpace(r),G.setContext(n),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(N){let V=n.inputSources;for(let K=0;K<V.length;K++){let Y=V[K].handedness==="right"?1:0;v.set(V[K],_[Y])}for(let K=0;K<N.removed.length;K++){let Y=N.removed[K],j=v.get(Y);j&&(j.dispatchEvent({type:"disconnected",data:Y}),v.delete(Y))}for(let K=0;K<N.added.length;K++){let Y=N.added[K],j=v.get(Y);j&&j.dispatchEvent({type:"connected",data:Y})}}let J=new D,Z=new D;function L(N,V,K){J.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(K.matrixWorld);let Y=J.distanceTo(Z),j=V.projectionMatrix.elements,rt=K.projectionMatrix.elements,dt=j[14]/(j[10]-1),q=j[14]/(j[10]+1),kt=(j[9]+1)/j[5],wt=(j[9]-1)/j[5],Mt=(j[8]-1)/j[0],at=(rt[8]+1)/rt[0],zt=dt*Mt,At=dt*at,xt=Y/(-Mt+at),oe=xt*-Mt;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(oe),N.translateZ(xt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let be=dt+xt,Ie=q+xt,ii=zt-oe,ne=At+(Y-oe),Ot=kt*q/Ie*be,di=wt*q/Ie*be;N.projectionMatrix.makePerspective(ii,ne,Ot,di,be,Ie)}function k(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;A.near=y.near=T.near=N.near,A.far=y.far=T.far=N.far,(C!==A.near||x!==A.far)&&(n.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,x=A.far);let V=N.parent,K=A.cameras;k(A,V);for(let j=0;j<K.length;j++)k(K[j],V);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),N.position.copy(A.position),N.quaternion.copy(A.quaternion),N.scale.copy(A.scale),N.matrix.copy(A.matrix),N.matrixWorld.copy(A.matrixWorld);let Y=N.children;for(let j=0,rt=Y.length;j<rt;j++)Y[j].updateMatrixWorld(!0);K.length===2?L(A,T,y):A.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=N)};let z=null;function H(N,V){if(l=V.getViewerPose(c||a),m=V,l!==null){let Y=l.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let j=!1;Y.length!==A.cameras.length&&(A.cameras.length=0,j=!0);for(let rt=0;rt<Y.length;rt++){let dt=Y[rt],q=null;if(u!==null)q=u.getViewport(dt);else{let wt=h.getViewSubImage(f,dt);q=wt.viewport,rt===0&&(t.setRenderTargetTextures(p,wt.colorTexture,f.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(p))}let kt=M[rt];kt===void 0&&(kt=new ge,kt.layers.enable(rt),kt.viewport=new ee,M[rt]=kt),kt.matrix.fromArray(dt.transform.matrix),kt.projectionMatrix.fromArray(dt.projectionMatrix),kt.viewport.set(q.x,q.y,q.width,q.height),rt===0&&A.matrix.copy(kt.matrix),j===!0&&A.cameras.push(kt)}}let K=n.inputSources;for(let Y=0;Y<_.length;Y++){let j=K[Y],rt=v.get(j);rt!==void 0&&rt.update(j,V,c||a)}z&&z(N,V),m=null}let G=new sh;G.setAnimationLoop(H),this.setAnimationLoop=function(N){z=N},this.dispose=function(){}}};function Qg(o,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,_,v,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(d,p):p.isMeshToonMaterial?(n(d,p),h(d,p)):p.isMeshPhongMaterial?(n(d,p),l(d,p)):p.isMeshStandardMaterial?(n(d,p),f(d,p),p.isMeshPhysicalMaterial&&u(d,p,T)):p.isMeshMatcapMaterial?(n(d,p),m(d,p)):p.isMeshDepthMaterial?n(d,p):p.isMeshDistanceMaterial?(n(d,p),g(d,p)):p.isMeshNormalMaterial?n(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?r(d,p,_,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===je&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===je&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;let y=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uv2Transform.value.copy(T.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function r(d,p,_,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uvTransform.value.copy(T.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function u(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===je&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function jg(){let o=Ls("canvas");return o.style.display="block",o}function ko(o={}){this.isWebGLRenderer=!0;let t=o.canvas!==void 0?o.canvas:jg(),e=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let f=null,u=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hn,this.physicallyCorrectLights=!1,this.toneMapping=Mi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let d=this,p=!1,_=0,v=0,T=null,y=-1,M=null,A=new ee,C=new ee,x=null,b=t.width,I=t.height,R=1,J=null,Z=null,L=new ee(0,0,b,I),k=new ee(0,0,b,I),z=!1,H=new Ir,G=!1,N=!1,V=null,K=new Zt,Y=new ht,j=new D,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return T===null?R:1}let q=e;function kt(S,F){for(let B=0;B<S.length;B++){let O=S[B],X=t.getContext(O,F);if(X!==null)return X}return null}try{let S={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",P,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",et,!1),q===null){let F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),q=kt(F,S),q===null)throw kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let wt,Mt,at,zt,At,xt,oe,be,Ie,ii,ne,Ot,di,pi,E,w,W,$,tt,st,vt,U,ut;function ct(){wt=new ym(q),Mt=new pm(q,wt,o),wt.init(Mt),U=new $g(q,wt,Mt),at=new Jg(q,wt,Mt),zt=new bm(q),At=new Og,xt=new Zg(q,wt,at,At,Mt,U,zt),oe=new gm(d),be=new vm(d),Ie=new zf(q,Mt),ut=new fm(q,wt,Ie,Mt),ii=new wm(q,Ie,zt,ut),ne=new Em(q,ii,Ie,zt),tt=new Am(q,Mt,xt),w=new mm(At),Ot=new zg(d,oe,be,wt,Mt,ut,w),di=new Qg(d,At),pi=new Bg,E=new Wg(wt,Mt),$=new um(d,oe,at,ne,h,a),W=new Yg(d,ne,Mt),st=new dm(q,wt,zt,Mt),vt=new Mm(q,wt,zt,Mt),zt.programs=Ot.programs,d.capabilities=Mt,d.extensions=wt,d.properties=At,d.renderLists=pi,d.shadowMap=W,d.state=at,d.info=zt}ct();let ot=new po(d,q);this.xr=ot,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let S=wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(S){S!==void 0&&(R=S,this.setSize(b,I,!1))},this.getSize=function(S){return S.set(b,I)},this.setSize=function(S,F,B){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=S,I=F,t.width=Math.floor(S*R),t.height=Math.floor(F*R),B!==!1&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(b*R,I*R).floor()},this.setDrawingBufferSize=function(S,F,B){b=S,I=F,R=B,t.width=Math.floor(S*B),t.height=Math.floor(F*B),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(L)},this.setViewport=function(S,F,B,O){S.isVector4?L.set(S.x,S.y,S.z,S.w):L.set(S,F,B,O),at.viewport(A.copy(L).multiplyScalar(R).floor())},this.getScissor=function(S){return S.copy(k)},this.setScissor=function(S,F,B,O){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,F,B,O),at.scissor(C.copy(k).multiplyScalar(R).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(S){at.setScissorTest(z=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(S=!0,F=!0,B=!0){let O=0;S&&(O|=16384),F&&(O|=256),B&&(O|=1024),q.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",P,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",et,!1),pi.dispose(),E.dispose(),At.dispose(),oe.dispose(),be.dispose(),ne.dispose(),ut.dispose(),Ot.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Dt),ot.removeEventListener("sessionend",It),V&&(V.dispose(),V=null),pe.stop()};function P(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let S=zt.autoReset,F=W.enabled,B=W.autoUpdate,O=W.needsUpdate,X=W.type;ct(),zt.autoReset=S,W.enabled=F,W.autoUpdate=B,W.needsUpdate=O,W.type=X}function et(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pt(S){let F=S.target;F.removeEventListener("dispose",pt),lt(F)}function lt(S){gt(S),At.remove(S)}function gt(S){let F=At.get(S).programs;F!==void 0&&(F.forEach(function(B){Ot.releaseProgram(B)}),S.isShaderMaterial&&Ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,B,O,X,mt){F===null&&(F=rt);let yt=X.isMesh&&X.matrixWorld.determinant()<0,St=xu(S,F,B,O,X);at.setMaterial(O,yt);let bt=B.index,Ft=B.attributes.position;if(bt===null){if(Ft===void 0||Ft.count===0)return}else if(bt.count===0)return;let Ct=1;O.wireframe===!0&&(bt=ii.getWireframeAttribute(B),Ct=2),ut.setup(X,O,St,B,bt);let Pt,Ht=st;bt!==null&&(Pt=Ie.get(bt),Ht=vt,Ht.setIndex(Pt));let Ki=bt!==null?bt.count:Ft.count,Pn=B.drawRange.start*Ct,Rn=B.drawRange.count*Ct,si=mt!==null?mt.start*Ct:0,Rt=mt!==null?mt.count*Ct:1/0,Ln=Math.max(Pn,si),qt=Math.min(Ki,Pn+Rn,si+Rt)-1,ri=Math.max(0,qt-Ln+1);if(ri!==0){if(X.isMesh)O.wireframe===!0?(at.setLineWidth(O.wireframeLinewidth*dt()),Ht.setMode(1)):Ht.setMode(4);else if(X.isLine){let Li=O.linewidth;Li===void 0&&(Li=1),at.setLineWidth(Li*dt()),X.isLineSegments?Ht.setMode(1):X.isLineLoop?Ht.setMode(2):Ht.setMode(3)}else X.isPoints?Ht.setMode(0):X.isSprite&&Ht.setMode(4);if(X.isInstancedMesh)Ht.renderInstances(Ln,ri,X.count);else if(B.isInstancedBufferGeometry){let Li=Math.min(B.instanceCount,B._maxInstanceCount);Ht.renderInstances(Ln,ri,Li)}else Ht.render(Ln,ri)}},this.compile=function(S,F){u=E.get(S),u.init(),g.push(u),S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights(d.physicallyCorrectLights),S.traverse(function(B){let O=B.material;if(O)if(Array.isArray(O))for(let X=0;X<O.length;X++){let mt=O[X];da(mt,S,B)}else da(O,S,B)}),g.pop(),u=null};let Q=null;function _t(S){Q&&Q(S)}function Dt(){pe.stop()}function It(){pe.start()}let pe=new sh;pe.setAnimationLoop(_t),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(S){Q=S,ot.setAnimationLoop(S),S===null?pe.stop():pe.start()},ot.addEventListener("sessionstart",Dt),ot.addEventListener("sessionend",It),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(F),F=ot.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,F,T),u=E.get(S,g.length),u.init(),g.push(u),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H.setFromProjectionMatrix(K),N=this.localClippingEnabled,G=w.init(this.clippingPlanes,N,F),f=pi.get(S,m.length),f.init(),m.push(f),ni(S,F,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(J,Z),G===!0&&w.beginShadows();let B=u.state.shadowsArray;if(W.render(B,S,F),G===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,S),u.setupLights(d.physicallyCorrectLights),F.isArrayCamera){let O=F.cameras;for(let X=0,mt=O.length;X<mt;X++){let yt=O[X];Ll(f,S,yt,yt.viewport)}}else Ll(f,S,F);T!==null&&(xt.updateMultisampleRenderTarget(T),xt.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(d,S,F),ut.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ni(S,F,B,O){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){O&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let yt=ne.update(S),St=S.material;St.visible&&f.push(S,yt,St,B,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==zt.render.frame&&(S.skeleton.update(),S.skeleton.frame=zt.render.frame),!S.frustumCulled||H.intersectsObject(S))){O&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let yt=ne.update(S),St=S.material;if(Array.isArray(St)){let bt=yt.groups;for(let Ft=0,Ct=bt.length;Ft<Ct;Ft++){let Pt=bt[Ft],Ht=St[Pt.materialIndex];Ht&&Ht.visible&&f.push(S,yt,Ht,B,j.z,Pt)}}else St.visible&&f.push(S,yt,St,B,j.z,null)}}let mt=S.children;for(let yt=0,St=mt.length;yt<St;yt++)ni(mt[yt],F,B,O)}function Ll(S,F,B,O){let X=S.opaque,mt=S.transmissive,yt=S.transparent;u.setupLightsView(B),mt.length>0&&gu(X,F,B),O&&at.viewport(A.copy(O)),X.length>0&&js(X,F,B),mt.length>0&&js(mt,F,B),yt.length>0&&js(yt,F,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function gu(S,F,B){let O=Mt.isWebGL2;V===null&&(V=new ce(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?Rs:cn,minFilter:Yr,samples:O&&s===!0?4:0})),d.getDrawingBufferSize(Y),O?V.setSize(Y.x,Y.y):V.setSize(eo(Y.x),eo(Y.y));let X=d.getRenderTarget();d.setRenderTarget(V),d.clear();let mt=d.toneMapping;d.toneMapping=Mi,js(S,F,B),d.toneMapping=mt,xt.updateMultisampleRenderTarget(V),xt.updateRenderTargetMipmap(V),d.setRenderTarget(X)}function js(S,F,B){let O=F.isScene===!0?F.overrideMaterial:null;for(let X=0,mt=S.length;X<mt;X++){let yt=S[X],St=yt.object,bt=yt.geometry,Ft=O===null?yt.material:O,Ct=yt.group;St.layers.test(B.layers)&&_u(St,F,B,bt,Ft,Ct)}}function _u(S,F,B,O,X,mt){S.onBeforeRender(d,F,B,O,X,mt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(d,F,B,O,S,mt),X.transparent===!0&&X.side===Qn?(X.side=je,X.needsUpdate=!0,d.renderBufferDirect(B,F,O,X,S,mt),X.side=Ps,X.needsUpdate=!0,d.renderBufferDirect(B,F,O,X,S,mt),X.side=Qn):d.renderBufferDirect(B,F,O,X,S,mt),S.onAfterRender(d,F,B,O,X,mt)}function da(S,F,B){F.isScene!==!0&&(F=rt);let O=At.get(S),X=u.state.lights,mt=u.state.shadowsArray,yt=X.state.version,St=Ot.getParameters(S,X.state,mt,F,B),bt=Ot.getProgramCacheKey(St),Ft=O.programs;O.environment=S.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(S.isMeshStandardMaterial?be:oe).get(S.envMap||O.environment),Ft===void 0&&(S.addEventListener("dispose",pt),Ft=new Map,O.programs=Ft);let Ct=Ft.get(bt);if(Ct!==void 0){if(O.currentProgram===Ct&&O.lightsStateVersion===yt)return Dl(S,St),Ct}else St.uniforms=Ot.getUniforms(S),S.onBuild(B,St,d),S.onBeforeCompile(St,d),Ct=Ot.acquireProgram(St,bt),Ft.set(bt,Ct),O.uniforms=St.uniforms;let Pt=O.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=w.uniform),Dl(S,St),O.needsLights=yu(S),O.lightsStateVersion=yt,O.needsLights&&(Pt.ambientLightColor.value=X.state.ambient,Pt.lightProbe.value=X.state.probe,Pt.directionalLights.value=X.state.directional,Pt.directionalLightShadows.value=X.state.directionalShadow,Pt.spotLights.value=X.state.spot,Pt.spotLightShadows.value=X.state.spotShadow,Pt.rectAreaLights.value=X.state.rectArea,Pt.ltc_1.value=X.state.rectAreaLTC1,Pt.ltc_2.value=X.state.rectAreaLTC2,Pt.pointLights.value=X.state.point,Pt.pointLightShadows.value=X.state.pointShadow,Pt.hemisphereLights.value=X.state.hemi,Pt.directionalShadowMap.value=X.state.directionalShadowMap,Pt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pt.spotShadowMap.value=X.state.spotShadowMap,Pt.spotShadowMatrix.value=X.state.spotShadowMatrix,Pt.pointShadowMap.value=X.state.pointShadowMap,Pt.pointShadowMatrix.value=X.state.pointShadowMatrix);let Ht=Ct.getUniforms(),Ki=Kn.seqWithValue(Ht.seq,Pt);return O.currentProgram=Ct,O.uniformsList=Ki,Ct}function Dl(S,F){let B=At.get(S);B.outputEncoding=F.outputEncoding,B.instancing=F.instancing,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function xu(S,F,B,O,X){F.isScene!==!0&&(F=rt),xt.resetTextureUnits();let mt=F.fog,yt=O.isMeshStandardMaterial?F.environment:null,St=T===null?d.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:hn,bt=(O.isMeshStandardMaterial?be:oe).get(O.envMap||yt),Ft=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!O.normalMap&&!!B.attributes.tangent,Pt=!!B.morphAttributes.position,Ht=!!B.morphAttributes.normal,Ki=!!B.morphAttributes.color,Pn=O.toneMapped?d.toneMapping:Mi,Rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,si=Rn!==void 0?Rn.length:0,Rt=At.get(O),Ln=u.state.lights;if(G===!0&&(N===!0||S!==M)){let ai=S===M&&O.id===y;w.setState(O,S,ai)}let qt=!1;O.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ln.state.version||Rt.outputEncoding!==St||X.isInstancedMesh&&Rt.instancing===!1||!X.isInstancedMesh&&Rt.instancing===!0||X.isSkinnedMesh&&Rt.skinning===!1||!X.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==bt||O.fog===!0&&Rt.fog!==mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==w.numPlanes||Rt.numIntersection!==w.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==Ct||Rt.morphTargets!==Pt||Rt.morphNormals!==Ht||Rt.morphColors!==Ki||Rt.toneMapping!==Pn||Mt.isWebGL2===!0&&Rt.morphTargetsCount!==si)&&(qt=!0):(qt=!0,Rt.__version=O.version);let ri=Rt.currentProgram;qt===!0&&(ri=da(O,F,X));let Li=!1,ws=!1,pa=!1,me=ri.getUniforms(),Ms=Rt.uniforms;if(at.useProgram(ri.program)&&(Li=!0,ws=!0,pa=!0),O.id!==y&&(y=O.id,ws=!0),Li||M!==S){if(me.setValue(q,"projectionMatrix",S.projectionMatrix),Mt.logarithmicDepthBuffer&&me.setValue(q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,ws=!0,pa=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){let ai=me.map.cameraPosition;ai!==void 0&&ai.setValue(q,j.setFromMatrixPosition(S.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&me.setValue(q,"isOrthographic",S.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||X.isSkinnedMesh)&&me.setValue(q,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){me.setOptional(q,X,"bindMatrix"),me.setOptional(q,X,"bindMatrixInverse");let ai=X.skeleton;ai&&(Mt.floatVertexTextures?(ai.boneTexture===null&&ai.computeBoneTexture(),me.setValue(q,"boneTexture",ai.boneTexture,xt),me.setValue(q,"boneTextureSize",ai.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ma=B.morphAttributes;return(ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0&&Mt.isWebGL2===!0)&&tt.update(X,B,O,ri),(ws||Rt.receiveShadow!==X.receiveShadow)&&(Rt.receiveShadow=X.receiveShadow,me.setValue(q,"receiveShadow",X.receiveShadow)),ws&&(me.setValue(q,"toneMappingExposure",d.toneMappingExposure),Rt.needsLights&&vu(Ms,pa),mt&&O.fog===!0&&di.refreshFogUniforms(Ms,mt),di.refreshMaterialUniforms(Ms,O,R,I,V),Kn.upload(q,Rt.uniformsList,Ms,xt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Kn.upload(q,Rt.uniformsList,Ms,xt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&me.setValue(q,"center",X.center),me.setValue(q,"modelViewMatrix",X.modelViewMatrix),me.setValue(q,"normalMatrix",X.normalMatrix),me.setValue(q,"modelMatrix",X.matrixWorld),ri}function vu(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function yu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,F,B){At.get(S.texture).__webglTexture=F,At.get(S.depthTexture).__webglTexture=B;let O=At.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=B===void 0,O.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){let B=At.get(S);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,B=0){T=S,_=F,v=B;let O=!0;if(S){let bt=At.get(S);bt.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(36160,null),O=!1):bt.__webglFramebuffer===void 0?xt.setupRenderTarget(S):bt.__hasExternalTextures&&xt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture)}let X=null,mt=!1,yt=!1;if(S){let bt=S.texture;(bt.isData3DTexture||bt.isDataArrayTexture)&&(yt=!0);let Ft=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Ft[F],mt=!0):Mt.isWebGL2&&S.samples>0&&xt.useMultisampledRTT(S)===!1?X=At.get(S).__webglMultisampledFramebuffer:X=Ft,A.copy(S.viewport),C.copy(S.scissor),x=S.scissorTest}else A.copy(L).multiplyScalar(R).floor(),C.copy(k).multiplyScalar(R).floor(),x=z;if(at.bindFramebuffer(36160,X)&&Mt.drawBuffers&&O&&at.drawBuffers(S,X),at.viewport(A),at.scissor(C),at.setScissorTest(x),mt){let bt=At.get(S.texture);q.framebufferTexture2D(36160,36064,34069+F,bt.__webglTexture,B)}else if(yt){let bt=At.get(S.texture),Ft=F||0;q.framebufferTextureLayer(36160,36064,bt.__webglTexture,B||0,Ft)}y=-1},this.readRenderTargetPixels=function(S,F,B,O,X,mt,yt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){at.bindFramebuffer(36160,St);try{let bt=S.texture,Ft=bt.format,Ct=bt.type;if(Ft!==Qe&&U.convert(Ft)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Pt=Ct===Rs&&(wt.has("EXT_color_buffer_half_float")||Mt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ct!==cn&&U.convert(Ct)!==q.getParameter(35738)&&!(Ct===rn&&(Mt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-O&&B>=0&&B<=S.height-X&&q.readPixels(F,B,O,X,U.convert(Ft),U.convert(Ct),mt)}finally{let bt=T!==null?At.get(T).__webglFramebuffer:null;at.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(S,F,B=0){let O=Math.pow(2,-B),X=Math.floor(F.image.width*O),mt=Math.floor(F.image.height*O);xt.setTexture2D(F,0),q.copyTexSubImage2D(3553,B,0,0,S.x,S.y,X,mt),at.unbindTexture()},this.copyTextureToTexture=function(S,F,B,O=0){let X=F.image.width,mt=F.image.height,yt=U.convert(B.format),St=U.convert(B.type);xt.setTexture2D(B,0),q.pixelStorei(37440,B.flipY),q.pixelStorei(37441,B.premultiplyAlpha),q.pixelStorei(3317,B.unpackAlignment),F.isDataTexture?q.texSubImage2D(3553,O,S.x,S.y,X,mt,yt,St,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(3553,O,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,yt,F.mipmaps[0].data):q.texSubImage2D(3553,O,S.x,S.y,yt,St,F.image),O===0&&B.generateMipmaps&&q.generateMipmap(3553),at.unbindTexture()},this.copyTextureToTexture3D=function(S,F,B,O,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=S.max.x-S.min.x+1,yt=S.max.y-S.min.y+1,St=S.max.z-S.min.z+1,bt=U.convert(O.format),Ft=U.convert(O.type),Ct;if(O.isData3DTexture)xt.setTexture3D(O,0),Ct=32879;else if(O.isDataArrayTexture)xt.setTexture2DArray(O,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,O.flipY),q.pixelStorei(37441,O.premultiplyAlpha),q.pixelStorei(3317,O.unpackAlignment);let Pt=q.getParameter(3314),Ht=q.getParameter(32878),Ki=q.getParameter(3316),Pn=q.getParameter(3315),Rn=q.getParameter(32877),si=B.isCompressedTexture?B.mipmaps[0]:B.image;q.pixelStorei(3314,si.width),q.pixelStorei(32878,si.height),q.pixelStorei(3316,S.min.x),q.pixelStorei(3315,S.min.y),q.pixelStorei(32877,S.min.z),B.isDataTexture||B.isData3DTexture?q.texSubImage3D(Ct,X,F.x,F.y,F.z,mt,yt,St,bt,Ft,si.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ct,X,F.x,F.y,F.z,mt,yt,St,bt,si.data)):q.texSubImage3D(Ct,X,F.x,F.y,F.z,mt,yt,St,bt,Ft,si),q.pixelStorei(3314,Pt),q.pixelStorei(32878,Ht),q.pixelStorei(3316,Ki),q.pixelStorei(3315,Pn),q.pixelStorei(32877,Rn),X===0&&O.generateMipmaps&&q.generateMipmap(Ct),at.unbindTexture()},this.initTexture=function(S){xt.setTexture2D(S,0),at.unbindTexture()},this.resetState=function(){_=0,v=0,T=null,at.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var mo=class extends ko{};mo.prototype.isWebGL1Renderer=!0;var Nr=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}};var go=class extends $t{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};var Br=class extends $t{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var kr=class extends $t{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xc=new Zt,_o=new Ds,yr=new is,wr=new D,Ur=class extends Ee{constructor(t=new he,e=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(n),yr.radius+=s,t.ray.intersectsSphere(yr)===!1)return;Xc.copy(n).invert(),_o.copy(t.ray).applyMatrix4(Xc);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=u,d=m;g<d;g++){let p=l.getX(g);wr.fromBufferAttribute(f,p),Yc(wr,p,c,n,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,d=m;g<d;g++)wr.fromBufferAttribute(f,g),Yc(wr,g,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}};function Yc(o,t,e,i,n,s,a){let r=_o.distanceSqToPoint(o);if(r<e){let c=new D;_o.closestPointToPoint(o,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:t,face:null,object:a})}}function Uo(){let o=0,t=0,e=0,i=0;function n(s,a,r,c){o=s,t=r,e=-3*s+3*a-2*r-c,i=2*s-2*a+r+c}return{initCatmullRom:function(s,a,r,c,l){n(a,r,l*(r-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,r,c,l,h,f){let u=(a-s)/l-(r-s)/(l+h)+(r-a)/h,m=(r-a)/h-(c-a)/(h+f)+(c-r)/f;u*=h,m*=h,n(a,r,u,m)},calc:function(s){let a=s*s,r=a*s;return o+t*s+e*a+i*r}}}var V_=new D,H_=new Uo,G_=new Uo,W_=new Uo;var q_=new D,X_=new D,Y_=new D,J_=new Ue;var xo=class extends $t{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ft(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Fs=class extends Kt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vr=class extends $t{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vo=class extends Vr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},yo=class extends $t{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wo=class extends $t{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mo=class extends $t{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},bo=class extends $t{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},So=class extends $t{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ft(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},To=class extends Br{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}},t0={ShadowMaterial:xo,SpriteMaterial:go,RawShaderMaterial:Fs,ShaderMaterial:Kt,PointsMaterial:kr,MeshPhysicalMaterial:vo,MeshStandardMaterial:Vr,MeshPhongMaterial:yo,MeshToonMaterial:wo,MeshNormalMaterial:Mo,MeshLambertMaterial:bo,MeshDepthMaterial:zr,MeshDistanceMaterial:Or,MeshBasicMaterial:bi,MeshMatcapMaterial:So,LineDashedMaterial:To,LineBasicMaterial:Br,Material:$t};$t.fromType=function(o){return new t0[o]};var Jt={arraySlice:function(o,t,e){return Jt.isTypedArray(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)},convertArray:function(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function t(n,s){return o[n]-o[s]}let e=o.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i},sortedArray:function(o,t,e){let i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){let r=e[s]*t;for(let c=0;c!==t;++c)n[a++]=o[r+c]}return n},flattenJSON:function(o,t,e,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=o[n++];while(s!==void 0)},subclip:function(o,t,e,i,n=30){let s=o.clone();s.name=t;let a=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],h=l.getValueSize(),f=[],u=[];for(let m=0;m<l.times.length;++m){let g=l.times[m]*n;if(!(g<e||g>=i)){f.push(l.times[m]);for(let d=0;d<h;++d)u.push(l.values[m*h+d])}}f.length!==0&&(l.times=Jt.convertArray(f,l.times.constructor),l.values=Jt.convertArray(u,l.values.constructor),a.push(l))}s.tracks=a;let r=1/0;for(let c=0;c<s.tracks.length;++c)r>s.tracks[c].times[0]&&(r=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*r);return s.resetDuration(),s},makeClipAdditive:function(o,t=0,e=o,i=30){i<=0&&(i=30);let n=e.tracks.length,s=t/i;for(let a=0;a<n;++a){let r=e.tracks[a],c=r.ValueTypeName;if(c==="bool"||c==="string")continue;let l=o.tracks.find(function(_){return _.name===r.name&&_.ValueTypeName===c});if(l===void 0)continue;let h=0,f=r.getValueSize();r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0,m=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=m/3);let g=r.times.length-1,d;if(s<=r.times[0]){let _=h,v=f-h;d=Jt.arraySlice(r.values,_,v)}else if(s>=r.times[g]){let _=g*f+h,v=_+f-h;d=Jt.arraySlice(r.values,_,v)}else{let _=r.createInterpolant(),v=h,T=f-h;_.evaluate(s),d=Jt.arraySlice(_.resultBuffer,v,T)}c==="quaternion"&&new hi().fromArray(d).normalize().conjugate().toArray(d);let p=l.times.length;for(let _=0;_<p;++_){let v=_*m+u;if(c==="quaternion")hi.multiplyQuaternionsFlat(l.values,v,d,0,l.values,v);else{let T=m-u*2;for(let y=0;y<T;++y)l.values[v+y]-=d[y]}}}return o.blendMode=pf,o}},ss=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let r=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let r=e[1];t<r&&(i=2,s=r);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let r=i+a>>>1;t<e[r]?a=r:i=r+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ao=class extends ss{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,r=n[s],c=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case lc:s=t,r=2*e-i;break;case cc:s=n.length-2,r=e+n[s]-n[s+1];break;default:s=t,r=i}if(c===void 0)switch(this.getSettings_().endingEnd){case lc:a=t,c=2*i-e;break;case cc:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-r),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=t*r,l=c-r,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(i-e)/(n-e),d=g*g,p=d*g,_=-u*p+2*u*d-u*g,v=(1+u)*p+(-1.5-2*u)*d+(-.5+u)*g+1,T=(-1-m)*p+(1.5+m)*d+.5*g,y=m*p-m*d;for(let M=0;M!==r;++M)s[M]=_*a[h+M]+v*a[l+M]+T*a[c+M]+y*a[f+M];return s}},Eo=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=t*r,l=c-r,h=(i-e)/(n-e),f=1-h;for(let u=0;u!==r;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}},Co=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jt.convertArray(e,this.TimeBufferType),this.values=Jt.convertArray(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Jt.convertArray(t.times,Array),values:Jt.convertArray(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Tr:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let r=this.getValueSize();this.times=Jt.arraySlice(i,s,a),this.values=Jt.arraySlice(this.values,s*r,a*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){let c=i[r];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,c,a),t=!1;break}a=c}if(n!==void 0&&Jt.isTypedArray(n))for(let r=0,c=n.length;r!==c;++r){let l=n[r];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,l),t=!1;break}}return t}optimize(){let t=Jt.arraySlice(this.times),e=Jt.arraySlice(this.values),i=this.getValueSize(),n=this.getInterpolation()===ya,s=t.length-1,a=1;for(let r=1;r<s;++r){let c=!1,l=t[r],h=t[r+1];if(l!==h&&(r!==1||l!==t[0]))if(n)c=!0;else{let f=r*i,u=f-i,m=f+i;for(let g=0;g!==i;++g){let d=e[f+g];if(d!==e[u+g]||d!==e[m+g]){c=!0;break}}}if(c){if(r!==a){t[a]=t[r];let f=r*i,u=a*i;for(let m=0;m!==i;++m)e[u+m]=e[f+m]}++a}}if(s>0){t[a]=t[s];for(let r=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[r+l];++a}return a!==t.length?(this.times=Jt.arraySlice(t,0,a),this.values=Jt.arraySlice(e,0,a*i)):(this.times=t,this.values=e),this}clone(){let t=Jt.arraySlice(this.times,0),e=Jt.arraySlice(this.values,0),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Tr;var gn=class extends ti{};gn.prototype.ValueTypeName="bool";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=Sr;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends ti{};Po.prototype.ValueTypeName="color";var Ro=class extends ti{};Ro.prototype.ValueTypeName="number";var Lo=class extends ss{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=(i-e)/(n-e),l=t*r;for(let h=l+r;l!==h;l+=4)hi.slerpFlat(s,0,a,l-r,a,l,c);return s}},zs=class extends ti{InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.DefaultInterpolation=Tr;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends ti{};_n.prototype.ValueTypeName="string";_n.prototype.ValueBufferType=Array;_n.prototype.DefaultInterpolation=Sr;_n.prototype.InterpolantFactoryMethodLinear=void 0;_n.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends ti{};Do.prototype.ValueTypeName="vector";var Jc={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},Io=class{constructor(t,e,i){let n=this,s=!1,a=0,r=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){r++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,r),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,r),a===r&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},e0=new Io,Hr=class{constructor(t){this.manager=t!==void 0?t:e0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};var Fo=class extends Hr{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Jc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let r=Ls("img");function c(){h(),Jc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){h(),n&&n(f),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){r.removeEventListener("load",c,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",c,!1),r.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}};var Gr=class extends Hr{constructor(t){super(t)}load(t,e,i,n){let s=new Ae,a=new Fo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}};var rs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Zc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Zc(){return(typeof performance>"u"?Date:performance).now()}var Vo="\\[\\]\\.:\\/",i0=new RegExp("["+Vo+"]","g"),Ho="[^"+Vo+"]",n0="[^"+Vo.replace("\\.","")+"]",s0=/((?:WC+[\/:])*)/.source.replace("WC",Ho),r0=/(WCOD+)?/.source.replace("WCOD",n0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ho),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ho),l0=new RegExp("^"+s0+r0+a0+o0+"$"),c0=["material","materials","bones"],zo=class{constructor(t,e,i){let n=i||Lt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Lt=class{constructor(t,e,i){this.path=e,this.parsedPath=i||Lt.parseTrackName(e),this.node=Lt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Lt.Composite(t,e,i):new Lt(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){let e=l0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);c0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let r=s[a];if(r.name===e||r.uuid===e)return r;let c=i(r.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=Lt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[n];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=zo;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wr=class{constructor(t,e,i=0,n=1/0){this.ray=new Ds(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Oo(t,this,i,e),i.sort($c),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Oo(t[n],this,i,e);return i.sort($c),i}};function $c(o,t){return o.distance-t.distance}function Oo(o,t,e,i){if(o.layers.test(t.layers)&&o.raycast(t,e),i===!0){let n=o.children;for(let s=0,a=n.length;s<a;s++)Oo(n[s],t,e,!0)}}var hh=new ArrayBuffer(4),Z_=new Float32Array(hh),$_=new Uint32Array(hh),oi=new Uint32Array(512),li=new Uint32Array(512);for(let o=0;o<256;++o){let t=o-127;t<-27?(oi[o]=0,oi[o|256]=32768,li[o]=24,li[o|256]=24):t<-14?(oi[o]=1024>>-t-14,oi[o|256]=1024>>-t-14|32768,li[o]=-t-1,li[o|256]=-t-1):t<=15?(oi[o]=t+15<<10,oi[o|256]=t+15<<10|32768,li[o]=13,li[o|256]=13):t<128?(oi[o]=31744,oi[o|256]=64512,li[o]=24,li[o|256]=24):(oi[o]=31744,oi[o|256]=64512,li[o]=13,li[o|256]=13)}var uh=new Uint32Array(2048),Ns=new Uint32Array(64),h0=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,uh[o]=t|e}for(let o=1024;o<2048;++o)uh[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)Ns[o]=o<<23;Ns[31]=1199570944;Ns[32]=2147483648;for(let o=33;o<63;++o)Ns[o]=2147483648+(o-32<<23);Ns[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(h0[o]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);var cs={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},f0=new mn(-1,1,1,-1,0,1),Go=new he;Go.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3));Go.setAttribute("uv",new xe([0,2,0,0,2,0],2));var hs=class{constructor(t){this._mesh=new _e(Go,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,f0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Bs=class extends ei{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Kt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=os.clone(t.uniforms),this.material=new Kt({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new hs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}};var ks=class extends ei{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Zr=class extends ei{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var $r=class{constructor(t,e){if(this.renderer=t,e===void 0){let i=t.getSize(new ht);this._pixelRatio=t.getPixelRatio(),this._width=i.width,this._height=i.height,e=new ce(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],cs===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Bs===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Bs(cs),this.clock=new rs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let r=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}ks!==void 0&&(a instanceof ks?i=!0:a instanceof Zr&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}};var hx=new mn(-1,1,1,-1,0,1),fh=new he;fh.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3));fh.setAttribute("uv",new xe([0,2,0,0,2,0],2));var Kr=class extends ei{constructor(t,e,i,n,s){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),s=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Wo={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Si=class extends ei{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ce(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let u=new ce(s,a);u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let m=new ce(s,a);m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}Wo===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let r=Wo;this.highPassUniforms=os.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new ht(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,cs===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let h=cs;this.copyUniforms=os.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:br,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new bi,this.fsQuad=new hs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.texSize.value=new ht(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[c].uniforms.direction.value=Si.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Si.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){return new Kt({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}};Si.BlurDirectionX=new ht(1,0);Si.BlurDirectionY=new ht(0,1);function Ti(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vh(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Le={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},rl,Ge=1e8,Bt=1/Ge,Ko=Math.PI*2,d0=Ko/4,p0=0,yh=Math.sqrt,m0=Math.cos,g0=Math.sin,jt=function(t){return typeof t=="string"},ie=function(t){return typeof t=="function"},Ci=function(t){return typeof t=="number"},aa=function(t){return typeof t>"u"},Pi=function(t){return typeof t=="object"},Re=function(t){return t!==!1},wh=function(){return typeof window<"u"},Qr=function(t){return ie(t)||jt(t)},Mh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},de=Array.isArray,Qo=/(?:-?\.?\d|\.)+/gi,al=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ol=/[+-]=-?[.\d]+/,bh=/[^,'"\[\]\s]+/gi,_0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,ui,jo,ll,Oe={},ta={},Sh,Th=function(t){return(ta=yn(t,Oe))&&Ne},oa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ea=function(t,e){return!e&&console.warn(t)},Ah=function(t,e){return t&&(Oe[t]=e)&&ta&&(ta[t]=e)||Oe},qs=function(){return 0},cl={},Hi=[],tl={},Eh,Ce={},Xo={},dh=30,jr=[],hl="",ul=function(t){var e=t[0],i,n;if(Pi(e)||ie(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=jr.length;n--&&!jr[n].targetTest(e););i=jr[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new ml(t[n],i)))||t.splice(n,1);return t},Gi=function(t){return t._gsap||ul(We(t))[0]._gsap},fl=function(t,e,i){return(i=t[e])&&ie(i)?t[e]():aa(i)&&t.getAttribute&&t.getAttribute(e)||i},we=function(t,e){return(t=t.split(",")).forEach(e)||t},Wt=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Mn=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},x0=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},ia=function(){var t=Hi.length,e=Hi.slice(0),i,n;for(tl={},Hi.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ch=function(t,e,i,n){Hi.length&&ia(),t.render(e,i,n),Hi.length&&ia()},Ph=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(bh).length<2?e:jt(t)?t.trim():t},Rh=function(t){return t},Xe=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},v0=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},yn=function(t,e){for(var i in e)t[i]=e[i];return t},ph=function o(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Pi(e[i])?o(t[i]||(t[i]={}),e[i]):e[i]);return t},na=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Hs=function(t){var e=t.parent||Vt,i=t.keyframes?v0(de(t.keyframes)):Xe;if(Re(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},y0=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Lh=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t[n],r;if(s)for(r=e[s];a&&a[s]>r;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},la=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Ai=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},xn=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},w0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},M0=function o(t){return!t||t._ts&&o(t.parent)},mh=function(t){return t._repeat?ds(t._tTime,t=t.duration()+t._rDelay)*t:0},ds=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},sa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ca=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||Bt)||0))},dl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ue(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ca(t),i._dirty||xn(i,t)),t},Dh=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=sa(t.rawTime(),e),(!e._dur||Js(0,e.totalDuration(),i)-e._tTime>Bt)&&e.render(i,!0)),xn(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Bt}},fi=function(t,e,i,n){return e.parent&&Ai(e),e._start=ue((Ci(i)?i:i||t!==Vt?He(t,i,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lh(t,e,"_first","_last",t._sort?"_start":0),el(e)||(t._recent=e),n||Dh(t,e),t},Ih=function(t,e){return(Oe.ScrollTrigger||oa("scrollTrigger",e))&&Oe.ScrollTrigger.create(e,t)},Fh=function(t,e,i,n){if(xl(t,e),!t._initted)return 1;if(!i&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Eh!==Pe.frame)return Hi.push(t),t._lazy=[e,n],1},b0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},el=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},S0=function(t,e,i,n){var s=t.ratio,a=e<0||!e&&(!t._start&&b0(t)&&!(!t._initted&&el(t))||(t._ts<0||t._dp._ts<0)&&!el(t))?0:1,r=t._rDelay,c=0,l,h,f;if(r&&t._repeat&&(c=Js(0,t._tDur,e),h=ds(c,r),t._yoyo&&h&1&&(a=1-a),h!==ds(t._tTime,r)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||n||t._zTime===Bt||!e&&t._zTime){if(!t._initted&&Fh(t,e,n,i))return;for(f=t._zTime,t._zTime=e||(i?Bt:0),i||(i=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!i&&qe(t,"onUpdate"),c&&t._repeat&&!i&&t.parent&&qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ai(t,1),i||(qe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},T0=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ps=function(t,e,i,n){var s=t._repeat,a=ue(e)||0,r=t._tTime/t._tDur;return r&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ue(a*(s+1)+t._rDelay*s):a,r>0&&!n?dl(t,t._tTime=t._tDur*r):t.parent&&ca(t),i||xn(t.parent,t),t},gh=function(t){return t instanceof fe?xn(t):ps(t,t._dur)},A0={_start:0,endTime:qs,totalDuration:qs},He=function o(t,e,i){var n=t.labels,s=t._recent||A0,a=t.duration()>=Ge?s.endTime(!1):t._dur,r,c,l;return jt(e)&&(isNaN(e)||e in n)?(c=e.charAt(0),l=e.substr(-1)==="%",r=e.indexOf("="),c==="<"||c===">"?(r>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(r<0?s:i).totalDuration()/100:1)):r<0?(e in n||(n[e]=a),n[e]):(c=parseFloat(e.charAt(r-1)+e.substr(r+1)),l&&i&&(c=c/100*(de(i)?i[0]:i).totalDuration()),r>1?o(t,e.substr(0,r-1),i)+c:a+c)):e==null?a:+e},Gs=function(t,e,i){var n=Ci(e[1]),s=(n?2:1)+(t<2?0:1),a=e[s],r,c;if(n&&(a.duration=e[1]),a.parent=i,t){for(r=a,c=i;c&&!("immediateRender"in r);)r=c.vars.defaults||{},c=Re(c.vars.inherit)&&c.parent;a.immediateRender=Re(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Qt(e[0],a,e[s+1])},Wi=function(t,e){return t||t===0?e(t):e},Js=function(t,e,i){return i<t?t:i>e?e:i},re=function(t,e){return!jt(t)||!(e=_0.exec(t))?"":e[1]},E0=function(t,e,i){return Wi(i,function(n){return Js(t,e,n)})},il=[].slice,zh=function(t,e){return t&&Pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pi(t[0]))&&!t.nodeType&&t!==ui},C0=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return jt(n)&&!e||zh(n,1)?(s=i).push.apply(s,We(n)):i.push(n)})||i},We=function(t,e,i){return jt(t)&&!i&&(jo||!ms())?il.call((e||ll).querySelectorAll(t),0):de(t)?C0(t,i):zh(t)?il.call(t,0):t?[t]:[]},P0=function(t){return t=We(t)[0]||ea("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return We(e,i.querySelectorAll?i:i===t?ea("Invalid scope")||ll.createElement("div"):t)}},Oh=function(t){return t.sort(function(){return .5-Math.random()})},Nh=function(t){if(ie(t))return t;var e=Pi(t)?t:{each:t},i=vn(e.ease),n=e.from||0,s=parseFloat(e.base)||0,a={},r=n>0&&n<1,c=isNaN(n)||r,l=e.axis,h=n,f=n;return jt(n)?h=f={center:.5,edges:.5,end:1}[n]||0:!r&&c&&(h=n[0],f=n[1]),function(u,m,g){var d=(g||e).length,p=a[d],_,v,T,y,M,A,C,x,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,Ge])[1],!b){for(C=-Ge;C<(C=g[b++].getBoundingClientRect().left)&&b<d;);b--}for(p=a[d]=[],_=c?Math.min(b,d)*h-.5:n%b,v=b===Ge?0:c?d*f/b-.5:n/b|0,C=0,x=Ge,A=0;A<d;A++)T=A%b-_,y=v-(A/b|0),p[A]=M=l?Math.abs(l==="y"?y:T):yh(T*T+y*y),M>C&&(C=M),M<x&&(x=M);n==="random"&&Oh(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(b>d?d-1:l?l==="y"?d/b:b:Math.max(b,d/b))||0)*(n==="edges"?-1:1),p.b=d<0?s-d:s,p.u=re(e.amount||e.each)||0,i=i&&d<0?Wh(i):i}return d=(p[u]-p.min)/p.max||0,ue(p.b+(i?i(d):d)*p.v)+p.u}},nl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Math.round(parseFloat(i)/t)*t*e;return(n-n%1)/e+(Ci(i)?0:re(i))}},Bh=function(t,e){var i=de(t),n,s;return!i&&Pi(t)&&(n=i=t.radius||Ge,t.values?(t=We(t.values),(s=!Ci(t[0]))&&(n*=n)):t=nl(t.increment)),Wi(e,i?ie(t)?function(a){return s=t(a),Math.abs(s-a)<=n?s:a}:function(a){for(var r=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Ge,h=0,f=t.length,u,m;f--;)s?(u=t[f].x-r,m=t[f].y-c,u=u*u+m*m):u=Math.abs(t[f]-r),u<l&&(l=u,h=f);return h=!n||l<=n?t[h]:a,s||h===a||Ci(a)?h:h+re(a)}:nl(t))},kh=function(t,e,i,n){return Wi(de(t)?!e:i===!0?!!(i=0):!n,function(){return de(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},R0=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,a){return a(s)},n)}},L0=function(t,e){return function(i){return t(parseFloat(i))+(e||re(i))}},D0=function(t,e,i){return Vh(t,e,0,1,i)},Uh=function(t,e,i){return Wi(i,function(n){return t[~~e(n)]})},I0=function o(t,e,i){var n=e-t;return de(t)?Uh(t,o(0,t.length),e):Wi(i,function(s){return(n+(s-t)%n)%n+t})},F0=function o(t,e,i){var n=e-t,s=n*2;return de(t)?Uh(t,o(0,t.length-1),e):Wi(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>n?s-a:a)})},gs=function(t){for(var e=0,i="",n,s,a,r;~(n=t.indexOf("random(",e));)a=t.indexOf(")",n),r=t.charAt(n+7)==="[",s=t.substr(n+7,a-n-7).match(r?bh:Qo),i+=t.substr(e,n-e)+kh(r?s:+s[0],r?0:+s[1],+s[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},Vh=function(t,e,i,n,s){var a=e-t,r=n-i;return Wi(s,function(c){return i+((c-t)/a*r||0)})},z0=function o(t,e,i,n){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=jt(t),r={},c,l,h,f,u;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(de(t)&&!de(e)){for(h=[],f=t.length,u=f-2,l=1;l<f;l++)h.push(o(t[l-1],t[l]));f--,s=function(g){g*=f;var d=Math.min(u,~~g);return h[d](g-d)},i=e}else n||(t=yn(de(t)?[]:{},t));if(!h){for(c in e)gl.call(r,t,c,"get",e[c]);s=function(g){return wl(g,r)||(a?t.p:t)}}}return Wi(i,s)},_h=function(t,e,i){var n=t.labels,s=Ge,a,r,c;for(a in n)r=n[a]-e,r<0==!!i&&r&&s>(r=Math.abs(r))&&(c=a,s=r);return c},qe=function(t,e,i){var n=t.vars,s=n[e],a,r;if(s)return a=n[e+"Params"],r=n.callbackScope||t,i&&Hi.length&&ia(),a?s.apply(r,a):s.call(r)},Us=function(t){return Ai(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&qe(t,"onInterrupt"),t},us,O0=function(t){t=!t.name&&t.default||t;var e=t.name,i=ie(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:qs,render:wl,add:gl,kill:Q0,modifier:K0,rawVars:0},a={targetTest:0,get:0,getSetter:ha,aliases:{},register:0};if(ms(),t!==n){if(Ce[e])return;Xe(n,Xe(na(t,s),a)),yn(n.prototype,yn(s,na(t,a))),Ce[n.prop=e]=n,t.targetTest&&(jr.push(n),cl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ah(e,n),t.register&&t.register(Ne,n,Me)},Nt=255,Vs={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Yo=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Nt+.5|0},Hh=function(t,e,i){var n=t?Ci(t)?[t>>16,t>>8&Nt,t&Nt]:0:Vs.black,s,a,r,c,l,h,f,u,m,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vs[t])n=Vs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),r=t.charAt(3),t="#"+s+s+a+a+r+r+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Nt,n&Nt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Nt,t&Nt]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(Qo),!e)c=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=Yo(c+1/3,s,a),n[1]=Yo(c,s,a),n[2]=Yo(c-1/3,s,a);else if(~t.indexOf("="))return n=t.match(al),i&&n.length<4&&(n[3]=1),n}else n=t.match(Qo)||Vs.transparent;n=n.map(Number)}return e&&!g&&(s=n[0]/Nt,a=n[1]/Nt,r=n[2]/Nt,f=Math.max(s,a,r),u=Math.min(s,a,r),h=(f+u)/2,f===u?c=l=0:(m=f-u,l=h>.5?m/(2-f-u):m/(f+u),c=f===s?(a-r)/m+(a<r?6:0):f===a?(r-s)/m+2:(s-a)/m+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Gh=function(t){var e=[],i=[],n=-1;return t.split(Ei).forEach(function(s){var a=s.match(wn)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},xh=function(t,e,i){var n="",s=(t+n).match(Ei),a=e?"hsla(":"rgba(",r=0,c,l,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Hh(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=Gh(t),c=i.c,c.join(n)!==h.c.join(n)))for(l=t.replace(Ei,"1").split(wn),f=l.length-1;r<f;r++)n+=l[r]+(~c.indexOf(r)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!l)for(l=t.split(Ei),f=l.length-1;r<f;r++)n+=l[r]+s[r];return n+l[f]},Ei=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vs)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),N0=/hsl[a]?\(/,pl=function(t){var e=t.join(" "),i;if(Ei.lastIndex=0,Ei.test(e))return i=N0.test(e),t[1]=xh(t[1],i),t[0]=xh(t[0],i,Gh(t[1])),!0},Xs,Pe=function(){var o=Date.now,t=500,e=33,i=o(),n=i,s=1e3/240,a=s,r=[],c,l,h,f,u,m,g=function d(p){var _=o()-n,v=p===!0,T,y,M,A;if(_>t&&(i+=_-e),n+=_,M=n-i,T=M-a,(T>0||v)&&(A=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,a+=T+(T>=s?4:s-T),y=1),v||(c=l(d)),y)for(m=0;m<r.length;m++)r[m](M,u,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Sh&&(!jo&&wh()&&(ui=jo=window,ll=ui.document||{},Oe.gsap=Ne,(ui.gsapVersions||(ui.gsapVersions=[])).push(Ne.version),Th(ta||ui.GreenSockGlobals||!ui.gsap&&ui||{}),h=ui.requestAnimationFrame),c&&f.sleep(),l=h||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Xs=1,g(2))},sleep:function(){(h?ui.cancelAnimationFrame:clearTimeout)(c),Xs=0,l=qs},lagSmoothing:function(p,_){t=p||1/Bt,e=Math.min(_,t,0)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,_,v){var T=_?function(y,M,A,C){p(y,M,A,C),f.remove(T)}:p;return f.remove(p),r[v?"unshift":"push"](T),ms(),T},remove:function(p,_){~(_=r.indexOf(p))&&r.splice(_,1)&&m>=_&&m--},_listeners:r},f}(),ms=function(){return!Xs&&Pe.wake()},Et={},B0=/^[\d.\-M][\d.\-,\s]/,k0=/["']/g,U0=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,a=i.length,r,c,l;s<a;s++)c=i[s],r=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,r),e[n]=isNaN(l)?l.replace(k0,"").trim():+l,n=c.substr(r+1).trim();return e},V0=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},H0=function(t){var e=(t+"").split("("),i=Et[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[U0(e[1])]:V0(t).split(",").map(Ph)):Et._CE&&B0.test(t)?Et._CE("",t):i},Wh=function(t){return function(e){return 1-t(1-e)}},qh=function o(t,e){for(var i=t._first,n;i;)i instanceof fe?o(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?o(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},vn=function(t,e){return t&&(ie(t)?t:Et[t]||H0(t))||e},bn=function(t,e,i,n){i===void 0&&(i=function(c){return 1-e(1-c)}),n===void 0&&(n=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},a;return we(t,function(r){Et[r]=Oe[r]=s,Et[a=r.toLowerCase()]=i;for(var c in s)Et[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Et[r+"."+c]=s[c]}),s},Xh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Jo=function o(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/Ko*(Math.asin(1/n)||0),r=function(h){return h===1?1:n*Math.pow(2,-10*h)*g0((h-a)*s)+1},c=t==="out"?r:t==="in"?function(l){return 1-r(1-l)}:Xh(r);return s=Ko/s,c.config=function(l,h){return o(t,l,h)},c},Zo=function o(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Xh(i);return n.config=function(s){return o(t,s)},n};we("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;bn(o+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;bn("Elastic",Jo("in"),Jo("out"),Jo());(function(o,t){var e=1/t,i=2*e,n=2.5*e,s=function(r){return r<e?o*r*r:r<i?o*Math.pow(r-1.5/t,2)+.75:r<n?o*(r-=2.25/t)*r+.9375:o*Math.pow(r-2.625/t,2)+.984375};bn("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);bn("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});bn("Circ",function(o){return-(yh(1-o*o)-1)});bn("Sine",function(o){return o===1?1:-m0(o*d0)+1});bn("Back",Zo("in"),Zo("out"),Zo());Et.SteppedEase=Et.steps=Oe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,a=1-Bt;return function(r){return((n*Js(0,a,r)|0)+s)*i}}};fs.ease=Et["quad.out"];we("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return hl+=o+","+o+"Params,"});var ml=function(t,e){this.id=p0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:fl,this.set=e?e.getSetter:ha},Ys=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ps(this,+e.duration,1,1),this.data=e.data,Xs||Pe.wake()}var t=o.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dl(this,i),!s._dp||s.parent||Dh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Bt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ch(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+mh(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+mh(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ds(this._tTime,s)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?sa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Bt?0:this._rts,this.totalTime(Js(-this._delay,this._tDur,n),!0),ca(this),w0(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&fi(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Re(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sa(n.rawTime(i),this):this._tTime:this._tTime},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,gh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,gh(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(He(this,i),Re(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Re(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Bt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Bt)},t.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this;return new Promise(function(s){var a=ie(i)?i:Rh,r=function(){var l=n.then;n.then=null,ie(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=l),s(a),n.then=l};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?r():n._prom=r})},t.kill=function(){Us(this)},o}();Xe(Ys.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var fe=function(o){vh(t,o);function t(i,n){var s;return i===void 0&&(i={}),s=o.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Re(i.sortChildren),Vt&&fi(i.parent||Vt,Ti(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Ih(Ti(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,a){return Gs(0,arguments,this),this},e.from=function(n,s,a){return Gs(1,arguments,this),this},e.fromTo=function(n,s,a,r){return Gs(2,arguments,this),this},e.set=function(n,s,a){return s.duration=0,s.parent=this,Hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(n,s,He(this,a),1),this},e.call=function(n,s,a){return fi(this,Qt.delayedCall(0,n,s),a)},e.staggerTo=function(n,s,a,r,c,l,h){return a.duration=s,a.stagger=a.stagger||r,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Qt(n,a,He(this,c)),this},e.staggerFrom=function(n,s,a,r,c,l,h){return a.runBackwards=1,Hs(a).immediateRender=Re(a.immediateRender),this.staggerTo(n,s,a,r,c,l,h)},e.staggerFromTo=function(n,s,a,r,c,l,h,f){return r.startAt=a,Hs(r).immediateRender=Re(r.immediateRender),this.staggerTo(n,s,r,c,l,h,f)},e.render=function(n,s,a){var r=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:ue(n),f=this._zTime<0!=n<0&&(this._initted||!l),u,m,g,d,p,_,v,T,y,M,A,C;if(this!==Vt&&h>c&&n>=0&&(h=c),h!==this._tTime||a||f){if(r!==this._time&&l&&(h+=this._time-r,n+=this._time-r),u=h,y=this._start,T=this._ts,_=!T,f&&(l||(r=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,p=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,s,a);if(u=ue(h%p),h===c?(d=this._repeat,u=l):(d=~~(h/p),d&&d===h/p&&(u=l,d--),u>l&&(u=l)),M=ds(this._tTime,p),!r&&this._tTime&&M!==d&&(M=d),A&&d&1&&(u=l-u,C=1),d!==M&&!this._lock){var x=A&&M&1,b=x===(A&&d&1);if(d<M&&(x=!x),r=x?0:l,this._lock=1,this.render(r||(C?0:ue(d*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&qe(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),r&&r!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,r=x?l:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;qh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=T0(this,ue(r),ue(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,r=0),!r&&u&&!s&&(qe(this,"onStart"),this._tTime!==h))return this;if(u>=r&&n>=0)for(m=this._first;m;){if(g=m._next,(m._act||u>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(n,s,a);if(m.render(m._ts>0?(u-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(u-m._start)*m._ts,s,a),u!==this._time||!this._ts&&!_){v=0,g&&(h+=this._zTime=-Bt);break}}m=g}else{m=this._last;for(var I=n<0?n:u;m;){if(g=m._prev,(m._act||I<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(n,s,a);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,a),u!==this._time||!this._ts&&!_){v=0,g&&(h+=this._zTime=I?-Bt:Bt);break}}m=g}}if(v&&!s&&(this.pause(),v.render(u>=r?0:-Bt)._zTime=u>=r?1:-1,this._ts))return this._start=y,ca(this),this.render(n,s,a);this._onUpdate&&!s&&qe(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&r)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!s&&!(n<0&&!r)&&(h||r||!c)&&(qe(this,h===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var a=this;if(Ci(s)||(s=He(this,s,n)),!(n instanceof Ys)){if(de(n))return n.forEach(function(r){return a.add(r,s)}),this;if(jt(n))return this.addLabel(n,s);if(ie(n))n=Qt.delayedCall(0,n);else return this}return this!==n?fi(this,n,s):this},e.getChildren=function(n,s,a,r){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=-Ge);for(var c=[],l=this._first;l;)l._start>=r&&(l instanceof Qt?s&&c.push(l):(a&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},e.remove=function(n){return jt(n)?this.removeLabel(n):ie(n)?this.killTweensOf(n):(la(this,n),n===this._recent&&(this._recent=this._last),xn(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(Pe.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),o.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=He(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,a){var r=Qt.delayedCall(0,s||qs,a);return r.data="isPause",this._hasPause=1,fi(this,r,He(this,n))},e.removePause=function(n){var s=this._first;for(n=He(this,n);s;)s._start===n&&s.data==="isPause"&&Ai(s),s=s._next},e.killTweensOf=function(n,s,a){for(var r=this.getTweensOf(n,a),c=r.length;c--;)Vi!==r[c]&&r[c].kill(n,s);return this},e.getTweensOf=function(n,s){for(var a=[],r=We(n),c=this._first,l=Ci(s),h;c;)c instanceof Qt?x0(c._targets,r)&&(l?(!Vi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(r,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(n,s){s=s||{};var a=this,r=He(a,n),c=s,l=c.startAt,h=c.onStart,f=c.onStartParams,u=c.immediateRender,m,g=Qt.to(a,Xe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:s.duration||Math.abs((r-(l&&"time"in l?l.time:a._time))/a.timeScale())||Bt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((r-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&ps(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(n,s,a){return this.tweenTo(s,Xe({startAt:{time:He(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),_h(this,He(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),_h(this,He(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Bt)},e.shiftChildren=function(n,s,a){a===void 0&&(a=0);for(var r=this._first,c=this.labels,l;r;)r._start>=a&&(r._start+=n,r._end+=n),r=r._next;if(s)for(l in c)c[l]>=a&&(c[l]+=n);return xn(this)},e.invalidate=function(){var n=this._first;for(this._lock=0;n;)n.invalidate(),n=n._next;return o.prototype.invalidate.call(this)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),xn(this)},e.totalDuration=function(n){var s=0,a=this,r=a._last,c=Ge,l,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(f=a.parent;r;)l=r._prev,r._dirty&&r.totalDuration(),h=r._start,h>c&&a._sort&&r._ts&&!a._lock?(a._lock=1,fi(a,r,h-r._delay,1)._lock=0):c=h,h<0&&r._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),r._end>s&&r._ts&&(s=r._end),r=l;ps(a,a===Vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(Vt._ts&&(Ch(Vt,sa(n,Vt)),Eh=Pe.frame),Pe.frame>=dh){dh+=Le.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Le.autoSleep&&Pe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pe.sleep()}}},t}(Ys);Xe(fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var G0=function(t,e,i,n,s,a,r){var c=new Me(this._pt,t,e,0,1,yl,null,s),l=0,h=0,f,u,m,g,d,p,_,v;for(c.b=i,c.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=gs(n)),a&&(v=[i,n],a(v,t,e),i=v[0],n=v[1]),u=i.match(qo)||[];f=qo.exec(n);)g=f[0],d=n.substring(l,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,c._pt={_next:c._pt,p:d||h===1?d:",",s:p,c:g.charAt(1)==="="?Mn(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=qo.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=r,(ol.test(n)||_)&&(c.e=0),this._pt=c,c},gl=function(t,e,i,n,s,a,r,c,l){ie(n)&&(n=n(s||0,t,a));var h=t[e],f=i!=="get"?i:ie(h)?l?t[e.indexOf("set")||!ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,u=ie(h)?l?J0:Zh:vl,m;if(jt(n)&&(~n.indexOf("random(")&&(n=gs(n)),n.charAt(1)==="="&&(m=Mn(f,n)+(re(f)||0),(m||m===0)&&(n=m))),f!==n||sl)return!isNaN(f*n)&&n!==""?(m=new Me(this._pt,t,e,+f||0,n-(f||0),typeof h=="boolean"?$0:$h,0,u),l&&(m.fp=l),r&&m.modifier(r,this,t),this._pt=m):(!h&&!(e in t)&&oa(e,n),G0.call(this,t,e,f,n,u,c||Le.stringFilter,l))},W0=function(t,e,i,n,s){if(ie(t)&&(t=Ws(t,s,e,i,n)),!Pi(t)||t.style&&t.nodeType||de(t)||Mh(t))return jt(t)?Ws(t,s,e,i,n):t;var a={},r;for(r in t)a[r]=Ws(t[r],s,e,i,n);return a},_l=function(t,e,i,n,s,a){var r,c,l,h;if(Ce[t]&&(r=new Ce[t]).init(s,r.rawVars?e[t]:W0(e[t],n,s,a,i),i,n,a)!==!1&&(i._pt=c=new Me(i._pt,s,t,0,1,r.render,r,0,r.priority),i!==us))for(l=i._ptLookup[i._targets.indexOf(s)],h=r._props.length;h--;)l[r._props[h]]=c;return r},Vi,sl,xl=function o(t,e){var i=t.vars,n=i.ease,s=i.startAt,a=i.immediateRender,r=i.lazy,c=i.onUpdate,l=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,u=i.yoyoEase,m=i.keyframes,g=i.autoRevert,d=t._dur,p=t._startAt,_=t._targets,v=t.parent,T=v&&v.data==="nested"?v.parent._targets:_,y=t._overwrite==="auto"&&!rl,M=t.timeline,A,C,x,b,I,R,J,Z,L,k,z,H,G;if(M&&(!m||!n)&&(n="none"),t._ease=vn(n,fs.ease),t._yEase=u?Wh(vn(u===!0?n:u,fs.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||m&&!i.stagger){if(Z=_[0]?Gi(_[0]).harness:0,H=Z&&i[Z.prop],A=na(i,cl),p&&(Ai(p.render(-1,!0)),p._lazy=0),s)if(Ai(t._startAt=Qt.set(_,Xe({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:Re(r),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:h,stagger:0},s))),e<0&&!a&&!g&&t._startAt.render(-1,!0),a){if(e>0&&!g&&(t._startAt=0),d&&e<=0){e&&(t._zTime=e);return}}else g===!1&&(t._startAt=0);else if(f&&d){if(p)!g&&(t._startAt=0);else if(e&&(a=!1),x=Xe({overwrite:!1,data:"isFromStart",lazy:a&&Re(r),immediateRender:a,stagger:0,parent:v},A),H&&(x[Z.prop]=H),Ai(t._startAt=Qt.set(_,x)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!a)o(t._startAt,Bt);else if(!e)return}for(t._pt=t._ptCache=0,r=d&&Re(r)||r&&!d,C=0;C<_.length;C++){if(I=_[C],J=I._gsap||ul(_)[C]._gsap,t._ptLookup[C]=k={},tl[J.id]&&Hi.length&&ia(),z=T===_?C:T.indexOf(I),Z&&(L=new Z).init(I,H||A,t,z,T)!==!1&&(t._pt=b=new Me(t._pt,I,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(N){k[N]=b}),L.priority&&(R=1)),!Z||H)for(x in A)Ce[x]&&(L=_l(x,A,t,z,I,T))?L.priority&&(R=1):k[x]=b=gl.call(t,I,x,"get",A[x],z,T,0,i.stringFilter);t._op&&t._op[C]&&t.kill(I,t._op[C]),y&&t._pt&&(Vi=t,Vt.killTweensOf(I,k,t.globalTime(e)),G=!t.parent,Vi=0),t._pt&&r&&(tl[J.id]=1)}R&&Ml(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,m&&e<=0&&M.render(Ge,!0,!0)},q0=function(t,e,i,n,s,a,r){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(l=h[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e;)l=l._next;if(!l)return sl=1,t.vars[e]="+=0",xl(t,r),sl=0,1;c.push(l)}for(f=c.length;f--;)l=c[f],l.s=(n||n===0)&&!s?n:l.s+(n||0)+a*l.c,l.c=i-l.s,l.e&&(l.e=Wt(i)+re(l.e)),l.b&&(l.b=l.s+re(l.b))},X0=function(t,e){var i=t[0]?Gi(t[0]).harness:0,n=i&&i.aliases,s,a,r,c;if(!n)return e;s=yn({},e);for(a in n)if(a in s)for(c=n[a].split(","),r=c.length;r--;)s[c[r]]=s[a];return s},Y0=function(t,e,i,n){var s=e.ease||n||"power1.inOut",a,r;if(de(e))r=i[t]||(i[t]=[]),e.forEach(function(c,l){return r.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)r=i[a]||(i[a]=[]),a==="ease"||r.push({t:parseFloat(t),v:e[a],e:s})},Ws=function(t,e,i,n,s){return ie(t)?t.call(e,i,n,s):jt(t)&&~t.indexOf("random(")?gs(t):t},Yh=hl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jh={};we(Yh+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Jh[o]=1});var Qt=function(o){vh(t,o);function t(i,n,s,a){var r;typeof n=="number"&&(s.duration=n,n=s,s=null),r=o.call(this,a?n:Hs(n))||this;var c=r.vars,l=c.duration,h=c.delay,f=c.immediateRender,u=c.stagger,m=c.overwrite,g=c.keyframes,d=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,v=n.parent||Vt,T=(de(i)||Mh(i)?Ci(i[0]):"length"in n)?[i]:We(i),y,M,A,C,x,b,I,R;if(r._targets=T.length?ul(T):ea("GSAP target "+i+" not found. https://greensock.com",!Le.nullTargetWarn)||[],r._ptLookup=[],r._overwrite=m,g||u||Qr(l)||Qr(h)){if(n=r.vars,y=r.timeline=new fe({data:"nested",defaults:d||{}}),y.kill(),y.parent=y._dp=Ti(r),y._start=0,u||Qr(l)||Qr(h)){if(C=T.length,I=u&&Nh(u),Pi(u))for(x in u)~Yh.indexOf(x)&&(R||(R={}),R[x]=u[x]);for(M=0;M<C;M++)A=na(n,Jh),A.stagger=0,_&&(A.yoyoEase=_),R&&yn(A,R),b=T[M],A.duration=+Ws(l,Ti(r),M,b,T),A.delay=(+Ws(h,Ti(r),M,b,T)||0)-r._delay,!u&&C===1&&A.delay&&(r._delay=h=A.delay,r._start+=h,A.delay=0),y.to(b,A,I?I(M,b,T):0),y._ease=Et.none;y.duration()?l=h=0:r.timeline=0}else if(g){Hs(Xe(y.vars.defaults,{ease:"none"})),y._ease=vn(g.ease||n.ease||"none");var J=0,Z,L,k;if(de(g))g.forEach(function(z){return y.to(T,z,">")});else{A={};for(x in g)x==="ease"||x==="easeEach"||Y0(x,g[x],A,g.easeEach);for(x in A)for(Z=A[x].sort(function(z,H){return z.t-H.t}),J=0,M=0;M<Z.length;M++)L=Z[M],k={ease:L.e,duration:(L.t-(M?Z[M-1].t:0))/100*l},k[x]=L.v,y.to(T,k,J),J+=k.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||r.duration(l=y.duration())}else r.timeline=0;return m===!0&&!rl&&(Vi=Ti(r),Vt.killTweensOf(T),Vi=0),fi(v,Ti(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),(f||!l&&!g&&r._start===ue(v._time)&&Re(f)&&M0(Ti(r))&&v.data!=="nested")&&(r._tTime=-Bt,r.render(Math.max(0,-h))),p&&Ih(Ti(r),p),r}var e=t.prototype;return e.render=function(n,s,a){var r=this._time,c=this._tDur,l=this._dur,h=n>c-Bt&&n>=0?c:n<Bt?0:n,f,u,m,g,d,p,_,v,T;if(!l)S0(this,n,s,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=n<0){if(f=h,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(g*100+n,s,a);if(f=ue(h%g),h===c?(m=this._repeat,f=l):(m=~~(h/g),m&&m===h/g&&(f=l,m--),f>l&&(f=l)),p=this._yoyo&&m&1,p&&(T=this._yEase,f=l-f),d=ds(this._tTime,g),f===r&&!a&&this._initted)return this._tTime=h,this;m!==d&&(v&&this._yEase&&qh(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(ue(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Fh(this,n<0?n:f,a,s))return this._tTime=0,this;if(r!==this._time)return this;if(l!==this._dur)return this.render(n,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(T||this._ease)(f/l),this._from&&(this.ratio=_=1-_),f&&!r&&!s&&(qe(this,"onStart"),this._tTime!==h))return this;for(u=this._pt;u;)u.r(_,u.d),u=u._next;v&&v.render(n<0?n:!f&&p?-Bt:v._dur*v._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(n<0&&this._startAt&&this._startAt.render(n,!0,a),qe(this,"onUpdate")),this._repeat&&m!==d&&this.vars.onRepeat&&!s&&this.parent&&qe(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(n<0&&this._startAt&&!this._onUpdate&&this._startAt.render(n,!0,!0),(n||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!s&&!(n<0&&!r)&&(h||r)&&(qe(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},e.resetTo=function(n,s,a,r){Xs||Pe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||xl(this,c),l=this._ease(c/this._dur),q0(this,n,s,a,r,l,c)?this.resetTo(n,s,a,r):(dl(this,0),this.parent||Lh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Us(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Vi&&Vi.vars.overwrite!==!0)._first||Us(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var r=this._targets,c=n?We(n):r,l=this._ptLookup,h=this._pt,f,u,m,g,d,p,_;if((!s||s==="all")&&y0(r,c))return s==="all"&&(this._pt=0),Us(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(d={},we(s,function(v){return d[v]=1}),s=d),s=X0(r,s)),_=r.length;_--;)if(~c.indexOf(r[_])){u=l[_],s==="all"?(f[_]=s,g=u,m={}):(m=f[_]=f[_]||{},g=s);for(d in g)p=u&&u[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&la(this,p,"_pt"),delete u[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&h&&Us(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return Gs(1,arguments)},t.delayedCall=function(n,s,a,r){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:r})},t.fromTo=function(n,s,a){return Gs(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,a){return Vt.killTweensOf(n,s,a)},t}(Ys);Xe(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});we("staggerTo,staggerFrom,staggerFromTo",function(o){Qt[o]=function(){var t=new fe,e=il.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var vl=function(t,e,i){return t[e]=i},Zh=function(t,e,i){return t[e](i)},J0=function(t,e,i,n){return t[e](n.fp,i)},Z0=function(t,e,i){return t.setAttribute(e,i)},ha=function(t,e){return ie(t[e])?Zh:aa(t[e])&&t.setAttribute?Z0:vl},$h=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},$0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},yl=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},wl=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},K0=function(t,e,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(t,e,i),s=a},Q0=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?la(this,e,"_pt"):e.dep||(i=1),e=n;return!i},j0=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Ml=function(t){for(var e=t._pt,i,n,s,a;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=s},Me=function(){function o(e,i,n,s,a,r,c,l,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=r||$h,this.d=c||this,this.set=l||vl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=j0,this.m=i,this.mt=s,this.tween=n},o}();we(hl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return cl[o]=1});Oe.TweenMax=Oe.TweenLite=Qt;Oe.TimelineLite=Oe.TimelineMax=fe;Vt=new fe({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Le.stringFilter=pl;var ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return O0(n)})},timeline:function(t){return new fe(t)},getTweensOf:function(t,e){return Vt.getTweensOf(t,e)},getProperty:function(t,e,i,n){jt(t)&&(t=We(t)[0]);var s=Gi(t||{}).get,a=i?Rh:Ph;return i==="native"&&(i=""),t&&(e?a((Ce[e]&&Ce[e].get||s)(t,e,i,n)):function(r,c,l){return a((Ce[r]&&Ce[r].get||s)(t,r,c,l))})},quickSetter:function(t,e,i){if(t=We(t),t.length>1){var n=t.map(function(h){return Ne.quickSetter(h,e,i)}),s=n.length;return function(h){for(var f=s;f--;)n[f](h)}}t=t[0]||{};var a=Ce[e],r=Gi(t),c=r.harness&&(r.harness.aliases||{})[e]||e,l=a?function(h){var f=new a;us._pt=0,f.init(t,i?h+i:h,us,0,[t]),f.render(1,f),us._pt&&wl(1,us)}:r.set(t,c);return a?l:function(h){return l(t,c,i?h+i:h,r,1)}},quickTo:function(t,e,i){var n,s=Ne.to(t,yn((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return Vt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vn(t.ease,fs.ease)),ph(fs,t||{})},config:function(t){return ph(Le,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(r){return r&&!Ce[r]&&!Oe[r]&&ea(e+" effect requires "+r+" plugin.")}),Xo[e]=function(r,c,l){return i(We(r),Xe(c||{},s),l)},a&&(fe.prototype[e]=function(r,c,l){return this.add(Xo[e](r,Pi(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Et[t]=vn(e)},parseEase:function(t,e){return arguments.length?vn(t,e):Et},getById:function(t){return Vt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new fe(t),n,s;for(i.smoothChildTiming=Re(t.smoothChildTiming),Vt.remove(i),i._dp=0,i._time=i._tTime=Vt._time,n=Vt._first;n;)s=n._next,(e||!(!n._dur&&n instanceof Qt&&n.vars.onComplete===n._targets[0]))&&fi(i,n,n._start-n._delay),n=s;return fi(Vt,i,0),i},utils:{wrap:I0,wrapYoyo:F0,distribute:Nh,random:kh,snap:Bh,normalize:D0,getUnit:re,clamp:E0,splitColor:Hh,toArray:We,selector:P0,mapRange:Vh,pipe:R0,unitize:L0,interpolate:z0,shuffle:Oh},install:Th,effects:Xo,ticker:Pe,updateRoot:fe.updateRoot,plugins:Ce,globalTimeline:Vt,core:{PropTween:Me,globals:Ah,Tween:Qt,Timeline:fe,Animation:Ys,getCache:Gi,_removeLinkedListItem:la,suppressOverwrites:function(t){return rl=t}}};we("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ra[o]=Qt[o]});Pe.add(fe.updateRoot);us=ra.to({},{duration:0});var t_=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},e_=function(t,e){var i=t._targets,n,s,a;for(n in e)for(s=i.length;s--;)a=t._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=t_(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[s],n))},$o=function(t,e){return{name:t,rawVars:1,init:function(n,s,a){a._onInit=function(r){var c,l;if(jt(s)&&(c={},we(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}e_(r,s)}}}},Ne=ra.registerPlugin({name:"attr",init:function(t,e,i,n,s){var a,r;for(a in e)r=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],n,s,0,0,a),r&&(r.op=a),this._props.push(a)}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i])}},$o("roundProps",nl),$o("modifiers"),$o("snap",Bh))||ra;Qt.version=fe.version=Ne.version="3.10.4";Sh=1;wh()&&ms();var i_=Et.Power0,n_=Et.Power1,s_=Et.Power2,r_=Et.Power3,a_=Et.Power4,o_=Et.Linear,l_=Et.Quad,c_=Et.Cubic,h_=Et.Quart,u_=Et.Quint,f_=Et.Strong,d_=Et.Elastic,p_=Et.Back,m_=Et.SteppedEase,g_=Et.Bounce,__=Et.Sine,x_=Et.Expo,v_=Et.Circ;var Kh,qi,xs,Cl,Cn,y_,Qh,w_=function(){return typeof window<"u"},Ji={},An=180/Math.PI,vs=Math.PI/180,_s=Math.atan2,jh=1e8,au=/([A-Z])/g,M_=/(left|right|width|margin|padding|x)/i,b_=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ou=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},S_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},T_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A_=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},lu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},E_=function(t,e,i){return t.style[e]=i},C_=function(t,e,i){return t.style.setProperty(e,i)},P_=function(t,e,i){return t._gsap[e]=i},R_=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},L_=function(t,e,i,n,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},D_=function(t,e,i,n,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},ae="transform",Zi=ae+"Origin",hu,Tl=function(t,e){var i=qi.createElementNS?qi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qi.createElement(t);return i.style?i:qi.createElement(t)},Ri=function o(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(au,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&o(t,ys(e)||e,1)||""},tu="O,Moz,ms,Ms,Webkit".split(","),ys=function(t,e,i){var n=e||Cn,s=n.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(tu[a]+t in s););return a<0?null:(a===3?"ms":a>=0?tu[a]:"")+t},Al=function(){w_()&&window.document&&(Kh=window,qi=Kh.document,xs=qi.documentElement,Cn=Tl("div")||{style:{}},y_=Tl("div"),ae=ys(ae),Zi=ae+"Origin",Cn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hu=!!ys("perspective"),Cl=1)},bl=function o(t){var e=Tl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,a;if(xs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),xs.removeChild(e),this.style.cssText=s,a},eu=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},uu=function(t){var e;try{e=t.getBBox()}catch{e=bl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===bl||(e=bl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+eu(t,["x","cx","x1"])||0,y:+eu(t,["y","cy","y1"])||0,width:0,height:0}:e},fu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&uu(t))},$s=function(t,e){if(e){var i=t.style;e in Ji&&e!==Zi&&(e=ae),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(au,"-$1").toLowerCase())):i.removeAttribute(e)}},Yi=function(t,e,i,n,s,a){var r=new Me(t._pt,e,i,0,1,a?cu:lu);return t._pt=r,r.b=n,r.e=s,t._props.push(i),r},iu={deg:1,rad:1,turn:1},$i=function o(t,e,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",r=Cn.style,c=M_.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),f=100,u=n==="px",m=n==="%",g,d,p,_;return n===a||!s||iu[n]||iu[a]?s:(a!=="px"&&!u&&(s=o(t,e,i,"px")),_=t.getCTM&&fu(t),(m||a==="%")&&(Ji[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[c?"width":"height"]:t[h],Wt(m?s/g*f:s/100*g)):(r[c?"width":"height"]=f+(u?a:n),d=~e.indexOf("adius")||n==="em"&&t.appendChild&&!l?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===qi||!d.appendChild)&&(d=qi.body),p=d._gsap,p&&m&&p.width&&c&&p.time===Pe.time?Wt(s/p.width*f):((m||a==="%")&&(r.position=Ri(t,"position")),d===t&&(r.position="static"),d.appendChild(Cn),g=Cn[h],d.removeChild(Cn),r.position="absolute",c&&m&&(p=Gi(d),p.time=Pe.time,p.width=d[h]),Wt(u?g*s/f:g&&s?f/g*s:0))))},En=function(t,e,i,n){var s;return Cl||Al(),e in Xi&&e!=="transform"&&(e=Xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ji[e]&&e!=="transform"?(s=Qs(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fa(Ri(t,Zi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=ua[e]&&ua[e](t,e,i)||Ri(t,e)||fl(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?$i(t,e,s,i)+i:s},I_=function(t,e,i,n){if(!i||i==="none"){var s=ys(e,t,1),a=s&&Ri(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=Ri(t,"borderTopColor"))}var r=new Me(this._pt,t.style,e,0,1,yl),c=0,l=0,h,f,u,m,g,d,p,_,v,T,y,M;if(r.b=i,r.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=Ri(t,e)||n,t.style[e]=i),h=[i,n],pl(h),i=h[0],n=h[1],u=i.match(wn)||[],M=n.match(wn)||[],M.length){for(;f=wn.exec(n);)p=f[0],v=n.substring(c,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(d=u[l++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=Mn(m,p)+y),_=parseFloat(p),T=p.substr((_+"").length),c=wn.lastIndex-T.length,T||(T=T||Le.units[e]||y,c===n.length&&(n+=T,r.e+=T)),y!==T&&(m=$i(t,e,d,T)||0),r._pt={_next:r._pt,p:v||l===1?v:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});r.c=c<n.length?n.substring(c,n.length):""}else r.r=e==="display"&&n==="none"?cu:lu;return ol.test(n)&&(r.e=0),this._pt=r,r},nu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},F_=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=nu[i]||i,e[1]=nu[n]||n,e.join(" ")},z_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,a=i._gsap,r,c,l;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)r=s[l],Ji[r]&&(c=1,r=r==="transformOrigin"?Zi:ae),$s(i,r);c&&($s(i,ae),a&&(a.svg&&i.removeAttribute("transform"),Qs(i,1),a.uncache=1))}},ua={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var a=t._pt=new Me(t._pt,e,i,0,0,z_);return a.u=n,a.pr=-10,a.tween=s,t._props.push(i),1}}},Ks=[1,0,0,1,0,0],du={},pu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},su=function(t){var e=Ri(t,ae);return pu(e)?Ks:e.substr(7).match(al).map(Wt)},Pl=function(t,e){var i=t._gsap||Gi(t),n=t.style,s=su(t),a,r,c,l;return i.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ks:s):(s===Ks&&!t.offsetParent&&t!==xs&&!i.svg&&(c=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,r=t.nextSibling,xs.appendChild(t)),s=su(t),c?n.display=c:$s(t,"display"),l&&(r?a.insertBefore(t,r):a?a.appendChild(t):xs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},El=function(t,e,i,n,s,a){var r=t._gsap,c=s||Pl(t,!0),l=r.xOrigin||0,h=r.yOrigin||0,f=r.xOffset||0,u=r.yOffset||0,m=c[0],g=c[1],d=c[2],p=c[3],_=c[4],v=c[5],T=e.split(" "),y=parseFloat(T[0])||0,M=parseFloat(T[1])||0,A,C,x,b;i?c!==Ks&&(C=m*p-g*d)&&(x=y*(p/C)+M*(-d/C)+(d*v-p*_)/C,b=y*(-g/C)+M*(m/C)-(m*v-g*_)/C,y=x,M=b):(A=uu(t),y=A.x+(~T[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(T[1]||T[0]).indexOf("%")?M/100*A.height:M)),n||n!==!1&&r.smooth?(_=y-l,v=M-h,r.xOffset=f+(_*m+v*d)-_,r.yOffset=u+(_*g+v*p)-v):r.xOffset=r.yOffset=0,r.xOrigin=y,r.yOrigin=M,r.smooth=!!n,r.origin=e,r.originIsAbsolute=!!i,t.style[Zi]="0px 0px",a&&(Yi(a,r,"xOrigin",l,y),Yi(a,r,"yOrigin",h,M),Yi(a,r,"xOffset",f,r.xOffset),Yi(a,r,"yOffset",u,r.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},Qs=function(t,e){var i=t._gsap||new ml(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,a="px",r="deg",c=Ri(t,Zi)||"0",l,h,f,u,m,g,d,p,_,v,T,y,M,A,C,x,b,I,R,J,Z,L,k,z,H,G,N,V,K,Y,j,rt;return l=h=f=g=d=p=_=v=T=0,u=m=1,i.svg=!!(t.getCTM&&fu(t)),A=Pl(t,i.svg),i.svg&&(z=(!i.uncache||c==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),El(t,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,A)),y=i.xOrigin||0,M=i.yOrigin||0,A!==Ks&&(I=A[0],R=A[1],J=A[2],Z=A[3],l=L=A[4],h=k=A[5],A.length===6?(u=Math.sqrt(I*I+R*R),m=Math.sqrt(Z*Z+J*J),g=I||R?_s(R,I)*An:0,_=J||Z?_s(J,Z)*An+g:0,_&&(m*=Math.abs(Math.cos(_*vs))),i.svg&&(l-=y-(y*I+M*J),h-=M-(y*R+M*Z))):(rt=A[6],Y=A[7],N=A[8],V=A[9],K=A[10],j=A[11],l=A[12],h=A[13],f=A[14],C=_s(rt,K),d=C*An,C&&(x=Math.cos(-C),b=Math.sin(-C),z=L*x+N*b,H=k*x+V*b,G=rt*x+K*b,N=L*-b+N*x,V=k*-b+V*x,K=rt*-b+K*x,j=Y*-b+j*x,L=z,k=H,rt=G),C=_s(-J,K),p=C*An,C&&(x=Math.cos(-C),b=Math.sin(-C),z=I*x-N*b,H=R*x-V*b,G=J*x-K*b,j=Z*b+j*x,I=z,R=H,J=G),C=_s(R,I),g=C*An,C&&(x=Math.cos(C),b=Math.sin(C),z=I*x+R*b,H=L*x+k*b,R=R*x-I*b,k=k*x-L*b,I=z,L=H),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,p=180-p),u=Wt(Math.sqrt(I*I+R*R+J*J)),m=Wt(Math.sqrt(k*k+rt*rt)),C=_s(L,k),_=Math.abs(C)>2e-4?C*An:0,T=j?1/(j<0?-j:j):0),i.svg&&(z=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!pu(Ri(t,ae)),z&&t.setAttribute("transform",z))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(u*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),e=e||i.uncache,i.x=l-((i.xPercent=l&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-l)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Wt(u),i.scaleY=Wt(m),i.rotation=Wt(g)+r,i.rotationX=Wt(d)+r,i.rotationY=Wt(p)+r,i.skewX=_+r,i.skewY=v+r,i.transformPerspective=T+a,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(n[Zi]=fa(c)),i.xOffset=i.yOffset=0,i.force3D=Le.force3D,i.renderTransform=i.svg?N_:hu?mu:O_,i.uncache=0,i},fa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Sl=function(t,e,i){var n=re(e);return Wt(parseFloat(e)+parseFloat($i(t,"x",i+"px",n)))+n},O_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mu(t,e)},Sn="0deg",Zs="0px",Tn=") ",mu=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,r=i.y,c=i.z,l=i.rotation,h=i.rotationY,f=i.rotationX,u=i.skewX,m=i.skewY,g=i.scaleX,d=i.scaleY,p=i.transformPerspective,_=i.force3D,v=i.target,T=i.zOrigin,y="",M=_==="auto"&&t&&t!==1||_===!0;if(T&&(f!==Sn||h!==Sn)){var A=parseFloat(h)*vs,C=Math.sin(A),x=Math.cos(A),b;A=parseFloat(f)*vs,b=Math.cos(A),a=Sl(v,a,C*b*-T),r=Sl(v,r,-Math.sin(A)*-T),c=Sl(v,c,x*b*-T+T)}p!==Zs&&(y+="perspective("+p+Tn),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(M||a!==Zs||r!==Zs||c!==Zs)&&(y+=c!==Zs||M?"translate3d("+a+", "+r+", "+c+") ":"translate("+a+", "+r+Tn),l!==Sn&&(y+="rotate("+l+Tn),h!==Sn&&(y+="rotateY("+h+Tn),f!==Sn&&(y+="rotateX("+f+Tn),(u!==Sn||m!==Sn)&&(y+="skew("+u+", "+m+Tn),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Tn),v.style[ae]=y||"translate(0, 0)"},N_=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,r=i.y,c=i.rotation,l=i.skewX,h=i.skewY,f=i.scaleX,u=i.scaleY,m=i.target,g=i.xOrigin,d=i.yOrigin,p=i.xOffset,_=i.yOffset,v=i.forceCSS,T=parseFloat(a),y=parseFloat(r),M,A,C,x,b;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=vs,l*=vs,M=Math.cos(c)*f,A=Math.sin(c)*f,C=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(h*=vs,b=Math.tan(l-h),b=Math.sqrt(1+b*b),C*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,A*=b)),M=Wt(M),A=Wt(A),C=Wt(C),x=Wt(x)):(M=f,x=u,A=C=0),(T&&!~(a+"").indexOf("px")||y&&!~(r+"").indexOf("px"))&&(T=$i(m,"x",a,"px"),y=$i(m,"y",r,"px")),(g||d||p||_)&&(T=Wt(T+g-(g*M+d*C)+p),y=Wt(y+d-(g*A+d*x)+_)),(n||s)&&(b=m.getBBox(),T=Wt(T+n/100*b.width),y=Wt(y+s/100*b.height)),b="matrix("+M+","+A+","+C+","+x+","+T+","+y+")",m.setAttribute("transform",b),v&&(m.style[ae]=b)},B_=function(t,e,i,n,s){var a=360,r=jt(s),c=parseFloat(s)*(r&&~s.indexOf("rad")?An:1),l=c-n,h=n+l+"deg",f,u;return r&&(f=s.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),f==="cw"&&l<0?l=(l+a*jh)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*jh)%a-~~(l/a)*a)),t._pt=u=new Me(t._pt,e,i,n,l,S_),u.e=h,u.u="deg",t._props.push(i),u},ru=function(t,e){for(var i in e)t[i]=e[i];return t},k_=function(t,e,i){var n=ru({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,r,c,l,h,f,u,m,g;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[ae]=e,r=Qs(i,1),$s(i,ae),i.setAttribute("transform",l)):(l=getComputedStyle(i)[ae],a[ae]=e,r=Qs(i,1),a[ae]=l);for(c in Ji)l=n[c],h=r[c],l!==h&&s.indexOf(c)<0&&(m=re(l),g=re(h),f=m!==g?$i(i,c,l,g):parseFloat(l),u=parseFloat(h),t._pt=new Me(t._pt,r,c,f,u-f,ou),t._pt.u=g||0,t._props.push(c));ru(r,n)};we("padding,margin,Width,Radius",function(o,t){var e="Top",i="Right",n="Bottom",s="Left",a=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(r){return t<2?o+r:"border"+r+o});ua[t>1?"border"+o:o]=function(r,c,l,h,f){var u,m;if(arguments.length<4)return u=a.map(function(g){return En(r,g,l)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(h+"").split(" "),m={},a.forEach(function(g,d){return m[g]=u[d]=u[d]||u[(d-1)/2|0]}),r.init(c,m,f)}});var Rl={name:"css",register:Al,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var a=this._props,r=t.style,c=i.vars.startAt,l,h,f,u,m,g,d,p,_,v,T,y,M,A,C;Cl||Al();for(d in e)if(d!=="autoRound"&&(h=e[d],!(Ce[d]&&_l(d,e,i,n,t,s)))){if(m=typeof h,g=ua[d],m==="function"&&(h=h.call(i,n,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=gs(h)),g)g(this,t,d,h,i)&&(C=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(d)+"").trim(),h+="",Ei.lastIndex=0,Ei.test(l)||(p=re(l),_=re(h)),_?p!==_&&(l=$i(t,d,l,_)+_):p&&(h+=p),this.add(r,"setProperty",l,h,n,s,0,0,d),a.push(d);else if(m!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(i,n,t,s):c[d],jt(l)&&~l.indexOf("random(")&&(l=gs(l)),re(l+"")||(l+=Le.units[d]||re(En(t,d))||""),(l+"").charAt(1)==="="&&(l=En(t,d))):l=En(t,d),u=parseFloat(l),v=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),d in Xi&&(d==="autoAlpha"&&(u===1&&En(t,"visibility")==="hidden"&&f&&(u=0),Yi(this,r,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Xi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),T=d in Ji,T){if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||Qs(t,e.parseTransform),A=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new Me(this._pt,r,ae,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Me(this._pt,M,"scaleY",M.scaleY,(v?Mn(M.scaleY,v+f):f)-M.scaleY||0),a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){h=F_(h),M.svg?El(t,h,0,A,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==M.zOrigin&&Yi(this,M,"zOrigin",M.zOrigin,_),Yi(this,r,d,fa(l),fa(h)));continue}else if(d==="svgOrigin"){El(t,h,1,A,0,this);continue}else if(d in du){B_(this,M,d,u,v?Mn(u,v+h):h);continue}else if(d==="smoothOrigin"){Yi(this,M,"smooth",M.smooth,h);continue}else if(d==="force3D"){M[d]=h;continue}else if(d==="transform"){k_(this,h,t);continue}}else d in r||(d=ys(d)||d);if(T||(f||f===0)&&(u||u===0)&&!b_.test(h)&&d in r)p=(l+"").substr((u+"").length),f||(f=0),_=re(h)||(d in Le.units?Le.units[d]:p),p!==_&&(u=$i(t,d,l,_)),this._pt=new Me(this._pt,T?M:r,d,u,(v?Mn(u,v+f):f)-u,!T&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?A_:ou),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=T_);else if(d in r)I_.call(this,t,d,l,v?v+h:h);else if(d in t)this.add(t,d,l||t[d],v?v+h:h,n,s);else{oa(d,h);continue}a.push(d)}}C&&Ml(this)},get:En,aliases:Xi,getSetter:function(t,e,i){var n=Xi[e];return n&&n.indexOf(",")<0&&(e=n),e in Ji&&e!==Zi&&(t._gsap.x||En(t,"x"))?i&&Qh===i?e==="scale"?R_:P_:(Qh=i||{})&&(e==="scale"?L_:D_):t.style&&!aa(t.style[e])?E_:~e.indexOf("-")?C_:ha(t,e)},core:{_removeProperty:$s,_getMatrix:Pl}};Ne.utils.checkPrefix=ys;(function(o,t,e,i){var n=we(o+","+t+","+e,function(s){Ji[s]=1});we(t,function(s){Le.units[s]="deg",du[s]=1}),Xi[n[13]]=o+","+t,we(i,function(s){var a=s.split(":");Xi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");we("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Le.units[o]="px"});Ne.registerPlugin(Rl);var De=Ne.registerPlugin(Rl)||Ne,Px=De.core.Tween;U_();async function U_(){let o,t,e=!0,i=document.querySelectorAll("a"),n=document.getElementById("loading");class s{constructor(){if(setTimeout(()=>{this.header_height=document.getElementById("header_nav").clientHeight}),this.canvas_element=document.getElementById("webgl"),document.getElementById("company_section")){let u=document.getElementById("company_section").clientHeight,m=document.getElementById("hidden_cover");m.style.height=u+m.clientHeight+"px"}}callFunctions(){this.setMainHeight(),this.blackOut(),this.ResponseToEvent()}setMainHeight(){setTimeout(()=>{this.header_height=document.getElementById("header_nav").clientHeight,this.canvas_element&&(this.canvas_element.style.marginTop=this.header_height+"px")})}blackOut(){let u=document.getElementById("hidden_cover");if(document.getElementById("key-visual")){let d=document.getElementById("key-visual").getBoundingClientRect().bottom+window.pageYOffset-window.innerHeight*.88,p=document.getElementById("company_section").getBoundingClientRect().bottom+window.pageYOffset;window.scrollY<d?(u.style.opacity=0,u.style.visibility="invisible"):window.scrollY<=p&&window.scrollY>d?(u.style.opacity=.5,u.style.visibility="visible"):(u.style.opacity=1,u.style.visibility="visible")}}ResponseToEvent(){window.addEventListener("load",this.blackOut.bind(this)),window.addEventListener("scroll",this.blackOut.bind(this)),window.addEventListener("resize",()=>{this.setMainHeight(),this.blackOut()})}}class a{constructor(){this.scene=new Nr,this.canvas=document.createElement("canvas"),this.resized_width=window.innerWidth,this.resized_height=window.innerHeight,this.camera=new ge(75,this.width/this.height,.1,1500),this.camera.position.x=0,this.camera.position.y=30,this.clock=new rs,this.fadein_times=4,this.interval_time=500,this.show_guide_time=this.fadein_times*this.interval_time+3500,this.moving_flag=!1,this.detection=!1,this.particle_pos=new ht,this.time=0,this.move=0,this.raycaster=new Wr,this.mouse=new ht,this.point=new ht}callFunctions(){e?this.img.addEventListener("load",()=>{this.init(),this.mouseInteraction(),this.animate(),this.showGuide(),this.setSize(),this.resize()}):(this.init(),this.mouseInteraction(),this.animate(),this.showGuide(),this.setSize(),this.resize())}setImage(){this.img=new Image,typeof window.ontouchstart>"u"?this.img.src="../img/logo_color.png":this.img.src="../img/logo_color_small.png",this.img.crossOrigin="anonymous"}init(){this.setRendere(),this.addObjects(),this.removeLoadingEnd(),this.fadeIn(this.fadein_times-1,this.interval_time),window.setTimeout(function(){this.moving_flag=!this.moving_flag}.bind(this),this.fadein_times*this.interval_time),window.setTimeout(function(){De.to(this.material.uniforms.paramAlpha,{value:.5,duration:1,delay:1})}.bind(this),this.fadein_times*this.interval_time),this.gather2D(),window.setTimeout(()=>{this.lightOn()},this.fadein_times*this.interval_time+1e3),window.setTimeout(()=>{let u=null;if(document.getElementById("company_section")){let m=document.getElementById("company_section").getBoundingClientRect().bottom+window.pageYOffset;window.scrollY<=m&&u===null&&(u=setInterval(function(){this.autoDiffusion()}.bind(this),1e3)),window.addEventListener("scroll",()=>{window.scrollY>m&&u!==null?(clearInterval(u),u=null):window.scrollY<=m&&u===null&&(u=setInterval(function(){this.autoDiffusion()}.bind(this),1e3))}),window.addEventListener("blur",()=>{u!==null&&(clearInterval(u),u=null)}),window.addEventListener("focus",()=>{window.scrollY<=m&&u===null&&(u=setInterval(function(){this.autoDiffusion()}.bind(this),1e3))})}},this.show_guide_time+500)}setRendere(){this.renderer=new ko,this.renderer.setSize(this.width,this.height-this.header_height),this.renderer.physicallyCorrectLights=!0,this.renderScene=new Kr(this.scene,this.camera),this.bloomPass=new Si(new ht(window.innerWidth,window.innerHeight),1.5,.4,.85),this.bloomPass.threshold=0,this.bloomPass.strength=0,this.bloomPass.radius=0,this.composer=new $r(this.renderer),this.composer.addPass(this.renderScene),this.composer.addPass(this.bloomPass),this.wrapper=document.querySelector("#webgl"),this.wrapper&&this.wrapper.appendChild(this.renderer.domElement)}addObjects(){this.geometry=new he,this.pixcel_img=this.ImagePixel(this.img,this.img.width,this.img.height,2);let u=new Gt(new Float32Array(this.pixcel_img.position),3),m=new Gt(new Float32Array(this.pixcel_img.color),3),g=new Gt(new Float32Array(this.pixcel_img.alpha),1),d=[];this.vertces=this.pixcel_img.position.length/3;for(let R=0;R<this.vertces;R++)d.push((Math.random()-1)*2,(Math.random()-1)*2);let p=new Gt(new Float32Array(d),2),_=[];for(let R=0;R<this.vertces;R++)_.push(1);let v=new Gt(new Float32Array(_),1),T=[];for(let R=0;R<this.vertces;R++)T.push(c(-1e3,1e3));let y=new Gt(new Float32Array(T),1),M=[];for(let R=0;R<this.vertces;R++)M.push(c(.4,1));let A=new Gt(new Float32Array(M),1),C=[];for(let R=0;R<this.vertces;R++)C.push(c(.4,1));let x=new Gt(new Float32Array(C),1),b=[];for(let R=0;R<this.vertces;R++)b.push(Math.random()>.5?1:-1);let I=new Gt(new Float32Array(b),1);this.geometry.setAttribute("position",u),this.geometry.setAttribute("color",m),this.geometry.setAttribute("alpha",g),this.geometry.setAttribute("rand",p),this.geometry.setAttribute("flag",v),this.geometry.setAttribute("aSpeed",y),this.geometry.setAttribute("aOffset",A),this.geometry.setAttribute("aPress",x),this.geometry.setAttribute("aDirection",I),this.material=new Fs({vertexShader:document.querySelector("#js-vertex-shader").textContent,fragmentShader:document.querySelector("#js-fragment-shader").textContent,uniforms:{u_ratio:{type:"f",value:0},u_time:{type:"f",value:0},u_value:{type:"f",value:0},pointTexture:{value:new Gr().load("../img/triangle.png")},mouse:{type:"v2",value:new ht(0,0)},mousePressed:{type:"f",value:0},move:{type:"f",value:0},time:{type:"f",value:0},mousePressed:{type:"f",value:0},diffusionScale:{type:"f",value:0},circleScale:{type:"f",value:0},cameraZ:{type:"f",value:0},paramAlpha:{type:"f",value:0}},transparent:!0,depthTest:!1}),this.mesh=new Ur(this.geometry,this.material),this.scene.add(this.mesh)}ImagePixel(u,m,g,d){this.ctx=this.canvas.getContext("2d"),this.canvas_width=m,this.canvas_height=g,this.canvas.width=this.canvas_width,this.canvas.height=this.canvas_height,this.ctx.drawImage(u,0,0),this.data=this.ctx.getImageData(0,0,this.canvas_width,this.canvas_height).data,this.position=[],this.color=[],this.alpha=[];for(let p=0;p<this.canvas_height;p+=d)for(let _=0;_<this.canvas_width;_+=d)this.index=(p*this.canvas_width+_)*4,this.pX=_-this.canvas_width/2,this.pY=-(p-this.canvas_height/2),this.pZ=0,this.r=this.data[this.index+0]/255,this.g=this.data[this.index+1]/255,this.b=this.data[this.index+2]/255,this.a=this.data[this.index+3]/255,this.a>.5&&(this.position.push(this.pX,this.pY,this.pZ),this.color.push(this.r,this.g,this.b),this.alpha.push(this.a));return{position:this.position,color:this.color,alpha:this.alpha}}removeLoadingEnd(){e&&(n.style.opacity=0,n.style.visibility="invisible",e=!e)}fadeIn(u,m){let g=this.mesh.geometry.attributes.alpha.array,d=this.mesh.geometry.attributes.flag.array;for(let p=0;p<this.vertces;p++)g[p]>0&&(g[p]=.5**6);for(let p=0;p<u;p++)for(let _=0;_<this.vertces;_++){let v=_+Math.floor(Math.random()*2)+1;g[v]>0&&(g[v]=.5**(p+7))}for(let p=0;p<this.vertces;p++){let _={x:g[p],y:d[p]};for(let v=0;v<u+1;v++)g[p]===.5**(v+6)&&De.to(_,{x:1,y:1,delay:v*(m/1e3),duration:(m+1e3)/1e3,ease:"Power1.easeOut",onUpdate:()=>{g[p]=_.x,d[p]=_.y}})}}gather2D(){let u=this.mesh.geometry.attributes.position,m=this.mesh.geometry.attributes.position.array;for(let g=0;g<this.vertces;g++){m[3*g]=r(600,0)*l(),m[3*g+1]=r(600,0)*l(),this.particle_pos.x=u.getX(g)*(500/this.camera.position.z)-8,this.particle_pos.y=u.getY(g)*(500/this.camera.position.z)+8;let d={x:u.getX(g),y:u.getY(g)};De.to(d,{x:this.pixcel_img.position[3*g],y:this.pixcel_img.position[3*g+1],duration:3,ease:"Power1.easeOut",onUpdate:()=>{m[3*g]=d.x,m[3*g+1]=d.y}})}}lightOn(){De.fromTo(this.bloomPass,{strength:0,radius:0},{strength:.5,radius:1.5,duration:3})}autoDiffusion(){let u=new ht,m=new ht,g=new ht,d=new ht,p=new ht,_=new ht,v=new D,T=this.mesh.geometry.attributes.flag.array,y=this.mesh.geometry.attributes.position.array;if(location.pathname==="/ja/"|location.pathname==="/en/"){u.x=r(375,0),m.x=-1*r(400,0),u.y=r(410,0),m.y=-1*r(230,0),g.x=[u.x,m.x],g.y=[u.y,m.y],d.x=g.x[Math.floor(Math.random()*g.x.length)],d.y=g.y[Math.floor(Math.random()*g.y.length)],_.x=r(200,5)*l(),_.y=r(200,5)*l();let M=20,A=r(200,50),C=[[Math.random(),Math.random()],[-1*Math.random(),Math.random()],[Math.random(),-1*Math.random()],[-1*Math.random(),-1*Math.random()]],x=C[Math.floor(Math.random()*C.length)],b=A*x[0],I=A*x[1];for(let R=0;R<this.vertces;R++){let J=this.mesh.geometry.attributes.position,Z=J.getX(R)*(500/this.camera.position.z)-8,L=J.getY(R)*(500/this.camera.position.z)+8,k=Math.sqrt(Math.pow(Z-d.x,2)+Math.pow(L-d.y,2)),z=[[1,0],[-1,0],[0,1],[0,-1]],H=z[Math.floor(Math.random()*z.length)];p.x=H[0],p.y=H[1];let G=r(110,80)*.001;if(T[R]===1&&k<M){T[R]=0;let N=r(300,280)*r(1500,1e3);v.x=y[3*R]+b+_.x/(G*N),v.y=y[3*R+1]+I+_.y/(G*N),v.z=y[3*R+2]+c(200,0);let V={posX:J.getX(R),posY:J.getY(R),posZ:J.getZ(R),moveFlag:T[R]},K=De.timeline();if(K.to(V,{posX:v.x,posY:v.y,posZ:v.z,moveFlag:0,duration:G*N/1e3,repeat:1,yoyo:!0,ease:"Power1.easeOut",onUpdate:()=>{y[3*R]=V.posX,y[3*R+1]=V.posY,y[3*R+2]=V.posZ,T[R]=V.moveFlag}}),window.addEventListener("blur",()=>{K.pause()}),window.addEventListener("focus",()=>{K.resume()}),this.moving_flag&this.mesh.position.z+2e3/(G*500)<=this.camera.position.z*.3){let Y=De.timeline();Y.to(this.mesh.rotation,{x:v.y/1e3*-1,y:v.x/1e3*-1,duration:10,repeat:1,delay:2,yoyo:!0}),Y.to(this.mesh.position,{x:v.x/(G*1e3),y:v.y*-1/(G*1e3),z:this.mesh.position.z+2e3/(G*500),duration:10,repeat:1,delay:2,yoyo:!0},"<"),Y.to(this.bloomPass,{strength:2,radius:.5,duration:10,repeat:1,delay:2,yoyo:!0,onComplete:()=>{setTimeout(()=>{this.moving_flag=!this.moving_flag},c(1e3,3e3))}},"<"),window.addEventListener("blur",()=>{Y.pause()}),window.addEventListener("focus",()=>{Y.resume()}),this.moving_flag=!this.moving_flag}}}}else return}mouseInteraction(){let u=new _e(new pn(2e3,2e3),new bi),m=document.getElementById("hidden_cover");typeof window.ontouchstart>"u"?(window.addEventListener("mousemove",g=>{this.mouse.x=g.clientX/window.innerWidth*2-1,this.mouse.y=-(g.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let d=this.raycaster.intersectObjects([u]);this.point.x=d[0].point.x,this.point.y=d[0].point.y,document.getElementById("hidden_cover")&&(document.getElementById("hidden_cover").style.opacity==0?De.to(this.material.uniforms.mousePressed,{duration:.3,value:1,ease:"ease.out(1, 0.3)"}):De.to(this.material.uniforms.mousePressed,{duration:.3,value:0,ease:"ease.out(1, 0.3)"}))},!1),window.addEventListener("blur",()=>{De.to(this.material.uniforms.mousePressed,{duration:.3,value:0,ease:"ease.out(1, 0.3)"})})):(window.addEventListener("touchstart",g=>{this.mouse.x=g.changedTouches[0].clientX/this.resized_width*2-1,this.mouse.y=-(g.changedTouches[0].clientY/this.resized_height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let d=this.raycaster.intersectObjects([u]);this.point.x=d[0].point.x,this.point.y=d[0].point.y,m.style.opacity==0&&De.to(this.material.uniforms.mousePressed,{duration:.3,value:1,ease:"ease.out(1, 0.3)"})}),window.addEventListener("touchend",g=>{De.to(this.material.uniforms.mousePressed,{duration:.3,value:0,ease:"ease.out(1, 0.3)"})}),window.addEventListener("touchmove",g=>{this.mouse.x=g.changedTouches[0].clientX/this.resized_width*2-1,this.mouse.y=-(g.changedTouches[0].clientY/this.resized_height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let d=this.raycaster.intersectObjects([u]);this.point.x=d[0].point.x,this.point.y=d[0].point.y},!1))}animate(){this.time++,this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.render(),this.getDeltaTime=this.clock.getDelta(),document.querySelector("#webgl")&&requestAnimationFrame(this.animate.bind(this)),window.setTimeout(()=>{this.mesh.material.uniforms.u_time.value+=2*this.getDeltaTime,this.mesh.material.uniforms.mouse.value=this.point,this.mesh.material.uniforms.time.value=this.time,this.mesh.material.uniforms.move.value=this.move,typeof window.ontouchstart>"u"?(this.mesh.material.uniforms.diffusionScale.value=180,this.mesh.material.uniforms.circleScale.value=50):(this.mesh.material.uniforms.diffusionScale.value=80,this.mesh.material.uniforms.circleScale.value=25)},this.fadein_times*this.interval_time),this.mesh.geometry.attributes.alpha.needsUpdate=!0,this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.flag.needsUpdate=!0}showGuide(){this.nav_block=document.getElementById("nav_block"),this.circle=document.getElementById("circle"),this.animation_nav=De.timeline(),this.animation_nav.to(this.circle,{duration:.5,opacity:.7,y:5}).to(this.circle,{duration:.5,x:anime_nav.clientWidth*.5}).to(this.circle,{duration:.4,opacity:0,x:anime_nav.clientWidth*.8,y:-5}),this.animation_nav.repeat(-1),window.addEventListener("blur",()=>{this.animation_nav.pause()}),window.addEventListener("focus",()=>{this.animation_nav.resume()}),window.setTimeout(()=>{this.nav_block.style.opacity=1,this.nav_block.style.visibility="visible"},this.fadein_times*this.interval_time+5e3)}setSize(){this.width=window.innerWidth,this.height=window.innerHeight,this.header_height=document.getElementById("header_nav").clientHeight,document.getElementById("top_main")&&(this.main_height=document.getElementById("top_main").clientHeight,document.querySelector("footer").style.marginTop=this.main_height+"px"),this.width_break_point=700,this.height_break_point=864,this.width_break_point_sp=1440,this.camera.aspect=this.width/(this.height-this.header_height),this.camera.updateProjectionMatrix(),typeof window.ontouchstart>"u"?this.width>=this.width_break_point?(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=400,this.height<=this.height_break_point?this.mesh.material.uniforms.u_value.value=(this.width+this.height)/1e3-(1200+this.height)/this.width:this.mesh.material.uniforms.u_value.value=(this.width+this.height)/600-(1200+this.height)/this.width):(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.height/this.width*400,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/1800-(1200+this.height)/this.width):this.width>=this.width_break_point_sp?this.width<this.height?(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.height/this.width*230,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/180-(1200+this.height)/this.width):this.this.camera.aspect>1.85?(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.width/this.height*120,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/200-(2800+this.height)/this.width):(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.width/this.height*170,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/180-(2800+this.height)/this.width):this.width<this.height?(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.height/this.width*200,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/180-(1600+this.height)/this.width,nav_block.style.bottom=this.height*.15+"px"):this.camera.aspect>1.8?(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.width/this.height*120,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/200-(3400+this.height)/this.width,nav_block.style.display="none"):(this.camera.position.z=this.mesh.material.uniforms.cameraZ.value=this.width/this.height*170,this.mesh.material.uniforms.u_value.value=(this.width+this.height)/200-(2800+this.height)/this.width,nav_block.style.bottom=this.height*.15+"px"),this.renderer.setSize(this.width,this.height-this.header_height),this.resized_width=window.innerWidth,this.resized_height=window.innerHeight}resize(){this.currentWidth=window.innerWidth,this.currentHeight=window.innerHeight,window.addEventListener("resize",function(){if(this.currentWidth==window.innerWidth&typeof window.ontouchstart<"u"){this.currentHeight<window.innerHeight?this.nav_block.style.bottom=this.height*.15+80+"px":this.nav_block.style.bottom=this.height*.15+"px";return}this.currentWidth=window.innerWidth,this.setSize()}.bind(this))}removeMesh(){i.forEach(u=>{u.addEventListener("click",()=>{this.mesh&&(this.scene.remove(this.mesh),this.geometry.dispose(),this.material.dispose(),this.renderer.dispose(),this.composer.removePass())})})}}await h();function r(f,u){return Math.floor(Math.random()*f+1-u)+u}function c(f,u){return f+(u-f)*Math.random()}function l(){let f=[1,-1];return f[Math.floor(Math.random()*f.length)]}function h(){document.querySelector("#webgl")?(o=new s,t=new a,t.setImage(),n.style.opacity=1,e?(o.callFunctions(),t.callFunctions()):window.setTimeout(()=>{o.callFunctions(),n.style.opacity=0,n.style.visibility="invisible",t.callFunctions()},1e3)):(o=null,t=null)}}})();
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
