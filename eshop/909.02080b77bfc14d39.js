"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[909],{9909:(Q,g,s)=>{s.r(g),s.d(g,{ManageProductsModule:()=>L});var u=s(6895),f=s(7716),t=s(4650),y=s(5529),p=s(2114),P=s(7807),d=s(4719),C=s(6493),h=s(2011),l=s(4350);function A(e,o){if(1&e){var r=t.EpF();t.TgZ(0,"tr",8)(1,"td",9)(2,"button",0),t.NdJ("click",function(){var _=t.CHM(r).$implicit,m=t.oxw();return t.KtG(m.editProduct(_))}),t._UZ(3,"img",10),t.qZA()(),t.TgZ(4,"td",9)(5,"button",0),t.NdJ("click",function(){var _=t.CHM(r).$implicit,m=t.oxw();return t.KtG(m.selectProduct(_))}),t._UZ(6,"img",11),t.qZA()(),t.TgZ(7,"td",12),t._uU(8),t.qZA(),t.TgZ(9,"td",12),t._uU(10),t.qZA(),t.TgZ(11,"td",8),t._uU(12),t.qZA()()}if(2&e){var i=o.$implicit,n=t.oxw();t.xp6(8),t.Oqu(i.product_name),t.xp6(2),t.Oqu(i.price),t.xp6(2),t.Oqu(n.servCommon.GetDisplayNameByKey(n.categoryList,"id",i.category_id,"Category"))}}var Z=function(){function e(o,r,i,n){this.servCommon=o,this.servCategory=r,this.servProduct=i,this.authServ=n,this.param_currUserId=0,this.product_id_for_Addedit=new t.vpe,this.product_id_for_Detail=new t.vpe,this.product_id_Selected=new t.vpe,this.categoryList=[]}return e.prototype.ngOnChanges=function(o){o.param_currUserId&&(console.log("CurrentUser changed in disp:",JSON.stringify(this.param_currUserId)),this.get_products())},e.prototype.ngOnInit=function(){var o=this;this.get_products(),this.getCategories(),this.eventsSubscription=this.events.subscribe(function(){return o.get_products()})},e.prototype.getCategories=function(){var o=this;this.servCategory.getCategorys().subscribe(function(r){o.categoryList=r})},e.prototype.ngOnDestroy=function(){this.eventsSubscription.unsubscribe()},e.prototype.addProduct=function(){this.product_id_for_Addedit.emit(0)},e.prototype.editProduct=function(o){this.product_id_for_Detail.emit(void 0),this.product_id_for_Addedit.emit(o.id)},e.prototype.selectProduct=function(o){this.product_id_for_Addedit.emit(void 0),this.product_id_for_Detail.emit(o.id)},e.prototype.get_products=function(){var o=this;if(null!=this.param_currUserId.id){console.log("while get_products param_currUserId is:"+this.param_currUserId.id);var r=this.param_currUserId.id;console.log("xyz:"+r),this.servProduct.getProducts(r).subscribe(function(i){o.products=i,console.log("aaaaaaa:"+JSON.stringify(o.authServ.currentUserValue.id))})}},e.\u0275fac=function(r){return new(r||e)(t.Y36(C.v),t.Y36(h.H),t.Y36(l.M),t.Y36(p.$))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-display-product"]],inputs:{param_currUserId:"param_currUserId",events:"events"},outputs:{product_id_for_Addedit:"product_id_for_Addedit",product_id_for_Detail:"product_id_for_Detail",product_id_Selected:"product_id_Selected"},features:[t.TTD],decls:16,vars:1,consts:[[1,"btn","btn-danger","btn-sm",2,"padding","0",3,"click"],["src","/assets/icon/add.png","alt","New Product",1,"btn-icon",2,"height","40px"],[1,"card"],[1,"card-body"],[1,"table","table-striped"],[1,"text-primary"],["scope","col"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"],["width","120px"],["src","/assets/icon/Edit.png","alt","Edit",1,"btn-icon"],["src","/assets/icon/preview_eye.png","alt","Edit",1,"btn-icon"],["width","200px",2,"height","5px"]],template:function(r,i){1&r&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.addProduct()}),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"div",2)(3,"div",3)(4,"table",4)(5,"thead",5),t._UZ(6,"th",6)(7,"th",6),t.TgZ(8,"th"),t._uU(9,"Product"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Price"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Category"),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,A,13,3,"tr",7),t.qZA()()()()),2&r&&(t.xp6(15),t.Q6J("ngForOf",i.products))},dependencies:[u.sg],styles:[".btn-icon[_ngcontent-%COMP%]{width:22px;height:22px}"]}),e}(),v=s(655),U=s(4704);function S(e,o){1&e&&t._UZ(0,"img",23)}function b(e,o){if(1&e&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&e){var r=o.$implicit;t.Q6J("value",r.id),t.xp6(1),t.Oqu(r.Category)}}function x(e,o){1&e&&(t.TgZ(0,"span",25),t._uU(1," Category not provided. "),t.qZA())}function T(e,o){1&e&&(t.TgZ(0,"span",25),t._uU(1," IsOnlyForAdvertise not provided. "),t.qZA())}function I(e,o){1&e&&(t.TgZ(0,"button",26),t._uU(1,"Submit"),t.qZA())}var F=function(){function e(o,r,i,n,a){this.formBuilder=o,this.servProduct=r,this.servCategory=i,this.authServ=n,this.notify=a,this.param_currUserId=0,this.formSaved=new t.vpe,this.addedit_OPmode="",this.defaultDate="1987-06-30",this.isSubmitted=!1,this.isSubmitted_uploadform=!1,this.categoryList=[],this.isLoading=!0}return e.prototype.ngAfterViewInit=function(){this.getCategories()},e.prototype.getCategories=function(){var o=this;this.servCategory.getCategorys().subscribe(function(r){o.categoryList=r})},e.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({seller_id:[""],product_name:["",[d.kI.required,d.kI.minLength(3),d.kI.maxLength(50)]],imageUrl:["",[d.kI.required,d.kI.minLength(3),d.kI.maxLength(50)]],category:["",[d.kI.required,d.kI.minLength(3),d.kI.maxLength(50)]],price:["",[d.kI.min(1),d.kI.max(1e6)]],discount_text:["",[d.kI.minLength(3),d.kI.maxLength(50)]],icon:[],description:["",[d.kI.minLength(3),d.kI.maxLength(50)]],IsOnlyForAdvertise:[!1]})},e.prototype.ngOnChanges=function(o){return(0,v.mG)(this,void 0,void 0,function(){return(0,v.Jh)(this,function(r){switch(r.label){case 0:return o.param_currUserId&&console.log("CurrentUser changed in addedit:",this.param_currUserId),o.param_Product_id?(this.getCategories(),0==this.param_Product_id?(this.addedit_OPmode="Add",this.isLoading=!1,this.myForm.reset()):this.addedit_OPmode="Edit",this.param_Product_id?(this.isLoading=!0,[4,this.get_Product()]):[3,2]):[3,3];case 1:return r.sent(),this.isLoading=!1,this.myForm.patchValue({seller_id:this.product_Selected.seller_id,product_name:this.product_Selected.product_name,category:this.product_Selected.category_id,price:this.product_Selected.price,description:this.product_Selected.description,IsOnlyForAdvertise:this.product_Selected.IsOnlyForAdvertise,discount_text:this.product_Selected.discount_text,imageUrl:this.product_Selected.imageUrl}),[3,3];case 2:this.isLoading=!1,r.label=3;case 3:return[2]}})})},e.prototype.get_Product=function(){var o=this;return new Promise(function(r,i){o.servProduct.getProduct(o.param_Product_id).subscribe(function(n){o.product_Selected=n[0],r(!0)})})},e.prototype.onImageSelected=function(o){this.imageFile=o.target.files[0],console.log("event.target.files[0];"+o.target.files[0])},Object.defineProperty(e.prototype,"errorControl",{get:function(){return this.myForm.controls},enumerable:!1,configurable:!0}),e.prototype.onSubmit=function(){var o=this,r=new FormData,i="";console.log("while submitting param_currUserId is:"+this.param_currUserId.id),null!=this.authServ.currentUserValue.id&&(i=this.param_currUserId.id),r.append("id",this.param_Product_id.toString()),r.append("seller_id",i),r.append("product_name",this.myForm.value.product_name),r.append("category_id",this.myForm.value.category),r.append("price",this.myForm.value.price),r.append("discount_text",this.myForm.value.discount_text),r.append("description",this.myForm.value.description),r.append("IsOnlyForAdvertise",this.myForm.value.IsOnlyForAdvertise),this.imageFile&&this.imageFile.name&&(r.append("imageUrl",this.imageFile.name),r.append("icon",this.imageFile)),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),"Add"==this.addedit_OPmode?(this.addedit_OPmode="",this.servProduct.addProduct(r).subscribe(function(n){o.formSaved.emit(!0),o.myForm.reset(),o.notify.showSuccess("Product Added successfully","New Product")})):"Edit"==this.addedit_OPmode&&(this.addedit_OPmode="",this.servProduct.updateProduct(r).subscribe(function(n){console.log("trying to update product..."),o.formSaved.emit(!0),o.myForm.reset(),console.log("update product done..."),o.notify.showInfo("Changes Done Successfully","Product")}))},e.\u0275fac=function(r){return new(r||e)(t.Y36(d.qu),t.Y36(l.M),t.Y36(h.H),t.Y36(p.$),t.Y36(U.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-add-edit"]],inputs:{param_currUserId:"param_currUserId",param_Product_id:"param_Product_id"},outputs:{formSaved:"formSaved"},features:[t.TTD],decls:39,vars:8,consts:[[1,"card"],[1,"card-body"],["style","height:300px;width:400px","src","../../../../../assets/icon/loading.gif",4,"ngIf"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group"],["for","product_name"],["type","text","maxlength","50","formControlName","product_name","id","product_name",1,"form-control"],["for","Price"],["type","number","formControlName","price","id","price",1,"form-control"],["for","description"],["type","text","maxlength","50","formControlName","description","id","description",1,"form-control"],["for","discount_text"],["type","text","maxlength","50","formControlName","discount_text","id","discount_text",1,"form-control"],["for","category"],["formControlName","category","required","",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],["for","IsOnlyForAdvertise"],["type","checkbox","id","IsOnlyForAdvertise",3,"formControlName"],["for","image"],["type","file","id","image",1,"form-control-file",3,"change"],["alt","Product image",1,"card-img-top",2,"height","250px","width","auto","object-fit","contain",3,"src"],["type","submit","class","btn btn-primary",4,"ngIf"],["src","../../../../../assets/icon/loading.gif",2,"height","300px","width","400px"],[3,"value"],[1,"error"],["type","submit",1,"btn","btn-primary"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,S,1,0,"img",2),t.TgZ(3,"form",3),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(4,"div",4)(5,"label",5),t._uU(6,"Product"),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",7),t._uU(10,"Price"),t.qZA(),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",4)(13,"label",9),t._uU(14,"Description"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",4)(17,"label",11),t._uU(18,"Discount_Text"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"div",4)(21,"label",13),t._uU(22,"Category"),t.qZA(),t.TgZ(23,"select",14),t.YNc(24,b,2,2,"option",15),t.qZA(),t.YNc(25,x,2,0,"span",16),t.qZA(),t.TgZ(26,"div",4)(27,"label",17),t._uU(28,"Only For Advertise : "),t.qZA(),t._UZ(29,"input",18),t._uU(30," Yes/No "),t.YNc(31,T,2,0,"span",16),t.qZA(),t.TgZ(32,"div",4)(33,"label",19),t._uU(34,"Product Image"),t.qZA(),t.TgZ(35,"input",20),t.NdJ("change",function(a){return i.onImageSelected(a)}),t.qZA()(),t.TgZ(36,"div",4),t._UZ(37,"img",21),t.qZA(),t.YNc(38,I,2,0,"button",22),t.qZA()()()),2&r&&(t.xp6(2),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("formGroup",i.myForm),t.xp6(21),t.Q6J("ngForOf",i.categoryList),t.xp6(1),t.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.category.errors?null:i.errorControl.category.errors.required)),t.xp6(4),t.Q6J("formControlName","IsOnlyForAdvertise"),t.xp6(2),t.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.IsOnlyForAdvertise.errors?null:i.errorControl.IsOnlyForAdvertise.errors.required)),t.xp6(6),t.MGl("src","../../../assets/product_images/",i.errorControl.imageUrl.value,"",t.LSH),t.xp6(1),t.Q6J("ngIf",""!=i.addedit_OPmode))},dependencies:[u.sg,u.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.JL,d.Q7,d.nD,d.sg,d.u]}),e}(),O=function(){function e(o,r){this.servProduct=o,this.authServ=r}return e.prototype.ngOnChanges=function(o){o.param_Product_id&&this.param_Product_id&&this.get_Product()},e.prototype.get_Product=function(){var o=this;this.servProduct.getProduct(this.param_Product_id).subscribe(function(r){o.product_Selected=r[0],o.imagepath="E:/myApt/nodeMyShop/images/apple.jpg"})},e.\u0275fac=function(r){return new(r||e)(t.Y36(l.M),t.Y36(p.$))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-detail"]],inputs:{param_Product_id:"param_Product_id"},features:[t.TTD],decls:12,vars:7,consts:[[1,"card","mt-2","mb-3",2,"background-color","light-yellow","border","5px solid pink","padding","10px"],[1,"card-body"],[1,"card-text","firm_name"],["alt","Product image",1,"card-img-top",2,"height","250px","width","auto","object-fit","contain",3,"src"],[1,"card-title",2,"color","maroon"],[1,"card-text"]],template:function(r,i){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p",2),t._uU(3),t.qZA()(),t._UZ(4,"img",3),t.TgZ(5,"div",1)(6,"h5",4),t._uU(7),t.qZA(),t.TgZ(8,"p",5),t._uU(9),t.qZA(),t.TgZ(10,"p",5),t._uU(11),t.qZA()()()),2&r&&(t.xp6(3),t.AsE("",i.product_Selected.firm_name,"",i.product_Selected.firm_addr,""),t.xp6(1),t.MGl("src","../../../../../../assets/product_images/",i.product_Selected.imageUrl,"",t.LSH),t.xp6(3),t.Oqu(i.product_Selected.product_name),t.xp6(2),t.Oqu(i.product_Selected.description),t.xp6(2),t.AsE("Price:",i.product_Selected.price," \xa0\xa0 \xa0 ",i.product_Selected.discount_text,""))}}),e}();function M(e,o){if(1&e&&(t.TgZ(0,"option",8),t._uU(1),t.qZA()),2&e){var r=o.$implicit;t.Q6J("ngValue",r),t.xp6(1),t.Oqu(r.display_name)}}function q(e,o){if(1&e){var r=t.EpF();t.TgZ(0,"div"),t._uU(1," ( Behalf )Select Seller "),t.TgZ(2,"select",5),t.NdJ("ngModelChange",function(a){t.CHM(r);var c=t.oxw();return t.KtG(c.currUser=a)}),t.TgZ(3,"option",6),t._uU(4,"Choose a seller"),t.qZA(),t.YNc(5,M,2,2,"option",7),t.qZA()()}if(2&e){var i=t.oxw();t.xp6(2),t.Q6J("ngModel",i.currUser),t.xp6(3),t.Q6J("ngForOf",i.sellers)}}function J(e,o){if(1&e){var r=t.EpF();t.TgZ(0,"app-display-product",9),t.NdJ("product_id_for_Addedit",function(a){t.CHM(r);var c=t.oxw();return t.KtG(c.Prod_Select_Changed_for_Addedit(a))})("product_id_for_Detail",function(a){t.CHM(r);var c=t.oxw();return t.KtG(c.Prod_Select_Changed_for_Detail(a))}),t.qZA()}if(2&e){var i=t.oxw();t.Q6J("events",i.eventsSubject.asObservable())("param_currUserId",i.currUser)}}function D(e,o){if(1&e){var r=t.EpF();t.TgZ(0,"div",2)(1,"app-product-add-edit",10),t.NdJ("formSaved",function(a){t.CHM(r);var c=t.oxw();return t.KtG(c.productformSave_Detected(a))}),t.qZA()()}if(2&e){var i=t.oxw();t.xp6(1),t.Q6J("param_currUserId",i.currUser)("param_Product_id",i.curr_Prod_id_for_Addedit)}}function N(e,o){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"app-product-detail",11),t.qZA()),2&e){var r=t.oxw();t.xp6(1),t.Q6J("param_Product_id",r.curr_Prod_id_for_detail)}}var E=[{path:"",component:function(){function e(o,r){this.authServ=o,this.servUser=r,this.currUserid=new t.vpe,this.eventsSubject=new y.xQ,this.sellers=[],this.authServ.currentUserValue&&(this.currUser=this.authServ.currentUserValue,this.currUserid.emit(this.authServ.currentUserValue.id),"Seller"==this.authServ.currentUserValue.userrole?this.currUserid.emit(this.authServ.currentUserValue.id):"Admin"==this.authServ.currentUserValue.userrole&&(this.currUserid.emit(0),this.get_Users_seller_Only()))}return e.prototype.get_Users_seller_Only=function(){var o=this;this.servUser.getUsers_Of_role("Seller").subscribe(function(r){o.sellers=r})},e.prototype.emitEventToChild=function(){this.eventsSubject.next()},e.prototype.Prod_Select_Changed_for_Addedit=function(o){this.curr_Prod_id_for_Addedit=o},e.prototype.Prod_Select_Changed_for_Detail=function(o){this.curr_Prod_id_for_detail=o},e.prototype.productformSave_Detected=function(o){console.log("in child formSaved detected m in manage seller"),this.curr_Prod_id_for_Addedit=null,this.emitEventToChild()},e.prototype.onScroll=function(o){console.log("scrolling...")},e.\u0275fac=function(r){return new(r||e)(t.Y36(p.$),t.Y36(P.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-manage-products"]],hostBindings:function(r,i){1&r&&t.NdJ("scroll",function(a){return i.onScroll(a)},!1,t.Jf7)},outputs:{currUserid:"currUserid"},decls:6,vars:4,consts:[[4,"ngIf"],[1,"row"],[1,"col-12"],[3,"events","param_currUserId","product_id_for_Addedit","product_id_for_Detail",4,"ngIf"],["class","col-12",4,"ngIf"],["id","pCategory","name","pCategory",1,"form-control",3,"ngModel","ngModelChange"],["value","","disabled",""],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"],[3,"events","param_currUserId","product_id_for_Addedit","product_id_for_Detail"],[3,"param_currUserId","param_Product_id","formSaved"],[3,"param_Product_id"]],template:function(r,i){1&r&&(t.YNc(0,q,6,2,"div",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,J,1,2,"app-display-product",3),t.qZA(),t.YNc(4,D,2,2,"div",4),t.YNc(5,N,2,1,"div",4),t.qZA()),2&r&&(t.Q6J("ngIf","Admin"==i.authServ.currentUserValue.userrole),t.xp6(3),t.Q6J("ngIf",null==i.curr_Prod_id_for_Addedit),t.xp6(1),t.Q6J("ngIf",null!=i.curr_Prod_id_for_Addedit),t.xp6(1),t.Q6J("ngIf",null!=i.curr_Prod_id_for_detail))},dependencies:[u.sg,u.O5,d.YN,d.Kr,d.EJ,d.JJ,d.On,Z,F,O]}),e}()}],Y=function(){function e(){}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.Bz.forChild(E),f.Bz]}),e}(),L=function(){function e(){}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,d.u5,d.UX,Y]}),e}()}}]);