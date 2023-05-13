const micromatch = require("micromatch");

// More info using the JavaScript format for lint-staged here:
// https://github.com/okonet/lint-staged#example-export-a-function-to-build-your-own-matchers

module.exports = async (stagedFiles) => {
	// Run linters for all matching file types
	const commands = [];

	commands.push(`prettier --write ${stagedFiles.join(" ")}`);

	return commands;
};
