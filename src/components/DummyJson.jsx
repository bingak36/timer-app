import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DummyJson() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/carts')
      .then(res => setCarts(res.data.carts))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>제품 목록</h3>
      <ul>
        {carts.map(carts => (
          <li key={carts.id}>{carts.id} - {carts.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default DummyJson