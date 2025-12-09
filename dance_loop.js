//Dance Loop @by Atraeus

setCpm(140/4)

const kick = s("bd*4").bank("tr909")
  .gain(1.5)
  .compressor("-20:30:3:.045:5")
  .duck("3")
  .duckdepth("1")
  .lpf(300)
  .fscope()

const hat = s("[~ white]*4")
  .dec(0.06)
  .delay(0.4)

const snare = s("[~ sd]*2").bank("tr909")

const arp_l = n("1!16")
  .scale("g1:major")
  .s("supersaw")
  .release(0.04)
  .clip(slider(0.4428,0.4,0.6))
  .gain(1.0)
  .detune(0.2)
  .phaser(0.1)
  .pan(0.45)
  .o("3")

const arp_r = n("1!16")
  .scale("g1:major")
  .s("supersaw")
  .release(0.04)
  .clip(slider(0.4428,0.4,0.6))
  .gain(1.0)
  .detune(-0.2)
  .phaser(0.5)
  .pan(0.55)
  .o("3")

const alarm = n("2 2@0.75 <[2 2 2] [2 2 3]>").scale("g3:chromatic").s("gm_shanai").bpf(2700,4000).dec(slider(0.5266,0.4,1)).room(1).gain(1.0).o("3")

const lead = n("<0!16 [0,1]!16>"
  .pick(["<[1@0.5 ~@0.25 <[8 7 5] [7 6 5] [5 4 0] [3 4 5]>]>",
         "8,15*4".add("<0 1 2 3>")]))
  .scale("g3:major")
  .s("gm_electric_guitar_muted")
  .crush(4.5)
  .decay(0.2)
  .delay(0.6)
  .room(1)
  .gain(1.8)
  .o("3")
  .hpf(400)

$: stack(kick, snare, arp_l,arp_r,hat,alarm, lead)
