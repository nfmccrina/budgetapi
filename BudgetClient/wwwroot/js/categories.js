$(document).ready(function () {
    $('#categoryCards').html(Handlebars.templates['categories']({
        categories: [
            {
                id: 1,
                name: 'Food'
            },
            {
                id: 2,
                name: 'Entertainment'
            },
            {
                id: 3,
                name: 'Utilities'
            }
        ]
    }));

    $('.category-name-edit').hide();

    $('.btn-category-edit').click(function (e) {
        $(e.target).parent().children('.category-name').hide();
        $(e.target).parent().children('.category-name-edit').show();
        $(e.target).parent().children('.btn-category-edit').prop('disabled', true);
    });

    $('.btn-category-edit-submit').click(function (e) {
        $(e.target).parent().parent().children('.category-name').show();
        $(e.target).parent().parent().children('.category-name-edit').hide();
        $(e.target).parent().parent().children('.btn-category-edit').prop('disabled', false);
        alert($(e.target).parent().find('.category-input-id').val());
        e.preventDefault();
    })
});