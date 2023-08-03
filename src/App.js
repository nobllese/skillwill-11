import logo from './logo.svg';
import './App.css';



function App() {
  const name = "Tamar Jafaridze";
  const title = "Junior Frontend-Developer";
  const aboutMe = "I speak three languages: English, JavaScript, and Emoji.";
  const skills = ["HTML", "CSS", "JavaScript", "Master of the console.log() arts 🧙‍♀️"];
  

  return (
    <div className="portfolio">
      <header>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </header>

      <section className="about">
        <h3>About Me</h3>
        <p>{aboutMe}</p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      
      <footer>
        <p> Smile More!</p>
      </footer>
    </div>
  );
}

export default App;