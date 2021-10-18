import './App.css';
import Recipe from './Recipe';
import { useState , useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@mui/material';
import db from './firebase.js';

function App() {
  const [recipes, setRecipes] = useState(['hello','hi']);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('recipes').onSnapshot(snapshot => {
      setRecipes(snapshot.docs.map(doc => doc.data().recipe))
    })
  }, []);

  const addRecipeTitle = (event) => {
    event.preventDefault();
    // alert('Added Title');
    setRecipes([...recipes, input]);
    setInput('');
  }
  return (
    
    <div className="App">
      <h1>Personal Recipe App 🍕</h1>
      <FormControl className="app__searchform">
        <InputLabel>Recipe Name</InputLabel>
        <Input type="text" placeholder="Pizza" className="app__input" value={input} onChange={event => setInput(event.target.value)}/>
        <Button className="app__submitButton" disabled={!input} className="app_addValue" type="submit" variant="contained" onClick={addRecipeTitle}>Add New Recipe</Button>
      </FormControl>
      <ul>
        {recipes.map((recipe)=> 
        <Recipe text={recipe}/>)}
      </ul>
    </div>
  );
}

export default App;

