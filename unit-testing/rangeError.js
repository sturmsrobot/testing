// Folgender Code wirft einen RangeError
const array = [];

try {
  array.length = -1;
  //ab hier Sintflut
  console.log("nie");
} catch (err) {
  console.log("Hallo");
} finally {
  console.log("immer");
}
