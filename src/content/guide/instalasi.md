---
title: Instalasi
---

# Instalasi

Petunjuk instalasi Bangkah Launcher berdasarkan platform.

## Linux

```bash
# Unduh rilis terbaru (contoh)
wget https://github.com/Bangkah/bangkah-launcher/releases/latest/download/bangkah-launcher-linux-amd64
chmod +x bangkah-launcher-linux-amd64
sudo mv bangkah-launcher-linux-amd64 /usr/local/bin/bangkah-launcher
bangkah-launcher --version
```

## macOS

```bash
curl -L -o bangkah-launcher-darwin-amd64 \
  https://github.com/Bangkah/bangkah-launcher/releases/latest/download/bangkah-launcher-darwin-amd64
chmod +x bangkah-launcher-darwin-amd64
sudo mv bangkah-launcher-darwin-amd64 /usr/local/bin/bangkah-launcher
bangkah-launcher --version
```

## Windows

1. Unduh `bangkah-launcher-windows-amd64.exe` dari halaman rilis.
2. Tambahkan lokasi file ke `PATH` atau simpan di folder yang sudah ada di PATH.
3. Jalankan di `Command Prompt`:

```powershell
bangkah-launcher.exe --version
```

Jika proyek tidak menyediakan binary, silakan lihat instruksi build dari source di README repositori.