
const rand      = Math.random;
const range     = n       => [...Array(n).keys()];
const randint   = (a,b)   => Math.floor( rand() * (b - a + 1) + a );
const randints  = (a,b,n) => range(n).map( x => randint(a,b) );

export { rand, range, randint, randints };
