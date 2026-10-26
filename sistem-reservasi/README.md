# PWUTS_A03_25091397034

Ini tugas UTS Pemrograman Web. Kami membuat website **Sistem Reservasi Tempat dan Pemesanan Menu** untuk outlet Teman Setia Surabaya, saya bagian **Admin**. Konsepnya mengikuti proposal kelompok kami.

- Nama: Rizky Caecar Ramadhana
- NIM: 25091397022
- Kelompok: A03

## Gambaran singkat

Di website ini admin bisa melihat ringkasan penjualan lewat **Dashboard**, lalu mengelola daftar menu restoran lewat **Master Menu** (tambah, ubah, hapus). Tampilannya saya buat seperti kartu-kartu yang membulat (bento), dengan warna ungu dan mint, dan fontnya Plus Jakarta Sans. Kalau dibuka di HP, menunya berubah jadi tombol hamburger.

## Isi folder

```
index.html         2a  homepage / layout utama
css/style.css          gaya tampilan (grid, flexbox, media query)
js/jquery.min.js       jQuery 3.7.1 (saya taruh lokal)
js/app.js              navigasi Ajax dan fungsi bantu validasi
js/data.js             data contoh (pengganti database sementara)
images/logo.svg        logo untuk header dan hero
pages/konten.html  2b  halaman konten (dimuat lewat Ajax)
pages/form.html    2c  halaman form (dimuat lewat Ajax)
README.md          2e  catatan ini
```

## Yang saya kerjakan

**1. Homepage (`index.html`, 2a)**
Ini kerangka utama websitenya: ada header dengan menu, isi halaman, footer, dan gambar logo (SVG). Tampilannya responsif, jadi di layar kecil menunya jadi hamburger dan hero serta kartu-kartunya turun jadi satu kolom. Menu **Dashboard** dan **Master Menu** saya buat pakai Ajax (`$.load()`), jadi waktu diklik isi halamannya berganti tanpa reload seluruh halaman. Alamatnya ditandai pakai hash (`#konten` dan `#form`) supaya tombol back di browser tetap jalan.

**2. Halaman konten (`pages/konten.html`, 2b)**
Isinya Dashboard penjualan. Ada filter **jenis** (food atau beverage) dan **periode** (7, 14, 30 hari, atau pilih rentang tanggal sendiri sampai 62 hari). Kalau filternya diubah, grafik batang, total penjualan, rata-rata per hari, dan daftar menu terlaris ikut berubah. Label di grafik berupa tanggal. Ada juga kartu pesanan aktif, reservasi pending, meja terisi, dan pembayaran terakhir yang mengambil data dari `js/data.js`.

**3. Halaman form (`pages/form.html`, 2c)**
Isinya form master menu yang mengikuti tabel `menus` di proposal: kategori, kode, nama, harga, stok, deskripsi, dan status tersedia. Kalau datanya valid, menu masuk ke daftar di bawah form. Tiap baris ada tombol **Ubah** (datanya masuk lagi ke form, kode menu dikunci karena tidak boleh kembar) dan **Hapus** (ada konfirmasi dulu).

Validasi sebelum submit saya buat pakai jQuery:
- kategori harus dipilih
- kode formatnya 2 huruf + 3 angka dan tidak boleh sama dengan yang sudah ada
- nama minimal 3 karakter
- harga minimal Rp 1.000
- stok bilangan bulat, tidak boleh negatif (boleh dikosongkan kalau tidak dibatasi)
- deskripsi maksimal 150 karakter

**4. Pembagian tugas (2d)**
Isi halaman saya berbeda dari anggota kelompok lain karena modul kami berbeda. Saya mengerjakan modul Admin.

## Teknik yang dipakai

- **HTML5:** header, nav, main, footer, img, table, dan form (input number, select, textarea, checkbox).
- **JavaScript:** variabel, fungsi, `if`, perulangan `for`, manipulasi DOM, objek dan array (format JSON), dan `confirm`.
- **jQuery:** selector (id, class, atribut), event `click`, `change`, `input`, dan `submit`, serta `.html()`, `.text()`, `.val()`, `.css()`, `.prop()`, `.append()`, `$.each`, dan `.animate()`.
- **Ajax jQuery:** `.load()` untuk memuat halaman ke dalam `#content`.

Saya tidak memakai Bootstrap atau library lain, hanya jQuery.

## Cara menjalankan

Karena memakai Ajax, websitenya harus dibuka lewat server. Kalau file `index.html` diklik dua kali, halaman Dashboard dan Master Menu tidak bisa dimuat. Pilih salah satu cara ini:

- **VS Code:** pasang ekstensi Live Server, klik kanan `index.html`, lalu pilih *Open with Live Server*.
- **Terminal:** jalankan `python -m http.server 8000`, lalu buka `http://localhost:8000`.
- **XAMPP:** taruh foldernya di `htdocs`, lalu buka `http://localhost/<nama-folder>/`.
- **GitHub Pages:** aktifkan di Settings > Pages pada repository.

## Catatan

Websitenya belum punya backend dan database. Datanya masih contoh di JavaScript, jadi perubahan dari form (tambah, ubah, hapus) hilang kalau halaman di-refresh. Form-nya juga baru disimulasikan setelah lolos validasi. Nama field-nya saya samakan dengan struktur database di proposal, jadi nanti tinggal disambungkan ke PHP dan MySQL lewat `$.post()`. Contohnya sudah saya tulis di komentar kode.