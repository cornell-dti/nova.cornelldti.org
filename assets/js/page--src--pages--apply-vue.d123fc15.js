(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{239:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(27),i=n(30),a=n(29),r=n(28),s=n(12),l=n(0),c=n(11),d=function(){var e=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"content",get:function(){return this.json}}]),n}(l.default);return e=Object(s.a)([Object(c.a)({})],e)}();function u(e){return function(t){Object(a.a)(i,t);var n=Object(r.a)(i);function i(){var t;return Object(o.a)(this,i),(t=n.apply(this,arguments)).json=e,t}return i}(d)}},241:function(e,t,n){},255:function(e,t,n){"use strict";var o=n(241);n.n(o).a},256:function(e,t,n){var o=n(6),i=n(31),a=n(115);o({target:"Object",stat:!0,forced:n(3)((function(){a(1)}))},{keys:function(e){return a(i(e))}})},266:function(e,t,n){},267:function(e,t,n){},270:function(e,t,n){"use strict";var o=n(0).default.extend({model:{prop:"rolePropId",event:"update:change"},props:{centered:{type:Boolean,default:!1},rolePropId:{type:String,default:""},dropdownText:{type:String,default:""},dark:{type:Boolean,default:!1},density:{type:String,default:"compact"},bold:{type:Boolean,default:!1},showAll:{type:Boolean,default:!0},roles:{type:Array,default:null}},computed:{resolvedRoles:function(){var e;return null!==(e=this.roles)&&void 0!==e?e:this.getRoles()}},mounted:function(){var e=this;this.$nextTick((function(){var t,n;e.roleId=e.showAll?"":null!==(t=null===(n=e.resolvedRoles)||void 0===n?void 0:n[0].id)&&void 0!==t?t:""}))},data:function(){return{roleId:"",mobileDropdownDefault:{type:String}}},methods:{btnCSS:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return[e?"selected-filter-btn":"filter-btn",o?"fg-light":"fg-dark","compact"===t?"density-compact":null,n?"bold":null]},selectorCSS:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?["selector","selected",t?"fg-light":"fg-dark"]:["selector"]},mobileSelectorCSS:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[t?"fg-light":"fg-dark",e?"centered":null]},mobileMenuCSS:function(){return["fg-dark"]},handleMobileSelection:function(e){this.roleId=e}},watch:{roleId:function(e){this.$emit("update:change",e)}}}),i=(n(255),n(2)),a=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"filter-btn-group desktop-selector-container"},[e.showAll?n("b-col",{staticClass:"my-auto text-center",attrs:{cols:"auto",md:"compact"==e.density?"auto":null}},[n("div",{class:e.btnCSS(""===e.roleId,e.density,e.bold,e.dark),on:{click:function(t){e.roleId=""}}},[e._v("All")]),n("div",{class:e.selectorCSS(""===e.roleId,e.dark)})]):e._e(),e._l(e.resolvedRoles,(function(t){return n("b-col",{key:t.id,staticClass:"text-center",attrs:{md:"compact"===e.density?"auto":null}},[n("div",{class:e.btnCSS(e.roleId===t.id,e.density,e.bold,e.dark),on:{click:function(n){e.roleId=t.id}}},[e._v("\n        "+e._s(t.name)+"\n      ")]),n("div",{class:e.selectorCSS(e.roleId===t.id,e.dark)})])}))],2),n("b-row",{staticClass:"mobile-selector-container text-center",attrs:{"align-h":"center"}},[n("b-col",{attrs:{sm:"12",md:"auto"}},[e._v("\n      "+e._s(e.dropdownText)+"\n      "),n("b-form-select",{class:e.mobileSelectorCSS(e.centered,e.dark),attrs:{id:"mobile-apply-dropdown"},on:{change:e.handleMobileSelection},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}},[e.showAll?n("option",{class:e.mobileMenuCSS(),domProps:{value:""}},[e._v("All")]):e._e(),e._l(e.resolvedRoles,(function(t){return n("option",{key:t.id,class:e.mobileMenuCSS(),domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)],1)],1)],1)}),[],!1,null,"0acd9679",null);t.a=a.exports},335:function(e,t,n){"use strict";var o=n(266);n.n(o).a},336:function(e,t,n){"use strict";var o=n(267);n.n(o).a},337:function(e){e.exports=JSON.parse('{"joinInformation":{"applicationsOpen":false},"hero":{"closed":{"header":"Applications are currently closed.","subheader":"Subscribe to our newsletter to stay updated on the application process."},"header":"Join Us","subheader":"In every applicant, we above all look for people that want to use their talents and skills to make a difference. No matter your experience, we also strive to be as inclusive as possible and give passionate people a chance to grow and learn with us.","lazy":"/static/pages/apply-hero-lazy.jpg","video":{"webm":"https://d2ytxic79evey7.cloudfront.net/pages/apply/hero/hero.webm","mp4":"https://d2ytxic79evey7.cloudfront.net/pages/apply/hero/hero.mp4"},"image":"/static/pages/apply-hero.png"},"infoSession":{"header":"Information Sessions!","subheader":"Fall 2020","description":"Come say hello! You\'ll have the opportunity to learn more about our team, hear from current members about the exciting work they do, and have the opportunity to chat to people about roles you\'re interested in!"},"infoSessions":[{"time":"5:00 PM - 6:30 PM ET • 10/16","location":"Online","link":{"url":"https://cornell.zoom.us/j/98367871220?pwd=Ky94Kzh0Ym96czhuR2owcDFoSThtZz09","text":"Zoom Link"}}],"applicationInfo":[{"id":"designer","apply":{"header":"Product Design Role","rightHeader":"due 11:59 PM on Sunday 10/18 (Freshman only)","sections":[{"header":"What We\'re Looking For","content":"Above all, someone who is willing to fully dedicate themselves to using product thinking, empathy, and creativity to solve a problem. A designer should understand the basic design process, intuitively or from practice, and being able to fluidly give and receive feedback is a must. We also recommend having done at least one case study or project from a portfolio, as well as experience in Sketch, Figma, Photoshop, or a similarly capable graphic design application."},{"header":"What You\'ll Do","content":"You will take on all of the responsibilities held by various design positions within the industry, as well as help make high-level strategic decisions for the product you\'re workin on. You will do user and market research, interviewing members of your target audience and turning data points into actionable requirements for your project. You will work with low, medium, and high fidelity mockups to create user interfaces and interactions, and iterate with critiques and feedbacks from other team members. Lastly, you will actively test your solution and get user feedback to further improve upon the product."}],"callToActionButton":{"closed":false,"content":"Product Design Application","link":"https://forms.gle/g1PcB663ixkVRa797"}},"nextSteps":{"header":"Next Steps","rightHeader":"Tuesday 10/20 through Sunday 11/1","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Tuesday, 11/2","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}},{"id":"developer","apply":{"header":"Software Development Role","rightHeader":"due 11:59 PM on Sunday 10/18 (Freshman only)","sections":[{"header":"What We\'re Looking For","content":"You should be an inventive and communicate individual with a desire to learn new technologies and apply them to real-world problems. You should have some background in computer science or app/web development, but specific technologies will be taught within your project and we do not expect applicants to understand every aspect of application development."},{"header":"What You\'ll Do","content":"You will be the backbone of a project, working closely with designers and other developers to bring concepts into reality. Front-end developers create everything a user will see. A front-end developer must implement mockups from designers while collaborating with back-end developers on the projects’ constraints and requirements. Back-end developers handle all the data processed behind the scenes. A back-end developer must understand the needs of front-end developers to create an informed and practical data source."}],"callToActionButton":{"closed":false,"content":"Software Developer Application","link":"https://forms.gle/te4VMUBLfCeV9gJR8"}},"nextSteps":{"header":"Next Steps","rightHeader":"Tuesday 10/20 through Sunday 11/1","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Tuesday, 11/2","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}},{"id":"business","apply":{"header":"Business Analyst Role","rightHeader":"due 11:59 PM on Sunday 10/18 (Freshman only)","sections":[{"header":"What We\'re Looking For","content":"Someone who is passionate and creative about working on projects that impact the larger community. You do not need to know how to code or have any business experience; instead we want to see someone who can take initiative to make connections with the community and help expand the reach of the club. We are looking for someone who can take on abstract tasks, be at strategic or administrative, and carry them."},{"header":"What You\'ll Do","content":"You will develop the team’s strategy for outreach, marketing, and finance. You will help plan G-Body meetings, partner with members of the Cornell administration and student body to create events, and reach out to corporate partners to bring them on as Sponsors. Creating new ways of streamlining processes and sustaining positive morale through team building events and an active social media presence are pivotal to the success of not just our products, but also the success of DTI as a project team."}],"callToActionButton":{"closed":false,"content":"Business Analyst Application","link":"https://docs.google.com/forms/d/e/1FAIpQLSe--jQ5oGUWbN8UvNSzQpa_yRGU0vY6YsksChGMmurZeJr1bw/viewform"}},"nextSteps":{"header":"Next Steps","rightHeader":"Tuesday 10/20 through Sunday 11/1","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Tuesday, 11/2","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}},{"id":"pm","apply":{"header":"Product Management Role","rightHeader":"due 11:59 PM on Sunday 9/20","sections":[{"header":"What We\'re Looking For","content":"Someone with excellent analytical, problem-solving, organizational, verbal, written and presentation communication and interpersonal skills. You should have an eye for finding impactful problems to solve using technology. With some general understanding of product and design thinking and how the technical stack works, you should be able to find a well-defined problem and guide designers and developers towards building out the right solution."},{"header":"What You\'ll Do","content":"You will be taking on the responsibility of successfully delivering the product by guiding products throughout their execution cycle, from problem defining, market/user research, road mapping, to defining product requirements and overseeing the final deployment of product. You will be working closely with designers and developers throughout the product cycle, bridging the gap between design and tech through excellent communication and an understanding of how to prioritize requirements for delivery. Outside of working with your team members, you will be also expected to fill in the gap for any roles necessary, from scheduling meetings, creating relationships with administrations, collaborating with other student organizations, to helping unblock your designers and developers."}],"callToActionButton":{"closed":false,"content":"Product Management Application","link":"https://docs.google.com/forms/d/e/1FAIpQLSdue7uoQDyyH062u0jWrNR2ArVXqBRI2vav-qtuL5Pqe7ag8A/viewform"}},"nextSteps":{"header":"Next Steps","rightHeader":"Tuesday 9/22 through Tuesday 9/29","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 12:01 PM on Wednesday 9/30","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}}],"mainMenu":{"advertisement":{"open":false}}}')},344:function(e,t,n){"use strict";n.r(t);var o,i=n(27),a=n(29),r=n(28),s=n(12),l=n(11),c=(n(174),n(175),n(42),n(256),n(30)),d=n(0),u=d.default.extend({props:{header:{type:String},rightHeader:{type:String}}}),h=(n(335),n(2)),p=Object(h.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-row",{staticClass:"timeline-header",attrs:{"align-v":"center"}},[n("b-col",{staticClass:"left-col-text",attrs:{md:"auto",sm:"12"}},[e.header?n("div",{staticClass:"container-section-heading"},[e._v(e._s(e.header))]):e._t("header")],2),e.rightHeader?n("b-col",{staticClass:"right-col-text",attrs:{sm:"12",md:"","align-self":"end"}},[e._v(e._s(e.rightHeader))]):n("b-col",{attrs:{sm:"12",md:"","align-self":"end"}},[e._t("rightHeader")],2)],1),n("div",{staticClass:"timeline-content"},[e._t("default")],2)],1)}),[],!1,null,"78d09068",null).exports,f=n(270),g=(o=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).email="",e.msgContent="banana",e.msgShow=!1,e.msgVariant="success",e.tabIndex=0,e.roleId="",e}return Object(c.a)(n,[{key:"onSubscribe",value:function(e){e.preventDefault(),this.$refs.footerRef.subscriptionClick()}},{key:"sections",get:function(){var e=this,t=this.content.applicationInfo.find((function(t){return t.id===e.roleId}));return t?Object.keys(t).filter((function(e){return"id"!==e})).map((function(e){return{id:e,info:t[e]}})):[]}}]),n}(d.default),Object(s.a)([Object(l.b)({required:!0})],o.prototype,"content",void 0),o=Object(s.a)([Object(l.a)({components:{TimelineSection:p,RoleSelector:f.a}})],o)),y=(n(336),Object(h.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.content?n("page-background",[n("strings-domain",{attrs:{value:e.content.joinInformation.applicationsOpen},scopedSlots:e._u([{key:"key",fn:function(t){return[n("strings-domain",{attrs:{value:[e.content.hero,e.content.hero.closed]},scopedSlots:e._u([{key:"key",fn:function(o){var i=o[0],a=o[1];return[n("nova-hero",i&&t?{attrs:{header:i.header,subheader:i.subheader,video:i.video,lazy:i.lazy,image:i.image,page:"apply"}}:{attrs:{video:i.video,lazy:i.lazy,image:i.image,page:"apply"}}),t?e._e():n("page-section",[n("b-container",{staticClass:"email-form"},[n("b-row",{staticClass:"no-gutters",attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"auto"}},[n("h2",{staticClass:"email-header"},[e._v(e._s(a&&a.header))]),n("p",[e._v(e._s(a&&a.subheader))])])],1),n("b-row",{attrs:{"align-h":"center"}},[n("b-alert",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{show:e.msgShow,variant:e.msgVariant},domProps:{innerHTML:e._s(e.msgContent)}})],1),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"auto"}},[n("b-button",{attrs:{type:"submit"},on:{click:e.onSubscribe}},[e._v("Subscribe")])],1)],1)],1)],1)]}}],null,!0)}),t?n("b-row",{staticClass:"justify-content-center info-session-interjection"},[n("strings-domain",{attrs:{value:e.content.infoSession},scopedSlots:e._u([{key:"key",fn:function(t){var o=t.header,i=t.subheader,a=t.description;return[n("b-col",{staticClass:"info-session-description",attrs:{sm:"12",md:"4","md-offset":"1"}},[n("div",{staticClass:"header"},[e._v(e._s(o))]),n("div",{staticClass:"subheader"},[e._v(e._s(i))]),n("div",{staticClass:"description"},[e._v(e._s(a))])])]}}],null,!0)}),n("b-col",{staticClass:"info-session-details",attrs:{sm:"12",md:"auto","md-offset":"1"}},[n("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[n("b-col",{attrs:{cols:"auto"}},[n("strings-domain",{attrs:{value:e.content.infoSessions},scopedSlots:e._u([{key:"key",fn:function(t){var o=t[0];return[n("div",{staticClass:"info-session h-50"},[n("div",{staticClass:"time"},[e._v(e._s(o.time))]),n("div",{staticClass:"location location-desktop"},[e._v("\n                    "+e._s(o.location+(o.link&&o.link.url?" • ":""))+"\n                    "),o.link&&o.link.url?[n("a",{staticClass:"apply-link",attrs:{href:o.link.url}},[e._v(e._s(o.link.text))])]:e._e()],2),n("div",{staticClass:"location location-mobile"},[e._v("\n                    "+e._s(""+o.location)+"\n                    "),n("br"),o.link&&o.link.url?n("a",{staticClass:"apply-link",attrs:{href:o.link.url}},[e._v(e._s(o.link.text))]):e._e()])])]}}],null,!0)})],1)],1)],1)],1):e._e(),n("b-container",[n("role-selector",{staticClass:"application-role-selector",attrs:{dropdownText:"I want to apply for...",centered:!0,bold:!0,showAll:!1},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}}),e._l(e.sections,(function(o){return n("strings-domain",{key:o.id,attrs:{value:o.info},scopedSlots:e._u([{key:"key",fn:function(o){return[o?n("timeline-section",{attrs:{header:o.header,rightHeader:o.rightHeader}},[Array.isArray(o.sections)?e._l(o.sections,(function(t){return n("div",{key:t.header},[t?[t.header?n("div",{staticClass:"apply-header"},[e._v(e._s(t.header))]):e._e(),t.content&&Array.isArray(t.content.lines)?n("div",{staticClass:"apply-list"},e._l(t.content.lines,(function(t){return n("div",{key:t,staticClass:"apply-list-item"},[e._v("\n                      "+e._s(t)+"\n                    ")])})),0):n("div",{staticClass:"apply-description"},[e._v(e._s(t.content))])]:e._e()],2)})):n("b-row",e._l(["left","right"],(function(t){return n("b-col",{key:t,attrs:{sm:""}},[o.sections&&o.sections[t]?[n("div",{staticClass:"apply-header"},[e._v(e._s(o.sections[t].header))]),o.sections[t].content.lines?n("div",{staticClass:"apply-list"},e._l(o.sections[t].content.lines,(function(t){return n("div",{key:t,staticClass:"apply-list-item"},[e._v("\n                      "+e._s(t)+"\n                    ")])})),0):n("div",{staticClass:"apply-description"},[e._v(e._s(o.sections[t].content))])]:e._e()],2)})),1),t?n("strings-domain",{attrs:{value:[o.callToActionButton]},scopedSlots:e._u([{key:"key",fn:function(t){var o=t[0],i=t[1];return[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"12"}},[n("b-row",[o&&o.link?n("b-col",{attrs:{md:"auto",sm:"12"}},[n("b-button",{staticClass:"call-to-action-button text-start",attrs:{href:o.link,size:"lg",variant:"primary"}},[e._v(e._s(o.content))])],1):e._e(),i&&i.link?n("b-col",{attrs:{md:"auto",sm:"12"}},[n("b-button",{directives:[{name:"string",rawName:"v-string",value:i.context,expression:"secondary.context"}],staticClass:"call-to-action-button",attrs:{href:i.link,size:"lg",variant:"primary"}})],1):e._e()],1)],1)],1)]}}],null,!0)}):e._e()],2):e._e()]}}],null,!0)})}))],2)]}}],null,!1,4075301105)}),n("dti-footer",{ref:"footerRef",attrs:{page:"apply"}})],1):e._e()}),[],!1,null,"14b61244",null).exports),m=n(239),v=n(337),w=function(){var e=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return n}(Object(m.a)(v));return e=Object(s.a)([Object(l.a)({metaInfo:{title:"Apply"},components:{ApplyView:y}})],e)}(),b=Object(h.a)(w,(function(){var e=this.$createElement;return(this._self._c||e)("apply-view",{attrs:{content:this.content}})}),[],!1,null,null,null);t.default=b.exports}}]);