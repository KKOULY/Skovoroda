const Templates = require('../Shop/Templates');
const CompositionList = require('./CompositionList');

// element to which cards are added
const $composition_list = $("#composition-list");

function initCompositions() {
    $composition_list.html('');
    CompositionList.forEach(initOneItem);

    function initOneItem(item) {
        var html_code = Templates.Composition_OneItem({composition: item});
        var $node = $(html_code);

        $($node).click(function(){
            // TODO click function for getting text
            console.log('clicked');
        });

        $composition_list.append($node);
    }
}

// exports
exports.initCompositions = initCompositions;


