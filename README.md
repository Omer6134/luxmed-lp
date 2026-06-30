# luxmed-lp

Luxmed yabancı dil landing page'leri. Saf statik **HTML + CSS + vanilla JS** (build adımı yok),
özgün İskandinav tasarım. Her landing kendi klasöründe, bağımsız.

## Projeler
| Klasör | Dil | Ürün | Hedef URL |
|---|---|---|---|
| `protez-bacak-en/` | EN | Prosthetic leg | `luxmedprotez.com/lp/prosthetic-leg/` |
| `protez-kol-en/` *(sonra)* | EN | Prosthetic arm | `luxmedprotez.com/lp/prosthetic-arm/` |
| `silikon-protez-en/` *(sonra)* | EN | Silicone prosthetics | `luxmedprotez.com/lp/silicone-prosthetics/` |
| … RU / AR versiyonları | | | |

> Klasör adları organizasyon için Türkçe; **public URL** SEO için İngilizce. Deploy'da
> ör. `protez-bacak-en/` içeriği sunucuda `/lp/prosthetic-leg/` yoluna kopyalanır.

## Geliştirme / önizleme
```bash
cd protez-bacak-en
python3 -m http.server 5173
# http://127.0.0.1:5173
```

## Yayına almadan önce doldurulacaklar (placeholder)
`protez-bacak-en/` içinde:
- **Web3Forms anahtarı** — `index.html` → `name="access_key"` değeri (`YOUR_WEB3FORMS_ACCESS_KEY`).
  Form bildirimleri `omer@luxmedprotez.com`'a gider. https://web3forms.com (ücretsiz).
- **Analytics/Ads** — `index.html` `<head>` içindeki placeholder yorum bloğu: GA4 (`G-…`),
  Google Ads (`AW-…` + conversion label), Meta Pixel. `js/main.js` `track()` bunlara bağlanır.
- **Google yorumları** — `#patients` bölümündeki örnek yorumlar (`TODO`) gerçek Google
  Maps yorumlarıyla değiştirilecek.

## Tasarım
- Palet: kağıt `#F7F5F0`, antrasit `#1C1B19`, evergreen `#2F4A3E`, clay `#B5654A`.
- Tipografi: Fraunces (serif başlık) + Inter (gövde).
- Tüm token'lar `css/styles.css` `:root` içinde.

## Medya
`assets/video/` — hero (PC yatay 8sn, mobil dikey 10sn), silikon ürün videosu; hepsi
sıkıştırılmış (kaynak 200MB → ~2MB). Görseller `assets/img/` (optimize).
