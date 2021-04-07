let time = 0;
const lines = ["|", "/", "-", "\\", "|", "/", "-", "\\"];

// for (let char of chars) {
//   time += 200;
//   setTimeout(() => {
//     process.stdout.write(`\r ${char}`);
//   }, time); // ever .2 sec it will animate
// }

for (let line of lines) {
  setTimeout(() => {
    process.stdout.write(`\r ${line}`);
  }, (time += 200)); // ever .2 sec it will animate
}
setTimeout(() => {
  process.stdout.write("\n");
}, time);

////////////////////////////////////////////////
// const animation = function() {
//   let lines = ["|", "/", "-", "\\"];
//   let i = 0;

//   return setInterval(() => {
//     i = i > 3 ? 0 : i;
//     console.clear;
//     console.log(lines[i]);
//     i++;
//   }, 5);
// };

// animation();

//////////////Spinner 1 below
//process.stdout.write("hello from spinner1.js... \rheyyy\n");

/*
heyyy from spinner1.js...
The first few characters are replaced by "heyyy". This is because \r brought our cursor back to the beginning.

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

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 1100);
*/
