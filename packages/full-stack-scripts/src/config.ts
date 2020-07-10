import fs from "fs";
import path from "path";

// Adapted from
// https://github.com/facebook/create-react-app/blob/c87ab79559e98a5dae2cd0b02477c38ff6113e6a/packages/react-scripts/config/paths.js
//
// Alternatively could create a start script like CRA that runs this ahead of any code.
// https://github.com/facebook/create-react-app/blob/c87ab79559e98a5dae2cd0b02477c38ff6113e6a/packages/react-scripts/scripts/start.js
// Instead using node -r full-stack-scripts/config (similar to dotenv)
export default function config() {
  let { NODE_ENV } = process.env;
  if (!NODE_ENV) {
    NODE_ENV = "development";
  }
  // Make sure any symlinks in the project folder are resolved:
  // https://github.com/facebook/create-react-app/issues/637
  const appDirectory = fs.realpathSync(process.cwd());
  const resolveApp = (relativePath: string) =>
    path.resolve(appDirectory, relativePath);

  const paths = {
    dotenv: resolveApp(".env"),
  };

  // https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
  const dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    // Don't include `.env.local` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    NODE_ENV !== "test" && `${paths.dotenv}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    paths.dotenv,
  ].filter(Boolean);

  // Load environment variables from .env* files. Suppress warnings using silent
  // if this file is missing. dotenv will never modify any environment variables
  // that have already been set.  Variable expansion is supported in .env files.
  // https://github.com/motdotla/dotenv
  // https://github.com/motdotla/dotenv-expand
  dotenvFiles.forEach((dotenvFile) => {
    if (dotenvFile && fs.existsSync(dotenvFile)) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
      require("dotenv-expand")(
        // eslint-disable-next-line global-require
        require("dotenv").config({
          path: dotenvFile,
        })
      );
    }
  });
}
