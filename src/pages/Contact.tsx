import styles from './Contact.module.css';

// const Contact = () => {
//   return (
//     <section className={styles.container}>
//       <h1>Contact</h1>
//       <p>Feel free to reach out via email at <a href="mailto:your.email@example.com">your.email@example.com</a></p>
//     </section>
//   );
// };

// export default Contact;

import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <section id="query" className="bg-light text-dark py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">Send a Message</h2>
        <form action="https://formspree.io/f/mvgadnda" method="POST">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={4}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
