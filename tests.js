// Test 1
function Test1() {
  input = "aabbcc";
  rules = [
    { from: "aa", to: "a" },
    { from: "bb", to: "b" },
    { from: "cc", to: "c" },
  ];
  output = input;

  if (output = "abc")
    console.log("Test 1 passed.");
  else
    console.log("Test 1 failed.");
}
