(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['budgets'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div class=\"card\" data-budget-budget-id=\""
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\">\r\n    <div class=\"card-body card-display-mode\">\r\n        <h4 class=\"card-title budget-name-display\" data-budget-name=\""
    + alias2(alias1((depth0 != null ? depth0.Name : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.Name : depth0), depth0))
    + "</h4>\r\n        <p class=\"card-text budget-begin-date-display\" data-budget-begin-date=\""
    + alias2((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias4).call(alias3,(depth0 != null ? depth0.BeginDate : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "\">Begin Date: "
    + alias2((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias4).call(alias3,(depth0 != null ? depth0.BeginDate : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "</p>\r\n        <p class=\"card-text budget-end-date-display\" data-budget-end-date=\""
    + alias2((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias4).call(alias3,(depth0 != null ? depth0.EndDate : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "\">End Date: "
    + alias2((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias4).call(alias3,(depth0 != null ? depth0.EndDate : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "</p>\r\n        <p class=\"card-text\">\r\n            <button class=\"btn btn-primary budget-edit-button\">Edit</button>\r\n            <button class=\"btn btn-primary budget-delete-button\">Delete</button>\r\n        </p>\r\n    </div>\r\n    <div class=\"card-body card-edit-mode\">\r\n        <h4 class=\"card-title\">Edit Budget</h4>\r\n        <div class=\"card-text\">\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"budget-name-edit-input-"
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\">Name</label>\r\n                    <input type=\"text\" class=\"form-control budget-name-edit-input\" id=\"budget-name-edit-input-"
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"budget-begin-date-edit-input-"
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\">Begin Date</label>\r\n                    <input type=\"date\" class=\"form-control budget-begin-date-edit-input\" id=\"budget-begin-date-edit-input-"
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"budget-end-date-edit-input-"
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\">End Date</label>\r\n                    <input type=\"date\" class=\"form-control budget-end-date-edit-input\" id=\"budget-end-date-edit-input-"
    + alias2(alias1((depth0 != null ? depth0.BudgetID : depth0), depth0))
    + "\" />\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            <table class=\"table\">\r\n                <tbody>\r\n                    <tr>\r\n                        <td>\r\n                            <label>\r\n                                Category\r\n                                <select>\r\n                                    <option value=\"0\">None</option>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depths[1] != null ? depths[1].categories : depths[1]),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                </select>\r\n                            </label>\r\n                        </td>\r\n                        <td>\r\n                            <div class=\"amountCell editCell\">\r\n                                <label>Allocation $<input type=\"number\" class=\"dollarEditInput numericOnly\" placeholder=\"0\" step=\"1\" min=\"0\" max=\"9999\" value=\""
    + alias2((helpers.dollarAmount || (depth0 && depth0.dollarAmount) || alias4).call(alias3,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"dollarAmount","hash":{},"data":data}))
    + "\" data-currentValue=\"0\" /></label><label>.<input type=\"number\" class=\"centEditInput\" placeholder=\"00\" step=\"1\" min=\"0\" max=\"99\" value=\""
    + alias2((helpers.centAmount || (depth0 && depth0.centAmount) || alias4).call(alias3,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"centAmount","hash":{},"data":data}))
    + "\" /></label>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <button>Add</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            <button class=\"btn btn-primary budget-edit-cancel-button\">Cancel</button>\r\n            <button class=\"btn btn-primary budget-edit-save-button\">Save</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                    <option value=\""
    + alias2(alias1((depth0 != null ? depth0.CategoryID : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.Name : depth0), depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.budgets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"card\">\r\n    <div class=\"card-body card-add-budget\">\r\n        <h4 class=\"card-title\">Add New Budget</h4>\r\n        <div class=\"card-text\">\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <label for=\"addBudgetNameInput\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"addBudgetNameInput\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"addBudgetBeginDateInput\">Begin Date</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"addBudgetBeginDateInput\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"addBudgetEndDateInput\">End Date</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"addBudgetEndDateInput\" />\r\n                </div>\r\n                <button class=\"btn btn-primary budget-add-new-button\">Submit</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});
templates['categories'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"card\" style=\"width: 30rem;\">\r\n        <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Category</h4>\r\n            <p class=\"card-text category-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n\r\n            <form class=\"form-inline category-name-edit\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control category-input-name-edit\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"hidden\" class=\"form-control category-input-id\" value=\""
    + alias4(((helper = (helper = helpers.categoryID || (depth0 != null ? depth0.categoryID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryID","hash":{},"data":data}) : helper)))
    + "\" />\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary btn-category-edit-submit\">Done</button>\r\n            </form>\r\n        \r\n            <p class=\"btn btn-primary btn-category-edit\">Edit</p>\r\n            <p class=\"btn btn-primary btn-category-remove\">Remove</p>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿<div class=\"card-deck\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"card\" style=\"width: 30rem;\">\r\n        <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Add New</h4>\r\n\r\n            <form class=\"form-inline category-name-add\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"input-category-name-add\" placeholder=\"category name\" />\r\n                </div>\r\n            </form>\r\n\r\n            <p class=\"btn btn-primary btn-category-add-new\">Add</p>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['navbar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"/\">Home</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"/categories.html\">Categories</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"/transactions.html\">Transactions</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"/budgets.html\">Budgets</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>";
},"useData":true});
templates['transactions'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "    <tr data-budget-transactionID=\""
    + alias2(alias1((depth0 != null ? depth0.TransactionID : depth0), depth0))
    + "\">\r\n        <td>\r\n            <div class=\"dateCell displayCell\">"
    + alias2((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias4).call(alias3,(depth0 != null ? depth0.Date : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "</div>\r\n            <div class=\"dateCell editCell\">\r\n                <input type=\"date\" class=\"dateEditInput\" value=\""
    + alias2((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias4).call(alias3,(depth0 != null ? depth0.Date : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"descriptionCell displayCell\">"
    + alias2(alias1((depth0 != null ? depth0.Description : depth0), depth0))
    + "</div>\r\n            <div class=\"descriptionCell editCell\">\r\n                <input type=\"text\" class=\"descriptionEditInput\" value=\""
    + alias2(alias1((depth0 != null ? depth0.Description : depth0), depth0))
    + "\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.Category : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            <div class=\"categoryCell editCell\">\r\n                <select class=\"categoryEditSelect\">\r\n                    <option value=\"0\">None</option>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depths[1] != null ? depths[1].categories : depths[1]),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"amountCell displayCell\">"
    + alias2((helpers.formattedMoneyAmount || (depth0 && depth0.formattedMoneyAmount) || alias4).call(alias3,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"formattedMoneyAmount","hash":{},"data":data}))
    + "</div>\r\n            <div class=\"amountCell editCell\">\r\n                <label>$<input type=\"number\" class=\"dollarEditInput numericOnly\" placeholder=\"0\" step=\"1\" min=\"0\" max=\"9999\" value=\""
    + alias2((helpers.dollarAmount || (depth0 && depth0.dollarAmount) || alias4).call(alias3,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"dollarAmount","hash":{},"data":data}))
    + "\" data-currentValue=\"0\"/></label><label>.<input type=\"number\" class=\"centEditInput\" placeholder=\"00\" step=\"1\" min=\"0\" max=\"99\" value=\""
    + alias2((helpers.centAmount || (depth0 && depth0.centAmount) || alias4).call(alias3,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"centAmount","hash":{},"data":data}))
    + "\" /></label>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"buttonCell\">\r\n                <button class=\"transactionEditButton\">Edit</button>\r\n                <button class=\"transactionDeleteButton\">Delete</button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"categoryCell displayCell\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"categoryCell displayCell\">None</div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <option value=\""
    + alias2(alias1((depth0 != null ? depth0.CategoryID : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.Name : depth0), depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "﻿<tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.transactions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <tr>\r\n        <td>\r\n            <div class=\"dateCell addCell\">\r\n                <input type=\"date\" class=\"dateAddInput\" value=\"\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"descriptionCell addCell\">\r\n                <input type=\"text\" class=\"descriptionAddInput\" value=\"\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"categoryCell addCell\">\r\n                <select class=\"categoryAddSelect\">\r\n                    <option value=\"0\">None</option>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"amountCell addCell\">\r\n                <label>$<input type=\"number\" class=\"dollarAddInput\" placeholder=\"0\" step=\"1\" min=\"0\" max=\"9999\" value=\"0\" data-currentValue=\"0\" /></label><label>.<input type=\"number\" class=\"centAddInput\" placeholder=\"00\" step=\"1\" min=\"0\" max=\"99\" value=\"0\" /></label>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"buttonCell\">\r\n                <button class=\"transactionAddButton\">Add</button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</tbody>";
},"useData":true,"useDepths":true});
})();