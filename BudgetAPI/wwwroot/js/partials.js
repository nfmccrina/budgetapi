(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['categorySelect'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <option value=\""
    + alias2(alias1((depth0 != null ? depth0.CategoryID : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.Name : depth0), depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿<select class=\"categorySelect\">\r\n    <option value=\"0\">None</option>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"useData":true});
Handlebars.partials['moneyInput'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "﻿<label>"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "$<input type=\"number\" class=\"dollarEditInput numericOnly\" placeholder=\"0\" step=\"1\" min=\"0\" max=\"9999\" value=\""
    + alias3((helpers.dollarAmount || (depth0 && depth0.dollarAmount) || alias2).call(alias1,(depth0 != null ? depth0.amountInCents : depth0),{"name":"dollarAmount","hash":{},"data":data}))
    + "\" data-currentValue=\"0\" /></label><label>.<input type=\"number\" class=\"centEditInput\" placeholder=\"00\" step=\"1\" min=\"0\" max=\"99\" value=\""
    + alias3((helpers.centAmount || (depth0 && depth0.centAmount) || alias2).call(alias1,(depth0 != null ? depth0.amountInCents : depth0),{"name":"centAmount","hash":{},"data":data}))
    + "\" /></label>";
},"useData":true});
})();