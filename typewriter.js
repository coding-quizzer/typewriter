const sentence = "Welcome here, how has your day been?";
let timeoutDelay = 0;
for (const char of sentence) {

  setTimeout(() => process.stdout.write(char), timeoutDelay);
  timeoutDelay += 50;
}