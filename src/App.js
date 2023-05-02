import React from 'react';
import { getImageUrl } from './utils.js';
import './App.css';

const Profile = ({ person, size, profession, awards, discovered }) => {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }

  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId, thumbnailSize)}
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

const Item = ({ name, isPacked }) => {
  return <li className="item">{isPacked ? name + ' ✔' : name + ' ❌ '}</li>;
};

export default function Gallery() {
  return (
    <>
      {/* <div>
        <h1>Notable Scientists</h1>
        <Profile
          person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG' }}
          size={100}
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
          size={80}
          profession="geochemist"
          awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
          discovered="a method for measuring carbon dioxide in seawater"
        />
      </div> */}
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item isPacked={true} name={'Space suit'} />
          <Item isPacked={true} name={'Helmet with a golden leaf'} />
          <Item isPacked={false} name={'Photo of Tam'} />
        </ul>
      </section>
    </>
  );
}
