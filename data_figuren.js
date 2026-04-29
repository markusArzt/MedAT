// MedAT Trainer – Figuren zusammensetzen
// Jede Aufgabe hat:
//   correct: "A"|"B"|"C"|"D"|"E"
//   parts(ctx, w, h): zeichnet Einzelteile
//   opts: { A, B, C, D }: je eine Zeichenfunktion

const figurenAufgaben = [
            // 1 – Zwei rechtwinklige Dreiecke → Rechteck (Lsg aus PDF: d)
            { correct: 'D',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[15,15],[w/2-10,h-15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+10,15],[w-15,15],[w-15,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2,h/2-35],[w/2+35,h/2],[w/2,h/2+35],[w/2-35,h/2]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,35,FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-30,80,60,FZ_F,FZ_S),
              }
            },
            // 2 – Dreieck + Dreieck (gespiegelt) → Raute (Lsg: d)
            { correct: 'D',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h/2],[w/2-10,15],[w/2-10,h-15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+10,15],[w/2+10,h-15],[w-15,h/2]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-30,80,60,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,35,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38],[w/2-38,h/2]],FZ_F,FZ_S),
              }
            },
            // 3 – Zwei Halbkreise → Kreis (Lsg: e = kein passendes)
            { correct: 'E',
              parts(ctx,w,h) {
                  // linker Halbkreis (kleiner als rechter → nicht kombinierbar)
                  ctx.beginPath(); ctx.arc(w/4,h/2,28,Math.PI/2,3*Math.PI/2); ctx.closePath();
                  ctx.fillStyle=FZ_F; ctx.fill(); ctx.strokeStyle=FZ_S; ctx.lineWidth=1.8; ctx.stroke();
                  // rechter Halbkreis (größer)
                  ctx.beginPath(); ctx.arc(3*w/4,h/2,38,-Math.PI/2,Math.PI/2); ctx.closePath();
                  ctx.fillStyle=FZ_F; ctx.fill(); ctx.strokeStyle=FZ_S; ctx.lineWidth=1.8; ctx.stroke();
              },
              opts: {
                  A:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,28,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzRect(ctx,w/2-38,h/2-28,76,56,FZ_F,FZ_S),
                  D:(ctx,w,h)=>{ctx.beginPath();ctx.arc(w/2,h/2,33,0,2*Math.PI);ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();ctx.beginPath();ctx.moveTo(w/2-33,h/2);ctx.lineTo(w/2+33,h/2);ctx.strokeStyle=FZ_S;ctx.stroke();},
              }
            },
            // 4 – Rechteck + rechtwinkliges Dreieck → Haus (Lsg: b)
            { correct: 'B',
              parts(ctx,w,h) {
                  fzRect(ctx,15,h/2-15,75,50,FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+10,15],[w-15,h/2+10],[w/2+10,h/2+10]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-25,80,55,FZ_F,FZ_S),
                  B:(ctx,w,h)=>{fzRect(ctx,w/2-35,h/2,70,38,FZ_F,FZ_S);fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2]],FZ_F,FZ_S);},
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
              }
            },
            // 5 – Zwei Viertelkreise → Halbkreis (Lsg: a)
            { correct: 'A',
              parts(ctx,w,h) {
                  fzArc(ctx,w/4,h/2,35,-Math.PI/2,0,FZ_F,FZ_S);
                  fzArc(ctx,3*w/4,h/2,35,Math.PI,-Math.PI/2,FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>{ctx.beginPath();ctx.arc(w/2,h/2,38,Math.PI,2*Math.PI);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();},
                  B:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzRect(ctx,w/2-38,h/2-25,76,50,FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2,h/2-38],[w/2+38,h/2+25],[w/2-38,h/2+25]],FZ_F,FZ_S),
              }
            },
            // 6 – Dreieck + Rechteck → Parallelogramm (Lsg: b)
            { correct: 'B',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[15,15],[55,h-15]],FZ_F,FZ_S);
                  fzRect(ctx,65,20,w/2,h-40,FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-42,h/2-28,84,56,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-42,h/2+28],[w/2+22,h/2+28],[w/2+42,h/2-28],[w/2-22,h/2-28]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
              }
            },
            // 7 – Halbkreis + Dreieck oben → Eisschneider-Form (Lsg: c)
            { correct: 'C',
              parts(ctx,w,h) {
                  ctx.beginPath();ctx.arc(w/4,h/2+5,30,-Math.PI,0);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();
                  fzPoly(ctx,[[3*w/4-28,h-15],[3*w/4,15],[3*w/4+28,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,35,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzRect(ctx,w/2-38,h/2-28,76,56,FZ_F,FZ_S),
                  C:(ctx,w,h)=>{ctx.beginPath();ctx.arc(w/2,h/2+12,30,-Math.PI,0);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();fzPoly(ctx,[[w/2-22,h/2+12],[w/2,h/2-32],[w/2+22,h/2+12]],FZ_F,FZ_S);},
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2+25],[w/2,h/2-38],[w/2+38,h/2+25]],FZ_F,FZ_S),
              }
            },
            // 8 – Trapez + Dreieck → großes Dreieck (Lsg: a)
            { correct: 'A',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[w-15,h-15],[w*0.65,h/2],[w*0.35,h/2]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w*0.35,h/2],[w*0.65,h/2],[w/2,15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzPoly(ctx,[[15,h-15],[w-15,h-15],[w/2,15]],FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-30,80,60,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
            // 9 – L-Stück + kleines Rechteck → Großes Rechteck (Lsg: c)
            { correct: 'C',
              parts(ctx,w,h) {
                  // L-Form
                  ctx.beginPath();ctx.moveTo(15,15);ctx.lineTo(w/2-5,15);ctx.lineTo(w/2-5,h/2-5);ctx.lineTo(w/2-35,h/2-5);ctx.lineTo(w/2-35,h-15);ctx.lineTo(15,h-15);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();
                  fzRect(ctx,w/2+5,h/2-5,w/2-20,h/2+10,FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzPoly(ctx,[[w/2-40,h/2+28],[w/2,h/2-38],[w/2+40,h/2+28]],FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzRect(ctx,w/2-42,h/2-38,84,76,FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
            // 10 – Großes + kleines Dreieck → Stern-ähnlich (Lsg: d)
            { correct: 'D',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[w/2-5,15],[w/2+30,h-15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+15,15],[w-15,h/2],[w/2+15,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-30,80,60,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>{fzPoly(ctx,[[w/2-15,h/2-38],[w/2+15,h/2-38],[w/2+38,h/2],[w/2+15,h/2+38],[w/2-15,h/2+38],[w/2-38,h/2]],FZ_F,FZ_S);},
              }
            },
            // 11 – Kreis + rechtwinkliges Dreieck → Viertelkreis-Ergänzung (Lsg: c)
            { correct: 'C',
              parts(ctx,w,h) {
                  fzCircle(ctx,w/4,h/2,30,FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+10,15],[w-15,15],[w-15,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-38,h/2-35,76,70,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>{ctx.beginPath();ctx.moveTo(w/2,h/2);ctx.arc(w/2,h/2,42,0,-Math.PI/2,true);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();fzCircle(ctx,w/2-14,h/2+14,18,FZ_F,FZ_S);},
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
            // 12 – Pfeil-Teile → Pfeil rechts (Lsg: a)
            { correct: 'A',
              parts(ctx,w,h) {
                  fzRect(ctx,15,h/2-18,w/2-20,36,FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2-5,15],[w-15,h/2],[w/2-5,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>{fzPoly(ctx,[[w/2-42,h/2-18],[w/2-42,h/2+18],[w/2+10,h/2+18],[w/2+10,h/2+35],[w/2+42,h/2],[w/2+10,h/2-35],[w/2+10,h/2-18]],FZ_F,FZ_S);},
                  B:(ctx,w,h)=>fzRect(ctx,w/2-42,h/2-25,84,50,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
            // 13 – Dreieck + Halbkreis unten → Eistüte (Lsg: d)
            { correct: 'D',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h/2],[w/2,15],[w-15,h/2]],FZ_F,FZ_S);
                  ctx.beginPath();ctx.arc(w/2,3*h/4,h/4-5,0,Math.PI);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();
              },
              opts: {
                  A:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzRect(ctx,w/2-38,h/2-30,76,60,FZ_F,FZ_S),
                  D:(ctx,w,h)=>{fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-42],[w/2+38,h/2]],FZ_F,FZ_S);ctx.beginPath();ctx.arc(w/2,h/2,38,0,Math.PI);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();},
              }
            },
            // 14 – Zwei gleiche Dreiecke → Parallelogramm (Lsg: b)
            { correct: 'B',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[55,15],[w/2-5,15],[w/2-45,h-15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+10,h-15],[w/2+50,15],[w-15,15],[w-55,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-42,h/2-28,84,56,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-42,h/2+28],[w/2+18,h/2+28],[w/2+42,h/2-28],[w/2-18,h/2-28]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
              }
            },
            // 15 – Rechteck + kleines Dreieck → Rechteck mit Dreiecksecke (Lsg: b)
            { correct: 'B',
              parts(ctx,w,h) {
                  fzRect(ctx,15,20,w/2-10,h-40,FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+10,20],[w-15,h/2],[w/2+10,h-20]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-42,h/2-35,84,70,FZ_F,FZ_S),
                  B:(ctx,w,h)=>{fzPoly(ctx,[[w/2-42,h/2-35],[w/2+15,h/2-35],[w/2+42,h/2],[w/2+15,h/2+35],[w/2-42,h/2+35]],FZ_F,FZ_S);},
                  C:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
            // 16 – Drei Dreiecke → Stern (Lsg: d)
            { correct: 'D',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[w/4,15],[w/2-10,h-15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2,15],[w/2+20,h-15],[w/2+40,15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+45,h/2],[w-15,15],[w-15,h-15]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzPoly(ctx,[[w/2,15],[w-15,h-15],[15,h-15]],FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  C:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-30,80,60,FZ_F,FZ_S),
                  D:(ctx,w,h)=>{const r=38,ri=18,n=6,pts=[];for(let i=0;i<n*2;i++){const a=i*Math.PI/n-Math.PI/2,rad=i%2===0?r:ri;pts.push([w/2+rad*Math.cos(a),h/2+rad*Math.sin(a)]);}fzPoly(ctx,pts,FZ_F,FZ_S);},
              }
            },
            // 17 – Halbkreis + Rechteck → Pilz-Form (Lsg: c)
            { correct: 'C',
              parts(ctx,w,h) {
                  ctx.beginPath();ctx.arc(w/4,h/2,30,-Math.PI,0);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();
                  fzRect(ctx,w/2+10,h/2-15,w/2-25,45,FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-42,h/2-28,84,56,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2+28],[w/2,h/2-38],[w/2+38,h/2+28]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>{ctx.beginPath();ctx.arc(w/2,h/2-10,32,-Math.PI,0);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();fzRect(ctx,w/2-15,h/2+22,30,28,FZ_F,FZ_S);},
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
            // 18 – Großes Dreieck + kleines Dreieck → zusammengesetzte Form (Lsg: b)
            { correct: 'B',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h-15],[w/2-5,15],[w/2+35,h-15]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+40,15],[w-15,15],[w-15,h/2]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-30,80,60,FZ_F,FZ_S),
                  B:(ctx,w,h)=>{fzPoly(ctx,[[w/2-42,h/2+30],[w/2,h/2-40],[w/2+28,h/2-40],[w/2+42,h/2+10],[w/2+28,h/2+30]],FZ_F,FZ_S);},
                  C:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  D:(ctx,w,h)=>fzPoly(ctx,[[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38],[w/2-38,h/2]],FZ_F,FZ_S),
              }
            },
            // 19 – Zwei Kreisbögen → Linse / Mandel (Lsg: c)
            { correct: 'C',
              parts(ctx,w,h) {
                  ctx.beginPath();ctx.arc(w/4,h/2,32,-Math.PI/3,Math.PI/3);ctx.arc(w/4+20,h/2,32,Math.PI+Math.PI/3,Math.PI-Math.PI/3,true);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();
                  ctx.beginPath();ctx.arc(3*w/4,h/2,32,2*Math.PI/3,4*Math.PI/3);ctx.arc(3*w/4-20,h/2,32,Math.PI/3,-Math.PI/3,true);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();
              },
              opts: {
                  A:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-38,h/2],[w/2,h/2-38],[w/2+38,h/2],[w/2,h/2+38]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>{ctx.beginPath();ctx.arc(w/2-15,h/2,38,-Math.PI/3,Math.PI/3);ctx.arc(w/2+15,h/2,38,Math.PI+Math.PI/3,Math.PI-Math.PI/3,true);ctx.closePath();ctx.fillStyle=FZ_F;ctx.fill();ctx.strokeStyle=FZ_S;ctx.lineWidth=1.8;ctx.stroke();},
                  D:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-28,80,56,FZ_F,FZ_S),
              }
            },
            // 20 – Zwei Trapeze → Sechseck (Lsg: c)
            { correct: 'C',
              parts(ctx,w,h) {
                  fzPoly(ctx,[[15,h/2],[45,15],[w/2-10,15],[w/2+15,h/2]],FZ_F,FZ_S);
                  fzPoly(ctx,[[w/2+25,h/2],[w/2+45,h-15],[w-35,h-15],[w-15,h/2]],FZ_F,FZ_S);
              },
              opts: {
                  A:(ctx,w,h)=>fzRect(ctx,w/2-40,h/2-32,80,64,FZ_F,FZ_S),
                  B:(ctx,w,h)=>fzPoly(ctx,[[w/2-40,h/2+28],[w/2,h/2-40],[w/2+40,h/2+28]],FZ_F,FZ_S),
                  C:(ctx,w,h)=>{const r=38,pts=[];for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/6;pts.push([w/2+r*Math.cos(a),h/2+r*Math.sin(a)]);}fzPoly(ctx,pts,FZ_F,FZ_S);},
                  D:(ctx,w,h)=>fzCircle(ctx,w/2,h/2,38,FZ_F,FZ_S),
              }
            },
        ];;
