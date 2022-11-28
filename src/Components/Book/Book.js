import React from "react";
import styles from "./Book.module.scss";
import Container from "../../Layouts/Container/Container";

const Book = () => {
  return (
    <div className={styles.book}>
      <div className={styles.overlay}></div>
      <Container>
        <form>
          <div>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="phone" placeholder="Your Phone" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="address" placeholder="Your Address" />
            <select name="scheldule">
              <option>Choose your scheldule</option>
              <option>9 AM to 10 AM</option>
              <option>11 AM to 12 PM</option>
              <option>2 PM to 4 PM</option>
              <option>8 PM to 10 PM</option>
            </select>
            <select name="scheldule">
              <option>Choose your scheldule</option>
              <option>9 AM to 10 AM</option>
              <option>11 AM to 12 PM</option>
              <option>2 PM to 4 PM</option>
              <option>8 PM to 10 PM</option>
            </select>
          </div>
          <textarea placeholder="Your message"></textarea>
          <input type="submit" value="Booking now" />
        </form>
      </Container>
    </div>
  );
};

export default Book;
