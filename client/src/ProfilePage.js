import ItemCard from "./ItemCard";
import NavBar from './Navbar';

function ProfilePage ({ items, updateItem, removeItem, fetchItems }) {
  return (
    <>
      <NavBar />
      <ItemCard items={ items } />
    </>
  )
}

export default ProfilePage;