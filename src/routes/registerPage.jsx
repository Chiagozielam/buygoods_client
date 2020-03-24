import React from "react";
import { Link, } from 'react-router-dom'
import { Grid, Image, Checkbox, Form, Button } from "semantic-ui-react";
import style from "./css/signupAndLoginPage.module.css";

const RegistrationPage = () => {
  return (
    <article>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5} className={style.sidePanel}>
              <Image className={style.sidePanelImg} src="https://res.cloudinary.com/dcft8yhab/image/upload/v1584978430/ecommerce_pic.png" />
              <p>
                  Begin your journey with us by creating an account.
                  Or Login to your account and get more out of us.
              </p>
              <Button className={style.sidePanelButton}>About Us</Button>
          </Grid.Column>
          <Grid.Column width={10}>
            <Form className={style.form}>
              <h2>Create Account</h2>
              <Form.Field>
                <label>Full Name</label>
                <input type="text" placeholder="" />
              </Form.Field>
              <Form.Field>
                <label>Email Address</label>
                <input type="email" placeholder="" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" placeholder="" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Allow us send you emails on discount offers and tips" />
              </Form.Field>
              <Button className={style.loginButton} type="submit">
                Create Account
              </Button>
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
