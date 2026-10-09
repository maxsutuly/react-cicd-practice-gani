import './App.css'

const stack = [
  { n: '01', title: 'ReactJS', text: 'Библиотека для создания интерфейсов. Этот сайт написан на ней.' },
  { n: '02', title: 'GitHub', text: 'Хранение кода и история всех изменений проекта.' },
  { n: '03', title: 'CI/CD', text: 'Каждый push автоматически собирается и выкладывается.' },
]

function App() {
  return (
    <div className="page">
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <header className="nav">
        <span className="brand">Ғани<span>.</span></span>
        <span className="tag">ССП-2401 · Shakarim University</span>
      </header>

      <main className="hero">
        <p className="hello">Сәлем, меня зовут</p>
        <h1>
          Ғани <span className="grad">Жұмашев</span>
        </h1>
        <p className="lead">
          Студент 3 курса, изучаю cloud-технологии и веб-разработку.
          Это моё первое React-приложение: собрано на Vite и
          автоматически публикуется через CI/CD.
        </p>

        <div className="actions">
          <a
            className="btn primary"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Мой GitHub →
          </a>
          <a className="btn ghost" href="#stack">Что внутри</a>
        </div>

        <section id="stack" className="cards">
          {stack.map((s) => (
            <article className="card" key={s.title}>
              <span className="num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        © 2026 Ғани · Практическая работа №2 · Семей
      </footer>
    </div>
  )
}

export default App