"use strict";(self.webpackChunkmyShop=self.webpackChunkmyShop||[]).push([[180],{3180:(L,l,s)=>{s.r(l),s.d(l,{AuthModule:()=>A});var a=s(6895),u=s(6123),t=s(433),g=s(590),o=s(1571),p=s(1716);function c(e,i){1&e&&(o.TgZ(0,"div"),o._uU(1,"Username is required"),o.qZA())}function f(e,i){if(1&e&&(o.TgZ(0,"div",19),o.YNc(1,c,2,0,"div",20),o.qZA()),2&e){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",null==r.f.username.errors?null:r.f.username.errors.required)}}function h(e,i){1&e&&(o.TgZ(0,"div"),o._uU(1,"Password is required"),o.qZA())}function v(e,i){if(1&e&&(o.TgZ(0,"div",19),o.YNc(1,h,2,0,"div",20),o.qZA()),2&e){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",null==r.f.password.errors?null:r.f.password.errors.required)}}function b(e,i){1&e&&o._UZ(0,"span",21)}function Z(e,i){if(1&e&&(o.TgZ(0,"div",22),o._uU(1),o.qZA()),2&e){const r=o.oxw();o.xp6(1),o.Oqu(r.error)}}const d=function(e){return{"is-invalid":e}},U=[{path:"",children:[{path:"login",component:(()=>{class e{constructor(r,n,m,y){this.formBuilder=r,this.route=n,this.router=m,this.authServ=y,this.loading=!1,this.submitted=!1,this.error="",this.authServ.currentUserValue&&(console.log("already logged in"),this.router.navigate(["/"]))}ngOnInit(){this.loginForm=this.formBuilder.group({username:["pinky",t.kI.required],password:["pinky",t.kI.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&(this.loading=!0,this.authServ.loginbycredential(this.f.username.value,this.f.password.value).pipe((0,g.P)()).subscribe(r=>{"SELLER"==r.userrole.toLocaleUpperCase()?this.router.navigateByUrl("seller"):"CUSTOMER"==r.userrole.toLocaleUpperCase()?this.router.navigateByUrl("home"):"ADMIN"==r.userrole.toLocaleUpperCase()&&(console.log(r.userrole.toLocaleUpperCase()+" navigate to admin oute"),this.router.navigateByUrl("admin"))},r=>{this.error=r,this.loading=!1}))}}return e.\u0275fac=function(r){return new(r||e)(o.Y36(t.qu),o.Y36(u.gz),o.Y36(u.F0),o.Y36(p.$))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:29,vars:12,consts:[["id","divForm",2,"width","100%","height","100%"],["divForm",""],[1,"row"],[1,"col-md-3","col-sm-5","col-xs-1","offset-md-4","mt-5",2,"background-color","black"],[1,"row",2,"background-color","cadetblue"],[1,"col-md-3","col-sm-5","col-xs-1","offset-md-4","mt-5",2,"background-color","cadetblue"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(r,n){1&r&&(o.TgZ(0,"p"),o._uU(1,"login works!"),o.qZA(),o.TgZ(2,"div",0,1)(4,"div",2)(5,"div",3),o._uU(6," XYZ Management System "),o.qZA()(),o._UZ(7,"div",4),o.TgZ(8,"div",2)(9,"div",5)(10,"div",6)(11,"h4",7),o._uU(12,"Login"),o.qZA(),o.TgZ(13,"div",8)(14,"form",9),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(15,"div",10)(16,"label",11),o._uU(17,"Username"),o.qZA(),o._UZ(18,"input",12),o.YNc(19,f,2,1,"div",13),o.qZA(),o.TgZ(20,"div",10)(21,"label",14),o._uU(22,"Password"),o.qZA(),o._UZ(23,"input",15),o.YNc(24,v,2,1,"div",13),o.qZA(),o.TgZ(25,"button",16),o.YNc(26,b,1,0,"span",17),o._uU(27," Login "),o.qZA(),o.YNc(28,Z,2,1,"div",18),o.qZA()()()()()()),2&r&&(o.xp6(14),o.Q6J("formGroup",n.loginForm),o.xp6(4),o.Q6J("ngClass",o.VKq(8,d,n.submitted&&n.f.username.errors)),o.xp6(1),o.Q6J("ngIf",n.submitted&&n.f.username.errors),o.xp6(4),o.Q6J("ngClass",o.VKq(10,d,n.submitted&&n.f.password.errors)),o.xp6(1),o.Q6J("ngIf",n.submitted&&n.f.password.errors),o.xp6(1),o.Q6J("disabled",n.loading),o.xp6(1),o.Q6J("ngIf",n.loading),o.xp6(2),o.Q6J("ngIf",n.error))},dependencies:[a.mk,a.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]}),e})()}]}];let C=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.Bz.forChild(U),t.u5,t.UX,u.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.ez,t.u5,t.UX,C]}),e})()}}]);