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
  .deleteChars(17)
  .typeString("Full Stack WebDev.")
  .pauseFor(500)
  .deleteChars(19)
  .typeString("Cosplayer")
  .pauseFor(1000)
  .start();

const tanggalElement = document.getElementById("tanggal");

function updateClock() {
  const currentDate = new Date();
  const tanggal = currentDate.getDate();
  const bulan = currentDate.getMonth() + 1;
  const tahun = currentDate.getFullYear();
  const jam = currentDate.getHours();
  const menit = ("0" + currentDate.getMinutes()).slice(-2);
  const detik = ("0" + currentDate.getSeconds()).slice(-2);
  const tanggalFormatted = `${tanggal}-${bulan}-${tahun}`;
  const jamFormatted = `${jam}:${menit}:${detik}`;

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const waktuLokal = currentDate.toLocaleString("id-ID", {
    timeZone: userTimeZone,
  });

  tanggalElement.textContent = `Time: ${jamFormatted} | ${tanggalFormatted}`;
}

updateClock();

setInterval(updateClock, 1000);

const audio = document.getElementById("backsound");

const toggleSound = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
