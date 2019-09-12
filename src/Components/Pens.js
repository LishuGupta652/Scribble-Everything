import React, { Component } from 'react'
import {createClient} from 'contentful'

const client = createClient({
	space: 'bn43sh8cxn3a',
	accessToken: 'aDafYkQgE-hCgjKkBttaY1rWn9FCNe6pnvoCu7ubHic'
})

export default class Pens extends Component {
	constructor(){
		super();
		this.state = {data : []};

	}
	
	getData = async () => {
		let response = await client.getEntries({
			content_type: "pens"
		})
		.then((res) => {
			this.setState({
				data: res.items
			})
		})
		.catch(console.error)

	}

	componentDidMount(){

		this.getData();

	}
	render() {
		
		let pens = this.state.data;
		
		if(pens.length === 0){
			return (
				<div>
					<div className="loading">
					<h1>Pens are Loading ...</h1>
					<div class="loader"></div>
					</div>
				</div>
			)
		}
		let pen = pens.map((item) => {
				if(pens.length !== 0){

					return (
						<div className="single-pen">
						<h3>{item.fields.title}</h3>
						<div className="image">
						<img src={item.fields.image.fields.file.url} alt={item.fields.title}/> 
						</div>
					</div>
				)
			}

		})
		
		return (
		<>
		<div className="all-pens">
			{pen }
		</div>
		</>
		);
	  }
}