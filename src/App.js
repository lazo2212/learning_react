import React from 'react';
import { getImageUrl } from './utils.js';
import './App.css';

const Profile = ({ person, size, profession, awards, discovered }) => {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
};

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG' }}
        size={70}
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal',
        ]}
        discovered="polonium (element)"
      />

      <Profile
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        size={70}
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
