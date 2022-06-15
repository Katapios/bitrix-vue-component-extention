(function (exports,ui_vue3,main_core) {
	'use strict';

	var Item = {
	  props: {
	    position: {
	      "default": 0
	    },
	    text: {
	      "default": ''
	    }
	  },
	  // language=Vue
	  template: "\n\t\t<div class=\"tasklist-list-item\">{{position}}. {{text}}</div>\n\t"
	};

	var MyTaskList = {
	  components: {
	    Item: Item
	  },
	  data: function data() {
	    return {
	      list: []
	    };
	  },
	  methods: {
	    addNew: function addNew() {
	      var result = prompt(this.$Bitrix.Loc.getMessage('TASK_LIST_QUESTION'));
	      this.list.push(result);
	    },
	    close: function close() {
	      this.$Bitrix.Application.get().detachTemplate();
	    }
	  },
	  // language=Vue
	  template: "\n\t\t<div class=\"tasklist-list\">\n\t\t\t<div class=\"tasklist-list-title\">{{$Bitrix.Loc.getMessage('TASK_LIST_TODAY_TITLE')}}</div>\n\t\t\t<template v-for=\"(value, index) in list\" :key=\"index\">\n\t\t\t\t<Item :position=\"index+1\" :text=\"value\"/>\n\t\t\t</template>\n\t\t\t<template v-if=\"list.length <= 0\">\n\t\t\t  \t<div class=\"tasklist-list-empty\">{{$Bitrix.Loc.getMessage('TASK_LIST_LIST_EMPTY')}}</div>\n\t\t\t</template>\n\t\t\t<div class=\"tasklist-list-buttons\">\n\t\t\t\t<button @click=\"addNew\">{{$Bitrix.Loc.getMessage('TASK_LIST_ADD')}}</button>\n\t\t\t\t<button @click=\"close\">{{$Bitrix.Loc.getMessage('TASK_LIST_CLOSE')}}</button>\n\t\t\t</div>\n\t\t</div>\n\t"
	};

	function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

	function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

	var _application = /*#__PURE__*/new WeakMap();

	var TaskList = /*#__PURE__*/function () {
	  function TaskList(rootNode) {
	    babelHelpers.classCallCheck(this, TaskList);

	    _classPrivateFieldInitSpec(this, _application, {
	      writable: true,
	      value: void 0
	    });

	    this.rootNode = document.querySelector(rootNode);
	  }

	  babelHelpers.createClass(TaskList, [{
	    key: "start",
	    value: function start() {
	      var _this = this;

	      var button = main_core.Dom.create('button', {
	        text: main_core.Loc.getMessage('TASK_LIST_OPEN'),
	        events: {
	          click: function click() {
	            return _this.attachTemplate();
	          }
	        }
	      });
	      main_core.Dom.append(button, this.rootNode);
	    }
	  }, {
	    key: "attachTemplate",
	    value: function attachTemplate() {
	      var context = this;
	      babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
	        name: 'TaskList',
	        components: {
	          MyTaskList: MyTaskList
	        },
	        beforeCreate: function beforeCreate() {
	          this.$bitrix.Application.set(context);
	        },
	        template: '<MyTaskList/>'
	      }));
	      babelHelpers.classPrivateFieldGet(this, _application).mount(this.rootNode);
	    }
	  }, {
	    key: "detachTemplate",
	    value: function detachTemplate() {
	      if (babelHelpers.classPrivateFieldGet(this, _application)) {
	        babelHelpers.classPrivateFieldGet(this, _application).unmount();
	      }

	      this.start();
	    }
	  }]);
	  return TaskList;
	}();

	exports.TaskList = TaskList;

}((this.BX = this.BX || {}),BX.Vue3,BX));
//# sourceMappingURL=tasklist.bundle.js.map
