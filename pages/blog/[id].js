import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/layouts/Layout';

const Details = () => (
      <Layout title="Blog Details">
        <section id="blog-sec" className="py-4">
      <div className="container">
        <div className="blog-sec-view">
          <div className="blog-sec-view-main">
            <div className="latest-post-img">
              <img src="/img/b1.jpg" alt="" />
              <div className="latest-post-img-info">
                <ul>
                  <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                  <li><i className="fa fa-thumbs-up"></i> 200</li>
                  <li><i className="fa fa-comment"></i> 15</li>
                </ul>
              </div>
            </div>
            <h1>Post Title Post Title</h1>
            <div className="post-text my-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                quos quisquam nesciunt hic consequatur sunt placeat accusamus
                inventore. Quasi, mollitia!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                quos quisquam nesciunt hic consequatur sunt placeat accusamus
                inventore. Quasi, mollitia...
              </p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium earum ea quia facilis. Ducimus ex harum facere quam
              ipsam fuga commodi a accusantium hic illum impedit tempore
              provident voluptates, numquam libero dolorum expedita fugiat non
              quis! Commodi eligendi accusamus delectus unde? Maxime, facilis
              illum? Praesentium id ut quo quasi eaque, non quaerat, vitae sint
              illum totam iste aliquam. Pariatur neque repellendus, commodi
              dolorem amet odit, recusandae veniam quos impedit incidunt
              officiis mollitia illum dicta deleniti delectus, praesentium
              voluptas blanditiis eum dolore ipsa. Assumenda fuga dolor error
              neque, ipsam esse dolore unde id, molestias aspernatur non itaque,
              perspiciatis recusandae tempora laudantium.

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                rem nostrum, totam nulla illo exercitationem aperiam. Fuga sint
                eius cumque fugit modi ex voluptatibus consequuntur tenetur
                accusantium architecto expedita vel, aperiam debitis ab
                doloribus repellat doloremque ut, maiores numquam optio
                asperiores alias, quia quasi in. Repellat officia odio quod
                perferendis, doloribus officiis tenetur. Dolorum, aspernatur
                modi magni beatae laboriosam labore non voluptatum repudiandae
                quo vitae enim blanditiis iusto, ratione odit ea assumenda eos
                sit nisi aliquam, eligendi consequuntur! Minus vel, praesentium
                quibusdam iusto fuga ducimus id repellat eius pariatur officia
                earum accusantium optio eligendi perferendis ipsam iste quam
                distinctio consequatur non? Vero sint reprehenderit quisquam
                amet doloremque, vitae hic fuga enim magni explicabo repellendus
                at a laudantium officiis minus tenetur!
              </p>
            </div>
            <br />
            <hr />
            <div className="comment-post my-2">

            <div className="leave-a-comment my-2">
                <form action="">
                  <textarea
                    name=""
                    id=""
                    placeholder="Leave a comment"
                  ></textarea>
                  <button type="submit" className="btn btn-main">Submit</button>
                </form>
              </div>

              <div className="comment-post-heading my-1">
                Comments
              </div>
              <div className="comment-post-single">
                <div className="comment-post-single-img">
                  <img src="/img/b1.jpg" alt="" />
                </div>
                <div className="comment-post-single-text">
                  <div className="user-name">
                    John
                  </div>
                  <div className="user-comment">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque inventore beatae hic nam officia facere ad maxime non
                    ea maiores! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Itaque inventore beatae hic nam officia
                    facere ad maxime non ea maiores!
                  </div>
                  <div className="user-post-info">
                    <span className="date">2 weeks</span>
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
              <div className="comment-post-single">
                <div className="comment-post-single-img">
                  <img src="/img/b1.jpg" alt="" />
                </div>
                <div className="comment-post-single-text">
                  <div className="user-name">
                    John
                  </div>
                  <div className="user-comment">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque inventore beatae hic nam officia facere ad maxime non
                    ea maiores! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Itaque inventore beatae hic nam officia
                    facere ad maxime non ea maiores!
                  </div>
                  <div className="user-post-info">
                    <span className="date">2 weeks</span>
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
              <div className="comment-post-single">
                <div className="comment-post-single-img">
                  <img src="/img/b1.jpg" alt="" />
                </div>
                <div className="comment-post-single-text">
                  <div className="user-name">
                    John
                  </div>
                  <div className="user-comment">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque inventore beatae hic nam officia facere ad maxime non
                    ea maiores! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Itaque inventore beatae hic nam officia
                    facere ad maxime non ea maiores!
                  </div>
                  <div className="user-post-info">
                    <span className="date">2 weeks</span>
                    <span className="likes">2 likes</span>
                    <span className="reply">Reply</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-main">See more</button>
              
            </div>
          </div>
          <aside className="blog-sec-view-aside">
            <h2>Top Post</h2>
            <div className="topost-content">
              <div className="topost-content-single">
                <div className="topost-content-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <div className="topost-content-single-text">
                  Pellentesque dui, non felis. Maecenas male non felis...
                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                  </ul>
                </div>
              </div>
              <div className="topost-content-single">
                <div className="topost-content-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <div className="topost-content-single-text">
                  Pellentesque dui, non felis. Maecenas male non felis...
                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                  </ul>
                </div>
              </div>
              <div className="topost-content-single">
                <div className="topost-content-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <div className="topost-content-single-text">
                  Pellentesque dui, non felis. Maecenas male non felis...
                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="newsletter-sub">
              <h2>Sign up to our newsletter</h2>
              <form action="">
                <div className="newsletter-sub-form my-1">
                  <input type="email" placeholder="your email" />
                  <button type="submit" className="btn btn-main">Submit</button>
                </div>
              </form>
            </div>

            <div className="connect-socials">
              <h2>Stay Connected</h2>
              <div className="connect-socials-icons my-1">
                <a href="www.twitter.com">
                  <i className="fa fa-twitter fa-2x"></i>
                </a>
                <a href="www.facebook.com">
                  <i className="fa fa-facebook fa-2x"></i>
                </a>
                <a href="www.facebook.com">
                  <i className="fa fa-instagram fa-2x"></i>
                </a>
                <a href="www.youtube.com">
                  <i className="fa fa-youtube fa-2x"></i>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
      </Layout>
    )

export default Details;