import React, { Component } from "react";
import styled from "styled-components";
import ThemeProvider from "mdx-deck/dist/Provider";

import Footer from "./components/Footer";
import Status from "./components/Status";

const WrapperElement = styled.main`
	p {
		margin-left: auto;
		margin-right: auto;
		max-width: 50ch;
	}
`;

const Wrapper = ({ children }) => {
	return <WrapperElement>{children}</WrapperElement>;
};

export default class Provider extends Component {
	render() {
		const { index, children, ...rest } = this.props;

		return (
			<ThemeProvider {...rest}>
				<Wrapper>{children}</Wrapper>
				<Footer />
			</ThemeProvider>
		);
	}
}
