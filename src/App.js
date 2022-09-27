import { Fragment } from "react";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Items />
      </main>
    </Fragment>
  );
}

export default App;
