import "./App.css";

const Certificates = () => {
  const certificates_array = [
    {
      link: "certificates/introduction_cloud_computing_codecademy.pdf",
      title: "Codecademy - Intro to cloud computing",
    },
    {
      link: "certificates/introduction_to_cloud_computing.pdf",
      title: "IBM - Intro to cloud computing",
    },
    {
      link: "certificates/react_introduction.pdf",
      title: "React Introduction",
    },
    {link:"certificates/react_forms.pdf",
      title: "React Forms"
    },
    {
      link: "certificates/introduction_to_web_development_css_html_javascript.pdf",
      title: "Introduction to Web Development with CSS, HTML & Javascript",
    },
    { link: "certificates/html.pdf", title: "Introduction to HTML" },
    { link: "certificates/introduction_css.pdf", title: "CSS" },
    { link: "certificates/javascript_introduction.pdf", title: "Javascript" },
    { link: "certificates/github.pdf", title: "Github" },
    {
      link: "certificates/javascript_unit_testing.pdf",
      title: "Javascript Unit Testing",
    },
    {
      link: "certificates/python_intermediate_data_science_pandas.pdf",
      title: "Python Intermediate",
    },
    {
      link: "certificates/python_intermediate_object_oriented_programming.pdf",
      title: "Python Object Oriented Programming",
    },
    {
      link: "certificates/python_data_science_pandas.pdf",
      title: "Python Data Science with Pandas",
    },
    {
      link: "certificates/python_data_structures.pdf",
      title: "Python Data Structures",
    },
    {
      link: "certificates/python_introduction_data_science.pdf",
      title: "Python Data Science",
    },
    { link: "certificates/python_basics.pdf", title: "Python Basics" },
    { link: "certificates/python_beginner.pdf", title: "Python Beginner" },
  ];
  return (
    <ul className="list-unstyled ps-0">
      {certificates_array.map((item, index) => {
        return (
          <li key={index}>
            <a className="icon-link mb-1 fs-5" href={item.link} target="_blank">
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const App = () => {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <h1 className="text-body-emphasis">Valeria Nevarez</h1>
      </header>
      <main>
        <h2 className="text-body-emphasis">
          My portfolio <i class="bi bi-layout-text-sidebar-reverse"></i>{" "}
        </h2>
        <div className="row">
          <div className="fs-5 col-md-8">
            <p>
              Hi! I'm Valeria Nevarez, a Biotechnology Engineer turned Software
              Developer passionate about creating impactful tech solutions.
              <br />
              <br />
              I build full-stack projects with an engineering mindset: clear
              requirements, solid architecture, reliable integrations, and
              maintainable code. My Remote Switch project is a web app that
              lets businesses remotely control devices through calls and texts
              using React, Vercel, the Twilio API, and Python.
              <br />
              <br />
              My certifications in cloud, web development, testing, and Python
              back up my hands-on work and show continuous growth in software
              engineering fundamentals.
              <br />
              <br />
              I’m always excited to learn, grow, and build meaningful
              applications.
              <br />
              <br />
              Welcome to my portfolio!
            </p>
            <div className="mb-5">
              <a
                href="Cv%20Maria%20Nevarez.docx.pdf"
                target="_blank"
                className="btn btn-primary btn-lg px-4 me-5"
              >
                My CV
              </a>

              <a
                href="https://www.linkedin.com/in/valeria-nevarez/?locale=en_US"
                className="btn btn-primary btn-lg px-4"
                target="_blank"
              >
                Linked <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <p className="fs-5 col-md-4">
            <img src="images/pc_plants.png" className="img-fluid"></img>
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-body-emphasis">
            Cruisebound Assessment{" "}
            <img
              src="images/cruisebound_favicon.ico"
              className="img-fluid"
            ></img>
          </h2>
          <p className="fs-5">
            I completed a Cruisebound assessment that evaluated my engineering
            approach to full-stack work, including React, Next.js, Tailwind CSS,
            and Spring Boot, plus modern tooling and workflows.
          </p>
          <ul className="list-unstyled ps-0">
            <li>
              <a
                href="https://cruisebound.com"
                rel="noopener"
                target="_blank"
                className="fs-5"
              >
                Cruisebound
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-body-emphasis">
            Remote Switch <i class="bi bi-lightbulb"></i>
          </h2>
          <p className="fs-5">
            Remote Switch is a personal project I designed and built. This web
            application lets businesses remotely control the power of electronic
            devices through phone calls and text messages. I engineered the
            frontend in React, deployed with Vercel, integrated Twilio APIs, and
            automated calls and emails with Python.
          </p>
          <ul className="list-unstyled ps-0">
            <li>
              <a
                href="https://github.com/ValeriaNevarez/remote_switch"
                rel="noopener"
                target="_blank"
                className="fs-5"
              >
                Remote switch
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ValeriaNevarez?tab=repositories"
                rel="noopener"
                target="_blank"
                className="fs-5"
              >
                See other projects in my Github
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="text-body-emphasis">
            Certificates <i class="bi bi-magic"></i>{" "}
          </h2>
          <p className="fs-5">
            These certificates reinforce my software engineering foundation:
            cloud concepts, web development, testing practices, and Python.
          </p>
          <Certificates></Certificates>
        </div>
      </main>
    </div>
  );
};

export default App;
