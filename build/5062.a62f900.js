"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5062],{39694:(e,t,s)=>{s.d(t,{IO:()=>i,Lt:()=>r,ot:()=>u});const r=16895,i=33206,a=new TextEncoder,n=new TextDecoder("utf-8"),o={0:!1,1:!0,2:!0,64:!0,65:!0,66:!0,129:!0,193:!0,514:!0,577:!0,578:!0,705:!0,706:!0,1024:!0,1025:!0,1026:!0,1089:!0,1090:!0,1153:!0,1154:!0,1217:!0,1218:!0,4096:!0,4098:!0};class l{constructor(e){this.fs=e}open(e){const t=this.fs.realPath(e.node);this.fs.FS.isFile(e.node.mode)&&(e.file=this.fs.API.get(t))}close(e){if(!this.fs.FS.isFile(e.node.mode)||!e.file)return;const t=this.fs.realPath(e.node),s=e.flags;let r="string"==typeof s?parseInt(s,10):s;r&=8191;let i=!0;r in o&&(i=o[r]),i&&(this.fs.API.put(t,e.file),e.file=void 0)}read(e,t,s,r,i){var a;if(r<=0||void 0===e.file)return 0;const n=Math.min((null!==(a=e.file.data.length)&&void 0!==a?a:0)-i,r);try{t.set(e.file.data.subarray(i,i+n),s)}catch(e){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}return n}write(e,t,s,r,i){var a,n;if(r<=0||void 0===e.file)return 0;e.node.timestamp=Date.now();try{if(i+r>(null!==(n=null===(a=e.file)||void 0===a?void 0:a.data.length)&&void 0!==n?n:0)){const t=e.file.data?e.file.data:new Uint8Array;e.file.data=new Uint8Array(i+r),e.file.data.set(t)}return e.file.data.set(t.subarray(s,s+r),i),r}catch(e){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}llseek(e,t,s){let r=t;if(1===s)r+=e.position;else if(2===s&&this.fs.FS.isFile(e.node.mode)){if(void 0===e.file)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);r+=e.file.data.length}if(r<0)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EINVAL);return r}}class h{constructor(e){this.fs=e}getattr(e){return this.fs.API.getattr(this.fs.realPath(e))}setattr(e,t){}lookup(e,t){const s=this.fs.PATH.join2(this.fs.realPath(e),t),r=this.fs.API.lookup(s);if(!r.ok)throw this.fs.FS.genericErrors[this.fs.ERRNO_CODES.ENOENT];return this.fs.createNode(e,t,r.mode)}mknod(e,t,s,r){const i=this.fs.PATH.join2(this.fs.realPath(e),t);return this.fs.API.mknod(i,s),this.fs.createNode(e,t,s,r)}rename(e,t,s){this.fs.API.rename(e.parent?this.fs.PATH.join2(this.fs.realPath(e.parent),e.name):e.name,this.fs.PATH.join2(this.fs.realPath(t),s)),e.name=s,e.parent=t}unlink(e,t){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(e),t))}rmdir(e,t){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(e),t))}readdir(e){return this.fs.API.readdir(this.fs.realPath(e))}symlink(e,t,s){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}readlink(e){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}class p{constructor(e,t,s,r,i){this._baseUrl=e,this._driveName=t,this._mountpoint=s,this.FS=r,this.ERRNO_CODES=i}request(e,t,s=null){const r=new XMLHttpRequest;r.open(e,encodeURI(`${this.endpoint}${t}`),!1);try{null===s?r.send():r.send(s)}catch(e){console.error(e)}if(r.status>=400)throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);return JSON.parse(r.responseText)}lookup(e){return this.request("GET",`${this.normalizePath(e)}?m=lookup`)}getmode(e){return Number.parseInt(this.request("GET",`${this.normalizePath(e)}?m=getmode`))}mknod(e,t){return this.request("GET",`${this.normalizePath(e)}?m=mknod&args=${t}`)}rename(e,t){return this.request("GET",`${this.normalizePath(e)}?m=rename&args=${this.normalizePath(t)}`)}readdir(e){const t=this.request("GET",`${this.normalizePath(e)}?m=readdir`);return t.push("."),t.push(".."),t}rmdir(e){return this.request("GET",`${this.normalizePath(e)}?m=rmdir`)}get(e){const t=this.request("GET",`${this.normalizePath(e)}?m=get`),s=t.content,r=t.format;switch(r){case"json":case"text":return{data:a.encode(s),format:r};case"base64":{const e=atob(s),t=e.length,i=new Uint8Array(t);for(let s=0;s<t;s++)i[s]=e.charCodeAt(s);return{data:i,format:r}}default:throw new this.FS.ErrnoError(this.ERRNO_CODES.ENOENT)}}put(e,t){switch(t.format){case"json":case"text":return this.request("PUT",`${this.normalizePath(e)}?m=put&args=${t.format}`,n.decode(t.data));case"base64":{let s="";for(let e=0;e<t.data.byteLength;e++)s+=String.fromCharCode(t.data[e]);return this.request("PUT",`${this.normalizePath(e)}?m=put&args=${t.format}`,btoa(s))}}}getattr(e){const t=this.request("GET",`${this.normalizePath(e)}?m=getattr`);return t.atime=new Date(t.atime),t.mtime=new Date(t.mtime),t.ctime=new Date(t.ctime),t}normalizePath(e){return e.startsWith(this._mountpoint)&&(e=e.slice(this._mountpoint.length)),this._driveName&&(e=`${this._driveName}:${e}`),e}get endpoint(){return`${this._baseUrl}api/drive/`}}class u{constructor(e){this.FS=e.FS,this.PATH=e.PATH,this.ERRNO_CODES=e.ERRNO_CODES,this.API=new p(e.baseUrl,e.driveName,e.mountpoint,this.FS,this.ERRNO_CODES),this.driveName=e.driveName,this.node_ops=new h(this),this.stream_ops=new l(this)}mount(e){return this.createNode(null,e.mountpoint,511|r,0)}createNode(e,t,s,r){const i=this.FS;if(!i.isDir(s)&&!i.isFile(s))throw new i.ErrnoError(this.ERRNO_CODES.EINVAL);const a=i.createNode(e,t,s,r);return a.node_ops=this.node_ops,a.stream_ops=this.stream_ops,a}getMode(e){return this.API.getmode(e)}realPath(e){const t=[];let s=e;for(t.push(s.name);s.parent!==s;)s=s.parent,t.push(s.name);return t.reverse(),this.PATH.join.apply(null,t)}}},75062:(e,t,s)=>{s.r(t),s.d(t,{PIPLITE_WHEEL:()=>d,PyoliteKernel:()=>C,PyoliteRemoteKernel:()=>M,allJSONUrl:()=>i,ipykernelWheelUrl:()=>n,pipliteWheelUrl:()=>l,pyoliteWheelUrl:()=>p,widgetsnbextensionWheelUrl:()=>c});var r=s(88422),i=s.t(r),a=s(69278),n=s.t(a),o=s(52332),l=s.t(o),h=s(22974),p=s.t(h),u=s(54282),c=s.t(u);const d="piplite-0.1.0b9-py3-none-any.whl";var m=s(74547),E=s(1005),_=s(90691);const y=Symbol("Comlink.proxy"),f=Symbol("Comlink.endpoint"),R=Symbol("Comlink.releaseProxy"),O=Symbol("Comlink.thrown"),P=e=>"object"==typeof e&&null!==e||"function"==typeof e,N=new Map([["proxy",{canHandle:e=>P(e)&&e[y],serialize(e){const{port1:t,port2:s}=new MessageChannel;return w(e,t),[s,[s]]},deserialize:e=>(e.start(),S(e))}],["throw",{canHandle:e=>P(e)&&O in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function w(e,t=self){t.addEventListener("message",(function s(r){if(!r||!r.data)return;const{id:i,type:a,path:n}=Object.assign({path:[]},r.data),o=(r.data.argumentList||[]).map(I);let l;try{const t=n.slice(0,-1).reduce(((e,t)=>e[t]),e),s=n.reduce(((e,t)=>e[t]),e);switch(a){case"GET":l=s;break;case"SET":t[n.slice(-1)[0]]=I(r.data.value),l=!0;break;case"APPLY":l=s.apply(t,o);break;case"CONSTRUCT":l=function(e){return Object.assign(e,{[y]:!0})}(new s(...o));break;case"ENDPOINT":{const{port1:t,port2:s}=new MessageChannel;w(e,s),l=function(e,t){return A.set(e,t),e}(t,[t])}break;case"RELEASE":l=void 0;break;default:return}}catch(e){l={value:e,[O]:0}}Promise.resolve(l).catch((e=>({value:e,[O]:0}))).then((e=>{const[r,n]=v(e);t.postMessage(Object.assign(Object.assign({},r),{id:i}),n),"RELEASE"===a&&(t.removeEventListener("message",s),T(t))}))})),t.start&&t.start()}function T(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function S(e,t){return b(e,[],t)}function g(e){if(e)throw new Error("Proxy has been released and is not useable")}function b(e,t=[],s=function(){}){let r=!1;const i=new Proxy(s,{get(s,a){if(g(r),a===R)return()=>D(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{T(e),r=!0}));if("then"===a){if(0===t.length)return{then:()=>i};const s=D(e,{type:"GET",path:t.map((e=>e.toString()))}).then(I);return s.then.bind(s)}return b(e,[...t,a])},set(s,i,a){g(r);const[n,o]=v(a);return D(e,{type:"SET",path:[...t,i].map((e=>e.toString())),value:n},o).then(I)},apply(s,i,a){g(r);const n=t[t.length-1];if(n===f)return D(e,{type:"ENDPOINT"}).then(I);if("bind"===n)return b(e,t.slice(0,-1));const[o,l]=k(a);return D(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:o},l).then(I)},construct(s,i){g(r);const[a,n]=k(i);return D(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},n).then(I)}});return i}function k(e){const t=e.map(v);return[t.map((e=>e[0])),(s=t.map((e=>e[1])),Array.prototype.concat.apply([],s))];var s}const A=new WeakMap;function v(e){for(const[t,s]of N)if(s.canHandle(e)){const[r,i]=s.serialize(e);return[{type:"HANDLER",name:t,value:r},i]}return[{type:"RAW",value:e},A.get(e)||[]]}function I(e){switch(e.type){case"HANDLER":return N.get(e.name).deserialize(e.value);case"RAW":return e.value}}function D(e,t,s){return new Promise((r=>{const i=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(s){s.data&&s.data.id&&s.data.id===i&&(e.removeEventListener("message",t),r(s.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:i},t),s)}))}class C extends _.BaseKernel{constructor(e){super(e),this._ready=new m.PromiseDelegate,this._worker=this.initWorker(e),this._worker.onmessage=e=>this._processWorkerMessage(e.data),this._remoteKernel=this.initRemote(e),this._ready.resolve()}initWorker(e){return new Worker(new URL(s.p+s.u(835),s.b),{type:void 0})}initRemote(e){const t=S(this._worker),s=this.initRemoteOptions(e);return t.initialize(s),t}initRemoteOptions(e){const{pyodideUrl:t}=e,s=t.slice(0,t.lastIndexOf("/")+1),r=E.PageConfig.getBaseUrl(),i=E.URLExt.join(r,"build/pypi"),a=[...e.pipliteUrls||[],E.URLExt.join(i,"all.json")];return{baseUrl:r,pyodideUrl:t,indexUrl:s,pipliteWheelUrl:E.URLExt.join(i,d),pipliteUrls:a,disablePyPIFallback:!!e.disablePyPIFallback,location:this.location,mountDrive:e.mountDrive}}dispose(){this.isDisposed||(this._worker.terminate(),this._worker=null,super.dispose())}get ready(){return this._ready.promise}_processWorkerMessage(e){var t,s,r,i,a,n,o;if(e.type)switch(e.type){case"stream":{const s=null!==(t=e.bundle)&&void 0!==t?t:{name:"stdout",text:""};this.stream(s,e.parentHeader);break}case"input_request":{const t=null!==(s=e.content)&&void 0!==s?s:{prompt:"",password:!1};this.inputRequest(t,e.parentHeader);break}case"display_data":{const t=null!==(r=e.bundle)&&void 0!==r?r:{data:{},metadata:{},transient:{}};this.displayData(t,e.parentHeader);break}case"update_display_data":{const t=null!==(i=e.bundle)&&void 0!==i?i:{data:{},metadata:{},transient:{}};this.updateDisplayData(t,e.parentHeader);break}case"clear_output":{const t=null!==(a=e.bundle)&&void 0!==a?a:{wait:!1};this.clearOutput(t,e.parentHeader);break}case"execute_result":{const t=null!==(n=e.bundle)&&void 0!==n?n:{execution_count:0,data:{},metadata:{}};this.publishExecuteResult(t,e.parentHeader);break}case"execute_error":{const t=null!==(o=e.bundle)&&void 0!==o?o:{ename:"",evalue:"",traceback:[]};this.publishExecuteError(t,e.parentHeader);break}case"comm_msg":case"comm_open":case"comm_close":this.handleComm(e.type,e.content,e.metadata,e.buffers,e.parentHeader)}}async kernelInfoRequest(){return{implementation:"pyodide",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"python",version:3},file_extension:".py",mimetype:"text/x-python",name:"python",nbconvert_exporter:"python",pygments_lexer:"ipython3",version:"3.8"},protocol_version:"5.3",status:"ok",banner:"Pyolite: A WebAssembly-powered Python kernel backed by Pyodide",help_links:[{text:"Python (WASM) Kernel",url:"https://pyodide.org"}]}}async executeRequest(e){const t=await this._remoteKernel.execute(e,this.parent);return t.execution_count=this.executionCount,t}async completeRequest(e){return await this._remoteKernel.complete(e,this.parent)}async inspectRequest(e){return await this._remoteKernel.inspect(e,this.parent)}async isCompleteRequest(e){return await this._remoteKernel.isComplete(e,this.parent)}async commInfoRequest(e){return await this._remoteKernel.commInfo(e,this.parent)}async commOpen(e){return await this._remoteKernel.commOpen(e,this.parent)}async commMsg(e){return await this._remoteKernel.commMsg(e,this.parent)}async commClose(e){return await this._remoteKernel.commClose(e,this.parent)}async inputReply(e){return await this._remoteKernel.inputReply(e,this.parent)}}var L=s(39694);const U={E2BIG:1,EACCES:2,EADDRINUSE:3,EADDRNOTAVAIL:4,EADV:122,EAFNOSUPPORT:5,EAGAIN:6,EALREADY:7,EBADE:113,EBADF:8,EBADFD:127,EBADMSG:9,EBADR:114,EBADRQC:103,EBADSLT:102,EBFONT:101,EBUSY:10,ECANCELED:11,ECHILD:12,ECHRNG:106,ECOMM:124,ECONNABORTED:13,ECONNREFUSED:14,ECONNRESET:15,EDEADLK:16,EDEADLOCK:16,EDESTADDRREQ:17,EDOM:18,EDOTDOT:125,EDQUOT:19,EEXIST:20,EFAULT:21,EFBIG:22,EHOSTDOWN:142,EHOSTUNREACH:23,EIDRM:24,EILSEQ:25,EINPROGRESS:26,EINTR:27,EINVAL:28,EIO:29,EISCONN:30,EISDIR:31,EL2HLT:112,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELIBACC:129,ELIBBAD:130,ELIBEXEC:133,ELIBMAX:132,ELIBSCN:131,ELNRNG:109,ELOOP:32,EMFILE:33,EMLINK:34,EMSGSIZE:35,EMULTIHOP:36,ENAMETOOLONG:37,ENETDOWN:38,ENETRESET:39,ENETUNREACH:40,ENFILE:41,ENOANO:104,ENOBUFS:42,ENOCSI:111,ENODATA:116,ENODEV:43,ENOENT:44,ENOEXEC:45,ENOLCK:46,ENOLINK:47,ENOMEDIUM:148,ENOMEM:48,ENOMSG:49,ENONET:119,ENOPKG:120,ENOPROTOOPT:50,ENOSPC:51,ENOSR:118,ENOSTR:100,ENOSYS:52,ENOTBLK:105,ENOTCONN:53,ENOTDIR:54,ENOTEMPTY:55,ENOTRECOVERABLE:56,ENOTSOCK:57,ENOTSUP:138,ENOTTY:59,ENOTUNIQ:126,ENXIO:60,EOPNOTSUPP:138,EOVERFLOW:61,EOWNERDEAD:62,EPERM:63,EPFNOSUPPORT:139,EPIPE:64,EPROTO:65,EPROTONOSUPPORT:66,EPROTOTYPE:67,ERANGE:68,EREMCHG:128,EREMOTE:121,EROFS:69,ESHUTDOWN:140,ESOCKTNOSUPPORT:137,ESPIPE:70,ESRCH:71,ESRMNT:123,ESTALE:72,ESTRPIPE:135,ETIME:117,ETIMEDOUT:73,ETOOMANYREFS:141,ETXTBSY:74,EUNATCH:110,EUSERS:136,EWOULDBLOCK:6,EXDEV:75,EXFULL:115};class M{constructor(){this._options=null,this._initializer=null,this._localPath="",this._driveName="",this._driveFS=null,this._initialized=new Promise(((e,t)=>{this._initializer={resolve:e,reject:t}}))}async initialize(e){var t;if(this._options=e,e.location.includes(":")){const t=e.location.split(":");this._driveName=t[0],this._localPath=t[1]}else this._driveName="",this._localPath=e.location;await this.initRuntime(e),await this.initFilesystem(e),await this.initPackageManager(e),await this.initKernel(e),await this.initGlobals(e),null===(t=this._initializer)||void 0===t||t.resolve()}async initRuntime(e){const{pyodideUrl:t,indexUrl:s}=e;importScripts(t),this._pyodide=await self.loadPyodide({indexURL:s})}async initPackageManager(e){if(!this._options)throw new Error("Uninitialized");const{pipliteWheelUrl:t,disablePyPIFallback:s,pipliteUrls:r}=this._options;await this._pyodide.loadPackage(["micropip"]),await this._pyodide.runPythonAsync(`\n      import micropip\n      await micropip.install('${t}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${s?"True":"False"}\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(r)}\n    `)}async initKernel(e){await this._pyodide.runPythonAsync("\n      await piplite.install(['matplotlib', 'ipykernel'], keep_going=True);\n      await piplite.install(['pyolite'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyolite\n    "),e.mountDrive&&this._localPath&&await this._pyodide.runPythonAsync(`\n        import os;\n        os.chdir("${this._localPath}");\n      `)}async initGlobals(e){const{globals:t}=this._pyodide;this._kernel=t.get("pyolite").kernel_instance.copy(),this._stdout_stream=t.get("pyolite").stdout_stream.copy(),this._stderr_stream=t.get("pyolite").stderr_stream.copy(),this._interpreter=this._kernel.interpreter.copy(),this._interpreter.send_comm=this.sendComm.bind(this)}async initFilesystem(e){if(e.mountDrive){const t="/drive",{FS:s}=this._pyodide,{baseUrl:r}=e,i=new L.ot({FS:s,PATH:this._pyodide._module.PATH,ERRNO_CODES:U,baseUrl:r,driveName:this._driveName,mountpoint:t});s.mkdir(t),s.mount(i,{},t),s.chdir(t),this._driveFS=i}}mapToObject(e){const t=e instanceof Array?[]:{};return e.forEach(((e,s)=>{t[s]=e instanceof Map||e instanceof Array?this.mapToObject(e):e})),t}formatResult(e){if(!this._pyodide.isPyProxy(e))return e;const t=e.toJs();return this.mapToObject(t)}async setup(e){await this._initialized,this._kernel._parent_header=this._pyodide.toPy(e)}async execute(e,t){await this.setup(t);const s=(e,t)=>{const s={name:this.formatResult(e),text:this.formatResult(t)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:s,type:"stream"})};this._stdout_stream.publish_stream_callback=s,this._stderr_stream.publish_stream_callback=s,this._interpreter.display_pub.clear_output_callback=e=>{const t={wait:this.formatResult(e)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:t,type:"clear_output"})},this._interpreter.display_pub.display_data_callback=(e,t,s)=>{const r={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"display_data"})},this._interpreter.display_pub.update_display_data_callback=(e,t,s)=>{const r={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"update_display_data"})},this._interpreter.displayhook.publish_execution_result=(e,t,s)=>{const r={execution_count:e,data:this.formatResult(t),metadata:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"execute_result"})},this._interpreter.input=this.input,this._interpreter.getpass=this.getpass;const r=await this._kernel.run(e.code),i=this.formatResult(r);return"error"===i.status&&((e,t,s)=>{const r={ename:e,evalue:t,traceback:s};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:r,type:"execute_error"})})(i.ename,i.evalue,i.traceback),i}async complete(e,t){await this.setup(t);const s=this._kernel.complete(e.code,e.cursor_pos);return this.formatResult(s)}async inspect(e,t){await this.setup(t);const s=this._kernel.inspect(e.code,e.cursor_pos,e.detail_level);return this.formatResult(s)}async isComplete(e,t){await this.setup(t);const s=this._kernel.is_complete(e.code);return this.formatResult(s)}async commInfo(e,t){await this.setup(t);const s=this._kernel.comm_info(e.target_name);return{comms:this.formatResult(s),status:"ok"}}async commOpen(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_open(this._pyodide.toPy(e));return this.formatResult(s)}async commMsg(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_msg(this._pyodide.toPy(e));return this.formatResult(s)}async commClose(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_close(this._pyodide.toPy(e));return this.formatResult(s)}async inputReply(e,t){await this.setup(t),this._resolveInputReply(e)}async sendInputRequest(e,t){const s={prompt:e,password:t};postMessage({type:"input_request",parentHeader:this.formatResult(this._kernel._parent_header).header,content:s})}async getpass(e){e=void 0===e?"":e,await this.sendInputRequest(e,!0);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async input(e){e=void 0===e?"":e,await this.sendInputRequest(e,!1);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async sendComm(e,t,s,r,i){postMessage({type:e,content:this.formatResult(t),metadata:this.formatResult(s),ident:this.formatResult(r),buffers:this.formatResult(i),parentHeader:this.formatResult(this._kernel._parent_header).header})}}},88422:(e,t,s)=>{e.exports=s.p+"all.json"},69278:(e,t,s)=>{e.exports=s.p+"ipykernel-6.9.2-py3-none-any.whl"},52332:(e,t,s)=>{e.exports=s.p+"piplite-0.1.0b9-py3-none-any.whl"},22974:(e,t,s)=>{e.exports=s.p+"pyolite-0.1.0b9-py3-none-any.whl"},54282:(e,t,s)=>{e.exports=s.p+"widgetsnbextension-3.6.0-py3-none-any.whl"}}]);
//# sourceMappingURL=5062.a62f900.js.map