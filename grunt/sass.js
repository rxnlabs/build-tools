module.exports = {
	options: {
	    includePaths: require('node-bourbon').includePaths,
	    sourceMap: true,
	    sourceComments: true,
	    sourceMapContents: true,
	    outputStyle: 'compressed'
	},
	dist: {
	    files: [{
	        expand: true,
	        cwd: 'scss',
	        src: ['*.scss'],
	        dest: 'css/dist',
	        ext: '.css'
	    }]
	},
	dev: {
	    options: {
	        outputStyle: 'expanded'
	    },
	    files: [{
	        expand: true,
	        cwd: 'scss',
	        src: ['*.scss'],
	        dest: 'css/src',
	        ext: '.css'
	    }]
	}
};