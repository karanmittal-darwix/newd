// "use client";

// import { useEffect, useRef } from "react";

// export default function AgentOrb() {
// const canvasRef = useRef<HTMLCanvasElement>(null);

// useEffect(() => {
// const canvas = canvasRef.current;
// if (!canvas) return;

// const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
// if (!ctx) return;

// const W = 400;
// const H = 400;

// canvas.width = W;
// canvas.height = H;

// const CX = W/2;
// const CY = H/2 - 30;

// let t = 0;
// let frame:number;

// const bands = [
// [255,255,255],
// [245,245,255],
// [230,235,255],
// [250,250,255],
// [220,225,245]
// ];

// const shadowColor = [55,35,120];

// function blobR(
// theta:number,
// time:number,
// seed:number,
// amt:number
// ){
// return 1
// +Math.sin(theta*2+time*.7+seed)*amt*.5
// +Math.sin(theta*3-time*1.1+seed*1.4)*amt*.35
// +Math.sin(theta*5+time*.4+seed*2.1)*amt*.2
// +Math.cos(theta*4-time*.9+seed*.8)*amt*.15;
// }

// function drawBlob(
// cx:number,
// cy:number,
// baseR:number,
// color:number[],
// alpha:number,
// time:number,
// seed:number,
// amt:number,
// clipR:number
// ){
// ctx.save();

// ctx.beginPath();
// ctx.arc(CX,CY,clipR,0,Math.PI*2);
// ctx.clip();

// ctx.beginPath();

// for(let i=0;i<=90;i++){
// const th=i/90*Math.PI*2;

// const r=
// baseR*
// blobR(th,time,seed,amt);

// const x=cx+Math.cos(th)*r;
// const y=cy+Math.sin(th)*r;

// if(i===0) ctx.moveTo(x,y);
// else ctx.lineTo(x,y);
// }

// ctx.closePath();

// const g=ctx.createRadialGradient(
// cx-baseR*.2,
// cy-baseR*.2,
// 0,
// cx,
// cy,
// baseR*1.1
// );

// g.addColorStop(
// 0,
// `rgba(${color[0]},${color[1]},${color[2]},${alpha})`
// );

// g.addColorStop(
// .55,
// `rgba(${color[0]*.7|0},${color[1]*.7|0},${color[2]*.7|0},${alpha*.5})`
// );

// g.addColorStop(
// 1,
// `rgba(${color[0]*.2|0},${color[1]*.2|0},${color[2]*.2|0},0)`
// );

// ctx.fillStyle=g;
// ctx.fill();

// ctx.restore();
// }

// function draw(time:number){

// ctx.clearRect(0,0,W,H);

// const pulse=.08;
// const chaos=.45;
// const frost=.22;

// const R=140*(1+Math.sin(time)*pulse);


// /* stronger 3D floating shadow */
// const shadow=
// ctx.createRadialGradient(
// CX,
// CY+R*1.02,
// 0,
// CX,
// CY+R*1.02,
// R*1.8
// );

// shadow.addColorStop(0,"rgba(245,248,255,.18)");
// shadow.addColorStop(.35,"rgba(235,240,255,.10)");
// shadow.addColorStop(.75,"rgba(220,225,255,.04)");

// ctx.save();

// /* slightly wider ellipse */
// ctx.scale(1,.20);

// ctx.fillStyle=shadow;

// ctx.beginPath();

// ctx.arc(
// CX,
// (CY+R*1.02)/.20,
// R*1.08,
// 0,
// Math.PI*2
// );

// ctx.fill();


// /* darker contact core */
// ctx.beginPath();
// ctx.fillStyle="rgba(166, 155, 173, 0.24)";

// ctx.arc(
// CX,
// (CY+R*1.02)/.20,
// R*.58,
// 0,
// Math.PI*2
// );

// ctx.fill();

// ctx.restore();


