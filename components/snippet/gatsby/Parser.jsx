import React, { Component } from "react";

import Hero from "../organisms/hero/Hero";

const components = {
	hero: Hero
};

function CreateMarkup({ content }) {
	let content = this.props.content;

	if (content && content[0]) {
		content = content.filter(block => block.blockName !== null);
		const pageComponents = content.map((component, index) => {
			const Component = components[component.blockName.substr(4)];
			return <Component index={index} data={component.attrs.data} />;
		});
		if (pageComponents) {
			return pageComponents;
		}
	} else {
		return null;
	}
}

export default CreateMarkup;
