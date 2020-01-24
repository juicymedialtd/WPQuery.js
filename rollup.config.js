import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/WPQuery.js',
    output: {
        file: 'dist/WPQuery.js',
        name: 'WPQuery',
        format: 'iife',
        sourceMap: 'inline',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        resolve({
            browser: true,
        }),
        commonjs(),
    ],
};
