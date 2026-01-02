//@title ANGELVISION CHALLENGE #5 Metroid Vibe @by Atraeus

setCpm(90/4)
const volume = slider(1)
all(x => x.mul(postgain(volume)))

METROID_BASS: n("<0 6 10 13 4>*16".add("<0 4 3 6>*2").sometimesBy(0.2,x=>x.add(3)))
  .scale("d1:phrygian").s("nes_triangle").pan(rand)
  .delay(slider(0.386)).gain(1).o(5)

$PULSE_LEAD: n("<3 0 1 -1 0 2 -1 -5 -4>").scale("d5:phrygian").s("nes_pulse1").gain(0.5).room(1)

$NOISE_HAT: n("0!15 [0|[0|[0 0]]]").velocity("[0.4 0.8]*4").scale("d:phrygian").s("nes_noise").dec(0.1).sustain(0)

$KICK: note("d1").s("nes_triangle").struct("x x x x").penv(-16).pattack(0.01).att(0.1).dec(0.2).sustain(0).gain(1.8).pan(sine)

$NOISE_SNARE: s("nes_noise:<12!3 [~ 12 ~ [12 6]]>").struct("<[~ x ~ x]!3 [~ x ~ [x x]]>").dec(0.2).sustain(0).gain(0.8)
