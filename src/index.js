console.log("hello world!");
console.warn("this is a warning!");
console.error("this is an error!");
console.info("this is info!");
console.debug("this is debug!");

console.log("hello work my name is %s and I am %d years old and here is object %o", "Chester", 33, { x: "foo"});
console.log("%coutput", "color: blue; font-size: 33px");

for(let i = 0; i < 100; i++) {
  let num = Math.random() * 100;
  console.groupCollapsed("Pick a random numbers");
  console.log("Number > 10", num > 10);
  console.log("Number > 50", num > 50);
  console.groupCollapsed("This is another nested log group");
  console.log();
  console.groupEnd();
  console.groupEnd();
}

const foo = undefined;
if(!foo) {
  console.error("foo wasn't set");
}
console.assert(foo, "foo wasn't set");

