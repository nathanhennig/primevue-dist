(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa93c"],{1238:function(t,e,n){"use strict";n.r(e);var l=n("7a23"),o={class:"content-section introduction"},i=Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,"SelectButton"),Object(l["k"])("p",null,"SelectButton is a form component to choose a value from a list of options using button elements.")],-1),c={class:"content-section implementation"},u={class:"card"},a=Object(l["k"])("h5",null,"Single Selection",-1),p=Object(l["k"])("h5",null,"Multiple Selection",-1),s=Object(l["k"])("h5",null,"Custom Content",-1);function b(t,e,n,b,r,O){var d=Object(l["P"])("AppDemoActions"),j=Object(l["P"])("SelectButton"),m=Object(l["P"])("SelectButtonDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",o,[i,Object(l["o"])(d)]),Object(l["k"])("div",c,[Object(l["k"])("div",u,[a,Object(l["o"])(j,{modelValue:r.value1,"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.value1=t}),options:r.options},null,8,["modelValue","options"]),p,Object(l["o"])(j,{modelValue:r.value2,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.value2=t}),options:r.paymentOptions,optionLabel:"name",multiple:""},null,8,["modelValue","options"]),s,Object(l["o"])(j,{modelValue:r.value3,"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.value3=t}),options:r.justifyOptions,dataKey:"value"},{option:Object(l["Z"])((function(t){return[Object(l["k"])("i",{class:Object(l["A"])(t.option.icon)},null,2)]})),_:1},8,["modelValue","options"])])]),Object(l["o"])(m)])}var r=Object(l["k"])("h5",null,"Import via Module",-1),O=Object(l["k"])("code",null,"\nimport SelectButton from 'primevue/selectbutton';\n\n",-1),d=[O],j=Object(l["k"])("h5",null,"Import via CDN",-1),m=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/selectbutton/selectbutton.min.js"><\/script>\n\n',-1),v=[m],k=Object(l["k"])("h5",null,"Getting Started",-1),f=Object(l["k"])("p",null,[Object(l["n"])("SelectButton requires a value to bind and a collection of arbitrary objects along with the "),Object(l["k"])("i",null,"optionLabel"),Object(l["n"])(" property to specify the label property of the option.")],-1),h=Object(l["k"])("code",null,'\n<SelectButton v-model="selectedCity" :options="cities" optionLabel="name" />\n\n',-1),y=[h],g=Object(l["k"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tselectedCity: null,\n\t\t\tcities: [\n\t\t\t\t{name: 'London', code: 'LND'},\n\t\t\t\t{name: 'Paris', code: 'PRS'},\n\t\t\t\t{name: 'Rome', code: 'RM'}\n\t\t\t]\n\t\t}\n\t}\n}\n\n",-1),S=[g],B=Object(l["k"])("h5",null,"Multiple",-1),P=Object(l["k"])("p",null,[Object(l["n"])("SelectButton allows selecting only one item by default and setting "),Object(l["k"])("i",null,"multiple"),Object(l["n"])(" option enables choosing more than one item. In multiple case, model property should be an array.")],-1),w=Object(l["k"])("code",null,'\n<SelectButton v-model="selectedCity" :options="cities" optionLabel="brand" :multiple="true" />\n\n',-1),C=[w],D=Object(l["k"])("h5",null,"Templating",-1),A=Object(l["k"])("p",null,[Object(l["n"])("Label of an option is used as the display text of an item by default, for custom content support define an "),Object(l["k"])("i",null,"option"),Object(l["n"])(" template that gets the option instance as a parameter.")],-1),V=Object(l["k"])("code",null,[Object(l["k"])("template",null,[Object(l["n"])('\n<SelectButton v-model="selectedCar" :options="cars" optionLabel="brand">\n\t<template #option="slotProps">\n        <div class="car-option">\n            <img :alt="slotProps.option.brand" :src="\'demo/images/car/\' + slotProps.option.brand + \'.png\'" />\n            <div>{{slotProps.option.brand}}</div>\n        </div>\n\t</template>\n</SelectButton>\n')]),Object(l["n"])("\n")],-1),L=[V],N=Object(l["k"])("h5",null,"Properties",-1),H=Object(l["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),I=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"modelValue"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Value of the component.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"options"),Object(l["k"])("td",null,"array"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"An array of selectitems to display as the available options.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"optionLabel"),Object(l["k"])("td",null,"string | function"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Property name or getter function to use as the label of an option.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"optionValue"),Object(l["k"])("td",null,"string | function"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Property name or getter function to use as the value of an option, defaults to the option itself when not defined.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"optionDisabled"),Object(l["k"])("td",null,"string | function"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"multiple"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"false"),Object(l["k"])("td",null,"When specified, allows selecting multiple values.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"disabled"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"false"),Object(l["k"])("td",null,"When present, it specifies that the element should be disabled.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"dataKey"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"A property to uniquely identify an option.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"ariaLabelledBy"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Establishes relationships between the component and label(s) where its value should be one or more element IDs.")])])])],-1),M=Object(l["k"])("h5",null,"Events",-1),R=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"change"),Object(l["k"])("td",null,[Object(l["n"])("event.originalEvent: browser event "),Object(l["k"])("br"),Object(l["n"])(" event.value: Single value or an array of values that are selected.")]),Object(l["k"])("td",null,"Callback to invoke on value change.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"focus"),Object(l["k"])("td",null,"event: Browser event"),Object(l["k"])("td",null,"Callback to invoke on focus.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"blur"),Object(l["k"])("td",null,"event: Browser event"),Object(l["k"])("td",null,"Callback to invoke on blur.")])])])],-1),x=Object(l["k"])("h5",null,"Slots",-1),J=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"option"),Object(l["k"])("td",null,[Object(l["n"])("option: Option instance"),Object(l["k"])("br"),Object(l["n"])(" index: Index of the option")])])])])],-1),K=Object(l["k"])("h5",null,"Dependencies",-1),E=Object(l["k"])("p",null,"None.",-1);function U(t,e,n,o,i,c){var u=Object(l["P"])("AppDoc"),a=Object(l["Q"])("code");return Object(l["H"])(),Object(l["h"])(u,{name:"SelectButtonDemo",sources:i.sources,github:"selectbutton/SelectButtonDemo.vue"},{default:Object(l["Z"])((function(){return[r,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,d)),[[a,void 0,void 0,{script:!0}]]),j,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,v)),[[a]]),k,f,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,y)),[[a]]),Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,S)),[[a,void 0,void 0,{script:!0}]]),B,P,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,C)),[[a]]),D,A,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,L)),[[a]]),N,H,I,M,R,x,J,K,E]})),_:1},8,["sources"])}var q={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <h5>Single Selection</h5>\n        <SelectButton v-model=\"value1\" :options=\"options\" />\n\n        <h5>Multiple Selection</h5>\n        <SelectButton v-model=\"value2\" :options=\"paymentOptions\" optionLabel=\"name\" multiple />\n\n        <h5>Custom Content</h5>\n        <SelectButton v-model=\"value3\" :options=\"justifyOptions\" dataKey=\"value\">\n            <template #option=\"slotProps\">\n                <i :class=\"slotProps.option.icon\"></i>\n            </template>\n        </SelectButton>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            value1: 'Off',\n            value2: null,\n            value3: null,\n            options: ['Off', 'On'],\n            paymentOptions: [\n                {name: 'Option 1', value: 1},\n                {name: 'Option 2', value: 2},\n                {name: 'Option 3', value: 3}\n            ],\n            justifyOptions: [\n                {icon: 'pi pi-align-left', value: 'left'},\n                {icon: 'pi pi-align-right', value: 'Right'},\n                {icon: 'pi pi-align-center', value: 'Center'},\n                {icon: 'pi pi-align-justify', value: 'Justify'}]\n        }\n    }\n}\n<\\/script>\n"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n        <h5>Single Selection</h5>\n        <SelectButton v-model=\"value1\" :options=\"options\" />\n\n        <h5>Multiple Selection</h5>\n        <SelectButton v-model=\"value2\" :options=\"paymentOptions\" optionLabel=\"name\" multiple />\n\n        <h5>Custom Content</h5>\n        <SelectButton v-model=\"value3\" :options=\"justifyOptions\" dataKey=\"value\">\n            <template #option=\"slotProps\">\n                <i :class=\"slotProps.option.icon\"></i>\n            </template>\n        </SelectButton>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\n\nexport default {\n    setup() {\n        const value1 = ref('Off');\n        const value2 = ref();\n        const value3 = ref();\n        const options = ref(['Off', 'On']);\n        const paymentOptions = ref([\n            {name: 'Option 1', value: 1},\n            {name: 'Option 2', value: 2},\n            {name: 'Option 3', value: 3}\n        ]);\n        const justifyOptions = ref([\n            {icon: 'pi pi-align-left', value: 'left'},\n            {icon: 'pi pi-align-right', value: 'Right'},\n            {icon: 'pi pi-align-center', value: 'Center'},\n            {icon: 'pi pi-align-justify', value: 'Justify'}\n        ]);\n\n        return { value1, value2, value3, options, paymentOptions, justifyOptions }\n    }\n}\n<\\/script>\n"},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/selectbutton/selectbutton.min.js"><\\/script>',content:"<div id=\"app\">\n            <h5>Single Selection</h5>\n            <p-selectbutton v-model=\"value1\" :options=\"options\"></p-selectbutton>\n\n            <h5>Multiple Selection</h5>\n            <p-selectbutton v-model=\"value2\" :options=\"paymentOptions\" option-label=\"name\" multiple></p-selectbutton>\n\n            <h5>Custom Content</h5>\n            <p-selectbutton v-model=\"value3\" :options=\"justifyOptions\" data-key=\"value\">\n                <template #option=\"slotProps\">\n                    <i :class=\"slotProps.option.icon\"></i>\n                </template>\n            </p-selectbutton>\n        </div>\n\n        <script type=\"module\">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const value1 = ref('Off');\n                const value2 = ref();\n                const value3 = ref();\n                const options = ref(['Off', 'On']);\n                const paymentOptions = ref([\n                    {name: 'Option 1', value: 1},\n                    {name: 'Option 2', value: 2},\n                    {name: 'Option 3', value: 3}\n                ]);\n                const justifyOptions = ref([\n                    {icon: 'pi pi-align-left', value: 'left'},\n                    {icon: 'pi pi-align-right', value: 'Right'},\n                    {icon: 'pi pi-align-center', value: 'Center'},\n                    {icon: 'pi pi-align-justify', value: 'Justify'}\n                ]);\n\n                return { value1, value2, value3, options, paymentOptions, justifyOptions }\n            },\n            components: {\n                \"p-selectbutton\": primevue.selectbutton\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount(\"#app\");\n        <\\/script>\n"}}}}},T=n("6b0d"),W=n.n(T);const Z=W()(q,[["render",U]]);var _=Z,F={data:function(){return{value1:"Off",value2:null,value3:null,options:["Off","On"],paymentOptions:[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],justifyOptions:[{icon:"pi pi-align-left",value:"left"},{icon:"pi pi-align-right",value:"Right"},{icon:"pi pi-align-center",value:"Center"},{icon:"pi pi-align-justify",value:"Justify"}]}},components:{SelectButtonDoc:_}};const G=W()(F,[["render",b]]);e["default"]=G}}]);