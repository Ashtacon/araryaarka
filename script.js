const Job = document.getElementById("job");

var typewriter = new Typewriter(Job, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("CEO Enthusiast.")
  .pauseFor(500)
  .deleteChars(15)
  .typeString("Front-end WebDev.")
  .pauseFor(500)
  .deleteChars(23)
  .typeString("Full Stack WebDev.")
  .pauseFor(1000)
  .start();
