var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render:function(){
        return (
            <div class = "breadcrumbs">
           <li> <Link to = "/" activeClassName = "active" activeStyle = {{fontWeight:'bold'}}>Main Page</Link></li>
            <Link to = "/Example" activeClassName = "active" activeStyle = {{fontWeight:'bold'}}>Example</Link>
            </div>
        )
    }
})
module.exports = Nav;