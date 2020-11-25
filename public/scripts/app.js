console.log('App.js is running');

var template = React.createElement("h1", {
  id: "hellojsx"
}, "Hello JSX!");

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);