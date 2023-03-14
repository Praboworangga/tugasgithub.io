// const user = [
//   {
//     brand: "Buggati Chiron",
//     kapasitasMesin: 8000,
//     jenisMobil: "Sport",
//   },
//   {
//     brand: "brio",
//     kapasitasMesin: 1199,
//     jenisMobil: "matic",
//   },
//   {
//     brand: "pajero",
//     kapasitasMesin: 2442,
//     jenisMobil: "Dakar",
//   },
// ];

// let mobil = prompt("masukkan JenisMobil ");
// const usersMobil = user.filter((mbimm) => mbimm.brand === mobil);
// console.log(usersMobil);

var mobil = [
  {
    merek: `toyota`,
    nama: `gatauu`,
    pintu: 3,
  },

  {
    merek: `nissan`,
    nama: `livina`,
    pintu: 2,
  },
  {
    merek: `bmw`,
    nama: `lupaaa`,
    pintu: 2,
  },
  {
    merek: `Ferrari`,
    nama: `gatauuu`,
    pintu: 2,
  },
];

let b = parseInt(prompt("Jumlah Pintu: "));
const mobilpintu = mobil.filter((mobil) => mobil.pintu === b);
console.log(mobilpintu);
document.write(mobilpintu);
