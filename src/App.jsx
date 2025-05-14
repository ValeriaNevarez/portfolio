import "./App.css";

function App() {
  return (
    <div class="col-lg-8 mx-auto p-4 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center text-body-emphasis text-decoration-none"
        >
          <h1 class="text-body-emphasis">Valeria Nevarez</h1>
        </a>
      </header>
      <main>
        <h2 class="text-body-emphasis">My portfolio</h2>
        <p class="fs-5 col-md-8">
          Quickly and easily get started with Bootstrap's compiled,
          production-ready files with this barebones example featuring some
          basic HTML and helpful links. Download all our examples to get
          started.
        </p>
        <div class="mb-5">
          <a href="../examples" class="btn btn-primary btn-lg px-4">
            Download examples
          </a>
        </div>
        <hr class="col-3 col-md-2 mb-5" />
        <div class="row g-5">
          <div class="col-md-6">
            <h2 class="text-body-emphasis">Projects</h2>
            <p>
              Ready to go beyond the starter template? Check out these open
              source projects that you can quickly duplicate to a new GitHub
              repository.
            </p>
            <ul class="list-unstyled ps-0">
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
          <div class="col-md-6">
            <h2 class="text-body-emphasis">Certificates</h2>
            <p>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </p>
            <ul class="list-unstyled ps-0">
              <li>
                <a
                  class="icon-link mb-1"
                  href="certificates/introduction_to_cloud_computing.pdf"
                  target="_blank"
                >
                  Introduction to Cloud Computing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
