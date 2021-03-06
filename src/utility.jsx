
const rand       = Math.random;
const range      = n       => [...Array(n).keys()];
const randint    = (a,b)   => Math.floor( rand() * (b - a + 1) + a );
const randfloat  = (a,b)   => rand() * (b - a) + a;
const randints   = (a,b,n) => range(n).map( x => randint(a,b)   );
const randfloats = (a,b,n) => range(n).map( x => randfloat(a,b) );

const sampleText = "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled 'de Finibus Bonorum et Malorum' which means 'The Extremes of Good and Evil'. The most common form of Lorem ipsum is the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.The text is a corrupted version of the original and therefore does not mean anything in particular. The book however where it originates discusses the philosophical views of Epicureanism, Stoicism, and the Platonism of Antiochus of Ascalon.Lorem ipsum is widely in use since the 14th century and up to today as the default dummy 'random' text of the typesetting and web development industry. In fact not only it has survived the test of time but it thrived and can be found in many software products, from Microsoft Word to WordPress.What is random text generator?Random Text Generator is a web application which provides true random text which you can use in your documents or web designs. How does it work? First we took many books available on project Gutenberg and stored their contents in a database. Then a computer algorithm takes the words we stored earlier and shuffles them into sentences and paragraphs.The algorithm takes care to create text that looks similar to an ordinary book but without any real meaning. The reason we want our text to be meaningless is that we want the person viewing the resulting random text to focus on the design we are presenting, rather than try to read and understand the text.It's better than Lorem ipsum because it can produce text in many languages and in particular: Chinese, Dutch, English, Finnish, French, German, Greek, Hebrew, Italian, Japanese, Latin, Polish, Portuguese, Russian, Serbian and Spanish.Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing.";
const randWords  = sampleText.toLowerCase().replace(/[.,'?/#!$%^&*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
const maxIndex   = randWords.length - 1;
const randText   = l => randints(0, maxIndex, l).map( i => randWords[i] ).join(" ");

const tokenChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#"
const randToken  = n => randints( 0, 63, n ).map( x => tokenChars[x] ).join("");

export { rand, range, randint, randfloat, randints, randfloats, randText, randToken };
