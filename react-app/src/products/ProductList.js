import React from 'react';
import { withRouter } from 'react-router';

import { CardContent } from '../components';

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
              <button onClick={() => {alert('Hi');
                              fetch('https://jsonplaceholder.typicode.com/todos/1')
                              .then(response => response.json())
                              .then(json => alert(json));}}>Click Me</button>            
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(ProductList);
