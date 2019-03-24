import React, { Component } from "react";
import styled from "styled-components";

const FooterElement = styled.header`
	bottom: 0;
	position: absolute;
	right: 0;
	padding: 16px;

	a {
		text-decoration: none;
	}
`;

export default class Footer extends Component {
	render() {
		return (
			<FooterElement>
				<a href="https://whatjackhasmade.co.uk">@whatjackhasmade</a>
			</FooterElement>
		);
	}
}
