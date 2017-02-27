var React = require("react");
var Nav = require('Nav');


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div >
                    <div>
                       <p className = "jumbotron">Main.jsx Rendered</p>
                       <Nav />
                        {this.props.children}
                    </div>
                </div>

            </div>
        )
    }
})
module.exports = Main;