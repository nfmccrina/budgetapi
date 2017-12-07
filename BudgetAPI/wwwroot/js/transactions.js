var editMode = false;
var transactionRepository;

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

function transactionAddButton_onClick(e) {
    if (!/[0-9]+/.test($('.dollarAddInput').val()) || !/[0-9]+/.test($('.centAddInput').val())) {
        alert('invalid money value');
        return;
    }
    moneyValue = (parseInt($('.dollarAddInput').val()) * 100) + parseInt($('.centAddInput').val());

    var newTransaction = {
        AmountInCents: moneyValue.toString(),
        Date: moment($('.dateAddInput').val()).format('YYYY-MM-DD'),
        Description: $('.descriptionAddInput').val(),
        CategoryID: $('.categoryAddSelect').find('option:selected').val(),
        UserID: sessionStorage.getItem('currentUserId')
    };

    transactionRepository.insert(newTransaction)
        .then((response) => transactionRepository.get())
        .then((response) => updateView({
            transactions: response[0],
            categories: response[1]
        }));
}

function setupEventHandlers() {
    $('.transactionEditButton').off('click');
    $('.transactionAddButton').off('click');

    $('.transactionEditButton').click(transactionEditButton_onClick);
    $('.transactionAddButton').click(transactionAddButton_onClick);
}

$(document).ready(function () {
    sessionStorage.setItem('currentUserId', '1');
    registerHandlebarsHelpers();
    transactionRepository = new TransactionRepository();

    transactionRepository.get().then((t) => updateView({
        transactions: t[0],
        categories: t[1]
    }));
});