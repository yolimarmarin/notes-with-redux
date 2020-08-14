import React, { useState } from "react";
import AuthView from "./AuthView";
import { useHistory } from "react-router-dom";
import {logIn,createNewUser} from '../../data/client-http'

const Auth = ({actionUpdateUser}) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickRegister = async () => {
    const res = await createNewUser(email,password)
    if(res){
      actionUpdateUser({name:res.email,uid:res.uid})
      history.push('/home')
    }
  };

  const onClickLogin = async () => {
    const res = await logIn(email,password)
    if(res){
      actionUpdateUser({name:res.email,uid:res.uid})
      history.push('/home')
    }
  };

  return (
    <AuthView
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickRegister={onClickRegister}
      onClickLogin={onClickLogin}
    />
  );
};

export default Auth;
