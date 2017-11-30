var editMode = false;

function updateView(model) {
    $('tbody').replaceWith(Handlebars.templates['transactions'](model));

    $('.editCell').hide();

    setupEventHandlers();
}

function transactionEditButton_onClick(e) {
    editMode = !editMode;
    $(e.target).val(editMode ? 'Save' : 'Edit');
    $(e.target).parents('tr').find(editMode ? '.displayCell' : '.editCell').hide();
    $(e.target).parents('tr').find(editMode ? '.editCell' : '.displayCell').show();
}

function setupEventHandlers() {
    $('.transactionEditButton').off('click');

    $('.transactionEditButton').click(transactionEditButton_onClick);
}

$(document).ready(function () {
    sessionStorage.setItem('currentUserId', '1');
    registerHandlebarsHelpers();
    var transactionRepository = new TransactionRepository();

    transactionRepository.get().then((t) => updateView({
        transactions: t
    }));
});