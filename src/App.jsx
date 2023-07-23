import { Genre, GridSection, Logo, Paginations, SearchBox } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <Logo />
      <div className="app__fixed">
        <SearchBox />
      </div>
      <Genre />
      <GridSection />
      <Paginations />
    </div>
  );
};

export default App;
