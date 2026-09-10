/**
 * weddingData
 * Semua informasi undangan ada di sini.
 * Ganti nilai di bawah ini untuk menyesuaikan undangan — tidak perlu
 * menyentuh file lain.
 */
const weddingData = {
  groom: {
    fullName: "Riko Oktavian",
    nickname: "Riko",
    photo: "assets/img/groom.svg", // ganti dengan [GROOM PHOTO]
    parents: "Putra dari Bapak [Nama Ayah] & Ibu [Nama Ibu]",
    instagram: "@riko.oktavian",
  },
  bride: {
    fullName: "Adelia Arifanti",
    nickname: "Adelia",
    photo: "assets/img/bride.svg", // ganti dengan [BRIDE PHOTO]
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
    venue: "[VENUE]",
    address: "[Alamat lengkap venue akad]",
    mapsUrl: "[GOOGLE MAPS URL]",
  },
  reception: {
    label: "Resepsi",
    date: "Minggu, 25 Oktober 2026",
    time: "11.00 WIB – selesai",
    venue: "[VENUE]",
    address: "[Alamat lengkap venue resepsi]",
    mapsUrl: "[GOOGLE MAPS URL]",
  },
  story: [
    {
      title: "Where it all began",
      text: "Dua orang asing yang dipertemukan di waktu yang tepat, tanpa sadar sedang menulis awal dari sebuah cerita panjang.",
    },
    {
      title: "First hello",
      text: "Sapaan pertama yang canggung, obrolan yang tidak berhenti sampai larut, dan tawa yang terasa familiar sejak awal.",
    },
    {
      title: "Growing together",
      text: "Melewati hari biasa dan hari yang berat bersama-sama, saling belajar, saling menguatkan, saling memilih setiap hari.",
    },
    {
      title: "The proposal",
      text: "Satu pertanyaan sederhana, satu jawaban yang sudah lama dinantikan — dan sebuah janji untuk melangkah lebih jauh.",
    },
    {
      title: "Forever starts here",
      text: "Sekarang, di depan orang-orang tercinta, dua cerita berbeda resmi menjadi satu cerita yang sama.",
    },
  ],
  gallery: [
    { src: "assets/img/gallery-1.svg", caption: "Our first trip" },
    { src: "assets/img/gallery-2.svg", caption: "That rainy afternoon" },
    { src: "assets/img/gallery-3.svg", caption: "The proposal day" },
    { src: "assets/img/gallery-4.svg", caption: "Pre-wedding" },
    { src: "assets/img/gallery-5.svg", caption: "Just us" },
    { src: "assets/img/gallery-6.svg", caption: "Little moments" },
  ],
  gifts: [
    {
      bank: "Bank BCA",
      accountNumber: "[BANK ACCOUNT]",
      accountName: "Adelia Arifanti",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "[BANK ACCOUNT]",
      accountName: "Riko Oktavian",
    },
  ],
  music: {
    src: "", // ganti dengan [MUSIC URL], mis. "assets/audio/song.mp3"
    title: "A Thousand Years",
  },
  hashtag: "#RikoAdeliaSelamanya",
};
