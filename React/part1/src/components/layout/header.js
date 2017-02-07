import React from 'react';
import Title from './../header/title'


class Header extends React.Component{
	constructor(){
		super();

	}

	render(){
		return(
				<div>
					<Title title={"Welcome sandip"} />
				</div>
			)
	}
}

export default Header;