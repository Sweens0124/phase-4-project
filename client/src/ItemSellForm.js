import NavBar from './Navbar';

function ItemSellForm () {


  return (
    <>
      <NavBar />
      <div className='sell_div'>
        <form className='sell_form'>
          <label>Item Name:</label>
          <input type='text' name="name" /><br />
          <label>Price:</label>
          <input type='number' name="price" /><br />
          <label>Category:</label>
          <select>
            <option>Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothing">Clothing</option>
            <option value="Appliances">Appliances</option>
          </select><br />
          <label>Condition:</label>
          <select>
            <option>Select Condition</option>
            <option value="Great">Great</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
          </select>
        </form>
      </div>
    </>
  )
}

export default ItemSellForm;