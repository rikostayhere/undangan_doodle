/**
 * weddingData
 * Semua informasi undangan ada di sini.
 * Ganti nilai di bawah ini untuk menyesuaikan undangan — tidak perlu
 * menyentuh file lain.
 */
const weddingData = {
  // Foto AI masa kecil kedua mempelai pada halaman pembuka (cover / open invitation)
  coverPhoto: {
    src: "assets/img/childhood.svg", // Ganti dengan path file foto kamu, misal: "assets/img/childhood.png"
    caption: "Masa Kecil Riko & Adelia", // Tulisan di bawah bingkai polaroid cover
  },
  groom: {
    fullName: "Riko Oktavian",
    nickname: "Riko",
    photo: "assets/img/groom.svg", // ganti dengan [FOTO MEMPELAI PRIA], mis. "assets/img/groom.png"
    parents: "Putra dari Bapak [Nama Ayah] & Ibu [Nama Ibu]",
    instagram: "@riko.oktavian",
  },
  bride: {
    fullName: "Adelia Arifanti",
    nickname: "Adelia",
    photo: "assets/img/bride.svg", // ganti dengan [FOTO MEMPELAI WANITA], mis. "assets/img/bride.png"
    parents: "Putri dari Bapak [Nama Ayah] & Ibu [Nama Ibu]",
    instagram: "@adelia.arifanti",
  },
  date: {
    iso: "2026-10-25T09:00:00+07:00", // dipakai untuk countdown (menuju akad)
    display: "25 Oktober 2026",
  },
  akad: {
    label: "Akad Nikah",
    date: "Minggu, 25 Oktober 2026",
    time: "09.00 WIB – selesai",
    venue: "[NAMA TEMPAT/GEDUNG]",
    address: "[Alamat lengkap lokasi akad nikah]",
    mapsUrl: "[LINK GOOGLE MAPS]",
  },
  reception: {
    label: "Resepsi",
    date: "Minggu, 25 Oktober 2026",
    time: "11.00 WIB – selesai",
    venue: "[NAMA TEMPAT/GEDUNG]",
    address: "[Alamat lengkap lokasi resepsi]",
    mapsUrl: "[LINK GOOGLE MAPS]",
  },
  story: [
    {
      title: "Awal Pertemuan",
      date: "2020",
      image: "assets/img/story-1.svg", // ganti dengan path foto kisah cinta (mis. "assets/img/story-1.png")
      caption: "Pertama kali berjumpa",
      text: "Dua orang asing yang dipertemukan di waktu yang tepat, tanpa sadar sedang menulis awal dari sebuah cerita panjang.",
    },
    {
      title: "Sapaan Pertama",
      date: "2021",
      image: "assets/img/story-2.svg", // ganti dengan path foto kisah cinta
      caption: "Obrolan larut malam",
      text: "Sapaan pertama yang canggung, obrolan yang tidak berhenti sampai larut, dan tawa yang terasa familiar sejak awal.",
    },
    {
      title: "Tumbuh Bersama",
      date: "2023",
      image: "assets/img/story-3.svg", // ganti dengan path foto kisah cinta
      caption: "Saling menguatkan",
      text: "Melewati hari biasa dan hari yang berat bersama-sama, saling belajar, saling menguatkan, saling memilih setiap hari.",
    },
    {
      title: "Momen Lamaran",
      date: "2025",
      image: "assets/img/story-4.svg", // ganti dengan path foto kisah cinta
      caption: "Satu komitmen baru",
      text: "Satu pertanyaan sederhana, satu jawaban yang sudah lama dinantikan — dan sebuah janji untuk melangkah lebih jauh.",
    },
    {
      title: "Menuju Selamanya",
      date: "2026",
      image: "assets/img/story-5.svg", // ganti dengan path foto kisah cinta
      caption: "Babak baru dimulai",
      text: "Sekarang, di depan orang-orang tercinta, dua cerita berbeda resmi menjadi satu cerita yang sama.",
    },
  ],
  gallery: [
    { src: "assets/img/gallery-1.svg", caption: "Perjalanan Pertama" },
    { src: "assets/img/gallery-2.svg", caption: "Sore di Kala Hujan" },
    { src: "assets/img/gallery-3.svg", caption: "Hari Lamaran" },
    { src: "assets/img/gallery-4.svg", caption: "Momen Prewedding" },
    { src: "assets/img/gallery-5.svg", caption: "Hanya Kita Berdua" },
    { src: "assets/img/gallery-6.svg", caption: "Momen Berharga" },
  ],
  gifts: [
    {
      bank: "Bank BCA",
      accountNumber: "[NOMOR REKENING]",
      accountName: "Adelia Arifanti",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "[NOMOR REKENING]",
      accountName: "Riko Oktavian",
    },
  ],
  music: {
    src: "", // ganti dengan [LINK/FILE MUSIK], mis. "assets/audio/song.mp3"
    title: "A Thousand Years",
  },
  hashtag: "#RikoAdeliaSelamanya",
};
