// @title Mot solnedgången
// @by Rymdljus, Atraeus remix

$: chord("<Am C Am E>").anchor("a4").voicing().arp("<1 3 [2 2?] 5 3 2 4 2>*16")
  .s("gm_acoustic_guitar_nylon")
  .delay(.3)
  .o(2)

$: s("brk/2").fit().scrub("<0!15 0*8>")

$: note("a4, g4").struct("<- x x x [x x] [- x]>*8")
  .hpf(500)
  .dec(.08)
  .s("gm_violin")
  .delay(.7)
  .gain(.6).o(4)
  .mask("<0 1!11>/4")

// $: s("sbd").note("<a1 c2 a1 b1>").struct("<x [-!3 x] - x>*4").dec(0.3)
//   .mask("<0!3 1!9>/4")
// $: s("clap:1").struct("<- <-!15 x> x x>*16")
//   .gain(.7)
//   .mask("<0!4 1!8>/4")

$: chord("<Am C F <E E7>>").anchor("a4").voicing()
  .s("gm_pad_sweep")
  .room(1)
  .lpf(2400)
  .gain(.75).o(5)
  .mask("<0!4 1!8>/4")

$: chord("<Am C F E>").anchor("a2").voicing().arp("<1 2 <3 4>>*16")
  .s("saw")
  // .diode("1.7:.6")
  .lpf(500).lpenv(.4).lpq(10).compressor("-40:3:10:.002:.02")
  .mask("<0!6 1!6>/4")

$: note(`<
  a3@2 c4 d4 e4@3 [d4 c4]
  a3@2 c4 d4 g#3@2 a3 b3
  c4@2 d4 e4 f4@2 e4 d4
  f4@2 e4 d4 g#4@2 a4 b4
  [- a4!3]!4
  [- g4!3]!4
  [- a4!3]!4
  [- b4!3]!4
  >*4`)
  .velocity("<1 1 .8 .9>*16")
  .s("gm_trumpet")
  .room(.7)
  .o(6)
  .mask("<0!9 1!3>/4")
  .postgain(1.2)
