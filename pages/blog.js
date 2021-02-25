import Link from 'next/link';
import Layout from '../components/layouts/Layout';

const Blog = () => (
      <Layout title="Blog">
        <section id="blog-sec" className="py-4">
      <div className="container">
        <div className="blog-sec-view">
          <div className="blog-sec-view-main">
            <Link href="/blog/1">
            <a>
              <div className="latest-post-img">
              <img src="/img/b1.jpg" alt="blog post image" />
                <div className="latest-post-img-info">
                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
            </a>
            </Link>
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
              <Link href="/blog/1">
               <a className="btn btn-main my-1">Read More</a>
              </Link>
            </div>

            <div className="rest-post">
              <div className="rest-post-single">
                <div className="rest-post-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <h3>Post Title Post Title</h3>
                <div className="post-text my-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis quos quisquam nesciunt hic consequatur...
                  </p>

                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
              <div className="rest-post-single">
                <div className="rest-post-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <h3>Post Title Post Title</h3>
                <div className="post-text my-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis quos quisquam nesciunt hic consequatur...
                  </p>

                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
              <div className="rest-post-single">
                <div className="rest-post-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <h3>Post Title Post Title</h3>
                <div className="post-text my-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis quos quisquam nesciunt hic consequatur...
                  </p>

                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
              <div className="rest-post-single">
                <div className="rest-post-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <h3>Post Title Post Title</h3>
                <div className="post-text my-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis quos quisquam nesciunt hic consequatur...
                  </p>

                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
              <div className="rest-post-single">
                <div className="rest-post-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <h3>Post Title Post Title</h3>
                <div className="post-text my-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis quos quisquam nesciunt hic consequatur...
                  </p>

                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
              <div className="rest-post-single">
                <div className="rest-post-single-img">
                  <img src="/img/b4.jpg" alt="" />
                </div>
                <h3>Post Title Post Title</h3>
                <div className="post-text my-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis quos quisquam nesciunt hic consequatur...
                  </p>

                  <ul>
                    <li><i className="fa fa-calendar"></i> Feb 15, 2020</li>
                    <li><i className="fa fa-thumbs-up"></i> 200</li>
                    <li><i className="fa fa-comment"></i> 15</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* pagination */}
            <ul className="paginate-links-menu my-2">
              <li className="">
                <a className="btn-lighten">
                  <i className="fa fa-angle-left"></i>
                </a>
              </li>

              <li className="">
                <a className="btn-lighten">
                  1
                </a>
              </li>

              <li className="">
                <a className="btn-lighten">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
            {/* end pagination */}
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

export default Blog;
