(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
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
templates['transactions'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "    <tr>\r\n        <td>\r\n            <div class=\"dateCell displayCell\">"
    + alias3((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias2).call(alias1,(depth0 != null ? depth0.Date : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "</div>\r\n            <div class=\"dateCell editCell\">\r\n                <input type=\"date\" class=\"dateEditInput\" value=\""
    + alias3((helpers.formattedDate || (depth0 && depth0.formattedDate) || alias2).call(alias1,(depth0 != null ? depth0.Date : depth0),{"name":"formattedDate","hash":{},"data":data}))
    + "\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"descriptionCell displayCell\">"
    + alias3(alias4((depth0 != null ? depth0.Description : depth0), depth0))
    + "</div>\r\n            <div class=\"descriptionCell editCell\">\r\n                <input type=\"text\" class=\"descriptionEditInput\" value=\""
    + alias3(alias4((depth0 != null ? depth0.Description : depth0), depth0))
    + "\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"categoryCell displayCell\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\r\n            <div class=\"categoryCell editCell\">\r\n                <select class=\"categoryEditSelect\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depths[1] != null ? depths[1].categories : depths[1]),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"amountCell displayCell\">"
    + alias3((helpers.formattedMoneyAmount || (depth0 && depth0.formattedMoneyAmount) || alias2).call(alias1,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"formattedMoneyAmount","hash":{},"data":data}))
    + "</div>\r\n            <div class=\"amountCell editCell\">\r\n                <label>$<input type=\"number\" class=\"dollarEditInput numericOnly\" placeholder=\"0\" step=\"1\" min=\"0\" max=\"9999\" value=\""
    + alias3((helpers.dollarAmount || (depth0 && depth0.dollarAmount) || alias2).call(alias1,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"dollarAmount","hash":{},"data":data}))
    + "\" data-currentValue=\"0\"/></label><label>.<input type=\"number\" class=\"centEditInput\" placeholder=\"00\" step=\"1\" min=\"0\" max=\"99\" value=\""
    + alias3((helpers.centAmount || (depth0 && depth0.centAmount) || alias2).call(alias1,(depth0 != null ? depth0.AmountInCents : depth0),{"name":"centAmount","hash":{},"data":data}))
    + "\" /></label>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"buttonCell\">\r\n                <button class=\"transactionEditButton\">Edit</button>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"hidden idCell\">\r\n                <input type=\"hidden\" value=\""
    + alias3(alias4((depth0 != null ? depth0.TransactionID : depth0), depth0))
    + "\" />\r\n            </div>\r\n        </td>\r\n    </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
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
    + "    <tr>\r\n        <td>\r\n            <div class=\"dateCell addCell\">\r\n                <input type=\"date\" class=\"dateAddInput\" value=\"\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"descriptionCell addCell\">\r\n                <input type=\"text\" class=\"descriptionAddInput\" value=\"\" />\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"categoryCell addCell\">\r\n                <select class=\"categoryAddSelect\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </select>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"amountCell addCell\">\r\n                <label>$<input type=\"number\" class=\"dollarAddInput\" placeholder=\"0\" step=\"1\" min=\"0\" max=\"9999\" value=\"0\" data-currentValue=\"0\" /></label><label>.<input type=\"number\" class=\"centAddInput\" placeholder=\"00\" step=\"1\" min=\"0\" max=\"99\" value=\"0\" /></label>\r\n            </div>\r\n        </td>\r\n        <td>\r\n            <div class=\"buttonCell\">\r\n                <button class=\"transactionAddButton\">Add</button>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</tbody>";
},"useData":true,"useDepths":true});
})();