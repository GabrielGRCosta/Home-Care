// Arquivo de roteamento (exemplo com React Router)
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import { Cadastro, Login } from './components/AuthComponents';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
