import React from "react";
import styles from "./LatestNews.module.scss";
import Container from "../../Layouts/Container/Container";
import { FaRegClock, FaComments } from "react-icons/fa";
import { news1, news2, news3 } from "../../Assets/index";

const LatestNews = () => {
  return (
    <section className={styles.latestNews}>
      <Container>
        <div className={styles.newsContainer}>
          <h1>The Latest news</h1>

          <div className={styles.news}>
            <div className={styles.new}>
              <div className={styles.image}>
                <img
                  src={news1}
                  alt="How your mouth bacteria can harm your lungs"
                />
              </div>
              <div className={styles.content}>
                <h3>How your mouth bacteria can harm your lungs</h3>
                <p>
                  Donec tempor, lorem et euismod eleifend, est lectus laoreet
                  ante, sed accusan justo diam ...
                </p>
                <div>
                  <span>
                    <FaRegClock />
                    28 Sept 2018
                  </span>
                  <span>
                    <FaComments />3 Comments
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.new}>
              <div className={styles.image}>
                <img
                  src={news2}
                  alt="What is the best kind of toothpaste to use?"
                />
              </div>
              <div className={styles.content}>
                <h3>What is the best kind of toothpaste to use?</h3>
                <p>
                  Donec tempor, lorem et euismod eleifend, est lectus laoreet
                  ante, sed accusan justo diam ...
                </p>
                <div>
                  <span>
                    <FaRegClock />
                    28 Sept 2018
                  </span>
                  <span>
                    <FaComments />3 Comments
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.new}>
              <div className={styles.image}>
                <img
                  src={news3}
                  alt="Why you should avoid sipping your drinks"
                />
              </div>
              <div className={styles.content}>
                <h3>Why you should avoid sipping your drinks</h3>
                <p>
                  Donec tempor, lorem et euismod eleifend, est lectus laoreet
                  ante, sed accusan justo diam ...
                </p>
                <div>
                  <span>
                    <FaRegClock />
                    28 Sept 2018
                  </span>
                  <span>
                    <FaComments />3 Comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
