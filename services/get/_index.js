// This configuration file is a dirty hack to link to some example endpoints at the root path

module.exports = {
    path: '/',
	status: function(req, res) {

		var html = '<h1>dyson</h1><p>Example endpoints:</p>';

		var examples = [
			'/articles',
			'/articles/1',
			'/user',
			'/users',
			'/employee/5',
			'/feature/bar',
			'/feature/999',
			'/features/50',
			'/features/50/?foo=bar&x=y',
			'/image/400x200',
			'/image/300x500/000/fff',
			'/image/600x150/000/fff.gif&text=dummyimage.com+rocks!',
			'/images'
		];

		html += '<ul>' + examples.map(function(example) {
			return '<li><a href="' + example + '">' + example +'</a></li>';
		}).join('') + '</ul>';

		res.send(200, html);
	}
};
