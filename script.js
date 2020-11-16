// Cara Membuat Object ...

// 1. Object Literal ..

// Di bawah ini adalah contoh pembuatan Object secara literal

// let namaTeman1 = {
//   nama: "Iki",
//   energy: 13,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Hai ${this.nama},Selamat Makan Ya!!!`);
//   },
// };

// let namaTeman2 = {
//   nama: "Bari",
//   energy: 13,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Hai ${this.nama},Selamat Makan Ya!!!`);
//   },
// };

// 2. Secara FUnction Declaration yaitu membuat function nya terlebih dahulu ..

// // Buat FUnction terlebih dahulu
// function NamaTeman3(nama, energi) {
//   // Baru Buat Object

//   let namaTeman3 = {}; // Tetapi Object nya Kosong

//   //   Baru Kita Isi :

//   namaTeman3.nama = nama;
//   namaTeman3.energi = energi;
//   namaTeman3.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hai  ${this.nama} Selamat Jajan !!!!`);
//   };

//   namaTeman3.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hai ${this.nama} SELAMAT BERMAIN GENSHIN IMPACT :)`);
//   };

//   // return object

//   return namaTeman3;
// }

// // Di atas kita baru buat blueprint nya oleh karena itu di bawah ini kita akan membuat deklarasi variable nya
// // Buat Deklarasi Variable nya :

// let Ravie = NamaTeman3("Ravie", 15);
// // Dan Jangan Lupa jika menggunakan Function Declarration Kita Harus Return Object nya
// // Jadi Saat kita ingin membuat Data baru gampang tinggal instancesiansi saja seperti di bawah ini :
// //
// let Juen = NamaTeman3("Juen", 15);

// 3. Menggunakan Constructur Function : )
// keyword new
//  Tidak Harus Ada Return Data
// Dan juga Deklarasi Object di awal
// Dan Ganti keywoards namaTeman Dengan this

function NamaTeman3(nama, energi) {
  // Baru Buat Object

  //   let namaTeman3 = {}; ( Tidak ada ini )

  //   Baru Kita Isi :

  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hai  ${this.nama} Selamat Jajan !!!!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Hai ${this.nama} SELAMAT BERMAIN GENSHIN IMPACT :)`);
  };

  // return object

  // return namaTeman3; ( Tidak Ada Ini Juga )
}

//   Cara Pemangilanya

let Ayub = new NamaTeman3(`Ayub`, 10);
