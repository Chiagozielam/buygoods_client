import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Image, Checkbox, Form, Button, Dimmer, Loader } from "semantic-ui-react";
import style from "./css/signupAndLoginPage.module.css";

const LoginPage = props => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const onChangeInputs = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const clickRememberMeCheckbox = () => {
    console.log("remember me!")
  }
  const formSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const url = `http://localhost:5000/api/v1/users/`;
    axios.post(url, inputs).then(res => {
      console.log(res);
      setLoading(false);
      const token = res.data.token;
      localStorage.setItem("user-token", token);
      props.history.push("/dashboard");
    });
  };

  const token =  localStorage.getItem("user-token");
  if(token){props.history.push("/dashboard")}
  return (
    <article>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5} className={style.sidePanel}>
            <Image
              className={style.sidePanelImg}
              src="https://res.cloudinary.com/dcft8yhab/image/upload/v1584978430/ecommerce_pic.png"
            />
            <p>
              Begin your journey with us by creating an account. Or Login to
              your account and get more out of us.
            </p>
            <Button className={style.sidePanelButton}>About Us</Button>
          </Grid.Column>
          <Grid.Column width={10}>
            <Form className={style.form}>
              <h2>Login</h2>
              <Form.Field>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder=""
                  name="email"
                  value={inputs.email}
                  onChange={onChangeInputs}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder=""
                  name="password"
                  value={inputs.password}
                  onChange={onChangeInputs}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Remember Me" onClick={clickRememberMeCheckbox} />
              </Form.Field>
              <Button
                className={style.loginButton}
                type="submit"
                onClick={formSubmit}
                required
              >
                Login
              </Button>
              {loading ? (
              <Dimmer active inverted>
                <Loader size="medium">Loading</Loader>
              </Dimmer>
              ) : ( "" )}
              <p>
                New User? <Link to="/register">Create Account</Link>
              </p>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </article>
  );
};

export default LoginPage;
