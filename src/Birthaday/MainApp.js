import React, { useState } from 'react';
import Data from './Data'

const App = () => {
  const [data, setData] = useState(Data);
  const [birthdaysLeft, setBirthdaysLeft] = useState(data.length);

  const clearData = () => {
    setData([]);
    setBirthdaysLeft(0);
  };

  return (
    <div>
      {birthdaysLeft > 0 ? (
        data.map((x) => (
                   
          <section key={x.id} className='card'>
            <div className='image-container'>
              <img src={x.img} alt={x.name} />
            </div>
            <div className='text-container'>
              <p className='name'>{x.name}</p>
              <p className='age'>{x.age}</p>
            </div>
          </section>
        ))
      ) : (
        <p className='message1'>Today's 0 birthday</p>
      )}
      <center>
        <button onClick={clearData}>Clear Data</button>
      </center>
    </div>
  );
};

export default App;
