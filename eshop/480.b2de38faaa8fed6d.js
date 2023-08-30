"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[480],{5480:(ee,g,u)=>{u.r(g),u.d(g,{ManageUsersModule:()=>z});var m=u(6895),f=u(7716),U=u(5567),Z=u(8929),e=u(4650),c=u(655),a=u(4006),h=u(4350),v=u(7807),C=u(6173),y=u(2011),b=u(2114),S=u(4704);function T(t,r){1&t&&(e.TgZ(0,"span",16),e._uU(1," userid not provided. "),e.qZA())}function x(t,r){1&t&&(e.TgZ(0,"span",16),e._uU(1," display_name not provided. "),e.qZA())}function w(t,r){1&t&&(e.TgZ(0,"span",16),e._uU(1," password not provided. "),e.qZA())}function N(t,r){1&t&&(e.TgZ(0,"span",16),e._uU(1," IsActive not provided. "),e.qZA())}var P=function(){function t(r,o,i,n,s,d,_){this.formBuilder=r,this.servProduct=o,this.servUser=i,this.servSellercommission=n,this.servCategory=s,this.authServ=d,this.notify=_,this.selectedSeller_id=null,this.formSaved=new e.vpe,this.addedit_OPmode="",this.defaultDate="1987-06-30",this.isSubmitted=!1,this.isSubmitted_uploadform=!1,this.categoryList=[],this.sellerList=[]}return t.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({id:[""],userid:[""],display_name:["",[a.kI.required,a.kI.min(3),a.kI.max(50)]],password:[],oldpassword:[],userrole:[],IsActive:[]}),this.getSellerList()},t.prototype.ngOnChanges=function(r){return(0,c.mG)(this,void 0,void 0,function(){return(0,c.Jh)(this,function(o){switch(o.label){case 0:return r.param_Customer_id?(0==this.param_Customer_id?(this.addedit_OPmode="Add",this.myForm.reset()):this.addedit_OPmode="Edit",this.param_Customer_id?[4,this.get_Seller_Details()]:[3,2]):[3,2];case 1:o.sent(),this.myForm.patchValue({id:this.product_Selected.id,userid:this.product_Selected.userid,display_name:this.product_Selected.display_name,password:"NotEditing*123",oldpassword:"iamadmin",userrole:this.product_Selected.userrole,IsActive:this.product_Selected.IsActive}),o.label=2;case 2:return[2]}})})},t.prototype.getSellerList=function(){var r=this;this.servUser.getUsers_Of_role("Seller").subscribe(function(o){r.sellerList=o})},t.prototype.get_Seller_Commission_Setting_notinuse=function(){var r=this;return new Promise(function(o,i){r.servSellercommission.get_Seller_Commission_Setting(r.param_Customer_id,!0).subscribe(function(n){r.product_Selected=n[0],o(!0)})})},t.prototype.get_Seller_Details=function(){var r=this;return new Promise(function(o,i){r.servUser.getUser(r.param_Customer_id).subscribe(function(n){r.product_Selected=n[0],console.log("userdetail:"+JSON.stringify(n[0])),o(!0)})})},Object.defineProperty(t.prototype,"errorControl",{get:function(){return this.myForm.controls},enumerable:!1,configurable:!0}),t.prototype.onSubmit=function(){var r=this;"Add"==this.addedit_OPmode?(this.myForm.patchValue({seller_id:this.selectedSeller_id}),this.servUser.addUser(this.myForm.value).subscribe(function(o){console.log("trying to add customer..."),r.formSaved.emit(!0),r.myForm.reset(),r.notify.showSuccess("Customer Added Successfully","Customer")})):"Edit"==this.addedit_OPmode&&this.servUser.updateUser(this.myForm.value).subscribe(function(o){console.log("trying to update product..."),r.formSaved.emit(!0),r.myForm.reset(),r.notify.showSuccess("Customer Data Changed Successfully","Customer")})},t.prototype.onSelectProduct=function(r){console.log("in onSelectProduct"),this.selectedSeller_id=r.id},t.\u0275fac=function(o){return new(o||t)(e.Y36(a.qu),e.Y36(h.M),e.Y36(v.K),e.Y36(C.b),e.Y36(y.H),e.Y36(b.$),e.Y36(S.g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-customers-add-edit"]],inputs:{param_Customer_id:"param_Customer_id"},outputs:{formSaved:"formSaved"},features:[e.TTD],decls:31,vars:6,consts:[[1,"card"],[1,"card-body"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-6"],[1,"form-group"],["for","userid"],["type","text","formControlName","userid","id","userid",1,"form-control"],["class","error",4,"ngIf"],["for","display_name"],["type","text","formControlName","display_name","id","display_name",1,"form-control"],["for","password"],["type","password","formControlName","password","id","password",1,"form-control"],["for","IsActive"],["type","checkbox","id","IsActive",3,"formControlName"],["type","submit",1,"btn","btn-primary"],[1,"error"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),e._uU(7,"userid"),e.qZA(),e._UZ(8,"input",7),e.YNc(9,T,2,0,"span",8),e.qZA()(),e.TgZ(10,"div",4)(11,"div",5)(12,"label",9),e._uU(13,"display_name"),e.qZA(),e._UZ(14,"input",10),e.YNc(15,x,2,0,"span",8),e.qZA()()(),e.TgZ(16,"div",3)(17,"div",4)(18,"div",5)(19,"label",11),e._uU(20,"password"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,w,2,0,"span",8),e.qZA()(),e.TgZ(23,"div",4)(24,"div",5)(25,"label",13),e._uU(26,"IsActive"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,N,2,0,"span",8),e.qZA()()(),e.TgZ(29,"button",15),e._uU(30,"Submit"),e.qZA()()()()),2&o&&(e.xp6(2),e.Q6J("formGroup",i.myForm),e.xp6(7),e.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.userid.errors?null:i.errorControl.userid.errors.required)),e.xp6(6),e.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.display_name.errors?null:i.errorControl.display_name.errors.required)),e.xp6(7),e.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.password.errors?null:i.errorControl.password.errors.required)),e.xp6(5),e.Q6J("formControlName","IsActive"),e.xp6(1),e.Q6J("ngIf",i.isSubmitted&&(null==i.errorControl.IsActive.errors?null:i.errorControl.IsActive.errors.required)))},dependencies:[m.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u]}),t}(),O=u(6493),J=u(7596),D=u(4766),M=u(529),I=function(){function t(r){this.http=r,this.apiUrl=D.N.apiUrl+"sellerarea"}return t.prototype.checkareaconflict=function(r,o){return this.http.get(this.apiUrl+"/will_area_conflict?mobileNumber="+r+"&newsellerid="+o)},t.\u0275fac=function(o){return new(o||t)(e.LFG(M.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),E=u(9165);function Y(t,r){1&t&&e._UZ(0,"img",5)}function F(t,r){if(1&t){var o=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",6)(3,"label"),e._uU(4,"Approval Pending-:"),e.qZA(),e.TgZ(5,"a",7),e.NdJ("click",function(){e.CHM(o);var s=e.oxw();return e.KtG(s.gotoRegisterApprove())}),e._uU(6),e.qZA()()()()}if(2&t){var i=e.oxw();e.xp6(6),e.Oqu(i.pendingapprovalformobilenumber)}}function q(t,r){if(1&t){var o=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",6)(3,"label"),e._uU(4,"New Consumer-:"),e.qZA(),e.TgZ(5,"input",8),e.NdJ("keyup",function(){e.CHM(o);var s=e.oxw();return e.KtG(s.Detect_Areacodeconflict())})("ngModelChange",function(s){e.CHM(o);var d=e.oxw();return e.KtG(d.mobileNumber=s)}),e.qZA(),e.TgZ(6,"button",9),e.NdJ("click",function(){e.CHM(o);var s=e.oxw();return e.KtG(s.New_Consumer())}),e._uU(7,"Send OTP"),e.qZA()()()()}if(2&t){var i=e.oxw();e.xp6(5),e.Q6J("ngModel",i.mobileNumber),e.xp6(1),e.Q6J("disabled",!i.mobileNumber||10!=i.mobileNumber.toString().length||i.isDetectedareaconflict)}}function H(t,r){if(1&t){var o=e.EpF();e.TgZ(0,"tr",14)(1,"td",15)(2,"button",16),e.NdJ("click",function(){var d=e.CHM(o).$implicit,_=e.oxw(2);return e.KtG(_.editProduct(d))}),e._UZ(3,"img",17),e.qZA()(),e.TgZ(4,"td",18),e._uU(5),e.qZA(),e.TgZ(6,"td",18),e._uU(7),e.qZA(),e.TgZ(8,"td",19),e._uU(9),e.qZA()()}if(2&t){var i=r.$implicit;e.xp6(5),e.Oqu(i.userid),e.xp6(2),e.Oqu(i.display_name),e.xp6(2),e.Oqu(i.IsActive)}}function Q(t,r){if(1&t&&(e.TgZ(0,"table",10)(1,"thead",11),e._UZ(2,"th"),e.TgZ(3,"th"),e._uU(4,"userid"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Customername"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"IsActive"),e.qZA(),e._UZ(9,"th",12),e.qZA(),e.TgZ(10,"tbody"),e.YNc(11,H,10,3,"tr",13),e.qZA()()),2&t){var o=e.oxw();e.xp6(11),e.Q6J("ngForOf",o.customers)}}var j=function(){function t(r,o,i,n,s,d,_,l,A,p,$,W){this.formBuilder=r,this.notify=o,this.servCommon=i,this.servCategory=n,this.servProduct=s,this.servSellerCommission=d,this.servUser=_,this.servUserExtra=l,this.servSellerarea=A,this.authServ=p,this.otpService=$,this.router=W,this.page=1,this.limit=10,this.loading=!0,this.endOfResults=!1,this.customer_id_for_Addedit=new e.vpe,this.customer_id_for_Detail=new e.vpe,this.product_id_Selected=new e.vpe,this.customers=[],this.categoryList=[],this.pendingapprovalformobilenumber="",this.wait_otpmatchstarted=!1,this.isDetectedareaconflict=!1}return t.prototype.gotoRegisterApprove=function(){this.router.navigate(["seller/registerapproveconsumer",this.pendingapprovalformobilenumber])},t.prototype.onScroll=function(r){(document.documentElement.scrollTop||document.body.scrollTop)+document.documentElement.offsetHeight>=document.documentElement.scrollHeight-100&&!this.loading&&!this.endOfResults&&this.get_Users_role_Paging()},t.prototype.ngOnInit=function(){return(0,c.mG)(this,void 0,void 0,function(){var o=this;return(0,c.Jh)(this,function(i){switch(i.label){case 0:return[4,this.alreadyExist_Consumer("1111111111",1,"pending",this.authServ.currentUserValue.id)];case 1:return i.sent(),this.get_Users(),setTimeout(function(){o.get_Users_role_Paging(),o.getCategories(),o.eventsSubscription=o.events.subscribe(function(){return o.get_Users_seller_Only()})},2e3),[2]}})})},t.prototype.sendOTP=function(r){var o=this;return new Promise(function(i,n){o.otpService.sendotpORregister({mobileNumber:r},"sendotp").subscribe(function(s){o.otp_which_sent_to_customer=s.otp_which_sent_to_customer,i(o.otp_which_sent_to_customer),o.wait_otpmatchstarted=!0,setTimeout(function(){o.wait_otpmatchstarted=!1,o.otp_which_sent_to_customer=""},3e4),console.log(s.message),console.log("otp:"+s.otp_which_sent_to_customer)},function(s){console.error("Failed to send OTP"),console.error(s)})})},t.prototype.Detect_Areacodeconflict=function(){var r=this;this.isDetectedareaconflict=!1,10==this.mobileNumber.toString().length&&this.servSellerarea.checkareaconflict(this.mobileNumber,this.authServ.currentUserValue.id).subscribe(function(i){i.conflict&&(r.notify.showWarning("Conflict occurred","Group Code"),alert("Conflict occured"),r.isDetectedareaconflict=!0)})},t.prototype.New_Consumer=function(){return(0,c.mG)(this,void 0,void 0,function(){var o;return(0,c.Jh)(this,function(i){switch(i.label){case 0:return 10!=this.mobileNumber.toString().length?[3,4]:[4,this.alreadyExist_Consumer(this.mobileNumber,0,"0",this.authServ.currentUserValue.id)];case 1:return 1!=i.sent()?[3,2]:(this.notify.showInfo("already existing consumer","Consumer care"),[3,4]);case 2:return[4,this.sendOTP(this.mobileNumber)];case 3:o=i.sent(),this.notify.showInfo("Sent OTP to New Consumer","Communicating"),this.servUserExtra.New_Consumer({mobileNumber:this.mobileNumber,seller_id:this.authServ.currentUserValue.id,otpfromsupplier:o}).subscribe(function(n){console.log("response of new consumer added:"+JSON.stringify(n))}),this.mobileNumber="",i.label=4;case 4:return[2]}})})},t.prototype.alreadyExist_Consumer=function(r,o,i,n){var s=this;return void 0===i&&(i="0"),void 0===n&&(n=0),console.log("mobilenumber:"+r+" ,from_userExtra:"+o+",approval_status:"+i+", seller_id:"+n),new Promise(function(d,_){s.servUserExtra.getConsumers(r,o,i,n).subscribe(function(l){console.log("getConsumer response:"+JSON.stringify(l)),l[0]&&l[0].userid?(console.log("result filter:"+JSON.stringify(l.filter(function(p){return"pending"==p.approval_status}))),l.filter(function(p){return"pending"==p.approval_status}).length&&(s.pendingapprovalformobilenumber=l.filter(function(p){return"pending"==p.approval_status})[0].userid),d(!0)):d(!1)})})},t.prototype.getCategories=function(){var r=this;this.servCategory.getCategorys().subscribe(function(o){r.categoryList=o})},t.prototype.ngOnDestroy=function(){this.eventsSubscription.unsubscribe()},t.prototype.get_Users=function(){var r=this;this.servUser.getUsers("").subscribe(function(o){r.users=o})},t.prototype.addProduct=function(){this.customer_id_for_Addedit.emit(0)},t.prototype.editProduct=function(r){this.customer_id_for_Detail.emit(void 0),this.customer_id_for_Addedit.emit(r.id)},t.prototype.selectProduct=function(r){this.customer_id_for_Addedit.emit(void 0),this.customer_id_for_Detail.emit(r.id)},t.prototype.get_Users_seller_Only=function(){var r=this;this.servUser.getUsers_Of_role("Customer").subscribe(function(o){r.customers=o})},t.prototype.get_Users_role_Paging=function(){var r=this;this.loading=!0,this.servUser.getUsers_Of_role_paging(this.page,this.limit,"Customer",this.authServ.currentUserValue.id).subscribe(function(o){var i;console.log("data pulled paging:"+o),0===o.length?r.endOfResults=!0:((i=r.customers).push.apply(i,(0,c.ev)([],(0,c.CR)(o),!1)),r.page++),r.loading=!1})},t.\u0275fac=function(o){return new(o||t)(e.Y36(a.qu),e.Y36(S.g),e.Y36(O.v),e.Y36(y.H),e.Y36(h.M),e.Y36(C.b),e.Y36(v.K),e.Y36(J.P),e.Y36(I),e.Y36(b.$),e.Y36(E.n),e.Y36(f.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-display-customers-paging"]],hostBindings:function(o,i){1&o&&e.NdJ("scroll",function(s){return i.onScroll(s)},!1,e.Jf7)},inputs:{events:"events"},outputs:{customer_id_for_Addedit:"customer_id_for_Addedit",customer_id_for_Detail:"customer_id_for_Detail",product_id_Selected:"product_id_Selected"},decls:6,vars:4,consts:[["style","height:50px;width:70px","src","../../../../../../assets/icon/loading.gif",4,"ngIf"],["class","card",4,"ngIf"],[1,"card"],[1,"card-body"],["class","table table-striped",4,"ngIf"],["src","../../../../../../assets/icon/loading.gif",2,"height","50px","width","70px"],[2,"float","right","width","350px"],["href","javascript: void(0);",3,"click"],["type","number",2,"width","110px",3,"ngModel","keyup","ngModelChange"],[3,"disabled","click"],[1,"table","table-striped"],[1,"text-primary"],["scope","col"],["style","height: 5px;",4,"ngFor","ngForOf"],[2,"height","5px"],[2,"width","40px"],[1,"btn","btn-danger","btn-sm",2,"padding","0",3,"click"],["src","/assets/icon/Edit.png","alt","Edit",1,"btn-icon",2,"height","20px"],[2,"width","140px","height","5px"],[2,"width","40px","height","5px"]],template:function(o,i){1&o&&(e.YNc(0,Y,1,0,"img",0),e.YNc(1,F,7,1,"div",1),e.YNc(2,q,8,2,"div",1),e.TgZ(3,"div",2)(4,"div",3),e.YNc(5,Q,12,1,"table",4),e.qZA()()),2&o&&(e.Q6J("ngIf",i.loading),e.xp6(1),e.Q6J("ngIf",i.pendingapprovalformobilenumber&&!i.loading),e.xp6(1),e.Q6J("ngIf",!i.pendingapprovalformobilenumber&&!i.loading),e.xp6(3),e.Q6J("ngIf",!i.loading))},dependencies:[m.sg,m.O5,a.Fj,a.wV,a.JJ,a.On]}),t}();function B(t,r){if(1&t){var o=e.EpF();e.TgZ(0,"app-display-customers-paging",4),e.NdJ("customer_id_for_Addedit",function(s){e.CHM(o);var d=e.oxw();return e.KtG(d.Customer_Select_Changed_for_Addedit(s))})("customer_id_for_Detail",function(s){e.CHM(o);var d=e.oxw();return e.KtG(d.Customer_Select_Changed_for_Detail(s))}),e.qZA()}if(2&t){var i=e.oxw();e.Q6J("events",i.eventsSubject.asObservable())}}function G(t,r){if(1&t){var o=e.EpF();e.TgZ(0,"app-customers-add-edit",5),e.NdJ("formSaved",function(s){e.CHM(o);var d=e.oxw();return e.KtG(d.customerformSave_Detected(s))}),e.qZA()}if(2&t){var i=e.oxw();e.Q6J("param_Customer_id",i.curr_Customer_id_for_Addedit)}}var k=function(){function t(){this.eventsSubject=new Z.xQ}return t.prototype.emitEventToChild=function(){this.eventsSubject.next()},t.prototype.Customer_Select_Changed_for_Addedit=function(r){this.curr_Customer_id_for_Addedit=r},t.prototype.Customer_Select_Changed_for_Detail=function(r){this.curr_Prod_id_for_detail=r},t.prototype.customerformSave_Detected=function(r){this.curr_Customer_id_for_Addedit=null,this.emitEventToChild()},t.prototype.onScroll=function(r){console.log("scrolling...")},t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-customers"]],hostBindings:function(o,i){1&o&&e.NdJ("scroll",function(s){return i.onScroll(s)},!1,e.Jf7)},decls:5,vars:2,consts:[[1,"row"],[1,"col-12"],[3,"events","customer_id_for_Addedit","customer_id_for_Detail",4,"ngIf"],[3,"param_Customer_id","formSaved",4,"ngIf"],[3,"events","customer_id_for_Addedit","customer_id_for_Detail"],[3,"param_Customer_id","formSaved"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,B,1,1,"app-display-customers-paging",2),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,G,1,1,"app-customers-add-edit",3),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("ngIf",null==i.curr_Customer_id_for_Addedit),e.xp6(2),e.Q6J("ngIf",i.curr_Customer_id_for_Addedit))},dependencies:[m.O5,P,j]}),t}(),K=function(t){return{active:t}},R=[{path:"",component:function(){function t(){this.selectedOption="Sellers"}return t.prototype.selectOption=function(r){this.selectedOption=r},t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-manage-users"]],decls:9,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"navbar","navbar-light","bg-light"],[1,"container-fluid"],[1,"nav","d-flex"],[1,"nav-item",3,"ngClass"],["routerLink","Customers","href","#",1,"nav-link",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"div",3)(4,"ul",4)(5,"li",5)(6,"a",6),e.NdJ("click",function(){return i.selectOption("Customers")}),e._uU(7," Customers "),e.qZA()()()()(),e._UZ(8,"router-outlet"),e.qZA()()),2&o&&(e.xp6(5),e.Q6J("ngClass",e.VKq(1,K,"Customers"===i.selectedOption)))},dependencies:[m.mk,f.lC,f.rH],styles:[".nav[_ngcontent-%COMP%]{background-color:#c6a06e;border-radius:7px;height:35px}.active[_ngcontent-%COMP%]{background-color:#000;border:1px solid white;color:#fff;border-radius:7px;height:35px}"]}),t}(),children:[{path:"",redirectTo:"Customers",pathMatch:"full"},{path:"Customers",component:k},{path:"DBoys",component:U.l}]}],V=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(R),f.Bz]}),t}(),X=u(7158),z=function(){function t(){}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,a.u5,a.UX,X.A0,V]}),t}()}}]);