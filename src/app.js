import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Pet from "./Pet";
import SearchParams  from './SearchParams';
import { StrictMode, useState } from 'react';
import Details from './Details';
import ThemeContext from './ThemeContext';

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "bird",
//       breed: "cocktiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
const theme = useState("darkblue");

    return(
        <ThemeContext.Provider value={theme}>
    <div>
       
         {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cocktiel" />
        <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />  */}
        <Router>
        <header>
        <Link to="/">
       <h1 id="my-brand">Adopt Me</h1>
       </Link> 
        </header>
            <Switch>
            <Route path="/details/:id">
                <Details/>
            </Route>
            <Route path="/">
        <SearchParams/> 
        </Route>
        </Switch>
        </Router>
     
    </div>
    </ThemeContext.Provider>
    );
};



ReactDOM.render(
<StrictMode>
    <App/>
    </StrictMode>, document.getElementById("root"));
