render = function(req, res, next) {
    res.render('index', { title: 'Express 4' });
};

module.exports = render;