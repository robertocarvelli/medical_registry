(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d52d2d3a"],{"1f4f":function(e,t,a){"use strict";a("a9e3");var i=a("5530"),s=(a("8b37"),a("80d2")),r=a("7560"),n=a("58df");t["a"]=Object(n["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"236b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{elevation:"0"}},[a("v-card-title",[e._v("Farmaci ")]),a("v-timeline",{attrs:{"align-top":"",dense:""}},e._l(e.items,(function(t){return a("v-timeline-item",{key:t.id_care,attrs:{small:""}},[a("v-card",{staticClass:"elevation-3"},[a("v-card-title",{staticClass:"text-center"},[e._v(e._s(t.medicine.name))]),t.to?a("v-card-title",{staticClass:"headline capitalized"},[e._v(" Dal "+e._s(e.formatDate(t.from))+" al "+e._s(e.formatDate(t.to))+" ")]):a("v-card-title",{staticClass:"headline capitalized"},[e._v(" "+e._s(e.formatDate(t.from))+" ")]),a("v-card-text",[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left",staticStyle:{width:"500px"}},[e._v("Causa")]),t.dosage?a("th",{staticClass:"text-left"},[e._v("Dosaggio")]):e._e(),t.unit?a("th",{staticClass:"text-left"},[e._v(" Unità")]):e._e(),t.daily_frequency?a("th",{staticClass:"text-left"},[e._v(" Frequenza")]):e._e(),t.body_impacted?a("th",{staticClass:"text-left"},[e._v(" Parte del corpo")]):e._e(),a("th",{attrs:{colspan:"2"}})])]),a("tbody",[a("tr",[t.trauma?a("td",[e._v(e._s(t.trauma.name)+" (Trauma)")]):e._e(),t.disease?a("td",[e._v(e._s(t.diseaseRegister.name)+" (Patologia)")]):e._e(),t.allergyRegister?a("td",[e._v(e._s(t.allergyRegister.name)+" (Allergia)")]):e._e(),t.intervention?a("td",[e._v(e._s(t.intervention.name)+" (Intervento)")]):e._e(),t.dosage?a("td",[e._v(e._s(t.dosage))]):e._e(),t.unit?a("td",[e._v(e._s(t.unit))]):e._e(),t.daily_frequency?a("td",[e._v(e._s(t.daily_frequency))]):e._e(),t.body_impacted?a("td",[e._v(" "+e._s(t.body_impacted))]):e._e(),a("td",{attrs:{colspan:"4"}})])])]},proxy:!0}],null,!0)})],1)],1)],1)})),1),a("AutocompleteSearch",{attrs:{"invalid-hint":"Seleziona Intervento",label:"Intervento",table:e.database.allergy_register}})],1)},s=[],r=(a("d81d"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("5530")),n=a("2909"),d=(a("96cf"),a("1da1")),l=a("8527"),c=a("f773"),o=a("c1df"),u=a.n(o),_=a("b28a"),v={name:"Medicines",components:{AutocompleteSearch:_["a"]},methods:{formatDate:function(e){return u()(e).format("LL")},fetchMedicines:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a,i,s,d,o,u,_,v,m,h,f,b,p,y,g,x,w,j;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].medicines.where({id_person:e.$store.state.user.id}).toArray();case 2:return a=t.sent,i=Object(n["a"])(new Set(a.map((function(e){return e.id_medicine})))),t.next=6,c["a"].medicine_register.bulkGet(i);case 6:return s=t.sent,d=Object(l["keyBy"])(s,"id"),t.next=10,c["a"].interventions.where({id_person:e.$store.state.user.id}).toArray();case 10:return o=t.sent,u=Object(l["keyBy"])(o,"id_care"),t.next=14,c["a"].intervention_register.toArray();case 14:return _=t.sent,v=Object(l["keyBy"])(_,"id"),t.next=18,c["a"].traumas.where({id_person:e.$store.state.user.id}).toArray();case 18:return m=t.sent,h=Object(l["keyBy"])(m,"id_trauma"),t.next=22,c["a"].diseases.where({id_person:e.$store.state.user.id}).toArray();case 22:return f=t.sent,b=Object(l["keyBy"])(f,"id_care"),t.next=26,c["a"].disease_register.toArray();case 26:return p=t.sent,y=Object(l["keyBy"])(p,"id"),t.next=30,c["a"].allergies.where({id_person:e.$store.state.user.id}).toArray();case 30:return g=t.sent,x=Object(l["keyBy"])(g,"id_care"),t.next=34,c["a"].allergy_register.toArray();case 34:w=t.sent,j=Object(l["keyBy"])(w,"id"),e.items=a.map((function(e){var t,a,i,s,n,l;return Object(r["a"])(Object(r["a"])({},e),{},{medicine:d[e.id_medicine],trauma:h[e.id_trauma],disease:b[e.id_disease],diseaseRegister:y[null!==(t=null===(a=b[e.id_disease])||void 0===a?void 0:a.id_disease)&&void 0!==t?t:0],allergyRegister:j[null!==(i=null===(s=x[e.id_allergy])||void 0===s?void 0:s.id_allergy)&&void 0!==i?i:0],intervention:v[null!==(n=null===(l=u[e.id_intervention])||void 0===l?void 0:l.id_intervention)&&void 0!==n?n:0]})}));case 37:case"end":return t.stop()}}),t)})))()}},data:function(){return{database:c["a"],items:null}},created:function(){this.fetchMedicines()}},m=v,h=a("2877"),f=a("6544"),b=a.n(f),p=a("b0af"),y=a("99d9"),g=a("1f4f"),x=a("8414"),w=a("1e06"),j=Object(h["a"])(m,i,s,!1,null,null,null);t["default"]=j.exports;b()(j,{VCard:p["a"],VCardText:y["b"],VCardTitle:y["c"],VSimpleTable:g["a"],VTimeline:x["a"],VTimelineItem:w["a"]})},"8b37":function(e,t,a){}}]);
//# sourceMappingURL=chunk-d52d2d3a.5f7266ee.js.map