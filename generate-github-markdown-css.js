const githubMarkdownCss = require('generate-github-markdown-css');

(async () => {
	console.log(await githubMarkdownCss());
	//=> '.markdown-body { …'
})();
