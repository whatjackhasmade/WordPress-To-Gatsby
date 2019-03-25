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
									rows {
										column
									}
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
				allPost {
					edges {
						node {
							content
							id
							imageFull
							slug
							title
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
			result.data.allPost.edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve(`./src/components/templates/Post.jsx`),
					context: {
						content: node.content,
						id: node.id,
						image: node.imageFull,
						title: node.title,
						slug: node.slug
					}
				});
			});
			resolve();
		});
	});
};
