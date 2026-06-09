import { useState } from 'react'
import nasaLogo2 from './assets/solar-system.png'
import nasaLogo from './assets/eyes-on-the-solar-system.png'
import solarVacationImg from './assets/solar-vacation.png'
import './App.css'
import MarsWeather from "./MarsWeather.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={solarVacationImg} className="base" width="170" height="179" alt="" />
          <img src={nasaLogo2} className="framework" alt="React logo" />
          <img src={nasaLogo} className="nasa" alt="Nasa logo" />
        </div>
        <div>
          <h1>Get Ready for a Solar Vacation</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
      <MarsWeather />
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#solar-icon"></use>
          </svg>
          <h2>Solar System</h2>
          <p>Get to know our beautiful home in the universe</p>
          <ul>
            <li>
              <a href="https://eyes.nasa.gov/apps/solar-system/#/sc_artemis_2?lighting=flood&surfaceMapTiling=true" target="_blank">
                <img className="logo" src={nasaLogo} alt="" />
                Eyes On The Solar System
              </a>
            </li>
            <li>
              <a href="https://science.nasa.gov/solar-system/" target="_blank">
                <img className="button-icon" src={nasaLogo2} alt="" />
                Solar System Exploration
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with the creator</h2>
          <p>I'm Diana, nice to meet you!</p>
          <ul>
            <li>
              <a href="https://github.com/DianaBorro" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diana-borro-822420278/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/diana_amorfati/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#instagram-icon"></use>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
