function CategoryRepository() {
    var categories = JSON.parse(sessionStorage.getItem('categories'));

    if (!categories) {
        categories = [];
        sessionStorage.setItem('categories', JSON.stringify(categories));
    }

    this.get = function(callback) {
        $.get('http://localhost:63733/api/Categories?userid=' + sessionStorage.getItem('currentUserId'),
            null,
            callback,
            'json'
        );
    }

    this.insert = function (newCategory) {
        if (newCategory) {
            categories.push(newCategory);
        }
    };

    this.delete = function (category) {
        categories = categories.filter((c) => c.id !== category.id);
    };

    this.update = function (updatedCategory) {
        var index = categories.findIndex((c) => c.id === updatedCategory.id);

        if (index !== -1) {
            categories[index] = updatedCategory;
        }
    };
}