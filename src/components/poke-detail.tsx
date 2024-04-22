import { Button } from '@mui/material';
import { usePokeStore } from '../stores/PokeStore.tsx';

export default function PokeDetail(data: any) {
  const { updatePoke } = usePokeStore();

  console.log('Poke detail data: ', data);

  const handleChoosePoke = () => {
    console.log('Data: ', data);
    updatePoke(data.data.name);
  };

  return (
    <>
      <div>
        <h2> Your poke </h2>
        <span> Name: {data.data?.name} </span>
        <div>
          <span>Abilities: </span>
          {data.data?.abilities.map((abilitiy, index) => (
            <span>{index === 0 ? abilitiy.ability.name : ', ' + abilitiy.ability.name}</span>
          ))}
        </div>
        <img src={data.data?.sprites.front_default} />
        <Button onClick={() => handleChoosePoke()}> Choose Poke </Button>
      </div>

      {/*<Card sx={{ maxWidth: 345 }}>*/}
      {/*  <CardMedia*/}
      {/*    sx={{ height: 140 }}*/}
      {/*    image="/static/images/cards/contemplative-reptile.jpg"*/}
      {/*    title="green iguana"*/}
      {/*  />*/}
      {/*  <CardContent>*/}
      {/*    <Typography gutterBottom variant="h5" component="div">*/}
      {/*      Lizard*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" color="text.secondary">*/}
      {/*      Lizards are a widespread group of squamate reptiles, with over 6,000*/}
      {/*      species, ranging across all continents except Antarctica*/}
      {/*    </Typography>*/}
      {/*  </CardContent>*/}
      {/*  <CardActions>*/}
      {/*    <Button size="small">Share</Button>*/}
      {/*    <Button size="small">Learn More</Button>*/}
      {/*  </CardActions>*/}
      {/*</Card>*/}
    </>
  );
}
