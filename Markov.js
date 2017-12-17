var input = "";
var rules = [];
var output = "";
var steps = [];

function step() {
  for (rule = 0; rule < rules.length; rule++) {
    if (output.search(rules[rule].from) != -1) {
      output = output.replace(rules[rule].from, rules[rule].to);
      return steps.push({ rule, output });
    }
  }
}

function run() {
  while (step());
}
