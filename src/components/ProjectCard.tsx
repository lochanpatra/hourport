import { useState } from 'react';
import styles from './ProjectCard.module.css';

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, image, link }: Props) => {
  const [show, setShow] = useState(false);
  const modalId = title.toLowerCase().replace(/\s+/g, '-') + '-modal';

  return (
    <>
      <div className={`card h-100 shadow-sm ${styles.card}`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <button
            className="btn btn-outline-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modalId}-label`}>
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src={image} alt={title} className="img-fluid rounded mb-3" />
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
