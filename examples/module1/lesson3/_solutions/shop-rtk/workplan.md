# Work Plan for Refactoring Context API to Redux Toolkit

## Overview

This work plan outlines the steps required to refactor the existing application from using the Context API to Redux Toolkit. The goal is to improve state management by utilizing Redux slices, actions, reducers, selectors, and RTK Query for data fetching.

## Steps

### 1. Set Up Redux Toolkit

- **Install Dependencies**: Ensure that Redux Toolkit and React-Redux are installed.
  ```bash
  npm install @reduxjs/toolkit react-redux
  ```
- **Configure the Redux Store**: Set up the Redux store if not already configured, integrating the `cartSlice` and other necessary slices.

### 2. Replace `CartContext` with `cartSlice`

#### a. Create `cartSlice`

- **Define the Slice**: Use `createSlice` from Redux Toolkit to define a new slice named `cartSlice`.
- **Initial State**: Set the initial state for the cart, including items and any relevant properties.

#### b. Add Actions and Reducers

- **Implement Actions**: Create actions for `decreaseAmount` and `removeFromCart`.
- **Reducers with Immer**: Implement the reducers using Immer for immutable state updates. Refer to the [Writing Reducers with Immer](https://redux-toolkit.js.org/usage/immer-reducers)[1] section in the Redux Toolkit documentation.

#### c. Export Actions and Reducer

- **Export Actions**: Export the generated actions for use in components.
- **Export Reducer**: Export the reducer to be included in the Redux store configuration.

### 3. Create Selector for `totalPrice`

- **Define Selector**: Create a selector function named `selectTotalPrice` to calculate the total price of items in the cart.
- **Implementation**: Use `createSelector` from `reselect` or define it within the slice as appropriate.

### 4. Refactor Components to Use Redux Actions and Selectors

- **Identify Components**: Locate all components that currently consume `CartContext`.
- **Replace Context API**:
  - **Dispatch Actions**: Use `useDispatch` to dispatch `decreaseAmount` and `removeFromCart` actions.
  - **Select State**: Use `useSelector` with `selectTotalPrice` to access the total price from the Redux store.
- **Remove `CartContext` Imports**: Eliminate any imports and usages of `CartContext` from these components.

### 5. Create API Service for `Products` Using RTK Query

#### a. Create API Slice

- **Define API Slice**: Utilize RTK Query's `createApi` to define an API slice for `Products`. Refer to the [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)[2].
- **Endpoints**: Define necessary endpoints for fetching product data.

#### b. Configure Store with RTK Query

- **Add API Reducer**: Include the API slice reducer in the Redux store configuration.
- **Add Middleware**: Integrate RTK Query’s middleware by concatenating it to the existing middleware array.

#### c. Replace `ProductContext` with RTK Query Hooks

- **Identify Components**: Locate all components that use `ProductContext`.
- **Use RTK Query Hooks**: Replace context-based data fetching with RTK Query’s auto-generated hooks (e.g., `useGetProductsQuery`).
- **Remove `ProductContext` Imports**: Eliminate any imports and usages of `ProductContext` from these components.

### 6. Test the Refactored Application

- **Functionality Tests**: Verify that all cart functionalities work as expected, including adding items, decreasing amounts, removing items, and calculating total price.
- **Data Fetching Tests**: Ensure that product data is fetched correctly using RTK Query.
- **UI Tests**: Check that UI components react appropriately to state changes.
- **Error Handling**: Test error states and loading indicators to ensure they function correctly.

### 7. Review and Optimize

- **Code Cleanup**: Remove any redundant or obsolete code related to the old Context API.
- **Performance Optimization**: Ensure that selectors are optimized to prevent unnecessary re-renders.
- **TypeScript Checks**: If using TypeScript, verify that all typings are correctly applied and there are no type errors.
- **Documentation**: Update any relevant documentation to reflect the changes made during refactoring.

## Notes

- Refer to the [Redux Toolkit RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)[2] for detailed instructions on setting up and using RTK Query.
- Ensure that all changes are committed incrementally to track progress and facilitate potential rollbacks if necessary.

---

**Citations:**

1. [Writing Reducers with Immer](https://redux-toolkit.js.org/usage/immer-reducers)
2. [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)
