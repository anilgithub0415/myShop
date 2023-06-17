"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[865],{865:(K,v,a)=>{a.r(v),a.d(v,{ManagePromotionsModule:()=>G});var m=a(6895),p=a(7716),t=a(4650),y=function(){function o(){}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-manage-promotions"]],decls:5,vars:0,consts:[["routerLink","Product-Promotions","type","button",1,"btn","btn-outline","btn-sm"],["routerLink","Order-Promotions","type","button",1,"btn","btn-outline","btn-sm"]],template:function(r,i){1&r&&(t.TgZ(0,"a",0),t._uU(1,"Product-Promotions"),t.qZA(),t.TgZ(2,"a",1),t._uU(3,"Order-Promotions"),t.qZA(),t._UZ(4,"router-outlet"))},dependencies:[p.lC,p.rH]}),o}(),b=a(5529),C=a(6493),l=a(2011),_=a(4350),f=a(6532),h=a(2114),A=a(7807);function T(o,e){if(1&o){var r=t.EpF();t.TgZ(0,"tr",5)(1,"td")(2,"button",0),t.NdJ("click",function(){var u=t.CHM(r).$implicit,P=t.oxw();return t.KtG(P.editProduct(u))}),t._UZ(3,"img",6),t.qZA()(),t.TgZ(4,"td",5),t._uU(5),t.qZA()()}if(2&o){var i=e.$implicit;t.xp6(5),t.Oqu(i.promotionName)}}var Z=function(){function o(e,r,i,d,s,u){this.servCommon=e,this.servCategory=r,this.servProduct=i,this.servPromoProduct=d,this.authServ=s,this.servUser=u,this.promoproduct_id_for_Addedit=new t.vpe,this.product_id_for_Detail=new t.vpe,this.product_id_Selected=new t.vpe,this.categoryList=[],this.sellerList=[]}return o.prototype.ngOnInit=function(){var e=this;this.getProductList(),this.get_order_promotions(),this.getSellerList(),this.getCategories(),this.eventsSubscription=this.events.subscribe(function(){return e.get_order_promotions()})},o.prototype.getCategories=function(){var e=this;this.servCategory.getCategorys().subscribe(function(r){e.categoryList=r})},o.prototype.getSellerList=function(){var e=this;this.servUser.getUsers_Of_role("Seller").subscribe(function(r){e.sellerList=r})},o.prototype.ngOnDestroy=function(){this.eventsSubscription.unsubscribe()},o.prototype.addProduct=function(){this.promoproduct_id_for_Addedit.emit(0)},o.prototype.editProduct=function(e){this.product_id_for_Detail.emit(void 0),this.promoproduct_id_for_Addedit.emit(e.id)},o.prototype.selectProduct=function(e){this.promoproduct_id_for_Addedit.emit(void 0),this.product_id_for_Detail.emit(e.id)},o.prototype.getProductList=function(){var e=this;this.servProduct.getProducts_All().subscribe(function(r){e.products=r})},o.prototype.get_order_promotions=function(){var e=this;this.servPromoProduct.get_Promotion_Order_Seller(this.authServ.currentUserValue.id).subscribe(function(r){e.promotions_product=r})},o.\u0275fac=function(r){return new(r||o)(t.Y36(C.v),t.Y36(l.H),t.Y36(_.M),t.Y36(f.q),t.Y36(h.$),t.Y36(A.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-display-order-promotion"]],inputs:{events:"events"},outputs:{promoproduct_id_for_Addedit:"promoproduct_id_for_Addedit",product_id_for_Detail:"product_id_for_Detail",product_id_Selected:"product_id_Selected"},decls:10,vars:1,consts:[[1,"btn","btn-danger","btn-sm",2,"padding","0",3,"click"],["src","/assets/icon/add.png","alt","Edit",1,"btn-icon",2,"height","40px"],[1,"table","table-striped"],["scope","col"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"],["width","40px","src","/assets/icon/Edit.png","alt","Edit",1,"btn-icon",2,"height","40px"]],template:function(r,i){1&r&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.addProduct()}),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"table",2)(3,"thead")(4,"tr"),t._UZ(5,"th",3),t.TgZ(6,"th"),t._uU(7,"Promotion"),t.qZA()()(),t.TgZ(8,"tbody"),t.YNc(9,T,6,1,"tr",4),t.qZA()()),2&r&&(t.xp6(9),t.Q6J("ngForOf",i.promotions_product))},dependencies:[m.sg]}),o}(),g=a(655),n=a(4719),S=a(6776),c=a(460);function O(o,e){if(1&o&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&o){var r=e.$implicit;t.Q6J("value",r.promotionType),t.xp6(1),t.Oqu(r.promotionType)}}function q(o,e){1&o&&(t.TgZ(0,"span",17),t._uU(1," promoType not provided. "),t.qZA())}function U(o,e){1&o&&(t.TgZ(0,"div",1)(1,"div",18)(2,"div",3)(3,"label",19),t._uU(4,"discountPercentage"),t.qZA(),t._UZ(5,"input",20),t.qZA()(),t.TgZ(6,"div",18)(7,"div",3)(8,"label",21),t._uU(9,"discountAmount"),t.qZA(),t._UZ(10,"input",22),t.qZA()(),t.TgZ(11,"div",18)(12,"div",3)(13,"label",23),t._uU(14,"minOrderAmount"),t.qZA(),t._UZ(15,"input",24),t.qZA()()())}var k=function(){function o(e,r,i,d,s,u){this.formBuilder=e,this.servProduct=r,this.servCategory=i,this.servPromotion=d,this.authServ=s,this.injector=u,this.timepickerConfig=function D(){return Object.assign(new S.Sm,{timeFormat:"hh:mm A",showMeridian:!0,containerClass:"theme-default",hourStep:1,minuteStep:15,readonlyInput:!1,mousewheel:!0,arrowkeys:!0})}(),this.formSaved=new t.vpe,this.addedit_OPmode="",this.defaultDate="1987-06-30",this.isSubmitted=!1,this.isSubmitted_uploadform=!1,this.PromotionTypeList=[],this.ProductList=[],this.submitClicked=!1,this.bsConfig={dateInputFormat:"DD/MM/YYYY",containerClass:"theme-default"}}return o.prototype.ngAfterViewInit=function(){this.getPromotionMaster(),this.getProductList()},o.prototype.getPromotionMaster=function(){var e=this;this.servPromotion.getPromotionMast().subscribe(function(r){e.PromotionTypeList=r})},o.prototype.getProductList=function(){var e=this,r="";null!=this.authServ.currentUserValue.id&&(r=this.authServ.currentUserValue.id),this.servProduct.getProducts_Ofseller(r).subscribe(function(i){e.ProductList=i})},o.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({id:[],seller_id:["",n.kI.required],promoType:["",n.kI.required],promotionName:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]],discountAmount:["",[n.kI.min(10),n.kI.max(9999)]],discountPercentage:["",[n.kI.min(1),n.kI.max(90)]],minOrderAmount:["",n.kI.required,n.kI.min(100)],startDate:["",n.kI.required],endDate:["",n.kI.required]})},o.prototype.formatDate=function(e){var r=e.getDate(),i=e.getMonth()+1,d=r<10?"0".concat(r):"".concat(r),s=i<10?"0".concat(i):"".concat(i);return"".concat(d,"/").concat(s,"/").concat(e.getFullYear())},o.prototype.ngOnChanges=function(e){return(0,g.mG)(this,void 0,void 0,function(){var r,i,d;return(0,g.Jh)(this,function(s){switch(s.label){case 0:return e.param_PromoProd_id?(this.getPromotionMaster(),0==this.param_PromoProd_id?(this.addedit_OPmode="Add",this.myForm.reset()):this.addedit_OPmode="Edit",console.log("detecting change param_PromoProd_id:"+this.param_PromoProd_id),this.param_PromoProd_id?[4,this.get_Product()]:[3,2]):[3,2];case 1:s.sent(),r="",null!=this.authServ.currentUserValue.id&&(r=this.authServ.currentUserValue.id),console.log("product_Selected.startDate:"+this.product_Selected.startDate),i=this.formatDate(new Date(this.product_Selected.startDate)),d=this.formatDate(new Date(this.product_Selected.endDate)),console.log("patching seller value:"+r),this.myForm.patchValue({id:this.product_Selected.id,seller_id:r,promoType:this.product_Selected.promotionType,promotionName:this.product_Selected.promotionName,discountAmount:this.product_Selected.discountAmount,discountPercentage:this.product_Selected.discountPercentage,minOrderAmount:this.product_Selected.minOrderAmount,startDate:i,endDate:d}),s.label=2;case 2:return[2]}})})},o.prototype.get_Product=function(){var e=this;return new Promise(function(r,i){e.servPromotion.get_Promotion_OrderById(e.param_PromoProd_id).subscribe(function(d){e.product_Selected=d[0],console.log("mm in addedt getting a user:"+JSON.stringify(d)+" abc:"+e.param_PromoProd_id),r(!0)})})},o.prototype.onImageSelected=function(e){this.imageFile=e.target.files[0]},Object.defineProperty(o.prototype,"errorControl",{get:function(){return this.myForm.controls},enumerable:!1,configurable:!0}),o.prototype.onSubmitClick=function(){this.submitClicked=!0},o.prototype.onDeleteClick=function(){this.submitClicked=!1},o.prototype.onSubmit=function(){var e=this;if(0==this.submitClicked)return console.log(" hey i want to delete"),void this.servPromotion.deletePromotion_Order(this.myForm.value).subscribe(function(i){e.formSaved.emit(!0),e.myForm.reset(),e.addedit_OPmode=""});var r="";null!=this.authServ.currentUserValue.id&&(r=this.authServ.currentUserValue.id),this.myForm.patchValue({seller_id:r}),console.log(this.myForm.value),console.log("this.authServ.currentUserValue!.id:"+r),"Add"==this.addedit_OPmode?(console.log("this.myForm.value:"+JSON.stringify(this.myForm.value)),console.log("PromotionTypeList:"+JSON.stringify(this.PromotionTypeList)),this.servPromotion.addPromotion_Order(this.myForm.value).subscribe(function(i){e.formSaved.emit(!0),e.myForm.reset(),e.addedit_OPmode=""})):"Edit"==this.addedit_OPmode&&(console.log("aaaaaabbbaaaaaaaa"),this.servPromotion.editPromotion_Order(this.myForm.value).subscribe(function(i){e.formSaved.emit(!0),e.myForm.reset(),e.addedit_OPmode=""}))},o.\u0275fac=function(r){return new(r||o)(t.Y36(n.qu),t.Y36(_.M),t.Y36(l.H),t.Y36(f.q),t.Y36(h.$),t.Y36(t.zs3))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-order-promotion-add-edit"]],inputs:{param_PromoProd_id:"param_PromoProd_id"},outputs:{formSaved:"formSaved"},features:[t.TTD],decls:31,vars:6,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-6"],[1,"form-group"],["for","promotionName"],["type","text","maxlength","50","formControlName","promotionName","id","promotionName",1,"form-control"],["for","promoType"],["formControlName","promoType","value","apromo.promotionType","required","",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],["for","startDate"],["id","startDate","placeholder","Enter Start Date","bsDatepicker","","formControlName","startDate",1,"form-control",3,"bsConfig"],["for","endDate"],["id","startDate","placeholder","Enter End Date","bsDatepicker","","formControlName","endDate",1,"form-control",3,"bsConfig"],["class","row",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"click"],[3,"value"],[1,"error"],[1,"col-4"],["for","discountPercentage"],["type","number","formControlName","discountPercentage","id","discountPercentage",1,"form-control"],["for","discountAmount"],["type","number","formControlName","discountAmount","id","discountAmount",1,"form-control"],["for","minOrderAmount"],["type","number","formControlName","minOrderAmount","id","minOrderAmount",1,"form-control"]],template:function(r,i){1&r&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"promotionName"),t.qZA(),t._UZ(6,"input",5),t.qZA()(),t.TgZ(7,"div",2)(8,"div",3)(9,"label",6),t._uU(10,"Promotion Type"),t.qZA(),t.TgZ(11,"select",7),t.YNc(12,O,2,2,"option",8),t.qZA(),t.YNc(13,q,2,0,"span",9),t.qZA()()(),t.TgZ(14,"div",1)(15,"div",2)(16,"div",3)(17,"label",10),t._uU(18,"Start Date:"),t.qZA(),t._UZ(19,"input",11),t.qZA()(),t.TgZ(20,"div",2)(21,"div",3)(22,"label",12),t._uU(23,"End Datea:"),t.qZA(),t._UZ(24,"input",13),t.qZA()()(),t.YNc(25,U,16,0,"div",14),t.TgZ(26,"div",1)(27,"button",15),t.NdJ("click",function(){return i.onSubmitClick()}),t._uU(28,"Submit"),t.qZA(),t.TgZ(29,"button",15),t.NdJ("click",function(){return i.onDeleteClick()}),t._uU(30,"Delete"),t.qZA()()()),2&r&&(t.Q6J("formGroup",i.myForm),t.xp6(12),t.Q6J("ngForOf",i.PromotionTypeList),t.xp6(1),t.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.promoType.errors?null:i.errorControl.promoType.errors.required)),t.xp6(6),t.Q6J("bsConfig",i.bsConfig),t.xp6(5),t.Q6J("bsConfig",i.bsConfig),t.xp6(1),t.Q6J("ngIf",-1==i.errorControl.promoType.value.indexOf("Buy")))},dependencies:[m.sg,m.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,c.Np,c.Y5]}),o}();function N(o,e){if(1&o){var r=t.EpF();t.TgZ(0,"app-order-promotion-add-edit",4),t.NdJ("formSaved",function(s){t.CHM(r);var u=t.oxw();return t.KtG(u.productformSave_Detected(s))}),t.qZA()}if(2&o){var i=t.oxw();t.Q6J("param_PromoProd_id",i.curr_PromoProd_id_for_Addedit)}}var F=function(){function o(){this.eventsSubject=new b.xQ}return o.prototype.emitEventToChild=function(){this.eventsSubject.next()},o.prototype.promoProd_Select_Changed_for_Addedit=function(e){this.curr_PromoProd_id_for_Addedit=e},o.prototype.Prod_Select_Changed_for_Detail=function(e){this.curr_Prod_id_for_detail=e},o.prototype.productformSave_Detected=function(e){console.log("in child formSaved detected m in manage seller"),this.curr_PromoProd_id_for_Addedit=null,this.emitEventToChild()},o.prototype.onScroll=function(e){console.log("scrolling...")},o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-order-promotions"]],hostBindings:function(r,i){1&r&&t.NdJ("scroll",function(s){return i.onScroll(s)},!1,t.Jf7)},decls:5,vars:2,consts:[[1,"row"],[1,"col-12"],[3,"events","promoproduct_id_for_Addedit","product_id_for_Detail"],[3,"param_PromoProd_id","formSaved",4,"ngIf"],[3,"param_PromoProd_id","formSaved"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-display-order-promotion",2),t.NdJ("promoproduct_id_for_Addedit",function(s){return i.promoProd_Select_Changed_for_Addedit(s)})("product_id_for_Detail",function(s){return i.Prod_Select_Changed_for_Detail(s)}),t.qZA()(),t.TgZ(3,"div",1),t.YNc(4,N,1,1,"app-order-promotion-add-edit",3),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("events",i.eventsSubject.asObservable()),t.xp6(2),t.Q6J("ngIf",i.curr_PromoProd_id_for_Addedit||0==i.curr_PromoProd_id_for_Addedit))},dependencies:[m.O5,Z,k]}),o}();function I(o,e){if(1&o){var r=t.EpF();t.TgZ(0,"tr",5)(1,"td",6)(2,"button",0),t.NdJ("click",function(){var P=t.CHM(r).$implicit,$=t.oxw();return t.KtG($.editProduct(P))}),t._UZ(3,"img",7),t.qZA()(),t.TgZ(4,"td",8),t._uU(5),t.qZA(),t.TgZ(6,"td",9),t._uU(7),t.qZA()()}if(2&o){var i=e.$implicit,d=t.oxw();t.xp6(5),t.Oqu(d.servCommon.GetDisplayNameByKey(d.products,"id",i.productId,"product_name")),t.xp6(2),t.Oqu(i.promotionName)}}var J=function(){function o(e,r,i,d,s,u){this.servCommon=e,this.servCategory=r,this.servProduct=i,this.servPromoProduct=d,this.authServ=s,this.servUser=u,this.promoproduct_id_for_Addedit=new t.vpe,this.product_id_for_Detail=new t.vpe,this.product_id_Selected=new t.vpe,this.categoryList=[],this.sellerList=[]}return o.prototype.ngOnInit=function(){var e=this;this.getProductList(),this.get_product_promotions(),this.getSellerList(),this.getCategories(),this.eventsSubscription=this.events.subscribe(function(){return e.get_product_promotions()})},o.prototype.getCategories=function(){var e=this;this.servCategory.getCategorys().subscribe(function(r){e.categoryList=r})},o.prototype.getSellerList=function(){var e=this;this.servUser.getUsers_Of_role("Seller").subscribe(function(r){e.sellerList=r})},o.prototype.ngOnDestroy=function(){this.eventsSubscription.unsubscribe()},o.prototype.addProduct=function(){this.promoproduct_id_for_Addedit.emit(0)},o.prototype.editProduct=function(e){this.product_id_for_Detail.emit(void 0),this.promoproduct_id_for_Addedit.emit(e.id)},o.prototype.selectProduct=function(e){this.promoproduct_id_for_Addedit.emit(void 0),this.product_id_for_Detail.emit(e.id)},o.prototype.getProductList=function(){var e=this;this.servProduct.getProducts_All().subscribe(function(r){e.products=r})},o.prototype.get_product_promotions=function(){var e=this;this.servPromoProduct.get_Promotion_Product_Seller(this.authServ.currentUserValue.id).subscribe(function(r){e.promotions_product=r})},o.\u0275fac=function(r){return new(r||o)(t.Y36(C.v),t.Y36(l.H),t.Y36(_.M),t.Y36(f.q),t.Y36(h.$),t.Y36(A.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-display-product-promotion"]],inputs:{events:"events"},outputs:{promoproduct_id_for_Addedit:"promoproduct_id_for_Addedit",product_id_for_Detail:"product_id_for_Detail",product_id_Selected:"product_id_Selected"},decls:12,vars:1,consts:[[1,"btn","btn-danger","btn-sm",2,"padding","0",3,"click"],["src","/assets/icon/add.png","alt","Edit",1,"btn-icon",2,"height","40px"],[1,"table","table-striped"],["scope","col"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"],[2,"width","10%"],["width","40px","src","/assets/icon/Edit.png","alt","Edit",1,"btn-icon",2,"height","40px"],[2,"width","20%"],[2,"width","auto"]],template:function(r,i){1&r&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.addProduct()}),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"table",2)(3,"thead")(4,"tr"),t._UZ(5,"th",3),t.TgZ(6,"th"),t._uU(7,"Product"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Promotion"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,I,8,2,"tr",4),t.qZA()()),2&r&&(t.xp6(11),t.Q6J("ngForOf",i.promotions_product))},dependencies:[m.sg]}),o}();function E(o,e){if(1&o&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&o){var r=e.$implicit;t.Q6J("value",r.promotionType),t.xp6(1),t.Oqu(r.promotionType)}}function w(o,e){1&o&&(t.TgZ(0,"span",20),t._uU(1," promoType not provided. "),t.qZA())}function M(o,e){if(1&o&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&o){var r=e.$implicit;t.Q6J("value",r.id),t.xp6(1),t.Oqu(r.product_name)}}function L(o,e){1&o&&(t.TgZ(0,"span",20),t._uU(1," Product not provided. "),t.qZA())}function x(o,e){1&o&&(t.TgZ(0,"div",1)(1,"div",8)(2,"div",3)(3,"label",21),t._uU(4,"buyX"),t.qZA(),t._UZ(5,"input",22),t.qZA()(),t.TgZ(6,"div",8)(7,"div",3)(8,"label",23),t._uU(9,"getY"),t.qZA(),t._UZ(10,"input",24),t.qZA()()())}function Q(o,e){1&o&&(t.TgZ(0,"div",1)(1,"div",8)(2,"div",3)(3,"label",25),t._uU(4,"discountPercentage"),t.qZA(),t._UZ(5,"input",26),t.qZA()(),t.TgZ(6,"div",8)(7,"div",3)(8,"label",27),t._uU(9,"discountAmount"),t.qZA(),t._UZ(10,"input",28),t.qZA()()())}var V=function(){function o(e,r,i,d,s,u){this.formBuilder=e,this.servProduct=r,this.servCategory=i,this.servPromotion=d,this.authServ=s,this.injector=u,this.timepickerConfig=function Y(){return Object.assign(new S.Sm,{timeFormat:"hh:mm A",showMeridian:!0,containerClass:"theme-default",hourStep:1,minuteStep:15,readonlyInput:!1,mousewheel:!0,arrowkeys:!0})}(),this.formSaved=new t.vpe,this.addedit_OPmode="",this.defaultDate="1987-06-30",this.isSubmitted=!1,this.isSubmitted_uploadform=!1,this.PromotionTypeList=[],this.ProductList=[],this.submitClicked=!1,this.bsConfig={dateInputFormat:"DD/MM/YYYY",containerClass:"theme-default"}}return o.prototype.ngAfterViewInit=function(){this.getPromotionMaster(),this.getProductList()},o.prototype.getPromotionMaster=function(){var e=this;this.servPromotion.getPromotionMast().subscribe(function(r){e.PromotionTypeList=r})},o.prototype.getProductList=function(){var e=this,r="";null!=this.authServ.currentUserValue.id&&(r=this.authServ.currentUserValue.id),this.servProduct.getProducts_Ofseller(r).subscribe(function(i){e.ProductList=i})},o.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({id:[],seller_id:[""],productId:[""],promoType:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]],promotionName:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(50)]],buyX:["0",[n.kI.min(1),n.kI.max(10)]],getY:["0",[n.kI.min(1),n.kI.max(10)]],discountAmount:["0",[n.kI.min(10),n.kI.max(9999)]],discountPercentage:["0",[n.kI.min(1),n.kI.max(90)]],startDate:["",n.kI.required],endDate:[""]})},o.prototype.formatDate=function(e){var r=e.getDate(),i=e.getMonth()+1,d=r<10?"0".concat(r):"".concat(r),s=i<10?"0".concat(i):"".concat(i);return"".concat(d,"-").concat(s,"-").concat(e.getFullYear())},o.prototype.ngOnChanges=function(e){return(0,g.mG)(this,void 0,void 0,function(){var r,i,d;return(0,g.Jh)(this,function(s){switch(s.label){case 0:return e.param_PromoProd_id?(this.getPromotionMaster(),0==this.param_PromoProd_id?(this.addedit_OPmode="Add",this.myForm.reset()):this.addedit_OPmode="Edit",console.log("detecting change param_PromoProd_id:"+this.param_PromoProd_id),this.param_PromoProd_id?[4,this.get_Product()]:[3,2]):[3,2];case 1:s.sent(),r="",null!=this.authServ.currentUserValue.id&&(r=this.authServ.currentUserValue.id),i=this.formatDate(new Date(this.product_Selected.startDate)),d=this.formatDate(new Date(this.product_Selected.endDate)),console.log("patching seller value:"+r),this.myForm.patchValue({id:this.product_Selected.id,seller_id:r,productId:this.product_Selected.productId,promoType:this.product_Selected.promotionType,promotionName:this.product_Selected.promotionName,buyX:this.product_Selected.buyX,getY:this.product_Selected.getY,discountAmount:this.product_Selected.discountAmount,discountPercentage:this.product_Selected.discountPercentage,startDate:i,endDate:d}),s.label=2;case 2:return[2]}})})},o.prototype.get_Product=function(){var e=this;return new Promise(function(r,i){e.servPromotion.get_Promotion_ProductById(e.param_PromoProd_id).subscribe(function(d){e.product_Selected=d[0],console.log("m in addedt getting a user:"+JSON.stringify(d)+" abc:"+e.param_PromoProd_id),r(!0)})})},o.prototype.onImageSelected=function(e){this.imageFile=e.target.files[0]},Object.defineProperty(o.prototype,"errorControl",{get:function(){return this.myForm.controls},enumerable:!1,configurable:!0}),o.prototype.onSubmitClick=function(){this.submitClicked=!0},o.prototype.onDeleteClick=function(){this.submitClicked=!1},o.prototype.onSubmit=function(){var e=this;if(0==this.submitClicked)return console.log(" hey i want to delete"),void this.servPromotion.deletePromotion_Product(this.myForm.value).subscribe(function(i){e.formSaved.emit(!0),e.myForm.reset(),e.addedit_OPmode=""});console.log(this.myForm.value);var r="";null!=this.authServ.currentUserValue.id&&(r=this.authServ.currentUserValue.id),this.myForm.patchValue({seller_id:r}),console.log("this.authServ.currentUserValue!.id:"+r),"Add"==this.addedit_OPmode?(console.log("this.myForm.value:"+JSON.stringify(this.myForm.value)),console.log("PromotionTypeList:"+JSON.stringify(this.PromotionTypeList)),this.servPromotion.addPromotion_Product(this.myForm.value).subscribe(function(i){e.formSaved.emit(!0),e.myForm.reset()})):"Edit"==this.addedit_OPmode&&(console.log("aaaaaaaaaaaaaa"),this.servPromotion.editPromotion_Product(this.myForm.value).subscribe(function(i){e.formSaved.emit(!0),e.myForm.reset()}))},o.\u0275fac=function(r){return new(r||o)(t.Y36(n.qu),t.Y36(_.M),t.Y36(l.H),t.Y36(f.q),t.Y36(h.$),t.Y36(t.zs3))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-promotion-add-edit"]],inputs:{param_PromoProd_id:"param_PromoProd_id"},outputs:{formSaved:"formSaved"},features:[t.TTD],decls:40,vars:9,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12"],[1,"form-group"],["for","promoType"],["formControlName","promoType","value","apromo.promotionType","required","",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],[1,"col-6"],["for","product"],["formControlName","productId","required","",1,"form-control"],["for","promotionName"],["type","text","maxlength","50","formControlName","promotionName","id","promotionName",1,"form-control"],["for","startDate"],["id","startDate","placeholder","Enter Start Date","bsDatepicker","","formControlName","startDate",1,"form-control",3,"bsConfig"],["for","endDate"],["id","startDate","placeholder","Enter End Date","bsDatepicker","","formControlName","endDate",1,"form-control",3,"bsConfig"],["class","row",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"click"],[3,"value"],[1,"error"],["for","buyX"],["type","number","formControlName","buyX","id","buyX",1,"form-control"],["for","getY"],["type","number","formControlName","getY","id","getY",1,"form-control"],["for","discountPercentage"],["type","number","formControlName","discountPercentage","id","discountPercentage",1,"form-control"],["for","discountAmount"],["type","number","formControlName","discountAmount","id","discountAmount",1,"form-control"]],template:function(r,i){1&r&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Promotion Type"),t.qZA(),t.TgZ(6,"select",5),t.YNc(7,E,2,2,"option",6),t.qZA(),t.YNc(8,w,2,0,"span",7),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",8)(11,"div",3)(12,"label",9),t._uU(13,"Product"),t.qZA(),t.TgZ(14,"select",10),t.YNc(15,M,2,2,"option",6),t.qZA(),t.YNc(16,L,2,0,"span",7),t.qZA()(),t.TgZ(17,"div",8)(18,"div",3)(19,"label",11),t._uU(20,"promotionName"),t.qZA(),t._UZ(21,"input",12),t.qZA()()(),t.TgZ(22,"div",1)(23,"div",8)(24,"div",3)(25,"label",13),t._uU(26,"Start Date:"),t.qZA(),t._UZ(27,"input",14),t.qZA()(),t.TgZ(28,"div",8)(29,"div",3)(30,"label",15),t._uU(31,"End Date:"),t.qZA(),t._UZ(32,"input",16),t.qZA()()(),t.YNc(33,x,11,0,"div",17),t.YNc(34,Q,11,0,"div",17),t.TgZ(35,"div",1)(36,"button",18),t.NdJ("click",function(){return i.onSubmitClick()}),t._uU(37,"Submit"),t.qZA(),t.TgZ(38,"button",18),t.NdJ("click",function(){return i.onDeleteClick()}),t._uU(39,"Delete"),t.qZA()()()),2&r&&(t.Q6J("formGroup",i.myForm),t.xp6(7),t.Q6J("ngForOf",i.PromotionTypeList),t.xp6(1),t.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.promoType.errors?null:i.errorControl.promoType.errors.required)),t.xp6(7),t.Q6J("ngForOf",i.ProductList),t.xp6(1),t.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.productId.errors?null:i.errorControl.productId.errors.required)),t.xp6(11),t.Q6J("bsConfig",i.bsConfig),t.xp6(5),t.Q6J("bsConfig",i.bsConfig),t.xp6(1),t.Q6J("ngIf",-1!=i.errorControl.promoType.value.indexOf("Buy")),t.xp6(1),t.Q6J("ngIf",-1==i.errorControl.promoType.value.indexOf("Buy")))},dependencies:[m.sg,m.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,c.Np,c.Y5]}),o}();function j(o,e){if(1&o){var r=t.EpF();t.TgZ(0,"app-product-promotion-add-edit",4),t.NdJ("formSaved",function(s){t.CHM(r);var u=t.oxw();return t.KtG(u.productformSave_Detected(s))}),t.qZA()}if(2&o){var i=t.oxw();t.Q6J("param_PromoProd_id",i.curr_PromoProd_id_for_Addedit)}}var H=[{path:"",component:y,children:[{path:"",redirectTo:"Product-Promotions",pathMatch:"full"},{path:"Product-Promotions",component:function(){function o(){this.eventsSubject=new b.xQ}return o.prototype.emitEventToChild=function(){this.eventsSubject.next()},o.prototype.promoProd_Select_Changed_for_Addedit=function(e){this.curr_PromoProd_id_for_Addedit=e},o.prototype.Prod_Select_Changed_for_Detail=function(e){this.curr_Prod_id_for_detail=e},o.prototype.productformSave_Detected=function(e){console.log("in child formSaved detected m in manage seller"),this.curr_PromoProd_id_for_Addedit=null,this.emitEventToChild()},o.prototype.onScroll=function(e){console.log("scrolling...")},o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-promotions"]],hostBindings:function(r,i){1&r&&t.NdJ("scroll",function(s){return i.onScroll(s)},!1,t.Jf7)},decls:5,vars:2,consts:[[1,"row"],[1,"col-12"],[3,"events","promoproduct_id_for_Addedit","product_id_for_Detail"],[3,"param_PromoProd_id","formSaved",4,"ngIf"],[3,"param_PromoProd_id","formSaved"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-display-product-promotion",2),t.NdJ("promoproduct_id_for_Addedit",function(s){return i.promoProd_Select_Changed_for_Addedit(s)})("product_id_for_Detail",function(s){return i.Prod_Select_Changed_for_Detail(s)}),t.qZA()(),t.TgZ(3,"div",1),t.YNc(4,j,1,1,"app-product-promotion-add-edit",3),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("events",i.eventsSubject.asObservable()),t.xp6(2),t.Q6J("ngIf",i.curr_PromoProd_id_for_Addedit||0==i.curr_PromoProd_id_for_Addedit))},dependencies:[m.O5,J,V]}),o}()},{path:"Order-Promotions",component:F}]}],X=function(){function o(){}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(H),p.Bz]}),o}(),G=function(){function o(){}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,n.u5,n.UX,c.kn.forRoot(),X]}),o}()}}]);