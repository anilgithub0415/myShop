"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[592],{5474:(f,c,s)=>{s.d(c,{E:()=>d});var p=s(4766),u=s(591),l=s(4850),a=s(4650),h=s(529),_=s(2114),d=function(){function e(o,t){var r=this;this.http=o,this.servAuth=t,this.apiUrl=p.N.apiUrl+"ordercommission",this.orderSubject=new u.X({}),this.orderitemSubject=new u.X([]),this.SellerpaycommissionSubject=new u.X({}),this.servAuth.currentUser.subscribe(function(i){return r.currentUser=i}),this.servAuth.isUserLoggedIn()&&this.loadOrders()}return e.prototype.Get_Completed_Orders_Of_Sellers_For_PayCommission=function(o,t){var r=this.apiUrl+"/"+o;return console.log("url:"+r),""!=t&&(r=r+"/"+t),this.http.get(r)},e.prototype.PayCommission_for_Order=function(o){return this.http.put(this.apiUrl+"/PayCommission?orderId="+o.orderId,{})},e.prototype.Get_Sellers_UNPAID_Commission_Summary=function(o){return this.http.get(this.apiUrl+"/0/Complete")},e.prototype.Get_Orders_Of_Customer=function(o,t){var r=this.apiUrl+"/"+o+"/0";return console.log("url:"+r),""!=t&&(r=r+"/"+t),this.http.get(r)},e.prototype.PlaceOrder=function(o,t,r){return this.http.post(this.apiUrl,{userId:o,orderdate:Date(),orderItems:t}).subscribe(function(){})},e.prototype.CheckOutOrder=function(o,t,r,i,n,m){return this.http.post(this.apiUrl,{order_status:o,userId:t,seller_id:r,orderdate:Date(),orderItems:i,totalAmount:n,discount:m}).subscribe(function(){})},e.prototype.getOrder=function(){return this.orderSubject.asObservable()},e.prototype.getOrderItems=function(){return this.orderitemSubject.asObservable()},e.prototype.getSellerpaycommission=function(){return this.SellerpaycommissionSubject.asObservable()},e.prototype.loadOrders=function(){var o=this;console.log("loadorders");var r=0;this.http.get(this.apiUrl+"/"+this.currentUser.id+"/Complete").pipe((0,l.U)(function(i){return i.map(function(n){"UNPAID"==n.commission_status&&(r+=n.commission_applicable)}),r})).subscribe(function(i){o.SellerpaycommissionSubject.next(i)})},e.prototype.serOrderStatus=function(o,t){return this.http.put(this.apiUrl+"/orderstatuschange?orderid="+o+"&orderstatus="+t,{}).subscribe(function(){})},e.\u0275fac=function(t){return new(t||e)(a.LFG(h.eN),a.LFG(_.$))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);