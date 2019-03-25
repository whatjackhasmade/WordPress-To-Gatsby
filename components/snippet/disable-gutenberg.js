import React, { Component } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeStyles = styled.div`
	code > span {
		display: block;
		text-align: left;
	}
`;

const DisableGutenberg = () => {
	const codeString = `<?php
function misha_allowed_block_types($allowed_blocks)
{
 $blockArray = array();
 $blockies = array('dribbble', 'github', 'hero', 'row');

 foreach ($blockies as $v) {
  array_push($blockArray, 'acf/' . $v);
 }

 return $blockArray;
}
`;

	return (
		<CodeStyles>
			<SyntaxHighlighter language="php" wrapLines>
				{codeString}
			</SyntaxHighlighter>
		</CodeStyles>
	);
};

export default DisableGutenberg;
