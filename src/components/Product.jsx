
function Product({ id, name, category, description, price, image, onAddToCart, stock, quantity, disabledButtonIds }) {
  const imagePath = `../../public/images/${image}`;
  const altText = `${image.replace(".jpg", "")} image`;
  const isOutOfStock = quantity >= stock;
  const remaining = stock - quantity;

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
        <div className="btn-span">
          <button className="addItemToCard-Btn" onClick={() => onAddToCart({ id, name, price })} disabled={disabledButtonIds.includes(id) && quantity === stock}
          >Add to cart</button>
          {isOutOfStock ? (
            <span className="span-out">Out of stock</span>
          ) : (remaining <= 2) ? (
            <span className="span-few">Hurry, only {remaining} left!</span>
          ) : undefined}
        </div>
      </div>
    </div>
  )
}

export default Product
