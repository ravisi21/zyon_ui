const path = require("path");

module.exports = function override(config, env) {
  // Get the build type from environment variable
  const buildType = process.env.REACT_APP_BUILD_TYPE || "trader";

  // Only modify publicPath for production builds
  if (env === "production") {
    // Set homepage based on build type
    let homepage = "/trader"; // default

    switch (buildType) {
      case "home":
        homepage = "/";
        break;
      case "trader":
        homepage = "/trader";
        break;
      default:
        homepage = "/";
    }

    // For server deployment, use relative paths instead of absolute
    // This allows the server to serve files correctly regardless of the URL structure
    config.output.publicPath = "./";

    // Set entry point for production
    let entryPoint = "./src/index.js"; // default

    switch (buildType) {
      case "home":
        entryPoint = "./src/home/index.js";
        break;
      case "trader":
        entryPoint = "./src/trader/index.js";
        break;
      default:
        entryPoint = "./src/trader/index.js";
    }

    // Update the entry point for production
    config.entry = path.resolve(__dirname, entryPoint);
  }

  return config;
};
