import React from "react";
import styled from "styled-components";

const VideoElement = styled.video`
	object-fit: cover;
`;

const Video = ({ src }) => {
	return (
		<VideoElement autoplay={true} muted={true}>
			<source src={src} type="video/mp4" />
		</VideoElement>
	);
};

export default Video;
