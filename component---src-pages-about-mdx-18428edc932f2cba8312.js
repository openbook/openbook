(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(e,t,a){"use strict";a.r(t);a(28);var n=a(42),r=a.n(n),c=a(7),i=a.n(c),o=a(0),l=a.n(o),s=a(27),d=a(164),m=a(165);a.d(t,"default",function(){return p}),a.d(t,"_frontmatter",function(){return f});var u={},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=d.a,a}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,a),components:t},l.a.createElement(s.MDXTag,{name:"h1",components:t},"About me"),l.a.createElement(s.MDXTag,{name:"p",components:t},"I've been building digital products in the education and charity sectors since 2006.  I enjoy working in cross functional teams that employ ",l.a.createElement("a",{href:"https://www.gov.uk/service-manual/agile-delivery"},"agile delivery methods")," to build user focussed products."),l.a.createElement(m.k,null,l.a.createElement(m.d,{tag:"h2",className:"subheading h5",text:"Ways of working"}),l.a.createElement(m.d,{tag:"h3",className:"subheading h6",text:"Scope"}),l.a.createElement("p",null,"I conduct ",l.a.createElement("a",{href:"https://technology.blog.gov.uk/2016/02/08/the-role-of-an-architect-in-discovery/"},"technical discoveries")," via interviews with technical stakeholders and desk research to identify a team's capabilities and constraints."),l.a.createElement(m.d,{tag:"h3",className:"subheading h6",text:"Plan"}),l.a.createElement("p",null,"Projects planned around ",l.a.createElement("a",{href:"https://www.gov.uk/service-manual/user-research/understanding-users-who-dont-use-digital-services"},"user personas and stories")," maintain a better focus on whats really needed from a product.  I'm used to building and maintaining these stories from project start to finish."),l.a.createElement(m.d,{tag:"h3",className:"subheading h6",text:"Prototype"}),l.a.createElement("p",null,"I value sketching, prototyping and whiteboarding ideas before any code is written.  This helps to start conversations within a team and to arrive at a better solution."),l.a.createElement(m.d,{tag:"h3",className:"subheading h6",text:"Deliver"}),l.a.createElement("p",null,"Quick delivery cycles means collaboration & code quality is important.  I'm happy ",l.a.createElement("a",{target:"_blank",href:"https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open/"},"coding in the open"),", and receiving & giving regular feedback.  I work with tools like Docker and AWS to allow for faster & more scalable deployments.")),l.a.createElement(m.k,null,l.a.createElement(m.d,{tag:"h2",className:"subheading h5",text:"Tech radar"}),l.a.createElement("p",null,"The ",l.a.createElement("a",{href:"https://www.thoughtworks.com/radar"},"Technology Radar")," provided by ",l.a.createElement("a",{href:"https://www.thoughtworks.com"},"Thoughtworks")," is a great way to get the perspective of experts in the industry & is something I've been following to keep track of where the industry is moving.")))},t}(l.a.Component);p.isMDXComponent=!0;var f={}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(41),l=a.n(o);a.d(t,"a",function(){return l.a});a(166);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),i=a.n(c),o=a(27),l=a(165),s=a(15),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.MDXProvider,null,i.a.createElement(s.Location,null,function(e){var t=e.location;return i.a.createElement(l.j,{location:t})}),i.a.createElement(l.c,null),i.a.createElement("div",{id:"main"},i.a.createElement(l.f,null),e))},t}(i.a.Component);t.a=d},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=function(e){return r.a.createElement("div",{className:"columns "+(e.className&&e.className||null)},e.children)},i=function(e){return r.a.createElement("div",{className:"column "+(e.className&&e.className||null)},e.children)},o=a(7),l=a.n(o),s=a(168),d=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.links,t=e.github,a=e.email,n=e.linkedIn;return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"list-inline--spaced mx-0 px-0"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:t,className:"link link--icon"},r.a.createElement("i",{className:"icon icon--github"}),r.a.createElement("span",{className:"sr-only"},"Github"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:n,className:"link link--icon"},r.a.createElement("i",{className:"icon icon--linkedin"}),r.a.createElement("span",{className:"sr-only"},"LinkedIn"))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"mailto:"+a},a)))))},t}(r.a.Component),m=a(163),u=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return r.a.createElement(m.b,{query:p,render:function(e){var t=e.site.siteMetadata,a=t.title,n=t.description,c=t.links,i=t.role;return r.a.createElement("header",{id:"header",className:"blue"},r.a.createElement("div",{className:"inner col-ml-auto"},r.a.createElement("h1",{className:"site-title"},a),r.a.createElement("h2",null,i),r.a.createElement("p",null,n),r.a.createElement(d,{links:c})))},data:s})},t}(r.a.Component),p="2649330470",f=u,b=function(e){var t=""+(e.type||"h2");return r.a.createElement(t,{className:" "+e.className+" spacing-bottom--sm",id:e.id||null,dangerouslySetInnerHTML:{__html:e.text}})},h=a(164),g=a(15),E=function(){return r.a.createElement(g.Location,null,function(e){var t=e.location;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("section",{className:"navbar-section"},r.a.createElement(m.a,{to:"/",className:"navbar-item "+("/"===t.pathname?"active":null)},"Home"),r.a.createElement(m.a,{to:"/about",className:"navbar-item "+("/about"===t.pathname?"active":null)},"About"),r.a.createElement(m.a,{to:"/projects",className:"navbar-item "+("/projects"===t.pathname?"active":null)},"Projects")))})},v=a(169),A=a(4),w=a.n(A),y=function(e){var t=e.number,a=v.data.allMdx,n=0===t?a.totalCount:t;return r.a.createElement(c,null,a.edges.slice(0,n).map(function(e){return r.a.createElement(i,{className:"col-6 col-sm-12 spacing-bottom--sm",key:"grid-"+e.node.id},r.a.createElement(M,{image:e.node.frontmatter.image?e.node.frontmatter.image.childImageSharp.fluid:null,title:e.node.frontmatter.title,slug:e.node.fields.slug,key:e.node.id}))}))};y.defaultProps={number:0},y.propTypes={number:w.a.number};var k=y,N=a(172),x=a.n(N),M=function(e){var t=e.image,a=e.title,n=e.slug;return r.a.createElement(m.a,{to:n},t&&r.a.createElement(x.a,{fluid:t}),!t&&r.a.createElement("h5",null,a))},S=function(e){var t=e.path;return r.a.createElement("p",{className:"ta-r spacing-top--sm"},r.a.createElement(m.a,{to:t},"read more"))},I=function(e){return r.a.createElement("section",{className:""+(e.className?e.className:"spacing-bottom--lg")},e.children)},j=a(170),P=function(){var e=j.data.site,t=[].concat(e.siteMetadata.skills);return r.a.createElement(c,null,r.a.createElement(i,{className:"col-6 col-sm-12"},r.a.createElement("dl",null,t.splice(0,3).map(function(e){return r.a.createElement(r.a.Fragment,{key:e.label},r.a.createElement("dt",null,r.a.createElement("strong",null,e.label)),r.a.createElement("dd",null,e.contents))}))),r.a.createElement(i,{className:"col-6 col-sm-12"},r.a.createElement("dl",null,t.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.label},r.a.createElement("dt",null,r.a.createElement("strong",null,e.label)),r.a.createElement("dd",null,e.contents))}))))},C=a(171),T=a(173),L=a.n(T),X=function(e){var t,a=e.description,n=e.lang,c=e.meta,i=e.keywords,o=e.title,l=e.location,s=C.data.site,d="%s | "+s.siteMetadata.title;switch(l.pathname){case"/about":t="About me";break;case"/projects":t="Projects";break;case"/":t=s.siteMetadata.title+" - "+s.siteMetadata.role,d="%s ";break;default:t="Page not found"}var m=o||t,u=a||s.siteMetadata.description;return r.a.createElement(L.a,{htmlAttributes:{lang:n},title:m,titleTemplate:d,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(c)})};X.defaultProps={lang:"en",meta:[],keywords:[],description:""},X.propTypes={description:w.a.string,lang:w.a.string,meta:w.a.arrayOf(w.a.object),keywords:w.a.arrayOf(w.a.string),title:w.a.string};var q=X;a.d(t,"a",function(){return c}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return f}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return h.a}),a.d(t,"f",function(){return E}),a.d(t,"h",function(){return k}),a.d(t,"g",function(){return M}),a.d(t,"i",function(){return S}),a.d(t,"k",function(){return I}),a.d(t,"l",function(){return P}),a.d(t,"j",function(){return q})},166:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},167:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),c=a(0),i=a.n(c),o=a(4),l=a.n(o),s=a(60),d=a(2),m=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",role:"Full-stack web developer based in London",links:{github:"https://github.com/openbook",email:"hello@openbook.uk.com",linkedIn:"https://linkedin.com/in/andrewbrace/"}}}}}},169:function(e){e.exports={data:{allMdx:{totalCount:2,edges:[{node:{id:"305c7558-5b42-56ad-9bba-6c4a32e317a5",frontmatter:{title:"Talk To Frank",date:"01 November, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzElEQVQoz2P4T2XAgMz59+8fnCYGI6vFbiCaoeiG//379/9fbAbiciE2G/EBbOoYkF0HcgEIrNt/+H9W54T/rfOW/K+dMe9//awF/xtnL/zfvXjl/4kr1oLZs9ZvAav9i8vLIME/UAPnbdr2f8qq9f+b5iz6H1ff/r+wf+r/3O5J/9Paev9ndvT/T2rq+t+zZCXEQKAe3GEIlfjx8xeY/v3nz/+v37////7jJ5j+A+T//g0S+/H/y7fvGOGNMwxxhQ8x4UhxsiHoQkoBAHI8AoENe2ShAAAAAElFTkSuQmCC",aspectRatio:1.974921630094044,src:"/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png",srcSet:"/static/b064b26a85da9cf7cab96ae04abb3ae5/28077/ttf.png 75w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/d0486/ttf.png 150w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5f3f7/ttf.png 300w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/e4982/ttf.png 450w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/5c74c/ttf.png 600w,\n/static/b064b26a85da9cf7cab96ae04abb3ae5/aabe9/ttf.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/talk-to-frank/"},excerpt:"Talk to Frank is an independent government website that aims to help people in the UK find impartial advice on drugs taking & where to get…"}},{node:{id:"71ee4e5b-4822-54a4-aaa4-30b906e36ee8",frontmatter:{title:"Promonews",date:"01 September, 2018",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQoz2Mwt7L5T03MQHMDzSytwbSFte1/CxgNxxA+sjq8BsIUGZma/9czNPlvaGL238DYFCsNU49uMIqBIBeBFMfGJ/7PLSj87xcQ9D80IvJ/YEjo/+Cw8P8BwUA6NPy/X2Dwf1MLK+K8bGxm8T8iOuZ/SVnF/8bm1v81dfX/2zo6/ze1tP5vaWv/39nV/b+6qfm/qb3jf3MshmL1MshQPSMTsPf0gdgAjkn0Mkak4MFERcqgTIcAs1NXVtYckcMAAAAASUVORK5CYII=",aspectRatio:1.974921630094044,src:"/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png",srcSet:"/static/5b6cad314644c1435a760955a4937f4d/28077/promo.png 75w,\n/static/5b6cad314644c1435a760955a4937f4d/d0486/promo.png 150w,\n/static/5b6cad314644c1435a760955a4937f4d/5f3f7/promo.png 300w,\n/static/5b6cad314644c1435a760955a4937f4d/e4982/promo.png 450w,\n/static/5b6cad314644c1435a760955a4937f4d/5c74c/promo.png 600w,\n/static/5b6cad314644c1435a760955a4937f4d/aabe9/promo.png 630w",sizes:"(max-width: 300px) 100vw, 300px"}}}},fields:{slug:"/projects/promonews/"},excerpt:"Promonews is the industry go-to blog for daily music video releases.  I'm responsible for all things technical at Promonews and its a…"}}]}}}},170:function(e){e.exports={data:{site:{siteMetadata:{skills:[{label:"Front-end",contents:"Javascript, ES6, React, Gatsby, Grunt, Webpack, CSS, SASS"},{label:"Back-end",contents:"NodeJS, PHP, Elasticsearch, Postgres, MySQL"},{label:"Planning",contents:"System architecture, Sketch, Agile"},{label:"CMS",contents:"Drupal, Contentful"},{label:"Dev Ops",contents:"Docker, Ansible, Vagrant, AWS"}]}}}}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Andy Brace",description:"I help scope, plan, prototype and deliver agile web projects.",author:"Andy Brace",role:"Full-stack web developer based in London"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-mdx-18428edc932f2cba8312.js.map