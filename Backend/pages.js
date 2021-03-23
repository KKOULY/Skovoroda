exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Сковорода'
    });
};

exports.libraryPage = function(req, res) {
    res.render('libraryPage', {
        pageTitle: 'Бібліотека'
    });
};
exports.bioPage = function(req, res) {
    res.render('bioPage', {
        pageTitle: 'Біографія'
    });
};
exports.shopPage = function(req, res) {
    res.render('shopPage', {
        pageTitle: 'Магазин'
    });
};