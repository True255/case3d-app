import{n as je,V as h,t as Ye,r as Ht,d as Ce,u as Xe,v as kt,Q as R,C as Lt,w as me,D as we,x as Re,y as F,z as lt,F as Rt,G as vt,q as m,H as E,J as ht,K as ct,X as Qe,Y as Ot,Z as se,O as Qt,b as k,P as Vt,_ as dt,$ as pt,a0 as Ve,s as Ze,a1 as Ue,a2 as Bt,a3 as ft,a4 as Ne,a5 as Ft,a6 as ye,S as He,m as ae,a7 as re,k as St,a8 as Be,M as ke}from"./three-CI53N6iz.js";const be=parseInt(je.replace(/\D+/g,"")),ge=be>=125?"uv1":"uv2";function hi(y,i=Math.PI/3){const l=Math.cos(i),t=(1+1e-10)*100,n=[new h,new h,new h],a=new h,d=new h,r=new h,u=new h;function M(P){const D=~~(P.x*t),A=~~(P.y*t),O=~~(P.z*t);return`${D},${A},${O}`}const p=y.index?y.toNonIndexed():y,b=p.attributes.position,L={};for(let P=0,D=b.count/3;P<D;P++){const A=3*P,O=n[0].fromBufferAttribute(b,A+0),T=n[1].fromBufferAttribute(b,A+1),_=n[2].fromBufferAttribute(b,A+2);a.subVectors(_,T),d.subVectors(O,T);const C=new h().crossVectors(a,d).normalize();for(let z=0;z<3;z++){const v=n[z],j=M(v);j in L||(L[j]=[]),L[j].push(C)}}const H=new Float32Array(b.count*3),N=new Ye(H,3,!1);for(let P=0,D=b.count/3;P<D;P++){const A=3*P,O=n[0].fromBufferAttribute(b,A+0),T=n[1].fromBufferAttribute(b,A+1),_=n[2].fromBufferAttribute(b,A+2);a.subVectors(_,T),d.subVectors(O,T),r.crossVectors(a,d).normalize();for(let C=0;C<3;C++){const z=n[C],v=M(z),j=L[v];u.set(0,0,0);for(let W=0,g=j.length;W<g;W++){const tt=j[W];r.dot(tt)>l&&u.add(tt)}u.normalize(),N.setXYZ(A+C,u.x,u.y,u.z)}}return p.setAttribute("normal",N),p}var Fe=Object.defineProperty,We=(y,i,l)=>i in y?Fe(y,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):y[i]=l,Ge=(y,i,l)=>(We(y,i+"",l),l);class qe{constructor(){Ge(this,"_listeners")}addEventListener(i,l){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[i]===void 0&&(t[i]=[]),t[i].indexOf(l)===-1&&t[i].push(l)}hasEventListener(i,l){if(this._listeners===void 0)return!1;const t=this._listeners;return t[i]!==void 0&&t[i].indexOf(l)!==-1}removeEventListener(i,l){if(this._listeners===void 0)return;const n=this._listeners[i];if(n!==void 0){const a=n.indexOf(l);a!==-1&&n.splice(a,1)}}dispatchEvent(i){if(this._listeners===void 0)return;const t=this._listeners[i.type];if(t!==void 0){i.target=this;const n=t.slice(0);for(let a=0,d=n.length;a<d;a++)n[a].call(this,i);i.target=null}}}var Ke=Object.defineProperty,$e=(y,i,l)=>i in y?Ke(y,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):y[i]=l,s=(y,i,l)=>($e(y,typeof i!="symbol"?i+"":i,l),l);class ui extends Ht{constructor(i,l){super(),s(this,"isTransformControls",!0),s(this,"visible",!1),s(this,"domElement"),s(this,"raycaster",new Ce),s(this,"gizmo"),s(this,"plane"),s(this,"tempVector",new h),s(this,"tempVector2",new h),s(this,"tempQuaternion",new R),s(this,"unit",{X:new h(1,0,0),Y:new h(0,1,0),Z:new h(0,0,1)}),s(this,"pointStart",new h),s(this,"pointEnd",new h),s(this,"offset",new h),s(this,"rotationAxis",new h),s(this,"startNorm",new h),s(this,"endNorm",new h),s(this,"rotationAngle",0),s(this,"cameraPosition",new h),s(this,"cameraQuaternion",new R),s(this,"cameraScale",new h),s(this,"parentPosition",new h),s(this,"parentQuaternion",new R),s(this,"parentQuaternionInv",new R),s(this,"parentScale",new h),s(this,"worldPositionStart",new h),s(this,"worldQuaternionStart",new R),s(this,"worldScaleStart",new h),s(this,"worldPosition",new h),s(this,"worldQuaternion",new R),s(this,"worldQuaternionInv",new R),s(this,"worldScale",new h),s(this,"eye",new h),s(this,"positionStart",new h),s(this,"quaternionStart",new R),s(this,"scaleStart",new h),s(this,"camera"),s(this,"object"),s(this,"enabled",!0),s(this,"axis",null),s(this,"mode","translate"),s(this,"translationSnap",null),s(this,"rotationSnap",null),s(this,"scaleSnap",null),s(this,"space","world"),s(this,"size",1),s(this,"dragging",!1),s(this,"showX",!0),s(this,"showY",!0),s(this,"showZ",!0),s(this,"changeEvent",{type:"change"}),s(this,"mouseDownEvent",{type:"mouseDown",mode:this.mode}),s(this,"mouseUpEvent",{type:"mouseUp",mode:this.mode}),s(this,"objectChangeEvent",{type:"objectChange"}),s(this,"intersectObjectWithRay",(n,a,d)=>{const r=a.intersectObject(n,!0);for(let u=0;u<r.length;u++)if(r[u].object.visible||d)return r[u];return!1}),s(this,"attach",n=>(this.object=n,this.visible=!0,this)),s(this,"detach",()=>(this.object=void 0,this.visible=!1,this.axis=null,this)),s(this,"reset",()=>this.enabled?(this.dragging&&this.object!==void 0&&(this.object.position.copy(this.positionStart),this.object.quaternion.copy(this.quaternionStart),this.object.scale.copy(this.scaleStart),this.dispatchEvent(this.changeEvent),this.dispatchEvent(this.objectChangeEvent),this.pointStart.copy(this.pointEnd)),this):this),s(this,"updateMatrixWorld",()=>{this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this.parentPosition,this.parentQuaternion,this.parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this.worldScale),this.parentQuaternionInv.copy(this.parentQuaternion).invert(),this.worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this.cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld()}),s(this,"pointerHover",n=>{if(this.object===void 0||this.dragging===!0)return;this.raycaster.setFromCamera(n,this.camera);const a=this.intersectObjectWithRay(this.gizmo.picker[this.mode],this.raycaster);a?this.axis=a.object.name:this.axis=null}),s(this,"pointerDown",n=>{if(!(this.object===void 0||this.dragging===!0||n.button!==0)&&this.axis!==null){this.raycaster.setFromCamera(n,this.camera);const a=this.intersectObjectWithRay(this.plane,this.raycaster,!0);if(a){let d=this.space;if(this.mode==="scale"?d="local":(this.axis==="E"||this.axis==="XYZE"||this.axis==="XYZ")&&(d="world"),d==="local"&&this.mode==="rotate"){const r=this.rotationSnap;this.axis==="X"&&r&&(this.object.rotation.x=Math.round(this.object.rotation.x/r)*r),this.axis==="Y"&&r&&(this.object.rotation.y=Math.round(this.object.rotation.y/r)*r),this.axis==="Z"&&r&&(this.object.rotation.z=Math.round(this.object.rotation.z/r)*r)}this.object.updateMatrixWorld(),this.object.parent&&this.object.parent.updateMatrixWorld(),this.positionStart.copy(this.object.position),this.quaternionStart.copy(this.object.quaternion),this.scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this.worldScaleStart),this.pointStart.copy(a.point).sub(this.worldPositionStart)}this.dragging=!0,this.mouseDownEvent.mode=this.mode,this.dispatchEvent(this.mouseDownEvent)}}),s(this,"pointerMove",n=>{const a=this.axis,d=this.mode,r=this.object;let u=this.space;if(d==="scale"?u="local":(a==="E"||a==="XYZE"||a==="XYZ")&&(u="world"),r===void 0||a===null||this.dragging===!1||n.button!==-1)return;this.raycaster.setFromCamera(n,this.camera);const M=this.intersectObjectWithRay(this.plane,this.raycaster,!0);if(M){if(this.pointEnd.copy(M.point).sub(this.worldPositionStart),d==="translate")this.offset.copy(this.pointEnd).sub(this.pointStart),u==="local"&&a!=="XYZ"&&this.offset.applyQuaternion(this.worldQuaternionInv),a.indexOf("X")===-1&&(this.offset.x=0),a.indexOf("Y")===-1&&(this.offset.y=0),a.indexOf("Z")===-1&&(this.offset.z=0),u==="local"&&a!=="XYZ"?this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale):this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale),r.position.copy(this.offset).add(this.positionStart),this.translationSnap&&(u==="local"&&(r.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert()),a.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),a.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),a.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this.quaternionStart)),u==="world"&&(r.parent&&r.position.add(this.tempVector.setFromMatrixPosition(r.parent.matrixWorld)),a.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),a.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),a.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(this.tempVector.setFromMatrixPosition(r.parent.matrixWorld))));else if(d==="scale"){if(a.search("XYZ")!==-1){let p=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(p*=-1),this.tempVector2.set(p,p,p)}else this.tempVector.copy(this.pointStart),this.tempVector2.copy(this.pointEnd),this.tempVector.applyQuaternion(this.worldQuaternionInv),this.tempVector2.applyQuaternion(this.worldQuaternionInv),this.tempVector2.divide(this.tempVector),a.search("X")===-1&&(this.tempVector2.x=1),a.search("Y")===-1&&(this.tempVector2.y=1),a.search("Z")===-1&&(this.tempVector2.z=1);r.scale.copy(this.scaleStart).multiply(this.tempVector2),this.scaleSnap&&this.object&&(a.search("X")!==-1&&(this.object.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),a.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),a.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(d==="rotate"){this.offset.copy(this.pointEnd).sub(this.pointStart);const p=20/this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));a==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this.startNorm.copy(this.pointStart).normalize(),this.endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this.endNorm.cross(this.startNorm).dot(this.eye)<0?1:-1):a==="XYZE"?(this.rotationAxis.copy(this.offset).cross(this.eye).normalize(),this.rotationAngle=this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye))*p):(a==="X"||a==="Y"||a==="Z")&&(this.rotationAxis.copy(this.unit[a]),this.tempVector.copy(this.unit[a]),u==="local"&&this.tempVector.applyQuaternion(this.worldQuaternion),this.rotationAngle=this.offset.dot(this.tempVector.cross(this.eye).normalize())*p),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),u==="local"&&a!=="E"&&a!=="XYZE"?(r.quaternion.copy(this.quaternionStart),r.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this.parentQuaternionInv),r.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this.quaternionStart).normalize())}this.dispatchEvent(this.changeEvent),this.dispatchEvent(this.objectChangeEvent)}}),s(this,"pointerUp",n=>{n.button===0&&(this.dragging&&this.axis!==null&&(this.mouseUpEvent.mode=this.mode,this.dispatchEvent(this.mouseUpEvent)),this.dragging=!1,this.axis=null)}),s(this,"getPointer",n=>{var a;if(this.domElement&&((a=this.domElement.ownerDocument)!=null&&a.pointerLockElement))return{x:0,y:0,button:n.button};{const d=n.changedTouches?n.changedTouches[0]:n,r=this.domElement.getBoundingClientRect();return{x:(d.clientX-r.left)/r.width*2-1,y:-(d.clientY-r.top)/r.height*2+1,button:n.button}}}),s(this,"onPointerHover",n=>{if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this.getPointer(n));break}}),s(this,"onPointerDown",n=>{!this.enabled||!this.domElement||(this.domElement.style.touchAction="none",this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.pointerHover(this.getPointer(n)),this.pointerDown(this.getPointer(n)))}),s(this,"onPointerMove",n=>{this.enabled&&this.pointerMove(this.getPointer(n))}),s(this,"onPointerUp",n=>{!this.enabled||!this.domElement||(this.domElement.style.touchAction="",this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.pointerUp(this.getPointer(n)))}),s(this,"getMode",()=>this.mode),s(this,"setMode",n=>{this.mode=n}),s(this,"setTranslationSnap",n=>{this.translationSnap=n}),s(this,"setRotationSnap",n=>{this.rotationSnap=n}),s(this,"setScaleSnap",n=>{this.scaleSnap=n}),s(this,"setSize",n=>{this.size=n}),s(this,"setSpace",n=>{this.space=n}),s(this,"update",()=>{console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}),s(this,"connect",n=>{n===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.domElement=n,this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("pointermove",this.onPointerHover),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp)}),s(this,"dispose",()=>{var n,a,d,r,u,M;(n=this.domElement)==null||n.removeEventListener("pointerdown",this.onPointerDown),(a=this.domElement)==null||a.removeEventListener("pointermove",this.onPointerHover),(r=(d=this.domElement)==null?void 0:d.ownerDocument)==null||r.removeEventListener("pointermove",this.onPointerMove),(M=(u=this.domElement)==null?void 0:u.ownerDocument)==null||M.removeEventListener("pointerup",this.onPointerUp),this.traverse(p=>{const b=p;b.geometry&&b.geometry.dispose(),b.material&&b.material.dispose()})}),this.domElement=l,this.camera=i,this.gizmo=new Je,this.add(this.gizmo),this.plane=new ti,this.add(this.plane);const t=(n,a)=>{let d=a;Object.defineProperty(this,n,{get:function(){return d!==void 0?d:a},set:function(r){d!==r&&(d=r,this.plane[n]=r,this.gizmo[n]=r,this.dispatchEvent({type:n+"-changed",value:r}),this.dispatchEvent(this.changeEvent))}}),this[n]=a,this.plane[n]=a,this.gizmo[n]=a};t("camera",this.camera),t("object",this.object),t("enabled",this.enabled),t("axis",this.axis),t("mode",this.mode),t("translationSnap",this.translationSnap),t("rotationSnap",this.rotationSnap),t("scaleSnap",this.scaleSnap),t("space",this.space),t("size",this.size),t("dragging",this.dragging),t("showX",this.showX),t("showY",this.showY),t("showZ",this.showZ),t("worldPosition",this.worldPosition),t("worldPositionStart",this.worldPositionStart),t("worldQuaternion",this.worldQuaternion),t("worldQuaternionStart",this.worldQuaternionStart),t("cameraPosition",this.cameraPosition),t("cameraQuaternion",this.cameraQuaternion),t("pointStart",this.pointStart),t("pointEnd",this.pointEnd),t("rotationAxis",this.rotationAxis),t("rotationAngle",this.rotationAngle),t("eye",this.eye),l!==void 0&&this.connect(l)}}class Je extends Ht{constructor(){super(),s(this,"isTransformControlsGizmo",!0),s(this,"type","TransformControlsGizmo"),s(this,"tempVector",new h(0,0,0)),s(this,"tempEuler",new Xe),s(this,"alignVector",new h(0,1,0)),s(this,"zeroVector",new h(0,0,0)),s(this,"lookAtMatrix",new kt),s(this,"tempQuaternion",new R),s(this,"tempQuaternion2",new R),s(this,"identityQuaternion",new R),s(this,"unitX",new h(1,0,0)),s(this,"unitY",new h(0,1,0)),s(this,"unitZ",new h(0,0,1)),s(this,"gizmo"),s(this,"picker"),s(this,"helper"),s(this,"rotationAxis",new h),s(this,"cameraPosition",new h),s(this,"worldPositionStart",new h),s(this,"worldQuaternionStart",new R),s(this,"worldPosition",new h),s(this,"worldQuaternion",new R),s(this,"eye",new h),s(this,"camera",null),s(this,"enabled",!0),s(this,"axis",null),s(this,"mode","translate"),s(this,"space","world"),s(this,"size",1),s(this,"dragging",!1),s(this,"showX",!0),s(this,"showY",!0),s(this,"showZ",!0),s(this,"updateMatrixWorld",()=>{let Y=this.space;this.mode==="scale"&&(Y="local");const x=Y==="local"?this.worldQuaternion:this.identityQuaternion;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let I=[];I=I.concat(this.picker[this.mode].children),I=I.concat(this.gizmo[this.mode].children),I=I.concat(this.helper[this.mode].children);for(let Q=0;Q<I.length;Q++){const o=I[Q];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let G;if(this.camera.isOrthographicCamera?G=(this.camera.top-this.camera.bottom)/this.camera.zoom:G=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(G*this.size/7),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.position.copy(this.worldPositionStart),o.visible=!!this.axis,this.axis==="X"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,0,0)),o.quaternion.copy(x).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(x).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,0,Math.PI/2)),o.quaternion.copy(x).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(x).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,Math.PI/2,0)),o.quaternion.copy(x).multiply(this.tempQuaternion),Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(x).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(this.tempQuaternion.setFromEuler(this.tempEuler.set(0,Math.PI/2,0)),this.alignVector.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector,this.alignVector,this.unitY)),o.quaternion.multiply(this.tempQuaternion),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),this.tempVector.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(this.tempVector),o.visible=this.dragging):(o.quaternion.copy(x),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(x),this.mode==="translate"||this.mode==="scale"?((o.name==="X"||o.name==="XYZX")&&Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(x).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),(o.name==="Y"||o.name==="XYZY")&&Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(x).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),(o.name==="Z"||o.name==="XYZZ")&&Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(x).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(x).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(x).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(x).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name.search("X")!==-1&&(this.alignVector.copy(this.unitX).applyQuaternion(x).dot(this.eye)<0?o.tag==="fwd"?o.visible=!1:o.scale.x*=-1:o.tag==="bwd"&&(o.visible=!1)),o.name.search("Y")!==-1&&(this.alignVector.copy(this.unitY).applyQuaternion(x).dot(this.eye)<0?o.tag==="fwd"?o.visible=!1:o.scale.y*=-1:o.tag==="bwd"&&(o.visible=!1)),o.name.search("Z")!==-1&&(this.alignVector.copy(this.unitZ).applyQuaternion(x).dot(this.eye)<0?o.tag==="fwd"?o.visible=!1:o.scale.z*=-1:o.tag==="bwd"&&(o.visible=!1))):this.mode==="rotate"&&(this.tempQuaternion2.copy(x),this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(x).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye,this.zeroVector,this.unitY)),o.name==="X"&&(this.tempQuaternion.setFromAxisAngle(this.unitX,Math.atan2(-this.alignVector.y,this.alignVector.z)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),o.quaternion.copy(this.tempQuaternion)),o.name==="Y"&&(this.tempQuaternion.setFromAxisAngle(this.unitY,Math.atan2(this.alignVector.x,this.alignVector.z)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),o.quaternion.copy(this.tempQuaternion)),o.name==="Z"&&(this.tempQuaternion.setFromAxisAngle(this.unitZ,Math.atan2(this.alignVector.y,this.alignVector.x)),this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2,this.tempQuaternion),o.quaternion.copy(this.tempQuaternion))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material.tempOpacity=o.material.tempOpacity||o.material.opacity,o.material.tempColor=o.material.tempColor||o.material.color.clone(),o.material.color.copy(o.material.tempColor),o.material.opacity=o.material.tempOpacity,this.enabled?this.axis&&(o.name===this.axis?(o.material.opacity=1,o.material.color.lerp(new Lt(1,1,1),.5)):this.axis.split("").some(function(q){return o.name===q})?(o.material.opacity=1,o.material.color.lerp(new Lt(1,1,1),.5)):(o.material.opacity*=.25,o.material.color.lerp(new Lt(1,1,1),.5))):(o.material.opacity*=.5,o.material.color.lerp(new Lt(1,1,1),.5))}super.updateMatrixWorld()});const i=new me({depthTest:!1,depthWrite:!1,transparent:!0,side:we,fog:!1,toneMapped:!1}),l=new Re({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,fog:!1,toneMapped:!1}),t=i.clone();t.opacity=.15;const n=i.clone();n.opacity=.33;const a=i.clone();a.color.set(16711680);const d=i.clone();d.color.set(65280);const r=i.clone();r.color.set(255);const u=i.clone();u.opacity=.25;const M=u.clone();M.color.set(16776960);const p=u.clone();p.color.set(65535);const b=u.clone();b.color.set(16711935),i.clone().color.set(16776960);const H=l.clone();H.color.set(16711680);const N=l.clone();N.color.set(65280);const P=l.clone();P.color.set(255);const D=l.clone();D.color.set(65535);const A=l.clone();A.color.set(16711935);const O=l.clone();O.color.set(16776960);const T=l.clone();T.color.set(7895160);const _=O.clone();_.opacity=.25;const C=new F(0,.05,.2,12,1,!1),z=new lt(.125,.125,.125),v=new Rt;v.setAttribute("position",new vt([0,0,0,1,0,0],3));const j=(Y,x)=>{const I=new Rt,Q=[];for(let o=0;o<=64*x;++o)Q.push(0,Math.cos(o/32*Math.PI)*Y,Math.sin(o/32*Math.PI)*Y);return I.setAttribute("position",new vt(Q,3)),I},W=()=>{const Y=new Rt;return Y.setAttribute("position",new vt([0,0,0,1,1,1],3)),Y},g={X:[[new m(C,a),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new m(C,a),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new E(v,H)]],Y:[[new m(C,d),[0,1,0],null,null,"fwd"],[new m(C,d),[0,1,0],[Math.PI,0,0],null,"bwd"],[new E(v,N),null,[0,0,Math.PI/2]]],Z:[[new m(C,r),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new m(C,r),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new E(v,P),null,[0,-Math.PI/2,0]]],XYZ:[[new m(new ct(.1,0),u.clone()),[0,0,0],[0,0,0]]],XY:[[new m(new ht(.295,.295),M.clone()),[.15,.15,0]],[new E(v,O),[.18,.3,0],null,[.125,1,1]],[new E(v,O),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new m(new ht(.295,.295),p.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new E(v,D),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new E(v,D),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new m(new ht(.295,.295),b.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new E(v,A),[.18,0,.3],null,[.125,1,1]],[new E(v,A),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},tt={X:[[new m(new F(.2,0,1,4,1,!1),t),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new m(new F(.2,0,1,4,1,!1),t),[0,.6,0]]],Z:[[new m(new F(.2,0,1,4,1,!1),t),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new m(new ct(.2,0),t)]],XY:[[new m(new ht(.4,.4),t),[.2,.2,0]]],YZ:[[new m(new ht(.4,.4),t),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new m(new ht(.4,.4),t),[.2,0,.2],[-Math.PI/2,0,0]]]},jt={START:[[new m(new ct(.01,2),n),null,null,null,"helper"]],END:[[new m(new ct(.01,2),n),null,null,null,"helper"]],DELTA:[[new E(W(),n),null,null,null,"helper"]],X:[[new E(v,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new E(v,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new E(v,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},et={X:[[new E(j(1,.5),H)],[new m(new ct(.04,0),a),[0,0,.99],null,[1,3,1]]],Y:[[new E(j(1,.5),N),null,[0,0,-Math.PI/2]],[new m(new ct(.04,0),d),[0,0,.99],null,[3,1,1]]],Z:[[new E(j(1,.5),P),null,[0,Math.PI/2,0]],[new m(new ct(.04,0),r),[.99,0,0],null,[1,3,1]]],E:[[new E(j(1.25,1),_),null,[0,Math.PI/2,0]],[new m(new F(.03,0,.15,4,1,!1),_),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new m(new F(.03,0,.15,4,1,!1),_),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new m(new F(.03,0,.15,4,1,!1),_),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new m(new F(.03,0,.15,4,1,!1),_),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new E(j(1,1),T),null,[0,Math.PI/2,0]]]},mt={AXIS:[[new E(v,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},Et={X:[[new m(new Ot(1,.1,4,24),t),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new m(new Ot(1,.1,4,24),t),[0,0,0],[Math.PI/2,0,0]]],Z:[[new m(new Ot(1,.1,4,24),t),[0,0,0],[0,0,-Math.PI/2]]],E:[[new m(new Ot(1.25,.1,2,24),t)]],XYZE:[[new m(new Qe(.7,10,8),t)]]},xt={X:[[new m(z,a),[.8,0,0],[0,0,-Math.PI/2]],[new E(v,H),null,null,[.8,1,1]]],Y:[[new m(z,d),[0,.8,0]],[new E(v,N),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new m(z,r),[0,0,.8],[Math.PI/2,0,0]],[new E(v,P),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new m(z,M),[.85,.85,0],null,[2,2,.2]],[new E(v,O),[.855,.98,0],null,[.125,1,1]],[new E(v,O),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new m(z,p),[0,.85,.85],null,[.2,2,2]],[new E(v,D),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new E(v,D),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new m(z,b),[.85,0,.85],null,[2,.2,2]],[new E(v,A),[.855,0,.98],null,[.125,1,1]],[new E(v,A),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new m(new lt(.125,.125,.125),u.clone()),[1.1,0,0]]],XYZY:[[new m(new lt(.125,.125,.125),u.clone()),[0,1.1,0]]],XYZZ:[[new m(new lt(.125,.125,.125),u.clone()),[0,0,1.1]]]},Pt={X:[[new m(new F(.2,0,.8,4,1,!1),t),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new m(new F(.2,0,.8,4,1,!1),t),[0,.5,0]]],Z:[[new m(new F(.2,0,.8,4,1,!1),t),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new m(z,t),[.85,.85,0],null,[3,3,.2]]],YZ:[[new m(z,t),[0,.85,.85],null,[.2,3,3]]],XZ:[[new m(z,t),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new m(new lt(.2,.2,.2),t),[1.1,0,0]]],XYZY:[[new m(new lt(.2,.2,.2),t),[0,1.1,0]]],XYZZ:[[new m(new lt(.2,.2,.2),t),[0,0,1.1]]]},st={X:[[new E(v,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new E(v,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new E(v,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},B=Y=>{const x=new Ht;for(let I in Y)for(let Q=Y[I].length;Q--;){const o=Y[I][Q][0].clone(),G=Y[I][Q][1],q=Y[I][Q][2],rt=Y[I][Q][3],Mt=Y[I][Q][4];o.name=I,o.tag=Mt,G&&o.position.set(G[0],G[1],G[2]),q&&o.rotation.set(q[0],q[1],q[2]),rt&&o.scale.set(rt[0],rt[1],rt[2]),o.updateMatrix();const At=o.geometry.clone();At.applyMatrix4(o.matrix),o.geometry=At,o.renderOrder=1/0,o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),x.add(o)}return x};this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=B(g)),this.add(this.gizmo.rotate=B(et)),this.add(this.gizmo.scale=B(xt)),this.add(this.picker.translate=B(tt)),this.add(this.picker.rotate=B(Et)),this.add(this.picker.scale=B(Pt)),this.add(this.helper.translate=B(jt)),this.add(this.helper.rotate=B(mt)),this.add(this.helper.scale=B(st)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}}class ti extends m{constructor(){super(new ht(1e5,1e5,2,2),new me({visible:!1,wireframe:!0,side:we,transparent:!0,opacity:.1,toneMapped:!1})),s(this,"isTransformControlsPlane",!0),s(this,"type","TransformControlsPlane"),s(this,"unitX",new h(1,0,0)),s(this,"unitY",new h(0,1,0)),s(this,"unitZ",new h(0,0,1)),s(this,"tempVector",new h),s(this,"dirVector",new h),s(this,"alignVector",new h),s(this,"tempMatrix",new kt),s(this,"identityQuaternion",new R),s(this,"cameraQuaternion",new R),s(this,"worldPosition",new h),s(this,"worldQuaternion",new R),s(this,"eye",new h),s(this,"axis",null),s(this,"mode","translate"),s(this,"space","world"),s(this,"updateMatrixWorld",()=>{let i=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(i="local"),this.unitX.set(1,0,0).applyQuaternion(i==="local"?this.worldQuaternion:this.identityQuaternion),this.unitY.set(0,1,0).applyQuaternion(i==="local"?this.worldQuaternion:this.identityQuaternion),this.unitZ.set(0,0,1).applyQuaternion(i==="local"?this.worldQuaternion:this.identityQuaternion),this.alignVector.copy(this.unitY),this.mode){case"translate":case"scale":switch(this.axis){case"X":this.alignVector.copy(this.eye).cross(this.unitX),this.dirVector.copy(this.unitX).cross(this.alignVector);break;case"Y":this.alignVector.copy(this.eye).cross(this.unitY),this.dirVector.copy(this.unitY).cross(this.alignVector);break;case"Z":this.alignVector.copy(this.eye).cross(this.unitZ),this.dirVector.copy(this.unitZ).cross(this.alignVector);break;case"XY":this.dirVector.copy(this.unitZ);break;case"YZ":this.dirVector.copy(this.unitX);break;case"XZ":this.alignVector.copy(this.unitZ),this.dirVector.copy(this.unitY);break;case"XYZ":case"E":this.dirVector.set(0,0,0);break}break;case"rotate":default:this.dirVector.set(0,0,0)}this.dirVector.length()===0?this.quaternion.copy(this.cameraQuaternion):(this.tempMatrix.lookAt(this.tempVector.set(0,0,0),this.dirVector,this.alignVector),this.quaternion.setFromRotationMatrix(this.tempMatrix)),super.updateMatrixWorld()})}}var ei=Object.defineProperty,ii=(y,i,l)=>i in y?ei(y,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):y[i]=l,f=(y,i,l)=>(ii(y,typeof i!="symbol"?i+"":i,l),l);const Tt=new Ve,le=new Ze,ni=Math.cos(70*(Math.PI/180)),ce=(y,i)=>(y%i+i)%i;class di extends qe{constructor(i,l){super(),f(this,"object"),f(this,"domElement"),f(this,"enabled",!0),f(this,"target",new h),f(this,"minDistance",0),f(this,"maxDistance",1/0),f(this,"minZoom",0),f(this,"maxZoom",1/0),f(this,"minPolarAngle",0),f(this,"maxPolarAngle",Math.PI),f(this,"minAzimuthAngle",-1/0),f(this,"maxAzimuthAngle",1/0),f(this,"enableDamping",!1),f(this,"dampingFactor",.05),f(this,"enableZoom",!0),f(this,"zoomSpeed",1),f(this,"enableRotate",!0),f(this,"rotateSpeed",1),f(this,"enablePan",!0),f(this,"panSpeed",1),f(this,"screenSpacePanning",!0),f(this,"keyPanSpeed",7),f(this,"zoomToCursor",!1),f(this,"autoRotate",!1),f(this,"autoRotateSpeed",2),f(this,"reverseOrbit",!1),f(this,"reverseHorizontalOrbit",!1),f(this,"reverseVerticalOrbit",!1),f(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),f(this,"mouseButtons",{LEFT:dt.ROTATE,MIDDLE:dt.DOLLY,RIGHT:dt.PAN}),f(this,"touches",{ONE:pt.ROTATE,TWO:pt.DOLLY_PAN}),f(this,"target0"),f(this,"position0"),f(this,"zoom0"),f(this,"_domElementKeyEvents",null),f(this,"getPolarAngle"),f(this,"getAzimuthalAngle"),f(this,"setPolarAngle"),f(this,"setAzimuthalAngle"),f(this,"getDistance"),f(this,"getZoomScale"),f(this,"listenToKeyEvents"),f(this,"stopListenToKeyEvents"),f(this,"saveState"),f(this,"reset"),f(this,"update"),f(this,"connect"),f(this,"dispose"),f(this,"dollyIn"),f(this,"dollyOut"),f(this,"getScale"),f(this,"setScale"),this.object=i,this.domElement=l,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>p.phi,this.getAzimuthalAngle=()=>p.theta,this.setPolarAngle=e=>{let c=ce(e,2*Math.PI),w=p.phi;w<0&&(w+=2*Math.PI),c<0&&(c+=2*Math.PI);let S=Math.abs(c-w);2*Math.PI-S<S&&(c<w?c+=2*Math.PI:w+=2*Math.PI),b.phi=c-w,t.update()},this.setAzimuthalAngle=e=>{let c=ce(e,2*Math.PI),w=p.theta;w<0&&(w+=2*Math.PI),c<0&&(c+=2*Math.PI);let S=Math.abs(c-w);2*Math.PI-S<S&&(c<w?c+=2*Math.PI:w+=2*Math.PI),b.theta=c-w,t.update()},this.getDistance=()=>t.object.position.distanceTo(t.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",Ct),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ct),this._domElementKeyEvents=null},this.saveState=()=>{t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=()=>{t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(n),t.update(),u=r.NONE},this.update=(()=>{const e=new h,c=new h(0,1,0),w=new R().setFromUnitVectors(i.up,c),S=w.clone().invert(),X=new h,it=new R,at=2*Math.PI;return function(){const oe=t.object.position;w.setFromUnitVectors(i.up,c),S.copy(w).invert(),e.copy(oe).sub(t.target),e.applyQuaternion(w),p.setFromVector3(e),t.autoRotate&&u===r.NONE&&mt(jt()),t.enableDamping?(p.theta+=b.theta*t.dampingFactor,p.phi+=b.phi*t.dampingFactor):(p.theta+=b.theta,p.phi+=b.phi);let nt=t.minAzimuthAngle,ot=t.maxAzimuthAngle;isFinite(nt)&&isFinite(ot)&&(nt<-Math.PI?nt+=at:nt>Math.PI&&(nt-=at),ot<-Math.PI?ot+=at:ot>Math.PI&&(ot-=at),nt<=ot?p.theta=Math.max(nt,Math.min(ot,p.theta)):p.theta=p.theta>(nt+ot)/2?Math.max(nt,p.theta):Math.min(ot,p.theta)),p.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,p.phi)),p.makeSafe(),t.enableDamping===!0?t.target.addScaledVector(H,t.dampingFactor):t.target.add(H),t.zoomToCursor&&W||t.object.isOrthographicCamera?p.radius=Q(p.radius):p.radius=Q(p.radius*L),e.setFromSpherical(p),e.applyQuaternion(S),oe.copy(t.target).add(e),t.object.matrixAutoUpdate||t.object.updateMatrix(),t.object.lookAt(t.target),t.enableDamping===!0?(b.theta*=1-t.dampingFactor,b.phi*=1-t.dampingFactor,H.multiplyScalar(1-t.dampingFactor)):(b.set(0,0,0),H.set(0,0,0));let yt=!1;if(t.zoomToCursor&&W){let bt=null;if(t.object instanceof Vt&&t.object.isPerspectiveCamera){const gt=e.length();bt=Q(gt*L);const _t=gt-bt;t.object.position.addScaledVector(v,_t),t.object.updateMatrixWorld()}else if(t.object.isOrthographicCamera){const gt=new h(j.x,j.y,0);gt.unproject(t.object),t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/L)),t.object.updateProjectionMatrix(),yt=!0;const _t=new h(j.x,j.y,0);_t.unproject(t.object),t.object.position.sub(_t).add(gt),t.object.updateMatrixWorld(),bt=e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),t.zoomToCursor=!1;bt!==null&&(t.screenSpacePanning?t.target.set(0,0,-1).transformDirection(t.object.matrix).multiplyScalar(bt).add(t.object.position):(Tt.origin.copy(t.object.position),Tt.direction.set(0,0,-1).transformDirection(t.object.matrix),Math.abs(t.object.up.dot(Tt.direction))<ni?i.lookAt(t.target):(le.setFromNormalAndCoplanarPoint(t.object.up,t.target),Tt.intersectPlane(le,t.target))))}else t.object instanceof Qt&&t.object.isOrthographicCamera&&(yt=L!==1,yt&&(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/L)),t.object.updateProjectionMatrix()));return L=1,W=!1,yt||X.distanceToSquared(t.object.position)>M||8*(1-it.dot(t.object.quaternion))>M?(t.dispatchEvent(n),X.copy(t.object.position),it.copy(t.object.quaternion),yt=!1,!0):!1}})(),this.connect=e=>{t.domElement=e,t.domElement.style.touchAction="none",t.domElement.addEventListener("contextmenu",ie),t.domElement.addEventListener("pointerdown",te),t.domElement.addEventListener("pointercancel",wt),t.domElement.addEventListener("wheel",ee)},this.dispose=()=>{var e,c,w,S,X,it;t.domElement&&(t.domElement.style.touchAction="auto"),(e=t.domElement)==null||e.removeEventListener("contextmenu",ie),(c=t.domElement)==null||c.removeEventListener("pointerdown",te),(w=t.domElement)==null||w.removeEventListener("pointercancel",wt),(S=t.domElement)==null||S.removeEventListener("wheel",ee),(X=t.domElement)==null||X.ownerDocument.removeEventListener("pointermove",Yt),(it=t.domElement)==null||it.ownerDocument.removeEventListener("pointerup",wt),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",Ct)};const t=this,n={type:"change"},a={type:"start"},d={type:"end"},r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=r.NONE;const M=1e-6,p=new se,b=new se;let L=1;const H=new h,N=new k,P=new k,D=new k,A=new k,O=new k,T=new k,_=new k,C=new k,z=new k,v=new h,j=new k;let W=!1;const g=[],tt={};function jt(){return 2*Math.PI/60/60*t.autoRotateSpeed}function et(){return Math.pow(.95,t.zoomSpeed)}function mt(e){t.reverseOrbit||t.reverseHorizontalOrbit?b.theta+=e:b.theta-=e}function Et(e){t.reverseOrbit||t.reverseVerticalOrbit?b.phi+=e:b.phi-=e}const xt=(()=>{const e=new h;return function(w,S){e.setFromMatrixColumn(S,0),e.multiplyScalar(-w),H.add(e)}})(),Pt=(()=>{const e=new h;return function(w,S){t.screenSpacePanning===!0?e.setFromMatrixColumn(S,1):(e.setFromMatrixColumn(S,0),e.crossVectors(t.object.up,e)),e.multiplyScalar(w),H.add(e)}})(),st=(()=>{const e=new h;return function(w,S){const X=t.domElement;if(X&&t.object instanceof Vt&&t.object.isPerspectiveCamera){const it=t.object.position;e.copy(it).sub(t.target);let at=e.length();at*=Math.tan(t.object.fov/2*Math.PI/180),xt(2*w*at/X.clientHeight,t.object.matrix),Pt(2*S*at/X.clientHeight,t.object.matrix)}else X&&t.object instanceof Qt&&t.object.isOrthographicCamera?(xt(w*(t.object.right-t.object.left)/t.object.zoom/X.clientWidth,t.object.matrix),Pt(S*(t.object.top-t.object.bottom)/t.object.zoom/X.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}})();function B(e){t.object instanceof Vt&&t.object.isPerspectiveCamera||t.object instanceof Qt&&t.object.isOrthographicCamera?L=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function Y(e){B(L/e)}function x(e){B(L*e)}function I(e){if(!t.zoomToCursor||!t.domElement)return;W=!0;const c=t.domElement.getBoundingClientRect(),w=e.clientX-c.left,S=e.clientY-c.top,X=c.width,it=c.height;j.x=w/X*2-1,j.y=-(S/it)*2+1,v.set(j.x,j.y,1).unproject(t.object).sub(t.object.position).normalize()}function Q(e){return Math.max(t.minDistance,Math.min(t.maxDistance,e))}function o(e){N.set(e.clientX,e.clientY)}function G(e){I(e),_.set(e.clientX,e.clientY)}function q(e){A.set(e.clientX,e.clientY)}function rt(e){P.set(e.clientX,e.clientY),D.subVectors(P,N).multiplyScalar(t.rotateSpeed);const c=t.domElement;c&&(mt(2*Math.PI*D.x/c.clientHeight),Et(2*Math.PI*D.y/c.clientHeight)),N.copy(P),t.update()}function Mt(e){C.set(e.clientX,e.clientY),z.subVectors(C,_),z.y>0?Y(et()):z.y<0&&x(et()),_.copy(C),t.update()}function At(e){O.set(e.clientX,e.clientY),T.subVectors(O,A).multiplyScalar(t.panSpeed),st(T.x,T.y),A.copy(O),t.update()}function Ee(e){I(e),e.deltaY<0?x(et()):e.deltaY>0&&Y(et()),t.update()}function xe(e){let c=!1;switch(e.code){case t.keys.UP:st(0,t.keyPanSpeed),c=!0;break;case t.keys.BOTTOM:st(0,-t.keyPanSpeed),c=!0;break;case t.keys.LEFT:st(t.keyPanSpeed,0),c=!0;break;case t.keys.RIGHT:st(-t.keyPanSpeed,0),c=!0;break}c&&(e.preventDefault(),t.update())}function Wt(){if(g.length==1)N.set(g[0].pageX,g[0].pageY);else{const e=.5*(g[0].pageX+g[1].pageX),c=.5*(g[0].pageY+g[1].pageY);N.set(e,c)}}function Gt(){if(g.length==1)A.set(g[0].pageX,g[0].pageY);else{const e=.5*(g[0].pageX+g[1].pageX),c=.5*(g[0].pageY+g[1].pageY);A.set(e,c)}}function qt(){const e=g[0].pageX-g[1].pageX,c=g[0].pageY-g[1].pageY,w=Math.sqrt(e*e+c*c);_.set(0,w)}function Pe(){t.enableZoom&&qt(),t.enablePan&&Gt()}function Me(){t.enableZoom&&qt(),t.enableRotate&&Wt()}function Kt(e){if(g.length==1)P.set(e.pageX,e.pageY);else{const w=Xt(e),S=.5*(e.pageX+w.x),X=.5*(e.pageY+w.y);P.set(S,X)}D.subVectors(P,N).multiplyScalar(t.rotateSpeed);const c=t.domElement;c&&(mt(2*Math.PI*D.x/c.clientHeight),Et(2*Math.PI*D.y/c.clientHeight)),N.copy(P)}function $t(e){if(g.length==1)O.set(e.pageX,e.pageY);else{const c=Xt(e),w=.5*(e.pageX+c.x),S=.5*(e.pageY+c.y);O.set(w,S)}T.subVectors(O,A).multiplyScalar(t.panSpeed),st(T.x,T.y),A.copy(O)}function Jt(e){const c=Xt(e),w=e.pageX-c.x,S=e.pageY-c.y,X=Math.sqrt(w*w+S*S);C.set(0,X),z.set(0,Math.pow(C.y/_.y,t.zoomSpeed)),Y(z.y),_.copy(C)}function Ae(e){t.enableZoom&&Jt(e),t.enablePan&&$t(e)}function _e(e){t.enableZoom&&Jt(e),t.enableRotate&&Kt(e)}function te(e){var c,w;t.enabled!==!1&&(g.length===0&&((c=t.domElement)==null||c.ownerDocument.addEventListener("pointermove",Yt),(w=t.domElement)==null||w.ownerDocument.addEventListener("pointerup",wt)),De(e),e.pointerType==="touch"?Te(e):Le(e))}function Yt(e){t.enabled!==!1&&(e.pointerType==="touch"?Ie(e):Oe(e))}function wt(e){var c,w,S;ze(e),g.length===0&&((c=t.domElement)==null||c.releasePointerCapture(e.pointerId),(w=t.domElement)==null||w.ownerDocument.removeEventListener("pointermove",Yt),(S=t.domElement)==null||S.ownerDocument.removeEventListener("pointerup",wt)),t.dispatchEvent(d),u=r.NONE}function Le(e){let c;switch(e.button){case 0:c=t.mouseButtons.LEFT;break;case 1:c=t.mouseButtons.MIDDLE;break;case 2:c=t.mouseButtons.RIGHT;break;default:c=-1}switch(c){case dt.DOLLY:if(t.enableZoom===!1)return;G(e),u=r.DOLLY;break;case dt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(t.enablePan===!1)return;q(e),u=r.PAN}else{if(t.enableRotate===!1)return;o(e),u=r.ROTATE}break;case dt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(t.enableRotate===!1)return;o(e),u=r.ROTATE}else{if(t.enablePan===!1)return;q(e),u=r.PAN}break;default:u=r.NONE}u!==r.NONE&&t.dispatchEvent(a)}function Oe(e){if(t.enabled!==!1)switch(u){case r.ROTATE:if(t.enableRotate===!1)return;rt(e);break;case r.DOLLY:if(t.enableZoom===!1)return;Mt(e);break;case r.PAN:if(t.enablePan===!1)return;At(e);break}}function ee(e){t.enabled===!1||t.enableZoom===!1||u!==r.NONE&&u!==r.ROTATE||(e.preventDefault(),t.dispatchEvent(a),Ee(e),t.dispatchEvent(d))}function Ct(e){t.enabled===!1||t.enablePan===!1||xe(e)}function Te(e){switch(ne(e),g.length){case 1:switch(t.touches.ONE){case pt.ROTATE:if(t.enableRotate===!1)return;Wt(),u=r.TOUCH_ROTATE;break;case pt.PAN:if(t.enablePan===!1)return;Gt(),u=r.TOUCH_PAN;break;default:u=r.NONE}break;case 2:switch(t.touches.TWO){case pt.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Pe(),u=r.TOUCH_DOLLY_PAN;break;case pt.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;Me(),u=r.TOUCH_DOLLY_ROTATE;break;default:u=r.NONE}break;default:u=r.NONE}u!==r.NONE&&t.dispatchEvent(a)}function Ie(e){switch(ne(e),u){case r.TOUCH_ROTATE:if(t.enableRotate===!1)return;Kt(e),t.update();break;case r.TOUCH_PAN:if(t.enablePan===!1)return;$t(e),t.update();break;case r.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Ae(e),t.update();break;case r.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;_e(e),t.update();break;default:u=r.NONE}}function ie(e){t.enabled!==!1&&e.preventDefault()}function De(e){g.push(e)}function ze(e){delete tt[e.pointerId];for(let c=0;c<g.length;c++)if(g[c].pointerId==e.pointerId){g.splice(c,1);return}}function ne(e){let c=tt[e.pointerId];c===void 0&&(c=new k,tt[e.pointerId]=c),c.set(e.pageX,e.pageY)}function Xt(e){const c=e.pointerId===g[0].pointerId?g[1]:g[0];return tt[c.pointerId]}this.dollyIn=(e=et())=>{x(e),t.update()},this.dollyOut=(e=et())=>{Y(e),t.update()},this.getScale=()=>L,this.setScale=e=>{B(e),t.update()},this.getZoomScale=()=>et(),l!==void 0&&this.connect(l),this.update()}}const he=new Ft,It=new h;class ve extends Ue{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const i=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],l=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],t=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(t),this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(l,2))}applyMatrix4(i){const l=this.attributes.instanceStart,t=this.attributes.instanceEnd;return l!==void 0&&(l.applyMatrix4(i),t.applyMatrix4(i),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(i){let l;i instanceof Float32Array?l=i:Array.isArray(i)&&(l=new Float32Array(i));const t=new Bt(l,6,1);return this.setAttribute("instanceStart",new ft(t,3,0)),this.setAttribute("instanceEnd",new ft(t,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(i,l=3){let t;i instanceof Float32Array?t=i:Array.isArray(i)&&(t=new Float32Array(i));const n=new Bt(t,l*2,1);return this.setAttribute("instanceColorStart",new ft(n,l,0)),this.setAttribute("instanceColorEnd",new ft(n,l,l)),this}fromWireframeGeometry(i){return this.setPositions(i.attributes.position.array),this}fromEdgesGeometry(i){return this.setPositions(i.attributes.position.array),this}fromMesh(i){return this.fromWireframeGeometry(new Ne(i.geometry)),this}fromLineSegments(i){const l=i.geometry;return this.setPositions(l.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const i=this.attributes.instanceStart,l=this.attributes.instanceEnd;i!==void 0&&l!==void 0&&(this.boundingBox.setFromBufferAttribute(i),he.setFromBufferAttribute(l),this.boundingBox.union(he))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ye),this.boundingBox===null&&this.computeBoundingBox();const i=this.attributes.instanceStart,l=this.attributes.instanceEnd;if(i!==void 0&&l!==void 0){const t=this.boundingSphere.center;this.boundingBox.getCenter(t);let n=0;for(let a=0,d=i.count;a<d;a++)It.fromBufferAttribute(i,a),n=Math.max(n,t.distanceToSquared(It)),It.fromBufferAttribute(l,a),n=Math.max(n,t.distanceToSquared(It));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(i){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(i)}}class oi extends ve{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(i){const l=i.length-3,t=new Float32Array(2*l);for(let n=0;n<l;n+=3)t[2*n]=i[n],t[2*n+1]=i[n+1],t[2*n+2]=i[n+2],t[2*n+3]=i[n+3],t[2*n+4]=i[n+4],t[2*n+5]=i[n+5];return super.setPositions(t),this}setColors(i,l=3){const t=i.length-l,n=new Float32Array(2*t);if(l===3)for(let a=0;a<t;a+=l)n[2*a]=i[a],n[2*a+1]=i[a+1],n[2*a+2]=i[a+2],n[2*a+3]=i[a+3],n[2*a+4]=i[a+4],n[2*a+5]=i[a+5];else for(let a=0;a<t;a+=l)n[2*a]=i[a],n[2*a+1]=i[a+1],n[2*a+2]=i[a+2],n[2*a+3]=i[a+3],n[2*a+4]=i[a+4],n[2*a+5]=i[a+5],n[2*a+6]=i[a+6],n[2*a+7]=i[a+7];return super.setColors(n,l),this}fromLine(i){const l=i.geometry;return this.setPositions(l.attributes.position.array),this}}class Se extends He{constructor(i){super({type:"LineMaterial",uniforms:ae.clone(ae.merge([re.common,re.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new k(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${be>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(l){this.uniforms.diffuse.value=l}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(l){l===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(l){this.uniforms.linewidth.value=l}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(l){!!l!="USE_DASH"in this.defines&&(this.needsUpdate=!0),l===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(l){this.uniforms.dashScale.value=l}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(l){this.uniforms.dashSize.value=l}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(l){this.uniforms.dashOffset.value=l}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(l){this.uniforms.gapSize.value=l}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(l){this.uniforms.opacity.value=l}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(l){this.uniforms.resolution.value.copy(l)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(l){!!l!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),l===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(i)}}const Zt=new St,ue=new h,de=new h,V=new St,Z=new St,K=new St,Ut=new h,Nt=new kt,U=new Be,pe=new h,Dt=new Ft,zt=new ye,$=new St;let J,ut;function fe(y,i,l){return $.set(0,0,-i,1).applyMatrix4(y.projectionMatrix),$.multiplyScalar(1/$.w),$.x=ut/l.width,$.y=ut/l.height,$.applyMatrix4(y.projectionMatrixInverse),$.multiplyScalar(1/$.w),Math.abs(Math.max($.x,$.y))}function si(y,i){const l=y.matrixWorld,t=y.geometry,n=t.attributes.instanceStart,a=t.attributes.instanceEnd,d=Math.min(t.instanceCount,n.count);for(let r=0,u=d;r<u;r++){U.start.fromBufferAttribute(n,r),U.end.fromBufferAttribute(a,r),U.applyMatrix4(l);const M=new h,p=new h;J.distanceSqToSegment(U.start,U.end,p,M),p.distanceTo(M)<ut*.5&&i.push({point:p,pointOnLine:M,distance:J.origin.distanceTo(p),object:y,face:null,faceIndex:r,uv:null,[ge]:null})}}function ai(y,i,l){const t=i.projectionMatrix,a=y.material.resolution,d=y.matrixWorld,r=y.geometry,u=r.attributes.instanceStart,M=r.attributes.instanceEnd,p=Math.min(r.instanceCount,u.count),b=-i.near;J.at(1,K),K.w=1,K.applyMatrix4(i.matrixWorldInverse),K.applyMatrix4(t),K.multiplyScalar(1/K.w),K.x*=a.x/2,K.y*=a.y/2,K.z=0,Ut.copy(K),Nt.multiplyMatrices(i.matrixWorldInverse,d);for(let L=0,H=p;L<H;L++){if(V.fromBufferAttribute(u,L),Z.fromBufferAttribute(M,L),V.w=1,Z.w=1,V.applyMatrix4(Nt),Z.applyMatrix4(Nt),V.z>b&&Z.z>b)continue;if(V.z>b){const T=V.z-Z.z,_=(V.z-b)/T;V.lerp(Z,_)}else if(Z.z>b){const T=Z.z-V.z,_=(Z.z-b)/T;Z.lerp(V,_)}V.applyMatrix4(t),Z.applyMatrix4(t),V.multiplyScalar(1/V.w),Z.multiplyScalar(1/Z.w),V.x*=a.x/2,V.y*=a.y/2,Z.x*=a.x/2,Z.y*=a.y/2,U.start.copy(V),U.start.z=0,U.end.copy(Z),U.end.z=0;const P=U.closestPointToPointParameter(Ut,!0);U.at(P,pe);const D=ke.lerp(V.z,Z.z,P),A=D>=-1&&D<=1,O=Ut.distanceTo(pe)<ut*.5;if(A&&O){U.start.fromBufferAttribute(u,L),U.end.fromBufferAttribute(M,L),U.start.applyMatrix4(d),U.end.applyMatrix4(d);const T=new h,_=new h;J.distanceSqToSegment(U.start,U.end,_,T),l.push({point:_,pointOnLine:T,distance:J.origin.distanceTo(_),object:y,face:null,faceIndex:L,uv:null,[ge]:null})}}}class ri extends m{constructor(i=new ve,l=new Se({color:Math.random()*16777215})){super(i,l),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const i=this.geometry,l=i.attributes.instanceStart,t=i.attributes.instanceEnd,n=new Float32Array(2*l.count);for(let d=0,r=0,u=l.count;d<u;d++,r+=2)ue.fromBufferAttribute(l,d),de.fromBufferAttribute(t,d),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ue.distanceTo(de);const a=new Bt(n,2,1);return i.setAttribute("instanceDistanceStart",new ft(a,1,0)),i.setAttribute("instanceDistanceEnd",new ft(a,1,1)),this}raycast(i,l){const t=this.material.worldUnits,n=i.camera;n===null&&!t&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=i.params.Line2!==void 0&&i.params.Line2.threshold||0;J=i.ray;const d=this.matrixWorld,r=this.geometry,u=this.material;ut=u.linewidth+a,r.boundingSphere===null&&r.computeBoundingSphere(),zt.copy(r.boundingSphere).applyMatrix4(d);let M;if(t)M=ut*.5;else{const b=Math.max(n.near,zt.distanceToPoint(J.origin));M=fe(n,b,u.resolution)}if(zt.radius+=M,J.intersectsSphere(zt)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),Dt.copy(r.boundingBox).applyMatrix4(d);let p;if(t)p=ut*.5;else{const b=Math.max(n.near,Dt.distanceToPoint(J.origin));p=fe(n,b,u.resolution)}Dt.expandByScalar(p),J.intersectsBox(Dt)!==!1&&(t?si(this,l):ai(this,n,l))}onBeforeRender(i){const l=this.material.uniforms;l&&l.resolution&&(i.getViewport(Zt),this.material.uniforms.resolution.value.set(Zt.z,Zt.w))}}class pi extends ri{constructor(i=new oi,l=new Se({color:Math.random()*16777215})){super(i,l),this.isLine2=!0,this.type="Line2"}}export{ri as L,di as O,ui as T,pi as a,Se as b,ve as c,oi as d,hi as t};
