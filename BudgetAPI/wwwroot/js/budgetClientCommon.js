var endpoint = 'http://localhost:63733/api/';

function insertNavBar() {
    $('body').prepend(Handlebars.templates['navbar']({}));
}

function CategoryRepository() {
    var categories = null;

    this.get = function (categoryId = -1) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: (categoryId === -1 ? endpoint + 'Categories?userid=' : endpoint + 'Categories/' + categoryId + '?userid=') + sessionStorage.getItem('currentUserId'),
                method: 'GET',
                success: resolve,
                error: reject
            });
        });
    }

    this.insert = function (newCategory) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Categories',
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
                url: endpoint + 'Categories/' + category.id,
                method: 'DELETE',
                success: resolve,
                error: reject
            });
        });
    };

    this.update = function (updatedCategory) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Categories/' + updatedCategory.id,
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

        var transactionPromise = new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Transactions',
                method: 'GET',
                contentType: 'application/json',
                success: resolve,
                error: reject
            });
        });

        var categoryPromise = categoryRepository.get();

        return Promise.all([transactionPromise, categoryPromise]).then((values) => Promise.resolve([values[0].map((t) => {
            return {
                TransactionID: t.transactionID,
                AmountInCents: t.amountInCents,
                Date: t.date,
                Description: t.description,
                CategoryID: t.categoryID,
                UserID: t.userID,
                Category: values[1].length > 0 && values[1].some((c) => c.categoryID === t.categoryID) ? values[1].find((c) => c.categoryID === t.categoryID) : null
            }
        }),
            values[1].map((c) => {
                return {
                    CategoryID: c.categoryID,
                    Name: c.name,
                    UserID: c.userID
                }
            })]));
    };

    this.insert = function (newTransaction) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Transactions',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(newTransaction),
                success: resolve,
                error: reject
            });
        });
    };

    this.delete = function (oldTransactionID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Transactions/' + oldTransactionID,
                method: 'DELETE',
                contentType: 'application/json',
                success: resolve,
                error: reject
            });
        });
    };

    this.update = function (updatedTransaction) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Transactions/' + updatedTransaction.TransactionID,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(updatedTransaction),
                success: resolve,
                error: reject
            });
        });
    }
}

function BudgetAllocationRepository() {
    this.get = function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'BudgetAllocations?userid=' + sessionStorage.getItem('currentUserId'),
                method: 'GET',
                contentType: 'application/json',
                success: function (response) {
                    resolve(response.map((ba) => {
                        return {
                            BudgetAllocationID: ba.budgetAllocationID,
                            AllocatedAmountInCents: ba.allocatedAmountInCents,
                            CategoryID: ba.categoryID,
                            BudgetID: ba.budgetID
                        };
                    }));
                },
                error: reject
            });
        });
    }
}

function BudgetRepository() {
    this.get = function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Budgets?userid=' + sessionStorage.getItem('currentUserId'),
                method: 'GET',
                contentType: 'application/json',
                success: function (response) {
                    resolve(response.map((b) => {
                        return {
                            BudgetID: b.budgetID,
                            Name: b.name,
                            BeginDate: b.beginDate,
                            EndDate: b.endDate,
                            UserID: b.userID
                        }
                    }));
                },
                error: reject
            });
        });
    };

    this.insert = function (newBudget) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Budgets',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(newBudget),
                success: resolve,
                error: reject
            });
        });
    };

    this.delete = function (budgetID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Budgets/' + budgetID,
                method: 'DELETE',
                contentType: 'application/json',
                success: resolve,
                error: reject
            });
        });
    };

    this.update = function (updatedBudget) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: endpoint + 'Budgets/' + updatedBudget.BudgetID,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(updatedBudget),
                success: resolve,
                error: reject
            });
        });
    };
}