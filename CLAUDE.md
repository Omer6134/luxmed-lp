# CLAUDE.md — Luxmed Landing Pages (kalıcı proje hafızası)

> Bu dosya bu repoda çalışırken **otomatik yüklenir**. Amaç: sohbet /compact edilse veya
> yeni oturuma geçilse bile projenin tüm önemli bilgilerinin korunması. Büyük bir değişiklik
> yaptığında bu dosyayı da güncel tut.

## 1) Proje amacı
Luxmed Protez (İstanbul protez/ortez kliniği) için **dönüşüm/lead odaklı yabancı dil landing
page'leri**. Hedef trafik: Google Ads (ör. "prosthetic leg") + uluslararası hastalar.
Hedef aksiyon: **form (Web3Forms → e-posta)** veya **WhatsApp**.

## 2) Ana plan — 9 landing
Toplam 9 sayfa: **protez bacak / protez kol / silikon protez** × **EN / RU / AR**.
- İlk (şablon) landing: **protez-bacak-en** (İngilizce prosthetic-leg) — geliştiriliyor.
- Diğerleri bu şablon kopyalanıp içerik/medya değiştirilerek üretilecek.

## 3) Klasör & repo yapısı (ÖNEMLİ)
- **Repo:** `Omer6134/luxmed-lp` (**PRIVATE**). Yerel: `/Users/omermacbook/Desktop/Yabancı-landingler/luxmed-lp/`
  (çalışma dizini dışına taşınamaz; preview MCP "Yabancı" karakterli/dışarıdaki yola erişemiyor).
- **Her landing = repo içinde AYRI KLASÖR.** Klasör adı Türkçe (organizasyon), public URL İngilizce (SEO).
  | Klasör | Hedef URL | Durum |
  |---|---|---|
  | `protez-bacak-en/` | `luxmedprotez.com/lp/prosthetic-leg/` | aktif |
  | `protez-kol-en/` | `/lp/prosthetic-arm/` | sonra |
  | `silikon-protez-en/` | `/lp/silicone-prosthetics/` | sonra |
  | `*-ru/`, `*-ar/` | (RU/AR) | sonra |
- **Deploy/önizleme:** Repo private olduğu için ücretsiz planda **GitHub Pages önizlemesi ÇALIŞMAZ**
  (omer6134.github.io kapalı). Önizleme: **lokal `python3 -m http.server` + headless Chrome screenshot**
  (bkz. §9). Gerçek yayın: klasör içeriği sunucuda `/lp/<slug>/` yoluna kopyalanır (build yok).
  İleride canlı önizleme istenirse Netlify/Vercel kurulabilir.

## 4) Teknoloji & konvansiyonlar
- Saf **statik HTML + CSS + vanilla JS**, build yok. Dosyalar: `index.html`, `css/styles.css`,
  `js/main.js`, `assets/{img,video}`.
- **Cache-busting:** `index.html` içinde `css/styles.css?v=N` ve `js/main.js?v=N`. CSS/JS
  değişince N'i artır (GitHub Pages/tarayıcı cache uyumsuzluğunu önler). Şu an v=13 civarı.
- **Dil:** Sayfa şu an **geçici Türkçe** (kullanıcı onayı için). **Yayından önce İngilizceye**
  çevrilecek. `lang="tr"` şimdilik.
- **Git akışı:** her değişiklik `main`'e commit + push. Commit sonu:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.
- **Form:** Web3Forms (`access_key` PLACEHOLDER `YOUR_WEB3FORMS_ACCESS_KEY`) → omer@luxmedprotez.com.
- **Analytics/Ads:** `<head>`'de GA4 + Google Ads + Meta Pixel için PLACEHOLDER; `js/main.js`
  `track()` bağlanacak. Henüz gerçek ID yok.

## 5) Tasarım sistemi — "warm clinical luxe"
Kullanıcı jenerik açık bej/sage'i ve eski Astro (`Omer6134/luxmed-landings`) + WordPress
tasarımlarını beğenmedi. Özgün, premium klinik his. Emoji ikon kullanma; **ince Lucide ikonlar
(stroke-width 1.5)**.
- **Palet (`:root`):** krem `--paper #F3EBD9` / `--paper-2 #EADFC8`; metin `--ink #14211F`;
  derin teal `--green #0F3D3B` / `--green-700 #0A2C2A`; altın `--clay #E0A23C` / `--clay-700 #9A6A12`;
  hairline `--line #E0D5BE`. Koyu kesitlerde metin krem, başlık gerekiyorsa **saf beyaz**.
  Instagram bölümü etiketi özel gold `#C5A880`.
