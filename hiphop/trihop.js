//@title ANGELVISION CHALLENGE #3: TRIPHOP @by Atraeus
setCpm(90/4)
setGainCurve(x => Math.pow(x, 2))

$kick: s("bd:6").beat("0,2",16)
$rim: s("rim").beat("8.1",16).delay(rand).delaytime(rand.fast(3).div(4)).o(2)
$hat: "<1 .6>*8".velocity().s("hh:2").delay(.3)

$chords: 
   anchor("<g4 f4 c4@2 g4 f4 f4@2>")
  .chord("<G^7 F^7 C^7@2 F^7 Bm7 C^7@2>")
  .voicing()
  .s("gm_epiano1:0")
  .attack(0.2)
  .sustain(0)
  .decay(6)
  .room(1)

$bass:
  note("<g1 f1 c1@1.75 e2@0.25 f1 b1 c1@1.75 d2@0.25>")
    .s("gm_fretless_bass")
    .lpf(60)
    .gain(1.5)
    .sustain(0)
    .decay(6)
