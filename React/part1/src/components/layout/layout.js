import React from 'react';
import Header from './header'
import Footer from './footer'


class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			"title" : "Welcome Sandip "
		}
	}

	render(){
		return(
				<div>
					<Header />
					<Footer />
				</div>
			)
	}
}

export default Layout;