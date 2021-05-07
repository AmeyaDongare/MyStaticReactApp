import React from 'react';
import { withRouter } from 'react-router';

import { CardContent } from '../components';

const mydata = async (e) => {
  console.log(e.target);
  //alert('whaaat')
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await res.json();
  console.log(data);
}

function ProductList({products}) {
  return (
    <div>
      {products.length === 0 && <div>Loading data ...</div>}
      <ul className="list">
        {products.map((product) => (
          <li key={product.id} role="presentation">
            <div className="card">
              <CardContent
                name={product.name}
                description={product.description}
              />
              <button type='button' onClick={mydata}>Data</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(ProductList);
