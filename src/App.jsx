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
            <a className="icon-link mb-1" href={item.link} target="_blank">
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
              Hi! I'm Valeria Nevárez, a Biotechnology Engineer with a growing
              passion for software development. I've been learning and building
              projects using HTML, CSS, JavaScript, React, Python, and
              Git/GitHub. I'm excited to start my career as a software engineer,
              where I can keep learning, build meaningful applications, and
              contribute to real-world tech solutions. Welcome to my portfolio!
            </p>
            <div className="mb-5">
              <a
                href="../examples"
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
        <div className="row g-5">
          <div className="col-md-6">
            <h2 className="text-body-emphasis">
              Projects <i class="bi bi-lightbulb"></i>
            </h2>
            <p>
              In my latest internship, I worked on Remote Switch. This is a web
              application that allows businesses to remotely control the power
              of electronic devices through phone calls and text messages. I
              mainly used React, Vercel, and the Twilio API for the web app, and
              Python for scripting automated calls and emails.
            </p>
            <ul className="list-unstyled ps-0">
              <li>
                <a
                  href="https://github.com/ValeriaNevarez/remote_switch"
                  rel="noopener"
                  target="_blank"
                >
                  Remote switch
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ValeriaNevarez"
                  rel="noopener"
                  target="_blank"
                >
                  See other projects in my Github
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="text-body-emphasis">
              Certificates <i class="bi bi-magic"></i>{" "}
            </h2>
            <p>
              Here are some of the certificates I've earned while exploring and
              developing my skills in programming:
            </p>
            <Certificates></Certificates>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
