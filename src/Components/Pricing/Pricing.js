import React from "react";
import { useSelector } from "react-redux";
import styles from "./Pricing.module.scss";
import Container from "../../Layouts/Container/Container";
import { BsChevronDoubleRight } from "react-icons/bs";

const Pricing = () => {
  const pricing = useSelector((state) => state.pricing);

  return (
    <section className={styles.pricing}>
      <Container>
        <div className={styles.pricingContainer}>
          <h1>Pricing</h1>
          <table>
            <thead>
              <tr>
                <th>Service Names</th>
                <th>Stage</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.stage}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button>
            Read More <BsChevronDoubleRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
