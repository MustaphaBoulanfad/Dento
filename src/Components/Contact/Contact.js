import React from "react";
import styles from "./Contact.module.scss";
import Container from "../../Layouts/Container/Container";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container>
        <div className={styles.contactContainer}>
          <div className={styles.map}>
            <iframe
              width="100%"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%20Riga%20R%C4%ABgas%20pils%C4%93ta,%20Latvia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>

          <div className={styles.message}>
            <div className={styles.info}>
              <h5>Address</h5>
              <p>28 Jackson Street, Chicago, 7788569 USA</p>
              <h5>Phone</h5>
              <p>+84. 2252. 2250. 122</p>
              <h5>Fax</h5>
              <p>+84. 2252. 2250. 125</p>
              <h5>Email</h5>
              <p>info.dento@gmail.com</p>
            </div>
            <div className={styles.form}>
              <h3>Get In Touch</h3>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Messagge"></textarea>
                <button type="submit">send message</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
