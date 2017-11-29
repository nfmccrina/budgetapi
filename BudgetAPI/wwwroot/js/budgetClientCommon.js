function CategoryRepository() {
    var categories = null;

    this.get = function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost:63733/api/Categories?userid=' + sessionStorage.getItem('currentUserId'),
                method: 'GET',
                success: resolve,
                error: reject
            });
        });
    }

    this.insert = function (newCategory) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost:63733/api/Categories',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    Name: newCategory.name,
                    UserID: sessionStorage.getItem('currentUserId')
                }),
                success: resolve,
                error: reject
            });
        });
    };

    this.delete = function (category) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost:63733/api/Categories/' + category.id,
                method: 'DELETE',
                success: resolve,
                error: reject
            });
        });
    };

    this.update = function (updatedCategory) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost:63733/api/Categories/' + updatedCategory.id,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({
                    CategoryID: updatedCategory.id,
                    Name: updatedCategory.name,
                    UserID: sessionStorage.getItem('currentUserId')
                }),
                success: resolve,
                error: reject
            });
        });
    };
}