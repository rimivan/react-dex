import { Link, Outlet, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useFetchPoke } from '../hooks/fetch-poke';

// get pokemon list: https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100

export async function loader() {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100`);
  console.log('resp: ', response.data);
  return response;
}

export default function Layout() {
  const pokes = useLoaderData();
  const { data, error, loading } = useFetchPoke('https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100');
  

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error.message}</div>;
  if (!data) return <div>Nessun dato</div>;

  return (
    <>
      <div id="sidebar">
        <h1>Poke list:</h1>
        <nav>
          <ul>
            {/* {data.results.map((poke) => ( */}
            {pokes.data.results.map((poke) => (
              <li key={poke.name}>
                <Link to={`poke/` + poke.name}>{poke.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
