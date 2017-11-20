var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('assets/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    .enableSassLoader()

    .addEntry('app', './App.js')

    .enableSourceMaps(!Encore.isProduction())

    .enableReactPreset()

    .configureBabel((config) => {
        config.presets.push('stage-0');
    })
// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()
;

var compiledConfig = Encore.getWebpackConfig();

// export the final configuration
module.exports = compiledConfig;