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
    var compositionsList = require('./data/CompositionList');

    var id = req.params.id;
    var pathToTextFile = './data/Compositions/';

    var title = 'hellotitle';
    var text = 'hello';

    for (let i = 0; i < compositionsList.length; i++) {

        if (compositionsList[i].id == id) {
            pathToTextFile += compositionsList[i].text;
            title = compositionsList[i].title;
        }
    }

    console.log(pathToTextFile);
    /*
    const fs = require('fs');
    try {
        text = fs.readFileSync(pathToTextFile, 'utf8')
        console.log(text)
    } catch (err) {
        console.error(err)
    }
    /*
    var reader = new global.FileReader();
    reader.onload = function () {
        text = reader.result;
        console.log(text);
    }
    /*
    var textReader = require('./TextReader');
     = textReader(pathToTextFile);
    */
    res.render('readPage', {
        pageTitle: 'readPage',
        compositionTitle: title,
        compositionText: text
    });
};