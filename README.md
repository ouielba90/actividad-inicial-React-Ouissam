# React Product Catalog – Initial Setup

## Description

* Completed Phase 1 – Initial Activity with product list.
* Built the base structure of a React + Vite project using components and initial styles.
* Implemented a static MVP rendering product cards from a local dataset with at least 20 products.
* Followed best practices: semantic tags (header, main, section, footer), descriptive alt text for images, and stable keys when mapping arrays.
* Project compiles successfully and is ready for development.

---

## Project Structure

```text
initial-activity/
  index.html
  data/
    data.jsx       # dataset with 20 products
  src/
    App.jsx        # composition of Header, Products, Footer
    index.css      # shared stylesheet
    main.jsx       # React + Vite bootstrap
    components/
      Header.jsx
      Products.jsx  # maps dataset to <Product />
      Product.jsx   # product card
      Footer.jsx
  public/           # optional static files
  README.md
```

---

## Phase 1 – What I Did

* Set up the base React + Vite project structure.
* Created the main components: Header, Products, Product, Footer.
* Added a local dataset with 20 products.
* Rendered product cards dynamically from the dataset using JSX and props.
* Styled the project with a consistent external CSS file (`index.css`) using Flexbox for layout.
* Ensured semantic HTML (header, main, section, footer) and accessibility (descriptive alt text, clear heading hierarchy).
* Verified no console warnings or errors.

---

## Phase 2.1 – What I Did

* Implemented a floating shopping cart button 🛒.
* Added `ShoppingCart.jsx` component with a pop-up panel.
* Used `useState` to control visibility of the cart (`showCart` state).
* Pop-up can be opened/closed using the floating button and a ❌ close button inside the cart.
* Ensured smooth show/hide transitions with conditional rendering in JSX.
* Verified design is clean, coherent, and functional with no console errors or warnings.

---

## Phase 2.2 – What I Did

* Added “Add to Cart” buttons to each product card.  
* Created the `addToShoppingCart(product)` function to update state in the parent component (`Products.jsx`).  
* Managed the shopping cart state with `useState`.  
* Passed the shopping cart items as props to the `ShoppingCart` component.  
* Rendered the cart dynamically using `map` to display added products in real time.  
* Ensured that the cart updates without duplicating the structure and the user experience is smooth.  
* Verified the feature works correctly with no console warnings or errors.
* Total calculation using reduce.

---

## Phase 2.3 – What I Did

* Implemented the feature to **remove products from the cart** using a 🗑 button for each item.
* Added a dedicated `onDeleteProduct(index)` function to update the cart state immutably.
* Ensured the **total price recalculates automatically** after an item is deleted.
* Verified smooth and consistent behavior with no errors or broken UI updates.
* Followed React best practices for state updates and stable `key` props when mapping elements.
* Confirmed that individual item deletion works correctly and the total updates in real time.
* Added the number of items added to the basket on top of the basket icon.
