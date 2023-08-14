import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  // state
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} people birthday today</h3>
        {/* functional component */}
        <List data={people} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
