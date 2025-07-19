import 'bootstrap/dist/css/bootstrap.min.css';

const Showcase = () => {
  const projects = [
    {
      title: "Bird Migration",
      description: "Birds migration visualisation  with animation created with folium,python.",
      image: "/images/project1.png",
      htmlFile: "/project1.html",
    },
    {
     title: "Bird Migration-2",
      description: "Birds migration visualisation created with folium,python",
      image: "/images/project2.png",
      htmlFile: "/project2.html",
    },
    {
      title: "odisha_land_cover_report",
      description: "odisha_land_cover_report.",
      image: "/images/project3.png",
      htmlFile: "/odisha_land_cover_report.html",
    },
  ];

  return (
    <section id="showcase" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Showcase</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <a
                    href={project.htmlFile}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
