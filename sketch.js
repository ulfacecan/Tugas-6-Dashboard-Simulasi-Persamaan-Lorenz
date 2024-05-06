let t = [];
// Variabel tak bebas
let P1 = [];
let P2 = [];
// Parameter model
let a;
let b;
let c;
let d;
// Kondisi awal
let P10;
let P20;

let tMax = 300;
let dt = 0.1;

let grafik

function setup() {
  createCanvas(400, 400);
  P10 = createInput("20");
  P10.position(20,410);
  P20 = createInput("40");
  P20.position(200,410);
  a = createSlider(0.1, 2, 0.4, 0.01); //min, max, value, step
  a.position(20,460);
  b = createSlider(0, 0.1, 0.05, 0.01); //min, max, value, step
  b.position(170,460);
  c = createSlider(0, 1, 0.1, 0.01); //min, max, value, step
  c.position(320,460);
  d = createSlider(0, 2, 0.5, 0.01); //min, max, value, step
  d.position(480,460);
  
  let p = createP('Kondisi awal');
  p.style('font-size', '14px');
  p.position(20, 380);  
  let q = createP('Parameter a');
  q.style('font-size', '14px');
  q.position(20, 430);
  let r = createP('Parameter b');
  r.style('font-size', '14px');
  r.position(170, 430);
  let s = createP('Parameter c');
  s.style('font-size', '14px');
  s.position(320, 430);
  let t = createP('Parameter d');
  t.style('font-size', '14px');
  t.position(480, 430);
  
  solve(); 
  grafik = new Chart(this, config);  
  P10.changed(solve); // ketika nilainya berganti panggil fungsi solve
  P20.changed(solve);
  a.changed(solve);
  b.changed(solve);
  c.changed(solve);
  d.changed(solve);
}
function draw() {
  grafik.update()
}
function solve(){
  P1[0] = float(P10.value());
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  br = float(b.value());
  ct = float(c.value());
  dp = float(d.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt*as*P1[i]       -  dt*br*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt*ct*P1[i+1]*P2[i] -  dt*dp*P2[i];
    t[i+1] = round((i+1)*dt,3);
  }
}