// /* base sphere */
// const base=
// ctx.createRadialGradient(
// CX-R*.3,
// CY-R*.35,
// R*.05,
// CX,
// CY,
// R
// );

// base.addColorStop(0,"white");
// base.addColorStop(.35,"rgba(235,236,255,1)");
// base.addColorStop(.75,"rgba(185,190,255,1)");
// base.addColorStop(1,"rgba(118,110,235,1)");

// ctx.beginPath();
// ctx.arc(CX,CY,R,0,Math.PI*2);

// ctx.fillStyle=base;
// ctx.fill();


// for(let i=0;i<5;i++){

// const frac=i/5;
// const seed=i*1.618;

// const bR=
// R*(0.72-frac*.4);

// const dx=
// CX+
// Math.sin(time*.28+seed)*R*chaos*.3;

// const dy=
// CY+
// Math.cos(time*.22+seed)*R*chaos*.22;

// drawBlob(
// dx,
// dy,
// bR,
// bands[i],
// .5,
// time,
// seed,
// chaos*.5,
// R*.97
// );

// }


// const frostG=
// ctx.createRadialGradient(
// CX-R*.15,
// CY-R*.1,
// R*.1,
// CX,
// CY,
// R
// );

// frostG.addColorStop(
// 0,
// `rgba(255,255,255,${frost})`
// );

// frostG.addColorStop(
// 1,
// "rgba(220,210,255,.08)"
// );

// ctx.save();

// ctx.beginPath();
// ctx.arc(CX,CY,R,0,Math.PI*2);
// ctx.clip();

// ctx.fillStyle=frostG;

// ctx.fillRect(
// CX-R,
// CY-R,
// R*2,
// R*2
// );

// ctx.restore();


// ctx.beginPath();

// ctx.arc(
// CX,
// CY,
// R,
// 0,
// Math.PI*2
// );

// /* blurred boundary glow */
// const edgeBlur = ctx.createRadialGradient(
// CX,
// CY,
// R*.88,
// CX,
// CY,
// R*1.08
// );

// edgeBlur.addColorStop(
// 0,
// "rgba(255,255,255,0)"
// );

// edgeBlur.addColorStop(
// 0.6,
// "rgba(190,195,255,.10)"
// );

// edgeBlur.addColorStop(
// 0.82,
// "rgba(165,170,255,.18)"
// );

// edgeBlur.addColorStop(
// 1,
// "rgba(150,155,255,0)"
// );

// ctx.beginPath();
// ctx.arc(
// CX,
// CY,
// R*1.06,
// 0,
// Math.PI*2
// );

// ctx.fillStyle=edgeBlur;
// ctx.fill();

// ctx.strokeStyle=
// "rgba(255,255,255,.72)";

// ctx.lineWidth=2.5;

// ctx.stroke();


// const h=
// ctx.createRadialGradient(
// CX-R*.32,
// CY-R*.38,
// 0,
// CX-R*.32,
// CY-R*.38,
// R*.42
// );

// h.addColorStop(
// 0,
// "rgba(255,255,255,.9)"
// );

// h.addColorStop(
// 1,
// "rgba(255,255,255,0)"
// );

// ctx.save();

// ctx.beginPath();
// ctx.arc(CX,CY,R,0,Math.PI*2);
// ctx.clip();

// ctx.fillStyle=h;

// ctx.fillRect(
// CX-R,
// CY-R,
// R*2,
// R*2
// );

// ctx.restore();
// }

// function animate(){
// t+=0.016*0.8;
// draw(t);
// frame=requestAnimationFrame(animate);
// }

// animate();

// return ()=>{
// cancelAnimationFrame(frame);
// };

// },[]);

// return (
// <div className="flex justify-center">
// <canvas
// ref={canvasRef}
// className="w-full max-w-[240px]"
// />
// </div>
// );
// }

"use client";

import { useEffect, useRef } from "react";

