import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { StraightPoolContext, FargoContext, straightPoolReducer, fargoReducer, appInitialState, straightPoolInitialState, fargoInitialState, AppContext, appReducer } from './store'
import Layout from './components/Layout'
import Home from './pages/Home'
import Fargo from './pages/Fargo'
import StraightPool from './pages/StraightPool'

const App = () => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState)
  const [straightPoolState, straightPoolDispatch] = useReducer(straightPoolReducer, straightPoolInitialState)
  const [fargoState, fargoDispatch] = useReducer(fargoReducer, fargoInitialState)

  return (
    <AppContext.Provider value={[appState, appDispatch]}>
      <StraightPoolContext.Provider value={[straightPoolState, straightPoolDispatch]}>
        <FargoContext.Provider value={[fargoState, fargoDispatch]}>
          <Router>
            <Switch>
              <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/fargo' component={Fargo} />
                <Route path='/14.1' component={StraightPool} />
              </Layout>
            </Switch>
          </Router>
        </FargoContext.Provider>
      </StraightPoolContext.Provider>
    </AppContext.Provider>
  )
}

export default App
