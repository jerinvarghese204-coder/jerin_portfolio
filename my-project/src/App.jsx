import './App.css'

function App() {
  const resume = {
    name: 'Jerin P Varghese',
    title: 'Student | Robotics & AI Engineer',
    about: 'Aspiring Robotics and Artificial Intelligence Engineer with a passion for coding and problem solving. Seeking an internship or entry-level position to leverage programming skills and contribute to innovative projects.',
    contact: {
      phone: '9207200408',
      email: 'Jerinvarghese204@gmail.com',
      location: 'Pathanamthitta, Kerala'
    },
    education: [
      {
        school: 'NMAMIT NITTE',
        degree: 'Bachelor of Technology in Robotics and AI Engineering',
        location: 'Karkala, Karnataka',
        graduation: 'Expected 2027'
      },
      {
        school: 'Good Shepherd Public School',
        degree: 'High School',
      }
    ],
    languages: ['Malayalam (Native)', 'English', 'Hindi', 'Kannada (Beginner)'],
    skills: {
      'Programming Languages': ['Python', 'Java', 'C++'],
      'Web Technologies': ['HTML', 'CSS', 'JavaScript'],
      'Frameworks': ['React', 'Node.js'],
      'Databases': ['MySQL', 'MongoDB'],
      'Tools': ['Git', 'Visual Studio Code', 'Eclipse'],
      'Soft Skills': ['Problem-solving', 'Teamwork', 'Communication']
    },
    projects: [
      {
        title: 'Personal Portfolio Website',
        description: 'Developed a responsive personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills.'
      },
      {
        title: 'Online Quiz Application',
        description: 'Created a web-based quiz application using React and Node.js, allowing users to take quizzes and track their scores.'
      }
    ]
  }

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="name-section">
            <h1 className="name">{resume.name}</h1>
            <p className="title">{resume.title}</p>
          </div>
          <div className="contact-info">
            <a href={`tel:${resume.contact.phone}`}>📞 {resume.contact.phone}</a>
            <a href={`mailto:${resume.contact.email}`}>✉️ {resume.contact.email}</a>
            <span>📍 {resume.contact.location}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        <section className="section about-section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">{resume.about}</p>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {resume.education.map((edu, idx) => (
              <div key={idx} className="education-item">
                <div className="edu-header">
                  <h3>{edu.school}</h3>
                  {edu.graduation && <span className="graduation">{edu.graduation}</span>}
                </div>
                <p className="degree">{edu.degree}</p>
                {edu.location && <p className="location">{edu.location}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="section">
          <h2 className="section-title">Languages</h2>
          <div className="tags">
            {resume.languages.map((lang, idx) => (
              <span key={idx} className="tag">{lang}</span>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {Object.entries(resume.skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skill-items">
                  {items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-list">
            {resume.projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Jerin P Varghese. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
