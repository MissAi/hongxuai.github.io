const translations = {
    en: {
        introTitle: "Hello, I'm Hongxu Ai.",
        introSubtitle: "Product Designer based in Singapore.",
        about: "Short introduction about yourself, your experience, skills, and interests."
    },
    zh: {
        introTitle: "你好，我是艾洪旭。",
        introSubtitle: "产品设计师，现居新加坡。",
        about: "在这里简要介绍一下你的经历、技能和兴趣。"
    }
};

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.getElementById('intro-title').textContent = translations[lang].introTitle;
    document.getElementById('intro-subtitle').textContent = translations[lang].introSubtitle;
    document.getElementById('about-text').textContent = translations[lang].about;
});
