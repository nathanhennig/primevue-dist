(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a812d96"],{af1a:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"content-section introduction"},a=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("DataTable "),Object(o["k"])("span",null,"GridLines")]),Object(o["k"])("p",null,[Object(o["n"])("Enabling "),Object(o["k"])("b",null,"showGridlines"),Object(o["n"])(" displays borders between cells. Note: Some themes may always display gridlines by design.")])],-1),c={class:"content-section implementation"},u={class:"card"},d=Object(o["n"])(" Header "),l=Object(o["n"])(" Footer ");function i(e,t,n,i,s,p){var m=Object(o["P"])("AppDemoActions"),f=Object(o["P"])("Column"),b=Object(o["P"])("DataTable"),v=Object(o["P"])("AppDoc");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("div",r,[a,Object(o["o"])(m)]),Object(o["k"])("div",c,[Object(o["k"])("div",u,[Object(o["o"])(b,{value:s.products,showGridlines:"",responsiveLayout:"scroll"},{header:Object(o["Z"])((function(){return[d]})),footer:Object(o["Z"])((function(){return[l]})),default:Object(o["Z"])((function(){return[Object(o["o"])(f,{field:"code",header:"Code"}),Object(o["o"])(f,{field:"name",header:"Name"}),Object(o["o"])(f,{field:"category",header:"Category"}),Object(o["o"])(f,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])])]),Object(o["o"])(v,{name:"DataTableGridLinesDemo",sources:s.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableGridLinesDemo.vue"},null,8,["sources"])])}var s=n("e9c0"),p={data:function(){return{products:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <DataTable :value="products" showGridlines responsiveLayout="scroll">\n            <template #header>\n                Header\n            </template>\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="quantity" header="Quantity"></Column>\n            <template #footer>\n                Footer\n            </template>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <DataTable :value="products" showGridlines responsiveLayout="scroll">\n            <template #header>\n                Header\n            </template>\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="quantity" header="Quantity"></Column>\n            <template #footer>\n                Footer\n            </template>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const products = ref(null);\n        const productService = ref(new ProductService());\n\n        return { products }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <p-datatable :value="products" show-gridlines responsive-layout="scroll">\n                <template #header>\n                    Header\n                </template>\n                <p-column field="code" header="Code"></p-column>\n                <p-column field="name" header="Name"></p-column>\n                <p-column field="category" header="Category"></p-column>\n                <p-column field="quantity" header="Quantity"></p-column>\n                <template #footer>\n                    Footer\n                </template>\n            </p-datatable>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    productService.value.getProductsSmall().then(data => products.value = data);\n                })\n\n                const products = ref(null);\n                const productService = ref(new ProductService());\n\n                return { products }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},productService:null,created:function(){this.productService=new s["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))}},m=n("6b0d"),f=n.n(m);const b=f()(p,[["render",i]]);t["default"]=b},e9c0:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("d4ec"),r=n("bee2"),a=(n("d3b7"),function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);