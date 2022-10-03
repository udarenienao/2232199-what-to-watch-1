import Main from '../../pages/main/main';
import {AppProps} from './app-props';

function App({ title, genre, year }: AppProps): JSX.Element {
  return <Main title={title} genre={genre} year={year}/>;
}

export default App;
