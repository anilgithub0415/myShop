"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[268],{5268:(w,_,m)=>{m.r(_),m.d(_,{ManageCommissionModule:()=>E});var l=m(6895),u=m(7716),y=m(5529),e=m(4650),f=m(6493),g=m(2011),h=m(4350),v=m(6173),a=m(7807),p=m(2114);function A(t,i){if(1&t){var o=e.EpF();e.TgZ(0,"tr",5)(1,"td",5),e._uU(2),e.qZA(),e.TgZ(3,"td",5),e._uU(4),e.qZA(),e.TgZ(5,"td",5),e._uU(6),e.qZA(),e.TgZ(7,"td",5),e._uU(8),e.qZA(),e.TgZ(9,"td",5),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",0),e.NdJ("click",function(){var Y=e.CHM(o).$implicit,I=e.oxw();return e.KtG(I.editProduct(Y))}),e._UZ(13,"img",6),e.qZA()()()}if(2&t){var n=i.$implicit,r=e.oxw();e.xp6(2),e.Oqu(n.id),e.xp6(2),e.Oqu(r.servCommon.GetDisplayNameByKey(r.users,"id",n.seller_id,"display_name")),e.xp6(2),e.Oqu(n.commission_percent),e.xp6(2),e.Oqu(n.credit_limit),e.xp6(2),e.Oqu(n.consumed_credit)}}var Z=function(){function t(i,o,n,r,d,c){this.servCommon=i,this.servCategory=o,this.servProduct=n,this.servSellerCommission=r,this.servUser=d,this.authServ=c,this.product_id_for_Addedit=new e.vpe,this.product_id_for_Detail=new e.vpe,this.product_id_Selected=new e.vpe,this.categoryList=[]}return t.prototype.ngOnInit=function(){var i=this;this.get_Users(),setTimeout(function(){i.get_seller_commission_percents(),i.getCategories(),i.eventsSubscription=i.events.subscribe(function(){return i.get_seller_commission_percents()})},2e3)},t.prototype.getCategories=function(){var i=this;this.servCategory.getCategorys().subscribe(function(o){i.categoryList=o})},t.prototype.ngOnDestroy=function(){this.eventsSubscription.unsubscribe()},t.prototype.get_Users=function(){var i=this;this.servUser.getUsers().subscribe(function(o){i.users=o})},t.prototype.addProduct=function(){this.product_id_for_Addedit.emit(0)},t.prototype.editProduct=function(i){this.product_id_for_Detail.emit(void 0),this.product_id_for_Addedit.emit(i.seller_id)},t.prototype.selectProduct=function(i){this.product_id_for_Addedit.emit(void 0),this.product_id_for_Detail.emit(i.id)},t.prototype.get_products_notinuse=function(){var i=this;this.servProduct.getProducts(this.authServ.currentUserValue.id).subscribe(function(o){i.Seller_Commission_Setting=o,console.log("aaaaaaa:"+JSON.stringify(i.authServ.currentUserValue.id))})},t.prototype.get_seller_commission_percents=function(){var i=this;this.servSellerCommission.get_Seller_Commission_Setting(this.authServ.currentUserValue.id,!1).subscribe(function(o){i.Seller_Commission_Setting=o,console.log("aaaaaaa:"+JSON.stringify(i.authServ.currentUserValue.id))})},t.\u0275fac=function(o){return new(o||t)(e.Y36(f.v),e.Y36(g.H),e.Y36(h.M),e.Y36(v.b),e.Y36(a.K),e.Y36(p.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-display-commision-percents"]],inputs:{events:"events"},outputs:{product_id_for_Addedit:"product_id_for_Addedit",product_id_for_Detail:"product_id_for_Detail",product_id_Selected:"product_id_Selected"},decls:18,vars:1,consts:[[1,"btn","btn-danger","btn-sm",2,"padding","0",3,"click"],["src","/assets/icon/add.png","alt","New Product",1,"btn-icon",2,"height","40px"],[1,"table","table-striped"],["scope","col"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"],["src","/assets/icon/Edit.png","alt","Edit",1,"btn-icon",2,"height","20px"]],template:function(o,n){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return n.addProduct()}),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"table",2)(3,"thead")(4,"tr")(5,"th"),e._uU(6,"ID"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Seller"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"commission_percent"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"credit_limit"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"consumed_credit"),e.qZA(),e._UZ(15,"th",3),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,A,14,5,"tr",4),e.qZA()()),2&o&&(e.xp6(17),e.Q6J("ngForOf",n.Seller_Commission_Setting))},dependencies:[l.sg]}),t}(),C=m(655),s=m(4719),S=m(1322);function b(t,i){1&t&&(e.TgZ(0,"span",13),e._uU(1," commission_percent not provided. "),e.qZA())}function P(t,i){1&t&&(e.TgZ(0,"span",13),e._uU(1," credit_limit not provided. "),e.qZA())}var T=function(t){return{"disabled-select":t}},U=function(){function t(i,o,n,r,d,c){this.formBuilder=i,this.servProduct=o,this.servUser=n,this.servSellercommission=r,this.servCategory=d,this.authServ=c,this.selectedSeller_id=null,this.formSaved=new e.vpe,this.addedit_OPmode="",this.defaultDate="1987-06-30",this.isSubmitted=!1,this.isSubmitted_uploadform=!1,this.categoryList=[],this.sellerList=[]}return t.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({seller_id:[""],seller_name:["",[s.kI.required,s.kI.min(3),s.kI.max(50)]],commission_percent:["",[s.kI.min(0),s.kI.max(50)]],credit_limit:["",[s.kI.min(1e3),s.kI.max(1e4)]]}),this.getSellerList()},t.prototype.ngOnChanges=function(i){return(0,C.mG)(this,void 0,void 0,function(){return(0,C.Jh)(this,function(o){switch(o.label){case 0:return i.param_Product_id?(0==this.param_Product_id?(this.addedit_OPmode="Add",this.myForm.reset()):this.addedit_OPmode="Edit",this.param_Product_id?[4,this.get_Seller_Commission_Setting()]:[3,2]):[3,2];case 1:o.sent(),this.myForm.patchValue({seller_id:this.product_Selected.seller_id,seller_name:this.product_Selected.seller_name,commission_percent:this.product_Selected.commission_percent,credit_limit:this.product_Selected.credit_limit}),o.label=2;case 2:return[2]}})})},t.prototype.getSellerList=function(){var i=this;this.servUser.getUsers_Of_role("Seller").subscribe(function(o){i.sellerList=o})},t.prototype.get_Seller_Commission_Setting=function(){var i=this;return new Promise(function(o,n){i.servSellercommission.get_Seller_Commission_Setting(i.param_Product_id,!0).subscribe(function(r){i.product_Selected=r[0],o(!0)})})},Object.defineProperty(t.prototype,"errorControl",{get:function(){return this.myForm.controls},enumerable:!1,configurable:!0}),t.prototype.onSubmit=function(){var i=this;"Add"==this.addedit_OPmode?(this.myForm.patchValue({seller_id:this.selectedSeller_id}),this.servSellercommission.update_Seller_Commission_Setting(this.myForm.value).subscribe(function(o){console.log("trying to Add commission setting..."),i.formSaved.emit(!0),i.myForm.reset(),console.log("update product done...")})):"Edit"==this.addedit_OPmode&&this.servSellercommission.update_Seller_Commission_Setting(this.myForm.value).subscribe(function(o){console.log("trying to update product..."),i.formSaved.emit(!0),i.myForm.reset(),console.log("update product done...")})},t.prototype.onSelectProduct=function(i){console.log("in onSelectProduct"),this.selectedSeller_id=i.id},t.\u0275fac=function(o){return new(o||t)(e.Y36(s.qu),e.Y36(h.M),e.Y36(a.K),e.Y36(v.b),e.Y36(g.H),e.Y36(p.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-commision-percents-add-edit"]],inputs:{param_Product_id:"param_Product_id"},outputs:{formSaved:"formSaved"},features:[e.TTD],decls:22,vars:7,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"'col-12"],[1,"form-group"],["for","product_name"],["formControlName","seller_name","id","seller_name","bindLabel","display_name",1,"form-control",3,"items","ngClass","change"],[1,"col-6"],["for","commission_percent"],["type","number","formControlName","commission_percent","id","commission_percent",1,"form-control"],["class","error",4,"ngIf"],["for","credit_limit"],["type","number","formControlName","credit_limit","id","credit_limit",1,"form-control"],["type","submit",1,"btn","btn-primary"],[1,"error"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Seller Name"),e.qZA(),e.TgZ(6,"ng-select",5),e.NdJ("change",function(d){return n.onSelectProduct(d)}),e.qZA()()()(),e.TgZ(7,"div",1)(8,"div",6)(9,"div",3)(10,"label",7),e._uU(11,"commission_percent"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,b,2,0,"span",9),e.qZA()(),e.TgZ(14,"div",6)(15,"div",3)(16,"label",10),e._uU(17,"credit_limit"),e.qZA(),e._UZ(18,"input",11),e.YNc(19,P,2,0,"span",9),e.qZA()()(),e.TgZ(20,"button",12),e._uU(21,"Submit"),e.qZA()()),2&o&&(e.Q6J("formGroup",n.myForm),e.xp6(6),e.Q6J("items",n.sellerList)("ngClass",e.VKq(5,T,"Edit"===n.addedit_OPmode)),e.xp6(7),e.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.commission_percent.errors?null:n.errorControl.commission_percent.errors.required)),e.xp6(6),e.Q6J("ngIf",n.isSubmitted&&(null==n.errorControl.credit_limit.errors?null:n.errorControl.credit_limit.errors.required)))},dependencies:[l.mk,l.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,S.w9],styles:[".disabled-select[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}"]}),t}();function q(t,i){if(1&t){var o=e.EpF();e.TgZ(0,"div",1)(1,"app-commision-percents-add-edit",4),e.NdJ("formSaved",function(d){e.CHM(o);var c=e.oxw();return e.KtG(c.productformSave_Detected(d))}),e.qZA()()}if(2&t){var n=e.oxw();e.xp6(1),e.Q6J("param_Product_id",n.curr_Prod_id_for_Addedit)}}var D=function(){function t(){this.eventsSubject=new y.xQ}return t.prototype.emitEventToChild=function(){this.eventsSubject.next()},t.prototype.Prod_Select_Changed_for_Addedit=function(i){this.curr_Prod_id_for_Addedit=i},t.prototype.Prod_Select_Changed_for_Detail=function(i){this.curr_Prod_id_for_detail=i},t.prototype.productformSave_Detected=function(i){console.log("in child formSaved detected m in manage seller"),this.curr_Prod_id_for_Addedit=null,this.emitEventToChild()},t.prototype.onScroll=function(i){console.log("scrolling...")},t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-commission-setting"]],hostBindings:function(o,n){1&o&&e.NdJ("scroll",function(d){return n.onScroll(d)},!1,e.Jf7)},decls:4,vars:2,consts:[[1,"row"],[1,"col-12"],[3,"events","product_id_for_Addedit","product_id_for_Detail"],["class","col-12",4,"ngIf"],[3,"param_Product_id","formSaved"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-display-commision-percents",2),e.NdJ("product_id_for_Addedit",function(d){return n.Prod_Select_Changed_for_Addedit(d)})("product_id_for_Detail",function(d){return n.Prod_Select_Changed_for_Detail(d)}),e.qZA()(),e.YNc(3,q,2,1,"div",3),e.qZA()),2&o&&(e.xp6(2),e.Q6J("events",n.eventsSubject.asObservable()),e.xp6(1),e.Q6J("ngIf",null!=n.curr_Prod_id_for_Addedit))},dependencies:[l.O5,Z,U]}),t}(),O=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-manage-commission"]],decls:7,vars:0,consts:[[1,"row"],[1,"col-12"],["routerLink","commission_setting"],["routerLink","seller_commission"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._uU(3,"commission_setting"),e.qZA(),e.TgZ(4,"a",3),e._uU(5,"seller_commission"),e.qZA(),e._UZ(6,"router-outlet"),e.qZA()())},dependencies:[u.lC,u.rH]}),t}(),F=m(5474);function N(t,i){if(1&t&&(e.TgZ(0,"tr",4)(1,"td",4),e._uU(2),e.qZA(),e.TgZ(3,"td",4),e._uU(4),e.qZA(),e.TgZ(5,"td",4),e._uU(6),e.qZA()()),2&t){var o=i.$implicit,n=e.oxw();e.xp6(2),e.Oqu(n.servCommon.GetDisplayNameByKey(n.users,"id",o.seller_id,"display_name")),e.xp6(2),e.hij(" ",o.EffectiveAmountSum," "),e.xp6(2),e.hij(" ",o.commission_applicableSum," ")}}var M=[{path:"",component:O,children:[{path:"",redirectTo:"commission_setting",pathMatch:"full"},{path:"commission_setting",component:D},{path:"seller_commission",component:function(){function t(i,o,n,r){var d=this;this.servOrder=i,this.servAuth=o,this.servUser=n,this.servCommon=r,this.servAuth.currentUser.subscribe(function(c){return d.currentUser=c})}return t.prototype.ngOnInit=function(){this.get_Users(),this.Get_Sellers_UNPAID_Commission_Summary()},t.prototype.Get_Sellers_UNPAID_Commission_Summary=function(){var i=this;this.servOrder.Get_Sellers_UNPAID_Commission_Summary("Complete").subscribe(function(o){i.Sellers_UNPAID_Commission_Summary=o})},t.prototype.get_Users=function(){var i=this;this.servUser.getUsers().subscribe(function(o){i.users=o})},t.\u0275fac=function(o){return new(o||t)(e.Y36(F.E),e.Y36(p.$),e.Y36(a.K),e.Y36(f.v))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-seller-commission"]],decls:13,vars:1,consts:[[1,"row"],[1,"col-6"],[1,"table","table-striped"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead")(4,"tr")(5,"th"),e._uU(6,"Seller"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"EffectiveAmount"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"commission_applicable"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,N,7,3,"tr",3),e.qZA()()()()),2&o&&(e.xp6(12),e.Q6J("ngForOf",n.Sellers_UNPAID_Commission_Summary))},dependencies:[l.sg]}),t}()}]}],x=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(M),u.Bz]}),t}(),E=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,s.u5,s.UX,S.A0,x]}),t}()}}]);