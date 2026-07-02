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
- **Repo:** `Omer6134/luxmed-lp` (**şu an PUBLIC** — kullanıcı arkadaşlarına link paylaşıyor; iş bitince
  tekrar private yapılabilir). Yerel: `/Users/omermacbook/Desktop/Yabancı-landingler/luxmed-lp/`
  (çalışma dizini dışına taşınamaz; preview MCP "Yabancı" karakterli/dışarıdaki yola erişemiyor).
  İçinde gizli anahtar/şifre YOK (hepsi placeholder); public olması güvenlik riski değil.
- **Her landing = repo içinde AYRI KLASÖR.** Klasör adı Türkçe (organizasyon), public URL İngilizce (SEO).
  | Klasör | Hedef URL | Durum |
  |---|---|---|
  | `protez-bacak-en/` | `luxmedprotez.com/lp/prosthetic-leg/` | aktif |
  | `protez-kol-en/` | `/lp/prosthetic-arm/` | sonra |
  | `silikon-protez-en/` | `/lp/silicone-prosthetics/` | sonra |
  | `*-ru/`, `*-ar/` | (RU/AR) | sonra |
- **Deploy/önizleme:** Repo PUBLIC + **GitHub Pages AÇIK** → canlı önizleme:
  **https://omer6134.github.io/luxmed-lp/protez-bacak-en/** (her push'tan ~1 dk sonra güncellenir;
  video/CSS cache için Cmd+Shift+R). Geliştirme önizlemesi yine **lokal `python3 -m http.server 5173`
  + headless Chrome CDP screenshot** (bkz. §9). Gerçek yayın: klasör içeriği sunucuda `/lp/<slug>/`
  yoluna kopyalanır (build yok).

## 4) Teknoloji & konvansiyonlar
- Saf **statik HTML + CSS + vanilla JS**, build yok. Dosyalar: `index.html`, `css/styles.css`,
  `js/main.js`, `assets/{img,video}`.
- **Cache-busting:** `index.html` içinde `css/styles.css?v=N` ve `js/main.js?v=N`. CSS/JS
  değişince N'i artır. Şu an **styles.css v=34, main.js v=35**. Ayrıca değişen medyaya `?v=N`
  eklenir (ör. hero-pc.mp4?v=3, poster?v=3, silicone-vertical-poster.jpg?v=2, reel/genium/silicone img ?v).
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
- **Bölümler (GÜNCEL sıra + içerik):**
  - **Hero:** tam ekran cihaz-duyarlı video + teal overlay. Masaüstü `hero-pc.mp4` = **4 kesitlik
    medikal turizm kurgusu** (uçak inişi → havaalanı karşılama/tokalaşma → klinikte hasta konuşuyor →
    İstanbul'da yürüyen hasta; crossfade). Mobil = dikey rehab. Başlık **"Geleceğin *Protez
    Teknolojisi*"** (2. kısım gold em) + alt **"Yüzlerce Hastanın Ortak Tercihi"** + 4 istatistik
    (2016 / 2000+ / 4,9★ / 40 ülke). Hero'da CTA butonu yok.
  - **#journey — "Yeni Nesil Soket Teknolojisi":** sol video (journey.mp4), sağ 3 adım (Dijital Ölçü /
    1 Saatte Kişiye Özel Üretim / Kesintisiz Klinik Uzmanlığı) + gold numara & bağlantı çizgisi.
    Ana spot masaüstünde tek satır. (CTA kaldırıldı.)
  - **#silicone — "Estetik Silikon Protezler" (koyu yeşil):** tıkla-sesli gerçekçilik videosu +
    3 madde (Doku&Kıllara Kadar Detay / Kişiye Özel Cilt Tonu / Bacak-Ayak-Parmak-Chopart) +
    "%100 iade" güven notu + buton **"Bilgi ve Fiyat Al" → WhatsApp** (ön-dolu: "Silikon protezler
    hakkında bilgi almak istiyorum").
  - **#solutions — "Protez Bacak Çeşitleri":** belirgin **segment toggle** sekmeler (aktif yeşil dolgulu).
    Sıra: **Silikon (açılışta aktif)** · Diz Altı · Diz Üstü · Biyonik. Her panel: sol beyaz-zemin
    (#F1EADC) ürün görseli + sağ metin.
  - **#bionic — "Biyonik & mikroişlemcili" (koyu yeşil):** sessiz video + gold ✓ checklist + gold CTA.
  - **#team — "Arkanızdaki Güçlü Ekip":** asimetrik büyük foto + mikro sayaç (15+ / 40+).
  - **#why — "İstanbul'da dünya standartlarında uzman bakım" (açık):** **marka şeridi**
    (ottobock · Össur · Fior&Gentz — şimdilik **metin wordmark**, gerçek logo gelince değiştir) +
    **4 güven kartı** (5 Yıl Garanti / 2 Yıl Ücretsiz Bakım / Orijinal & Sertifikalı / Kendi Ülkenizde Servis).
  - **#process — "Uluslararası Hasta Süreci":** tek **toggle** — **Mobil Klinik** (biz size geliyoruz;
    aylık ülke ziyareti, 3 adım) ⇄ **İstanbul Express** (VIP sağlık turizmi, 4 adım). Büyük gold
    numaralı adım + çizgi. CTA "Ülkenize Geliyor muyuz? Öğrenin" → #quote.
  - **#patients — Instagram Reels carousel:** 4 dikey video kartı (tek satır carousel + oklar).
    Karta tıklayınca **SİTE İÇİ MODAL**'da Instagram `/embed/` iframe ile oynar (IG'ye yönlenmez);
    modalda "Instagram'da Aç" linki, altta ghost "İnstagram'a Git". **Gerçek reeller:**
    CwseNAbIrYP · Cx8T31todiN · DZpCwysIgti · C3KVCu2IQyK.
  - **#reviews (koyu yeşil):** Google yorum kartları (avatar+bayrak+protez tipi).
  - **#faq:** SSS. **#quote:** form (Ad, Telefon, E-posta, **Ülke dropdown**, Protez tipi, Mesaj)
    → Web3Forms; sağda "4 neden". **Footer:** "Luxmed Protez Kliniği" + iletişim + sosyal (2 sütun).
