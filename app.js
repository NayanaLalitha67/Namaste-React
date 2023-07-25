// const heading=React.createElement("h1",
// {id:"head"},
// "Hello react");

const heading=React.createElement("div",{id:"parent"}, [
React.createElement("div",{id:"child1"},[
 React.createElement("h1",{},"hello iam h1 tag"),
 React.createElement("h2",{},"hello iam h2 tag")]),
React.createElement("div",{id:"child2"},[
   React.createElement("h1",{},"hello iam h1 tag"),
   React.createElement("h2",{},"hello iam h2 tag")])]);

console.log(heading);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);