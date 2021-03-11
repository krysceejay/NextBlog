import Layout from '../components/layouts/Layout'

const Home = () => (
      <Layout title="Home">
        <header id="header-home">
          <div className="container">
            <div className="header-content">
              <h2>Hello,</h2>
              <h1>I’m Johnson smith</h1>
              <p className="lead">
              I love to work in User Experience & User Interface designing. <br />
              {/* Because I love to solve the design problem and find easy and better solutions to solve it.  */}
              {/* I always try my best to make good user interface with the best user experience. */}
              </p>
              
            </div>
          </div>
        </header>
        <section id="home-about" className="py-5">
          <div className="container">
            <div className="about-wrap">
              <div className="about-wrap-img">
                <img src="/img/banner.jpg" alt="" />
              </div>
              <div className="about-wrap-text">
                <h2 className="about-wrap-text-head">I'm a Passionate designer & developer who loves simplicity in things and crafts beautiful user interfaces with love.</h2>
                <p className="about-wrap-text-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro laboriosam rerum fugiat quod ullam earum dignissimos corporis, 
                nemo provident nostrum, nihil culpa. Et corrupti sit hic amet, animi unde cumque consequuntur omnis ad nihil optio id eum qui, impedit deleniti? Veniam eum aspernatur incidunt? Doloremque, cum? 
                Repellendus consectetur, cupiditate tenetur provident neque, quas, totam eveniet nisi eius veritatis ea maiores ducimus a reprehenderit minima magnam dicta! Aliquam libero voluptatum 
                facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem! Culpa nam et accusamus beatae!
                Repellendus consectetur, cupiditate tenetur provident neque, quas, totam eveniet nisi eius veritatis ea maiores ducimus a reprehenderit minima magnam dicta! Aliquam libero voluptatum 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="home-services" className="py-5">
          <div className="container">
            <div className="services-wrap">
              <div className="services-wrap-single">
                <i className="fa fa-user"></i>
                <h2 className="service-name">Web Design</h2>
                <p>Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem!</p>
              </div>
              <div className="services-wrap-single">
                <i className="fa fa-user"></i>
                <h2 className="service-name">Web Design</h2>
                <p>Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem!</p>
              </div>
              <div className="services-wrap-single">
                <i className="fa fa-user"></i>
                <h2 className="service-name">Web Design</h2>
                <p>Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem!</p>
              </div>
              <div className="services-wrap-single">
                <i className="fa fa-user"></i>
                <h2 className="service-name">Web Design</h2>
                <p>Aliquam libero voluptatum facilis dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="home-contact" className="py-5">
          <div className="container">
            <p className="freelance">
              I Am Available For Freelance Projects.
            </p>
            <p className="get-in-touch">
            Let's work together indeed!
            </p>
            <p className="">
              Email: chryschijioke@gmail.com
            </p>
          </div>
        </section>
      </Layout>
    )

export default Home;
