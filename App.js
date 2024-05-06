/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child">
 *          <h2></h2>
 *      </div>
 * </div>  
 */


const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"Hi i am h1 tag"),
    React.createElement("h2",{},"Hi i am h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"Hi i am h1 tag"),
    React.createElement("h2",{},"Hi i am h2 tag")])
]);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)