# Chrome Extension with Node.js & Webpack Boilerplate

Bu proje, modern bir Chrome uzantısı geliştirmek için hazırlanmış bir şablon projesidir. Webpack, Babel ve diğer modern araçlarla donatılmıştır.

## 📦 Ön Gereksinimler

- Node.js v16 veya üzeri
- npm v8 veya üzeri
- Google Chrome (güncel sürüm)

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/sizin-repo-adresiniz.git
cd chrome-extension-with-node
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

## 🛠️ Geliştirme Modu

1. Development sunucusunu başlatın:
```bash
npm run dev
```

2. Chrome'da uzantıyı yükleyin:
- `chrome://extensions/` adresini açın
- "Developer mode"u aktif edin
- "Load unpacked" butonuna tıklayın
- `public` klasörünü seçin

3. Geliştirme yaparken:
- Kod değişikliklerinizi yapın
- Değişiklikler otomatik olarak `public` klasörüne yansıtılacak
- Chrome'da uzantı sayfasında ⭯ "Reload" butonuna basarak değişiklikleri görün

## 🔨 Production Build

1. Production build alın:
```bash
npm run build
```

2. Oluşan `public` klasörünü Chrome'a yükleyin (yukarıdaki adımları takip edin)

## 📂 Proje Yapısı

```
src/
├── background/       # Arka plan scriptleri
│   └── background.js
├── content/          # İçerik scriptleri
│   └── content.js
├── popup/            # Popup arayüzü
│   ├── popup.js
│   ├── popup.css
│   └── popup.html
├── icons/            # Uzantı ikonları
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── manifest.json     # Uzantı manifest dosyası
```

## 🔧 Önemli Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Development sunucusunu başlatır |
| `npm run build` | Production build alır |
| `npm run watch` | Dosya değişikliklerini izler |
| `npm run clean` | `public` klasörünü temizler |

## 💡 Geliştirme İpuçları

1. **Hızlı Yenileme**:
   - Kod değişiklikleriniz `public` klasörüne otomatik yazılır
   - Değişiklikleri görmek için Chrome'da uzantıyı yeniden yükleyin

2. **Debugging**:
   - Background scriptler için: `chrome://extensions/` > "Inspect views"
   - Popup için: Popup'a sağ tık > "Inspect"
   - Content scriptler için: Sayfada sağ tık > "Inspect"

3. **CSS/HTML Değişiklikleri**:
   - Popup HTML/CSS değişiklikleri genellikle sayfayı yenilemeden görünür
   - Görmüyorsanız popup'ı kapatıp tekrar açın

## ⚠️ Bilinen Sorunlar & Çözümler

1. **"Manifest yüklenemedi" hatası**:
   - `public/manifest.json` dosyasının varlığını kontrol edin
   - Chrome'da önceki yüklemeyi kaldırıp yeniden deneyin

2. **Script yüklenemiyor hatası**:
   - `public` klasöründeki JS dosyalarının isimlerini kontrol edin
   - Manifest'teki dosya yollarını doğrulayın

3. **Değişiklikler görünmüyor**:
   - Chrome'da uzantıyı tamamen kapatıp açın
   - Bazen tarayıcıyı tamamen yeniden başlatmak gerekebilir

## 📦 Kullanılan Teknolojiler

- Webpack 5
- Babel (ES6+ desteği için)
- HTML/CSS/JS
- Webpack Dev Server (development için)

## 📜 Lisans

MIT License - Projeyi istediğiniz gibi kullanabilir ve değiştirebilirsiniz.

---

Bu dokümanı projenizin ihtiyaçlarına göre güncelleyebilirsiniz. Geliştirme sırasında karşılaştığınız özel durumları da eklemeyi unutmayın.