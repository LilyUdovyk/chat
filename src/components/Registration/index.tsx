import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { IRootAction } from "../../store/rootReducer";
import * as regActions from "../../store/registration/actions";

import style from './style.module.scss'

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      regByCreds: regActions.regByCreds.request
    },
    dispatch
  );

type AuthorizationProps = ReturnType<typeof mapDispatchToProps>;

const Authorization: React.FC<AuthorizationProps> = ({ regByCreds }) => {
  const [nick, setNick] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    regByCreds({ nick, login, password })
  }

  return (
    <form action="" onSubmit={signUpHandler} className = {style.loginForm}>
      <label htmlFor="nick">Nick</label>
      <input
        type="text"
        id="nick"
        required={true}
        value={nick}
        onChange={e => setNick(e.target.value)}
      />

      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        required={true}
        value={login}
        onChange={e => setLogin(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required={true}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className = {style.buttonBlock}>
         <button type="submit">Sign Up</button>
      </div>
      <p><Link to="/sign-in">Sign In</Link></p>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(React.memo(Authorization));