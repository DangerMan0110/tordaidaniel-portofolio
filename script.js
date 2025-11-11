const translations = {
  en: {
    pageTitle: "Dániel Tordai - Portfolio / CV",
    name: "Dániel Tordai",
    role: "Student · Computer Science",
    introTitle: "Introduction",
    introText: "My name is Dániel Tordai, a passionate computer science student at UMFST. This is my final year and I'm most interested in mobile and game development.",
    expTitle: "Experience",
    exp1Title: "Junior app developer",
    exp1Date: "2025 – present",
    exp1a: "Developing mobile applications in Flutter",
    exp1b: "Implementing database connections and API integrations",
    exp2Title: "Intern – Aprilred",
    exp2Date: "2025 July - September",
    exp2a: "Mobile development in Flutter",
    exp2b: "Working as a team on complex projects",
    studyTitle: "Studies",
    study1: 'UMFST "George Emil Palade" – BSc in Computer Science (2022 – Present)',
    study2: "Key subjects: Programming, Databases, Software Technology, Artificial Intelligence",
    skillsTitle: "Skills",
    contactTitle: "Contact",
    viewProfile: "View profile",
    formTitle: "Get in touch",
    formName: "Name:",
    formEmail: "Email:",
    formMessage: "Message:",
    formSend: "Send",
    hobbiesTitle: "Hobbies",
    contactNotice: "Note: this page may use machine translation."
  },
  hu: {
    pageTitle: "Tordai Dániel - Portfólió / Önéletrajz",
    name: "Tordai Dániel",
    role: "Hallgató · Számítástechnika",
    introTitle: "Bevezetés",
    introText: "A nevem Tordai Dániel, lelkes informatikus hallgató az UMFST-n. Jelenleg utolsó éves vagyok, leginkább a mobil- és játékfejlesztés érdekel.",
    expTitle: "Tapasztalat",
    exp1Title: "Junior alkalmazásfejlesztő",
    exp1Date: "2025 – jelenleg",
    exp1a: "Mobilalkalmazások fejlesztése Flutterben",
    exp1b: "Adatbázis-kapcsolatok és API integrációk megvalósítása",
    exp2Title: "Gyakornok – Aprilred",
    exp2Date: "2025 július - szeptember",
    exp2a: "Mobilfejlesztés Flutterben",
    exp2b: "Csapatmunka komplex projekteken",
    studyTitle: "Tanulmányok",
    study1: 'UMFST "George Emil Palade" – Számítástechnika BSc (2022 – jelenleg)',
    study2: "Fő tantárgyak: Programozás, Adatbázisok, Szoftvertechnológia, Mesterséges intelligencia",
    skillsTitle: "Készségek",
    contactTitle: "Kapcsolat",
    viewProfile: "Profil megtekintése",
    formTitle: "Kapcsolatfelvétel",
    formName: "Név:",
    formEmail: "Email:",
    formMessage: "Üzenet:",
    formSend: "Küldés",
    hobbiesTitle: "Hobbik",
    contactNotice: "Figyelem: ez az oldal gépi fordítást használhat."
  }
};

const userLang = navigator.language.startsWith("hu") ? "hu" : "en";
const t = translations[userLang];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  const footer = document.getElementById("translation-note");
  if (footer) footer.textContent = t.contactNotice;
});

document.addEventListener("DOMContentLoaded", () => {
  const hobbiesList = userLang === "hu"
    ? ["Programozás 💻", "Játékfejlesztés 🎮", "Zene 🎧", "Fotózás 📸", "Filmezés 🎥", "Kávézás ☕", "Sci-fi 📚", "3D modellezés 🧩", "Utazás ✈️"]
    : ["Coding 💻", "Game development 🎮", "Music 🎧", "Photography 📸", "Filmmaking 🎥", "Coffee ☕", "Sci-fi 📚", "3D modeling 🧩", "Travel ✈️"];
  const hobbiesEl = document.getElementById("hobbies");
  if (!hobbiesEl) return;
  const allHobbies = [...hobbiesList, ...hobbiesList];
  hobbiesEl.innerHTML = allHobbies.map(h => `<span>${h}</span>`).join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
      e.preventDefault();
      alert("⚠️ Please verify that you're not a robot before submitting.");
    }
  });
});
