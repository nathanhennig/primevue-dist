(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1af32c92"],{"7a8f":function(t,n,e){"use strict";e.r(n);var o=e("7a23"),l={class:"content-section introduction"},c=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,"Dynamic Dialog"),Object(o["k"])("p",null,"Dialogs can be created dynamically with any component as the content using a DialogService.")],-1),a={class:"content-section implementation"},i={class:"card"};function s(t,n,e,s,u,d){var r=Object(o["P"])("AppDemoActions"),p=Object(o["P"])("Button"),b=Object(o["P"])("DynamicDialog"),m=Object(o["P"])("DynamicDialogDoc");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("div",l,[c,Object(o["o"])(r)]),Object(o["k"])("div",a,[Object(o["k"])("div",i,[Object(o["o"])(p,{label:"Select a Product",icon:"pi pi-search",onClick:d.showProducts},null,8,["onClick"]),Object(o["o"])(b)])]),Object(o["o"])(m)])}var u=e("5530"),d=(e("b0c0"),e("5956")),r={class:"flex justify-content-end mt-1 mb-3"},p=["src","alt"];function b(t,n,e,l,c,a){var i=Object(o["P"])("Button"),s=Object(o["P"])("Column"),u=Object(o["P"])("DataTable");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("div",r,[Object(o["o"])(i,{icon:"pi pi-external-link",label:"Nested Dialog",class:"p-button-outlined p-button-success",onClick:a.showInfo},null,8,["onClick"])]),Object(o["o"])(u,{value:c.products,responsiveLayout:"scroll"},{default:Object(o["Z"])((function(){return[Object(o["o"])(s,{field:"code",header:"Code"}),Object(o["o"])(s,{field:"name",header:"Name"}),Object(o["o"])(s,{header:"Image"},{body:Object(o["Z"])((function(t){return[Object(o["k"])("img",{src:"demo/images/product/"+t.data.image,alt:t.data.name,class:"shadow-2 w-4rem"},null,8,p)]})),_:1}),Object(o["o"])(s,{field:"category",header:"Category"}),Object(o["o"])(s,{field:"quantity",header:"Quantity"}),Object(o["o"])(s,{style:{width:"5rem"}},{body:Object(o["Z"])((function(t){return[Object(o["o"])(i,{type:"button",icon:"pi pi-plus",class:"p-button-text p-button-rounded",onClick:function(n){return a.selectProduct(t.data)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value"])])}e("fb6a");var m=e("e9c0"),j=Object(o["n"])("There are "),h=Object(o["n"])(" products in total in this list."),O={class:"flex justify-content-end"};function f(t,n,e,l,c,a){var i=Object(o["P"])("Button");return Object(o["H"])(),Object(o["j"])("div",null,[Object(o["k"])("p",null,[j,Object(o["k"])("strong",null,Object(o["T"])(c.totalProducts),1),h]),Object(o["k"])("div",O,[Object(o["o"])(i,{type:"button",label:"Close",onClick:a.closeDialog},null,8,["onClick"])])])}var g={inject:["dialogRef"],data:function(){return{totalProducts:0}},mounted:function(){this.totalProducts=this.dialogRef.data.totalProducts},methods:{closeDialog:function(){this.dialogRef.close()}}},k=e("6b0d"),v=e.n(k);const y=v()(g,[["render",f]]);var P=y,D={inject:["dialogRef"],data:function(){return{products:null}},productService:null,created:function(){this.productService=new m["a"]},mounted:function(){var t=this;this.productService.getProductsSmall().then((function(n){return t.products=n.slice(0,5)}))},methods:{selectProduct:function(t){this.dialogRef.close(t)},showInfo:function(){this.$dialog.open(P,{props:{header:"Information",modal:!0,dismissableMask:!0},data:{totalProducts:this.products?this.products.length:0}})}}};const w=v()(D,[["render",b]]);var C=w,S=Object(o["k"])("h5",null,"DialogService",-1),x=Object(o["k"])("p",null,[Object(o["n"])("Dynamic dialogs require the "),Object(o["k"])("i",null,"DialogService"),Object(o["n"])(" to be configured globally.")],-1),R=Object(o["k"])("code",null,"\nimport {createApp} from 'vue';\nimport DialogService from 'primevue/dialogservice';\n\nconst app = createApp(App);\napp.use(DialogService);\n\n",-1),T=[R],I=Object(o["k"])("h5",null,"Import via Module",-1),N=Object(o["k"])("code",null,"\nimport DynamicDialog from 'primevue/dynamicdialog';\n\n",-1),L=[N],B=Object(o["k"])("h5",null,"Import via CDN",-1),A=Object(o["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/dynamicdialog/dynamicdialog.min.js"><\/script>\n\n',-1),H=[A],$=Object(o["k"])("h5",null,"Getting Started",-1),_=Object(o["k"])("p",null,"Ideal location of a DynamicDialog is the main application template so that it can be used by any component within the application.",-1),Y=Object(o["k"])("code",null,"\n<template>\n    <DynamicDialog />\n<template>\n\n",-1),M=[Y],q=Object(o["k"])("h5",null,"Options API",-1),Q=Object(o["k"])("p",null,[Object(o["k"])("i",null,"$dialog"),Object(o["n"])(" is available as a property in the application instance.")],-1),Z=Object(o["k"])("code",null,"\nconst dialogRef = this.$dialog;\n\n",-1),z=[Z],F=Object(o["k"])("h5",null,"Composition API",-1),J=Object(o["k"])("p",null,[Object(o["n"])("The service can be injected with the "),Object(o["k"])("i",null,"useDialog"),Object(o["n"])(" function.")],-1),G=Object(o["k"])("code",null,"\nimport { useDialog } from 'primevue/usedialog';\n\nconst dialog = useDialog();\n\n",-1),U=[G],V=Object(o["k"])("h5",null,"Opening a Dialog",-1),W=Object(o["k"])("p",null,[Object(o["n"])("The "),Object(o["k"])("i",null,"open"),Object(o["n"])(" function of the "),Object(o["k"])("i",null,"DialogService"),Object(o["n"])(" is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.")],-1),E=Object(o["k"])("h6",null,"Options API",-1),K=Object(o["k"])("code",null,"\nimport ProductListDemo from './ProductListDemo';\n\nexport default {\n    methods:{\n        showProducts() {\n            this.$dialog.open(ProductListDemo, {});\n        }\n    }\n}\n\n",-1),X=[K],tt=Object(o["k"])("h6",null,"Composition API",-1),nt=Object(o["k"])("code",null,"\nimport ProductListDemo from './ProductListDemo';\nimport { useDialog } from 'primevue/usedialog';\n\nexport default {\n    methods:{\n        showProducts() {\n            const dialog = useDialog();\n            dialog.open(ProductListDemo, {});\n        }\n    }\n}\n\n",-1),et=[nt],ot=Object(o["k"])("h5",null,"Closing a Dialog",-1),lt=Object(o["k"])("p",null,[Object(o["n"])("The "),Object(o["k"])("i",null,"close"),Object(o["n"])(" function of the "),Object(o["k"])("i",null,"dialogRef"),Object(o["n"])(" is used to hide a Dialog. The "),Object(o["k"])("i",null,"dialogRef"),Object(o["n"])(" is injected to the component that is loaded by the dialog.")],-1),ct=Object(o["k"])("h6",null,"Options API",-1),at=Object(o["k"])("code",null,"\nexport default {\n    inject: ['dialogRef'],\n    methods:{\n        closeDialog() {\n            this.dialogRef.close();\n        }\n    }\n}\n\n",-1),it=[at],st=Object(o["k"])("h6",null,"Composition API",-1),ut=Object(o["k"])("code",null,"\nimport { inject } from 'vue'\n\nexport default {\n    methods:{\n        closeDialog() {\n            const dialogRef = inject('dialogRef');\n            dialogRef.close();\n        }\n    }\n}\n\n",-1),dt=[ut],rt=Object(o["k"])("h5",null,"Passing Data",-1),pt=Object(o["k"])("p",null,[Object(o["n"])("Data can be passed to the component that is loaded by the Dialog and also from the component back to the caller component. Use the "),Object(o["k"])("i",null,"open"),Object(o["n"])(" function and pass your parameters with the "),Object(o["k"])("i",null,"data"),Object(o["n"])(" property in the options object.")],-1),bt=Object(o["k"])("code",null,"\nthis.$dialog.open(ProductListDemo, {\n    data: {\n        user: 'primetime'\n    }\n};\n\n",-1),mt=[bt],jt=Object(o["k"])("code",null,"\nexport default {\n    inject: ['dialogRef'],\n    mounted:{\n        const params = this.dialogRef.data; //{user: 'primetime'}\n    }\n}\n\n",-1),ht=[jt],Ot=Object(o["k"])("p",null,[Object(o["n"])("Similarly when hiding a Dialog, any parameter passed to the "),Object(o["k"])("i",null,"close"),Object(o["n"])(" function is received from the "),Object(o["k"])("i",null,"onClose"),Object(o["n"])(" callback defined by the "),Object(o["k"])("i",null,"open"),Object(o["n"])(" function at the caller.")],-1),ft=Object(o["k"])("code",null,"\nthis.$dialog.open(ProductListDemo, {\n    onClose(options) {\n        const callbackParams = options.data; //{id: 12}\n    }\n);\n\n",-1),gt=[ft],kt=Object(o["k"])("code",null,"\nexport default {\n    inject: ['dialogRef'],\n    methods:{\n        closeDialog() {\n            this.dialogRef.close({id: 12});\n        }\n    }\n}\n\n",-1),vt=[kt],yt=Object(o["k"])("h5",null,"Customizing a Dialog",-1),Pt=Object(o["k"])("i",null,"props",-1),Dt=Object(o["n"])(" option is used to customize the dynamically generated Dialog, refer to the "),wt=Object(o["n"])("Dialog"),Ct=Object(o["n"])(" documentation for the whole list of options."),St=Object(o["k"])("code",null,"\nimport { h } from 'vue';\nimport Button from 'primevue/button';\nimport ProductListDemo from './ProductListDemo';\n\nexport default {\n    methods:{\n        showProducts() {\n            const dialogRef = this.$dialog.open(ProductListDemo, {\n                props: {\n                    header: 'Product List',\n                    style: {\n                        width: '50vw',\n                    },\n                    breakpoints:{\n                        '960px': '75vw',\n                        '640px': '90vw'\n                    },\n                    modal: true\n                },\n                templates: {\n                    footer: () => {\n                        return [\n                            h(Button, { label: \"No\", icon: \"pi pi-times\", onClick: () => dialogRef.close(), class: \"p-button-text\" }),\n                            h(Button, { label: \"Yes\", icon: \"pi pi-check\", onClick: () => dialogRef.close(), autofocus: true})\n                        ]\n                    }\n                },\n                onClose: (options) => {\n                    const data = options.data;\n                    if (data) {\n                        this.$toast.add({ severity:'info', summary: 'Info Message', detail:'Order submitted', life: 3000 });\n                    }\n                }\n            });\n        }\n    }\n}\n",-1),xt=[St],Rt=Object(o["k"])("h5",null,"DialogService API",-1),Tt=Object(o["k"])("p",null,"DialogService is the main entry point to open a dialog and load any content within.",-1),It=Object(o["k"])("div",{class:"doc-tablewrapper"},[Object(o["k"])("table",{class:"doc-table"},[Object(o["k"])("thead",null,[Object(o["k"])("tr",null,[Object(o["k"])("th",null,"Name"),Object(o["k"])("th",null,"Parameters"),Object(o["k"])("th",null,"Description")])]),Object(o["k"])("tbody",null,[Object(o["k"])("tr",null,[Object(o["k"])("td",null,"open"),Object(o["k"])("td",null,[Object(o["n"])("content: The component to load"),Object(o["k"])("br"),Object(o["n"])(" options: Configuration of the Dialog ")]),Object(o["k"])("td",null,[Object(o["n"])("Creates a dialog dynamically with the given options and loads the component. See the "),Object(o["k"])("i",null,"Dialog Open Configuration API"),Object(o["n"])(" section below for the avaiable properties.")])])])])],-1),Nt=Object(o["k"])("h5",null,"Dialog Open Configuration API",-1),Lt=Object(o["k"])("p",null,"Options to configure a dynamically loaded Dialog including Dialog props, data to pass and callback to execute on hide.",-1),Bt=Object(o["k"])("div",{class:"doc-tablewrapper"},[Object(o["k"])("table",{class:"doc-table"},[Object(o["k"])("thead",null,[Object(o["k"])("tr",null,[Object(o["k"])("th",null,"Name"),Object(o["k"])("th",null,"Type"),Object(o["k"])("th",null,"Default"),Object(o["k"])("th",null,"Description")])]),Object(o["k"])("tbody",null,[Object(o["k"])("tr",null,[Object(o["k"])("td",null,"props"),Object(o["k"])("td",null,"object"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Properties of a dialog.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"data"),Object(o["k"])("td",null,"object"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Data to pass to the loaded component.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"templates"),Object(o["k"])("td",null,"object"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,[Object(o["n"])("Templates of a dialog including, "),Object(o["k"])("strong",null,"header"),Object(o["n"])(" and "),Object(o["k"])("strong",null,"footer"),Object(o["n"])(".")])]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"onClose"),Object(o["k"])("td",null,"function"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Function callback to invoke when dialog is closed.")])])])],-1),At=Object(o["k"])("h5",null,"Dialog Ref API",-1),Ht=Object(o["k"])("p",null,"Reference to the dynamic dialog that can be used to access the passed data and close the dialog with the option of passing data back to the caller.",-1),$t=Object(o["k"])("div",{class:"doc-tablewrapper"},[Object(o["k"])("table",{class:"doc-table"},[Object(o["k"])("thead",null,[Object(o["k"])("tr",null,[Object(o["k"])("th",null,"Name"),Object(o["k"])("th",null,"Type"),Object(o["k"])("th",null,"Default"),Object(o["k"])("th",null,"Description")])]),Object(o["k"])("tbody",null,[Object(o["k"])("tr",null,[Object(o["k"])("td",null,"content"),Object(o["k"])("td",null,"object"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Loaded content of a dialog.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"options"),Object(o["k"])("td",null,"object"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Options used to open a dialog.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"data"),Object(o["k"])("td",null,"object"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Data passed to the dialog.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"close"),Object(o["k"])("td",null,"function"),Object(o["k"])("td",null,"null"),Object(o["k"])("td",null,"Function to close a dialog.")])])])],-1);function _t(t,n,e,l,c,a){var i=Object(o["P"])("router-link"),s=Object(o["P"])("AppDoc"),u=Object(o["Q"])("code");return Object(o["H"])(),Object(o["h"])(s,{name:"DynamicDialogDemo",sources:c.sources,extPages:c.pages,service:["ProductService"],data:["products-small"],github:"dynamicdialog/DynamicDialogDemo.vue"},{default:Object(o["Z"])((function(){return[S,x,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,T)),[[u,void 0,void 0,{script:!0}]]),I,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,L)),[[u,void 0,void 0,{script:!0}]]),B,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,H)),[[u]]),$,_,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,M)),[[u]]),q,Q,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,z)),[[u,void 0,void 0,{script:!0}]]),F,J,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,U)),[[u,void 0,void 0,{script:!0}]]),V,W,E,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,X)),[[u,void 0,void 0,{script:!0}]]),tt,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,et)),[[u,void 0,void 0,{script:!0}]]),ot,lt,ct,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,it)),[[u,void 0,void 0,{script:!0}]]),st,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,dt)),[[u,void 0,void 0,{script:!0}]]),rt,pt,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,mt)),[[u,void 0,void 0,{script:!0}]]),Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,ht)),[[u,void 0,void 0,{script:!0}]]),Ot,Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,gt)),[[u,void 0,void 0,{script:!0}]]),Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,vt)),[[u,void 0,void 0,{script:!0}]]),yt,Object(o["k"])("p",null,[Pt,Dt,Object(o["o"])(i,{to:"/dialog"},{default:Object(o["Z"])((function(){return[wt]})),_:1}),Ct]),Object(o["ab"])((Object(o["H"])(),Object(o["j"])("pre",null,xt)),[[u,void 0,void 0,{script:!0}]]),Rt,Tt,It,Nt,Lt,Bt,At,Ht,$t]})),_:1},8,["sources","extPages"])}var Yt={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <Button label=\"Show\" @click=\"onShow\" />\n\n        <DynamicDialog />\n    </div>\n</template>\n\n<script>\nimport { h } from 'vue';\nimport Button from 'primevue/button';\nimport ProductListDemo from './components/ProductListDemo';\n\nexport default {\n    methods:{\n        onShow() {\n            const dialogRef = this.$dialog.open(ProductListDemo, {\n                props: {\n                    header: 'Product List',\n                    style: {\n                        width: '50vw',\n                    },\n                    breakpoints:{\n                        '960px': '75vw',\n                        '640px': '90vw'\n                    },\n                    modal: true\n                },\n                templates: {\n                    footer: () => {\n                        return [\n                            h(Button, { label: \"No\", icon: \"pi pi-times\", onClick: () => dialogRef.close({ buttonType: 'No' }), class: \"p-button-text\" }),\n                            h(Button, { label: \"Yes\", icon: \"pi pi-check\", onClick: () => dialogRef.close({ buttonType: 'Yes' }), autofocus: true })\n                        ]\n                    }\n                },\n                onClose: (options) => {\n                    const data = options.data;\n                    if (data) {\n                        const buttonType = data.buttonType;\n                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };\n\n                        this.$toast.add({ severity:'info', ...summary_and_detail, life: 3000 });\n                    }\n                }\n            });\n        }\n    }\n}\n<\\/script>\n                        "},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n        <Button label=\"Show\" @click=\"showProducts\" />\n        <Toast />\n\n        <DynamicDialog />\n    </div>\n</template>\n\n<script>\nimport { h } from 'vue';\nimport { useDialog } from 'primevue/usedialog';\nimport { useToast } from 'primevue/usetoast';\nimport Button from 'primevue/button';\nimport ProductListDemo from './components/ProductListDemo';\n\nexport default {\n    setup() {\n        const dialog = useDialog();\n        const toast = useToast();\n\n        const showProducts = () => {\n            const dialogRef = dialog.open(ProductListDemo, {\n                props: {\n                    header: 'Product List',\n                    style: {\n                        width: '50vw',\n                    },\n                    breakpoints:{\n                        '960px': '75vw',\n                        '640px': '90vw'\n                    },\n                    modal: true\n                },\n                templates: {\n                    footer: () => {\n                        return [\n                            h(Button, { label: \"No\", icon: \"pi pi-times\", onClick: () => dialogRef.close({ buttonType: 'No' }), class: \"p-button-text\" }),\n                            h(Button, { label: \"Yes\", icon: \"pi pi-check\", onClick: () => dialogRef.close({ buttonType: 'Yes' }), autofocus: true})\n                        ]\n                    }\n                },\n                onClose: (options) => {\n                    const data = options.data;\n                    if (data) {\n                        const buttonType = data.buttonType;\n                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };\n\n                        toast.add({ severity:'info', ...summary_and_detail, life: 3000 });\n                    }\n                }\n            });\n        }\n\n        return { dialog, showProducts }\n    }\n}\n<\\/script>\n                        "},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/dynamicdialog/dynamicdialog.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/dialogservice/dialogservice.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n                <p-button label="Show" @click="showProducts"></p-button>\n                <p-toast></p-toast>\n\n                <p-dynamicdialog></p-dynamicdialog>\n        </div>\n\n        <script type="module">\n            const { createApp } = Vue;\n            const { useDialog } = primevue.usedialog;\n            const { useToast } = primevue.usetoast;\n\n            const App = {\n                setup() {\n                    const dialog = useDialog();\n                    const toast = useToast();\n\n                    const showProducts = () => {\n                        const dialogRef = dialog.open(ProductListDemo, {\n                            props: {\n                                header: \'Product List\',\n                                style: {\n                                    width: \'50vw\',\n                                },\n                                breakpoints:{\n                                    \'960px\': \'75vw\',\n                                    \'640px\': \'90vw\'\n                                },\n                                modal: true\n                            },\n                            templates: {\n                                footer: () => {\n                                    return [\n                                        h(Button, { label: "No", icon: "pi pi-times", onClick: () => dialogRef.close({ buttonType: \'No\' }), class: "p-button-text" }),\n                                        h(Button, { label: "Yes", icon: "pi pi-check", onClick: () => dialogRef.close({ buttonType: \'Yes\' }), autofocus: true})\n                                    ]\n                                }\n                            },\n                            onClose: (options) => {\n                                const data = options.data;\n                                if (data) {\n                                    const buttonType = data.buttonType;\n                                    const summary_and_detail = buttonType ? { summary: \'No Product Selected\', detail: `Pressed \'${buttonType}\' button` } : { summary: \'Product Selected\', detail: data.name };\n\n                                    toast.add({ severity:\'info\', ...summary_and_detail, life: 3000 });\n                                }\n                            }\n                        });\n                    }\n\n                    return { showProducts }\n                },\n                components: {\n                    "p-dynamicdialog": primevue.dynamicdialog,\n                    "p-button": primevue.button,\n                    "p-toast": primevue.toast\n                }\n            };\n\n            const ProductListDemo = {\n                template: `<div>\n        <div class="flex justify-content-end mt-1 mb-3">\n            <p-button icon="pi pi-external-link" label="Nested Dialog" class="p-button-outlined p-button-success" @click="showInfo"></p-button>\n        </div>\n        <p-datatable :value="products" responsive-layout="scroll">\n\t\t\t<p-column field="code" header="Code"></p-column>\n\t\t\t<p-column field="name" header="Name"></p-column>\n            <p-column header="Image">\n                <template #body="slotProps">\n                    <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />\n                </template>\n            </p-column>\n\t\t\t<p-column field="category" header="Category"></p-column>\n\t\t\t<p-column field="quantity" header="Quantity"></p-column>\n            <p-column style="width:5rem">\n                <template #body="slotProps">\n                    <p-button type="button" icon="pi pi-plus" class="p-button-text p-button-rounded" @click="selectProduct(slotProps.data)"></p-button>\n                </template>\n            </p-column>\n\t\t</p-datatable>\n\t</div>`,\n                inject: [\'dialogRef\'],\n                data() {\n                    return {\n                        products: null\n                    }\n                },\n                productService: null,\n                created() {\n                    this.productService = new ProductService();\n                },\n                mounted() {\n                    this.productService.getProductsSmall().then(data => this.products = data.slice(0,5));\n                },\n                methods: {\n                    selectProduct(data) {\n                        this.dialogRef.close(data);\n                    },\n                    showInfo() {\n                        this.$dialog.open(InfoDemo, {\n                            props: {\n                                header: \'Information\',\n                                modal: true,\n                                dismissableMask: true\n                            },\n                            data: {\n                                totalProducts: this.products ? this.products.length : 0\n                            }\n                        });\n                    }\n                },\n                components: {\n                    "p-datatable": primevue.datatable,\n                    "p-column": primevue.column,\n                    "p-button": primevue.button\n                }\n            };\n\n            const InfoDemo = {\n                template: `<div>\n        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>\n        <div class="flex justify-content-end">\n            <p-button type="button" label="Close" @click="closeDialog"></p-button>\n        </div>\n    </div>`,\n                inject: [\'dialogRef\'],\n                data() {\n                    return {\n                        totalProducts: 0\n                    }\n                },\n                mounted() {\n                    this.totalProducts = this.dialogRef.data.totalProducts;\n                },\n                methods: {\n                    closeDialog() {\n                        this.dialogRef.close();\n                    }\n                },\n                components: {\n                    "p-button": primevue.button\n                }\n            };\n\n            createApp(App)\n            .use(primevue.config.default)\n            .use(primevue.dialogservice)\n            .use(primevue.toastservice)\n            .mount("#app");\n        <\\/script>\n                        '},demo1:{tabName:"ProductListDemo.vue",content:'\n<template>\n\t<div>\n        <div class="flex justify-content-end mt-1 mb-3">\n            <Button icon="pi pi-external-link" label="Nested Dialog" class="p-button-outlined p-button-success" @click="showInfo" />\n        </div>\n        <DataTable :value="products" responsiveLayout="scroll">\n\t\t\t<Column field="code" header="Code"></Column>\n\t\t\t<Column field="name" header="Name"></Column>\n            <Column header="Image">\n                <template #body="slotProps">\n                    <img :src="\'demo/images/product/\' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />\n                </template>\n            </Column>\n\t\t\t<Column field="category" header="Category"></Column>\n\t\t\t<Column field="quantity" header="Quantity"></Column>\n            <Column style="width:5rem">\n                <template #body="slotProps">\n                    <Button type="button" icon="pi pi-plus" class="p-button-text p-button-rounded" @click="selectProduct(slotProps.data)"></Button>\n                </template>\n            </Column>\n\t\t</DataTable>\n\n\t</div>\n</template>\n\n<script>\nimport ProductService from \'../../service/ProductService\';\nimport InfoDemo from \'./InfoDemo.vue\';\n\nexport default {\n    inject: [\'dialogRef\'],\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data.slice(0,5));\n    },\n    methods: {\n        selectProduct(data) {\n            this.dialogRef.close(data);\n        },\n        showInfo() {\n            this.$dialog.open(InfoDemo, {\n                props: {\n                    header: \'Information\',\n                    modal: true,\n                    dismissableMask: true\n                },\n                data: {\n                    totalProducts: this.products ? this.products.length : 0\n                }\n            });\n        }\n    }\n}\n<\\/script>\n                        '},demo2:{tabName:"InfoDemo.vue",content:'\n<template>\n    <div>\n        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>\n        <div class="flex justify-content-end">\n            <Button type="button" label="Close" @click="closeDialog"></Button>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    inject: [\'dialogRef\'],\n    data() {\n        return {\n            totalProducts: 0\n        }\n    },\n    mounted() {\n        this.totalProducts = this.dialogRef.data.totalProducts;\n    },\n    methods: {\n        closeDialog() {\n            this.dialogRef.close();\n        }\n    }\n}\n<\\/script>\n\n                        '}},pages:[{tabName:"ProductListDemo",content:'\n<template>\n\t<div>\n        <div class="flex justify-content-end mt-1 mb-3">\n            <Button icon="pi pi-external-link" label="Nested Dialog" class="p-button-outlined p-button-success" @click="showInfo" />\n        </div>\n        <DataTable :value="products" responsiveLayout="scroll">\n\t\t\t<Column field="code" header="Code"></Column>\n\t\t\t<Column field="name" header="Name"></Column>\n            <Column header="Image">\n                <template #body="slotProps">\n                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.name" class="shadow-2 w-4rem" />\n                </template>\n            </Column>\n\t\t\t<Column field="category" header="Category"></Column>\n\t\t\t<Column field="quantity" header="Quantity"></Column>\n            <Column style="width:5rem">\n                <template #body="slotProps">\n                    <Button type="button" icon="pi pi-plus" class="p-button-text p-button-rounded" @click="selectProduct(slotProps.data)"></Button>\n                </template>\n            </Column>\n\t\t</DataTable>\n\n\t</div>\n</template>\n\n<script>\nimport ProductService from \'../service/ProductService\';\nimport InfoDemo from \'./InfoDemo.vue\';\n\nexport default {\n    inject: [\'dialogRef\'],\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data.slice(0,5));\n    },\n    methods: {\n        selectProduct(data) {\n            this.dialogRef.close(data);\n        },\n        showInfo() {\n            this.$dialog.open(InfoDemo, {\n                props: {\n                    header: \'Information\',\n                    modal: true,\n                    dismissableMask: true\n                },\n                data: {\n                    totalProducts: this.products ? this.products.length : 0\n                }\n            });\n        }\n    }\n}\n<\\/script>\n\n                        '},{tabName:"InfoDemo",content:'\n<template>\n    <div>\n        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>\n        <div class="flex justify-content-end">\n            <Button type="button" label="Close" @click="closeDialog"></Button>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    inject: [\'dialogRef\'],\n    data() {\n        return {\n            totalProducts: 0\n        }\n    },\n    mounted() {\n        this.totalProducts = this.dialogRef.data.totalProducts;\n    },\n    methods: {\n        closeDialog() {\n            this.dialogRef.close();\n        }\n    }\n}\n<\\/script>\n\n                        '}]}}};const Mt=v()(Yt,[["render",_t]]);var qt=Mt,Qt={methods:{showProducts:function(){var t=this,n=this.$dialog.open(C,{props:{header:"Product List",style:{width:"50vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},templates:{footer:function(){return[Object(o["r"])(d["a"],{label:"No",icon:"pi pi-times",onClick:function(){return n.close({buttonType:"No"})},class:"p-button-text"}),Object(o["r"])(d["a"],{label:"Yes",icon:"pi pi-check",onClick:function(){return n.close({buttonType:"Yes"})},autofocus:!0})]}},onClose:function(n){var e=n.data;if(e){var o=e.buttonType,l=o?{summary:"No Product Selected",detail:"Pressed '".concat(o,"' button")}:{summary:"Product Selected",detail:e.name};t.$toast.add(Object(u["a"])(Object(u["a"])({severity:"info"},l),{},{life:3e3}))}}})}},components:{DynamicDialogDoc:qt}};const Zt=v()(Qt,[["render",s]]);n["default"]=Zt},e9c0:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e("d4ec"),l=e("bee2"),c=(e("d3b7"),function(){function t(){Object(o["a"])(this,t)}return Object(l["a"])(t,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(t){return t.json()})).then((function(t){return t.data}))}}]),t}())}}]);