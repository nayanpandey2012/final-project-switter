import React from "react";

export default class Sidebar extends React.Component {

    
    // these will be changed to routes, placeholders for now

    render() {
        return (
            <Router>
                <div
                style={{
                display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="app"
      >
        <Navbar />
        <Switch>
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/notes" /> : <LoginPage />}
          </Route>
          <Route path="/register">
            {isLoggedIn ? <Redirect to="/notes" /> : <RegisterPage />}
          </Route>
          <Route path="/notes">
            {isLoggedIn ? <NotesPage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
        )
    }
}