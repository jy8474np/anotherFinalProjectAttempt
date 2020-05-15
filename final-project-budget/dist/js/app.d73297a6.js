(function(e){function t(t){for(var i,a,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NewIncomeForm",{on:{"income-added":e.newIncomeAdded}}),n("NewExpenseForm",{on:{"expense-added":e.newExpenseAdded}}),n("NewSavingForm",{on:{"saving-added":e.newSavingAdded}}),n("LedgerTable",{attrs:{incomeItems:e.incomeItems,expenseItems:e.expenseItems,savingItems:e.savingItems},on:{"delete-income":e.incomeDeleted,"delete-expense":e.expenseDeleted,"delete-saving":e.savingDeleted}})],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.length,expression:"errors.length"}],staticClass:"alert alert-danger"},e._l(e.errors,(function(t){return n("li",[e._v(e._s(t))])})),0),n("div",{staticClass:"card add-income m-2 p-2",attrs:{id:"income"}},[n("h2",{staticClass:"card-title"},[e._v("Income")]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"incomeOption"}},[e._v("Select Income Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.incomeOption,expression:"incomeOption"}],staticClass:"form-control",attrs:{id:"incomeOption"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.incomeOption=t.target.multiple?n:n[0]}}},e._l(e.incomeOptions,(function(t){return n("option",{domProps:{value:t}},[e._v(" "+e._s(t))])})),0),n("p"),n("label",{staticClass:"form-label",attrs:{for:"incomeAmount"}},[e._v("Enter Income Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.incomeAmount,expression:"incomeAmount"}],staticClass:"form-control",attrs:{id:"incomeAmount",type:"number",min:"0"},domProps:{value:e.incomeAmount},on:{input:function(t){t.target.composing||(e.incomeAmount=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"},on:{click:e.addIncome}},[e._v("Add Income")])])])},r=[],l={name:"NewIncomeForm",data:function(){return{incomeOptions:["Alimony/Child Support","Disability/Social Security","Dividends/Investments","Salary","Other"],incomeOption:"",incomeAmount:"",incomeItems:[],errors:[]}},methods:{addIncome:function(){if(this.errors=[],this.incomeOption&&this.incomeAmount){var e={description:this.incomeOption,amount:this.incomeAmount};this.$emit("income-added",e),this.incomeItems.push(e),this.incomeOption="",this.incomeAmount=""}else this.errors.push("Both an Income Option selection and an Income Amount are required.")}}},c=l,d=n("2877"),u=Object(d["a"])(c,a,r,!1,null,null,null),m=u.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.length,expression:"errors.length"}],staticClass:"alert alert-danger"},e._l(e.errors,(function(t){return n("li",[e._v(e._s(t))])})),0),n("div",{staticClass:"card add-expense m-2 p-2",attrs:{id:"expense"}},[n("h2",{staticClass:"card-title"},[e._v("Expense")]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"expenseOption"}},[e._v("Select Expense Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.expenseOption,expression:"expenseOption"}],staticClass:"form-control",attrs:{id:"expenseOption"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.expenseOption=t.target.multiple?n:n[0]}}},e._l(e.expenseOptions,(function(t){return n("option",{domProps:{value:t}},[e._v(" "+e._s(t))])})),0),n("p"),n("label",{staticClass:"form-label",attrs:{for:"expenseAmount"}},[e._v("Enter Expense Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expenseAmount,expression:"expenseAmount"}],staticClass:"form-control",attrs:{id:"expenseAmount",type:"number",min:"0"},domProps:{value:e.expenseAmount},on:{input:function(t){t.target.composing||(e.expenseAmount=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"},on:{click:e.addExpense}},[e._v("Add Expense")])])])},v=[],f={name:"NewExpenseForm",data:function(){return{expenseOptions:["Auto","Cable/Internet","Entertainment","Groceries","Insurance","Loans","Pet","Phone","Utilities","Other"],expenseOption:"",expenseAmount:"",expenseItems:[],errors:[]}},methods:{addExpense:function(){if(this.errors=[],this.expenseOption&&this.expenseAmount){var e={description:this.expenseOption,amount:this.expenseAmount};this.$emit("expense-added",e),this.expenseItems.push(e),this.expenseOption="",this.expenseAmount=""}else this.errors.push("Both an Expense Option selection and an Expense Amount are required.")}}},h=f,g=Object(d["a"])(h,p,v,!1,null,null,null),A=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.length,expression:"errors.length"}],staticClass:"alert alert-danger"},e._l(e.errors,(function(t){return n("li",[e._v(e._s(t))])})),0),n("div",{staticClass:"card add-saving m-2 p-2",attrs:{id:"saving"}},[n("h2",{staticClass:"card-title"},[e._v("Saving")]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"savingOption"}},[e._v("Select Saving Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.savingOption,expression:"savingOption"}],staticClass:"form-control",attrs:{id:"savingOption"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.savingOption=t.target.multiple?n:n[0]}}},e._l(e.savingOptions,(function(t){return n("option",{domProps:{value:t}},[e._v(" "+e._s(t))])})),0),n("p"),n("label",{staticClass:"form-label",attrs:{for:"savingAmount"}},[e._v("Enter Saving Amount")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.savingAmount,expression:"savingAmount"}],staticClass:"form-control",attrs:{id:"savingAmount",type:"number",min:"0"},domProps:{value:e.savingAmount},on:{input:function(t){t.target.composing||(e.savingAmount=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"},on:{click:e.addSaving}},[e._v("Add Saving")])])])},b=[],w={name:"NewSavingForm",data:function(){return{savingOptions:["Checking","Investments","Savings","Retirement","Other"],savingOption:"",savingAmount:"",savingItems:[],errors:[]}},methods:{addSaving:function(){if(this.errors=[],this.savingOption&&this.savingAmount){var e={description:this.savingOption,amount:this.savingAmount};this.$emit("saving-added",e),this.savingItems.push(e),this.savingOption="",this.savingAmount=""}else this.errors.push("Both an Saving Option selection and a Saving Amount are required.")}}},_=w,O=Object(d["a"])(_,x,b,!1,null,null,null),I=O.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card ledger  m-2 p-2"},[n("h2",{staticClass:"card-title"},[e._v("Ledger")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(e.editTable)?e._i(e.editTable,null)>-1:e.editTable},on:{change:function(t){var n=e.editTable,i=t.target,s=!!i.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);i.checked?a<0&&(e.editTable=n.concat([o])):a>-1&&(e.editTable=n.slice(0,a).concat(n.slice(a+1)))}else e.editTable=s}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[e._v("Enable Ledger Editing")])]),n("div",{attrs:{id:"ledger-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",{attrs:{id:"leger-head"}},[e._v("Description")]),n("th",{attrs:{id:"leger-head"}},[e._v("Amount")]),n("th",{directives:[{name:"show",rawName:"v-show",value:e.editTable,expression:"editTable"}],attrs:{id:"leger-head"}},[e._v("Remove")])]),e._l(e.incomeItems,(function(t){return n("IncomeRow",{attrs:{id:"income",income:t,edit:e.editTable},on:{"delete-income":e.incomeDeleted}})})),e._l(e.expenseItems,(function(t){return n("ExpenseRow",{attrs:{id:"expense",expense:t,edit:e.editTable},on:{"delete-expense":e.expenseDeleted}})})),e._l(e.savingItems,(function(t){return n("SavingRow",{attrs:{id:"saving",saving:t,edit:e.editTable},on:{"delete-saving":e.savingDeleted}})}))],2)])])])},C=[],E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("td",{attrs:{id:"income"}},[e._v(e._s(e.income.description))]),i("td",{attrs:{id:"income"}},[e._v("$"+e._s(e.income.amount))]),i("td",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[i("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(t){return e.deleteIncome(e.income)}}})])])},S=[],B=(n("a4d3"),n("e01a"),n("99af"),{name:"IncomeRow",props:{income:Object,edit:Boolean},methods:{deleteIncome:function(e){confirm("Are you sure you want to remove ".concat(e.description," for $").concat(e.amount,"?"))&&this.$emit("delete-income",e)}}}),j=B,N=(n("8d4c"),Object(d["a"])(j,E,S,!1,null,null,null)),k=N.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("td",{attrs:{id:"expense"}},[e._v(e._s(e.expense.description))]),i("td",{attrs:{id:"expense"}},[e._v("$"+e._s(e.expense.amount))]),i("td",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[i("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(t){return e.deleteExpense(e.expense)}}})])])},T=[],D={name:"ExpenseRow",props:{expense:Object,edit:Boolean},methods:{deleteExpense:function(e){confirm("Are you sure you want to remove ".concat(e.description," for $").concat(e.amount,"?"))&&this.$emit("delete-expense",e)}}},P=D,$=(n("eba9"),Object(d["a"])(P,R,T,!1,null,null,null)),F=$.exports,H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("td",{attrs:{id:"saving"}},[e._v(e._s(e.saving.description))]),i("td",{attrs:{id:"saving"}},[e._v("$"+e._s(e.saving.amount))]),i("td",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[i("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(t){return e.deleteSaving(e.saving)}}})])])},U=[],V={name:"SavingRow",props:{saving:Object,edit:Boolean},methods:{deleteSaving:function(e){confirm("Are you sure you want to remove ".concat(e.description," for $").concat(e.amount,"?"))&&this.$emit("delete-saving",e)}}},L=V,Y=(n("c7e5"),Object(d["a"])(L,H,U,!1,null,null,null)),z=Y.exports,J={name:"LedgerTable",components:{IncomeRow:k,ExpenseRow:F,SavingRow:z},data:function(){return{editTable:!1}},props:{incomeItems:Array,expenseItems:Array,savingItems:Array},methods:{incomeDeleted:function(e){this.$emit("delete-income",e)},expenseDeleted:function(e){this.$emit("delete-expense",e)},savingDeleted:function(e){this.$emit("delete-saving",e)}}},Q=J,W=(n("a7e2"),Object(d["a"])(Q,y,C,!1,null,null,null)),K=W.exports,M={name:"App",components:{NewIncomeForm:m,NewExpenseForm:A,NewSavingForm:I,LedgerTable:K},data:function(){return{incomeItems:[],expenseItems:[],savingItems:[]}},methods:{newIncomeAdded:function(e){this.incomeItems.push(e)},newExpenseAdded:function(e){this.expenseItems.push(e)},newSavingAdded:function(e){this.savingItems.push(e)},incomeDeleted:function(e){this.incomeItems=this.income},expenseDeleted:function(e){this.expenseItems=this.expense},savingDeleted:function(e){this.savingItems=this.saving}}},X=M,G=Object(d["a"])(X,s,o,!1,null,null,null),Z=G.exports,q=n("5f5b"),ee=n("bc3a"),te=n.n(ee),ne="/api/record",ie={getAllRecords:function(){return te.a.get(ne).then((function(e){return e.data}))}};n("f9e3"),n("2dd8");i["default"].use(q["a"]),i["default"].config.productionTip=!1,i["default"].prototype.$record_api=ie,new i["default"]({render:function(e){return e(Z)}}).$mount("#app")},"5a15":function(e,t,n){},"8d4c":function(e,t,n){"use strict";var i=n("f698"),s=n.n(i);s.a},a7e2:function(e,t,n){"use strict";var i=n("de96"),s=n.n(i);s.a},c7e5:function(e,t,n){"use strict";var i=n("fb50"),s=n.n(i);s.a},de96:function(e,t,n){},eba9:function(e,t,n){"use strict";var i=n("5a15"),s=n.n(i);s.a},ed3a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJtSURBVEiJrVa7jhNBEKyenbXXD9nGAQ9ZEJyEEAEisAQSIgDJCV9AzA/wBXwAEX8CEhkxKQkBOgnEYc7c+XSyDZw5v9idboL1jsc+e3cDJvJO93R1VdeMTCKCtPXh08H1WqnyWfu6BAC93skyIh/NPHzU6bTP0s7r1OoAfKWfa1+XJpPZWwamQvSeWEogeuUV/Q6A17kB+j//PPCg7rl79VrlvvY0VLVcIlKiSVWiKCzM5gsExcLdr9+HIzdfFPdu3rj8LfmmRKKT0fntchDsK0WpjIajMzBzWsqcIu/W3t6lHgCoZFeBXmQVz7kC8czTVd3l8n395H9UBwAQLICdgUBCifVKpcEsYN7tPEU0JsLEYm3YVB30hsYt5spmjMHR0SmIVnvMDKWsEObxwzs+AFvURlb5qwkOh78wHp/bYLd7jH7/1H4PBiMcHh6750du8W0AYMOh210YWkIQEYShDWOx+AtjjHt8sFnvAoARntmgUhDZbUlmhuetlcgGEIHVRClKHeiG/hBgmAkAYfu2EFHqpTJmHYCIshkwi736sUTpDDzPc7vLIRHI2iRmsBtgk4HkmQEEfRtUlDlkF0Ahh0TGmB8rAJU5ZNdFbDgbQAHd5HdyY7eBiAhEZI2BzsNAIrFvefJMbJPJGF7muC7S2TY1pvhlBaB2Mkjs60pULk+zAdrta1Pm2JuJRNusymw2Gfxut9vhZt5FF8XdRQDg+xrVahla62WHARqNOgCgUCig2WwgCIpxE1v03wkQRdF+wqDZrNtZtFpX0GjUbOet1lXLgEje5QaYRdGzxXzRz/pLs1whIG8iRC+3Bf8BrBgqbHoyPEEAAAAASUVORK5CYII="},f698:function(e,t,n){},fb50:function(e,t,n){}});
//# sourceMappingURL=app.d73297a6.js.map