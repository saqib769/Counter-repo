import React, { useState } from 'react'

function Array() {

    const [update , setUpdate ] = useState([
        {
          id: 1,
          name: 'Samsung Galaxy',
          price: 500,
          category: 'Mobile',
          stock: 10,
        },
        {
          id: 2,
          name: 'iPhone 13',
          price: 1000,
          category: 'Mobile',
          stock: 5,
        },
        {
          id: 3,
          name: 'Sony Headphones',
          price: 150,
          category: 'Electronics',
          stock: 20,
        },
        {
          id: 4,
          name: 'Dell Laptop',
          price: 800,
          category: 'Computers',
          stock: 7,
        },
        {
          id: 5,
          name: 'Canon Camera',
          price: 1200,
          category: 'Cameras',
          stock: 3,
        },
        {
          id: 6,
          name: 'LG TV',
          price: 600,
          category: 'Electronics',
          stock: 15,
        },
        {
          id: 7,
          name: 'HP Printer',
          price: 200,
          category: 'Computers',
          stock: 12,
        },
        {
          id: 8,
          name: 'Nike Shoes',
          price: 100,
          category: 'Fashion',
          stock: 30,
        },
        {
          id: 9,
          name: 'Adidas T-shirt',
          price: 50,
          category: 'Fashion',
          stock: 50,
        },
        {
          id: 10,
          name: 'Apple Watch',
          price: 400,
          category: 'Wearables',
          stock: 8,
        },
      ]
      );
     
  return (
    <>
     <div>
        {update.map ((ele ) => (
            <div key={ele.id} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>Id: {ele.id}</h2>  
            <h2>Name: {ele.name}</h2>
            <p>Price: ${ele.price}</p>
            <p>Category: {ele.category}</p>
            <p>Stock: {ele.category}</p>
            </div>
        )
        )}
     </div>
    </>
  )
}

export default Array