// @title Vampire TECHNO @by Atraeus, n=24
setCpm(140/4)
samples('bubo:waveforms');

$: s("ry30_bd*4").diode(1.5).dec(0.5).delay(0.3).lpf(4000).compressor("-5:2:0.03:.05:.3").duck("3")
$: n("<0 -1 -2 -3>!8").scale("f:harmonic:minor").s("wt_01").n(irand(24).rib(13, 1)).diode(1).fm(4).unison(2).bpf("3000, 4000").dec(slider(0.1441,0.1,1)).release(0.3).clip(0.8).jux(rev).o(3)
$: n("<0 -1 -2 -3>!16").scale("f2:harmonic:minor").s("wt_02!16").n(irand(24).rib(13, 2)).diode(1).bpf("1000, 2000").dec(slider(0.4924,0.1,1)).clip(0.8).delay(0.2).jux(rev).o(3)
$: n("<0 -1 -2 -3>!16").scale("f1:harmonic:minor").s("wt_03!16").n(irand(24).rib(13, 1)).diode(1).dec(slider(0.4717,0.1,1)).jux(rev).o(3)
