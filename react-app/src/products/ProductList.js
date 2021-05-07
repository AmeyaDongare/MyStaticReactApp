import React, {useState} from 'react';
import { withRouter } from 'react-router';

import { CardContent } from '../components';

// const [title, setTitle] = useState('Data');

// const mydata = async (e) => {
  
//   //alert('whaaat')
//   let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   let data = await res.json();
//   setTitle(data.title);
// }

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
              {/* <button type='button' onClick={mydata}>{title}</button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(ProductList);
