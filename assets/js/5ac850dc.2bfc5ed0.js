(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(161)),i=["components"],c={title:"Check Guide"},s={unversionedId:"guides/extension/check-guide",id:"guides/extension/check-guide",isDocsHomePage:!1,title:"Check Guide",description:"The Check concept is a part of the Validation API. You can create a custom Check to be used as part of resource or package validation.",source:"@site/../docs/guides/extension/check-guide.md",slug:"/guides/extension/check-guide",permalink:"/docs/guides/extension/check-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/extension/check-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1638884098,formattedLastUpdatedAt:"12/7/2021",sidebar:"guides",previous:{title:"Format Guide",permalink:"/docs/guides/extension/format-guide"},next:{title:"Step Guide",permalink:"/docs/guides/extension/step-guide"}},u=[{value:"Check Example",id:"check-example",children:[]}],p={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Check concept is a part of the Validation API. You can create a custom Check to be used as part of resource or package validation."),Object(a.b)("h2",{id:"check-example"},"Check Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},'from frictionless import Check, errors\n\nclass duplicate_row(Check):\n    code = "duplicate-row"\n    Errors = [errors.DuplicateRowError]\n\n    def __init__(self, descriptor=None):\n        super().__init__(descriptor)\n        self.__memory = {}\n\n    def validate_row(self, row):\n        text = ",".join(map(str, row.values()))\n        hash = hashlib.sha256(text.encode("utf-8")).hexdigest()\n        match = self.__memory.get(hash)\n        if match:\n            note = \'the same as row at position "%s"\' % match\n            yield errors.DuplicateRowError.from_row(row, note=note)\n        self.__memory[hash] = row.row_position\n\n    # Metadata\n\n    metadata_profile = {  # type: ignore\n        "type": "object",\n        "properties": {},\n    }\n')),Object(a.b)("p",null,"It's usuall to create a custom ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/extension/error-guide"},"Error")," along side with a Custom Check."))}l.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);