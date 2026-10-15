
"use client";

import { useState } from "react";

const content = {
  LV: {
    eyebrow: "SIA LL & K · ĒKU PĀRVALDĪŠANA",
    title: "Jūsu māja. Mūsu atbildība.",
    subtitle:
      "Pārdomāta apsaimniekošana, sakārtota vide un skaidra saziņa ar īpašniekiem.",
    intro: "Iepazīstiet mūsu piedāvājumu",
    description:
      "Izvēlieties prezentāciju un iepazīstieties ar mūsu pieeju mājas pārvaldīšanai.",
    cards: [
      {
        title: "Ēkas apsaimniekošana",
        description:
          "Ikdienas pārvaldīšana, tehniskā uzraudzība un pārdomāta darbu organizēšana.",
        file: "/presentations/llk-lv.pdf",
      },
      {
        title: "Mūsu pieeja un darbi",
        description:
          "Kā organizējam apsaimniekošanu un rūpējamies par kopīpašumu.",
        file: "/presentations/llk-lv.pdf",
      },
      {
        title: "Piedāvājums jūsu mājai",
        description:
          "Pārskatāma pieeja, darbu prioritātes un sadarbības principi.",
        file: "/presentations/llk-lv.pdf",
      },
    ],
    open: "Atvērt prezentāciju",
    footer: "Sakārtota vide. Skaidra pārvaldība. Ilgtspējīgs plāns.",
  },
  ENG: {
    eyebrow: "LL & K · PROPERTY MANAGEMENT",
    title: "Your building. Our responsibility.",
    subtitle:
      "Thoughtful property management, well-maintained surroundings and clear communication with owners.",
    intro: "Explore our proposal",
    description:
      "Choose a presentation to learn more about our approach to property management.",
    cards: [
      {
        title: "Property management",
        description:
          "Day-to-day management, technical supervision and organised maintenance.",
        file: "/presentations/llk-en.pdf",
      },
      {
        title: "Our approach and work",
        description:
          "How we manage buildings and care for shared property.",
        file: "/presentations/llk-en.pdf",
      },
      {
        title: "Proposal for your building",
        description:
          "Transparent management, work priorities and cooperation.",
        file: "/presentations/llk-en.pdf",
      },
    ],
    open: "Open presentation",
    footer: "Well-maintained spaces. Clear management. A sustainable plan.",
  },
  RU: {
    eyebrow: "LL & K · УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ",
    title: "Ваш дом. Наша ответственность.",
    subtitle:
      "Продуманное управление, ухоженная территория и понятная связь с собственниками.",
    intro: "Ознакомьтесь с предложением",
    description:
      "Выберите презентацию, чтобы узнать больше о нашем подходе к управлению домом.",
    cards: [
      {
        title: "Управление домом",
        description:
          "Ежедневное управление, технический контроль и организация работ.",
        file: "/presentations/llk-ru.pdf",
      },
      {
        title: "Наш подход и работа",
        description:
          "Как мы организуем управление и заботимся об общем имуществе.",
        file: "/presentations/llk-ru.pdf",
      },
      {
        title: "Предложение для вашего дома",
        description:
          "Прозрачное управление, приоритеты работ и сотрудничество.",
        file: "/presentations/llk-ru.pdf",
      },
    ],
    open: "Открыть презентацию",
    footer: "Порядок. Прозрачное управление. Долгосрочный план.",
  },
};

type Language = keyof typeof content;

export default function Home() {
  const [language, setLanguage] = useState<Language>("LV");
  const t = content[language];

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="LL & K">
          <span className="brand-mark">L</span>
          <span>LL <i>&</i> K</span>
        </a>

        <nav className="languages" aria-label="Language">
          {(["LV", "ENG", "RU"] as Language[]).map((lang) => (
            <button
              key={lang}
              className={language === lang ? "language active" : "language"}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <span className="gold-line" />
          <h1>{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
          <a className="hero-link" href="#presentations">
            {t.intro} <span>↓</span>
          </a>
        </div>
      </section>

      <section className="presentations" id="presentations">
        <p className="eyebrow">LL & K / PRESENTATIONS</p>
        <h2>{t.intro}</h2>
        <p className="section-description">{t.description}</p>

        <div className="card-grid">
          {t.cards.map((card, index) => (
            <article className="presentation-card" key={card.title}>
              <div className="card-number">0{index + 1}</div>
              <span className="gold-line" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a
                className="card-link"
                href={card.file}
                target="_blank"
                rel="noreferrer"
              >
                {t.open} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>LL <i>&</i> K</span>
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
