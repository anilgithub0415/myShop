"use strict";(self.webpackChunkEshop=self.webpackChunkEshop||[]).push([[592],{2011:(m,l,n)=>{n.d(l,{H:()=>a});var _=n(4766),u=n(4650),h=n(529),a=function(){function r(t){this.http=t,this.apiUrl=_.N.apiUrl+"category"}return r.prototype.getCategorys=function(){return this.http.get(this.apiUrl)},r.prototype.getProduct=function(t){var c="".concat(this.apiUrl,"/").concat(t);return console.log(c),this.http.get(c)},r.prototype.addProduct=function(t){return this.http.post(this.apiUrl,t)},r.prototype.updateProduct=function(t){var c="".concat(this.apiUrl,"/").concat(t.id);return this.http.put(c,t)},r.prototype.deleteProduct=function(t){var c="".concat(this.apiUrl,"/").concat(t);return this.http.delete(c)},r.\u0275fac=function(c){return new(c||r)(u.LFG(h.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()},5474:(m,l,n)=>{n.d(l,{E:()=>c});var _=n(4766),u=n(591),h=n(4850),a=n(4650),r=n(529),t=n(2114),c=function(){function o(s,e){var i=this;this.http=s,this.servAuth=e,this.apiUrl=_.N.apiUrl+"ordercommission",this.orderSubject=new u.X({}),this.orderitemSubject=new u.X([]),this.SellerpaycommissionSubject=new u.X({}),this.servAuth.currentUser.subscribe(function(p){return i.currentUser=p}),this.servAuth.isUserLoggedIn()&&this.loadOrders()}return o.prototype.Get_Completed_Orders_Of_Sellers_For_PayCommission=function(s,e){var i=this.apiUrl+"/"+s;return console.log("url:"+i),""!=e&&(i=i+"/"+e),this.http.get(i)},o.prototype.PayCommission_for_Order=function(s){return this.http.put(this.apiUrl+"/PayCommission?orderId="+s.orderId,{})},o.prototype.Get_Sellers_UNPAID_Commission_Summary=function(s){return this.http.get(this.apiUrl+"/0/Complete")},o.prototype.Get_Orders_Of_Customer=function(s,e){var i=this.apiUrl+"/"+s+"/0";return console.log("url:"+i),""!=e&&(i=i+"/"+e),this.http.get(i)},o.prototype.PlaceOrder=function(s,e,i){return this.http.post(this.apiUrl,{userId:s,orderdate:Date(),orderItems:e}).subscribe(function(){})},o.prototype.CheckOutOrder=function(s,e,i,p,d,v){return this.http.post(this.apiUrl,{order_status:s,userId:e,seller_id:i,orderdate:Date(),orderItems:p,totalAmount:d,discount:v}).subscribe(function(){})},o.prototype.getOrder=function(){return this.orderSubject.asObservable()},o.prototype.getOrderItems=function(){return this.orderitemSubject.asObservable()},o.prototype.getSellerpaycommission=function(){return this.SellerpaycommissionSubject.asObservable()},o.prototype.loadOrders=function(){var s=this;console.log("loadorders");var i=0;this.http.get(this.apiUrl+"/"+this.currentUser.id+"/Complete").pipe((0,h.U)(function(p){return p.map(function(d){"UNPAID"==d.commission_status&&(i+=d.commission_applicable)}),i})).subscribe(function(p){s.SellerpaycommissionSubject.next(p)})},o.prototype.serOrderStatus=function(s,e){return this.http.put(this.apiUrl+"/orderstatuschange?orderid="+s+"&orderstatus="+e,{}).subscribe(function(){})},o.\u0275fac=function(e){return new(e||o)(a.LFG(r.eN),a.LFG(t.$))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o}()},6173:(m,l,n)=>{n.d(l,{b:()=>a});var _=n(4766),u=n(4650),h=n(529),a=function(){function r(t){this.http=t,this.apiUrl=_.N.apiUrl+"sellercommission"}return r.prototype.get_Seller_Commission_Setting=function(t,c){void 0===t&&(t=0);var o=this.apiUrl+"/0";return c&&(o=this.apiUrl+"/"+t),console.log("url:"+o),this.http.get(o)},r.prototype.update_Seller_Commission_Setting=function(t){console.log("m in updateProduct method of product service...");var c="".concat(this.apiUrl,"/").concat(t.id);return this.http.put(c,t)},r.\u0275fac=function(c){return new(c||r)(u.LFG(h.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()}}]);