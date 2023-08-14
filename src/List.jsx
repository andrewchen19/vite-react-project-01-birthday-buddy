import React from "react";
import Person from "./Person";

const List = ({ data }) => {
  return data.map((p) => {
    // {...p} 將每個 object 的 property spread out
    return <Person key={p.id} {...p} />;
  });
};

// React.memo()
// 當 functional component 的 prop 有所改變時 (new reference)，才會 re-render
export default React.memo(List);
