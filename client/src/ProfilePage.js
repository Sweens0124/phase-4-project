// import React, { useState, useEffect } from "react";
// import ItemCollection from "./ItemCollection";
// import ItemForm from "./ItemForm";
// import Navbar from "./Navbar";
// import { Navigate } from "react-router-dom";


// function ProfilePage({ isLoggedIn, setIsLoggedIn }) {
//     const [items, setItems] = useState([])


//     if (!isLoggedIn) return <Navigate to="/.LoginPage" />;

//     // function removeForever(e, id) {
//     //     e.stopPropagation();
//     //     setMovies((currentItems) =>
//     //         currentItems.filter((item) => movie.id !== id)
//     //     );
//     // }

//     // function handleUpdateItem(updatedItem, id) {
//     //     fetch(`/users/${id}`, {
//     //         method: 'PATCH',
//     //         headers: new Headers({ "content-type": "application/json" }),
//     //         body: JSON.stringify(updatedItem),
//     //     })
//     // }

//     // function handleAddItem(newItem) {
//     //     fetch(`/users/${id}`, {
//     //         method: 'POST',
//     //         headers: new Headers({ "content-type": "application/json" }),
//     //         body: JSON.stringify(newItem),
//     //     })
//     //     setItems([...items, newItem]);
//     // }
      
// //     return (
// //         <div id="moviePage">
// //             <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn} />
// //             <ItemForm onAddItem={handleAddItem} fetchMovies={fetchAllMovies} />
// //             <ItemCollection
// //                 items={items}
// //                 addItem={handleAddItem}
// //                 updateItem={handleUpdateItem}
// //                 removeForever={removeForever}
// //                 fetchItems={fetchAllItems}
// //             />
// //         </div>
// //     )
// // }

// export default ProfilePage