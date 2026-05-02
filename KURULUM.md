# 🚀 KURULUM KIŞI ADIMI ADIM

## Adım 1: BOT_OWNER'ı Ayarla (.env Dosyası)

`.env` dosyasını aç ve sonundaki satırı güncelle:

```
BOT_OWNER="SENIN_USER_ID_BURAYA"
```

**Kendi Discord ID'nizi nasıl bulursunuz?**

1. Discord'u aç
2. Ayarlar → Gelişmiş → Geliştirici Modu (ON yap)
3. Kendi profiline sağ tıkla
4. "Kullanıcı ID'sini Kopyala"
5. Örneğin: `BOT_OWNER="293947184927103486"`

---

## Adım 2: Yeni Komutları Yükle

Botu yeniden başlatarak slash komutlarını güncelle:

```bash
node index.js
```

Konsol çıktısı:
```
[✓] Groq SDK başarıyla başlatıldı.
(/) komutları yükleniyor...
Komutlar başarıyla yüklendi.
```

---

## Adım 3: Admin Ata

Discord'da botu bulut:

```
/setadmin @rahit_kim_istersen
```

Bu kişi artık:
- ✅ `/adminpanel` komutu
- ✅ `/blockword` komutu  
- ✅ Tüm kontrol komutları

---

## Adım 4: Özellikler Kontrol Et

### 4.1 Admin Panelini Aç
```
/adminpanel
```
Tüm sunucu ayarlarını göreceksin.

### 4.2 Yardım Rehberine Bak
```
/yardim
```
Tüm komutların detaylı açıklamaları görünecek.

### 4.3 Bot Yöneticilerini Listele
```
/admins
```
Kimin admin olduğunu göreceksin.

### 4.4 Engelli Kelimeler Ekle
```
/blockword ekle spamkelime
/blockword listele
```

### 4.5 Seslendir Testi
```
1. Bir ses kanalına gir
2. /seslendir merhaba
3. Bot seni sesle selamlar
```

---

## Yapılan Değişiklikler Özeti

### ✅ Güvenlik Onarıldı
- **Sorun:** Herkes admin ayarlarını değiştirebiliyordu
- **Çözüm:** Sadece bot sahibi ve atanan adminler erişebilir

### ✅ Ses Sistemi Onarıldı  
- **Sorun:** `/seslendir` çalışmıyordu
- **Çözüm:** Audio stream düzeltildi, TTS tamamen çalışıyor

### ✅ Yeni Özellikler Eklendi
- Bot yönetici sistemi
- Engelli kelimeler yönetimi
- Admin yönetim paneli
- Detaylı yardım rehberi

---

## 🎯 SONRAKI ADIMLAR

### 1. Sunucu Ayarlarını Yapılandır

```
/welcome #welcome_channel         → Hoş geldin mesajı
/goodbye #goodbye_channel         → Görüşürüz mesajı
/modlog #moderation              → Moderasyon logları
/antiraid true                   → Raid koruması
/antispam true                   → Spam koruması
/antilink true                   → Link engeli
```

### 2. Engelli Kelimeler Ekle

```
/blockword ekle spamword1
/blockword ekle spamword2
/blockword ekle yasak_kelime
```

### 3. Oto-Rol Ayarla

```
/autorole @yeni_üye_rolu
```

### 4. Destek Sistemi Async

```
/ticket_setup
```

---

## ⚙️ Yapılandırma Seçenekleri

### API Anahtarlarını Doğru Şekilde Almak

#### 1. **Discord Bot Token**
1. https://discord.com/developers/applications → Login yap
2. "New Application" → Ad ver → "Create"
3. "Bot" sekmesi → "Add Bot"
4. "TOKEN" kısmında "Copy" → `.env`'ye yapıştır
```
TOKEN=MzA3Nzk...
```

#### 2. **Discord Client ID**
Aynı sayfada, "General Information" sekmesinde:
```
CLIENT_ID=307779...
```

#### 3. **Groq API Key** (AI için)
1. https://console.groq.com/ → Google/hesap ile login
2. Sol menüden "API Keys"
3. "+ Create API Key"
4. Key'i kopyala → `.env`'ye yapıştır
```
GROQ_API_KEY=gsk_...
```
⚠️ **ÖNEMLİ:** Key'i kimseyle paylaşma!

#### 4. **ElevenLabs API Key** (Ses için) - KRITIK!
1. https://elevenlabs.io/ → Hesap oluştur/login
2. "API Keys" sekmesine git
3. "+ Create new API Key"
4. Key'i kopyala → `.env`'ye yapıştır
```
ELEVEN_API_KEY=sk_...
```

**Seslendir Hatası Alıyorsan:**
- ✅ API Key'in **sk_** ile başlıyor mu?
- ✅ Key kopyalama sırasında **boşluk** var mı? (Sil!)
- ✅ ElevenLabs hesabında **kredi** var mı? (Ücretsiz 10k karakter)
- ✅ `.env`'yi kaydedip **bot'u yeniden başlat**

#### 5. **Bot Owner ID** (Yönetici için)
1. Discord'da Ayarlar → Gelişmiş → Geliştirici Modu (ON)
2. Profiline sağ tıkla → "Kullanıcı ID'sini Kopyala"
```
BOT_OWNER=293947184927...
```

---

### Son Adım: Botu Başlat
```bash
node index.js
```

Eğer konsol'da hata varsa:
- API Key'ler `.env`'ye doğru yazılı mı?
- Boşluk var mı? (Kontrol et)
- Her key "=" sonra başlıyor mu?
- Bot'u yeniden başlatmayı dene

### Güvenlik Sistemleri
```
/antimention true      → Toplu etiket engelle
/antiraid true         → Raid koruması
/antibot true          → Bot eklenmesini engelle
/antilink true         → Link engeli
/antispam true         → Spam koruması
/antiinvite true       → Discord daveti engelle
/capslimit true        → BÜYÜK HARF sınırı
```

### Log Kanalları
```
/setlog #logs                    → Tüm loglar bir kanala
/modlog #mod-log                 → Moderasyon işlemleri
/joinlog #giriş                  → Sunucuya giriş
/leavelog #çıkış                 → Çıkış
/messagelog #mesaj-silme         → Silinen mesajlar
/editlog #mesaj-düzenleme       → Düzenlenen mesajlar
```

---

## 🆘 SORUN GİDERME

### "Bu komutu kullanmak için bot yöneticisi olmalısın"
```
Çözüm: /setadmin @senin_adın yap ve tekrar dene
```

### "Seslendir çalışmıyor"
```
1. Bot ses kanalında mı? (sese gel yazıp kontrol et)
2. ELEVEN_API_KEY .env'de doğru mu?
3. Yazma izinleri var mı? (temp klasör)
```

### "YouTube müzik çalışmıyor"
```
1. Geçerli YouTube linki mi?
2. Bot ses kanalında mı?
3. Bağlantı koptu mu? (tekrar /sese gel)
```

---

## 📝 Yeni Dosyalar

- **OZELLIKLER.md** - Tüm özellikler ve açıklamaları
- **.env** - BOT_OWNER eklendi

---

**Sorun Varsa:** Discord'da bot sahibine yazın!  
**Fox Software © 2024**
