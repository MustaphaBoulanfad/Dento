import React from "react";
import styles from "./BlogDetails.module.scss";
import Container from "../../Layouts/Container/Container";
import { recent1, recent2, recent3 } from "../../Assets/index";
import { reply1, reply2, reply3 } from "../../Assets/index";
import adds from "../../Assets/adds.webp";
import { FaRegClock, FaComments, FaSearch, FaQuoteLeft } from "react-icons/fa";
import news1 from "../../Assets/news1.webp";
import serviceBack from "../../Assets/serviceBack.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";

const BlogDetails = () => {
  return (
    <section className={styles.blogDetails}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.blogDetailsContainer}>
            <div className={styles.blog}>
              <div className={styles.image}>
                <img src={news1} alt="Blog" />
              </div>
              <h1>How your mouth bacteria can harm lungs</h1>
              <div className={styles.time}>
                <span>
                  <FaRegClock />
                  28 Sept 2018
                </span>
                <span>
                  <FaComments />3 Comments
                </span>
              </div>
              <p>
                Donec tempor, lorem et euismod elefend, est lectus laoreet ante,
                sed acusan justo diam nec tincidunt interdum ante consectetur
                dapibus molestie utsalism eleifend metus lacus nec neque. Donec
                pellentesque nisl nec ligula tempor congue. Nullam rutrum nunc
                and dapibus interdum. Nunc accumsan dictum mollis. Morbi ac
                convallis sem, a venenatis lacus. Phasellus in massa in ligula
                placerat tempus. Quisque id egestas odio, eget accumsan odio.
                Nunc vel turpis viverra quam imperdiet pellentesque. Nunc vitae
                sapien eu lorem convallis cursus nec lectus. Praesent cursus
                ornare lacus ac aliquet.
              </p>
              <p>
                Vestibulum vel ante a quam consectetur volutpat eu a felis.
                Nullam non dui quis massa condimentum porttitor non ut nisi.
                Maecenas congue scelerisque purus, eget molestie ligulan
                volutpatut. Integer artor miss, cursussed efficitur non,
                consequat a diam. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Nulla
                facilisi. Integer vel ullamcorper neque. Quisque convallis ante
                purus, eget congutor ultrices. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Aenean
                anunc massa venenatis ullamcorper. Mauris ipsum tellus, faucibus
                massa non, dapibus suscipit orci.
              </p>
              <div className={styles.quote}>
                <FaQuoteLeft />
                <div className={styles.content}>
                  <h4>
                    Good dental care doesn't make you a good student, but if
                    your tooth hurts, it's hard to be a good student
                  </h4>
                  <p>
                    Geoffrey Canada / <span>Social Activist</span>
                  </p>
                </div>
              </div>
              <p>
                Proin venenatis elementum pretium. Vivamus mollis iaculis mi, a
                efficitur turpis maximus non. Sed felis sapien, aliquam eu nunc
                in, tempus interdum turpis. In in porta nulla. Maecenas ut elit
                nec nibh vehicula auctor eget felis. Nulla finibus dictum augue
                ullamcorper. Integer nuamcorper lorem sit down amet dignissim
                tincidunt. Utsu risus feugiat, scelerisque turpis eu, suscipit
                orci. Fusce indo diam ipsum. Nulla facilisi class aptent taciti
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <div className={styles.image}>
                <img src={serviceBack} alt="" />
              </div>
              <p>
                Nunc vitae nisl porttitor, consectetur sapien vel, vulputate
                orci. Sed viverra, neque action lacinia hendrerit, lectus purus
                pellentesque dui, eu porttitor enim neque vitae magna. Nunc nec
                eros nonta risus vestibulum feugiat. In semper tempor sem, eget
                porttitor dolor convallis sit amet. Praesent ut justo augue.
                Curabitur id elit nisi. Vivamus varius lacus sit amet nisi
                lacinia, sed pulvinar odio rhoncus. In sagittis aliquet tellus.
                Nulla pellentesque, risus vitae porta iaculis, metus tortor
                cursus felis, at porta odio lorem nonsa mauris. Nullam mattis
                nulla blandit sapien cursus, quis luctus ex volutpat. Vestibulum
                santa dui nulla, sed feugiat felis hendrerit euro. Praesent in
                lobortis orci, vitae finibus tortor. Aliquam nisl sapien,
                posuere ac accumsan scelerisque, eleifend quis dui, quisque
                cursus congue nibh pretium blandit.
              </p>
              <div className={styles.actions}>
                <a href="/" className={styles.facebook}>
                  <FaFacebookF />
                  Share
                </a>
                <a href="/" className={styles.twitter}>
                  <FaTwitter />
                  Tweet
                </a>
                <a href="/" className={styles.google}>
                  <FaGooglePlusG />
                  Share
                </a>
                <a href="/" className={styles.pinterest}>
                  <FaPinterestP />
                  Share
                </a>
              </div>
            </div>
            <div className={styles.comments}>
              <h2>3 Comments</h2>
              <ol className={styles.commentsContainer}>
                <li>
                  <div className={styles.comment}>
                    <div className={styles.image}>
                      <img src={reply1} alt="" />
                    </div>
                    <div className={styles.content}>
                      <p className={styles.name}>
                        Tom Hardy /<span>28 Sept 2018 at 10:00 am</span>
                      </p>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sitdown ameto, consectetur, adipisci velit, sed quiata
                        non numqua eius modi tempor incidunt ut labore.
                      </p>
                      <a href="/">Reply</a>
                    </div>
                  </div>
                  <ol>
                    <li>
                      <div className={styles.comment}>
                        <div className={styles.image}>
                          <img src={reply2} alt="" />
                        </div>
                        <div className={styles.content}>
                          <p className={styles.name}>
                            Samantha Harvey /
                            <span>28 Sept 2018 at 10:30 am</span>
                          </p>
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sitdown ameto, consectetur, adipisci velit,
                            sed quiata non numqua eius modi tempor incidunt ut
                            labore.
                          </p>
                          <a href="/">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </li>
                <li>
                  <div className={styles.comment}>
                    <div className={styles.image}>
                      <img src={reply3} alt="" />
                    </div>
                    <div className={styles.content}>
                      <p className={styles.name}>
                        Jonny Evans /<span>28 Sept 2018 at 11:00 am</span>
                      </p>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sitdown ameto, consectetur, adipisci velit, sed quiata
                        non numqua eius modi tempor incidunt ut labore.
                      </p>
                      <a href="/">Reply</a>
                    </div>
                  </div>
                </li>
              </ol>
              <div className={styles.reply}>
                <h2>Leave a reply</h2>
                <form>
                  <div>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <textarea placeholder="Your Message"></textarea>
                  <button type="submit">Reply</button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.sideBar}>
            <div className={styles.search}>
              <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                  <FaSearch />
                </button>
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

export default BlogDetails;
