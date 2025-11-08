// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>
//       <div className="product-list">
//         {products.map((p) => (
//           <div key={p._id} className="product-card">
//             <img src={`http://localhost:5000/${p.images[0]}`} alt={p.name} width="200" />
//             <h3>{p.name}</h3>
//             <p>{p.brand}</p>
//             <p>{p.price}</p>
//             <button>View Details</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
