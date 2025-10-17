# React Product Catalog – Initial Setup

## Description

- Completed Phase 1 – Initial Activity with product list.
- Built the base structure of a React + Vite project using components and initial styles.
- Implemented a static MVP rendering product cards from a local dataset with at least 20 products.
- Followed best practices: semantic tags (header, main, section, footer), descriptive alt text for images, and stable keys when mapping arrays.
- Project compiles successfully and is ready for development.

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

- Set up the base React + Vite project structure.
- Created the main components: Header, Products, Product, Footer.
- Added a local dataset with 20 products.
- Rendered product cards dynamically from the dataset using JSX and props.
- Styled the project with a consistent external CSS file (`index.css`) using Flexbox for layout.
- Ensured semantic HTML (header, main, section, footer) and accessibility (descriptive alt text, clear heading hierarchy).
- Verified no console warnings or errors.

---

```

```
