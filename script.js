const translations = {
    en: {
        logo: "Hongxu Ai",
        introTitle: "Hello, I'm Hongxu Ai.",
        introSubtitle: "Product Designer based in City, Country.",
        aboutHeading: "About",
        aboutText: "Short introduction about yourself, your experience, skills, and interests.",
        navAbout: "About",
        navWorks: "Works",
        navResume: "Resume",
        navBlog: "Blog",
        navContact: "Contact"
    },
    zh: {
        logo: "我的名字",
        introTitle: "你好，我是我的名字。",
        introSubtitle: "产品设计师，现居城市，国家。",
        aboutHeading: "关于我",
        aboutText: "在这里简要介绍一下你的经历、技能和兴趣。",
        navAbout: "关于我",
        navWorks: "作品",
        navResume: "简历",
        navBlog: "博客",
        navContact: "联系"
    }
};

const languageSelect = document.getElementById('language-select');

function updateContent(lang) {
    const t = translations[lang];
    document.getElementById('logo').textContent = t.logo;
    document.getElementById('intro-title').textContent = t.introTitle;
    document.getElementById('intro-subtitle').textContent = t.introSubtitle;
    document.getElementById('about-heading').textContent = t.aboutHeading;
    document.getElementById('about-text').textContent = t.aboutText;
    document.getElementById('nav-about').textContent = t.navAbout;
    document.getElementById('nav-works').textContent = t.navWorks;
    document.getElementById('nav-resume').textContent = t.navResume;
    document.getElementById('nav-blog').textContent = t.navBlog;
    document.getElementById('nav-contact').textContent = t.navContact;
}

// Initial load
updateContent(languageSelect.value);

languageSelect.addEventListener('change', (e) => {
    updateContent(e.target.value);
});
