import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function Home() {
  return <h2>Welcome to E-commerce</h2>;
}

function Orders() {
  return (
    <div>
      <h2>Orders Page</h2>
      <Link to="current">Current Orders</Link>{" | "}
      <Link to="history">Order History</Link>{" | "}
      <Link to="cancelled">Cancelled Orders</Link>
      <hr />
      <Outlet />
    </div>
  );
}

function CurrentOrders() {
  return <h3>Current Orders: Mobile, Laptop</h3>;
}

function OrderHistory() {
  return <h3>Order History: Shoes, Watch</h3>;
}

function CancelledOrders() {
  return <h3>Cancelled Orders: Headphones</h3>;
}

 function App() {
  return (
    <BrowserRouter>
      <h1>E-commerce Order Management</h1>

      <Link to="/">Home</Link>{" | "}
      <Link to="/orders">Orders</Link>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/orders" element={<Orders />}>
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;