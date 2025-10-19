function Product({ id, name, category, description, price, image, onShoppingCart }) {
  let alt_image = image.replace(".jpg", "");
  alt_image = `${alt_image} image`
  image = "../../public/images/" + image

  return (
    <div className="card" key={id}>
      <img src={image} alt={`${alt_image}`} />
      <div><h3>{name}</h3></div>
      <div className="card-text-props">
        <p><b>Category: </b>{category}</p>
        <p><b>Description: </b>{description}</p>
        <p><b>Price: </b>{price}€</p></div>
      <button className="addItemToCard-Btn" onClick={() => onShoppingCart({ id, name, price })}>Add to cart</button>
    </div>
  )
}

export default Product
