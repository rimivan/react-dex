import { usePokeStore } from '../stores/PokeStore.tsx';

export default function PokeSelection() {
  const { pokename } = usePokeStore();
  return <>Poke selection {pokename}</>;
}
