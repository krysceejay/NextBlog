import {useRef} from 'react'
import Layout from '../components/layouts/Layout'

const Home = () => {
  const contactRef = useRef()
  const gotoContact = () => {
    window.scrollTo({ 
      top: contactRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
      return (
      <Layout title="Home">
        <header id="header-home">
          <div className="container">
            <div className="header-content">
              <h2>Hello,</h2>
              <h1>I’m Chris Chijioke</h1>
              <p className="lead">
              {/* I love to work in User Experience & User Interface designing <br/> */}
              {/* and I am here to proffer solutions to your technological needs.<br /> */}
              I am here to give your business and ideas a new creative start right away!<br/>
              {/* Because I love to solve the design problem and find easy and better solutions to solve it.  */}
              {/* I always try my best to make good user interface with the best user experience. */}
              </p>
              
            </div>
          </div>
        </header>
        <section id="home-about" className="pay-5">
          <div className="container">
            <h2 className="section-title">ABOUT ME</h2>
            <div className="about-wrap">
              <div className="about-wrap-img">
                {/* <img src="/img/chriss.jpg" alt="" /> */}
              </div>
              <div className="about-wrap-text">
                <h2 className="about-wrap-text-head">
                  {/* I'm a Passionate designer & developer who loves simplicity in things and crafts beautiful user interfaces with love. */}
                  Chris Chijioke is a Software Engineer with a keen desire to proffering credible solutions to the technological needs of my clients.
                </h2>
                <div className="about-wrap-text-body">
                  <p>With my years of experience in software engineering amongst other skills, I have helped build reliable solutions for companies in various sectors of the business world. I am committed to ensuring the goals of every organization and client I work with are attained.</p>
                  <p>I am focused and detail oriented which helps me effectively execute every project I embark on.</p>
                  <p>Want to know how I may help your project ? <span className="send-email"><a href="mailto:chijiokechrys@gmail.com">Kindly send an email.</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-services" className="pay-5">
          <div className="container">
          <h2 className="section-title">SERVICES</h2>
            <div className="services-wrap">
              <div className="services-wrap-single">
                <div className="icon-container"><i className="fa fa-globe"></i></div>
                <h2 className="service-name">Web Development</h2>
                <p>Professional, performant, secure and SEO friendly web applications tailored to your specifications and requirements.</p>
              </div>
              <div className="services-wrap-single">
              <div className="icon-container"><i className="fa fa-mobile-phone"></i></div>
                <h2 className="service-name">Mobile App</h2>
                <p>Rich feature and high-end unique mobile applications for both android and ios platforms.</p>
              </div>
              <div className="services-wrap-single">
              <div className="icon-container"><i className="fa fa-server"></i></div>
                <h2 className="service-name">Web Hosting</h2>
                <p>Reliable, scalable and flexible cloud hosting services perfect for all your projects.</p>
              </div>
              <div className="services-wrap-single">
              <div className="icon-container"><i className="fa fa-database"></i></div>
                <h2 className="service-name">Database Management</h2>
                <p>Quality services and support for your database systems, based on your requirements and budget.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="home-contact" className="pay-5" ref={contactRef}>
          <div className="container">
            {/* <p className="freelance">
              I Am Available For Freelance Projects.
            </p> */}
            <p className="get-in-touch">
            Let's work together indeed!
            </p>
            <p>
            Send an email let's bring your ideas to life.
            </p>
            <div className="email-me">
            <div className="email-container">
              <div className="email-icon">
                <i className="fa fa-at"></i>
              </div>
              <div className="email-text">Email: <a href="mailto:chijiokechrys@gmail.com">chijiokechrys@gmail.com</a></div>
            </div>
            </div>
          </div>
        </section>
      </Layout>
    )}

export default Home;
