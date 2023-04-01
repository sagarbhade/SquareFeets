import "./styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-3 item">
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <a href="Properties">Buy Property</a>
                  </li>
                  <li>
                    <a href="#">Post Your Property</a>
                  </li>
                  <li>
                    <a href="#">Book Appointment</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 item">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="Aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="Contactus">Contact Us</a>
                  </li>
                  <li>
                    <a href="PropertiesInfo">Feedback</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="Contactus">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 item text">
                <h3>SquareFeets</h3>
                <p>Your One Stop Property Buying and Selling Site</p>
              </div>
              <div class="col item social">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
