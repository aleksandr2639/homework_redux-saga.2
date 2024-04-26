import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import List from "./pages/List";
import Details from "./pages/Details.jsx";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/:id/details" element={<Details />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
