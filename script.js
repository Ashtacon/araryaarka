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

// Mendapatkan elemen dengan ID "tanggal"
const tanggalElement = document.getElementById("tanggal");

// Membuat objek tanggal
const currentDate = new Date();

// Mendapatkan informasi tanggal, bulan, dan tahun
const tanggal = currentDate.getDate();
const bulan = currentDate.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0
const tahun = currentDate.getFullYear();

// Mendapatkan informasi jam, menit, dan detik
const jam = currentDate.getHours();
const menit = currentDate.getMinutes();
const detik = currentDate.getSeconds();

// Format tanggal dan jam sesuai kebutuhan, misalnya: DD-MM-YYYY HH:MM:SS
const tanggalFormatted = `${tanggal}-${bulan}-${tahun}`;
const jamFormatted = `${jam}:${menit}:${detik}`;

// Mendapatkan zona waktu lokal pengguna
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Mendapatkan waktu lokal sesuai zona waktu pengguna
const waktuLokal = currentDate.toLocaleString("id-ID", {
  timeZone: userTimeZone,
});

// Menambahkan teks tanggal dan jam ke dalam elemen dengan ID "tanggal"
tanggalElement.textContent = `Time: ${jamFormatted} | ${tanggalFormatted} `;
