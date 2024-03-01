import {Link, Outlet, useLoaderData} from "react-router-dom";
import axios from 'axios';

// get pokemon list: https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100

export async function loader() {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100`
  );
  console.log("resp: ", response.data)
  // const contacts = await getContacts();
  return response;
}

export default function Layout() {
  const pokes = useLoaderData();
    return (
      <>
        <div id="sidebar">
          <h1>Poke list:</h1>
          <nav>
            <ul>
              {pokes.data.results.map((poke) => (
                <li key={poke.name}>
                  <Link to={`poke/` + poke.name}>
                    {poke.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet/>
        </div>
      </>
    );
  
}

