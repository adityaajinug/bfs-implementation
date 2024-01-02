// Fakta-fakta
const facts = [
  { nama: "Andi", role: "mahasiswa", progdi: "ti", kampus: "udinus" },
];

// Aturan
function ambilKalkulus(X) {
  return facts.some((fact) => fact.nama === X && fact.role === "mahasiswa");
}

function mahasiswaTI(X) {
  const fact = facts.find(
    (fact) => fact.nama === X && fact.role === "mahasiswa"
  );
  return fact ? fact.progdi === "ti" : false;
}

// Contoh Penggunaan
const andi = "Andi";

if (mahasiswaTI(andi)) {
  console.log(`${andi} adalah mahasiswa TI.`);
} else {
  console.log(`${andi} bukan mahasiswa TI.`);
}
