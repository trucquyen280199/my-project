let mix = require('laravel-mix');
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');
const yargs = require('yargs-parser')(process.argv.slice(2));

var sub_folder = process.env.SUBF ? process.env.SUBF + '/' : '';
if (yargs.copy) {
    console.log('sub: ' + sub_folder)
    copy();
} else {

    const options = {
        enabled: true,

        // Your custom globs are merged with the default globs. If you need to
        // fully replace the globs, use the underlying `paths` option instead.
        folders: ['public'],
        extensions: ['html', 'js', 'php', 'vue'],

        // Other options are passed through to Purgecss
        whitelistPatterns: [/language/, /hljs/],

        whitelistPatternsChildren: [/^markdown$/],
    }
    const postCss = {
        postCss: [
            autoprefixer(),
            mqpacker({
                sort: true
            }),
            tailwindcss('./tailwind.config.js'),
        ],
        processCssUrls: false,
    }
    mix.sass('src/' + sub_folder + 'scss/app.scss', 'public/' + sub_folder + 'assets/css')
        .options(postCss)
        .purgeCss((process.env.NODE_ENV === 'development') ? {} : options);
    mix.sass('src/' + sub_folder + 'scss/style.scss', 'public/' + sub_folder + 'assets/css')
        .options(postCss)
        .purgeCss((process.env.NODE_ENV === 'development') ? {} : options);

    mix.browserSync({
        proxy: false,
        port: '3000',
        server: { baseDir: 'public/' + sub_folder },
        files: [
            './public/' + sub_folder + '*.html',
            './public/' + sub_folder + 'assets/css/*.css',
            './public/' + sub_folder + 'assets/js/*.js',
        ],
        reload: true,
        open: false,
    });
}

function copy() {
    mix.copy([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/font-awesome/css/font-awesome.css.map',
    ], 'public/' + sub_folder + 'assets/css')
        .copy('node_modules/font-awesome/fonts/*', 'public/' + sub_folder + 'assets/fonts')
        .copy([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery/dist/jquery.min.map',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js.map',
        ], 'public/' + sub_folder + 'assets/js')
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.dump(); <-- Dump the generated webpack config object t the console.
// mix.extend(SUBF, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });