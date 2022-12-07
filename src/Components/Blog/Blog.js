import React from "react";
import styles from "./Blog.module.scss";
import Container from "../../Layouts/Container/Container";
import { news1, news2, news3, news4, news5 } from "../../Assets/index";
import { recent1, recent2, recent3 } from "../../Assets/index";
import adds from "../../Assets/adds.webp";
import { FaRegClock, FaComments, FaSearch } from "react-icons/fa";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.blogContainer}>
            <div className={styles.blogs}>
              <div className={styles.blogItem}>
                <a href="/">
                  <div className={styles.image}>
                    <img src={news1} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h4>How your mouth bacteria can harm your lungs</h4>
                    <p>
                      Donec tempor, lorem et euismod eleifend, est lectus
                      laoreet ante, sed accusan justo diam nec tincidunt
                      interdum ante consectetur dapibus molestie ...
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
                </a>
              </div>
              <div className={styles.blogItem}>
                <a href="/">
                  <div className={styles.image}>
                    <img src={news2} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h4>What is the best kind of toothpaste to use?</h4>
                    <p>
                      Donec tempor, lorem et euismod eleifend, est lectus
                      laoreet ante, sed accusan justo diam nec tincidunt
                      interdum ante consectetur dapibus molestie ...
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
                </a>
              </div>
              <div className={styles.blogItem}>
                <a href="/">
                  <div className={styles.image}>
                    <img src={news3} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h4>Why you should avoid sipping your drinks</h4>
                    <p>
                      Donec tempor, lorem et euismod eleifend, est lectus
                      laoreet ante, sed accusan justo diam nec tincidunt
                      interdum ante consectetur dapibus molestie ...
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
                </a>
              </div>
              <div className={styles.blogItem}>
                <a href="/">
                  <div className={styles.image}>
                    <img src={news4} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h4>How long does numbness last after the dentist?</h4>
                    <p>
                      Donec tempor, lorem et euismod eleifend, est lectus
                      laoreet ante, sed accusan justo diam nec tincidunt
                      interdum ante consectetur dapibus molestie ...
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
                </a>
              </div>
              <div className={styles.blogItem}>
                <a href="/">
                  <div className={styles.image}>
                    <img src={news5} alt="" />
                  </div>
                  <div className={styles.content}>
                    <h4>
                      Lie bumps (transient lingual papillitis): What to know
                    </h4>
                    <p>
                      Donec tempor, lorem et euismod eleifend, est lectus
                      laoreet ante, sed accusan justo diam nec tincidunt
                      interdum ante consectetur dapibus molestie ...
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
                </a>
              </div>
              <div className={styles.navigation}>
                <span className={styles.active}>1</span>
                <span>2</span>
                <span>+</span>
              </div>
            </div>
          </div>
          <div className={styles.sideBar}>
            <div className={styles.search}>
              <form>
                <input type="text" placeholder="Search" />
                {true && (
                  <button type="submit">
                    <FaSearch />
                  </button>
                )}
              </form>
            </div>
            <div className={styles.categories}>
              <h3>Categories</h3>
              <ul>
                <li>
                  <a href="/">Dentistry Articles</a>
                </li>
                <li>
                  <a href="/">Oral Health</a>
                </li>
                <li>
                  <a href="/">Dental Technology</a>
                </li>
                <li>
                  <a href="/">Kids Care Dental</a>
                </li>
                <li>
                  <a href="/">Healthy Smiles, Inside & Out</a>
                </li>
              </ul>
            </div>
            <div className={styles.recent}>
              <h3>Recent News</h3>
              <div className={styles.news}>
                <div className={styles.image}>
                  <img src={recent1} alt="" />
                </div>
                <div className={styles.content}>
                  <a href="/">
                    Tooth decay: why good dental hygiene is important
                  </a>
                  <span>28 Sep 2018</span>
                </div>
              </div>
              <div className={styles.news}>
                <div className={styles.image}>
                  <img src={recent2} alt="" />
                </div>
                <div className={styles.content}>
                  <a href="/">Six reasons your breath might smell like poop</a>
                  <span>28 Sep 2018</span>
                </div>
              </div>
              <div className={styles.news}>
                <div className={styles.image}>
                  <img src={recent3} alt="" />
                </div>
                <div className={styles.content}>
                  <a href="/">
                    Everything you need to know about sinus infection
                  </a>
                  <span>28 Sep 2018</span>
                </div>
              </div>
            </div>
            <div className={styles.adds}>
              <a href="/">
                <img src={adds} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
