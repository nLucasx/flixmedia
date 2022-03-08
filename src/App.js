import RoutesList from './config/Routes';
import { MoviesProvider } from './providers/movies';

function App() {
  return (
    <MoviesProvider>
      <RoutesList />
    </MoviesProvider>
  );
}

export default App;
