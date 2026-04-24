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

const CX = W/2 ;
const CY = H/2 - 20;

let t = 0;
let frame:number;

/* fixed first lavender palette only */
const bands = [
[190,130,255],
[140,80,230],
[100,50,200],
[220,150,255],
[160,100,240]
];

const shadowColor = [80,50,160];

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

const x=
cx+
Math.cos(th)*r;

const y=
cy+
Math.sin(th)*r;

if(i===0)
ctx.moveTo(x,y);
else
ctx.lineTo(x,y);
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

const R=
140*
(1+Math.sin(time)*pulse);


/* shadow */
const shadow=
ctx.createRadialGradient(
CX,
CY+R*.88,
0,
CX,
CY+R*.88,
R*.85
);

shadow.addColorStop(
0,
`rgba(${shadowColor[0]},${shadowColor[1]},${shadowColor[2]},.32)`
);

shadow.addColorStop(
1,
"rgba(0,0,0,0)"
);

ctx.save();
ctx.scale(1,.28);

ctx.fillStyle=shadow;

ctx.beginPath();

ctx.arc(
CX,
(CY+R*.88)/.28,
R*.85,
0,
Math.PI*2
);

ctx.fill();
ctx.restore();


/* base sphere */
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
base.addColorStop(.35,"rgba(240,232,255,1)");
base.addColorStop(.75,"rgba(215,200,250,1)");
base.addColorStop(1,"rgba(170,150,230,1)");

ctx.beginPath();
ctx.arc(CX,CY,R,0,Math.PI*2);

ctx.fillStyle=base;
ctx.fill();


/* internal blobs */
for(let i=0;i<5;i++){

const frac=i/5;
const seed=i*1.618;

const bR=
R*(0.72-frac*.4);

const dx=
CX+
Math.sin(
time*.28+seed
)*R*chaos*.3;

const dy=
CY+
Math.cos(
time*.22+seed
)*R*chaos*.22;

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