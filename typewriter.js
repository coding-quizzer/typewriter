const sentence = "Welcome, how has your day been?";
let timeoutDelay = 0;
for (const char of sentence) {

  setTimeout(() => process.stdout.write(char), timeoutDelay);
  timeoutDelay += 50;
}

setTimeout(() => process.stdout.write('\n'), timeoutDelay + 1);