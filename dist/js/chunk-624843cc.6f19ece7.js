(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624843cc"],{ad11:function(e,n,t){"use strict";t("c20f")},c20f:function(e,n,t){var l=t("e9bf");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var a=t("499e").default;a("73513336",l,!0,{sourceMap:!1,shadowMode:!1})},c758:function(e,n,t){"use strict";t.r(n);var l=t("7a23"),a=function(e){return Object(l["K"])("data-v-09b7217c"),e=e(),Object(l["I"])(),e},s={class:"content-section introduction"},i=a((function(){return Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,"InputText"),Object(l["k"])("p",null,"InputText renders a text field to enter data.")],-1)})),u={class:"content-section implementation"},p={class:"card"},c=a((function(){return Object(l["k"])("h5",null,"Basic",-1)})),r=a((function(){return Object(l["k"])("h5",null,"Floating Label",-1)})),o={class:"p-float-label"},d=a((function(){return Object(l["k"])("label",{for:"username"},"Username",-1)})),b=a((function(){return Object(l["k"])("h5",null,"Left Icon",-1)})),m={class:"p-input-icon-left"},h=a((function(){return Object(l["k"])("i",{class:"pi pi-search"},null,-1)})),j=a((function(){return Object(l["k"])("h5",null,"Right Icon",-1)})),v={class:"p-input-icon-right"},O=a((function(){return Object(l["k"])("i",{class:"pi pi-spin pi-spinner"},null,-1)})),f=a((function(){return Object(l["k"])("h5",null,"Help Text",-1)})),x={class:"field"},k=a((function(){return Object(l["k"])("label",{for:"username1"},"Username",-1)})),y=a((function(){return Object(l["k"])("small",{id:"username1-help"},"Enter your username to reset your password.",-1)})),g=a((function(){return Object(l["k"])("h5",null,"Invalid",-1)})),I={class:"field"},T=a((function(){return Object(l["k"])("label",{for:"username2"},"Username",-1)})),w=a((function(){return Object(l["k"])("small",{id:"username2-help",class:"p-error"},"Username is not available.",-1)})),U=a((function(){return Object(l["k"])("h5",null,"Disabled",-1)})),V=a((function(){return Object(l["k"])("h5",null,"Sizes",-1)})),S={class:"sizes"};function L(e,n,t,a,L,z){var A=Object(l["P"])("AppDemoActions"),D=Object(l["P"])("InputText"),H=Object(l["P"])("InputTextDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",s,[i,Object(l["o"])(A)]),Object(l["k"])("div",u,[Object(l["k"])("div",p,[c,Object(l["o"])(D,{type:"text",modelValue:L.value1,"onUpdate:modelValue":n[0]||(n[0]=function(e){return L.value1=e})},null,8,["modelValue"]),Object(l["k"])("span",{style:Object(l["B"])({marginLeft:".5em"})},Object(l["T"])(L.value1),5),r,Object(l["k"])("span",o,[Object(l["o"])(D,{id:"username",type:"text",modelValue:L.value2,"onUpdate:modelValue":n[1]||(n[1]=function(e){return L.value2=e})},null,8,["modelValue"]),d]),b,Object(l["k"])("span",m,[h,Object(l["o"])(D,{type:"text",modelValue:L.value3,"onUpdate:modelValue":n[2]||(n[2]=function(e){return L.value3=e}),placeholder:"Search"},null,8,["modelValue"])]),j,Object(l["k"])("span",v,[O,Object(l["o"])(D,{type:"text",modelValue:L.value4,"onUpdate:modelValue":n[3]||(n[3]=function(e){return L.value4=e})},null,8,["modelValue"])]),f,Object(l["k"])("div",x,[k,Object(l["o"])(D,{id:"username1",type:"username","aria-describedby":"username1-help"}),y]),g,Object(l["k"])("div",I,[T,Object(l["o"])(D,{id:"username2",type:"username","aria-describedby":"username2-help",class:"p-invalid"}),w]),U,Object(l["o"])(D,{type:"text",modelValue:L.value5,"onUpdate:modelValue":n[4]||(n[4]=function(e){return L.value5=e}),disabled:""},null,8,["modelValue"]),V,Object(l["k"])("div",S,[Object(l["o"])(D,{type:"text",class:"p-inputtext-sm",placeholder:"Small"}),Object(l["o"])(D,{type:"text",placeholder:"Normal"}),Object(l["o"])(D,{type:"text",class:"p-inputtext-lg",placeholder:"Large"})])])]),Object(l["o"])(H)])}var z=Object(l["k"])("h5",null,"Import via Module",-1),A=Object(l["k"])("code",null,"\nimport InputText from 'primevue/inputtext';\n\n",-1),D=[A],H=Object(l["k"])("h5",null,"Import via CDN",-1),N=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n\n',-1),P=[N],F=Object(l["k"])("h5",null,"Getting Started",-1),_=Object(l["k"])("p",null,"A model can be bound using the standard v-model directive.",-1),B=Object(l["k"])("code",null,'\n<InputText type="text" v-model="value" />\n\n',-1),E=[B],M=Object(l["k"])("h5",null,"Float Label",-1),R=Object(l["k"])("p",null,[Object(l["n"])("A floating label is implemented by wrapping the input and the label inside a container having "),Object(l["k"])("i",null,".p-float-label"),Object(l["n"])(" style class.")],-1),Z=Object(l["k"])("code",null,'\n<span class="p-float-label">\n\t<InputText id="username" type="text" v-model="value" />\n\t<label for="username">Username</label>\n</span>\n\n',-1),C=[Z],J=Object(l["k"])("h5",null,"Icons",-1),G=Object(l["k"])("p",null,[Object(l["n"])("An icon can be integrated within an input field by wrapping the input and the icon with an element having "),Object(l["k"])("i",null,"p-input-icon-right"),Object(l["n"])(" and "),Object(l["k"])("i",null,"p-input-icon-left"),Object(l["n"])(" classes depending on the icon location.")],-1),K=Object(l["k"])("code",null,'\n<span class="p-input-icon-left">\n    <i class="pi pi-search" />\n    <InputText type="text" v-model="value1" placeholder="Search" />\n</span>\n\n<span class="p-input-icon-right">\n    <InputText type="text" v-model="value2" />\n    <i class="pi pi-spin pi-spinner" />\n</span>\n\n<span class="p-input-icon-left p-input-icon-right">\n    <i class="pi pi-search" />\n    <InputText type="text" v-model="value3" />\n    <i class="pi pi-spin pi-spinner" />\n</span>\n\n',-1),Q=[K],q=Object(l["k"])("h5",null,"Sizes",-1),W=Object(l["n"])("2 more sizes are available in addition to a regular input, for a smaller input add "),X=Object(l["k"])("i",null,"p-inputtext-sm",-1),Y=Object(l["n"])(" and for a larger one, use "),$=Object(l["k"])("i",null,"p-inputtext-lg",-1),ee=Object(l["n"])(". Note that these classes are mainly be used to change the size of a particular field, for global scaling see the "),ne=Object(l["n"])("theming"),te=Object(l["n"])(" page."),le=Object(l["k"])("code",null,'\n<InputText type="text" class="p-inputtext-sm" placeholder="Small" />\n<InputText type="text" placeholder="Normal" />\n<InputText type="text" class="p-inputtext-lg"  placeholder="Large" />\n\n',-1),ae=[le],se=Object(l["k"])("p",null,"Instead of repeating the scale classes for each input, sizing can also be applied to a group by adding the class to a container element so that descendant inputs share the same style easier.",-1),ie=Object(l["k"])("code",null,'\n<div class="p-inputtext-sm">\n    <InputText />\n    <InputNumber />\n    <InputMask />\n</div>\n\n',-1),ue=[ie],pe=Object(l["k"])("h5",null,"Outlined vs Filled",-1),ce=Object(l["k"])("p",null,[Object(l["n"])("Input fields come in two styles, default is "),Object(l["k"])("i",null,"outlined"),Object(l["n"])(" with borders around the field whereas "),Object(l["k"])("i",null,"filled"),Object(l["n"])(" alternative adds a background color to the field. Applying "),Object(l["k"])("i",null,"p-input-filled"),Object(l["n"])(" to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as document body or the application element to apply the style class.")],-1),re=Object(l["k"])("code",null,'\n<div class="p-input-filled">\n    <InputText type="text" />\n    <InputText type="text" />\n    <InputText type="text" />\n</div>\n\n',-1),oe=[re],de=Object(l["k"])("h5",null,"Properties",-1),be=Object(l["k"])("p",null,"InputText passes any valid attribute to the underlying input element, additional attribute is the following.",-1),me=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"modelValue"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Value of the component.")])])])],-1),he=Object(l["k"])("h5",null,"Events",-1),je=Object(l["k"])("p",null,"Any valid event such as focus, blur and input are passed to the underlying input element.",-1),ve=Object(l["k"])("h5",null,"Styling",-1),Oe=Object(l["n"])("Following is the list of structural style classes, for theming classes visit "),fe=Object(l["n"])("theming"),xe=Object(l["n"])(" page."),ke=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Element")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputtext"),Object(l["k"])("td",null,"Input element")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputtext-sm"),Object(l["k"])("td",null,"Smaller input element")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputtext-lg"),Object(l["k"])("td",null,"Larger input element")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputtext-filled"),Object(l["k"])("td",null,"Filled input style.")])])])],-1),ye=Object(l["k"])("h5",null,"Dependencies",-1),ge=Object(l["k"])("p",null,"None.",-1);function Ie(e,n,t,a,s,i){var u=Object(l["P"])("router-link"),p=Object(l["P"])("AppDoc"),c=Object(l["Q"])("code");return Object(l["H"])(),Object(l["h"])(p,{name:"InputTextDemo",sources:s.sources,github:"inputtext/InputTextDemo.vue"},{default:Object(l["Z"])((function(){return[z,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,D)),[[c,void 0,void 0,{script:!0}]]),H,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,P)),[[c]]),F,_,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,E)),[[c]]),M,R,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,C)),[[c]]),J,G,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,Q)),[[c]]),q,Object(l["k"])("p",null,[W,X,Y,$,ee,Object(l["o"])(u,{to:"/theming"},{default:Object(l["Z"])((function(){return[ne]})),_:1}),te]),Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,ae)),[[c]]),se,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,ue)),[[c]]),pe,ce,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,oe)),[[c]]),de,be,me,he,je,ve,Object(l["k"])("p",null,[Oe,Object(l["o"])(u,{to:"/theming"},{default:Object(l["Z"])((function(){return[fe]})),_:1}),xe]),ke,ye,ge]})),_:1},8,["sources"])}var Te={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <InputText type="text" v-model="value1" />\n        <span :style="{marginLeft: \'.5em\'}">{{value1}}</span>\n\n        <h5>Floating Label</h5>\n        <span class="p-float-label">\n            <InputText id="username" type="text" v-model="value2" />\n            <label for="username">Username</label>\n        </span>\n\n        <h5>Left Icon</h5>\n        <span class="p-input-icon-left">\n            <i class="pi pi-search" />\n            <InputText type="text" v-model="value3" placeholder="Search" />\n        </span>\n\n        <h5>Right Icon</h5>\n        <span class="p-input-icon-right">\n            <i class="pi pi-spin pi-spinner" />\n            <InputText type="text" v-model="value4" />\n        </span>\n\n        <h5>Help Text</h5>\n        <div class="field">\n            <label for="username1">Username</label>\n            <InputText id="username1" type="username" aria-describedby="username1-help" />\n            <small id="username1-help">Enter your username to reset your password.</small>\n        </div>\n\n        <h5>Invalid</h5>\n        <div class="field">\n            <label for="username2">Username</label>\n            <InputText id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />\n            <small id="username2-help" class="p-error">Username is not available.</small>\n        </div>\n\n        <h5>Disabled</h5>\n        <InputText type="text" v-model="value5" disabled />\n\n        <h5>Sizes</h5>\n        <div class="sizes">\n            <InputText type="text" class="p-inputtext-sm" placeholder="Small" />\n            <InputText type="text" placeholder="Normal" />\n            <InputText type="text" class="p-inputtext-lg"  placeholder="Large" />\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            value1: null,\n            value2: null,\n            value3: null,\n            value4: null,\n            value5: \'PrimeVue\'\n        }\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.sizes {\n    .p-inputtext {\n        display: block;\n        margin-bottom: .5rem;\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n}\n\n.field * {\n    display: block;\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <InputText type="text" v-model="value1" />\n        <span :style="{marginLeft: \'.5em\'}">{{value1}}</span>\n\n        <h5>Floating Label</h5>\n        <span class="p-float-label">\n            <InputText id="username" type="text" v-model="value2" />\n            <label for="username">Username</label>\n        </span>\n\n        <h5>Left Icon</h5>\n        <span class="p-input-icon-left">\n            <i class="pi pi-search" />\n            <InputText type="text" v-model="value3" placeholder="Search" />\n        </span>\n\n        <h5>Right Icon</h5>\n        <span class="p-input-icon-right">\n            <i class="pi pi-spin pi-spinner" />\n            <InputText type="text" v-model="value4" />\n        </span>\n\n        <h5>Help Text</h5>\n        <div class="field">\n            <label for="username1">Username</label>\n            <InputText id="username1" type="username" aria-describedby="username1-help" />\n            <small id="username1-help">Enter your username to reset your password.</small>\n        </div>\n\n        <h5>Invalid</h5>\n        <div class="field">\n            <label for="username2">Username</label>\n            <InputText id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />\n            <small id="username2-help" class="p-error">Username is not available.</small>\n        </div>\n\n        <h5>Disabled</h5>\n        <InputText type="text" v-model="value5" disabled />\n\n        <h5>Sizes</h5>\n        <div class="sizes">\n            <InputText type="text" class="p-inputtext-sm" placeholder="Small" />\n            <InputText type="text" placeholder="Normal" />\n            <InputText type="text" class="p-inputtext-lg"  placeholder="Large" />\n        </div>\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const value1 = ref();\n        const value2 = ref();\n        const value3 = ref();\n        const value4 = ref();\n        const value5 = ref(\'PrimeVue\');\n\n        return { value1, value2, value3, value4, value5 }\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.sizes {\n    .p-inputtext {\n        display: block;\n        margin-bottom: .5rem;\n\n        &:last-child {\n            margin-bottom: 0;\n        }\n    }\n}\n\n.field * {\n    display: block;\n}\n</style>'},"browser-source":{tabName:"Browser Source",content:'<div id="app">\n            <div class="card">\n                <h5>Basic</h5>\n                <p-inputtext type="text" v-model="value1"></p-inputtext>\n                <span :style="{marginLeft: \'.5em\'}">{{value1}}</span>\n\n                <h5>Floating Label</h5>\n                <span class="p-float-label">\n                    <p-inputtext id="username" type="text" v-model="value2"></p-inputtext>\n                    <label for="username">Username</label>\n                </span>\n\n                <h5>Left Icon</h5>\n                <span class="p-input-icon-left">\n                    <i class="pi pi-search"></i>\n                    <p-inputtext type="text" v-model="value3" placeholder="Search"></p-inputtext>\n                </span>\n\n                <h5>Right Icon</h5>\n                <span class="p-input-icon-right">\n                    <i class="pi pi-spin pi-spinner"></i>\n                    <p-inputtext type="text" v-model="value4"></p-inputtext>\n                </span>\n\n                <h5>Help Text</h5>\n                <div class="field">\n                    <label for="username1">Username</label>\n                    <p-inputtext id="username1" type="username" aria-describedby="username1-help"></p-inputtext>\n                    <small id="username1-help">Enter your username to reset your password.</small>\n                </div>\n\n                <h5>Invalid</h5>\n                <div class="field">\n                    <label for="username2">Username</label>\n                    <p-inputtext id="username2" type="username" aria-describedby="username2-help" class="p-invalid"></p-inputtext>\n                    <small id="username2-help" class="p-error">Username is not available.</small>\n                </div>\n\n                <h5>Disabled</h5>\n                <p-inputtext type="text" v-model="value5" disabled></p-inputtext>\n\n                <h5>Sizes</h5>\n                <div class="sizes">\n                    <p-inputtext type="text" class="p-inputtext-sm" placeholder="Small"></p-inputtext>\n                    <p-inputtext type="text" placeholder="Normal"></p-inputtext>\n                    <p-inputtext type="text" class="p-inputtext-lg"  placeholder="Large"></p-inputtext>\n                </div>\n            </div>\n        </div>\n\n        <script type="module">\n            const { createApp, ref } = Vue;\n\n            const App = {\n                setup() {\n                    const value1 = ref();\n                    const value2 = ref();\n                    const value3 = ref();\n                    const value4 = ref();\n                    const value5 = ref(\'PrimeVue\');\n\n                    return { value1, value2, value3, value4, value5 }\n                },\n                components: {\n                    "p-inputtext": primevue.inputtext\n                }\n            };\n\n            createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n        <style>\n            .sizes .p-inputtext {\n                display: block;\n                margin-bottom: .5rem;\n            }\n\n            .sizes:last-child {\n                margin-bottom: 0;\n            }\n\n            .field * {\n                display: block;\n            }\n        </style>'}}}}},we=t("6b0d"),Ue=t.n(we);const Ve=Ue()(Te,[["render",Ie]]);var Se=Ve,Le={data:function(){return{value1:null,value2:null,value3:null,value4:null,value5:"PrimeVue"}},components:{InputTextDoc:Se}};t("ad11");const ze=Ue()(Le,[["render",L],["__scopeId","data-v-09b7217c"]]);n["default"]=ze},e9bf:function(e,n,t){var l=t("24fb");n=l(!1),n.push([e.i,".sizes .p-inputtext[data-v-09b7217c]{display:block;margin-bottom:.5rem}.sizes .p-inputtext[data-v-09b7217c]:last-child{margin-bottom:0}.field *[data-v-09b7217c]{display:block}",""]),e.exports=n}}]);