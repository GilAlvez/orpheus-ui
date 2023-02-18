import { defineConfig } from "rollup";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from '@rollup/plugin-terser';
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";


import pkg from "./package.json" assert { type: "json" };

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser(),
    ],
    external: Object.keys(pkg.peerDependencies),
  },
  {
    input: "dist/esm/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts()],
    external: Object.keys(pkg.peerDependencies),
  },
]);
