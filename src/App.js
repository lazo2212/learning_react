import React from 'react';
import { getImageUrl } from './utils.js';
import './App.css';

const recipes = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
  },
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: [
      'pizza crust',
      'pizza sauce',
      'mozzarella',
      'ham',
      'pineapple',
    ],
  },
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  },
];

const Recepie = ({ id, name, ingredients }) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

const RecepeList = () => {
  return (
    <div>
      <h1>Recepies</h1>
      {recipes.map((recepie) => (
        <Recepie {...recepie} key={recepie.id} />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <>
      <RecepeList />
    </>
  );
}
