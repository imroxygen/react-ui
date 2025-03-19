const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const { babel } = require("@rollup/plugin-babel");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const dts = require("rollup-plugin-dts").default; // ✅ Fix applied
const postcss = require("rollup-plugin-postcss");
const fs = require("fs");

// ✅ Read package.json correctly
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: [
          ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
          "@babel/preset-react",
        ],
      }),
      postcss(),
    ],
    external: Object.keys(packageJson.peerDependencies || {}),
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()], // ✅ Fixed dts function call
  },
];