- **Tipografi:** başlık **Fraunces** (serif, hafif), gövde **Inter**.
- **Bölümler (mevcut sıra):** Hero (tam ekran cihaz-duyarlı video + teal filtre) → Süreç
  (3 adım/1 gün timeline) → Silikon (tıkla-sesli video) → Soket → Ürünler → Biyonik (sessiz video +
  check-list) → Uzman kadro (asimetrik büyük foto + mikro sayaçlar) → **Neden Luxmed (Premium Bento:
  büyük garanti kartı + dikey teknoloji + yatay hizmet)** → **Instagram (Reels/TikTok tarzı 4 dikey
  video-hub kartı; ham IG embed YOK)** → Google yorumları (avatar+bayrak+protez tipi) → SSS →
  Form (sol form + sağ "4 neden") → Footer (2 sütun: marka+ekip foto / iletişim+sosyal).
- **Header:** hero üzerinde şeffaf (logo beyaz) → kaydırınca opak krem. Logo `logo-mark.png`
  (beyaz arka planı şeffaflaştırılmış). Nav: Neden Luxmed(#why) · Silikon(#silicone) ·
  Biyonik(#bionic) · Sıkça Sorulanlar(#faq) + altın CTA. Mobilde nav gizli.
- **Mobil:** alt sticky bar (Ücretsiz Teklif Al + WhatsApp). Yüzen WhatsApp sadece masaüstü.
- **Çalışma tarzı:** büyük değişiklikten önce **prototip/screenshot ile onay al** (kullanıcı titiz;
  birkaç tasarımı geri aldık). Gemini'den kopyaladığı tavsiyeleri uyguluyoruz.

## 6) Gerçek Luxmed verileri (WordPress REST API + araştırma)
- Tel (sabit): **+90 212 555 88 22** · Mobil/WhatsApp: **+90 537 349 84 03**
- E-posta: **info@luxmedprotez.com** (form bildirimi → omer@luxmedprotez.com)
- Adres: **Topkapı, Turgut Özal Millet Cd. No:160/A, 34093 Fatih/İstanbul**
- Saatler: Pzt–Cuma 09:00–18:00 · Cmt 09:00–15:00
- Instagram: **@luxmedprosthetic** · YouTube: @luxmedprotez · (FB/LinkedIn URL placeholder)
- Klinik: 2016, 2000+ hasta/tedavi, Ottobock (Almanya) eğitimli. Ürünler: diz altı/üstü,
  silikon, biyonik (Ottobock C-Leg, Genium X3/X4). Uluslararası paket: karşılama+konaklama+transfer,
  EN/RU/AR/FR tercüman. Farklılaştırıcı: soket tek. + **1 günde protez**; silikon 1 günde ölçü.
- Kullanılan güven rakamları (kullanıcı verdi, bazıları placeholder): **4,9★ Google**, **40 ülke**,
  **15+ uzman kadro**, **5 yıl uluslararası garanti**, protez fiyatı **2.000 €'dan başlar**.
- NOT: site Cloudflare korumalı — HTML 403; içerik `luxmedprotez.com/wp-json/wp/v2/` REST'ten.
  Instagram reel kapağı: `instagram.com/p/<KOD>/media/?size=l` 302 → görsel indirilebilir.

## 7) Medya (kaynaklar: `/Users/omermacbook/Desktop/Yabancı-landingler/Videolar` ve `fotoğraflar`)
- Hero: PC `hero-pc.mp4` (yatay drone 1–9sn), mobil `hero-mobile.mp4` (rehab 58–68sn) — 200MB→~2MB.
- `journey.mp4` (hızlı-soket 0-5+8-12+18-27 birleşik), `silicone-vertical.mp4` (sesli, tıkla-oynat),
  `bionic.mp4` (Ottobock-bionic-leg 58–60.7sn, sessiz), `reel-1..4.jpg` (dikey reel kapakları),
  `luxmed-ekibi.webp` (ekip fotosu), `patient-1..3.jpg`, `logo-mark.png`.
- Bayraklar: flagcdn.com (emoji değil).

## 8) Yayından önce doldurulacak PLACEHOLDER'lar
- Web3Forms `access_key` · GA4 + Google Ads + Meta Pixel ID'leri · gerçek Google yorumları +
  isimler + ülke/protez · gerçek Reels linkleri (reel kartları) · FB/LinkedIn URL'leri ·
  hasta foto/isim kullanım onayı · sayfayı İngilizceye çevir.

## 9) Önizleme/screenshot iş akışı (macOS)
- Preview MCP sandbox bu yola erişemiyor → **Bash + `python3 -m http.server 5173`** + **headless
  Chrome** (`/Applications/Google Chrome.app`). Tam sayfa/scroll için **CDP** (remote-debugging-port
  + `--remote-allow-origins=*`, websocket-client). Mobil için `Emulation.setDeviceMetricsOverride`.
- UYARI: headless `--window-size` macOS'ta ~560px minimum uygular; dar screenshot'lar sağdan kırpık
  görünür (gerçek hata değil). Mobil taşma testini CDP device-emulation ile 394px'te `scrollWidth`
  ölçerek yap (== viewport ise taşma yok).
