(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac935"],{"19b9":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"content-section introduction"},r=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("DataTable "),Object(o["k"])("span",null,"Paginator")]),Object(o["k"])("p",null,"Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.")],-1),s={class:"content-section implementation"},i={class:"card"};function u(e,t,n,u,p,c){var l=Object(o["P"])("AppDemoActions"),m=Object(o["P"])("Column"),d=Object(o["P"])("Button"),b=Object(o["P"])("DataTable"),g=Object(o["P"])("AppDoc");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("div",a,[r,Object(o["o"])(l)]),Object(o["k"])("div",s,[Object(o["k"])("div",i,[Object(o["o"])(b,{value:p.customers,paginator:!0,rows:10,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],responsiveLayout:"scroll",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{paginatorstart:Object(o["Z"])((function(){return[Object(o["o"])(d,{type:"button",icon:"pi pi-refresh",class:"p-button-text"})]})),paginatorend:Object(o["Z"])((function(){return[Object(o["o"])(d,{type:"button",icon:"pi pi-cloud",class:"p-button-text"})]})),default:Object(o["Z"])((function(){return[Object(o["o"])(m,{field:"name",header:"Name"}),Object(o["o"])(m,{field:"country.name",header:"Country"}),Object(o["o"])(m,{field:"company",header:"Company"}),Object(o["o"])(m,{field:"representative.name",header:"Representative"})]})),_:1},8,["value"])])]),Object(o["o"])(g,{name:"DataTablePaginatorDemo",sources:p.sources,service:["CustomerService"],data:["customers-large"],github:"datatable/DataTablePaginatorDemo.vue"},null,8,["sources"])])}var p=n("9fa9"),c={data:function(){return{customers:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n\t<div>\n        <DataTable :value="customers" :paginator="true" :rows="10"\n            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"\n            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"\n            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">\n            <Column field="name" header="Name"></Column>\n            <Column field="country.name" header="Country"></Column>\n            <Column field="company" header="Company"></Column>\n            <Column field="representative.name" header="Representative"></Column>\n            <template #paginatorstart>\n                <Button type="button" icon="pi pi-refresh" class="p-button-text" />\n            </template>\n            <template #paginatorend>\n                <Button type="button" icon="pi pi-cloud" class="p-button-text" />\n            </template>\n        </DataTable>    \n\t</div>\n</template>\n\n<script>\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    data() {\n        return {\n            customers: null\n        }\n    },\n    customerService: null,\n    created() {\n        this.customerService = new CustomerService();\n    },\n    mounted() {\n        this.customerService.getCustomersLarge().then(data => this.customers = data);\n    }\n}\n<\\/script>                  \n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n        <DataTable :value="customers" :paginator="true" :rows="10"\n            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"\n            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"\n            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">\n            <Column field="name" header="Name"></Column>\n            <Column field="country.name" header="Country"></Column>\n            <Column field="company" header="Company"></Column>\n            <Column field="representative.name" header="Representative"></Column>\n            <template #paginatorstart>\n                <Button type="button" icon="pi pi-refresh" class="p-button-text" />\n            </template>\n            <template #paginatorend>\n                <Button type="button" icon="pi pi-cloud" class="p-button-text" />\n            </template>\n        </DataTable>    \n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            customerService.value.getCustomersLarge().then(data => customers.value = data);\n        })\n\n        const customers = ref();\n        const customerService = ref(new CustomerService());\n\n        return { customers }\n    }\n}\n<\\/script>                  \n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./CustomerService.js"><\\/script>',content:'<div id="app">\n            <p-datatable :value="customers" :paginator="true" :rows="10"\n                paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"\n                :rows-per-page-options="[10,20,50]" responsive-layout="scroll"\n                current-page-report-template="Showing {first} to {last} of {totalRecords}">\n                <p-column field="name" header="Name"></p-column>\n                <p-column field="country.name" header="Country"></p-column>\n                <p-column field="company" header="Company"></p-column>\n                <p-column field="representative.name" header="Representative"></p-column>\n                <template #paginatorstart>\n                    <p-button type="button" icon="pi pi-refresh" class="p-button-text"></p-button>\n                </template>\n                <template #paginatorend>\n                    <p-button type="button" icon="pi pi-cloud" class="p-button-text"></p-button>\n                </template>\n            </p-datatable>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    customerService.value.getCustomersLarge().then(data => customers.value = data);\n                })\n\n                const customers = ref();\n                const customerService = ref(new CustomerService());\n\n                return { customers }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column,\n                "p-button": primevue.button\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>                  \n'}}}},customerService:null,created:function(){this.customerService=new p["a"]},mounted:function(){var e=this;this.customerService.getCustomersLarge().then((function(t){return e.customers=t}))}},l=n("6b0d"),m=n.n(l);const d=m()(c,[["render",u]]);t["default"]=d}}]);