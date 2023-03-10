/* eslint-disable react/react-in-jsx-scope */
import './App.scss';
import './utils/_mixins.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <Main />
        <div className="push">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
