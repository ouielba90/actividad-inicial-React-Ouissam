
function Product({ id, name, category, description, price, image, onAddToCart, stock, quantity, disabledButtonIds }) {
  const imagePath = `../../public/images/${image}`;
  const altText = `${image.replace(".jpg", "")} image`;
  const isOutOfStock = quantity >= stock;
  const remaining = stock - quantity;

  return (
    <div className="product-card" key={id}>
      <div className="product-card__media">
        <img src={imagePath} alt={altText} />
        <div><h3>{name}</h3></div>
      </div>
      <div className="product-card__details">
        <p><b>Category: </b>{category}</p>
        <p><b>Description: </b>{description}</p>
      </div>
      <div className="product-card__footer">
        <p className="product-card__price">{price}€</p>
        <div className="product-card__actions">
          <button className="btn--add-to-cart" onClick={() => onAddToCart({ id, name, price })} disabled={disabledButtonIds.includes(id) && quantity === stock}
          >Add to cart</button>
          {isOutOfStock ? (
            <span className="stock-status--out">Out of stock</span>
          ) : (remaining <= 2) ? (
            <span className="stock-status--low">Hurry, only {remaining} left!</span>
          ) : undefined}
        </div>
      </div>
    </div>
  )
}

export default Product
