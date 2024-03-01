import {Outlet, useParams} from "react-router-dom";
import PokeDetail from "../components/poke-detail.tsx";
import axios from "axios";
import {useEffect, useState} from "react";


export default function PokeGeneral() {
  const { pokeId } = useParams(); // Destructure the userId parameter from useParams
  const [detail, setDetail] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId);
      setDetail(response.data);
    };
    
    fetchData();
  }, [pokeId]);
  
  
  // async function fetchPokeDetail(pokeId) {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  //   );
  //   console.log("Response detail: ", response.data)
  //   setDetail(response);
  //   // const contacts = await getContacts();
  //
  //   return response;
  // }
  
  return(
    <>
      <div> Contact - -Poke general Page - {pokeId}</div>
      <PokeDetail data={detail} />
    </>
  )
}
