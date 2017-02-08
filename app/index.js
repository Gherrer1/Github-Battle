var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return (
      <div id="hello">
        Hello React.js Program
      </div>
    );
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
