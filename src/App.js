import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { StraightPoolContext, FargoContext, HopkinsContext, straightPoolReducer, fargoReducer, appInitialState, straightPoolInitialState, fargoInitialState, AppContext, appReducer, MatchContext, matchInitialState, matchReducer, equalOffenseInitialState, equalOffenseReducer, EqualOffenseContext, hopkinsReducer, hopkinsInitialState } from './store'
import Layout from './components/Layout'
import Home from './pages/Home'
import Fargo from './pages/Fargo'
import StraightPool from './pages/StraightPool'
import Match from './pages/Match'
import EqualOffense from './pages/EqualOffense'
import NotFound from './pages/NotFound'
import HopkinsQ from './pages/HopkinsQ'

const App = () => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState)
  const [straightPoolState, straightPoolDispatch] = useReducer(straightPoolReducer, straightPoolInitialState)
  const [fargoState, fargoDispatch] = useReducer(fargoReducer, fargoInitialState)
  const [matchState, matchDispatch] = useReducer(matchReducer, matchInitialState)
  const [equalOffenseState, equalOffenseDispatch] = useReducer(equalOffenseReducer, equalOffenseInitialState)
  const [hopkinsState, hopkinsDispatch] = useReducer(hopkinsReducer, hopkinsInitialState)

  return (
    <AppContext.Provider value={[appState, appDispatch]}>
      <StraightPoolContext.Provider value={[straightPoolState, straightPoolDispatch]}>
        <FargoContext.Provider value={[fargoState, fargoDispatch]}>
          <MatchContext.Provider value={[matchState, matchDispatch]}>
            <EqualOffenseContext.Provider value={[equalOffenseState, equalOffenseDispatch]}>
              <HopkinsContext.Provider value={[hopkinsState, hopkinsDispatch]}>
                <Router>
                  <Switch>
                    <Layout>
                      <Route exact path='/' component={Home} />
                      <Route path='/fargo' component={Fargo} />
                      <Route path='/hopkins-q-skills' component={HopkinsQ} />
                      <Route path='/14.1' component={StraightPool} />
                      <Route path='/vs' component={Match} />
                      <Route path='/equal-offense' component={EqualOffense} />
                      <Route path='*' component={NotFound} />
                    </Layout>
                  </Switch>
                </Router>
              </HopkinsContext.Provider>
            </EqualOffenseContext.Provider>
          </MatchContext.Provider>
        </FargoContext.Provider>
      </StraightPoolContext.Provider>
    </AppContext.Provider>
  )
}

export default App
