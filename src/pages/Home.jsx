// Image Import
import background_image from "../assets/Images/hero_background.jpg"
import atc_tower from "../assets/Images/atc_tower.jpg"
import cockpit from "../assets/Images/cockpit.jpg"

// Component Imports
import Footer from "../components/Common/Footer"
import "./Home.css"

function Home() {
  return (
    <div>
      <section className="hero">
        <img src={background_image} alt="Background" className="background" />
        <div className="hero-content">
          <h1>
            Enhancing Flight Navigation for Optimal Route Planning and Risk
            Mitigation
          </h1>
          <p>
            Safe, efficient, and reliable flight navigation at your fingertips.
          </p>
          <button style={{backgroundColor:'#007bff'}}>Get Started</button>
          <button style={{backgroundColor:'#007bff'}}>Learn More</button>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="card">
            <img src={atc_tower} alt="Route Planning Icon" />
            <h3>Optimal Route Planning</h3>
            <p>
              Find the best routes considering various factors and scenarios.
            </p>
          </div>
          <div className="card">
            <img src={background_image} alt="Risk Assessment Icon" />
            <h3>Real-Time Risk Assessment</h3>
            <p>Monitor and assess risks in real-time for safer flights.</p>
          </div>
          <div className="card">
            <img src={background_image} alt="Weather Integration Icon" />
            <h3>Weather Integration</h3>
            <p>
              Get up-to-date weather information integrated directly into your
              flight planning.
            </p>
          </div>
          <div className="card">
            <img src={cockpit} alt="Health Monitoring Icon" />
            <h3>System Health Monitoring</h3>
            <p>Track the health metrics of your flights in real-time.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Data Collection and Management</h3>
            <p>
              Gather data from various sources including weather APIs and flight
              sensors.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Scenario Identification</h3>
            <p>
              Identify potential risks and challenges based on collected data.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Route Planning Algorithm</h3>
            <p>
              Implement algorithms to find the safest and most efficient flight
              paths.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Real-Time Updates and Alerts</h3>
            <p>
              Provide real-time updates and alerts to pilots and control
              centers.
            </p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Enhance Your Flight Navigation?</h2>
        <button>Sign Up Now</button>
        <button>Contact Us</button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
