document.addEventListener('DOMContentLoaded', () => {
    // Canvas başlatma
    new ParticleSystem('artCanvas');

    // Input dinleyicisi
    const inputField = document.getElementById('userInput');
    const themeBtn = document.getElementById('themeBtn');
    const contentBox = document.getElementById('dynamicContent');

    // Enter tuşu ile gönderim
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && inputField.value.trim() !== '') {
            handleInput(inputField.value);
            inputField.value = '';
        }
    });

    // Buton ile rastgele tema
    themeBtn.addEventListener('click', () => {
        const randomKeywords = Object.keys(ContentGenerator.keywords);
        const randomWord = randomKeywords[Utils.randomInt(0, randomKeywords.length - 1)];
        inputField.value = randomWord;
        handleInput(randomWord);
    });

    function handleInput(text) {
        const data = ContentGenerator.generateContent(text);
        ContentGenerator.updateUI(data);
        
        // Parçacık renklerini güncelle (opsiyonel efekt)
        const particles = document.querySelectorAll('#artCanvas').length ? 
            document.querySelector('canvas').getContext('2d') : null;
        // Basitlik için burada doğrudan renk değişikliği yerine 
        // yeni bir animasyon döngüsü tetiklenebilir.
    }

    // Başlangıç mesajı
    setTimeout(() => {
        ContentGenerator.updateUI({
            theme: null,
            text: "Merhaba! Burası seninle yaşayan bir atölye. Bir kelime yazarak başlayalım.",
            color: "#e2e8f0",
            found: false
        });
    }, 1000);
});
