const acfJSON = require("!raw-loader!./snippet/json/acf-block.snippet");
const blockJSON = require("!raw-loader!./snippet/json/block.snippet");

const ConvertContent = require("!raw-loader!./snippet/wordpress/convert.php");
const DisableGutenberg = require("!raw-loader!./snippet/wordpress/disable.php");
const HeroTwig = require("!raw-loader!./snippet/wordpress/hero.twig");
const RegisterHero = require("!raw-loader!./snippet/wordpress/register.php");
const RestAction = require("!raw-loader!./snippet/wordpress/rest-action.php");
const RestPosts = require("!raw-loader!./snippet/wordpress/rest.php");

const LoadPlugin = require("!raw-loader!./snippet/gatsby/LoadPlugin.js");
const PluginWordPress = require("!raw-loader!./snippet/gatsby/plugin-wordpress.js");
const PluginWordPressGenerate = require("!raw-loader!./snippet/gatsby/plugin-wordpress-generate.js");

const Hero = require("!raw-loader!./snippet/gatsby/hero.jsx");
const Page = require("!raw-loader!./snippet/gatsby/page.jsx");
const Parser = require("!raw-loader!./snippet/gatsby/parser.jsx");

module.exports = {
	acfJSON: acfJSON.default,
	blockJSON: blockJSON.default,

	ConvertContent: ConvertContent.default,
	DisableGutenberg: DisableGutenberg.default,
	HeroTwig: HeroTwig.default,
	RegisterHero: RegisterHero.default,
	RestAction: RestAction.default,
	RestPosts: RestPosts.default,

	LoadPlugin: LoadPlugin.default,
	PluginWordPress: PluginWordPress.default,
	PluginWordPressGenerate: PluginWordPressGenerate.default,

	Hero: Hero.default,
	Page: Page.default,
	Parser: Parser.default
};
