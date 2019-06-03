import React from "react";
import styled from "styled-components";

const AvatarElement = styled.img`
	border-radius: 50%;
	height: ${props => props.height};
	width: ${props => props.width};

	object-fit: cover;
`;

const Avatar = ({ src, height, width }) => {
	return <AvatarElement src={src} height={height} width={width} />;
};

export default Avatar;
