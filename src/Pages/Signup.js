import axios from "axios";
import { useState } from "react";

const Signup = () => {
  // const [data, setData] = (useState = "");
  // const [surnom, setSurnom] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
  // const [newsLetter, setNewsletter] = useState("");

  console.log(1);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3001/signup", {
        email: email,
        username: username,
        password: password,
      });
      setUsername(response.data.token);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="pageSignUp">
      <div className="boxSignUp ">
        <h1 className="h1SignUp">Inscrivez-vous !</h1>
        <form onSubmit={handleSubmit} className="boxSignupEnsemble">
          <input
            onChange={(event) => setUsername(event.target.value)}
            className="cellules"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="cellules"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            className="cellules"
            type="password"
            placeholder="Mot de passe"
          />
          <div className="buttonInscrisption" href="#">
            S'inscrire
          </div>
        </form>
      </div>
    </div>
  );
};
console.log(Signup);

export default Signup;
