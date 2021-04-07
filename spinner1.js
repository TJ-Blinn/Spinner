process.stdout.write("hello from spinner1.js... \rheyyy\n");

// heyyy from spinner1.js...
// The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 900);
