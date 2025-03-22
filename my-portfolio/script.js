const translations = {
    en: {
        introTitle: "Hello, I'm Your Name.",
        introSubtitle: "UX/UI Designer based in City, Country.",
        about: "Short introduction about yourself, your experience, skills, and interests."
    },
    zh: {
        introTitle: "你好，我是你的名字。",
        introSubtitle: "UX/UI设计师，现居城市，国家。",
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
