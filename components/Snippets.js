const ConvertContent = require("!raw-loader!./snippet/wordpress/convert.php");
const DisableGutenberg = require("!raw-loader!./snippet/wordpress/disable.php");
const RegisterHero = require("!raw-loader!./snippet/wordpress/register.php");
const RestAction = require("!raw-loader!./snippet/wordpress/rest-action.php");
const RestPosts = require("!raw-loader!./snippet/wordpress/rest.php");

const PluginWordPress = require("!raw-loader!./snippet/gatsby/plugin-wordpress.js");
const PluginWordPressGenerate = require("!raw-loader!./snippet/gatsby/plugin-wordpress-generate.js");

const Hero = require("!raw-loader!./snippet/gatsby/hero.jsx");
const Page = require("!raw-loader!./snippet/gatsby/page.jsx");
const Parser = require("!raw-loader!./snippet/gatsby/parser.jsx");

module.exports = {
	ConvertContent: ConvertContent.default,
	DisableGutenberg: DisableGutenberg.default,
	RegisterHero: RegisterHero.default,
	RestAction: RestAction.default,
	RestPosts: RestPosts.default,

	PluginWordPress: PluginWordPress.default,
	PluginWordPressGenerate: PluginWordPressGenerate.default,

	Hero: Hero.default,
	Page: Page.default,
	Parser: Parser.default
};
