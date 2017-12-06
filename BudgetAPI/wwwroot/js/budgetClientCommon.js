function CategoryRepository() {
    var categories = null;

    this.get = function (categoryId = -1) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: (categoryId === -1 ? 'http://localhost:63733/api/Categories?userid=' : 'http://localhost:63733/api/Categories/' + categoryId + '?userid=') + sessionStorage.getItem('currentUserId'),
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

function TransactionRepository() {
    var transactions = null;
    var categoryRepository = new CategoryRepository();

    this.get = function () {
        if (!transactions) {
            transactions = [];
        }

        var transactionPromise = Promise.resolve([
            {
                TransactionID: 1,
                AmountInCents: 768,
                Date: new Date('11/28/2017'),
                Description: 'Publix',
                CategoryID: 5
            },
            {
                TransactionID: 2,
                AmountInCents: 3604,
                Date: new Date('11/29/2017'),
                Description: 'QT',
                CategoryID: 7
            }
        ]);

        var categoryPromise = transactionPromise.then((t) => categoryRepository.get(t.CategoryID));

        return Promise.all([transactionPromise, categoryPromise]).then((values) => Promise.resolve(values[0].map((t) => {
            return {
                TransactionID: t.TransactionID,
                AmountInCents: t.AmountInCents,
                Date: t.Date,
                Description: t.Description,
                CategoryID: t.CategoryID,
                Category: values[1].length > 0 ? values[1][0] : null
            }
        })));
    };

    this.insert = function (newTransaction) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://localhost:63733/api/Transactions',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    AmountInCents: newTransaction.AmountInCents,
                    UserID: sessionStorage.getItem('currentUserId')
                }),
                success: resolve,
                error: reject
            });
        });
    }
}