import React, { Component } from 'react';

class Gallery extends Component {
	render(){
		let alternate = 'https://avatars2.githubusercontent.com/u/15259909?v=3&s=88';
		return (
			<div>
				{
					this.props.items.map((item, index) => {
						let {title, imageLinks, infoLink} = item.volumeInfo;
						return (
							<a 
								className="book" 
								key={index}
								href={infoLink}
								target="_blank"
							>
								<img 
									className="book-img"
									src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
									alt="book_image" />
								<div className="book-text">{title}</div>
							</a>
						)
					})
				}
			</div>
		)
	}
}

export default Gallery;