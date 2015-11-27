var livereload_port = 12345;

module.exports = {
	options: {
	    livereload: livereload_port,
	},
	sass: {
	    files: ['scss/**/*.{scss,sass}'],
	    tasks: css_tasks,
	    options: {
	        livereload: livereload_port,
	    },
	},
	uglify: {
	    files: ['js/src/**/*.js', '!js/src/vendor/**/*.js'],
	    tasks: js_tasks,
	    options: {
	        livereload: livereload_port,
	    }
	},
	images: {
	    files: ['images/*.{png,jpg,gif}'],
	    tasks: ['imagemin'],
	    options: {
	        livereload: livereload_port,
	    }
	}
};