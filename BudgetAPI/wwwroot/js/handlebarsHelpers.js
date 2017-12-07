function registerHandlebarsHelpers() {
    Handlebars.registerHelper('formattedMoneyAmount', function (amount) {
        return '$' + Math.floor(amount / 100) + '.' + (amount % 100);
    });

    Handlebars.registerHelper('dollarAmount', function (amountInCents) {
        return Math.floor(amountInCents / 100);
    });

    Handlebars.registerHelper('centAmount', function (amountInCents) {
        return amountInCents % 100;
    });

    Handlebars.registerHelper('formattedDate', function (rawDate) {
        return moment(rawDate).format('YYYY-MM-DD');
    });
}