export default function AgentOrb() {
const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
if (!ctx) return;

const W = 400;
const H = 400;

canvas.width = W;
canvas.height = H;

const CX = W/2;
const CY = H/2 ;

let t = 0;
let frame:number;

const bands = [
[255,255,255],
[245,245,255],
[230,235,255],
[250,250,255],
[220,225,245]
];

function blobR(
theta:number,
time:number,
seed:number,
amt:number
){
return 1
+Math.sin(theta*2+time*.7+seed)*amt*.5
+Math.sin(theta*3-time*1.1+seed*1.4)*amt*.35
+Math.sin(theta*5+time*.4+seed*2.1)*amt*.2
+Math.cos(theta*4-time*.9+seed*.8)*amt*.15;
}

function drawBlob(
cx:number,
cy:number,
baseR:number,
color:number[],
alpha:number,
time:number,
seed:number,
amt:number,
clipR:number
){
ctx.save();

ctx.beginPath();
ctx.arc(CX,CY,clipR,0,Math.PI*2);
ctx.clip();

ctx.beginPath();

for(let i=0;i<=90;i++){
const th=i/90*Math.PI*2;

const r=
baseR*
blobR(th,time,seed,amt);

const x=cx+Math.cos(th)*r;
const y=cy+Math.sin(th)*r;

if(i===0) ctx.moveTo(x,y);
else ctx.lineTo(x,y);
}

ctx.closePath();

const g=ctx.createRadialGradient(
cx-baseR*.2,
cy-baseR*.2,
0,
cx,
cy,
baseR*1.1
);

g.addColorStop(
0,
`rgba(${color[0]},${color[1]},${color[2]},${alpha})`
);

g.addColorStop(
.55,
`rgba(${color[0]*.7|0},${color[1]*.7|0},${color[2]*.7|0},${alpha*.5})`
);

g.addColorStop(
1,
`rgba(${color[0]*.2|0},${color[1]*.2|0},${color[2]*.2|0},0)`
);

ctx.fillStyle=g;
ctx.fill();

ctx.restore();
}

function draw(time:number){

ctx.clearRect(0,0,W,H);

const pulse=.08;
const chaos=.45;
const frost=.22;

const R=140*(1+Math.sin(time)*pulse);


/* floating shadow */
const shadow=
ctx.createRadialGradient(
CX,
CY+R*1.02,
0,
CX,
CY+R*1.02,
R*1.8
);

shadow.addColorStop(0,"rgba(245,248,255,.18)");
shadow.addColorStop(.35,"rgba(235,240,255,.10)");
shadow.addColorStop(.75,"rgba(220,225,255,.04)");

ctx.save();
ctx.scale(1,.20);

ctx.fillStyle=shadow;

ctx.beginPath();
ctx.arc(
CX,
(CY+R*1.02)/.20,
R*1.08,
0,
Math.PI*2
);

ctx.fill();

ctx.beginPath();
ctx.fillStyle="rgba(166,155,173,.24)";

ctx.arc(
CX,
(CY+R*1.02)/.20,
R*.58,
0,
Math.PI*2
);

ctx.fill();

ctx.restore();


/* sphere */
const base=
ctx.createRadialGradient(
CX-R*.3,
CY-R*.35,
R*.05,
CX,
CY,
R
);

base.addColorStop(0,"white");
base.addColorStop(.35,"rgba(235,236,255,1)");
base.addColorStop(.75,"rgba(185,190,255,1)");
base.addColorStop(1,"rgba(118,110,235,1)");

ctx.beginPath();
ctx.arc(CX,CY,R,0,Math.PI*2);

ctx.fillStyle=base;
ctx.fill();


/* inner blobs */
for(let i=0;i<5;i++){

const frac=i/5;
const seed=i*1.618;

const bR=
R*(0.72-frac*.4);

const dx=
CX+
Math.sin(time*.28+seed)*R*chaos*.3;

const dy=
CY+
Math.cos(time*.22+seed)*R*chaos*.22;

drawBlob(
dx,
dy,
bR,
bands[i],
.5,
time,
seed,
chaos*.5,
R*.97
);

}


/* frosted layer */
const frostG=
ctx.createRadialGradient(
CX-R*.15,
CY-R*.1,
R*.1,
CX,
CY,
R
);

frostG.addColorStop(
0,
`rgba(255,255,255,${frost})`
);

frostG.addColorStop(
1,
"rgba(220,210,255,.08)"
);

ctx.save();

ctx.beginPath();
ctx.arc(CX,CY,R,0,Math.PI*2);
ctx.clip();

ctx.fillStyle=frostG;

ctx.fillRect(
CX-R,
CY-R,
R*2,
R*2
);

ctx.restore();



/* ===== visible blurred boundary ===== */
// ctx.save();

// /* glow ring 1 */
// ctx.filter="blur(50px)";

// ctx.beginPath();
// ctx.arc(
// CX,
// CY,
// R*1.015,
// 0,
// Math.PI*2
// );

// ctx.lineWidth = 14;
// ctx.strokeStyle = "rgba(170,180,255,.32)";
// ctx.stroke();


// /* glow ring 2 */
// ctx.filter="blur(24px)";

// ctx.beginPath();
// ctx.arc(
// CX,
// CY,
// R*1.03,
// 0,
// Math.PI*2
// );

// ctx.lineWidth = 10;
// ctx.strokeStyle = "rgba(120,130,255,.18)";
// ctx.stroke();

// ctx.filter="none";
// ctx.restore();
/* ===== end blur boundary ===== */

/* ===== stronger blurred boundary ===== */
ctx.save();

/* inner glow ring */
ctx.filter="blur(18px)";
ctx.beginPath();
ctx.arc(
CX,
CY,
R*1.015,
0,
Math.PI*2
);
ctx.lineWidth = 18;
ctx.strokeStyle = "rgba(185,195,255,.42)";
ctx.stroke();


/* mid fog ring */
ctx.filter="blur(30px)";
ctx.beginPath();
ctx.arc(
CX,
CY,
R*1.04,
0,
Math.PI*2
);
ctx.lineWidth = 16;
ctx.strokeStyle = "rgba(145,155,255,.30)";
ctx.stroke();


/* outer atmospheric haze */
ctx.filter="blur(42px)";
ctx.beginPath();
ctx.arc(
CX,
CY,
R*1.075,
0,
Math.PI*2
);
ctx.lineWidth = 18;
ctx.strokeStyle = "rgba(120,130,255,.18)";
ctx.stroke();

ctx.filter="none";
ctx.restore();
/* ===== end blur boundary ===== */



/* glass rim */
ctx.beginPath();

ctx.arc(
CX,
CY,
R,
0,
Math.PI*2
);

ctx.strokeStyle=
"rgba(255,255,255,.72)";

ctx.lineWidth=2.5;
ctx.stroke();



/* highlight */
const h=
ctx.createRadialGradient(
CX-R*.32,
CY-R*.38,
0,
CX-R*.32,
CY-R*.38,
R*.42
);

h.addColorStop(
0,
"rgba(255,255,255,.9)"
);

h.addColorStop(
1,
"rgba(255,255,255,0)"
);

ctx.save();

ctx.beginPath();
ctx.arc(CX,CY,R,0,Math.PI*2);
ctx.clip();

ctx.fillStyle=h;

ctx.fillRect(
CX-R,
CY-R,
R*2,
R*2
);

ctx.restore();
}

function animate(){
t+=0.016*0.8;
draw(t);
frame=requestAnimationFrame(animate);
}

animate();

return ()=>{
cancelAnimationFrame(frame);
};

},[]);

return (
<div className="flex justify-center">
<canvas
ref={canvasRef}
className="w-full max-w-[240px]"
/>
</div>
);
}
