import React, { Component } from "react";
import styled from "styled-components";

const StatusElement = styled.header`
	position: absolute;
	left: 0;
	padding: 16px;
	top: 0;

	span {
		opacity: 0.2;
	}

	.status__complete {
		opacity: 1;
	}
`;

const stages = [
	{
		icon: "👋",
		stageCount: 0
	},
	{
		icon: "🖨",
		stageCount: 3
	},
	{
		icon: "🍑",
		stageCount: 6
	},
	{
		icon: "🎨",
		stageCount: 12
	},
	{
		icon: "⚛",
		stageCount: 13
	}
];

export default class Status extends Component {
	render() {
		const index = this.props.index ? this.props.index : 0;

		return (
			<StatusElement>
				{stages.map(stage => {
					if (index >= stage.stageCount) {
						return (
							<span className="status__stage status__complete">
								{stage.icon}
							</span>
						);
					}
					return <span className="status__stage">{stage.icon}</span>;
				})}
			</StatusElement>
		);
	}
}
