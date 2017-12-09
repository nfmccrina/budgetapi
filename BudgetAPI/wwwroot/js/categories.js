var categoryRepository;

function updateView(model) {
    $('#categoryCards').html(Handlebars.templates['categories'](model));
    $('.card-body').each(function (index) {
        hideEditFields($(this));
    });
    setupEvents();
}

function hideEditFields(card) {
    card.children('.category-name').show();
    card.children('.category-name-edit').hide();
    card.children('.btn-category-edit').prop('disabled', false);
}

function showEditFields(card) {
    $('.card-body').each(function (index) {
        hideEditFields($(this));
    });

    card.children('.category-name').hide();
    card.children('.category-name-edit').show();
    card.children('.btn-category-edit').prop('disabled', true);
}

function editButton_onClick(e) {
    showEditFields($(e.target).parent());
}

function doneButton_onClick(e) {
    var editedId = parseInt($(e.target).parent().find('.category-input-id').val(), 10);
    var editedValue = $(e.target).parent().find('.category-input-name-edit').val();


    categoryRepository.update({ id: editedId, name: editedValue })
        .then((r) => categoryRepository.get())
        .then((r) => updateView({
            categories: r
        }));

    e.preventDefault();
}

function removeButton_onClick(e) {
    var editedId = parseInt($(e.target).parent().find('.category-input-id').val(), 10);

    categoryRepository.delete({ id: editedId })
        .then((r) => categoryRepository.get())
        .then((r) => updateView({
            categories: r
        }));
}

function addButton_onClick(e) {
    categoryRepository.insert({ name: $(e.target).parent().find('input').val() })
        .then((r) => categoryRepository.get())
        .then((r) => updateView({
            categories: r
        }));
}

function setupEvents() {
    $('.btn-category-edit').off('click');
    $('.btn-category-edit-submit').off('click');
    $('.btn-category-remove').off('click');
    $('.btn-category-add-new').off('click');

    $('.btn-category-edit').click(editButton_onClick);
    $('.btn-category-edit-submit').click(doneButton_onClick);
    $('.btn-category-remove').click(removeButton_onClick);
    $('.btn-category-add-new').click(addButton_onClick);
}

$(document).ready(function () {
    sessionStorage.setItem('currentUserId', '1');
    categoryRepository = new CategoryRepository();
    categoryRepository.get().then((response) => updateView({
        categories: response
    }));

    insertNavBar();
});