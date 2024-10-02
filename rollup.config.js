import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/UPdigitalScript.js",
  output: {
    file: "site/js/UPdigitalScript-bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    terser(),
  ],
};
