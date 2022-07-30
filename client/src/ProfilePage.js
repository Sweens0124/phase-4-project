import ItemCard from "./ItemCard";
import NavBar from './Navbar';

function ProfilePage ({ items, users, updateItem, removeItem, fetchItems }) {
  console.log(users);

  return (
    <>
      <NavBar />
      <ItemCard items={ items } />
    </>
  )
}

export default ProfilePage;