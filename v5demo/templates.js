define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"component__header "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\">\n  <div class=\"component__header-inner "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "\n    "
    + alias3(((helper = (helper = helpers.component_description || (depth0 != null ? depth0.component_description : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":29}}}) : helper)))
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),(depth0 != null ? depth0.mobileInstruction : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"component__title "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "\n      <div class=\"component__title-inner "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":15,"column":41},"end":{"line":15,"column":65}}}))
    + "__title-inner\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":79},"end":{"line":15,"column":147}}})) != null ? stack1 : "")
    + ">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":34}}})) != null ? stack1 : "")
    + "\n      </div>\n\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"component__body "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":56}}}))
    + "__body\">\n      <div class=\"component__body-inner "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":26,"column":40},"end":{"line":26,"column":64}}}))
    + "__body-inner\">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"component__instruction "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":33,"column":39},"end":{"line":33,"column":63}}}))
    + "__instruction\">\n      <div class=\"component__instruction-inner "
    + alias3((helpers.lowercase||(depth0 && depth0.lowercase)||alias2).call(alias1,(depth0 != null ? depth0._component : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":34,"column":47},"end":{"line":34,"column":71}}}))
    + "__instruction-inner\">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":33}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.instruction : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":42,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("dropdown", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "    <li id=\"dropdown__item__"
    + alias2(alias1((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "__"
    + alias2(alias1((depths[1] != null ? depths[1]._dropdownIndex : depths[1]), depth0))
    + "__"
    + alias2((helpers.inc||(depth0 && depth0.inc)||alias4).call(alias3,(data && data.index),{"name":"inc","hash":{},"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":77}}}))
    + "\" class=\"dropdown__item js-dropdown-list-item\" role=\"option\" text=\""
    + alias2(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":24,"column":144},"end":{"line":24,"column":152}}}) : helper)))
    + "\" value=\""
    + alias2(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":24,"column":161},"end":{"line":24,"column":171}}}) : helper)))
    + "\">\n      <div class=\"dropdown__item-inner js-dropdown-list-item-inner\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayText : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "      </div>\n    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.displayText || (depth0 != null ? depth0.displayText : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayText","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"dropdown\">\n\n  <button class=\"dropdown__btn js-dropdown-btn\" aria-haspopup=\"listbox\">\n\n    <div class=\"dropdown__inner js-dropdown-inner\"></div>\n\n    <div class=\"dropdown__icon\">\n      <div class=\"icon\"></div>\n    </div>\n\n  </button>\n\n  <input class=\"js-data-output\" type=\"hidden\" />\n\n  <ul class=\"dropdown__list js-dropdown-list\" role=\"listbox\" tabindex=\"-1\">\n\n    <li id=\"dropdown__item__"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":35}}}) : helper)))
    + "__"
    + alias4(((helper = (helper = helpers._dropdownIndex || (depth0 != null ? depth0._dropdownIndex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_dropdownIndex","hash":{},"data":data,"loc":{"start":{"line":17,"column":37},"end":{"line":17,"column":55}}}) : helper)))
    + "__0\" class=\"dropdown__placeholder dropdown__item js-dropdown-list-item\" role=\"option\" disabled=\"true\" hidden=\"true\" default=\"true\" text=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":192},"end":{"line":17,"column":207}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":216},"end":{"line":17,"column":231}}}) : helper)))
    + "\">\n      <div class=\"dropdown__item-inner js-dropdown-list-item-inner\">\n        "
    + ((stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </li>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._options : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":33,"column":13}}})) != null ? stack1 : "")
    + "\n  </ul>\n\n</div>\n";
},"useData":true,"useDepths":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"article__header\">\n    <div class=\"article__header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"article__title\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"article__title-inner\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":41},"end":{"line":17,"column":109}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"article__body\">\n        <div class=\"article__body-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"article__instruction\">\n        <div class=\"article__instruction-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"article__inner\">\n\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.instruction : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"block__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"block__header\">\n    <div class=\"block__header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"block__title\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"block__title-inner\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":107}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"block__body\">\n        <div class=\"block__body-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"block__instruction\">\n        <div class=\"block__instruction-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"block__inner\">\n\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.instruction : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.answeredCorrectly), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.answeredIncorrectly), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"btn__response-container\">\n\n  <div class=\"btn__marking js-btn-marking u-display-none\" aria-label=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":70},"end":{"line":3,"column":231}}})) != null ? stack1 : "")
    + "\">\n    <div class=\"icon\"></div>\n  </div>\n\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n  <button class=\"btn-text btn__feedback js-btn-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"drawer__inner\">\n\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "</span>\n\n  <div class=\"drawer__holder js-drawer-holder\"></div>\n\n  <div class=\"drawer__toolbar u-clearfix\">\n\n    <div class=\"drawer__back\">\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n    </div>\n\n    <div class=\"drawer__close\">\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n    </div>\n\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"drawer__menu-title drawer__item-title\">\n      <div class=\"drawer__menu-title-inner drawer__item-title-inner\">\n        "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"drawer__menu-body drawer__item-body\">\n      <div class=\"drawer__menu-body-inner drawer__item-body-inner\">\n        "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"drawer__menu-inner drawer__item-inner\" role=\"listitem\">\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.className : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":55},"end":{"line":10,"column":74}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + " "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":76}}})) != null ? stack1 : "")
    + "\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias2).call(alias1,(depth0 != null ? depth0._type : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":81}}})) != null ? stack1 : "")
    + ">\n\n  <span class=\"aria-label\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isA11yCompletionDescriptionEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading js-loading\">\n  <div class=\"loading__inner\">\n    Loading...\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "  <button class=\"nav__btn nav__skip-btn aria-label a11y-ignore-focus\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.skipNavigation : stack1), depth0))
    + "\">\n      "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1.skipNavigationText : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return alias2(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"nav__inner u-clearfix\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._isSkipNavigationEnabled : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\" role=\"link\">\n    <div class=\"icon\"></div>\n  </button>\n\n  <button class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn\" data-event=\"toggleDrawer\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\">\n    <div class=\"icon\"></div>\n  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":122},"end":{"line":4,"column":134}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "        <div class=\"notify__icon\">\n          <div class=\"icon"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":118}}})) != null ? stack1 : "")
    + "\"></div>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "        <div class=\"notify__title\" id=\"notify-heading\">\n          <div class=\"notify__title-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":18,"column":43},"end":{"line":18,"column":76}}})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"notify__body\">\n          <div class=\"notify__body-inner\">\n            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":30}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "        <div class=\"notify__btn-container\">\n          <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":34,"column":97},"end":{"line":34,"column":114}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":35,"column":12},"end":{"line":35,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n        </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"notify__btn-container\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":46,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "          <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":43,"column":99},"end":{"line":43,"column":117}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":43,"column":131},"end":{"line":43,"column":147}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.equals||(depth0 && depth0.equals)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._type : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":4},"end":{"line":59,"column":15}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n      <div class=\"icon\"></div>\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._attributes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup notify__popup-type-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":96},"end":{"line":4,"column":105}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._classes : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"notify__popup-inner\">\n\n    <div class=\"notify__content\">\n      <div class=\"notify__content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n"
    + ((stack1 = (helpers.all||(depth0 && depth0.all)||alias2).call(alias1,(depth0 != null ? depth0._isCancellable : depth0),(depth0 != null ? depth0._showCloseButton : depth0),{"name":"all","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":60,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":64,"column":2},"end":{"line":64,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "  <div class=\"notify__push-title\">\n    <div class=\"notify__push-title-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":75}}})) != null ? stack1 : "")
    + ">\n      "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"notify__push-body\">\n    <div class=\"notify__push-body-inner\">\n      "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return alias2(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div id=\"notify-push-heading\" class=\"notify__push-inner js-notify-push-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n\n<button class=\"btn-icon notify__push-close-btn js-notify-push-close-btn\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n  <div class=\"icon\"></div>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"page__header\">\n    <div class=\"page__header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||container.hooks.helperMissing).call(alias1,(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.pageBody : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":42,"column":14}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":6},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"page__title\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"page__title-inner\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":106}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"page__subtitle\">\n        <div class=\"page__subtitle-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.subtitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"page__body\">\n        <div class=\"page__body-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":28}}})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"page__instruction\">\n        <div class=\"page__instruction-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":47,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"page__inner\">\n\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),(depth0 != null ? depth0.subtitle : depth0),(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.instruction : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":54,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"article__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <div class=\"accordion__item"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":68}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._classes : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":68},"end":{"line":8,"column":104}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":118},"end":{"line":8,"column":128}}}) : helper)))
    + "\">\n\n      <button id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":39}}}) : helper)))
    + "-accordion-button\" class=\"accordion__item-btn js-toggle-item is-closed"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":145}}})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\">\n        <div class=\"accordion__item-btn-inner\">\n\n          <div class=\"accordion__item-icon\">\n            <div class=\"icon\"></div>\n          </div>\n\n          <div class=\"accordion__item-title\">\n            <div class=\"accordion__item-title-inner\">\n              "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":14},"end":{"line":19,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n\n        </div>\n      </button>\n\n      <div class=\"accordion__item-content\" role=\"region\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":85},"end":{"line":26,"column":95}}}) : helper)))
    + "-accordion-button\">\n        <div class=\"accordion__item-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":50,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":97}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <div class=\"accordion__item-body\">\n            <div class=\"accordion__item-body-inner\">\n              "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":32,"column":14},"end":{"line":32,"column":32}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "          <div class=\"accordion__item-image-container"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":53},"end":{"line":38,"column":104}}})) != null ? stack1 : "")
    + "\">\n            <img class=\"accordion__item-image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":39,"column":70},"end":{"line":39,"column":152}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":47,"column":19}}})) != null ? stack1 : "")
    + "\n          </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"15":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"component__attribution accordion__attribution\">\n              <div class=\"component__attribution-inner accordion__attribution-inner\">\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"component__inner accordion__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget accordion__widget\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":56,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["assessmentResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"component__feedback assessmentresults__feedback\">\n      <div class=\"component__feedback-inner assessmentresults__feedback-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.retryFeedback : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "\n        <button class=\"btn-text assessmentresults__retry-btn js-assessment-retry-btn\">\n          <span>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "          </span>\n        </button>\n\n      </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"assessmentresults__retry-feedback\">\n          <div class=\"assessmentresults__retry-feedback-inner\">\n            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.retryFeedback : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":39}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), depth0))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            Retry\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"component__inner assessmentresults__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget assessmentresults__widget\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRetryEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["blank"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component__inner blank__inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-disabled"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":78},"end":{"line":5,"column":193}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":150},"end":{"line":5,"column":186}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <div class=\"gmcq__item js-mcq-item item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":54}}}) : helper)))
    + " "
    + alias4((helpers.odd||(depth0 && depth0.odd)||alias2).call(alias1,(data && data.index),{"name":"odd","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":69}}}))
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":69},"end":{"line":8,"column":195}}})) != null ? stack1 : "")
    + "\">\n\n      <label class=\"gmcq__item-label js-item-label"
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":50},"end":{"line":10,"column":98}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":98},"end":{"line":10,"column":136}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":136},"end":{"line":10,"column":187}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":224},"end":{"line":10,"column":234}}}) : helper)))
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":10,"column":254},"end":{"line":10,"column":264}}}) : helper)))
    + "\" >\n\n        <img class=\"gmcq__item-image\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":12,"column":125},"end":{"line":12,"column":207}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "\n        <div class=\"gmcq__item-option\">\n\n          <div class=\"gmcq__item-state\">\n            <div class=\"gmcq__item-icon gmcq__item-answer-icon"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(28, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":25,"column":62},"end":{"line":25,"column":117}}})) != null ? stack1 : "")
    + "\">\n              <div class=\"icon\"></div>\n            </div>\n            <div class=\"gmcq__item-icon gmcq__item-correct-icon\">\n              <div class=\"icon\"></div>\n            </div>\n            <div class=\"gmcq__item-icon gmcq__item-incorrect-icon\">\n              <div class=\"icon\"></div>\n            </div>\n          </div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":42,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </label>\n\n      <input class=\"gmcq__item-input js-item-input\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":48,"column":67},"end":{"line":48,"column":77}}}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":79},"end":{"line":48,"column":128}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(34, data, 0, blockParams, depths),"inverse":container.program(36, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":48,"column":135},"end":{"line":48,"column":182}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":184},"end":{"line":48,"column":229}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (helpers.a11y_normalize||(depth0 && depth0.a11y_normalize)||alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":48,"column":242},"end":{"line":48,"column":267}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":48,"column":287},"end":{"line":48,"column":297}}}) : helper)))
    + "\" />\n\n    </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":94},"end":{"line":8,"column":184}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":8,"column":120},"end":{"line":8,"column":177}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"16":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"18":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"22":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"component__attribution gmcq__attribution\">\n          <div class=\"component__attribution-inner gmcq__attribution-inner\">\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"28":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "          <div class=\"gmcq__item-text\">\n            <div class=\"gmcq__item-text-inner\">\n              "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":39,"column":14},"end":{"line":39,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"32":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item\" ";
},"34":function(container,depth0,helpers,partials,data) {
    return "radio";
},"36":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"38":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"component__inner gmcq__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget gmcq__widget"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":204}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRadio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":212},"end":{"line":5,"column":258}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":51,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"component__attribution graphic__attribution\">\n        <div class=\"component__attribution-inner graphic__attribution-inner\">\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"component__inner graphic__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget graphic__widget\">\n\n    <div class=\"graphic__image-container"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":91}}})) != null ? stack1 : "")
    + "\">\n\n      <img class=\"graphic__image js-graphic-set-image-src\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":146},"end":{"line":9,"column":228}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-pin";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-tile";
},"5":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n    <img class=\"hotgraphic__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":9,"column":58},"end":{"line":9,"column":140}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"hotgraphic__pin-item-container\" role=\"list\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"component__attribution hotgraphic__attribution\">\n      <div class=\"component__attribution-inner hotgraphic__attribution-inner\">\n        "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"hotgraphic__pin-item\" role=\"listitem\">\n\n        <button class=\"btn-icon hotgraphic__pin item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":53},"end":{"line":24,"column":63}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":117},"end":{"line":24,"column":154}}})) != null ? stack1 : "")
    + " js-hotgraphic-item-click\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":193},"end":{"line":24,"column":203}}}) : helper)))
    + "\" style=\"top: "
    + ((stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":24,"column":217},"end":{"line":24,"column":227}}}) : helper))) != null ? stack1 : "")
    + "%; left: "
    + ((stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":24,"column":236},"end":{"line":24,"column":247}}}) : helper))) != null ? stack1 : "")
    + "%;\">\n\n          <span class=\"aria-label\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":26,"column":35},"end":{"line":26,"column":44}}}) : helper)))
    + ".</span>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "\n        </button>\n\n      </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    return " has-pin-image";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "          <div class=\"hotgraphic__pin-image-container item-"
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":59},"end":{"line":29,"column":69}}}) : helper)))
    + "\">\n            <img class=\"hotgraphic__pin-image\" src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1.src : stack1), depth0))
    + "\">\n          </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"icon\"></div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n    <div class=\"hotgraphic__tile-item-container\" role=\"list\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":6},"end":{"line":59,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"hotgraphic__tile-item\" role=\"listitem\">\n\n        <button class=\"hotgraphic__tile item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":50,"column":45},"end":{"line":50,"column":55}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":55},"end":{"line":50,"column":109}}})) != null ? stack1 : "")
    + " js-hotgraphic-item-click\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":50,"column":148},"end":{"line":50,"column":158}}}) : helper)))
    + "\">\n\n          <span class=\"aria-label\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":52,"column":35},"end":{"line":52,"column":44}}}) : helper)))
    + ".</span>\n\n          <img class=\"hotgraphic__tile-image\" src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\">\n\n        </button>\n\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"component__inner hotgraphic__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget hotgraphic__widget"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._useGraphicsAsPins : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":114}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":114},"end":{"line":5,"column":165}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._useGraphicsAsPins : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":63,"column":15}}})) != null ? stack1 : "")
    + "\n  </div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphicPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-toolbar";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "  <div class=\"hotgraphic-popup__item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._classes : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":72}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":108}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":108},"end":{"line":4,"column":142}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRound : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":142},"end":{"line":4,"column":177}}})) != null ? stack1 : "")
    + "\" data-index="
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":4,"column":190},"end":{"line":4,"column":200}}}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isActive : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":200},"end":{"line":4,"column":251}}})) != null ? stack1 : "")
    + ">\n\n    <div class=\"hotgraphic-popup__item-content\">\n      <div class=\"hotgraphic-popup__item-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n    <div class=\"hotgraphic-popup__item-image-container"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":54},"end":{"line":28,"column":105}}})) != null ? stack1 : "")
    + "\">\n\n      <img class=\"hotgraphic-popup__item-image\" src=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.program(23, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":30,"column":71},"end":{"line":30,"column":153}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":53},"end":{"line":4,"column":65}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-active";
},"10":function(container,depth0,helpers,partials,data) {
    return " is-round";
},"12":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "        <div"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isActive : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":56}}})) != null ? stack1 : "")
    + " class=\"hotgraphic-popup__item-title\" "
    + container.escapeExpression((helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":10,"column":94},"end":{"line":10,"column":125}}}))
    + ">\n          <div class=\"hotgraphic-popup__item-title-inner\">\n            "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"hotgraphic-popup__item-body\">\n          <div class=\"hotgraphic-popup__item-body-inner\">\n            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":30}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"23":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"component__attribution hotgraphic-popup__item-attribution\">\n        <div class=\"component__attribution-inner hotgraphic-popup__item-attribution-inner\">\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"hotgraphic-popup__nav\">\n\n    <button class=\"btn-icon hotgraphic-popup__controls back js-hotgraphic-controls-click\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n      <div class=\"icon\"></div>\n    </button>\n\n    <div class=\"hotgraphic-popup__count\"></div>\n\n    <button class=\"btn-icon hotgraphic-popup__controls next js-hotgraphic-controls-click\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n      <div class=\"icon\"></div>\n    </button>\n\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "<div class=\"hotgraphic-popup__inner"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._hidePagination : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":85}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "\n</div>\n\n<div class=\"hotgraphic-popup__toolbar\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._hidePagination : depth0),{"name":"unless","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":63,"column":13}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-icon hotgraphic-popup__close js-hotgraphic-popup-close\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n    <div class=\"icon\"></div>\n  </button>\n\n</div>\n\n"
    + alias2(((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":71,"column":19}}}) : helper)))
    + "\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-disabled"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":82},"end":{"line":5,"column":197}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":154},"end":{"line":5,"column":190}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"matching__item item item-"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":51}}}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":177}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"matching__select-container\">\n\n"
    + ((stack1 = container.invokePartial(partials.dropdown,depth0,{"name":"dropdown","hash":{"_dropdownIndex":(data && data.index),"_id":(depths[1] != null ? depths[1]._id : depths[1]),"placeholder":(depths[1] != null ? depths[1].placeholder : depths[1])},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <div class=\"matching__select-state\">\n          <div class=\"matching__select-icon matching__select-correct-icon\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"matching__select-icon matching__select-incorrect-icon\">\n            <div class=\"icon\"></div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":166}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":8,"column":102},"end":{"line":8,"column":159}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"matching__item-title\">\n        <div class=\"matching__item-title_inner\">\n          "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"component__inner matching__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget matching__widget"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":208}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":34,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-disabled"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":77},"end":{"line":5,"column":192}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":149},"end":{"line":5,"column":185}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <div class=\"mcq__item js-mcq-item item-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":53}}}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":179}}})) != null ? stack1 : "")
    + "\">\n\n      <input class=\"mcq__item-input js-item-input\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "-input\" "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":84},"end":{"line":10,"column":133}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":140},"end":{"line":10,"column":187}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":188},"end":{"line":10,"column":233}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (helpers.a11y_normalize||(depth0 && depth0.a11y_normalize)||alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":10,"column":246},"end":{"line":10,"column":271}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":10,"column":291},"end":{"line":10,"column":301}}}) : helper)))
    + "\" />\n\n      <label class=\"mcq__item-label js-item-label"
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":49},"end":{"line":12,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":97},"end":{"line":12,"column":135}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":172},"end":{"line":12,"column":182}}}) : helper)))
    + "-input\" data-adapt-index=\""
    + alias4(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":208},"end":{"line":12,"column":218}}}) : helper)))
    + "\" >\n\n        <div class=\"mcq__item-state\">\n          <div class=\"mcq__item-icon mcq__item-answer-icon"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isRadio : depths[1]),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(28, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":58},"end":{"line":15,"column":113}}})) != null ? stack1 : "")
    + "\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"mcq__item-icon mcq__item-correct-icon\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"mcq__item-icon mcq__item-incorrect-icon\">\n            <div class=\"icon\"></div>\n          </div>\n        </div>\n\n        <div class=\"mcq__item-text\">\n          <div class=\"mcq__item-text-inner\">\n            "
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n\n      </label>\n\n    </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":168}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":161}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"28":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"component__inner mcq__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget mcq__widget"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":203}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isRadio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":211},"end":{"line":5,"column":257}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.skipToTranscript : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "    <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <img class=\"media_poster is-audio\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":41,"column":11}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <video aria-hidden=\"true\" preload=\"none\" width=\"640\" height=\"360\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._playsinline : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":110}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.if_value_equals||(depth0 && depth0.if_value_equals)||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1),"video/vimeo",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":21,"column":111},"end":{"line":21,"column":211}}})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._useClosedCaptions : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + "      </video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "playsinline";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "          <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":33,"column":17}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.cc : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":38,"column":19}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <track kind=\"subtitles\" src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":37,"column":41},"end":{"line":37,"column":48}}}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias4(((helper = (helper = helpers.srclang || (depth0 != null ? depth0.srclang : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srclang","hash":{},"data":data,"loc":{"start":{"line":37,"column":75},"end":{"line":37,"column":86}}}) : helper)))
    + "\" />\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"media__transcript-container\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":58,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":4},"end":{"line":70,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":4},"end":{"line":78,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <button class=\"media__transcript-btn media__transcript-btn-inline js-media-inline-transcript-toggle\" aria-expanded=\"false\">\n      <span class=\"media__transcript-btn-text\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":51,"column":8},"end":{"line":55,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0))
    + "\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <button class=\"media__transcript-btn media__transcript-btn-external js-media-external-transcript-click\" onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "')\">\n      <span class=\"media__transcript-btn-text\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":63,"column":8},"end":{"line":67,"column":15}}})) != null ? stack1 : "")
    + "      </span>\n    </button>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), depth0))
    + "\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"media__transcript-body-inline\" role=\"region\" aria-label=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data,"loc":{"start":{"line":73,"column":73},"end":{"line":73,"column":198}}})) != null ? stack1 : "")
    + "\">\n      <div class=\"media__transcript-body-inline-inner\">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptBody : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":75,"column":8},"end":{"line":75,"column":54}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"component__inner media__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget media__widget a11y-ignore-aria\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":42,"column":9}}})) != null ? stack1 : "")
    + "  </div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._transcript : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":2},"end":{"line":81,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " narrative__text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"narrative__content-item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":79}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":93},"end":{"line":11,"column":103}}}) : helper)))
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":19,"column":17}}})) != null ? stack1 : "")
    + "\n          "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":71}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":10},"end":{"line":29,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "          <div class=\"narrative__content-title\">\n            <div class=\"narrative__content-title-inner\" "
    + container.escapeExpression((helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":94}}}))
    + ">\n              "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.a11y_aria_image||(depth0 && depth0.a11y_aria_image)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":21,"column":30},"end":{"line":21,"column":64}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <div class=\"narrative__content-body\">\n            <div class=\"narrative__content-body-inner\">\n              "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":14},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":71},"end":{"line":42,"column":107}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":42,"column":121},"end":{"line":42,"column":131}}}) : helper)))
    + "\"></div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <button class=\"narrative__strapline-btn js-narrative-strapline-open-popup"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":83},"end":{"line":60,"column":119}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":60,"column":133},"end":{"line":60,"column":148}}}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":60,"column":196},"end":{"line":60,"column":206}}}) : helper)))
    + "\">\n\n            <div class=\"narrative__strapline-title\">\n              <div class=\"narrative__strapline-title-inner\">\n                "
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":64,"column":16},"end":{"line":64,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n\n            <div class=\"btn-icon narrative__strapline-icon\">\n              <div class=\"icon\"></div>\n            </div>\n\n            <div class=\"focus-rect\"></div>\n\n          </button>\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "        <div class=\"narrative__slider-image-container"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":53},"end":{"line":95,"column":89}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":89},"end":{"line":95,"column":140}}})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":95,"column":188},"end":{"line":95,"column":198}}}) : helper)))
    + "\">\n\n          <img class=\"narrative__slider-image\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":10},"end":{"line":105,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <div class=\"component__attribution narrative__attribution\">\n            <div class=\"component__attribution-inner narrative__attribution-inner\">\n              "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":65},"end":{"line":117,"column":101}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":117,"column":115},"end":{"line":117,"column":125}}}) : helper)))
    + "\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function";

  return "<div class=\"component__inner narrative__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget narrative__widget"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._hasNavigationInTextArea : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":113}}})) != null ? stack1 : "")
    + "\">\n\n    <div class=\"narrative__content\">\n      <div class=\"narrative__content-inner\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "\n        <div class=\"narrative__controls-container u-clearfix\">\n\n          <button class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n            <div class=\"icon\"></div>\n          </button>\n\n          <div class=\"narrative__indicators\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + "          </div>\n\n          <button class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n            <div class=\"icon\"></div>\n          </button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"narrative__strapline\">\n\n      <div class=\"narrative__strapline-header\">\n        <div class=\"narrative__strapline-header-inner u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":57,"column":80},"end":{"line":57,"column":95}}}) : helper)))
    + "%\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":10},"end":{"line":75,"column":19}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"narrative__slide-container\">\n\n      <button class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n\n      <button class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n        <div class=\"icon\"></div>\n      </button>\n\n      <div class=\"narrative__slider u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":92,"column":62},"end":{"line":92,"column":77}}}) : helper)))
    + "%\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":8},"end":{"line":108,"column":17}}})) != null ? stack1 : "")
    + "\n      </div>\n\n    </div>\n\n    <div class=\"narrative__indicators narrative__slide-indicators\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":6},"end":{"line":118,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-disabled"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":80},"end":{"line":5,"column":246}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._canShowMarking : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":152},"end":{"line":5,"column":239}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":5,"column":175},"end":{"line":5,"column":232}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"slider__label-container js-slider-label-container\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labelStart : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labelEnd : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"slider__label-start\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.labelStart : stack1), depth0))
    + "\">\n        <div class=\"slider__label-start-inner\">\n          "
    + ((stack1 = ((helper = (helper = helpers.labelStart || (depth0 != null ? depth0.labelStart : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelStart","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"slider__label-end\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.labelEnd : stack1), depth0))
    + "\">\n        <div class=\"slider__label-end-inner\">\n          "
    + ((stack1 = ((helper = (helper = helpers.labelEnd || (depth0 != null ? depth0.labelEnd : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelEnd","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"slider__number js-slider-number js-slider-number-click\" data-id=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":92}}}) : helper)))
    + "\" aria-hidden=\"true\">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":31,"column":113},"end":{"line":31,"column":122}}}) : helper)))
    + "</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers._userAnswer || (depth0 != null ? depth0._userAnswer : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_userAnswer","hash":{},"data":data,"loc":{"start":{"line":45,"column":100},"end":{"line":45,"column":115}}}) : helper)));
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers._scaleStart || (depth0 != null ? depth0._scaleStart : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":123},"end":{"line":45,"column":138}}}) : helper)));
},"19":function(container,depth0,helpers,partials,data) {
    return "rtl";
},"21":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"component__inner slider__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget slider__widget"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":257}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.labelStart : depth0),(depth0 != null ? depth0.labelEnd : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + "\n    <div class=\"slider__number-container\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "      <div class=\"slider__number-model-range js-slider-model-range\"></div>\n      <div class=\"slider__number-answer\"></div>\n      <div class=\"slider__number-selection js-slider-number-selection a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\n    </div>\n\n    <div class=\"slider__scale-container js-slider-scale\">\n      <div class=\"slider__scale-notch slider__scale-notch-start\"></div>\n      <div class=\"slider__scale-notch-container js-slider-scale-notch-container\"></div>\n      <div class=\"slider__scale-notch slider__scale-notch-end\"></div>\n    </div>\n\n    <div class=\"slider__item"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":28},"end":{"line":44,"column":118}}})) != null ? stack1 : "")
    + "\">\n      <input class=\"slider__item-input js-slider-item-input\" type=\"range\" value=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._userAnswer : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":45,"column":81},"end":{"line":45,"column":145}}})) != null ? stack1 : "")
    + "\" min=\""
    + alias4(((helper = (helper = helpers._scaleStart || (depth0 != null ? depth0._scaleStart : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":152},"end":{"line":45,"column":167}}}) : helper)))
    + "\" max=\""
    + alias4(((helper = (helper = helpers._scaleEnd || (depth0 != null ? depth0._scaleEnd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":45,"column":174},"end":{"line":45,"column":187}}}) : helper)))
    + "\" aria-valuenow=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._userAnswer : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":45,"column":204},"end":{"line":45,"column":268}}})) != null ? stack1 : "")
    + "\" aria-valuemin=\""
    + alias4(((helper = (helper = helpers._scaleStart || (depth0 != null ? depth0._scaleStart : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":285},"end":{"line":45,"column":300}}}) : helper)))
    + "\" aria-valuemax=\""
    + alias4(((helper = (helper = helpers._scaleEnd || (depth0 != null ? depth0._scaleEnd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":45,"column":317},"end":{"line":45,"column":330}}}) : helper)))
    + "\" data-direction=\""
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._marginDir : depth0),"right",{"name":"equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":348},"end":{"line":45,"column":392}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":394},"end":{"line":45,"column":436}}})) != null ? stack1 : "")
    + ">\n    </div>\n\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"component__inner text__inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["textinput"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-disabled"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isInteractionComplete : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":83},"end":{"line":6,"column":198}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":155},"end":{"line":6,"column":191}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"textinput__item js-textinput-item"
    + ((stack1 = helpers.unless.call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":49},"end":{"line":9,"column":175}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.prefix : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1]._isEnabled : depths[1]),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(14, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":47,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.suffix : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":55,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._canShowMarking : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":164}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":100},"end":{"line":9,"column":157}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "      <div class=\"textinput__item-prefix-container\">\n      <label class=\"textinput__item-prefix\" id=\""
    + alias2(alias1((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":59},"end":{"line":13,"column":69}}}) : helper)))
    + "-aria\" for=\""
    + alias2(alias1((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":92},"end":{"line":13,"column":102}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"prefix","hash":{},"data":data,"loc":{"start":{"line":13,"column":116},"end":{"line":13,"column":128}}}) : helper))) != null ? stack1 : "")
    + "\">\n        "
    + ((stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"prefix","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n      </label>\n      </div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "      <div class=\"textinput__item-textbox-container\">\n        <input class=\"textinput__item-textbox js-textinput-textbox\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":110}}}) : helper))) != null ? stack1 : "")
    + "\" data-id=\"input-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":127},"end":{"line":21,"column":137}}}) : helper)))
    + "\" id=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":154},"end":{"line":21,"column":164}}}) : helper)))
    + "\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":194},"end":{"line":21,"column":204}}}) : helper)))
    + "-aria\" value=\"\">\n\n        <div class=\"textinput__item-state\">\n          <div class=\"textinput__item-icon textinput__item-correct-icon\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"textinput__item-icon textinput__item-incorrect-icon\">\n            <div class=\"icon\"></div>\n          </div>\n        </div>\n\n      </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"textinput__item-textbox-container\">\n        <input class=\"textinput__item-textbox js-textinput-textbox\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":35,"column":93},"end":{"line":35,"column":110}}}) : helper))) != null ? stack1 : "")
    + "\" data-id=\"input-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":35,"column":127},"end":{"line":35,"column":137}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.userAnswer || (depth0 != null ? depth0.userAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userAnswer","hash":{},"data":data,"loc":{"start":{"line":35,"column":146},"end":{"line":35,"column":160}}}) : helper)))
    + "\" disabled=\"true\">\n\n        <div class=\"textinput__item-state\">\n          <div class=\"textinput__item-icon textinput__item-correct-icon\">\n            <div class=\"icon\"></div>\n          </div>\n          <div class=\"textinput__item-icon textinput__item-incorrect-icon\">\n            <div class=\"icon\"></div>\n          </div>\n        </div>\n\n      </div>\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "      <div class=\"textinput__item-suffix-container\">\n      <label class=\"textinput__item-suffix\" id=\""
    + alias2(alias1((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":51,"column":59},"end":{"line":51,"column":69}}}) : helper)))
    + "-aria\" for=\""
    + alias2(alias1((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":51,"column":92},"end":{"line":51,"column":102}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"suffix","hash":{},"data":data,"loc":{"start":{"line":51,"column":116},"end":{"line":51,"column":128}}}) : helper))) != null ? stack1 : "")
    + "\">\n        "
    + ((stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"suffix","hash":{},"data":data,"loc":{"start":{"line":52,"column":8},"end":{"line":52,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\n      </label>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"component__inner textinput__inner\">\n\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <div class=\"component__widget textinput__widget"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isEnabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":209}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":58,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  <div class=\"btn__container\"></div>\n\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["languagePickerDrawerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"languagepicker-drawer__item drawer__item is-"
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":10,"column":60},"end":{"line":10,"column":73}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":73},"end":{"line":10,"column":111}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._direction : depth0),"ltr",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":111},"end":{"line":10,"column":157}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias2).call(alias1,(depth0 != null ? depth0._direction : depth0),"rtl",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":157},"end":{"line":10,"column":203}}})) != null ? stack1 : "")
    + "\" role=\"listitem\">\n\n        <button class=\"languagepicker-drawer__item-btn drawer__item-btn js-languagepicker-item-btn"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":98},"end":{"line":12,"column":136}}})) != null ? stack1 : "")
    + "\" data-language=\""
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":12,"column":153},"end":{"line":12,"column":166}}}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isSelected : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":167},"end":{"line":12,"column":202}}})) != null ? stack1 : "")
    + ">\n          <div class=\"languagepicker-drawer__title drawer__item-title\">\n            <div class=\"languagepicker-drawer__title-inner drawer__item-title-inner\">\n              "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.displayName : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":39}}})) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n        </button>\n\n    </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-ltr";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-rtl";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"10":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"languagepicker-drawer\">\n  "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._languagePicker : stack1)) != null ? stack1.languageSelector : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":77}}})) != null ? stack1 : "")
    + "\n\n  <div class=\"languagepicker-drawer__inner\" role=\"list\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._languages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"nav__inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"languagepicker__title\">\n    <div class=\"languagepicker__title-inner\" role=\"heading\" aria-level=\"1\">\n      "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":32}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"languagepicker__body\">\n    <div class=\"languagepicker__body-inner\">\n      "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <button class=\"btn-text languagepicker__language-btn is-"
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":62},"end":{"line":23,"column":75}}}) : helper)))
    + " js-languagepicker-btn-click\" role=\"link\" value=\""
    + alias4(((helper = (helper = helpers._language || (depth0 != null ? depth0._language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":124},"end":{"line":23,"column":137}}}) : helper)))
    + "\">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.displayName : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":24,"column":33}}})) != null ? stack1 : "")
    + "\n      </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"languagepicker__inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"languagepicker__languages\">\n    <div class=\"languagepicker__languages-inner\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._languages : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"pagelevelprogress__inner\">\n  "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":81}}})) != null ? stack1 : "")
    + "\n\n  <div role=\"list\" class=\"js-children\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <span class=\"aria-label js-indicator-aria-label\">\n    "
    + container.escapeExpression((helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ariaLabel : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":25}}}))
    + "\n  </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"pagelevelprogress__indicator-inner\">\n\n  <div class=\"pagelevelprogress__indicator-bar js-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = helpers.percentageComplete || (depth0 != null ? depth0.percentageComplete : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":6,"column":79},"end":{"line":6,"column":101}}}) : helper)))
    + "%;\"></div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ariaLabel : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ".";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + ".";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":4,"column":182},"end":{"line":4,"column":318}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + ".";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + ".";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"pagelevelprogress__item-optional\">\n    <div class=\"pagelevelprogress__item-optional-inner\">\n      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<button\n  class=\"pagelevelprogress__item-btn drawer__item-btn"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":98}}})) != null ? stack1 : "")
    + " js-indicator js-pagelevelprogress-item-click\"\n  data-pagelevelprogress-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":36}}}) : helper)))
    + "\"\n  aria-label=\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":94}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":4,"column":94},"end":{"line":4,"column":325}}})) != null ? stack1 : "")
    + " "
    + alias3((helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":4,"column":326},"end":{"line":4,"column":343}}}))
    + "\">\n\n  <div class=\"pagelevelprogress__item-title drawer__item-title\">\n    <div class=\"pagelevelprogress__item-title-inner drawer__item-title-inner\">\n      "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "")
    + "\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return alias1(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<span class=\"tooltip\">\n  "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.progress : stack1), depth0))
    + "\n</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "  <div class=\"resources__filter has-"
    + alias3((helpers.resources_get_column_count||(depth0 && depth0.resources_get_column_count)||alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),{"name":"resources_get_column_count","hash":{},"data":data,"loc":{"start":{"line":8,"column":36},"end":{"line":8,"column":76}}}))
    + "-columns\">\n    <div class=\"resources__filter-inner\">\n\n      <button class=\"resources__filter-btn resources__show-all is-selected js-resources-filter-btn-click\" data-filter=\"all\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\">\n        "
    + ((stack1 = alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n\n"
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"document",{"name":"resources_has_type","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":19,"column":29}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"media",{"name":"resources_has_type","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":25,"column":29}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),"link",{"name":"resources_has_type","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":31,"column":29}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "      <button class=\"resources__filter-btn resources__show-document js-resources-filter-btn-click\" data-filter=\"document\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "      <button class=\"resources__filter-btn resources__show-media js-resources-filter-btn-click\" data-filter=\"media\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "      <button class=\"resources__filter-btn resources__show-link js-resources-filter-btn-click\" data-filter=\"link\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0)) != null ? stack1 : "")
    + "\n      </button>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"resources__item drawer__item is-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":40,"column":48},"end":{"line":40,"column":57}}}) : helper)))
    + " js-resources-item\" role=\"listitem\">\n\n      <a href=\""
    + alias4(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_link","hash":{},"data":data,"loc":{"start":{"line":42,"column":15},"end":{"line":42,"column":24}}}) : helper)))
    + "\" class=\"resources__item-btn drawer__item-btn js-resources-item-btn-click\"\n        data-type=\""
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":43,"column":19},"end":{"line":43,"column":28}}}) : helper)))
    + "\"\n"
    + ((stack1 = (helpers.resources_force_download||(depth0 && depth0.resources_force_download)||alias2).call(alias1,depth0,{"name":"resources_force_download","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":8},"end":{"line":46,"column":37}}})) != null ? stack1 : "")
    + "        target=\"_blank\"\n        aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":31}}}) : helper))) != null ? stack1 : "")
    + ". "
    + alias4(helpers.lookup.call(alias1,((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1),(depth0 != null ? depth0._type : depth0),{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":48,"column":33},"end":{"line":48,"column":73}}}))
    + "."
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":74},"end":{"line":48,"column":119}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":8},"end":{"line":56,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":8},"end":{"line":64,"column":15}}})) != null ? stack1 : "")
    + "\n      </a>\n\n    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        download=\""
    + container.escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"filename","hash":{},"data":data,"loc":{"start":{"line":45,"column":18},"end":{"line":45,"column":30}}}) : helper)))
    + "\"\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":48,"column":94},"end":{"line":48,"column":111}}}) : helper))) != null ? stack1 : "")
    + ".";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"resources__item-title drawer__item-title\">\n          <div class=\"resources__item-title-inner drawer__item-title-inner\">\n            "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":53,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"resources__item-body drawer__item-body\">\n          <div class=\"resources__item-body-inner drawer__item-body-inner\">\n            "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":61,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"resources__inner\">\n  "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resources : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":65}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = (helpers.resources_has_multiple_types||(depth0 && depth0.resources_has_multiple_types)||alias2).call(alias1,(depth0 != null ? depth0.resources : depth0),{"name":"resources_has_multiple_types","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\n  <div class=\"resources__item-container\" role=\"list\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.resources : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":69,"column":13}}})) != null ? stack1 : "")
    + "\n  </div>\n\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-full-width";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return " u-display-none";
},"9":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"11":function(container,depth0,helpers,partials,data) {
    return " btn-icon";
},"13":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"15":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"trickle__btn-icon\">\n        <div class=\"icon\"></div>\n      </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"trickle__btn-text\">\n        <div class=\"trickle__btn-text-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isFinal : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":23,"column":19}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isStart : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":31,"column":19}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":14},"end":{"line":28,"column":21}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"trickle "
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":27}}}) : helper)))
    + " "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":111}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isFullWidth : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":111},"end":{"line":1,"column":169}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":169},"end":{"line":1,"column":243}}})) != null ? stack1 : "")
    + "\">\n\n  "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._trickle : stack1)) != null ? stack1.incompleteContent : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":71}}})) != null ? stack1 : "")
    + "\n\n  <div class=\"trickle__inner js-trickle-btn-container "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "__inner "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":93},"end":{"line":5,"column":145}}})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isVisible : stack1),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":145},"end":{"line":5,"column":210}}})) != null ? stack1 : "")
    + "\">\n\n    <button class=\"btn-text trickle__btn js-trickle-btn "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":111}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._hasIcon : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":111},"end":{"line":7,"column":160}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":161},"end":{"line":7,"column":224}}})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._hasIcon : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"any","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":35,"column":14}}})) != null ? stack1 : "")
    + "\n    </button>\n\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"menu__header boxmenu__header\">\n    <div class=\"menu__header-inner boxmenu__header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":37,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"menu__title boxmenu__title\">\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "\n        <div class=\"menu__title-inner boxmenu__title-inner\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":124}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"menu__subtitle boxmenu__subtitle\">\n        <div class=\"menu__subtitle-inner boxmenu__subtitle-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.subtitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"menu__body boxmenu__body\">\n        <div class=\"menu__body-inner boxmenu__body-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":34,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"menu__instruction boxmenu__instruction\">\n        <div class=\"menu__instruction-inner boxmenu__instruction-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu__inner boxmenu__inner\">\n\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),(depth0 != null ? depth0.subtitle : depth0),(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.instruction : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu__item-container boxmenu__item-container\">\n    <div class=\"menu__item-container-inner boxmenu__item-container-inner js-children\" role=\"list\">\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"menu-item__image-container boxmenu-item__image-container\">\n    <img class=\"menu-item__image boxmenu-item__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\">\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"menu-item__title boxmenu-item__title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n\n        <div class=\"menu-item__title-inner boxmenu-item__title-inner accessible-text-block\" aria-hidden=\"true\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":36}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.a11y_aria_image||(depth0 && depth0.a11y_aria_image)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":58}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"menu-item__body boxmenu-item__body\">\n        <div class=\"menu-item__body-inner boxmenu-item__body-inner\">\n          "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"menu-item__duration boxmenu-item__duration\">\n        <div class=\"menu-item__duration-inner boxmenu-item__duration-inner\">\n          "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxMenu : stack1)) != null ? stack1.durationLabel : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":105}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":37,"column":106},"end":{"line":37,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxMenu : stack1)) != null ? stack1.durationLabel : stack1), depth0)) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"menu-item__inner boxmenu-item__inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"menu-item__details boxmenu-item__details\">\n    <div class=\"menu-item__details-inner boxmenu-item__details-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":65}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.duration : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"menu-item__progress boxmenu-item__progress js-menu-item-progress\">\n      </div>\n\n      <div class=\"menu-item__button-container boxmenu-item__button-container\">\n        <button class=\"btn-text menu-item__button boxmenu-item__button js-btn-click"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":83},"end":{"line":47,"column":119}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":119},"end":{"line":47,"column":153}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":167},"end":{"line":47,"column":239}}})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":47,"column":240},"end":{"line":47,"column":252}}}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":253},"end":{"line":47,"column":297}}})) != null ? stack1 : "")
    + ">\n          "
    + ((stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":48,"column":10},"end":{"line":48,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n";
},"useData":true});

return this["Handlebars"];

});