(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return p});a(28);var n=a(42),r=a.n(n),c=a(7),l=a.n(c),i=a(0),o=a.n(i),s=a(27),u=a(164),m={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=u.a,a}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:t},o.a.createElement(s.MDXTag,{name:"h2",components:t},"Page not found"))},t}(o.a.Component);d.isMDXComponent=!0;var p={}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(41),o=a.n(i);a.d(t,"a",function(){return o.a});a(166);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),i=a(27),o=a(165),s=a(15),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(i.MDXProvider,null,l.a.createElement(s.Location,null,function(e){var t=e.location;return l.a.createElement(o.j,{location:t})}),l.a.createElement(o.c,null),l.a.createElement("div",{id:"main"},l.a.createElement(o.f,null),e))},t}(l.a.Component);t.a=u},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=function(e){return r.a.createElement("div",{className:"columns "+(e.className&&e.className||null)},e.children)},l=function(e){return r.a.createElement("div",{className:"column "+(e.className&&e.className||null)},e.children)},i=a(7),o=a.n(i),s=a(168),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.links,t=e.github,a=e.email,n=e.linkedIn;return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"list-inline--spaced mx-0 px-0"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:t,className:"link link--icon"},r.a.createElement("i",{className:"icon icon--github"}),r.a.createElement("span",{className:"sr-only"},"Github"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:n,className:"link link--icon"},r.a.createElement("i",{className:"icon icon--linkedin"}),r.a.createElement("span",{className:"sr-only"},"LinkedIn"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"mailto:"+a},a)))))},t}(r.a.Component),m=a(163),d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(m.b,{query:p,render:function(e){var t=e.site.siteMetadata,a=t.title,n=t.description,c=t.links,l=t.role;return r.a.createElement("header",{id:"header",className:"blue"},r.a.createElement("div",{className:"inner col-ml-auto"},r.a.createElement("h1",{className:"site-title"},a),r.a.createElement("h2",null,l),r.a.createElement("p",null,n),r.a.createElement(u,{links:c})))},data:s})},t}(r.a.Component),p="2649330470",f=d,b=function(e){var t=""+(e.type||"h2");return r.a.createElement(t,{className:" "+e.className+" spacing-bottom--sm",id:e.id||null,dangerouslySetInnerHTML:{__html:e.text}})},g=a(164),A=a(15),h=function(){return r.a.createElement(A.Location,null,function(e){var t=e.location;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("section",{className:"navbar-section"},r.a.createElement(m.a,{to:"/",className:"navbar-item "+("/"===t.pathname?"active":null)},"Home"),r.a.createElement(m.a,{to:"/about",className:"navbar-item "+("/about"===t.pathname?"active":null)},"About"),r.a.createElement(m.a,{to:"/projects",className:"navbar-item "+("/projects"===t.pathname?"active":null)},"Projects")))})},E=a(169),v=a(4),k=a.n(v),w=function(e){var t=e.number,a=E.data.allMdx,n=0===t?a.totalCount:t;return r.a.createElement(c,null,a.edges.slice(0,n).map(function(e){return r.a.createElement(l,{className:"col-6 col-sm-12 spacing-bottom--sm",key:"grid-"+e.node.id},r.a.createElement(M,{image:e.node.frontmatter.image?e.node.frontmatter.image.childImageSharp.fluid:null,title:e.node.frontmatter.title,slug:e.node.fields.slug,key:e.node.id}))}))};w.defaultProps={number:0},w.propTypes={number:k.a.number};var y=w,N=a(172),S=a.n(N),M=function(e){var t=e.image,a=e.title,n=e.slug;return r.a.createElement(m.a,{to:n},t&&r.a.createElement(S.a,{fluid:t}),!t&&r.a.createElement("h5",null,a))},x=function(e){var t=e.path;return r.a.createElement("p",{className:"ta-r spacing-top--sm"},r.a.createElement(m.a,{to:t},"read more"))},C=function(e){return r.a.createElement("section",{className:""+(e.className?e.className:"spacing-bottom--lg")},e.children)},j=a(170),P=function(){var e=j.data.site,t=[].concat(e.siteMetadata.skills);return r.a.createElement(c,null,r.a.createElement(l,{className:"col-6 col-sm-12"},r.a.createElement("dl",null,t.splice(0,3).map(function(e){return r.a.createElement(r.a.Fragment,{key:e.label},r.a.createElement("dt",null,r.a.createElement("strong",null,e.label)),r.a.createElement("dd",null,e.contents))}))),r.a.createElement(l,{className:"col-6 col-sm-12"},r.a.createElement("dl",null,t.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.label},r.a.createElement("dt",null,r.a.createElement("strong",null,e.label)),r.a.createElement("dd",null,e.contents))}))))},I=a(171),T=a(173),B=a.n(T),L=function(e){var t,a=e.description,n=e.lang,c=e.meta,l=e.keywords,i=e.title,o=e.location,s=I.data.site,u="%s | "+s.siteMetadata.title;switch(o.pathname){case"/about":t="About me";break;case"/projects":t="Projects";break;case"/":t=s.siteMetadata.title+" - "+s.siteMetadata.role,u="%s ";break;default:t="Page not found"}var m=i||t,d=a||s.siteMetadata.description;return r.a.createElement(B.a,{htmlAttributes:{lang:n},title:m,titleTemplate:u,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(c)})};L.defaultProps={lang:"en",meta:[],keywords:[],description:""},L.propTypes={description:k.a.string,lang:k.a.string,meta:k.a.arrayOf(k.a.object),keywords:k.a.arrayOf(k.a.string),title:k.a.string};var X=L;a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return f}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return g.a}),a.d(t,"f",function(){return h}),a.d(t,"h",function(){return y}),a.d(t,"g",function(){return M}),a.d(t,"i",function(){return x}),a.d(t,"k",function(){return C}),a.d(t,"l",function(){return P}),a.d(t,"j",function(){return X})},166:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},167:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(0),l=a.n(c),i=a(4),o=a.n(i),s=a(60),u=a(2),m=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(s.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",role:"Full-stack web developer based in London",links:{github:"https://github.com/openbook",email:"hello@openbook.uk.com",linkedIn:"https://linkedin.com/in/andrewbrace/"}}}}}},169:function(e){e.exports={data:{allMdx:{totalCount:4,edges:[{node:{id:"305c7558-5b42-56ad-9bba-6c4a32e317a5",frontmatter:{title:"Talk To Frank",date:"01 November, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzElEQVQoz2P4T2XAgMz59+8fnCYGI6vFbiCaoeiG//379/9fbAbiciE2G/EBbOoYkF0HcgEIrNt/+H9W54T/rfOW/K+dMe9//awF/xtnL/zfvXjl/4kr1oLZs9ZvAav9i8vLIME/UAPnbdr2f8qq9f+b5iz6H1ff/r+wf+r/3O5J/9Paev9ndvT/T2rq+t+zZCXEQKAe3GEIlfjx8xeY/v3nz/+v37////7jJ5j+A+T//g0S+/H/y7fvGOGNMwxxhQ8x4UhxsiHoQkoBAHI8AoENe2ShAAAAAElFTkSuQmCC",aspectRatio:1.974921630094044,src:"/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png",srcSet:"/static/b064b26a85da9cf7cab96ae04abb3ae5/28077/ttf.png 75w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/d0486/ttf.png 150w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png 300w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/e4982/ttf.png 450w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5c74c/ttf.png 600w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/aabe9/ttf.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/talk-to-frank/"},excerpt:"Talk to Frank is an independent government website that aims to help people in the UK find impartial advice on drugs taking & where to get…"}},{node:{id:"71ee4e5b-4822-54a4-aaa4-30b906e36ee8",frontmatter:{title:"Promonews",date:"01 September, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQoz2Mwt7L5T03MQHMDzSytwbSFte1/CxgNxxA+sjq8BsIUGZma/9czNPlvaGL238DYFCsNU49uMIqBIBeBFMfGJ/7PLSj87xcQ9D80IvJ/YEjo/+Cw8P8BwUA6NPy/X2Dwf1MLK+K8bGxm8T8iOuZ/SVnF/8bm1v81dfX/2zo6/ze1tP5vaWv/39nV/b+6qfm/qb3jf3MshmL1MshQPSMTsPf0gdgAjkn0Mkak4MFERcqgTIcAs1NXVtYckcMAAAAASUVORK5CYII=",aspectRatio:1.974921630094044,src:"/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png",srcSet:"/static/5b6cad314644c1435a760955a4937f4d/28077/promo.png 75w,\n/static/5b6cad314644c1435a760955a4937f4d/d0486/promo.png 150w,\n/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png 300w,\n/static/5b6cad314644c1435a760955a4937f4d/e4982/promo.png 450w,\n/static/5b6cad314644c1435a760955a4937f4d/5c74c/promo.png 600w,\n/static/5b6cad314644c1435a760955a4937f4d/aabe9/promo.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/promonews/"},excerpt:"Promonews is the industry go-to blog for daily music video releases.  I'm responsible for all things technical at Promonews and its a…"}},{node:{id:"c23463f4-2879-584a-b3ee-c81a9b03e38d",frontmatter:{title:"Should I Bake",date:"01 September, 2018",image:null},fields:{slug:"/projects/should-i-bake/"},excerpt:"TBD"}},{node:{id:"4a2c5103-cd45-5e31-a76c-e8e300e15457",frontmatter:{title:"Cancer Research UK",date:"01 June, 2017",image:null},fields:{slug:"/projects/cancer-research-uk/"},excerpt:" \n TBD"}}]}}}},170:function(e){e.exports={data:{site:{siteMetadata:{skills:[{label:"Front-end",contents:"Javascript, ES6, React, React Native, Gatsby, Grunt, Webpack, CSS, SASS"},{label:"Back-end",contents:"NodeJS, PHP, Elasticsearch, Postgres, MySQL"},{label:"Planning",contents:"System architecture, Sketch, Agile"},{label:"CMS",contents:"Drupal, Contentful"},{label:"Dev Ops",contents:"Docker, Ansible, Vagrant, AWS, Digital Ocean"}]}}}}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",author:"Andy Brace",role:"Full-stack web developer based in London"}}}}}}]);
//# sourceMappingURL=component---packages-gatsby-theme-andybrace-src-pages-404-mdx-ce6ce19cd3e220893b25.js.map