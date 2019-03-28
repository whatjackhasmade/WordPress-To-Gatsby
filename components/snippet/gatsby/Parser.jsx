import React, { Component } from "react";

import Hero from "../organisms/hero/Hero";

export default class CreateMarkup extends Component {
	render() {
		const { content } = this.props;

		if (
			content &&
			content[0] &&
			content[0].hasOwnProperty("data") &&
			content[0].data !== null
		) {
			let componentsArray = [];
			let newArrayDataOfOjbect = Object.values(content);

			for (var key in newArrayDataOfOjbect) {
				if (newArrayDataOfOjbect.hasOwnProperty(key))
					componentsArray.push(newArrayDataOfOjbect[key]);
			}

			const pageComponents = componentsArray.map((component, index) => {
				if (component.name === `acf/hero`) {
					return (
						<Hero
							id={component.id}
							index={index}
							key={component.id}
							name={component.name}
							data={component.data}
						/>
					);
				}
				return null;
			});

			if (pageComponents) {
				return pageComponents;
			}
		} else {
			return null;
		}
	}
}
