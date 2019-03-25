import React, { Component } from "react";
import styled from "styled-components";

const HeroComponent = styled.section`
	background: ${props => (props.background ? props.background : `#0652DD`)};
	color: #fff;
`;

export default class Hero extends Component {
	render() {
		const { data } = this.props;

		const background = data.background_colour;

		return (
			<HeroComponent background={background}>
				<div className="hero__wrapper">
					<div
						className="hero__contents"
						dangerouslySetInnerHTML={{ __html: data.content }}
					/>
				</div>
			</HeroComponent>
		);
	}
}
