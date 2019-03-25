import React, { Component } from "react";
import styled from "styled-components";

const HeroComponent = styled.section`
	background: ${props =>
		props.background ? props.background : props.theme.primary};
	color: ${props => props.theme.white};
`;

export default class Hero extends Component {
	render() {
		const { data } = this.props;

		const background =
			data && data.background_colour ? data.background_colour : `#0652DD`;

		return (
			<HeroComponent background={background}>
				<div className="hero__wrapper">
					{data && data.content ? (
						<div
							className="hero__contents"
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
					) : (
						<div className="hero__contents">{this.props.children}</div>
					)}
				</div>
			</HeroComponent>
		);
	}
}
