import ItemCard from './ItemCard';
import NavBar from './Navbar';

function AllItemsPage ({ items }) {

  return (
    <>
      <NavBar />
      <ItemCard items={ items } />
    </>
  )
}

export default AllItemsPage