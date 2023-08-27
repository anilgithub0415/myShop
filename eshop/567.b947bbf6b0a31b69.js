"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[567],{5567:(k,v,l)=>{l.d(v,{l:()=>F});var g=l(8929),e=l(4650),p=l(2114),c=l(7807),u=l(6895),s=l(4006),b=l(6493),m=l(2011),f=l(4350),h=l(6173);function C(r,t){if(1&r){var i=e.EpF();e.TgZ(0,"tr",8)(1,"td",9)(2,"button",0),e.NdJ("click",function(){var a=e.CHM(i).$implicit,_=e.oxw();return e.KtG(_.editProduct(a))}),e._UZ(3,"img",10),e.qZA()(),e.TgZ(4,"td",11),e._uU(5),e.qZA(),e.TgZ(6,"td",11),e._uU(7),e.qZA()()}if(2&r){var o=t.$implicit;e.xp6(5),e.Oqu(o.userid),e.xp6(2),e.Oqu(o.display_name)}}var S=function(){function r(t,i,o,n,d,a){this.servCommon=t,this.servCategory=i,this.servProduct=o,this.servSellerCommission=n,this.servUser=d,this.authServ=a,this.seller_id_for_Addedit=new e.vpe,this.seller_id_for_Detail=new e.vpe,this.product_id_Selected=new e.vpe,this.param_currUserId=0,this.sellers=[],this.categoryList=[]}return r.prototype.ngOnInit=function(){var t=this;this.get_Users(),setTimeout(function(){t.get_Users_seller_Only(),t.getCategories(),t.eventsSubscription=t.events.subscribe(function(){return t.get_Users_seller_Only()})},2e3)},r.prototype.ngOnChanges=function(t){t.param_currUserId&&this.get_Users_seller_Only()},r.prototype.getCategories=function(){var t=this;this.servCategory.getCategorys().subscribe(function(i){t.categoryList=i})},r.prototype.ngOnDestroy=function(){this.eventsSubscription.unsubscribe()},r.prototype.get_Users=function(){var t=this;this.servUser.getUsers("").subscribe(function(i){t.users=i})},r.prototype.addProduct=function(){this.seller_id_for_Addedit.emit(0)},r.prototype.editProduct=function(t){this.seller_id_for_Detail.emit(void 0),this.seller_id_for_Addedit.emit(t.id)},r.prototype.selectProduct=function(t){this.seller_id_for_Addedit.emit(void 0),this.seller_id_for_Detail.emit(t.id)},r.prototype.get_Users_seller_Only=function(){var t=this;this.servUser.getUsers_Of_role("DBoy").subscribe(function(i){t.sellers=i.filter(function(o){return o.supplier_id===t.param_currUserId.id})})},r.\u0275fac=function(i){return new(i||r)(e.Y36(b.v),e.Y36(m.H),e.Y36(f.M),e.Y36(h.b),e.Y36(c.K),e.Y36(p.$))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-display-dboys"]],inputs:{param_currUserId:"param_currUserId",events:"events"},outputs:{seller_id_for_Addedit:"seller_id_for_Addedit",seller_id_for_Detail:"seller_id_for_Detail",product_id_Selected:"product_id_Selected"},features:[e.TTD],decls:13,vars:1,consts:[[1,"btn","btn-danger","btn-sm",2,"padding","0",3,"click"],["src","/assets/icon/add.png","alt","New Product",1,"btn-icon",2,"height","40px"],[1,"card"],[1,"card-body"],[1,"table","table-striped"],[1,"text-primary"],["scope","col"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"],[2,"width","140px"],["src","/assets/icon/Edit.png","alt","Edit",1,"btn-icon",2,"height","37px","width","40px"],[2,"width","140px","height","5px"]],template:function(i,o){1&i&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.addProduct()}),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"table",4)(5,"thead",5),e._UZ(6,"th",6),e.TgZ(7,"th"),e._uU(8,"userid"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"DBoy Name"),e.qZA()(),e.TgZ(11,"tbody"),e.YNc(12,C,8,2,"tr",7),e.qZA()()()()),2&i&&(e.xp6(12),e.Q6J("ngForOf",o.sellers))},dependencies:[u.sg]}),r}(),y=l(655),U=l(4704),A=l(7716);function D(r,t){1&r&&(e.TgZ(0,"span",17),e._uU(1," userid not provided. "),e.qZA())}function Z(r,t){1&r&&(e.TgZ(0,"span",17),e._uU(1," display_name not provided. "),e.qZA())}function T(r,t){1&r&&(e.TgZ(0,"span",17),e._uU(1," password not provided. "),e.qZA())}function I(r,t){1&r&&(e.TgZ(0,"span",17),e._uU(1," IsActive not provided. "),e.qZA())}var J=function(){function r(t,i,o,n,d,a,_,x,N,q){this.formBuilder=t,this.servProduct=i,this.servUser=o,this.servSellercommission=n,this.servCategory=d,this.servAuth=a,this.notify=_,this.authServ=x,this.location=N,this.router=q,this.selectedSeller_id=null,this.submitClicked="",this.param_currUserId=0,this.formSaved=new e.vpe,this.addedit_OPmode="",this.defaultDate="1987-06-30",this.isSubmitted=!1,this.isSubmitted_uploadform=!1,this.categoryList=[],this.sellerList=[]}return r.prototype.ngOnInit=function(){this.servAuth.currentUserValue&&(this.currentUser=this.servAuth.currentUserValue),this.myForm=this.formBuilder.group({id:[0],userid:[""],display_name:["",[s.kI.required,s.kI.min(3),s.kI.max(50)]],password:["",[s.kI.required,s.kI.min(5),s.kI.max(50)]],oldpassword:[],userrole:["DBoy"],IsActive:[],CREATEDBY_username:[],supplier_id:[],area_code:[this.authServ.currentUserValue.area_code]}),this.getSellerList()},r.prototype.ngOnChanges=function(t){return(0,y.mG)(this,void 0,void 0,function(){return(0,y.Jh)(this,function(i){switch(i.label){case 0:return t.param_Seller_id?(0==this.param_Seller_id?(this.addedit_OPmode="Add",this.myForm.reset()):this.addedit_OPmode="Edit",console.log("ngOnChanges checking param_Seller_id here aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),this.param_Seller_id?[4,this.get_Seller_Details()]:[3,2]):[3,2];case 1:i.sent(),this.myForm.patchValue({id:this.product_Selected.id,userid:this.product_Selected.userid,display_name:this.product_Selected.display_name,password:"NotEditing*123",oldpassword:"iamadmin",userrole:this.product_Selected.userrole,IsActive:this.product_Selected.IsActive,supplier_id:this.product_Selected.supplier_id}),i.label=2;case 2:return[2]}})})},r.prototype.getSellerList=function(){var t=this;this.servUser.getUsers_Of_role("DBoy").subscribe(function(i){t.sellerList=i})},r.prototype.get_Seller_Commission_Setting_notinuse=function(){var t=this;return new Promise(function(i,o){t.servSellercommission.get_Seller_Commission_Setting(t.param_Seller_id,!0).subscribe(function(n){t.product_Selected=n[0],i(!0)})})},r.prototype.get_Seller_Details=function(){var t=this;return new Promise(function(i,o){t.servUser.getUser(t.param_Seller_id).subscribe(function(n){t.product_Selected=n[0],console.log("userdetail:"+JSON.stringify(n[0])),i(!0)})})},Object.defineProperty(r.prototype,"errorControl",{get:function(){return this.myForm.controls},enumerable:!1,configurable:!0}),r.prototype.onSubmitClick=function(){this.submitClicked="Submit"},r.prototype.onCancelClick=function(){this.submitClicked="Cancel"},r.prototype.onSubmit=function(){var t=this;"Cancel"!=this.submitClicked?this.myForm.valid&&("Add"==this.addedit_OPmode?(this.myForm.patchValue({id:0}),this.myForm.patchValue({userrole:"DBoy"}),this.myForm.patchValue({CREATEDBY_username:this.currentUser.display_name}),this.myForm.patchValue({supplier_id:this.param_currUserId.id}),this.servUser.addUser(this.myForm.value).subscribe(function(i){console.log("trying to Add commission setting..."),t.formSaved.emit(!0),t.myForm.reset(),t.notify.showSuccess("Delievery-Boy Added Successfully","DBoy"),t.router.navigate(["/seller"])})):"Edit"==this.addedit_OPmode&&this.servUser.updateUser(this.myForm.value).subscribe(function(i){console.log("trying to update product..."),t.notify.showSuccess("Delievery-Boy Data Changed Successfully","DBoy"),t.location.back()})):this.location.back()},r.prototype.onSelectProduct=function(t){console.log("in onSelectProduct"),this.selectedSeller_id=t.id},r.\u0275fac=function(i){return new(i||r)(e.Y36(s.qu),e.Y36(f.M),e.Y36(c.K),e.Y36(h.b),e.Y36(m.H),e.Y36(p.$),e.Y36(U.g),e.Y36(p.$),e.Y36(u.Ye),e.Y36(A.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-dboy-add-edit"]],inputs:{param_currUserId:"param_currUserId",param_Seller_id:"param_Seller_id"},outputs:{formSaved:"formSaved"},features:[e.TTD],decls:33,vars:7,consts:[[1,"card"],[1,"card-body"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-6"],[1,"form-group"],["for","userid"],["type","text","formControlName","userid","id","userid",1,"form-control"],["class","error",4,"ngIf"],["for","display_name"],["type","text","formControlName","display_name","id","display_name",1,"form-control"],["for","password"],["type","password","formControlName","password","id","password",1,"form-control"],["for","IsActive"],["type","checkbox","id","IsActive",3,"formControlName"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"error"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),e._uU(7,"userid"),e.qZA(),e._UZ(8,"input",7),e.YNc(9,D,2,0,"span",8),e.qZA()(),e.TgZ(10,"div",4)(11,"div",5)(12,"label",9),e._uU(13,"display_name"),e.qZA(),e._UZ(14,"input",10),e.YNc(15,Z,2,0,"span",8),e.qZA()()(),e.TgZ(16,"div",3)(17,"div",4)(18,"div",5)(19,"label",11),e._uU(20,"password"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,T,2,0,"span",8),e.qZA()(),e.TgZ(23,"div",4)(24,"div",5)(25,"label",13),e._uU(26,"IsActive"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,I,2,0,"span",8),e.qZA()()(),e.TgZ(29,"button",15),e.NdJ("click",function(){return o.onSubmitClick()}),e._uU(30,"Submit"),e.qZA(),e.TgZ(31,"button",16),e.NdJ("click",function(){return o.onCancelClick()}),e._uU(32,"Cancel"),e.qZA()()()()),2&i&&(e.xp6(2),e.Q6J("formGroup",o.myForm),e.xp6(7),e.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.userid.errors?null:o.errorControl.userid.errors.required)),e.xp6(6),e.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.display_name.errors?null:o.errorControl.display_name.errors.required)),e.xp6(7),e.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.password.errors?null:o.errorControl.password.errors.required)),e.xp6(5),e.Q6J("formControlName","IsActive"),e.xp6(1),e.Q6J("ngIf",o.isSubmitted&&(null==o.errorControl.IsActive.errors?null:o.errorControl.IsActive.errors.required)),e.xp6(1),e.Q6J("disabled",!o.myForm.valid))},dependencies:[u.O5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.sg,s.u]}),r}();function O(r,t){if(1&r&&(e.TgZ(0,"option",8),e._uU(1),e.qZA()),2&r){var i=t.$implicit;e.Q6J("ngValue",i),e.xp6(1),e.Oqu(i.display_name)}}function Y(r,t){if(1&r){var i=e.EpF();e.TgZ(0,"div"),e._uU(1," ( Behalf )Select Seller "),e.TgZ(2,"select",5),e.NdJ("ngModelChange",function(d){e.CHM(i);var a=e.oxw();return e.KtG(a.currUser=d)}),e.TgZ(3,"option",6),e._uU(4,"Choose a seller"),e.qZA(),e.YNc(5,O,2,2,"option",7),e.qZA()()}if(2&r){var o=e.oxw();e.xp6(2),e.Q6J("ngModel",o.currUser),e.xp6(3),e.Q6J("ngForOf",o.sellers)}}function w(r,t){if(1&r){var i=e.EpF();e.TgZ(0,"app-display-dboys",9),e.NdJ("seller_id_for_Addedit",function(d){e.CHM(i);var a=e.oxw();return e.KtG(a.seller_Select_Changed_for_Addedit(d))})("seller_id_for_Detail",function(d){e.CHM(i);var a=e.oxw();return e.KtG(a.seller_Select_Changed_for_Detail(d))}),e.qZA()}if(2&r){var o=e.oxw();e.Q6J("events",o.eventsSubject.asObservable())("param_currUserId",o.currUser)}}function E(r,t){if(1&r){var i=e.EpF();e.TgZ(0,"app-dboy-add-edit",10),e.NdJ("formSaved",function(d){e.CHM(i);var a=e.oxw();return e.KtG(a.sellerformSave_Detected(d))}),e.qZA()}if(2&r){var o=e.oxw();e.Q6J("param_currUserId",o.currUser)("param_Seller_id",o.curr_Seller_id_for_Addedit)}}var F=function(){function r(t,i){this.authServ=t,this.servUser=i,this.eventsSubject=new g.xQ,this.sellers=[],this.authServ.currentUserValue&&(this.currUser=this.authServ.currentUserValue),"Admin"==this.authServ.currentUserValue.userrole&&(this.currUser={},this.get_Users_seller_Only())}return r.prototype.get_Users_seller_Only=function(){var t=this;this.servUser.getUsers_Of_role("Seller").subscribe(function(i){t.sellers=i})},r.prototype.emitEventToChild=function(){this.eventsSubject.next()},r.prototype.seller_Select_Changed_for_Addedit=function(t){this.curr_Seller_id_for_Addedit=t},r.prototype.seller_Select_Changed_for_Detail=function(t){this.curr_Prod_id_for_detail=t},r.prototype.sellerformSave_Detected=function(t){this.curr_Seller_id_for_Addedit=null,this.emitEventToChild()},r.prototype.onScroll=function(t){console.log("scrolling...")},r.\u0275fac=function(i){return new(i||r)(e.Y36(p.$),e.Y36(c.K))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-dboys"]],hostBindings:function(i,o){1&i&&e.NdJ("scroll",function(d){return o.onScroll(d)},!1,e.Jf7)},decls:6,vars:3,consts:[[4,"ngIf"],[1,"row"],[1,"col-12"],[3,"events","param_currUserId","seller_id_for_Addedit","seller_id_for_Detail",4,"ngIf"],[3,"param_currUserId","param_Seller_id","formSaved",4,"ngIf"],["id","pCategory","name","pCategory",1,"form-control",3,"ngModel","ngModelChange"],["value","","disabled",""],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"],[3,"events","param_currUserId","seller_id_for_Addedit","seller_id_for_Detail"],[3,"param_currUserId","param_Seller_id","formSaved"]],template:function(i,o){1&i&&(e.YNc(0,Y,6,2,"div",0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,w,1,2,"app-display-dboys",3),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,E,1,2,"app-dboy-add-edit",4),e.qZA()()),2&i&&(e.Q6J("ngIf","Admin"==o.authServ.currentUserValue.userrole),e.xp6(3),e.Q6J("ngIf",null==o.curr_Seller_id_for_Addedit&&o.currUser&&void 0!==o.currUser.id),e.xp6(2),e.Q6J("ngIf",null!=o.curr_Seller_id_for_Addedit))},dependencies:[u.sg,u.O5,s.YN,s.Kr,s.EJ,s.JJ,s.On,S,J]}),r}()}}]);