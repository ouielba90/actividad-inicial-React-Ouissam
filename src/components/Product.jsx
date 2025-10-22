
function Product({ id, name, category, description, price, image, onAddToCart, disabledButtonIds }) {
  const imagePath = `../../public/images/${image}`;
  const altText = `${image.replace(".jpg", "")} image`;

  return (
    <div className="card" key={id}>
      <div className="image-h3">
        <img src={imagePath} alt={altText} />
        <div><h3>{name}</h3></div>
      </div>
      <div className="card-text-props">
        <p><b>Category: </b>{category}</p>
        <p><b>Description: </b>{description}</p>
      </div>
      <div className="card-footer">
        <p className="price">{price}€</p>
        <button className="addItemToCard-Btn" onClick={() => onAddToCart({ id, name, price })} disabled={disabledButtonIds.includes(id)}
        >Add to cart</button>
      </div>
    </div>
  )
}

export default Product
