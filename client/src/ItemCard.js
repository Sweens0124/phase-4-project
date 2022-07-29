function ItemCard ({ items }) {
  //category, condition, description, name, price 
  console.log(items);
  const itemDisplay = items.map((item) => {
    return (
      <div className='item_card' key={ item.id }>
        <h4>{ item.name }</h4>
        <h4>${ item.price }</h4>
        <p><small>{ item.condition }</small></p>
        <p><small>{ item.category }</small></p>
        <p><small>{ item.description }</small></p>
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