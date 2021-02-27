(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{239:function(e,t,o){},253:function(e,t,o){"use strict";var n=o(239);o.n(n).a},263:function(e,t,o){},264:function(e,t,o){},267:function(e,t,o){"use strict";var n=o(0).default.extend({model:{prop:"rolePropId",event:"update:change"},props:{centered:{type:Boolean,default:!1},rolePropId:{type:String,default:""},dropdownText:{type:String,default:""},dark:{type:Boolean,default:!1},density:{type:String,default:"compact"},bold:{type:Boolean,default:!1},showAll:{type:Boolean,default:!0},roles:{type:Array,default:null}},computed:{resolvedRoles:function(){var e;return null!==(e=this.roles)&&void 0!==e?e:this.getRoles()}},mounted:function(){var e=this;this.$nextTick((function(){var t,o;e.roleId=e.showAll?"":null!==(t=null===(o=e.resolvedRoles)||void 0===o?void 0:o[0].id)&&void 0!==t?t:""}))},data:function(){return{roleId:"",mobileDropdownDefault:{type:String}}},methods:{btnCSS:function(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return[e?"selected-filter-btn":"filter-btn",n?"fg-light":"fg-dark","compact"===t?"density-compact":null,o?"bold":null]},selectorCSS:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?["selector","selected",t?"fg-light":"fg-dark"]:["selector"]},mobileSelectorCSS:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[t?"fg-light":"fg-dark",e?"centered":null]},mobileMenuCSS:function(){return["fg-dark"]},handleMobileSelection:function(e){this.roleId=e}},watch:{roleId:function(e){this.$emit("update:change",e)}}}),i=(o(253),o(2)),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-row",{staticClass:"filter-btn-group desktop-selector-container"},[e.showAll?o("b-col",{staticClass:"my-auto text-center",attrs:{cols:"auto",md:"compact"==e.density?"auto":null}},[o("div",{class:e.btnCSS(""===e.roleId,e.density,e.bold,e.dark),on:{click:function(t){e.roleId=""}}},[e._v("All")]),o("div",{class:e.selectorCSS(""===e.roleId,e.dark)})]):e._e(),e._l(e.resolvedRoles,(function(t){return o("b-col",{key:t.id,staticClass:"text-center",attrs:{md:"compact"===e.density?"auto":null}},[o("div",{class:e.btnCSS(e.roleId===t.id,e.density,e.bold,e.dark),on:{click:function(o){e.roleId=t.id}}},[e._v("\n        "+e._s(t.name)+"\n      ")]),o("div",{class:e.selectorCSS(e.roleId===t.id,e.dark)})])}))],2),o("b-row",{staticClass:"mobile-selector-container text-center",attrs:{"align-h":"center"}},[o("b-col",{attrs:{sm:"12",md:"auto"}},[e._v("\n      "+e._s(e.dropdownText)+"\n      "),o("b-form-select",{class:e.mobileSelectorCSS(e.centered,e.dark),attrs:{id:"mobile-apply-dropdown"},on:{change:e.handleMobileSelection},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}},[e.showAll?o("option",{class:e.mobileMenuCSS(),domProps:{value:""}},[e._v("All")]):e._e(),e._l(e.resolvedRoles,(function(t){return o("option",{key:t.id,class:e.mobileMenuCSS(),domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)],1)],1)],1)}),[],!1,null,"6ea2adc6",null);t.a=a.exports},332:function(e,t,o){"use strict";var n=o(263);o.n(n).a},333:function(e){e.exports=JSON.parse('{"joinInformation":{"applicationsOpen":true},"hero":{"closed":{"header":"Applications are currently closed.","subheader":"Subscribe to our newsletter to stay updated on the application process."},"header":"Join Us","subheader":"In every applicant, we above all look for people that want to use their talents and skills to make a difference. No matter your experience, we also strive to be as inclusive as possible and give passionate people a chance to grow and learn with us.","lazy":"/static/pages/apply-hero-lazy.jpg","video":{"webm":"https://d2ytxic79evey7.cloudfront.net/pages/apply/hero/hero.webm","mp4":"https://d2ytxic79evey7.cloudfront.net/pages/apply/hero/hero.mp4"},"image":"/static/pages/apply-hero.png"},"infoSession":{"header":"Information Sessions!","subheader":"Spring 2021","description":"Come say hello! You\'ll have the opportunity to learn more about our team, hear from current members about the exciting work they do, and have the opportunity to chat to people about roles you\'re interested in!"},"infoSessions":[{"time":"4:30 PM - 5:30 PM ET • 2/16","location":"Online","link":{"url":"https://cornell.zoom.us/j/93280933476?pwd=ZVlCaHV3TlIvaVQ0Q09QNFJuQzFFZz09","text":"Zoom Link"}},{"time":"4:30 PM - 5:30 PM ET • 2/18","location":"Online","link":{"url":"https://cornell.zoom.us/j/93280933476?pwd=ZVlCaHV3TlIvaVQ0Q09QNFJuQzFFZz09","text":"Zoom Link"}}],"applicationInfo":[{"id":"designer","apply":{"header":"Product Design Role","rightHeader":"due 11:59 PM on Friday 2/19","sections":[{"header":"What We\'re Looking For","content":"Above all, someone who is willing to fully dedicate themselves to using product thinking, empathy, and creativity to solve a problem. A designer should understand the basic design process, intuitively or from practice, and being able to fluidly give and receive feedback is a must. We also recommend having done at least one case study or project from a portfolio, as well as experience in Sketch, Figma, Photoshop, or a similarly capable graphic design application."},{"header":"What You\'ll Do","content":"You will take on all of the responsibilities held by various design positions within the industry, as well as help make high-level strategic decisions for the product you\'re workin on. You will do user and market research, interviewing members of your target audience and turning data points into actionable requirements for your project. You will work with low, medium, and high fidelity mockups to create user interfaces and interactions, and iterate with critiques and feedbacks from other team members. Lastly, you will actively test your solution and get user feedback to further improve upon the product."}],"callToActionButton":{"closed":false,"content":"Product Design Application","link":"https://forms.gle/eBD8jsimHuX4Ko7t9"}},"nextSteps":{"header":"Next Steps","rightHeader":"Saturday 2/20 through Sunday 2/28","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Friday 3/5","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}},{"id":"developer","apply":{"header":"Software Development Role","rightHeader":"due 11:59 PM on Friday 2/19","sections":[{"header":"What We\'re Looking For","content":"You should be an inventive and communicate individual with a desire to learn new technologies and apply them to real-world problems. You should have some background in computer science or app/web development, but specific technologies will be taught within your project and we do not expect applicants to understand every aspect of application development."},{"header":"What You\'ll Do","content":"You will be the backbone of a project, working closely with designers and other developers to bring concepts into reality. Front-end developers create everything a user will see. A front-end developer must implement mockups from designers while collaborating with back-end developers on the projects’ constraints and requirements. Back-end developers handle all the data processed behind the scenes. A back-end developer must understand the needs of front-end developers to create an informed and practical data source."}],"callToActionButton":{"closed":false,"content":"Software Developer Application","link":"https://forms.gle/zzACoXzgAtt3tNj18"}},"nextSteps":{"header":"Next Steps","rightHeader":"Saturday 2/20 through Sunday 2/28","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Friday 3/5","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}},{"id":"business","apply":{"header":"Business Role","rightHeader":"due 11:59 PM on Friday 2/19","sections":[{"header":"What We\'re Looking For","content":"Someone who is passionate and creative about working on projects that impact the larger community. You do not need to know how to code or have any business experience; instead we want to see someone who can take initiative to make connections with the community and help expand the reach of the club. We are looking for someone who can take on abstract tasks, be at strategic or administrative, and carry them."},{"header":"What You\'ll Do","content":"You will develop the team’s strategy for outreach, marketing, and finance. You will help plan G-Body meetings, partner with members of the Cornell administration and student body to create events, and reach out to corporate partners to bring them on as Sponsors. Creating new ways of streamlining processes and sustaining positive morale through team building events and an active social media presence are pivotal to the success of not just our products, but also the success of DTI as a project team."}],"callToActionButton":{"closed":false,"content":"Business Team Application","link":"https://forms.gle/xcM3JCXCeFuNiUYU7"}},"nextSteps":{"header":"Next Steps","rightHeader":"Saturday 2/20 through Sunday 2/28","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Friday 3/5","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}},{"id":"pm","apply":{"header":"Product Management Role","rightHeader":"due 11:59 PM on Friday 2/19","sections":[{"header":"What We\'re Looking For","content":"Someone with excellent analytical, problem-solving, organizational, verbal, written and presentation communication and interpersonal skills. You should have an eye for finding impactful problems to solve using technology. With some general understanding of product and design thinking and how the technical stack works, you should be able to find a well-defined problem and guide designers and developers towards building out the right solution."},{"header":"What You\'ll Do","content":"You will be taking on the responsibility of successfully delivering the product by guiding products throughout their execution cycle, from problem defining, market/user research, road mapping, to defining product requirements and overseeing the final deployment of product. You will be working closely with designers and developers throughout the product cycle, bridging the gap between design and tech through excellent communication and an understanding of how to prioritize requirements for delivery. Outside of working with your team members, you will be also expected to fill in the gap for any roles necessary, from scheduling meetings, creating relationships with administrations, collaborating with other student organizations, to helping unblock your designers and developers."}],"callToActionButton":{"closed":false,"content":"Product Management Application","link":"https://forms.gle/JeUFyDcgJhF6TqML6"}},"nextSteps":{"header":"Next Steps","rightHeader":"Saturday 2/20 through Sunday 2/28","sections":[{"header":"Application Review","content":"We look through every single application we receive. We fully understand and don’t expect that everyone has a significant amount of past experience. Taking into account your year and past coursework, we will assess your interest in being a part of Cornell Design & Tech Initiative and willingness to learn and make a significant contribution."},{"header":"Interview","content":"Shortly after applications close, we will offer interviews to candidates we are interested in. We unfortunately cannot interview everyone, although we would like to! The interview serves as a chance to get to know you in person. We’ll talk about your past experience and interest in our team, and then do some role-specific exercises to further gauge your thought process and skill set. This can range from platform-specific whiteboard coding questions for developers or app critiques and product thinking exercises for designers. These aren’t so much to assess your current skill set, but to see how you work with others, respond to feedback, and gauge your potential on the team."}]},"decision":{"header":"Decision","rightHeader":"by 11:59 PM on Friday 3/5","sections":[{"header":"Notification","content":"Whether or not you receive an interview invitation, we will email you a definitive decision within a week of applying. We’re happy to answer any questions you have during this time through our email address."}]}}],"mainMenu":{"advertisement":{"open":true}}}')},334:function(e,t,o){"use strict";var n=o(264);o.n(n).a},341:function(e,t,o){"use strict";o.r(t);var n,i=o(27),a=o(29),s=o(28),r=o(12),l=o(0),c=o(11),d=(o(174),o(14)),u=o(30),h=l.default.extend({props:{header:{type:String},rightHeader:{type:String}}}),p=(o(332),o(2)),g=Object(p.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-row",{staticClass:"timeline-header",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"left-col-text",attrs:{md:"auto",sm:"12"}},[e.header?o("div",{staticClass:"container-section-heading"},[e._v(e._s(e.header))]):e._t("header")],2),e.rightHeader?o("b-col",{staticClass:"right-col-text",attrs:{sm:"12",md:"","align-self":"end"}},[e._v(e._s(e.rightHeader))]):o("b-col",{attrs:{sm:"12",md:"","align-self":"end"}},[e._t("rightHeader")],2)],1),o("div",{staticClass:"timeline-content"},[e._t("default")],2)],1)}),[],!1,null,"78d09068",null).exports,f=o(267),m=o(333),v=(n=function(e){Object(a.a)(o,e);var t=Object(s.a)(o);function o(){var e;return Object(i.a)(this,o),(e=t.apply(this,arguments)).email="",e.msgContent="banana",e.msgShow=!1,e.msgVariant="success",e.tabIndex=0,e.roleId="",e}return Object(u.a)(o,[{key:"onSubscribe",value:function(e){e.preventDefault(),this.$refs.footerRef.subscriptionClick()}},{key:"content",get:function(){return m}},{key:"isOpen",get:function(){return this.content.joinInformation.applicationsOpen}},{key:"session1",get:function(){return this.content.infoSessions[0]}},{key:"session2",get:function(){return this.content.infoSessions[0]}},{key:"sections",get:function(){var e=this,t=this.content.applicationInfo.find((function(t){return t.id===e.roleId}));return t?[Object(d.a)({id:"apply"},t.apply),Object(d.a)({id:"nextSteps"},t.nextSteps),Object(d.a)({id:"decision"},t.decision)]:[]}}]),o}(l.default),n=Object(r.a)([Object(c.a)({components:{TimelineSection:g,RoleSelector:f.a}})],n)),y=(o(334),Object(p.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("page-background",[e.content.hero&&e.isOpen?o("nova-hero",{attrs:{header:e.content.hero.header,subheader:e.content.hero.subheader,video:e.content.hero.video,lazy:e.content.hero.lazy,image:e.content.hero.image,page:"apply"}}):o("nova-hero",{attrs:{video:e.content.hero.video,lazy:e.content.hero.lazy,image:e.content.hero.image,page:"apply"}}),e.isOpen?e._e():o("page-section",[o("b-container",{staticClass:"email-form"},[o("b-row",{staticClass:"no-gutters",attrs:{"align-h":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("h2",{staticClass:"email-header"},[e._v(e._s(e.content.hero.closed&&e.content.hero.closed.header))]),o("p",[e._v(e._s(e.content.hero.closed&&e.content.hero.closed.subheader))])])],1),o("b-row",{attrs:{"align-h":"center"}},[o("b-alert",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{show:e.msgShow,variant:e.msgVariant},domProps:{innerHTML:e._s(e.msgContent)}})],1),o("b-row",{attrs:{"align-h":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("b-button",{attrs:{type:"submit"},on:{click:e.onSubscribe}},[e._v("Subscribe")])],1)],1)],1)],1),e.isOpen?o("b-row",{staticClass:"justify-content-center info-session-interjection"},[o("b-col",{staticClass:"info-session-description",attrs:{sm:"12",md:"4","md-offset":"1"}},[o("div",{staticClass:"header"},[e._v(e._s(e.content.infoSession.header))]),o("div",{staticClass:"subheader"},[e._v(e._s(e.content.infoSession.subheader))]),o("div",{staticClass:"description"},[e._v(e._s(e.content.infoSession.description))])]),o("b-col",{staticClass:"info-session-details",attrs:{sm:"12",md:"auto","md-offset":"1"}},[o("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"info-session h-50"},[o("div",{staticClass:"time"},[e._v(e._s(e.session1.time))]),o("div",{staticClass:"location location-desktop"},[e._v("\n              "+e._s(e.session1.location+(e.session1.link&&e.session1.link.url?" • ":""))+"\n              "),e.session1.link&&e.session1.link.url?[o("a",{staticClass:"apply-link",attrs:{href:e.session1.link.url}},[e._v(e._s(e.session1.link.text))])]:e._e()],2),o("div",{staticClass:"location location-mobile"},[e._v("\n              "+e._s(""+e.session1.location)+"\n              "),o("br"),e.session1.link&&e.session1.link.url?o("a",{staticClass:"apply-link",attrs:{href:e.session1.link.url}},[e._v(e._s(e.session1.link.text))]):e._e()])]),o("div",{staticClass:"info-session h-50"},[o("div",{staticClass:"time"},[e._v(e._s(e.session2.time))]),o("div",{staticClass:"location location-desktop"},[e._v("\n              "+e._s(e.session2.location+(e.session2.link&&e.session2.link.url?" • ":""))+"\n              "),e.session2.link&&e.session2.link.url?o("a",{staticClass:"apply-link",attrs:{href:e.session2.link.url}},[e._v(e._s(e.session2.link.text))]):e._e()]),o("div",{staticClass:"location location-mobile"},[e._v("\n              "+e._s(""+e.session2.location)+"\n              "),o("br"),e.session2.link&&e.session2.link.url?o("a",{staticClass:"apply-link",attrs:{href:e.session2.link.url}},[e._v(e._s(e.session2.link.text))]):e._e()])])])],1)],1)],1):e._e(),e.isOpen?o("b-row",{staticClass:"justify-content-center coffee-chat"},[o("b-col",{staticClass:"info-session-description",attrs:{sm:"12",md:"4","md-offset":"1"}},[o("div",{staticClass:"header"},[e._v("Coffee Chats")]),o("div",{staticClass:"subheader"},[e._v("Spring 2021")]),o("div",{staticClass:"description"},[e._v("\n        Sign up to chat with some members on the team! You can learn more about what we do by\n        sending an email to any of the members on the spreadsheet.\n      ")])]),o("b-col",{staticClass:"info-session-details",attrs:{sm:"12",md:"auto","md-offset":"1"}},[o("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"info-session h-50"},[o("div",{staticClass:"time"},[e._v("\n              Sign up at\n              "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1xvFotNdMkCc4vaBv_LYTA8LHNIQfYlYaMIW3DUZYAvA/edit#gid=0"}},[e._v("\n                this link\n              ")]),e._v("\n              to chat!\n            ")])])])],1)],1)],1):e._e(),o("b-container",[o("role-selector",{staticClass:"application-role-selector",attrs:{dropdownText:"I want to apply for...",centered:!0,bold:!0,showAll:!1},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}}),e._l(e.sections,(function(t){return o("timeline-section",{key:t.id,attrs:{header:t.header,rightHeader:t.rightHeader}},[e._l(t.sections,(function(t){return o("div",{key:t.header},[t?[t.header?o("div",{staticClass:"apply-header"},[e._v(e._s(t.header))]):e._e(),o("div",{staticClass:"apply-description"},[e._v(e._s(t.content))])]:e._e()],2)})),o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{cols:"12"}},[o("b-row",[t.callToActionButton&&t.callToActionButton.link?o("b-col",{attrs:{md:"auto",sm:"12"}},[o("b-button",{staticClass:"call-to-action-button text-start",attrs:{href:t.callToActionButton.link,size:"lg",variant:"primary"}},[e._v(e._s(t.callToActionButton.content))])],1):e._e()],1)],1)],1)],2)}))],2),o("dti-footer",{ref:"footerRef",attrs:{page:"apply"}})],1)}),[],!1,null,"5e188dcb",null).exports),w=function(){var e=function(e){Object(a.a)(o,e);var t=Object(s.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return o}(l.default);return e=Object(r.a)([Object(c.a)({metaInfo:{title:"Apply"},components:{ApplyView:y}})],e)}(),b=Object(p.a)(w,(function(){var e=this.$createElement;return(this._self._c||e)("apply-view")}),[],!1,null,null,null);t.default=b.exports}}]);