// Test dosyası - Ses sistemi kontrol
require('dotenv').config();
const ElevenLabs = require('elevenlabs-node');
const fs = require('fs');
const path = require('path');

async function testTTS() {
    console.log('🔍 TTS Test Başladı...');
    
    if (!process.env.ELEVEN_API_KEY) {
        console.error('❌ ELEVEN_API_KEY .env\'de bulunamadı!');
        return;
    }

    try {
        const voice = new ElevenLabs({
            apiKey: process.env.ELEVEN_API_KEY,
            voiceId: "pNInz6obpg8ndclK7Abv",
        });

        const fileName = path.join(__dirname, 'test_ses.mp3');
        console.log('📝 Metin sese çeviriyor...');

        await voice.textToSpeech({
            fileName: fileName,
            textInput: "Merhaba, test mesajıdır.",
            stability: 0.5,
            similarityBoost: 0.5,
            modelId: "eleven_multilingual_v2"
        });

        console.log(`✅ Dosya oluştu: ${fileName}`);
        
        if (fs.existsSync(fileName)) {
            const stats = fs.statSync(fileName);
            console.log(`✅ Dosya boyutu: ${stats.size} bytes`);
            fs.unlinkSync(fileName);
            console.log('✅ Dosya silindi');
        }

        console.log('✅ TTS ÇALIŞIYOR!');
    } catch (error) {
        console.error('❌ TTS HATASI:', error?.message);
        console.error('Full error:', error);
    }
}

testTTS();
