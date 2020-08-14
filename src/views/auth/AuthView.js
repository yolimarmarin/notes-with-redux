import React from "react";
import './auth.css'

const AuthView = ({onChangeEmail,onChangePassword,email,password,onClickLogin,onClickRegister}) => {
  return (
    <div className="auth-view-container">
      <div className="auth-view-title">Inicia sesion o registrate</div>
      <input
        onChange={onChangeEmail}
        placeholder="Correo electronico"
        value={email}
      />
      <input
        onChange={onChangePassword}
        placeholder="Contrasena"
        value={password}
      />
      <button onClick={onClickLogin}>
          Ingresar
      </button>
      <button onClick={onClickRegister}>
          Registrarme
      </button>
    </div>
  );
};

export default AuthView;
