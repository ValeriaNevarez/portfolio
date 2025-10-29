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
              I’ve gained hands-on experience at Cruisebound, where I built
              full-stack features using React, Next.js, Tailwind CSS, and Spring
              Boot, and collaborated in an Agile environment with GitHub,
              Datadog, and Jira.
              <br />
              <br />
              I also had the experience of developing Remote Switch at Cirotec
              Automation, a web app that lets businesses remotely control
              devices through calls and texts using React, Vercel, Twilio API,
              and Python.
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
                href="cv.pdf"
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

        <hr className="" />
        <div className="mb-5">
          <h2 className="text-body-emphasis">
            Cruisebound{" "}
            <img
              src="images/cruisebound_favicon.ico"
              className="img-fluid"
            ></img>
          </h2>
          <p className="fs-5">
            At Cruisebound, I contributed to building and maintaining full-stack
            features that improved platform performance and user experience. I
            developed responsive UIs with React, Next.js, Tailwind CSS, and
            HTML, and implemented backend services using Java/Kotlin (Spring
            Boot) for scalable, reliable integrations. I also used Datadog for
            monitoring, GitHub for version control, and followed Agile
            methodologies with Jira to manage project workflows.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-body-emphasis">
            Remote Switch <i class="bi bi-lightbulb"></i>
          </h2>
          <p className="fs-5">
            In my internship with Cirotec Automation, I worked on Remote Switch.
            This is a web application that allows businesses to remotely control
            the power of electronic devices through phone calls and text
            messages. I mainly used React, Vercel, and the Twilio API for the
            web app, and Python for scripting automated calls and emails.
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
            Here are some of the certificates I've earned while exploring and
            developing my skills in programming:
          </p>
          <Certificates></Certificates>
        </div>
      </main>
    </div>
  );
};

export default App;
