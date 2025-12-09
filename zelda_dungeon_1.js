// @title Zelda Dungeon 1 @by Nintendo (Koji Kondo)
// This is my music theory interpretation @by Atraeus

setCpm(360/4)

// Triforce
await initHydra()
shape(3, 0.1, .01)
  .rotate(Math.PI)
  .add(shape(3, 0.1, .01)
  .rotate(Math.PI).scroll(0.909, -0.16))
  .add(shape(3, 0.1, .01)
  .rotate(Math.PI).scroll(-0.909, -0.16))
  .scroll(-0.1,0)
  .scale(1.2,0.7)
  .color(.8,.6,.1)
  .scroll(0,()=>time/4)
  .out()

// Instruments
register('triforce',(x) => {return x.release(0.15).sound("triangle").hpf("700:1")})
register('sineforce',(x) => {return x.sound("sine").lpf("500:1").sound("triangle").n(4).gain(0.7)})

// Leads
const lead_seq_1 =
timecat(
  note("0 3".sub("<0!4 1!4 2!4 3!4>").scale("g4:chromatic")), 
  note("4 5".scale("g4:harmonic:minor"))).triforce()

const lead_seq_2 =
timecat(
  note("0".sub("<0!4 1!4>").scale("eb4:chromatic")), 
  note("2 5 6".scale("eb4:major"))).triforce()

const lead_arp_seq =
cat(
    note("-4 -1 1 3".scale("g4:harmonic:minor")),
    note("-1 1 3 5".scale("g4:harmonic:minor")),
    note("1 3 5 3".scale("g4:harmonic:minor")),
    note("5 6 5 6".scale("g4:harmonic:minor")),
    note("8 6 8 10".scale("g4:harmonic:minor"))
).triforce()

// Bass
const bass_seq_1 =
arrange(
   [4, note("<0@2 2 4>".scale("g3:harmonic:minor"))],
   [4, note("<4 0@3>".scale("f#3:harmonic:minor"))],
   [4, note("<0@2.5 2 5@0.5>".scale("f3:harmonic:minor"))],
   [4, note("<5 0@3>".scale("e:harmonic:minor"))],
   [2, note("<0@0.25 -1@0.25 0@1.5>".scale("eb:major"))],
   [2, note("[2 7 6]/2".scale("eb:major"))],
   [2, note("<0@0.25 -1@0.25 0@1.5>".scale("d:major"))],
   [2, note("[3 7 6]/2".scale("d:major"))]
).sineforce()

const bass_arp_seq =
cat(
    note("4 6 8 6".scale("g2:harmonic:minor")),
    note("8 10 8 10".scale("g2:harmonic:minor")),
    note("12 10 12 13".scale("g2:harmonic:minor")),
    note("15 13 12 10".scale("g2:harmonic:minor")),
    note("12 10 8 6".scale("g2:harmonic:minor"))
).sineforce()
  
// Arrangement
$lead: arrange(
  [16, lead_seq_1], 
  [8, lead_seq_2],
  [5, lead_arp_seq]
  )

$bass: arrange(
  [24, bass_seq_1],
  [5, bass_arp_seq]
)
