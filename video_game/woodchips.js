// @title Woodchips @by Atraeus

setCpm(155/4)

const melody = ["<7 [[15 16] [15 15] ~ 14] 14 [12@2 10 11]>", 
                "<11 [[12 13] [12 12] [~ 10] 7] [9 11] [[10 9] [10 11] 10 [9 8]]>"]

const pitch_mask = "<0 [0 0 0 4] 0 [0 0 0 4] 0 0 0 0>"

const gallop = "[x [x x] x [x x]]*2"


$: n(pick(melody,"<~!2 {0 1}!4>/8")).scale("f3:dorian").penv(pitch_mask).pattack(4).s("pulse").gain(1)

$: n("<0 4 3 0>").scale("f3:dorian").struct(gallop).s("pulse").dec(0.2).diode(0.4)

$: s("pulse").seg("8").n("<0 2 3 3>").scale("f1:dorian").pw("0.1").diode(0.4).dec(0.3)
$: s("white").struct(gallop).dec(0.04).hpf(5000).compressor("-20:6:5:0.003:.01")
$: s("white,pink").struct("~ x ~ x").dec(0.15).lpf(7000).compressor("-30:6:3:0.01:.25")
