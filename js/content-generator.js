const ContentGenerator = {
    keywords: {
        'uzay': { theme: 'theme-zen', text: 'Galaksiler arası bir yolculuktayiz. Yıldızlar parlıyor, zaman akıyor...', color: '#a855f7' },
        'hüzün': { theme: 'theme-calm', text: 'Yağmur damlaları camı vura vura, gökyüzü griye büründü...', color: '#2dd4bf' },
        'enerji': { theme: 'theme-energy', text: 'Sonsuz bir güç akışı! Her hücreniz titreşiyor, ışık hızında hareket ediyorsunuz!', color: '#facc15' },
        'doğa': { theme: 'theme-calm', text: 'Ormanın derinliklerinde, rüzgar ağaçların arasında fısıldıyor...', color: '#4ade80' }
    },

    generateContent: (input) => {
        const lowerInput = input.toLowerCase().trim();
        
        // Anahtar kelime eşleşmesi
        for (const [key, data] of Object.entries(ContentGenerator.keywords)) {
            if (lowerInput.includes(key)) {
                return { ...data, found: true };
            }
        }

        // Varsayılan yanıt
        return {
            theme: null,
            text: `"\${input}" kelimesi ilginç bir enerji taşıyor. Sanatçının fırçası henüz bu konuyu tam anlamıyla yakalayamadı, ama denemeye devam ediyor...`,
            color: Utils.randomColor(),
            found: false
        };
    },

    updateUI: (data) => {
        const contentBox = document.getElementById('dynamicContent');
        const body = document.body;

        // Temayı güncelle
        if (data.theme) {
            body.className = data.theme;
        } else {
            body.className = '';
        }

        // Metni güncelle
        contentBox.innerHTML = `<p style="color: \${data.color}; font-size: 1.2rem;">\${data.text}</p>`;
        
        // Animasyon tetikleme (CSS class reset)
        contentBox.style.animation = 'none';
        contentBox.offsetHeight; /* Reflow */
        contentBox.style.animation = 'fadeInUp 0.8s ease-out';
    }
};
