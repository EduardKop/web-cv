(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(19),s=i.n(a),l=i(7),r=i(2),o=i.p+"static/media/avatar.11c5a501.png",d=i(0);var j=function(){return Object(d.jsxs)("nav",{className:"profile-info_navigation",children:[Object(d.jsx)(l.b,{to:"/skills",activeClassName:"activeLink",className:"navigation_item navigation_item-first",children:"Skills"}),Object(d.jsx)(l.b,{to:"/expirience",activeClassName:"activeLink",className:"navigation_item",children:"Experience"}),Object(d.jsx)(l.b,{to:"/education",activeClassName:"activeLink",className:"navigation_item",children:"Education"}),Object(d.jsx)(l.b,{to:"/hobbie",activeClassName:"activeLink",className:"navigation_item",children:"AboutMe"}),Object(d.jsx)(l.b,{to:"/contacts",activeClassName:"activeLink",className:"navigation_item",children:"Contacts"})]})};var m=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"profile-container",children:[Object(d.jsxs)("div",{className:"profile-info",children:[Object(d.jsxs)("div",{className:"profile-info_prof",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("span",{className:"divItem",children:"<div>"}),"Front-End developer",Object(d.jsx)("span",{className:"secondDivItem",children:"</div>"})]})," "]}),Object(d.jsx)("div",{className:"profile-info_name",children:"Eduard Korytnyk"}),Object(d.jsx)("p",{className:"subtitle",children:Object(d.jsx)(j,{})})]}),Object(d.jsxs)("div",{className:"profile-photo",children:[Object(d.jsx)("img",{src:o,alt:"logo"})," "]})]})})},b=i(10),h=i(11),p=i(13),u=i(12),x=function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(){return Object(b.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){var e=this.props.skill,t=this.props.progress,i=void 0===t?0:t;return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("div",{className:"skillName",children:e}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"firstItem",style:{width:i+"%"},children:" "}),Object(d.jsx)("div",{className:"secondItem"})]})]})}}]),i}(n.a.Component),O=function(e){Object(p.a)(i,e);var t=Object(u.a)(i);function i(){return Object(b.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){var e=this.props.skillDetail;return Object(d.jsxs)("div",{className:"wrapperSkills",children:[Object(d.jsx)("div",{className:"circle-container",children:Object(d.jsx)("div",{className:"circle"})}),Object(d.jsx)("div",{className:"detailSkillsItem",children:e})]})}}]),i}(n.a.Component);var v=function(){return Object(d.jsxs)("div",{className:"skills-container",children:[Object(d.jsx)(x,{progress:90,skill:"JavaScript"}),Object(d.jsx)(x,{progress:70,skill:"React.js"}),Object(d.jsx)(x,{progress:40,skill:"Node.js"}),Object(d.jsx)(x,{progress:80,skill:"HTML, CSS, Bootstrap"}),Object(d.jsx)(x,{progress:60,skill:"GIT, Webpack, Gulp"}),Object(d.jsxs)("div",{className:"detail-wrapper",children:[Object(d.jsx)(O,{skillDetail:"React.js, Telegraf.js"}),Object(d.jsx)(O,{skillDetail:"SASS, SCSS, LESS"}),Object(d.jsx)(O,{skillDetail:"Node.js, Ajax"}),Object(d.jsx)(O,{skillDetail:"Photoshop, Illustrator"})]})]})};var k=function(){return Object(d.jsx)("div",{className:"hobie-container",children:Object(d.jsxs)("div",{className:"hobie-content",children:[Object(d.jsx)("h1",{children:"ABOUT ME"}),"I'm Eduard - Front-end developer from Lviv. I'm interested in web-development and everything connected with it. Earlier, I graduated from university with a degree in \"Computer engineering \". I can safely say that all my conscious life is connected with IT.",Object(d.jsx)("h1",{children:"GOAL"}),"I want to be in a good team, where I could improve my skills and use them to interesting tasks. I'd like to work on HTMl layout and JS development. But, I think, for this, I need a good team lead, who could show me the best practices of work.",Object(d.jsx)("h1",{children:"INTERESTS"}),"I spend most of my free time studying. I also like to watch movies and TV series, and now I'm play the piano."]})})};var N=function(e){var t=e.educationFacult,i=e.educationDate,c=e.educationName;return Object(d.jsx)("div",{className:"education-container",children:Object(d.jsxs)("div",{className:"education-content",children:[Object(d.jsxs)("div",{className:"education-content__name",children:[Object(d.jsx)("h1",{children:t})," ",Object(d.jsx)("h1",{className:"education-content__name-Date",children:i})]}),Object(d.jsx)("div",{className:"education-content__desription",children:Object(d.jsx)("h5",{children:c})})]})})};var g=function(){return Object(d.jsxs)("div",{className:"education-container",children:[Object(d.jsx)("div",{className:"education-container__item first",children:Object(d.jsx)(N,{educationFacult:"Main Academy (course)",educationDate:"Sep 2018 \u2014 Jun 2018",educationName:"Java-Script development"})}),Object(d.jsx)("div",{className:"education-container__item",children:Object(d.jsx)(N,{educationFacult:"Computer engineering",educationDate:"Sep 2014 \u2014 Jun 2018",educationName:"Ternopil National Economic University"})}),Object(d.jsx)("div",{className:"education-container__item",children:Object(d.jsx)(N,{educationFacult:"Software development",educationDate:"Sep 2010 \u2014 Jun 2014",educationName:"Kamianets-Podilskyi Industrial College"})})]})};function f(e){var t=e.number,i=e.numberName,c=e.telegram,n=e.telegramName,a=e.email,s=e.emailName,l=e.link,r=e.linkName;return Object(d.jsxs)("div",{className:"contacts",children:[Object(d.jsxs)("div",{className:"contacts-item first",children:[Object(d.jsx)("span",{children:"Number:"})," ",Object(d.jsx)("a",{href:t,children:i})]}),Object(d.jsxs)("div",{className:"contacts-item",children:[Object(d.jsx)("span",{children:"Telegram:"})," ",Object(d.jsx)("a",{rel:"shortcut icon",href:n,children:c})]}),Object(d.jsxs)("div",{className:"contacts-item",children:[Object(d.jsx)("span",{children:"Web Suite:"})," ",Object(d.jsx)("a",{rel:"shortcut icon",href:l,children:r})]}),Object(d.jsxs)("div",{className:"contacts-item",children:[Object(d.jsx)("span",{children:"Email:"}),Object(d.jsx)("a",{href:a,children:s})]})]})}var w=function(){return Object(d.jsx)("div",{className:"contacts-container",children:Object(d.jsx)(f,{number:"tel:+380665249893",numberName:"+380665249893",telegram:"t.me/Eduard_Kop",telegramName:"https://t.me/Eduard_Kop",link:"https://www.linkedin.com/in/eduard-korytnyk-6b3929155/",linkName:"www.linkedin.com",email:"mailto:eduard.korytnyk@gmail.com",emailName:"eduard.korytnyk@gmail.com"})})};var _=function(e){var t=e.name,i=e.stack,c=e.img,n=e.link,a=e.linkName,s=e.web,l=e.webName,r=e.webLink;return Object(d.jsx)("div",{className:"expirience-container",children:Object(d.jsxs)("div",{className:"expirience-container__item",children:[Object(d.jsx)("div",{class:"expirience-container__item-img",children:Object(d.jsx)("img",{src:c,alt:"exp"})}),Object(d.jsxs)("div",{class:"expirience-container__item-content",children:[Object(d.jsx)("div",{className:"container__item-nameContainer",children:Object(d.jsxs)("span",{class:"container__item-nameContainer-name",children:[Object(d.jsx)("span",{children:"Name:"})," ",t]})}),Object(d.jsx)("div",{className:"container__item-stackContainer",children:Object(d.jsxs)("span",{class:"container__item-nameContainer-stack",children:[Object(d.jsx)("span",{children:"Stack:"})," ",i," "]})}),Object(d.jsx)("div",{className:"container__item-linkContainer",children:Object(d.jsxs)("span",{class:"container__item-nameContainer-gitHub",children:[Object(d.jsx)("span",{children:"Github:"})," ",Object(d.jsx)("a",{rel:"shortcut icon",href:n,children:a})]})}),Object(d.jsx)("div",{className:"container__item-webContainer",children:Object(d.jsxs)("span",{class:"container__item-nameContainer-webName",children:[Object(d.jsx)("span",{children:l})," ",Object(d.jsx)("a",{rel:"shortcut icon",href:s,children:r})]})})]})]})})},S=i.p+"static/media/k1.62c71b0c.png",y=i.p+"static/media/2.44a67481.png",C=i.p+"static/media/2k.36e836d5.png",I=i.p+"static/media/4k.bab97350.png",E=i.p+"static/media/monzaMotorsportsImg1k.1e9c574d.png";var L=function(){return Object(d.jsx)("div",{className:"expirience-props-container",children:Object(d.jsx)("div",{className:"expirience-props-element__wrapper",children:Object(d.jsxs)("div",{class:"row",children:[Object(d.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-lg-4 expirience-props-element",children:Object(d.jsx)(_,{stack:"Telegraph.js, Telegram Bot API",img:y,link:"https://github.com/EduardKop/telegramBot-telegraf-talking-bot",linkName:"link",name:"Telegram Bot (talking bot)",webName:"githubPages:",webLink:"none"})}),Object(d.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-lg-4 expirience-props-element",children:Object(d.jsx)(_,{stack:"React.js, HTML/CSS, Bootstrap",img:S,link:"https://github.com/EduardKop/react-todo-list",linkName:"link",name:"English Dictionary App",webName:"githubPages:",webLink:"none"})}),Object(d.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-lg-4 expirience-props-element",children:Object(d.jsx)(_,{stack:"HTML/CSS",img:C,link:"https://github.com/EduardKop/agencyWeb",linkName:"link",name:"Creative Agency Web",web:"https://eduardkop.github.io/agencyWeb/",webName:"githubPages:",webLink:"link"})}),Object(d.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-lg-4 expirience-props-element",children:Object(d.jsx)(_,{stack:"Bootstrap/SCSS",img:I,web:"https://eduardkop.github.io/K-ltemaschine-web/",webName:"githubPages:",link:"https://github.com/EduardKop/K-ltemaschine-web",linkName:"link",name:"Kaeltetechnik",webLink:"link"})}),Object(d.jsx)("div",{className:"col-12 col-md-6 col-lg-4 col-xl-lg-4 expirience-props-element",children:Object(d.jsx)(_,{stack:"Bootstrap/SCSS,JS",img:E,web:" https://eduardkop.github.io/Monza-Motorsports-/",webName:"githubPages:",link:"https://github.com/EduardKop/Monza-Motorsports-",linkName:"link",name:"Monza-Motorsports",webLink:"link"})})]})})})};var T=function(){return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"app-contents",children:[Object(d.jsx)(r.a,{path:"/skills",component:v}),Object(d.jsx)(r.a,{path:"/expirience",component:L}),Object(d.jsx)(r.a,{path:"/education",component:g}),Object(d.jsx)(r.a,{path:"/hobbie",component:k}),Object(d.jsx)(r.a,{path:"/contacts",component:w})]})]})})};i(31),i(32),i(33),i(34),i(35),i(36),i(37),i(38),i(39);s.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e7120ea6.chunk.js.map