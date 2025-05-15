import "./App.css";

const Certificates = () => {
  const certificates_array = [
    { link: "certificates/html.pdf", title: "Introduction to HTML" },
    {
      link: "certificates/introduction_cloud_computing_codecademy.pdf",
      title: "Codecademy - Intro to cloud computing",
    },
    { link: "certificates/introduction_css.pdf", title: "CSS" },
    {
      link: "certificates/introduction_to_cloud_computing.pdf",
      title: "Coursera - Intro to cloud computing",
    },
    {
      link: "certificates/introduction_to_web_development_css_html_javascript.pdf",
      title: "Intro to web development with CSS, HTML & Javascript",
    },
    { link: "certificates/javascript_introduction.pdf", title: "Javascript" },
    {
      link: "certificates/javascript_unit_testing.pdf",
      title: "Javascript unit testing",
    },
    { link: "certificates/python_basics.pdf", title: "Python basics" },
    { link: "certificates/python_beginner.pdf", title: "Python Beginner" },
    {
      link: "certificates/python_data_science_pandas.pdf",
      title: "Python data science with pandas",
    },
    {
      link: "certificates/python_data_structures.pdf",
      title: "Python data structures",
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
      link: "certificates/python_introduction_data_science.pdf",
      title: "Python data science",
    },
    {
      link: "certificates/react_introduction.pdf",
      title: "React Introduction",
    },
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
        <a
          href="/"
          className="d-flex align-items-center text-body-emphasis text-decoration-none"
        >
          <h1 className="text-body-emphasis">Valeria Nevarez</h1>
        </a>
      </header>
      <main>
        <h2 className="text-body-emphasis">My portfolio</h2>
        <p className="fs-5 col-md-8">
          Quickly and easily get started with Bootstrap's compiled,
          production-ready files with this barebones example featuring some
          basic HTML and helpful links. Download all our examples to get
          started.
        </p>
        <div className="mb-5">
          <a href="../examples" className="btn btn-primary btn-lg px-4">
            Download examples
          </a>
        </div>
        <hr className="col-3 col-md-2 mb-5" />
        <div className="row g-5">
          <div className="col-md-6">
            <h2 className="text-body-emphasis">Projects</h2>
            <p>
              Ready to go beyond the starter template? Check out these open
              source projects that you can quickly duplicate to a new GitHub
              repository.
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
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="text-body-emphasis">Certificates</h2>
            <p>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </p>
            <Certificates></Certificates>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
