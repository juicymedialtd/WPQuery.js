import babel from 'rollup-plugin-babel';

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
    ],
};