- **Header:** hero üzerinde şeffaf (logo beyaz) → kaydırınca opak krem. Logo `logo-mark.png`.
  Nav: Neden Luxmed(#why) · Silikon(#silicone) · Biyonik(#bionic) · SSS(#faq) + altın CTA.
  **Mobilde hamburger menü** (açılır panel: 4 nav linki + gold CTA; header katı kreme döner).
- **Mobil:** alt sticky bar (Ücretsiz Teklif Al + WhatsApp). Yüzen WhatsApp sadece masaüstü.
- **Bileşen desenleri (yeniden kullan):** `.tabs`/`.proc-toggle` (segment toggle + panel, JS `selectTab`/
  `selectProc`), `.jstep`/`.mstep__n` (büyük gold numara + çizgi), `.trust-card`/`.model`/`.bento` (kart),
  `.reel-modal` (IG video modal), `.spot`/`.video-embed` (tıkla-sesli), `.compare-chip`, `.guarantee-seal`.
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
- **Hero PC `hero-pc.mp4` (GÜNCEL):** `Videolar/Slider-yatay-video.mp4` (1920×1080, ~579sn) kaynağından
  4 kesit, xfade 0.4s, 1280×720 H.264 ~1.7MB: **uçak inişi (~18.5s) → havaalanı tokalaşma (~27.5s) →
  klinikte konuşma (~32s) → İstanbul'da yürüyen hasta (~491s; kaynakta film-çerçevesi crop=1600:900:160:90
  ile kırpıldı)**. Poster ilk kare (uçak). Mobil `hero-mobile.mp4` dikey rehab (aynı).
- **Diğer kaynak videolar** (`Videolar/`): Slider-dikey-video.mp4, hızlı-soket.mp4, dikey-silikon-protez.mp4,
  Silicone-prosthetic.mp4. Reel modal = Instagram `/embed/` iframe (indirme YOK).
- **#why marka logoları:** şimdilik CSS metin wordmark (`.brandlogo`); gerçek Ottobock/Össur/Fior&Gentz
  SVG/PNG gelince `assets/img/`e konup img'e çevrilebilir.
- `journey.mp4` (hızlı-soket 0-5+8-12+18-27 birleşik), `silicone-vertical.mp4` (sesli, tıkla-oynat),
  `bionic.mp4` (Ottobock-bionic-leg 58–60.7sn, sessiz), `reel-1..4.jpg` (dikey reel kapakları),
  `luxmed-ekibi.webp` (ekip fotosu), `patient-1..3.jpg`, `logo-mark.png`.
- Bayraklar: flagcdn.com (emoji değil).

## 8) Yayından önce doldurulacak PLACEHOLDER'lar
- Web3Forms `access_key` · GA4 + Google Ads + Meta Pixel ID'leri · gerçek Google yorumları +
  isimler + ülke/protez · **gerçek marka logo dosyaları** (Ottobock/Össur/Fior&Gentz — şu an metin) ·
  FB/LinkedIn URL'leri · hasta foto/isim kullanım onayı · **sayfayı İngilizceye çevir**.
- (Reels linkleri artık gerçek — tamam.) **Sonraki adım için önerilen eksik bölümler:** Öncesi/Sonrası
  hasta galerisi · şeffaf fiyat notu · klinik konumu + harita (kullanıcı "şimdilik yok" dedi).

## 9) Önizleme/screenshot iş akışı (macOS)
- Preview MCP sandbox bu yola erişemiyor → **Bash + `python3 -m http.server 5173`** + **headless
  Chrome** (`/Applications/Google Chrome.app`). Tam sayfa/scroll için **CDP** (remote-debugging-port
  + `--remote-allow-origins=*`, websocket-client). Mobil için `Emulation.setDeviceMetricsOverride`.
- UYARI: headless `--window-size` macOS'ta ~560px minimum uygular; dar screenshot'lar sağdan kırpık
  görünür (gerçek hata değil). Mobil taşma testini CDP device-emulation ile 394px'te `scrollWidth`
  ölçerek yap (== viewport ise taşma yok).
