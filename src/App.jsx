import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { Error, Register, Landing, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EcommerceOverView,
  Jobs,
  NewProduct,
  Post,
  ProductLists,
  Profile,
  SharedLayout,
  SingleProductPage,
  Stats,
} from "./pages/dashboard";

// const router = createBrowserRouter([
//   {
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/",
//         element: <SharedLayout />,
//         errorElement: <Error />,
//         children: [
//           {
//             index: true,
//             element: <Stats />,
//           },
//         ],
//       },
//     ],
//   },

//   {
//     path: "landing",
//     element: <Landing />,
//   },
//   {
//     index: true,
//     path: "register",
//     element: <Register />,
//   },
// ]);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="profile" element={<Profile />} />
            <Route path="post" element={<Post />} />
            <Route path="profile" element={<Profile />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="product_overview" element={<EcommerceOverView />} />
            <Route path="productlist" element={<ProductLists />} />
            <Route path="new-product" element={<NewProduct />} />
            <Route path="product/:id" element={<SingleProductPage />} />
          </Route>

          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          closeOnClick
          hideProgressBar={true}
        />{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
