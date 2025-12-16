//@title ANGELVISION CHALLENGE #4: Seaside @by Atraeus with small addition @by Rymdljus
setCpm(85/4)
setGainCurve(x => Math.pow(x,2))
const BOAT = n("0".sub(7)).scale("f:phrygian").clip(.3).slow(12)
 .s("wt_digital").att(0.05).room(1).roomsize(6).gain(.45)

const WAVES = s("brown").tremolo(.3).gain(1).tremskew(.5).room(.6)

const BARNACLES = s("white").tremolo(irand(15)).fast(16).velocity(rand)
  .hpf(15000)
  .lpf(rand.range(500,4000)).lpd(.02).lpenv(5)
  .lpq(12)
  .delay(rand.fast(3)).delaytime(rand).gain(.1)

const PAD = n("<[0,4] [0,3]>/2").scale("f2:phrygian").s("ocarina_vib").scrub("0:1").lpf(500)
const BASS = n("[0 ~ 0 ~ ~ 0 ~ ~] [0@2 ~ ~ ~ ~ ~ 0@2 ~ ~ ~ ~ ~ 0@2 ~ ~ ~]".sub("<0!2 4!2>")).scale("f2:phrygian").s("sine").release(0.3).sustain(0.4).decay(0.3)
const HARMONY = n("[0 ~ 0 ~ ~ 0 ~ ~] [0@0.5 ~0@0.25 [~ 2 3 4 7]]").sometimesBy(0.6,jux(rev)).rib("<16 18 56>",1)
  .scale("f4:phrygian")
  .s("sine")
  .release(1).decay(0.3).sustain(0.1)

const AH = n("<[0,4] [0,3]>/2").scale("f3:phrygian")
  .s("<gm_choir_aahs>")
  .room(2)
  .phaser(0.8)
  .scrub("0:1")
  .gain(.3)

arrange(
  [16, stack(BOAT,WAVES,BARNACLES)],
  [8, stack(BOAT,WAVES,BARNACLES, AH)],
  [8, stack(BOAT,WAVES,BARNACLES, AH, HARMONY)],
  [8, stack(BOAT,WAVES,BARNACLES, AH, HARMONY, BASS)]
)
