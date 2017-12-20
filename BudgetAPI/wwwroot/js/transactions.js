var editMode = false;
var transactionRepository;

function updateView(model) {
    $('tbody').replaceWith(Handlebars.templates['transactions'](model));

    $('.editCell').hide();

    setupEventHandlers();
}

function transactionEditButton_onClick(e) {
    if (editMode) {
        saveEditedTransaction($(this).parents('tr'));
    }

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

    if (!moment($('.dateAddInput').val()).isValid()) {
        alert('invalid date');
        return;
    }

    var moneyValue = (parseInt($('.dollarAddInput').val()) * 100) + parseInt($('.centAddInput').val());

    var newTransaction = {
        AmountInCents: moneyValue.toString(),
        Date: moment($('.dateAddInput').val()).format('YYYY-MM-DD'),
        Description: $('.descriptionAddInput').val(),
        CategoryID: $(this).parents('tr').find('.categorySelect').find('option:selected').val(),
        UserID: sessionStorage.getItem('currentUserId')
    };

    transactionRepository.insert(newTransaction)
        .then((response) => transactionRepository.get())
        .then((response) => updateView({
            transactions: response[0],
            categories: response[1]
        }));
}

function transactionDeleteButton_onClick(e) {
    var transactionID = $(this).parents('tr').attr('data-budget-transactionID');

    transactionRepository
        .delete(transactionID)
        .then((t) => transactionRepository.get())
        .then((response) => updateView({
            transactions: response[0],
            categories: response[1]
        }));
}

function saveEditedTransaction(row) {
    if (!/[0-9]+/.test(row.find('.dollarEditInput').val()) || !/[0-9]+/.test(row.find('.centEditInput').val())) {
        alert('invalid money value');
        return;
    }

    if (!moment(row.find('.dateEditInput').val()).isValid()) {
        alert('invalid date');
        return;
    }

    var moneyValue = (parseInt(row.find('.dollarEditInput').val()) * 100) + parseInt(row.find('.centEditInput').val());
    var transaction = {
        TransactionID: row.attr('data-budget-transactionID'),
        AmountInCents: moneyValue,
        Date: moment(row.find('.dateEditInput').val()).format('YYYY-MM-DD'),
        Description: row.find('.descriptionEditInput').val(),
        CategoryID: row.find('option:selected').val(),
        UserID: sessionStorage.getItem('currentUserId')
    };

    transactionRepository
        .update(transaction)
        .then((response) => transactionRepository.get())
        .then((response) => updateView({
            transactions: response[0],
            categories: response[1]
        }));
}

function setupEventHandlers() {
    $('.transactionEditButton').off('click');
    $('.transactionAddButton').off('click');
    $('.transactionDeleteButton').off('click');

    $('.transactionEditButton').click(transactionEditButton_onClick);
    $('.transactionAddButton').click(transactionAddButton_onClick);
    $('.transactionDeleteButton').click(transactionDeleteButton_onClick);
}

$(document).ready(function () {
    sessionStorage.setItem('currentUserId', '1');
    registerHandlebarsHelpers();
    transactionRepository = new TransactionRepository();

    transactionRepository.get().then((t) => updateView({
        transactions: t[0],
        categories: t[1]
    }));

    insertNavBar();
});