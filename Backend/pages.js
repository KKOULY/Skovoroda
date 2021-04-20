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
    res.render('ShopPage', {
        pageTitle: 'Магазин'
    });
};

exports.readPage = function (req, res) {
    let compositionsList = require('./data/CompositionList');
    let pathToTextFile = '/data/Compositions/';

    let id = req.params.id;
    let title = '';
    let text = '';

    for (let i = 0; i < compositionsList.length; i++) {
        if (compositionsList[i].id == id) {
            pathToTextFile.concat(compositionsList[i].text);
            title = compositionsList[i].title;
        }
    }

    const fs = require('fs');
    try {
        text = fs.readFileSync(__dirname + pathToTextFile, 'utf8');
    } catch (err) {
        text = err;
    }

    res.render('readPage', {
        pageTitle: 'readPage',
        compositionTitle: title,
        compositionText: text
    });
};