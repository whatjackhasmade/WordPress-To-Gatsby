import React, { Component } from "react";
import ThemeProvider from "mdx-deck/dist/Provider";

import Footer from "./components/Footer";
import Status from "./components/Status";

export default class Provider extends Component {
	render() {
		const { index, children, ...rest } = this.props;

		return (
			<ThemeProvider {...rest}>
				{children}

				<Status index={index} />
				<Footer />
			</ThemeProvider>
		);
	}
}
