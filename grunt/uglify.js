module.exports = {
	options: {
	    banner: '/*!\n * <%= pkg.name %> \n * Version: v.<%= pkg.version %> \n * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
	    footer: '\n/*!\n * <%= pkg.name %> \n * Version: v.<%= pkg.version %> \n * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
	    sourceMap: true
	},
	dist: {
	    files: {
	        'js/dist/<%= pkg.name %>.js': all_js_files
	    },
	    options: {
	        mangle: false,
	        compress: true
	    }
	},
	dev: {
	    files: {
	        'js/dist/<%= pkg.name %>.js': all_js_files
	    },
	    options: {
	        mangle: false,
	        preserveComments: 'all',
	        beautify: true
	    }
	}
};