import './App.css';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';

const AdminPanel = lazy(() => import("./routes/admin/AdminRouter"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Fallback...</p>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
