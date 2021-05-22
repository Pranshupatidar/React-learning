import React from "react";
import ReactDOM from "react-dom";

const name = "Pranshu";
const desc = "The greatest web developer and freelancer";

ReactDOM.render(
  <div>
<h1>Hello {name}!</h1>
<p>{desc}</p>
</div>, 
document.getElementById("root")
);
