import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiDribbble } from "react-icons/fi";
import SFNav from "../components/Navbar";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My email is ${data.email}.
            I want to say ${data.msg}.`
    );
  };
  return (
    <>
      <SFNav />
      <div
        class="min-vh-100 pt-2 text-white"
        style={{
          backgroundImage: "linear-gradient(to bottom, #db731f, #ffffff)",
        }}
      >
        <div className="container contact_div" style={{ marginBottom: "60px" }}>
          <div className="row">
            <div className="col-md-6 col-10 mx-auto mt-3">
              <form onSubmit={formSubmit}>
                <div
                  class="card-body p-md-4 text-black "
                  style={{
                    "margin-top": 130,
                    backgroundImage:
                      "linear-gradient(to bottom, #ffffff, #db731f)",
                    borderRadius: 15,
                  }}
                >
                  <div>
                    {/*--------------------------------------*/}
                    <h1 className="text-center">Feedback</h1>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="msg"
                      value={data.msg}
                      onChange={InputEvent}
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">
                      Submit form
                    </button>
                  </div>
                  <br></br>

                  {/*-------ICONS-------*/}
                  <div>
                    <h2 className="text-center">Contact Us</h2>
                    <div class="text">
                      <p>
                        {" "}
                        <FiMapPin /> <span>Address:</span> IACSD, Akurdi, Pune-411044
                      </p>
                    </div>

                    <div class="number">
                      <p>
                        {" "}
                        <FiPhone /> <span>Phone:</span> 022-85412689
                      </p>
                    </div>

                    <div class="Email">
                      <p>
                        {" "}
                        <FiMail /> <span>Email:</span> squarefeets@gmail.com
                      </p>
                    </div>

                    <div class="text">
                      <p>
                        {" "}
                        <FiDribbble /> <span>Website:</span> squarefeets.com
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
