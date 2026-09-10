# Riko & Adelia — Little Doodle Wedding Invitation

Undangan pernikahan digital bertema **Little Doodle** (hand-drawn storybook),
dibangun dengan HTML + CSS + vanilla JavaScript murni — tanpa build tool,
tanpa dependency, tanpa framework. Cukup buka `index.html`.

## Struktur folder

```
little-doodle-wedding/
├── index.html          → seluruh markup/section undangan
├── css/
│   └── style.css       → semua styling, design token warna & tipografi ada di :root
├── js/
│   ├── data.js          → SEMUA data undangan (nama, tanggal, venue, galeri, dst)
│   ├── doodles.js        → library SVG hand-drawn doodle yang dipakai ulang
│   └── main.js            → render data ke DOM + semua interaksi (cover, countdown,
│                            scroll reveal, nav, musik, RSVP, guestbook, copy rekening)
└── assets/
    └── img/            → placeholder foto (SVG) — ganti dengan foto asli
```

## Cara menjalankan

Karena tidak ada proses build, cukup buka filenya langsung di browser, atau
jalankan local server sederhana supaya path gambar/audio ter-load dengan benar:

```bash
cd little-doodle-wedding
python3 -m http.server 8000
# lalu buka http://localhost:8000 di browser
```

Bisa juga langsung double-click `index.html` di kebanyakan browser modern.

## Mengganti isi undangan

Semua data ada di satu tempat: **`js/data.js`**. Tidak perlu menyentuh HTML
atau CSS untuk mengganti nama, tanggal, venue, galeri, rekening, atau musik.

Placeholder yang perlu diganti:

| Placeholder | Lokasi di `data.js` | Keterangan |
|---|---|---|
| `[GROOM PHOTO]` | `groom.photo` | ganti path ke foto asli, mis. `assets/img/groom.jpg` |
| `[BRIDE PHOTO]` | `bride.photo` | ganti path ke foto asli |
| `[GALLERY PHOTO 1..6]` | `gallery[].src` | ganti path ke foto galeri asli |
| `[VENUE]` | `akad.venue`, `reception.venue` | nama tempat |
| `[GOOGLE MAPS URL]` | `akad.mapsUrl`, `reception.mapsUrl` | link Google Maps venue |
| `[BANK ACCOUNT]` | `gifts[].accountNumber` | nomor rekening/e-wallet |
| `[MUSIC URL]` | `music.src` | path/URL file musik (mp3), kosongkan jika tidak dipakai |

Foto saat ini memakai placeholder SVG bertuliskan nama section-nya (mis.
"[GROOM PHOTO]") supaya jelas tanpa membuat halaman error. Setelah foto asli
ditaruh di `assets/img/`, cukup ubah ekstensi path di `data.js`.

## Fitur yang sudah ada

- Cover pembuka dengan animasi geser seperti membuka halaman buku, musik
  latar mulai setelah tombol "Open Invitation" ditekan (mengikuti kebijakan
  autoplay browser).
- Hero "Once upon a time..." dengan doodle mengambang halus.
- Our Little Story — timeline bergaya storybook, bukan dashboard.
- Meet The Couple — foto bingkai polaroid sedikit miring.
- The Day — kartu Akad & Resepsi dengan tombol "View Location" ke Google Maps.
- Countdown menuju tanggal pernikahan (real-time, format hari/jam/menit/detik).
- Gallery scrapbook — polaroid berputar ringan + washi tape.
- RSVP form (client-side; hubungkan `rsvp-form` di `main.js` ke backend/Google
  Form/Sheet sendiri untuk menyimpan data sungguhan).
- Little Notes / guestbook — saat ini disimpan di memori browser (hilang saat
  refresh); sambungkan ke backend/Firebase/Google Sheet untuk menyimpan
  permanen dan menampilkan ucapan dari semua tamu.
- Wedding Gift dengan tombol copy nomor rekening + feedback "Copied ✓".
- Floating music toggle (♪) dan floating bottom navigation.
- Scroll reveal bertahap (fade + slide-up, staggered) via IntersectionObserver.
- Mobile-first (360–414px), responsive ke tablet & desktop tanpa sekadar
  melebarkan layout mobile.

## Catatan penting untuk produksi

1. **RSVP & Guestbook** saat ini murni front-end (tidak menyimpan data
   permanen). Untuk mengumpulkan RSVP/ucapan sungguhan dari tamu, sambungkan
   `rsvp-form` submit handler dan `addNote()` di `js/main.js` ke layanan
   backend pilihan (Google Sheets API, Firebase, Supabase, dsb).
2. Kompres foto asli ke WebP/JPEG optimal sebelum dipakai, dan pertahankan
   `loading="lazy"` yang sudah ada pada gambar galeri.
3. Ganti favicon/meta Open Graph di `<head>` bila undangan akan dibagikan
   lewat link (opsional, belum termasuk di versi ini).
