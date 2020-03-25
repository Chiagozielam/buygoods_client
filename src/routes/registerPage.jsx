import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Image,
  Checkbox,
  Form,
  Button,
  Loader,
  Dimmer
} from "semantic-ui-react";
import style from "./css/signupAndLoginPage.module.css";

const RegistrationPage = (props) => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const onChangeInputs = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const clickMailNewsletterCheckbox = () => {
    setCheckbox(!checkbox);
  };
  const formSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const data = {
      fullname: inputs.fullname,
      email: inputs.email,
      password: inputs.password,
      newsletterPermission: checkbox,
    }
    const url = `http://localhost:5000/api/v1/users/register`;
    axios.post(url, data)
    .then( res => {
      console.log(res);
      setLoading(false);
      const token = res.data.token;
      localStorage.setItem("user-token", token);
      props.history.push("/dashboard");
    })
    .catch(err => console.log(err));
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
              <h2>Create Account</h2>
              <Form.Field>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder=""
                  name="fullname"
                  value={inputs.fullname}
                  onChange={onChangeInputs}
                />
              </Form.Field>
              <Form.Field>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder=""
                  name="email"
                  value={inputs.email}
                  onChange={onChangeInputs}
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
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Allow us send you emails on discount offers and tips" onClick={clickMailNewsletterCheckbox} />
              </Form.Field>
              <Button
                className={style.loginButton}
                type="submit"
                onClick={formSubmit}
              >
                Create Account
              </Button>
              {loading ? (
                <Dimmer active inverted>
                  <Loader size="medium">Loading</Loader>
                </Dimmer>
              ) : (
                ""
              )}
              <p>
                Already Have An Account? <Link to="/Login">Login</Link>
              </p>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </article>
  );
};

export default RegistrationPage;
