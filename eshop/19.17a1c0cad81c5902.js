"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[19],{1019:(E,u,e)=>{e.r(u),e.d(u,{SellerModule:()=>Y});var c=e(6895),h=e(7716),f=e(5567),v=e(4766),o=e(4650),y=e(529),g=e(6395),C=e(5474),P=e(2114),O=e(7807),R=e(6493),S=e(868),l=e(4006);function U(n,t){if(1&n){var s=o.EpF();o.TgZ(0,"div")(1,"button",9),o.NdJ("click",function(){o.CHM(s);var m=o.oxw();return o.KtG(m.createOrder())}),o._uU(2,"Pay Commission"),o.qZA(),o._UZ(3,"input",10),o.qZA()}if(2&n){var i=o.oxw();o.xp6(3),o.Q6J("ngModel",i.Commision_to_pay)}}function M(n,t){if(1&n){var s=o.EpF();o.TgZ(0,"div")(1,"razorpay",11),o.NdJ("paymentSuccess",function(m){o.CHM(s);var a=o.oxw();return o.KtG(a.handlePaymentSuccess(m))}),o.qZA()()}if(2&n){var i=o.oxw();o.xp6(1),o.Q6J("param_RP_Orderid",i.RPOrderid)("param_RP_Amount",i.RPamount)("param_RP_currency",i.RPcurrency)("param_RP_receipt",i.RPreceipt)("param_RP_Notes",i.RPnotes)}}function Z(n,t){if(1&n){var s=o.EpF();o.TgZ(0,"tr",12)(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td",12),o._uU(4),o.qZA(),o.TgZ(5,"td",12),o._uU(6),o.qZA(),o.TgZ(7,"td",12),o._uU(8),o.qZA(),o.TgZ(9,"td",13)(10,"input",14),o.NdJ("ngModelChange",function(a){var d=o.CHM(s);return o.KtG(d.$implicit.selected=a)})("change",function(){o.CHM(s);var a=o.oxw();return o.KtG(a.calculateCommission())}),o.qZA()()()}if(2&n){var i=t.$implicit,r=o.oxw();o.xp6(2),o.Oqu(i.orderId),o.xp6(2),o.Oqu(r.servCommon.GetDisplayNameByKey(r.users,"id",i.userId,"display_name")),o.xp6(2),o.hij(" ",i.EffectiveAmount," "),o.xp6(2),o.hij(" ",i.commission_applicable," "),o.xp6(2),o.Q6J("ngModel",i.selected)}}var A=function(){function n(t,s,i,r,m,a){var d=this;this.http=t,this.winRef=s,this.servOrderCommission=i,this.servAuth=r,this.servUser=m,this.servCommon=a,this.apiUrl=v.N.apiUrl,this.servAuth.currentUser.subscribe(function(p){return d.currentUser=p})}return n.prototype.ngOnInit=function(){var t=this;this.get_Users(),this.Get_Completed_Orders_Of_Sellers_For_PayCommission(),this.servOrderCommission.getSellerpaycommission().subscribe(function(s){return t.Sellerpaycommission=s}),setTimeout(function(){console.log("Sellerpaycommission:"+JSON.stringify(t.Sellerpaycommission)),t.Commision_to_pay=Math.ceil(t.Sellerpaycommission)},3e3)},n.prototype.calculateCommission=function(){var t=this.Unpaid_Commission_Orders_Of_Sellers.filter(function(s){return s.selected});this.Commision_to_pay=t.reduce(function(s,i){return s+i.commission_applicable},0),this.Commision_to_pay=Math.ceil(this.Commision_to_pay)},n.prototype.handlePaymentSuccess=function(t){console.log("m in payCommision of seller and Payment successful:",t);var i=this.Unpaid_Commission_Orders_Of_Sellers.filter(function(r){return r.selected}).map(function(r){return r.orderId}).join(",");console.log("comma seperated orderIds are:"+i),this.servOrderCommission.PayCommission_for_Orders(i).subscribe(function(r){console.log("orderIds:"+i+" being declared as PAID status for commission")})},n.prototype.createOrder=function(){var t=this,s=this.apiUrl+"Razor",i={amount:this.Commision_to_pay,currency:"INR",receipt:"RPreceipt",notes:"RPnotes"};console.log("creating order with options:"+JSON.stringify(i)),this.http.post(s,i).subscribe(function(r){console.log("rrrrrrrrrrrrresponse:"+JSON.stringify(r.id)),t.RPOrderid=r.id,t.RPamount=t.Commision_to_pay,t.RPcurrency="INR",t.RPreceipt="RPreceipt",t.RPnotes="RPnotes"})},n.prototype.Get_Completed_Orders_Of_Sellers_For_PayCommission=function(){var t=this;this.servOrderCommission.Get_Completed_Orders_Of_Sellers_For_PayCommission(this.currentUser.id,"Complete").subscribe(function(s){t.Unpaid_Commission_Orders_Of_Sellers=s,console.log("Unpaid_Commission_Orders_Of_Sellers:"+JSON.stringify(t.Unpaid_Commission_Orders_Of_Sellers)),t.Unpaid_Commission_Orders_Of_Sellers.forEach(function(i){i.selected=!0}),t.calculateCommission()})},n.prototype.get_Users=function(){var t=this;this.servUser.getUsers("").subscribe(function(s){t.users=s})},n.\u0275fac=function(s){return new(s||n)(o.Y36(y.eN),o.Y36(g.f),o.Y36(C.E),o.Y36(P.$),o.Y36(O.K),o.Y36(R.v))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-paycommission"]],inputs:{events:"events"},decls:20,vars:3,consts:[[1,"row"],[1,"col-6>"],[4,"ngIf"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"table","table-striped"],[1,"text-primary"],["style","height: 5px;",4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"],["type","text","readonly","",3,"ngModel"],[3,"param_RP_Orderid","param_RP_Amount","param_RP_currency","param_RP_receipt","param_RP_Notes","paymentSuccess"],[2,"height","5px"],[2,"display","none","height","5px"],["type","checkbox",3,"ngModel","ngModelChange","change"]],template:function(s,i){1&s&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,U,4,1,"div",2),o.YNc(3,M,2,5,"div",2),o.qZA()(),o.TgZ(4,"div",0)(5,"div",3)(6,"div",4)(7,"div",5)(8,"table",6)(9,"thead",7)(10,"th"),o._uU(11,"OrderId"),o.qZA(),o.TgZ(12,"th"),o._uU(13,"Customer"),o.qZA(),o.TgZ(14,"th"),o._uU(15,"Amount"),o.qZA(),o.TgZ(16,"th"),o._uU(17,"Commission"),o.qZA()(),o.TgZ(18,"tbody"),o.YNc(19,Z,11,5,"tr",8),o.qZA()()()()()()),2&s&&(o.xp6(2),o.Q6J("ngIf",!i.RPOrderid),o.xp6(1),o.Q6J("ngIf",i.RPOrderid),o.xp6(16),o.Q6J("ngForOf",i.Unpaid_Commission_Orders_Of_Sellers))},dependencies:[S.v,c.sg,c.O5,l.Fj,l.Wl,l.JJ,l.On]}),n}(),x=[{path:"aa",component:e(7557).N},{path:"",loadChildren:function(){return e.e(909).then(e.bind(e,9909)).then(function(n){return n.ManageProductsModule})}},{path:"manage_product",loadChildren:function(){return e.e(909).then(e.bind(e,9909)).then(function(n){return n.ManageProductsModule})}},{path:"manage_orders",loadChildren:function(){return e.e(625).then(e.bind(e,3637)).then(function(n){return n.ManageOrdersModule})}},{path:"manage_promotions",loadChildren:function(){return e.e(865).then(e.bind(e,865)).then(function(n){return n.ManagePromotionsModule})}},{path:"paycommission",component:A},{path:"dboy",component:f.l}],N=function(){function n(){}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[h.Bz.forChild(x),h.Bz]}),n}(),J=e(3738),I=e(460),F=e(1633),Y=function(){function n(){}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[F.m,c.ez,l.u5,l.UX,J.W,I.kn.forRoot(),N]}),n}()}}]);