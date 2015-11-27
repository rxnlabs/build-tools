var main_js_file = 'js/src/main.js',
    other_js_files = [],
    vendor_js_files = [],
    all_js_files = vendor_js_files.concat(other_js_files, main_js_file),
    js_tasks = ['newer:uglify:dev'];

var main_css_file = 'css/src/main.css',
    other_css_files = [],
    vendor_css_files = [],
    all_css_files = vendor_css_files.concat(other_css_files, main_css_file),
    css_tasks = ['newer:sass:dev', 'newer:concat_css'];

var livereload_port = 12345;

module.exports = function(grunt) {
    require('load-grunt-config')(grunt);
};