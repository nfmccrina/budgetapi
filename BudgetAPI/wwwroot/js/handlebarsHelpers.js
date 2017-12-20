function registerHandlebarsHelpers() {
    Handlebars.registerHelper('formattedMoneyAmount', function (amount) {
        var centAmount = amount % 100;

        if (centAmount < 10) {
            centAmount = '0' + centAmount;
        }

        return '$' + Math.floor(amount / 100) + '.' + centAmount;
    });

    Handlebars.registerHelper('dollarAmount', function (amountInCents) {
        return Math.floor(amountInCents / 100);
    });

    Handlebars.registerHelper('centAmount', function (amountInCents) {
        var result = amountInCents % 100;

        if (result < 10) {
            result = '0' + result;
        }

        return result;
    });

    Handlebars.registerHelper('formattedDate', function (rawDate) {
        return moment(rawDate).format('YYYY-MM-DD');
    });

    Handlebars.registerHelper('getCategoryName', function (categoriesArray, id) {
        return categoriesArray.filter((c) => c.CategoryID === id).map((c) => c.Name).pop() || '';
    });
}