const Templates = require('../Shop/Templates');
const API = require('../Shop/API');

// element to which cards are added
const $composition_list = $("#composition-list");
var CompositionsList = [];


function initCompositionsList(error, data){
    if (error === null){
        CompositionsList = data;
        showCompositions(CompositionsList);
    }
}

// for post func
function logText(error, data) {
    if (error === null) {
        console.log(data);
    }
}
function showCompositions() {
    $composition_list.html('');

    function initOneItem(item) {
        var html_code = Templates.Composition_OneItem({composition: item});
        var $node = $(html_code);

        $($node).click(function(){/*
            API.readComposition({
                сompositionId: 1,
                compositionTitle: 'CompTitle',
                compositionText: 'CompText'
            }, logText);*/
        });

        $composition_list.append($node);
    }
    CompositionsList.forEach(initOneItem);
}


function initCompositions() {
    API.getCompositionsList(initCompositionsList)
}

// exports
exports.initCompositions = initCompositions;


