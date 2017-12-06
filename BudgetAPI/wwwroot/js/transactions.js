var editMode = false;

function updateView(model) {
    $('tbody').replaceWith(Handlebars.templates['transactions'](model));

    $('.editCell').hide();

    setupEventHandlers();
}

function transactionEditButton_onClick(e) {
    editMode = !editMode;
    $(this).text(editMode ? 'Save' : 'Edit');
    $(this).parents('tr').find(editMode ? '.displayCell' : '.editCell').hide();
    $(this).parents('tr').find(editMode ? '.editCell' : '.displayCell').show();
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