
const rand       = Math.random;
const range      = n       => [...Array(n).keys()];
const randint    = (a,b)   => Math.floor( rand() * (b - a + 1) + a );
const randfloat  = (a,b)   => rand() * (b - a) + a;
const randints   = (a,b,n) => range(n).map( x => randint(a,b)   );
const randfloats = (a,b,n) => range(n).map( x => randfloat(a,b) );

export { rand, range, randint, randfloat, randints, randfloats };
