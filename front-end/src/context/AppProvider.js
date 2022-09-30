import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);
  const [registerErrorName, setRegisterErrorName] = useState(false);
  const [registerErrorEmail, setRegisterErrorEmail] = useState(false);
  const [registerErrorPassword, setRegisterErrorPassword] = useState(false);
  const [registerErrorUserExist, setRegisterErrorUserExist] = useState(false);

  const context = useMemo(() => ({
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerButtonDisabled,
    setRegisterButtonDisabled,
    registerErrorName,
    setRegisterErrorName,
    registerErrorEmail,
    setRegisterErrorEmail,
    registerErrorPassword,
    setRegisterErrorPassword,
    registerErrorUserExist,
    setRegisterErrorUserExist,
  }), [
    registerName,
    registerEmail,
    registerPassword,
    registerButtonDisabled,
    registerErrorName,
    registerErrorEmail,
    registerErrorPassword,
    registerErrorUserExist,
  ]);

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
