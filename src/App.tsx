const learningTopics = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'] as const;

function App() {
  return (
    <main>
      <header>
        <img
          src="https://cataas.com/cat?width=480&height=480"
          alt="Случайная фотография кота"
          width="240"
          height="240"
        />
        <h1>Сапар</h1>
        <p>Студент второго курса · начинающий фронтенд-разработчик</p>
      </header>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">Обо мне</h2>
        <p>
          Учусь на втором курсе и изучаю фронтенд-разработку. Мне интересно
          превращать идеи в понятные и удобные веб-страницы, разбираться в новых
          технологиях и закреплять знания на практике.
        </p>
      </section>

      <section aria-labelledby="learning-heading">
        <h2 id="learning-heading">Сейчас изучаю</h2>
        <ul>
          {learningTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="goal-heading">
        <h2 id="goal-heading">Цель</h2>
        <p>
          Развиваться во фронтенде, создавать собственные проекты и получить
          первый опыт работы над реальными задачами.
        </p>
      </section>

      <footer>
        <p>Спасибо за внимание</p>
      </footer>
    </main>
  );
}

export default App;