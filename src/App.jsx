import { RouterProvider } from "react-router";
import router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./app/store";
import HotelLicenseInfo from "./pages/hotel-licence-info/HotelLicenseInfo";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
   
  );
}

export default App;
