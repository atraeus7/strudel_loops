// @title Exploration @by Atraeus
setCpm(125/4)

let change_it_up = false

const bass_scream = note("c2!16".degradeBy(0.1).rib(64,2).apply(x=>change_it_up?x:x.sub("<0 2 4 7>"))).s("wt_digital").n("[1,2] [2,3] [2,3,4] [2,3,4,5]").unison(2).dec(0.08).clip(0.9).attack(0.02).delay(0.1).lpf(4000).lpq(10).postgain(3)
const square_chords = note("<[~@0.25 [0,4@0.25!2 ~]!5] [~@0.25 [-3,0@0.25!2 ~]!5] [~@0.25 [-1,1@0.25!2 ~]!5] [~@0.25 [-3,6@0.25!2 ~]!5]>").apply(x=>change_it_up?x.sub("<0 2 4 7>"):x)
  .scale("c4:dorian").s("square").attack(0.05).dec(0.1).delay(0.3).jux(rev).postgain(0.8)

const hyper_arp = note("<[0,4,7] [-1,4,6,9] [-2,3,8] [-4,5,7,10]>".apply(x=>change_it_up?x.sub("<0 2 4 7>"):x)).scale("c4:dorian").s("saw").phaser(0.4).arp("[0 1 1 2 1 0 0 2 1 3]*8").release(0.2).attack(0.01).pan(sine.fast(8)).bpf(1000).bpd(0.1).bpq(0.9).postgain(2)
const pulse_groove = note(irand("<7 8 9 11>").seg("16 [~ 4 8?]").rib(35, 4)).scale("c3:dorian").s("pulse").pw(rand.rib(13, 2)).diode(1)

const hat = s("white").struct("[~ ~ x x]*4").dec(0.1).delay(0.2).bpf("2500")
const kick = s("triangle,pink").struct("[x ~ x ~]").penv(-32).patt(0.5).panchor("0").scale("c3:dorian").bpf("[60, 100, 1000]").dec(0.1).delay(1).postgain(3)

$: arrange(
  [8, stack(kick, hat, bass_scream)],
  [8, stack(kick, hat, bass_scream, pulse_groove)],
  [8, stack(kick, hat, bass_scream, pulse_groove, square_chords.lpf(saw.rangex(200,6000).slow(8)))],
  [8, stack(kick, hat, bass_scream, pulse_groove, square_chords.lpf(6000))],
  [8, stack(kick, hat, bass_scream, pulse_groove, square_chords.lpf(6000), hyper_arp.lpf(saw.rangex(200,6000).slow(8)))],
  [16, stack(kick, hat, bass_scream, pulse_groove, square_chords.lpf(6000), hyper_arp.lpf(6000))]
)
