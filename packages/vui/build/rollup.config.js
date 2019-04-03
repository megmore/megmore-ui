import { merge }  from 'lodash'
import commonjs from 'rollup-plugin-commonjs'
// import vue from 'rollup-plugin-vue'
// import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import packages from '../package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
// const externals = ['@mobov/es-helper', '@mobov/scss-helper', 'vue']
const external = Object.keys(packages.dependencies)
const name = 'MobovUI'

const baseConfig = {
  input: 'src/index.ts',
  output: {
    name,
  },
  plugins: [
    postcss({ extensions: ['.scss'], extract: `lib/style.css` }),
    typescript({
      importHelpers: true,
      // objectHashIgnoreUnknownHack: true,
      // rollupCommonJSResolveHack: true,
      // tsconfig: 'tsconfig.json',
      clean: true,
      rootDir: './src',
      declarationDir:  './types/',
      useTsconfigDeclarationDir: true,
      extensions
    }),
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        '@babel/preset-env',
        // ['@vue/babel-preset-jsx', {
        //     'injectH': false
        //   }
        // ],
        '@vue/babel-preset-jsx',
        '@babel/preset-typescript',
        // 'stage-2',
        // 'es2015-rollup',
      ],
      // 'plugins': [
      //   [
      //     '@babel/plugin-transform-runtime',
      //     {
      //       'absoluteRuntime': false,
      //       'corejs': false,
      //       'helpers': true,
      //       'regenerator': true,
      //       'useESModules': false
      //     }
      //   ]
      // ],
      // exclude: 'node_modules/@babel/runtime/**',
      extensions,
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions
    }),
    commonjs({
      exclude: /node_modules/,
      extensions
    }),
  ]
}

export default [
  merge(baseConfig, {
    output: [{
      file: `lib/index.es.js`,
      format: 'es',
      exports: 'named'
    },{
      file: `lib/index.cjs.js`,
      format: 'cjs',
      exports: 'named'
    }],
    external
  })
]
