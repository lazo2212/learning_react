import React from 'react';

const getImageUrl = (imageId, size = 's') => {
  return 'https://i.imgur.com/' + imageId + size + '.jpg';
};

const Avatar = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl('szV5sdG')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

const Card = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: 'black', color: 'pink', padding: '10px 40px' }}
    >
      {children}
      <ul>
        <li>
          <b>Profession: </b>
          physicist and chemist
        </li>
        <li>
          <b>Awards: 4 </b>
          (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
          Matteucci Medal)
        </li>
        <li>
          <b>Discovered: </b>
          polonium (element)
        </li>
      </ul>
    </div>
  );
};

const Profile = () => {
  return (
    <Card>
      <h1>Maria Skłodowska-Curie</h1>
      <Avatar
        person={{ name: 'Maria Skłodowska-Curie', imageId: '1bX5QH6' }}
        size={100}
      />
    </Card>
  );
};

export default function App() {
  return <Profile />;
}
