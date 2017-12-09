var budgetRepository;
var categoryRepository;

function updateView(model) {
    $('.card-deck').html(Handlebars.templates['budgets'](model));
    $('.card-edit-mode').hide();
    setupEventHandlers();
}

function budgetDeleteButton_onClick(e) {
    budgetRepository.delete($(this).parents('.card').attr('data-budget-budget-id'))
        .then((response) => fetchData())
        .then((response) => updateView({
            budgets: response[0],
            categories: response[1]
        }));
}

function budgetEditButton_onClick(e) {
    $('.card-display-mode').hide();
    $('.card-edit-mode').show();

    $(this).parents('.card').find('.budget-name-edit-input').val($(this).parents('.card').find('.budget-name-display').attr('data-budget-name'));
    $(this).parents('.card').find('.budget-begin-date-edit-input').val($(this).parents('.card').find('.budget-begin-date-display').attr('data-budget-begin-date'));
    $(this).parents('.card').find('.budget-end-date-edit-input').val($(this).parents('.card').find('.budget-end-date-display').attr('data-budget-end-date'));
}

function budgetSaveButton_onClick(e) {
    if ($(this).parents('.card').find('.budget-name-edit-input').val() === '') {
        alert('name cannot be empty');
        return;
    }

    if (!moment($(this).parents('.card').find('.budget-begin-date-edit-input').val()).isValid()) {
        alert('invalid begin date');
        return;
    }

    if (!moment($(this).parents('.card').find('.budget-end-date-edit-input').val())) {
        alert('invalid end date');
        return;
    }

    $('.card-edit-mode').hide();
    $('.card-display-mode').show();

    var budget = {
        BudgetID: $(this).parents('.card').attr('data-budget-budget-id'),
        Name: $(this).parents('.card').find('.budget-name-edit-input').val(),
        BeginDate: $(this).parents('.card').find('.budget-begin-date-edit-input').val(),
        EndDate: $(this).parents('.card').find('.budget-end-date-edit-input').val(),
        UserID: sessionStorage.getItem('currentUserId')
    };

    budgetRepository.update(budget)
        .then((response) => fetchData())
        .then((response) => updateView({
            budgets: response[0],
            categories: response[1]
        }));
}

function budgetCancelButton_onClick(e) {
    //alert($(this).parents('.card').find('.budget-begin-date-edit-input').val());
    $('.card-edit-mode').hide();
    $('.card-display-mode').show();

    $(this).parents('.card').find('.budget-name-edit-input').val('');
    $(this).parents('.card').find('.budget-begin-date-edit-input').val('');
    $(this).parents('.card').find('.budget-end-date-edit-input').val('');
}

function addNewBudgetSubmitButton_onClick(e) {
    e.preventDefault();

    if ($('#addBudgetNameInput').val() === '') {
        alert('name cannot be empty');
        return;
    }

    if (!moment($('#addBudgetBeginDateInput').val()).isValid()) {
        alert('invalid begin date');
        return;
    }

    if (!moment($('#addBudgetEndDateInput').val()).isValid()) {
        alert('invalid end date');
        return;
    }

    var budget = {
        Name: $('#addBudgetNameInput').val(),
        BeginDate: $('#addBudgetBeginDateInput').val(),
        EndDate: $('#addBudgetEndDateInput').val(),
        UserID: sessionStorage.getItem('currentUserId')
    };

    budgetRepository
        .insert(budget)
        .then((response) => fetchData())
        .then((response) => updateView({
            budgets: response[0],
            categories: response[1]
        }));
}

function setupEventHandlers() {
    $('.budget-delete-button').off('click');
    $('.budget-add-new-button').off('click');
    $('.budget-edit-button').off('click');
    $('.budget-edit-cancel-button').off('click');
    $('.budget-edit-save-button').off('click');

    $('.budget-delete-button').click(budgetDeleteButton_onClick);
    $('.budget-add-new-button').click(addNewBudgetSubmitButton_onClick);
    $('.budget-edit-button').click(budgetEditButton_onClick);
    $('.budget-edit-cancel-button').click(budgetCancelButton_onClick);
    $('.budget-edit-save-button').click(budgetSaveButton_onClick);
}

function fetchData() {
    var budgetPromise = budgetRepository.get();
    var categoryPromise = categoryRepository.get();

    var finalPromise = Promise.all([budgetPromise, categoryPromise]);

    return finalPromise.then((values) => {
        return Promise.resolve([
            values[0],
            values[1].map((c) => {
                return {
                    CategoryID: c.categoryID,
                    Name: c.name,
                    UserID: c.userID
                }
            })
        ]);
    });
}

$(document).ready(function () {
    sessionStorage.setItem('currentUserId', '1');
    registerHandlebarsHelpers();

    budgetRepository = new BudgetRepository();
    categoryRepository = new CategoryRepository();

    fetchData()
        .then((response) => updateView({
            budgets: response[0],
            categories: response[1]
        }));

    insertNavBar();
});