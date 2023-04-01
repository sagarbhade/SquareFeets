import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Aboutus.css";
import img2 from "../images/new1.gif";
import SFNav from "../components/Navbar";

const Aboutus = () => {
  return (
    <div>
      <SFNav />
      <div style={{ marginTop: "100px" }}>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossorigin="anonymous"
        />

        <main>
          <div class="about" style={{ backgroundColor: "white" }}>
            <div class="title" style={{ color: "orange" }}>
              <h1>About Squarefeets</h1>
            </div>
            <div class="desc">
              <p>
                {" "}
                In the SquareFeets Now customers will not have to go to the
                agents personally they can search for their desired home or
                apartment of a reasonable rate which suits their pocket. And
                they can also have the view of apartment online. India’s No. 1
                property portal, deals with every aspect of the consumers’ needs
                in the real estate industry. It is an online forum where buyers,
                sellers and brokers/agents can exchange information about real
                estate properties quickly, effectively and inexpensively. At
                Squarefeets.com, you can advertise a property, search for a
                property, browse through properties, build your own property
                microsite, and keep yourself updated with the latest news and
                trends making headlines in the realty sector.
              </p>
            </div>
          </div>
          <div class="row1" id="ok" style={{ backgroundColor: "white" }}>
            <div class="card" style={{ backgroundColor: "white" }}>
              <div class="card_img" style={{ color: "orange" }}>
                <i class="fas fa-home"></i>
              </div>
              <div class="card_title" style={{ color: "orange" }}>
                Enjoy service
              </div>
              <div>
                <img style={{ height: "50vh", width: "100vh" }} src={img2} />
              </div>
              <br />
              <div class="card_body">
                <h5>
                  <p>
                    Now customers will not have to go to the agents personally
                    they can search for their desired <br />
                    home or apartment of a reasonable rate which suits their
                    pocket. <br /> And they can also have the view of apartment
                    online.
                  </p>
                </h5>
              </div>
            </div>
            <div class="card" style={{ backgroundColor: "white" }}>
              <div class="card_img">
                <i class="fab fa-cloudversify"></i>
              </div>
              <div class="card_title">Our Team</div>
              <div class="card_body">
                <ul style={{ color: "orange" }}>
                  <li>8380956265 @Sagar Bhade</li>
                  <li>9096720207 @Hemant Pangle</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Aboutus;
