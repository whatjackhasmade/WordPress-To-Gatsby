const fetch = require("node-fetch");
const queryString = require("query-string");
const crypto = require("crypto");
const path = require("path");

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const pagesURL = `https://wjhm.noface.app/wp-json/pages/v2/all`;
	const pagesResponse = await fetch(pagesURL);
	const pagesData = await pagesResponse.json();

	pagesData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`page-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Page",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});
};
