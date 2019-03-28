exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allPage {
					edges {
						node {
							content {
								id
								align
								data {
									background_colour
									content
								}
								mode
								name
							}
							id
							imageXS
							imageSM
							imageMD
							imageLG
							imageXL
							imageFull
							slug
							title
							yoast {
								description
								image
								slug
								title
							}
						}
					}
				}
			}
		`).then(result => {
			result.data.allPage.edges.forEach(({ node }) => {
				const slug =
					node.slug === "home" || node.slug === "homepage" ? `/` : node.slug;
				createPage({
					path: slug,
					component: path.resolve(`./src/components/templates/Page.jsx`),
					context: {
						content: node.content,
						id: node.id,
						imageXS: node.imageXS,
						imageSM: node.imageSM,
						imageMD: node.imageMD,
						imageLG: node.imageLG,
						imageXL: node.imageXL,
						imageFull: node.imageFull,
						slug: node.slug,
						title: node.title,
						yoast: node.yoast
					}
				});
			});
			resolve();
		});
	});
};
