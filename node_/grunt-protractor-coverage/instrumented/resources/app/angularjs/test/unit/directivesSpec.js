
var __cov_Kas1b7$Ud7omiqmDud2qAg = (Function('return this'))();
if (!__cov_Kas1b7$Ud7omiqmDud2qAg.__coverage__) { __cov_Kas1b7$Ud7omiqmDud2qAg.__coverage__ = {}; }
__cov_Kas1b7$Ud7omiqmDud2qAg = __cov_Kas1b7$Ud7omiqmDud2qAg.__coverage__;
if (!(__cov_Kas1b7$Ud7omiqmDud2qAg['resources/app/angularjs/test/unit/directivesSpec.js'])) {
   __cov_Kas1b7$Ud7omiqmDud2qAg['resources/app/angularjs/test/unit/directivesSpec.js'] = {"path":"resources/app/angularjs/test/unit/directivesSpec.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":2,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":13}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":45}}},"3":{"name":"(anonymous_3)","line":10,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":62}}},"4":{"name":"(anonymous_4)","line":16,"loc":{"start":{"line":16,"column":42},"end":{"line":16,"column":54}}},"5":{"name":"(anonymous_5)","line":23,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":28}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":30,"column":5}},"2":{"start":{"line":5,"column":1},"end":{"line":5,"column":31}},"3":{"start":{"line":7,"column":1},"end":{"line":29,"column":4}},"4":{"start":{"line":8,"column":2},"end":{"line":8,"column":30}},"5":{"start":{"line":10,"column":2},"end":{"line":14,"column":6}},"6":{"start":{"line":11,"column":3},"end":{"line":11,"column":29}},"7":{"start":{"line":12,"column":3},"end":{"line":12,"column":22}},"8":{"start":{"line":13,"column":3},"end":{"line":13,"column":22}},"9":{"start":{"line":16,"column":2},"end":{"line":28,"column":5}},"10":{"start":{"line":17,"column":3},"end":{"line":17,"column":58}},"11":{"start":{"line":18,"column":3},"end":{"line":18,"column":23}},"12":{"start":{"line":20,"column":3},"end":{"line":20,"column":22}},"13":{"start":{"line":21,"column":3},"end":{"line":21,"column":46}},"14":{"start":{"line":23,"column":3},"end":{"line":25,"column":6}},"15":{"start":{"line":24,"column":4},"end":{"line":24,"column":23}},"16":{"start":{"line":27,"column":3},"end":{"line":27,"column":46}}},"branchMap":{}};
}
__cov_Kas1b7$Ud7omiqmDud2qAg = __cov_Kas1b7$Ud7omiqmDud2qAg['resources/app/angularjs/test/unit/directivesSpec.js'];
__cov_Kas1b7$Ud7omiqmDud2qAg.s['1']++;(function(){'use strict';__cov_Kas1b7$Ud7omiqmDud2qAg.f['1']++;__cov_Kas1b7$Ud7omiqmDud2qAg.s['2']++;beforeEach(module('todomvc'));__cov_Kas1b7$Ud7omiqmDud2qAg.s['3']++;describe('todoFocus directive',function(){__cov_Kas1b7$Ud7omiqmDud2qAg.f['2']++;__cov_Kas1b7$Ud7omiqmDud2qAg.s['4']++;var scope,compile,browser;__cov_Kas1b7$Ud7omiqmDud2qAg.s['5']++;beforeEach(inject(function($rootScope,$compile,$browser){__cov_Kas1b7$Ud7omiqmDud2qAg.f['3']++;__cov_Kas1b7$Ud7omiqmDud2qAg.s['6']++;scope=$rootScope.$new();__cov_Kas1b7$Ud7omiqmDud2qAg.s['7']++;compile=$compile;__cov_Kas1b7$Ud7omiqmDud2qAg.s['8']++;browser=$browser;}));__cov_Kas1b7$Ud7omiqmDud2qAg.s['9']++;it('should focus on truthy expression',function(){__cov_Kas1b7$Ud7omiqmDud2qAg.f['4']++;__cov_Kas1b7$Ud7omiqmDud2qAg.s['10']++;var el=angular.element('<input todo-focus="focus">');__cov_Kas1b7$Ud7omiqmDud2qAg.s['11']++;scope.focus=false;__cov_Kas1b7$Ud7omiqmDud2qAg.s['12']++;compile(el)(scope);__cov_Kas1b7$Ud7omiqmDud2qAg.s['13']++;expect(browser.deferredFns.length).toBe(0);__cov_Kas1b7$Ud7omiqmDud2qAg.s['14']++;scope.$apply(function(){__cov_Kas1b7$Ud7omiqmDud2qAg.f['5']++;__cov_Kas1b7$Ud7omiqmDud2qAg.s['15']++;scope.focus=true;});__cov_Kas1b7$Ud7omiqmDud2qAg.s['16']++;expect(browser.deferredFns.length).toBe(1);});});}());
