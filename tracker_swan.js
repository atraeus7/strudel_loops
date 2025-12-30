//tracker style arrangement
window.track = function(...input) {
  const patterns = input.shift()
  let mods = Array.isArray(input.at(-1)) ? input.pop() : undefined
  if (input.length % 2 !== 0) {
    throw new Error('Arrange needs a length paramter for each pattern (length, pattern, length, pattern)');
  }
  let sects = [];
  let total = 0;
  for (let i = 0; i < input.length; i += 2) {
    let inp = [input.at(i)].flat()
    let cycles = inp.at(0);
    let start = inp.at(1) ?? 0

    total += cycles;

    let cpat = input.at(i + 1).innerBind((str, pat) => {

      const pats = []
      str.split(/-+/).forEach((val, index) => {
        if (val == false ) {
          return
        }
        let newPat = patterns.at(index);
        mods?.forEach(([mod, callback]) => {
          if (val.includes(mod)) {
            newPat = callback(cycles, newPat)
          }
        });
        pats.push(newPat)
      })
      return stack(...pats)
    });

    sects.push([cycles, cpat.ribbon(start, cycles).fast(cycles)]);
  }
  return stepcat(...sects).slow(total);
}

/*
$: track(
    [bd,    sd,    hh],
  4, "1------0-----R",
  4, "D------1-----1",
  4, "DR-----1-----F",

  [ // Optional modifiers
    ['D', (cycles, pat) => pat.delay(.3)],
    ['R', (cycles, pat) => pat.room(1)],
    ['F', (cycles, pat) => pat.postgain(isaw.slow(cycles))]
  ]
)
