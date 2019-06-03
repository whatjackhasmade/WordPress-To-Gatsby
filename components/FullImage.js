import React from "react";
import styled from "styled-components";

const FullImageElement = styled.img`
	height: 100%;
	width: 100%;

	object-fit: cover;
`;

const FullImage = ({ src }) => {
	return <FullImageElement src={src} />;
};

export default FullImage;
