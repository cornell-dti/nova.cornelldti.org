(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7G82":function(e){e.exports=JSON.parse('{"hero":{"header":"We Are Our Products","subheader":"We\'ve learned that tackling the hardest problems is the only way to truly create value for the people around us. Each of our projects address an unfulfilled need that exists in our community using human-centered design and software engineering.","lazy":"/static/pages/projects-hero-lazy.jpg","video":{"mp4":"https://d2ytxic79evey7.cloudfront.net/pages/projects/hero/hero.mp4","webm":"https://d2ytxic79evey7.cloudfront.net/pages/projects/hero/hero.webm"},"image":"/static/pages/projects-hero.png"},"footer":{},"projects":{"flux":"projects.flux","queuemein":"projects.queuemein","researchconnect":"projects.researchconnect","reviews":"projects.reviews","samwise":"projects.samwise","events":"projects.events","orientation":"projects.orientation","courseplan":"projects.courseplan"},"notReadyProjects":{"rescuer":"projects.rescuer"},"archivedProjects":{"shout":"projects.shout"}}')},G3iV:function(e,t,a){},TB3X:function(e,t,a){"use strict";var c=a("G3iV");a.n(c).a},fx0o:function(e,t,a){"use strict";a.r(t);a("2B1R");var c=a("J2ws"),r=a("6VQF"),s=a("kgum"),n=a("kqaG"),o=a("mrSG"),i=a("oCYn"),d=a("G0B5"),p=a("7G82"),u=i.default.extend({props:{projects:{required:!0}},computed:{content:function(){return p},projectRows:function(){for(var e=[],t=[],a=this.projects,c=0,r=0;r<a.length;r+=1)!1!==a[r].active&&(t.push(a[r]),3!==t.length&&3*e.length!==a.length||(e.push({index:c,members:t}),c+=1,t=[]));return t.length>0&&e.push({index:c,members:t}),e}}}),l=(a("TB3X"),a("KHd+")),f=Object(l.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.content?a("page-background",[a("nova-hero",{attrs:{header:e.content.hero.header,subheader:e.content.hero.subheader,video:e.content.hero.video,lazy:e.content.hero.lazy,image:e.content.hero.image,page:"projects"}}),a("page-section",{staticClass:"project-page-main-section"},e._l(e.projectRows,(function(t){return a("b-row",{key:t.index,staticClass:"project-row",attrs:{"align-h":"center"}},e._l(t.members,(function(e){return a("b-col",{key:e.id,staticClass:"justify-content",attrs:{md:"12",lg:"4"}},[a("g-link",{attrs:{to:{path:"/projects/"+e.teamId+"/"}}},[a("b-img",{staticClass:"project-card",attrs:{src:e.card}})],1)],1)})),1)})),1),a("dti-footer",{attrs:{page:"projects"}})],1):e._e()}),[],!1,null,"38460a26",null).exports,h=function(e){Object(s.a)(a,e);var t=Object(n.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"projects",get:function(){return this.$static.projects.edges.map((function(e){return e.node}))}}]),a}(i.default),j=h=Object(o.a)([Object(d.a)({metaInfo:{title:"Projects"},components:{ProjectsView:f}})],h),b=i.default.config.optionMergeStrategies.computed,m={projects:{edges:[{node:{id:"d69baf1a1a47672184342e6f7bc29bfe",active:!1,teamId:"website",card:"/static/projects/website-card.png"}},{node:{id:"567babf3e016825ab5cce6211dba0966",active:!1,teamId:"shout",card:"/static/projects/shout-card.png"}},{node:{id:"0c77aa75a2cd638d0f517e772c31aa1a",active:null,teamId:"samwise",card:"/static/projects/samwise-card.png"}},{node:{id:"3c9be7592d82ef05bcf077eb71ff557a",active:null,teamId:"reviews",card:"/static/projects/reviews-card.png"}},{node:{id:"0f5efa67c2678f081bb368633253f691",active:!1,teamId:"research",card:"/static/projects/researchconnect-card.png"}},{node:{id:"7aff3b2486d5271a7b4a99db9182251b",active:null,teamId:"courseplan",card:"/static/projects/courseplan-card.png"}},{node:{id:"f141b330bc00135de684c3cab1027056",active:null,teamId:"queuemein",card:"/static/projects/queuemein-card.png"}},{node:{id:"eb653eb8b6ba5d2388ec55e884a89fad",active:null,teamId:"flux",card:"/static/projects/flux-card.png"}},{node:{id:"72f675e1ba3192a621dbbb8d54db0a8c",active:null,teamId:"events",card:"/static/projects/events-card.png"}},{node:{id:"6ff6f53c48479740778d269ddb5c9fa0",active:null,teamId:"carriage",card:"/static/projects/carriage-card.png"}},{node:{id:"0390d6512e3ea3096395df985c68a328",active:!1,teamId:"oweek",card:"/static/projects/events-card.png"}}]}},g=function(e){var t=e.options;t.__staticData?t.__staticData.data=m:(t.__staticData=i.default.observable({data:m}),t.computed=b({$static:function(){return t.__staticData.data}},t.computed))},v=Object(l.a)(j,(function(){var e=this.$createElement;return(this._self._c||e)("projects-view",{attrs:{projects:this.projects}})}),[],!1,null,null,null);"function"==typeof g&&g(v);t.default=v.exports}}]);