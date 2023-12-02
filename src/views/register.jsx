import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmitSignUp = (e) => {
    e.preventDefault();

    // Validation checks
    if (name.trim() === "") {
      setNameError("Name cannot be empty");
      return;
    }

    if (name.trim().length === 1 || !/^[a-zA-Z\s]+$/.test(name.trim())) {
      setNameError("Name should have more than one character and only contain letters");
      return;
    }

    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Invalid email format");
      return;
    }

    if (password.trim() === "" || confirmPassword.trim() === "") {
      alert("All fields must be filled");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$])[\w#$]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and only '#' or '$' special characters. Minimum length is 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/login");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(""); // Clear any previous name error
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear any previous email error
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear any previous password error
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
               <h1 className="h2"> Welcome </h1>
                <p className="lead"> Sign up & continue </p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={(e)=> onSubmitSignUp(e)}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={handleNameChange}
                        />
                        {nameError && <div className="text-danger">{nameError}</div>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                        {emailError && <div className="text-danger">{emailError}</div>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {passwordError && <div className="text-danger">{passwordError}</div>}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="confirmPassword"
                          placeholder="Retype your password"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                        />
                      </div>
                      
                      <div className="d-grid gap-2 mt-3">
                        
                        <button className="btn btn-lg btn-primary"  >Sign up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3"> Already have an account? <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default Register;