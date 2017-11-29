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
templates['transactions'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <tr>\r\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</td>\r\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\r\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.category : depth0), depth0))
    + "</td>\r\n        <td>"
    + alias2(alias1((depth0 != null ? depth0.amount : depth0), depth0))
    + "</td>\r\n    </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.transactions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>";
},"useData":true});
})();