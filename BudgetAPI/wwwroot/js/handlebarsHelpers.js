function registerHandlebarsHelpers() {
    Handlebars.registerHelper('formattedMoneyAmount', function (amount) {
        return '$' + Math.floor(amount / 100) + '.' + (amount % 100);
    });

    Handlebars.registerHelper('formattedDate', function (rawDate) {
        return moment(rawDate).format('DD MMM YYYY');
    });
}