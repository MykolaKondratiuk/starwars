import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




import mainImg from './assets/main.jpg';
import friend1 from "./assets/friend1.jpg";
import friend2 from "./assets/friend2.jpg";
import friend3 from "./assets/friend3.jpg";
import friend4 from "./assets/friend4.jpg";
import friend5 from "./assets/friend5.jpg";
import friend6 from "./assets/friend6.jpg";
import friend7 from "./assets/friend7.jpg";
import friend8 from "./assets/friend8.jpg";
import friend9 from "./assets/friend9.jpg";






function App() {
    const friends = [
        friend1,
        friend2,
        friend3,
        friend4,
        friend5,
        friend6,
        friend7,
        friend8,
        friend9,
    ];

    const friendLinks = [
        "https://www.starwars.com/databank/r2-d2/",
        "https://www.starwars.com/databank/c-3po",
        "https://www.starwars.com/databank/wicket-w-warrick",
        "https://www.starwars.com/databank/chewbacca",
        "https://www.starwars.com/databank/han-solo",
        "https://www.starwars.com/databank/yoda",
        "https://www.starwars.com/databank/millennium-falcon",
        "https://www.starwars.com/databank/obi-wan-kenobi",
        "https://www.starwars.com/databank/leia-organa",
    ];



            return (
      <div className="container-fluid">
          <header className="rounded-top-5">
              <nav className="fixed-top mt-2 ms-5">
                  <ul className="nav">
                      <li className="nav-item mx-1">
                      <a href='https://www.starwars.com/news' target="_blank" rel="noopener noreferrer" title="More information"  className='btn btn-danger border-warning'>NEWS+FEATURES</a>
                      </li>
                      <li className="nav-item mx-1">
                          <a href='https://www.starwars.com/video' target="_blank" rel="noopener noreferrer" title="More information"  className='btn btn-danger border-warning'>VIDEO</a>
                      </li>

                      <li className="nav-item mx-1">
                          <a href='https://www.starwars.com/films' target="_blank" rel="noopener noreferrer" title="More information"  className='btn btn-danger border-warning'>FILMS</a>
                      </li>
                      <li className="nav-item mx-1">
                          <a href='https://www.starwars.com/databank' target="_blank" rel="noopener noreferrer" title="More information" className='btn btn-danger border-warning'>DATABANK</a >
                      </li>
                  </ul>
              </nav>
              <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
          </header>

          <main className="clearfix">
              <section className="float-start w-25 me-3">
                  <a href="https://www.starwars.com/databank/luke-skywalker" target="_blank" rel="noopener noreferrer" title="More information">
                  <img className="w-100" src={mainImg} alt="Luke Skywalker" />
                  </a>
              </section>

              <section className="float-end w-50 row border border-warning rounded-bottom-5 ms-2 me-0">
                  <h2 className="text-center">Dream team</h2>
                  {friends.map((img, i) => (
                      <a key={i} href={friendLinks[i]} target="_blank" rel="noopener noreferrer" title="More information" className="col-sm-4 p-1">
                          <img
                              className={`w-100 ${i === 6 ? "rounded-bottom-left" : i === 8 ? "rounded-bottom-right" : ""}`}
                              src={img}
                              alt={`Friend ${i + 1}`}
                          />
                      </a>
                  ))}
              </section>

              <p className="far-galaxy fs-2 lh-2">
                  It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first
                  victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret
                  plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power
                  to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard
                  her starship, custodian of the stolen plans that can save her people and restore freedom to the
                  galaxy...
              </p>
          </main>

          <footer className="rounded-bottom-5 row align-items-center mx-0">
              <a href="https://signin.swtor.com/en/register?locale=en&scope=account.basic&state=997f79a0956479692f764890c9731323&response_type=code&approval_prompt=auto&redirect_uri=https%3A%2F%2Faccount.swtor.com%2Fcb&client_id=swtor_account" target="_blank" rel="noopener noreferrer"  className="btn btn-danger border-warning col-sm-2 offset-sm-3 px-0">REGISTRATION</a>
          </footer>
      </div>
  );
}

export default App;