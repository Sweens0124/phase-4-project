function ItemCard ({ items }) {
  //category, condition, description, name, price 
  console.log(items);
  const itemDisplay = items.map((item) => {
    return (
      <div className='item_card' key={ item.id }>
        <h4>{ item.name }</h4>
        <h4>${ item.price }</h4>
        {/* add image details */ }
      </div>
    )
  })

  return (
    <>
      { itemDisplay }
    </>
  )
}

export default ItemCard;