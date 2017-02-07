import React from 'react'
import ReactDom from 'react-dom'

var Hello = React.createClass({
	render: function(){
		return(
		 <h1>Hello world nnns hhh bhh, Sandip  </h1>
		)
	}
	
	
})
ReactDom.render(<Hello />, document.getElementById('example'));