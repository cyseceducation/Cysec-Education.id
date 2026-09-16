<div align="center">

# CYSEC — Cyber Security Education Community

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13-0055FF?logo=framer&logoColor=white)

<br>

![GitHub stars](https://img.shields.io/github/stars/cyseceducation/Cysec-Education.id?style=social)
![GitHub forks](https://img.shields.io/github/forks/cyseceducation/Cysec-Education.id?style=social)

![Contributors](https://contrib.rocks/image?repo=cyseceducation/Cysec-Education.id) 

</div>

---

Halo! Selamat datang di **CYSEC**, teman belajar keamanan siber buat kamu yang baru mulai sampai yang sudah terjun di dunia cyber. Di sini kita nyusun semuanya biar kamu nggak bingung mau mulai dari mana — ada roadmap belajar, ebook, webinar, sampai forum buat tanya-tanya sama temen-temen satu komunitas.

## Cara Menjalankan

Bisa dipakai di PC atau Termux (Android). Untuk Termux/arm64, build wajib pakai webpack karena Turbopack butuh native binding yang belum support.

```bash
npm install
npm run build
npm run dev      # buka http://localhost:3000
npm start        # production setelah build
npm run lint
```

## Deploy ke Vercel

```bash
npm i -g vercel
vercel            # link project pertama kali
vercel --prod     # deploy
```

Bisa juga via dashboard Vercel → Import Git Repository → pilih repo ini → Framework **Next.js** → Build command `npm run build` → Deploy. Gampang.

## Akses dari Luar (Cloudflare Tunnel)

Buat yang mau nge-expose `localhost:3000` ke internet buat demo atau testing:

```bash
pkg install cloudflared          # di Termux
cloudflared tunnel login
cloudflared tunnel --url http://localhost:3000
```

Kalau mau pakai domain sendiri, tinggal bikin tunnel dengan nama dan set ingress di `~/.cloudflared/config.yml`.

---

<div align="center"><b>CYSEC</b> — belajar mulai dari sekarang.</div>