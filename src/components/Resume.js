import '../css/resume.css';

export default function Resume() {
  return (
    <div class="resume">
        <section>
            <h2>Profile</h2>
            <p>Detail-oriented web developer with over 5 years of experience in creating dynamic websites and web applications. Proficient in HTML, CSS, JavaScript, and Python. Strong problem-solving skills and a collaborative team player.</p>
        </section>
        <section>
            <h2>Experience</h2>
            <div class="experience-item">
                <h3>Senior Web Developer</h3>
                <p>XYZ Company</p>
                <p>June 2020 - Present</p>
                <ul>
                    <li>Lead a team of developers to build and maintain company website and web applications.</li>
                    <li>Implemented responsive design to enhance user experience on mobile devices.</li>
                    <li>Collaborated with designers and product managers to create user-friendly interfaces.</li>
                </ul>
            </div>
            <div class="experience-item">
                <h3>Web Developer</h3>
                <p>ABC Inc.</p>
                <p>January 2017 - May 2020</p>
                <ul>
                    <li>Developed and maintained the company’s e-commerce website.</li>
                    <li>Optimized website performance and improved load times by 30%.</li>
                    <li>Worked with cross-functional teams to define and implement new features.</li>
                </ul>
            </div>
        </section>
        <section>
            <h2>Education</h2>
            <p>Bachelor of Science in Computer Science</p>
            <p>University of Somewhere, 2016</p>
        </section>
    </div>
  );
}
