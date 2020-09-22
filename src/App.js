import React, { useState } from "react";
import { Navbar, Home, MyProject, Copyrights, Modal } from "./components/layouts";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { ModalContext } from './context'

function App() {
  const [modal, setModal] = useState({
    id: 0,
    button: false
  })
  const [language, setLanguage] = useState({
    value: 'Indonesia',
    btn: false,
  })
  return (
    <Router>
      <ModalContext.Provider value={{ modal, setModal, language, setLanguage }}>
        <div className='flex flex-col h-screen'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home'>
              <div className='flex-grow'>
                <Home />
              </div>
            </Route>
            <Route path='/project'>
              <div className='flex-grow'>
                <MyProject />
              </div>
            </Route>
            <Route path='*'>
              <Redirect to='/home' />
            </Route>
          </Switch>
          <Copyrights />
          {modal.button &&
            <Modal id={modal.id} />
          }
        </div>
      </ModalContext.Provider>
    </Router>
  );
}

export default App;
