import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
//Imported icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { FaGenderless } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import "../cStyles/register_login.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    const { name, username, gender, dob, email, password, reEnterPassword } =
      user;
    if (
      name &&
      username &&
      gender &&
      dob &&
      email &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:3001/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <>
      <div className="registerPage flexDiv">
        <div className="contanier flexDiv">
          <div className="videoDiv">
            <img
              src={"/assests/exp.gif"}
              alt="Logo Image"
              className="absolut"
            />
            <div className="textDiv">
              <h2 className="title">Explore the books</h2>
              <p>Books at your fingertips!!</p>
            </div>
            <div className="footerDiv flexDiv">
              <span className="text">Already have an account?</span>
              <Link to={"/login"}>
                <button className="btn">Sign In</button>
              </Link>
            </div>
          </div>

          <div className="fromDiv scrollDi">
            <div className="headerDiv flex flex-col items-center justify-center overflow-hidden">
              <img
                src={"/assests/logoExplore.png"}
                alt="Logo Image"
                className="w-auto h-auto scale-90 border-[1px]"
              />
              <h3>Let us Know about you!!</h3>
            </div>

            <form onSubmit={register} className="form">
              <div className="inputDiv">
                <label htmlFor="name">Name</label>
                <div className="input flexDiv">
                  <CiFaceSmile className="icon" />
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flexDiv">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Set Username"
                    value={user.username}
                    onChange={handleChange}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="gender">Gender</label>
                <div className="input flexDiv">
                  <FaGenderless className="icon" />
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    // value={user.gender}
                    onChange={handleChange}
                  />{" "}
                  Male
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    // value={user.gender}
                    onChange={handleChange}
                  />{" "}
                  Female
                  <input
                    type="radio"
                    value="Other"
                    name="gender"
                    // value={user.gender}
                    onChange={handleChange}
                  />{" "}
                  Other
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="DOB">Date Of Birth</label>
                <div className="input flexDiv">
                  <MdDateRange className="icon" />
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="Enter DOB"
                    value={user.dob}
                    onChange={handleChange}
                    // onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flexDiv">
                  <MdMarkEmailRead className="icon" />
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flexDiv">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Set Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flexDiv">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    placeholder="Re-enter Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn flexDiv">
                <span>Register</span>
                <AiOutlineSwapRight className="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
