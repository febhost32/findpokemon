import React from 'react';
import './App.css';

function App() {
  const [ability, setAbility] = React.useState(null);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    if (result){
    getPokemonName(result);
    }
  }, [result])


  function clickHandler(ability) {
      fetch(`https://pokeapi.co/api/v2/ability/${ability}`)
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((e) => console.log(e));
  }

  const getPokemonName = (result) => {
    return result.pokemon.map((x) => <p>{x.pokemon.name}</p>);
  }

  return (
    <div className="App">
      <input type="text" id="abilityName" onChange={(e) => setAbility(e.target.value)} />
      <button type='button' onClick={() => clickHandler(ability)}>Search</button>
      {result && getPokemonName(result)}
    </div>
  );
}

export default App;
