import {Outlet, useParams} from "react-router-dom";

export default function PokeDetail(data: any) {
  
  console.log("Poke detail data: ", data)
  
  return(
    <>
      <div> Poke detail Page of {data.data?.name} - {data.data?.order}</div>
    </>
  )
}
