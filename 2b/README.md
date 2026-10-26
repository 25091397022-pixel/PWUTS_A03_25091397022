# 2b – Halaman Konten Interaktif (`pages/menu.html`)

**Proyek:** Sistem Reservasi Tempat dan Pemesanan Menu (Teman Setia Surabaya)
**Mata kuliah:** Pemrograman Web – Manajemen Informatika, Fakultas Vokasi, Universitas Negeri Surabaya

## Penjelasan
Halaman *Denah meja & pre-order menu* menyimulasikan alur pelanggan: melihat ketersediaan meja, memilih menu di muka (pre-order), dan melihat total tagihan.

> **Mengapa `menu.html` tidak tampil dengan gaya jika dibuka langsung?**
> File ini sengaja berupa **potongan HTML (fragment)** tanpa `<html>`, `<head>`, maupun pemanggilan Bootstrap/jQuery. Sesuai ketentuan tugas, halaman ini harus menjadi bagian dari layout utama (2a) dan dimuat dengan **Ajax** ke area konten `index.html`. Bootstrap, jQuery, dan `data.js` sudah dimuat oleh `index.html`. Jika ditambahkan lagi di sini, pustaka akan dimuat ganda dan data bisa ter-reset.
> Jadi lihat hasilnya lewat `index.html` → menu **Denah & Menu**.

## Fitur interaktif (JavaScript/jQuery)
- **Denah meja per area** (Lt 1 Indoor, Lt 2 Indoor, Lt 2 VIP) dengan status berwarna: hijau (kosong), kuning (direservasi), biru (terisi). Hanya meja kosong yang bisa dipilih.
- **Daftar menu:** pencarian langsung (live search) dan filter kategori makanan/minuman.
- **Keranjang pre-order:** tambah, kurangi, dan kosongkan pesanan.
- **Kode promo:** `HEMAT10` memberi diskon 10% untuk belanja minimal Rp 50.000.
- **Perhitungan tagihan otomatis:** subtotal, diskon, service 3% dari subtotal setelah diskon, pajak 10% dari (subtotal + service), dan total. Rumusnya mengikuti aturan bisnis proposal.
- Meja dan pesanan yang dipilih tersimpan di `window.APP`, sehingga terbawa ke halaman reservasi (2c).

## Kesesuaian dengan proposal
Data contoh mengacu pada tabel `dining_tables` (nomor meja, kapasitas, status), `menus` (kode, nama, harga, kategori), dan `outlets` (service_rate 3%, tax_rate 10%).

## Struktur
```
index.html               (pembungkus untuk pengujian, memuat 2b lewat Ajax)
pages/menu.html          (HALAMAN 2b)
assets/js/data.js
assets/css/style.css
```

## Cara menjalankan
1. Taruh folder di `htdocs` (XAMPP/Laragon) atau pakai Live Server.
2. Buka `http://localhost/<nama-folder>/index.html`, lalu klik **Denah & Menu**.
3. Untuk membuktikan Ajax: tekan F12 → tab **Network** → klik menu. Akan muncul permintaan ke `pages/menu.html` tanpa reload halaman.

> Jangan dibuka langsung dari `C:/...` (protokol `file://`), karena Ajax diblokir browser.

## Catatan penggabungan
Salin `pages/menu.html` ke folder `pages/` milik job 2a tanpa mengubah nama file. Tombol *Lanjut ke reservasi* akan berfungsi setelah job 2c tergabung.
