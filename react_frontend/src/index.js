import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateHabit from './AddHabits';
import ViewHabits from './ViewHabits';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from './NotFoundPage';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route exact path="/home" element={<App />}>
//       <Route exact path="/addhabits" element={<Create />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <NotFoundPage></NotFoundPage>
  },
  {
    path: 'addhabits',
    element: <CreateHabit></CreateHabit>
  },
  {
    path: 'viewhabits',
    element: <ViewHabits></ViewHabits>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
