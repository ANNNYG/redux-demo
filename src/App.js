import { Provider } from "react-redux";

import { store } from "./store";
import Home from "./Home";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
