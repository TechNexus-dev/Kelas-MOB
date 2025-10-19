Konfigurasi launch:

1. Jalankan Live Server (extension) dari VS Code: buka `index.html`, klik kanan → "Open with Live Server" atau gunakan ikon "Go Live" di status bar.
2. Pastikan Live Server berjalan di `http://127.0.0.1:5500` atau sesuaikan `launch.json` jika port berbeda.
3. Tekan F5 (Start Debugging) dan pilih konfigurasi "Launch Chrome (Live Server)" untuk membuka Chrome terhubung ke Live Server.

Catatan:
- Jika Live Server berjalan di port lain, perbarui `url` di `.vscode/launch.json`.
- Jika Anda menggunakan Edge, ubah `type` ke "edge" dan pastikan extension debug tersedia.