module.exports = {
	dist: {
	    options: {
	        optimizationLevel: 2,
	        progressive: true,
	        interlaced: true
	    },
	    files: [{
	        expand: true,
	        cwd: 'images/',
	        src: ['**/*.{png,jpg,gif}'],
	        dest: 'images/'
	    }]
	}
};