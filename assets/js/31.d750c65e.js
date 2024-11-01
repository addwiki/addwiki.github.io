(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{310:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"page-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-lists"}},[t._v("#")]),t._v(" Page Lists")]),t._v(" "),a("p",[t._v("The Page List Getter allows you to retrieve lists of pages based on various criteria.\nIt takes care of continuing queries where they span multiple requests, ensuring that you get all pages in your result set.\nThis means that for some lists of pages a great many requests will be sent, and you should account for this possible performance problem when you request these lists (e.g. by running these as a background process and caching the results).")]),t._v(" "),a("p",[t._v("To use it, first get a new PageListGetter object from the factory:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mediawiki"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MediawikiApi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'http://localhost/w/api.php'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$services")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Mediawiki"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MediawikiFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$api")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pageListGetter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$services")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newPageListGetter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The examples below all use this "),a("code",[t._v("$pageListGetter")]),t._v(" object.")]),t._v(" "),a("p",[t._v("All methods of the PageListGetter return "),a("code",[t._v("Page")]),t._v(" objects; this class is part of the addwiki/mediawiki-datamodel package, and is documented in that page’s documentation.")]),t._v(" "),a("h2",{attrs:{id:"all-pages-in-a-category"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-pages-in-a-category"}},[t._v("#")]),t._v(" All pages in a category")]),t._v(" "),a("p",[t._v("Note that the category name as provided should also include the ‘Category’ namespace prefix (in the language of the wiki, or in canonical English form).")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$examplePages")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pageListGetter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPageListFromCategoryName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Category:Example pages'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$examplePages")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exPage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exPage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"pages-that-transclude-a-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages-that-transclude-a-template"}},[t._v("#")]),t._v(" Pages that transclude a template")]),t._v(" "),a("p",[t._v("Although generally it is templates that are transcluded, any page may be and so any page title can be passed to this method.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$usingTestTemplate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pageListGetter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPageListFromPageTransclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Template:Test'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"pages-that-link-to-a-given-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages-that-link-to-a-given-page"}},[t._v("#")]),t._v(" Pages that link to a given page")]),t._v(" "),a("p",[t._v("Get the list of pages that link to a particular page.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$backLinks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pageListGetter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFromWhatLinksHere")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Test page'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"pages-with-a-given-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages-with-a-given-prefix"}},[t._v("#")]),t._v(" Pages with a given prefix")]),t._v(" "),a("p",[t._v("Find pages that have a particular prefix to their title. This can also be used to find subpages of any page.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$backLinks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pageListGetter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFromPrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'A page/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"random-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#random-pages"}},[t._v("#")]),t._v(" Random pages")]),t._v(" "),a("p",[t._v("Get up to ten random pages at a time. This method takes the same arguments as the API "),a("a",{attrs:{href:"https://www.mediawiki.org/wiki/API:Random",target:"_blank",rel:"noopener noreferrer"}},[t._v("list=random"),a("OutboundLink")],1),t._v(" query.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("rnlimit")]),t._v(" How many pages to get. No more than 10 (20 for bots) allowed. Default: 1.")]),t._v(" "),a("li",[a("code",[t._v("rnnamespace")]),t._v(" Pipe-separate list of namespace IDs.")]),t._v(" "),a("li",[a("code",[t._v("rnfilterredir")]),t._v(" How to filter for redirects. Possible values: "),a("code",[t._v("all")]),t._v(", "),a("code",[t._v("redirects")]),t._v(", "),a("code",[t._v("nonredirects")]),t._v(". Default: "),a("code",[t._v("nonredirects")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$backLinks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pageListGetter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRandom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'rnlimit'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'rnnamespace'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'3|5|6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'rnfilterredir'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);