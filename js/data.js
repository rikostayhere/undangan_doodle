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
    caption: "Riko & Adelia", // Tulisan di bawah bingkai polaroid cover
  },
  groom: {
    fullName: "Riko Oktavian",
    nickname: "Riko",
    photo: "assets/img/groom.svg", // ganti dengan [FOTO MEMPELAI PRIA], mis. "assets/img/groom.png"
    parents: "Putra dari Bapak Purnomo & Ibu Dwi Indah Meiri",
    instagram: "@rico.okta26",
  },
  bride: {
    fullName: "Adelia Arifanti",
    nickname: "Adelia",
    photo: "assets/img/bride.svg", // ganti dengan [FOTO MEMPELAI WANITA], mis. "assets/img/bride.png"
    parents: "Putri dari Alm. Bapak H.Samsul Huda & Ibu Denok Kismianing Diah",
    instagram: "@adeliaarft_",
  },
  date: {
    iso: "2026-10-25T09:00:00+07:00", // dipakai untuk countdown (menuju akad)
    display: "25 Oktober 2026",
  },
  akad: {
    label: "Akad Nikah",
    date: "Minggu, 25 Oktober 2026",
    time: "09.00 WIB – selesai",
    venue: "Kediaman Mempelai Wanita",
    address: "Dusun Tampung, Desa Tampungrejo RT004/RW001, Puri, Mojokerto",
    mapsUrl: "https://maps.app.goo.gl/h9hGttnEfi42JnSZ7",
  },
  reception: {
    label: "Resepsi",
    date: "Minggu, 25 Oktober 2026",
    time: "16.00 WIB – selesai",
    venue: "Kediaman Mempelai Wanita",
    address: "Dusun Tampung, Desa Tampungrejo RT004/RW001, Puri, Mojokerto",
    mapsUrl: "https://maps.app.goo.gl/h9hGttnEfi42JnSZ7",
  },
  story: [
    {
      title: "Awal Pertemuan",
      date: "Agustus 2024",
      image: "assets/img/story-1.svg", // ganti dengan path foto kisah cinta (mis. "assets/img/story-1.png")
      caption: "Pertama kali berjumpa",
      text: "Berawal dari pertemuan tidak sengaja di sebuah perusahaan. Saling menyapa ringan yang ternyata meninggalkan kesan mendalam bagi kami berdua",
    },
    {
      title: "Saling mengenal",
      date: "Maret 2025",
      image: "assets/img/story-2.svg", // ganti dengan path foto kisah cinta
      caption: "Pertama ngedate",
      text: "Berawal dari percakapan santai yang berlanjut menjadi saling berbagi cerita dan prinsip hidup hingga kami menyadari kenyamanan serta kecocokan satu sama lain.",
    },
    {
      title: "Memulai komitmen",
      date: "Februari 2026",
      image: "assets/img/story-3.svg", // ganti dengan path foto kisah cinta
      caption: "Ke jenjang yang lebih serius",
      text: "Setelah saling mengenal lebih jauh, kami merasa memiliki visi dan misi yang sama. Kami memutuskan untuk menjalani hubungan yang lebih serius.",
    },
    {
      title: "Momen Lamaran",
      date: "Juli 2026",
      image: "assets/img/story-4.svg", // ganti dengan path foto kisah cinta
      caption: "Satu komitmen baru",
      text: "Satu pertanyaan sederhana, satu jawaban yang sudah lama dinantikan — dan sebuah janji untuk melangkah lebih jauh.",
    },
    {
      title: "Momen Pernikahan",
      date: "Oktober 2026",
      image: "assets/img/story-5.svg", // ganti dengan path foto kisah cinta
      caption: "Babak baru dimulai",
      text: "Sekarang, di depan orang-orang tercinta, dua cerita berbeda resmi menjadi satu cerita yang sama.",
    },
  ],
  gallery: [
    { src: "assets/img/gallery-1.svg", caption: "Awal ketemu" },
    { src: "assets/img/gallery-2.svg", caption: "Pertama ngedate bareng" },
    { src: "assets/img/gallery-3.svg", caption: "Memantapkan Komitmen" },
    { src: "assets/img/gallery-4.svg", caption: "Lamaran" },
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
      bank: "Bank BCA",
      accountNumber: "4110677800",
      accountName: "Riko Oktavian",
    },
  ],
  music: {
    src: "", // ganti dengan [LINK/FILE MUSIK], mis. "assets/audio/song.mp3"
    title: "A Thousand Years",
  },
  hashtag: #rikoadelwedding",
};
