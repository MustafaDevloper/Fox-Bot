# 🦊 Fox Bot - Discord Moderasyon & AI Botu

[![Discord.js](https://img.shields.io/badge/discord.js-14.14-blue.svg)](https://discord.js.org)
[![Node.js](https://img.shields.io/badge/node.js-16+-green.svg)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-purple.svg)](LICENSE)
[![Groq](https://img.shields.io/badge/Groq-API-red.svg)](https://groq.com)

Gelişmiş moderasyon sistemleri, yapay zeka sohbeti ve sesli özellikleri ile Discord sunucularınızı profesyonel şekilde yönetin.

## ✨ Ana Özellikler

### 🛡️ Güvenlik Sistemleri
- **Anti-Raid** - Ani giriş saldırılarını engelle
- **Anti-Spam** - Spam mesajlara karşı otomatik koruma
- **Anti-Link** - Link paylaşımı engeli
- **Anti-Invite** - Discord davet linklerini engelle
- **Anti-Bot** - Yetkisiz bot eklenmesini engelle
- **Anti-Mention** - Toplu etiket atılmasını engelle
- **Caps Limit** - Aşırı büyük harf kullanımını sınırla
- **Engelli Kelimeler** - Sunucu başına özel kelime filtreleme

### 🤖 AI & Sohbet
- **Groq AI** - Yapay zeka ile sohbet (`fox bot <soru>`)
- **TTS (Metin→Ses)** - ElevenLabs ile sesli metni oku
- **Sesli Kanal Desteği** - Ses kanallarında bot aktivitesi

### 🎵 Ses & Müzik
- **YouTube Müzik** - Doğrudan YouTube linkinden müzik çal
- **Ses Kanalı Bağlantısı** - Bot ses kanallarına bağlan
- **Seslendir Komutu** - Metni AI sesiyle oku (`/seslendir <metin>`)

### 📋 Moderasyon Araçları
- **Mute/Unmute** - Kullanıcıları kısıtla
- **Kick/Ban** - Sunucudan at veya yasakla
- **Mesaj Temizleme** - Toplu mesaj silme
- **Rol Yönetimi** - Rol ver, al, kilitle

### 📊 Log Sistemi
- **Moderasyon Logları** - Tüm mod işlemleri kayıtlanır
- **Mesaj Logları** - Silinen/düzenlenen mesajlar
- **Üye Logları** - Giriş/çıkış kaydı
- **Kanal Logları** - Kanal ve rol değişiklikleri

### 👑 Admin Paneli
- **Yönetici Sistemi** - Bot yöneticileri belirle
- **Admin Kontrol** - Tüm ayarları bir yerden yönet
- **Sunucu Otomatik Kurulumu** - Profesyonel kanal/rol yapısı oluştur

### 🎉 Eğlence
- **Taş Kağıt Makas** - Oyun oyna
- **Motivasyon Sözleri** - Rastgele ilham
- **Kişiye Özel Komutlar** - Selamla, mesaj yazdır

## 🚀 Hızlı Başlangıç

### Gereksinimler
- **Node.js** 16+
- **npm** veya **yarn**
- Discord Bot Token
- Groq API Anahtarı
- ElevenLabs API Anahtarı

### Kurulum

1. **Depoyu klonla**
```bash
git clone https://github.com/Fox-Softworks/Fox-Bot.git
cd Fox-Bot
```

2. **Paketleri yükle**
```bash
npm install
```

3. **.env dosyası oluştur**
```bash
# .env.example dosyasını kopyala
cp .env.example .env
```

4. **API Anahtarlarını ekle**
`.env` dosyasını aç ve şu değerleri doldur:
```
TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
GROQ_API_KEY=your_groq_api_key
ELEVEN_API_KEY=your_elevenlabs_api_key
BOT_OWNER=your_discord_user_id
```

5. **Botu çalıştır**
```bash
npm start
# veya geliştirme modu
npm run dev
```

### API Anahtarlarını Nasıl Alırsın?

#### Discord Bot Token
1. https://discord.com/developers/applications → "New Application" tıkla
2. "Bot" sekmesine git → "Add Bot"
3. TOKEN'ı kopyala → `.env` dosyasına yapıştır

#### Groq API Key
1. https://console.groq.com/keys ziyaret et
2. Hesap oluştur/giriş yap
3. Yeni API key oluştur → `.env` dosyasına yapıştır

#### ElevenLabs API Key
1. https://elevenlabs.io/app/api-keys ziyaret et
2. Hesap oluştur/giriş yap
3. API key oluştur → `.env` dosyasına yapıştır

## 📖 Komut Rehberi

### Slash Komutları (/)
```
/yardim           - Tüm komutları göster
/seslendir <metin> - Metni sesle oku
/adminpanel       - Yönetim paneline erişim
/setadmin <@user> - Kullanıcıyı admin yap
```

### Mesaj Komutları (yazı)
```
sese gel                - Bot ses kanalına bağlan
https://youtube.com/... - YouTube linkinden müzik çal
fox bot <soru>         - AI ile sohbet et
```

### Moderasyon
```
/mute <@user> <dakika>  - Kullanıcıyı sus
/kick <@user>           - Sunucudan at
/ban <@user>            - Yasakla
/purge <sayı>           - Mesaj sil
```

Tüm komutlar için: `/yardim`

## 📚 Dokümantasyon

- [Özellikler Rehberi](OZELLIKLER.md) - Detaylı özellik açıklamaları
- [Kurulum Kılavuzu](KURULUM.md) - Adım adım kurulum
- [API Referansı](package.json) - Bağımlılıklar

## 🔧 Yapılandırma

#### Ayarla Komutu
```
/antiraid true           - Raid korumasını aç
/modlog #mod-log         - Log kanalını ayarla
/blockword ekle kelime   - Engelli kelime ekle
/autorole @rol           - Oto-rol ayarla
```

#### db.json (Otomatik)
Bot tüm ayarları `db.json`'da tutar. Manuel düzenleme savcı değildir.

## 🐛 Sorun Giderme

### Seslendir Çalışmıyor
- Bot ses kanalında mı? (`sese gel` yazıp kontrol et)
- ELEVEN_API_KEY doğru mu?
- Dosya yazma izinleri var mı?

### YouTube Müzik Çalışmıyor
- Geçerli YouTube linki mi?
- Bot ses kanalında mı?
- ytdl-core güncel mi?

### AI Cevap Vermiyor
- GROQ_API_KEY doğru mu?
- İnternete bağlı mı?
- Rate limit aşıldı mı?

### Bot Çalışmıyor
```bash
# Terminal'de kontrol et:
node index.js

# Tüm paketleri yeniden yükle:
npm install
```

## 🌟 Başlıca Dosyalar

```
📁 Fox-Bot/
├── index.js              # Ana bot dosyası
├── package.json          # Bağımlılıklar
├── .env.example          # Örnek ortam değişkenleri
├── db.json               # Ayar veritabanı (otomatik)
├── systemprompt.txt      # AI sistem mesajı
├── OZELLIKLER.md         # Özellik dokumentasyonu
├── KURULUM.md            # Kurulum kılavuzu
├── README.md             # Bu dosya
└── LICENSE               # MIT Lisansı
```

## 👥 Katkıda Bulun

Hataları ve iyileştirme önerilerini bildir:
1. Fork et
2. Feature branch oluştur (`git checkout -b feature/AmazingFeature`)
3. Commit et (`git commit -m 'Add amazing feature'`)
4. Push et (`git push origin feature/AmazingFeature`)
5. Pull Request aç

## ⚠️ Güvenlik Notu

- **Token'ı asla paylaşma!** GitHub'a .env yükleme!
- API anahtarlarını gizli tut
- `BOT_OWNER` ID'sini doğru ayarla
- `.gitignore` dosyasını kontrol et

## 📝 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır - Detaylar için `LICENSE` dosyasına bak.

## 🔗 Linkler

- 🌐 **Website:** https://fox-software.netlify.app
- 📧 **Email:** mustafa@fox-software.netlify.app
- 🐙 **GitHub:** https://github.com/Fox-Softworks
- 💬 **Groq:** https://groq.com
- 🔊 **ElevenLabs:** https://elevenlabs.io

## 📞 İletişim

Sorularınız için Discord sunucumuzda bize ulaşabilirsiniz veya issue açabilirsiniz.

---

**Made with ❤️ by Fox Software**

*Geliştirici: Muhammed Mustafa Aydoğan*

*Last Updated: 2026-04-04*
