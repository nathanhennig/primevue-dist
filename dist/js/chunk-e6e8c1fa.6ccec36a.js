(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6e8c1fa"],{"4d47":function(e,n,t){var l=t("f05d");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var o=t("499e").default;o("7a13d82a",l,!0,{sourceMap:!1,shadowMode:!1})},"7eaf":function(e,n,t){"use strict";t.r(n);var l=t("7a23"),o=function(e){return Object(l["K"])("data-v-1434ab00"),e=e(),Object(l["I"])(),e},i={class:"content-section introduction"},a=o((function(){return Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,[Object(l["n"])("TreeTable "),Object(l["k"])("span",null,"Scroll")]),Object(l["k"])("p",null,"Data scrolling is available horizontally, vertically or both with support for frozen columns.")],-1)})),r={class:"content-section implementation"},d={class:"card"},c=o((function(){return Object(l["k"])("h5",null,"Vertical",-1)})),s={class:"card"},p=o((function(){return Object(l["k"])("h5",null,"Flexible Scroll",-1)})),u=o((function(){return Object(l["k"])("p",null,"Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.",-1)})),h={class:"card"},m=o((function(){return Object(l["k"])("h5",null,"Horizontal and Vertical with Footer",-1)})),b={class:"card"},f=o((function(){return Object(l["k"])("h5",null,"Frozen Columns",-1)}));function y(e,n,t,o,y,v){var x=Object(l["P"])("AppDemoActions"),g=Object(l["P"])("Column"),w=Object(l["P"])("TreeTable"),O=Object(l["P"])("Button"),z=Object(l["P"])("Dialog"),C=Object(l["P"])("ToggleButton"),j=Object(l["P"])("AppDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",i,[a,Object(l["o"])(x)]),Object(l["k"])("div",r,[Object(l["k"])("div",d,[c,Object(l["o"])(w,{value:y.nodes,style:{"margin-bottom":"2rem"},scrollable:!0,scrollHeight:"400px"},{default:Object(l["Z"])((function(){return[Object(l["o"])(g,{field:"name",header:"Name",expander:!0,style:{"min-width":"200px"}}),Object(l["o"])(g,{field:"size",header:"Size",style:{"min-width":"200px"}}),Object(l["o"])(g,{field:"type",header:"Type",style:{"min-width":"200px"}})]})),_:1},8,["value"])]),Object(l["k"])("div",s,[p,u,Object(l["o"])(O,{label:"Show",icon:"pi pi-external-link",onClick:v.openDialog},null,8,["onClick"])]),Object(l["o"])(z,{header:"Flex Scroll",visible:y.dialogVisible,"onUpdate:visible":n[0]||(n[0]=function(e){return y.dialogVisible=e}),style:{width:"75vw"},maximizable:!0,modal:!0,contentStyle:{height:"300px"}},{footer:Object(l["Z"])((function(){return[Object(l["o"])(O,{label:"Ok",icon:"pi pi-check",onClick:v.closeDialog},null,8,["onClick"])]})),default:Object(l["Z"])((function(){return[Object(l["o"])(w,{value:y.nodes,scrollable:!0,scrollHeight:"flex"},{default:Object(l["Z"])((function(){return[Object(l["o"])(g,{field:"name",header:"Name",expander:!0,style:{"min-width":"200px"}}),Object(l["o"])(g,{field:"size",header:"Size",style:{"min-width":"200px"}}),Object(l["o"])(g,{field:"type",header:"Type",style:{"min-width":"200px"}})]})),_:1},8,["value"])]})),_:1},8,["visible"]),Object(l["k"])("div",h,[m,Object(l["o"])(w,{value:y.nodes,scrollable:!0,scrollHeight:"400px",scrollDirection:"both"},{default:Object(l["Z"])((function(){return[Object(l["o"])(g,{field:"name",header:"Name",footer:"Name",expander:!0,style:{width:"300px"}}),Object(l["o"])(g,{header:"Key",footer:"Key",style:{width:"300px"}},{body:Object(l["Z"])((function(e){var n=e.node;return[Object(l["n"])(Object(l["T"])(n.key),1)]})),_:1}),Object(l["o"])(g,{field:"size",header:"Size",footer:"Size",style:{width:"300px"}}),Object(l["o"])(g,{field:"type",header:"Type",footer:"Type",style:{width:"300px"}}),Object(l["o"])(g,{header:"Children",footer:"Children",style:{width:"300px"}},{body:Object(l["Z"])((function(e){var n=e.node;return[Object(l["n"])(Object(l["T"])(n.children?n.children.length:0),1)]})),_:1}),Object(l["o"])(g,{header:"Options",footer:"Options",style:{width:"300px"}},{body:Object(l["Z"])((function(){return[Object(l["o"])(O,{type:"Button",icon:"pi pi-check",label:"Edit",class:"mr-2"}),Object(l["o"])(O,{type:"Button",icon:"pi pi-check",label:"Delete",class:"p-button-warning"})]})),_:1})]})),_:1},8,["value"])]),Object(l["k"])("div",b,[f,Object(l["o"])(C,{modelValue:y.optionsFrozen,"onUpdate:modelValue":n[1]||(n[1]=function(e){return y.optionsFrozen=e}),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Unfreeze Options",offLabel:"Freeze Options",style:{width:"12rem"}},null,8,["modelValue"]),Object(l["o"])(w,{value:y.nodes,scrollable:!0,scrollHeight:"400px",scrollDirection:"both",class:"mt-3"},{default:Object(l["Z"])((function(){return[Object(l["o"])(g,{field:"name",header:"Name",expander:!0,style:{width:"300px"},frozen:""}),Object(l["o"])(g,{header:"Key",style:{width:"300px"}},{body:Object(l["Z"])((function(e){var n=e.node;return[Object(l["n"])(Object(l["T"])(n.key),1)]})),_:1}),Object(l["o"])(g,{field:"size",header:"Size",style:{width:"300px"}}),Object(l["o"])(g,{field:"type",header:"Type",style:{width:"300px"}}),Object(l["o"])(g,{header:"Children",style:{width:"300px"}},{body:Object(l["Z"])((function(e){var n=e.node;return[Object(l["n"])(Object(l["T"])(n.children?n.children.length:0),1)]})),_:1}),Object(l["o"])(g,{header:"Options",style:{width:"200px"},alignFrozen:"right",frozen:y.optionsFrozen},{body:Object(l["Z"])((function(){return[Object(l["o"])(O,{type:"Button",icon:"pi pi-check",label:"Edit Item",class:"mr-2",style:{width:"100%"}})]})),_:1},8,["frozen"])]})),_:1},8,["value"])])]),Object(l["o"])(j,{name:"TreeTableScrollDemo",sources:y.sources,service:["NodeService"],data:["treetablenodes"],github:"treetable/TreeTableSizeDemo.vue"},null,8,["sources"])])}var v=t("82f4"),x={data:function(){return{nodes:null,dialogVisible:!1,optionsFrozen:!1,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Vertical</h5>\n            <TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px">\n                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>\n                <Column field="size" header="Size" style="min-width:200px"></Column>\n                <Column field="type" header="Type" style="min-width:200px"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Flexible Scroll</h5>\n            <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.\n                Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>\n\n            <Button label="Show" icon="pi pi-external-link" @click="openDialog" />\n        </div>\n\n        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: \'75vw\'}" :maximizable="true" :modal="true" :contentStyle="{height: \'300px\'}">\n                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">\n                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>\n                <Column field="size" header="Size" style="min-width:200px"></Column>\n                <Column field="type" header="Type" style="min-width:200px"></Column>\n            </TreeTable>\n            <template #footer>\n                <Button label="Ok" icon="pi pi-check" @click="closeDialog" />\n            </template>\n        </Dialog>\n\n        <div class="card">\n            <h5>Horizontal and Vertical with Footer</h5>\n            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both">\n                <Column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></Column>\n                <Column header="Key" footer="Key" style="width:300px">\n                    <template #body="{node}">\n                        {{node.key}}\n                    </template>\n                </Column>\n                <Column field="size" header="Size" footer="Size" style="width:300px"></Column>\n                <Column field="type" header="Type" footer="Type" style="width:300px"></Column>\n                <Column header="Children" footer="Children" style="width:300px">\n                    <template #body="{node}">\n                        {{node.children ? node.children.length : 0}}\n                    </template>\n                </Column>\n                <Column header="Options" footer="Options" style="width:300px">\n                    <template #body>\n                        <Button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></Button>\n                        <Button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></Button>\n                    </template>\n                </Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Frozen Columns</h5>\n            <ToggleButton v-model="optionsFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />\n\n            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="mt-3">\n                <Column field="name" header="Name" :expander="true" style="width:300px" frozen></Column>\n                <Column header="Key" style="width:300px">\n                    <template #body="{node}">\n                        {{node.key}}\n                    </template>\n                </Column>\n                <Column field="size" header="Size" style="width:300px"></Column>\n                <Column field="type" header="Type" style="width:300px"></Column>\n                <Column header="Children" style="width:300px">\n                    <template #body="{node}">\n                        {{node.children ? node.children.length : 0}}\n                    </template>\n                </Column>\n                <Column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">\n                    <template #body>\n                        <Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></Button>\n                    </template>\n                </Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            dialogVisible: false,\n            optionsFrozen: false\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    },\n    methods: {\n        openDialog() {\n            this.dialogVisible = true;\n        },\n        closeDialog() {\n            this.dialogVisible = false;\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Vertical</h5>\n            <TreeTable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scrollHeight="400px">\n                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>\n                <Column field="size" header="Size" style="min-width:200px"></Column>\n                <Column field="type" header="Type" style="min-width:200px"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Flexible Scroll</h5>\n            <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.\n                Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>\n\n            <Button label="Show" icon="pi pi-external-link" @click="openDialog" />\n        </div>\n\n        <Dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: \'75vw\'}" :maximizable="true" :modal="true" :contentStyle="{height: \'300px\'}">\n                <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">\n                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>\n                <Column field="size" header="Size" style="min-width:200px"></Column>\n                <Column field="type" header="Type" style="min-width:200px"></Column>\n            </TreeTable>\n            <template #footer>\n                <Button label="Ok" icon="pi pi-check" @click="closeDialog" />\n            </template>\n        </Dialog>\n\n        <div class="card">\n            <h5>Horizontal and Vertical with Footer</h5>\n            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both">\n                <Column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></Column>\n                <Column header="Key" footer="Key" style="width:300px">\n                    <template #body="{node}">\n                        {{node.key}}\n                    </template>\n                </Column>\n                <Column field="size" header="Size" footer="Size" style="width:300px"></Column>\n                <Column field="type" header="Type" footer="Type" style="width:300px"></Column>\n                <Column header="Children" footer="Children" style="width:300px">\n                    <template #body="{node}">\n                        {{node.children ? node.children.length : 0}}\n                    </template>\n                </Column>\n                <Column header="Options" footer="Options" style="width:300px">\n                    <template #body>\n                        <Button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></Button>\n                        <Button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></Button>\n                    </template>\n                </Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Frozen Columns</h5>\n            <ToggleButton v-model="optionsFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Options" offLabel="Freeze Options" style="width: 12rem" />\n\n            <TreeTable :value="nodes" :scrollable="true" scrollHeight="400px" scrollDirection="both" class="mt-3">\n                <Column field="name" header="Name" :expander="true" style="width:300px" frozen></Column>\n                <Column header="Key" style="width:300px">\n                    <template #body="{node}">\n                        {{node.key}}\n                    </template>\n                </Column>\n                <Column field="size" header="Size" style="width:300px"></Column>\n                <Column field="type" header="Type" style="width:300px"></Column>\n                <Column header="Children" style="width:300px">\n                    <template #body="{node}">\n                        {{node.children ? node.children.length : 0}}\n                    </template>\n                </Column>\n                <Column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">\n                    <template #body>\n                        <Button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></Button>\n                    </template>\n                </Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n        })\n\n        const nodes = ref();\n        const nodeService = ref(new NodeService());\n        const dialogVisible = ref(false);\n        const optionsFrozen = ref(false);\n\n        const openDialog = () => {\n            dialogVisible.value = true;\n        };\n        const closeDialog = () => {\n            dialogVisible.value = false;\n        };\n\n        return { nodes, openDialog, closeDialog, dialogVisible, optionsFrozen }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/togglebutton/togglebutton.min.js"><\\/script>\n        <script src="./NodeService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Vertical</h5>\n                <p-treetable :value="nodes" style="margin-bottom: 2rem" :scrollable="true" scroll-height="400px">\n                    <p-column field="name" header="Name" :expander="true" style="min-width:200px"></p-column>\n                    <p-column field="size" header="Size" style="min-width:200px"></p-column>\n                    <p-column field="type" header="Type" style="min-width:200px"></p-column>\n                </p-treetable>\n            </div>\n\n            <div class="card">\n                <h5>Flexible Scroll</h5>\n                <p>Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table.\n                    Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.</p>\n\n                <p-button label="Show" icon="pi pi-external-link" @click="openDialog"></p-button>\n            </div>\n\n            <p-dialog header="Flex Scroll" v-model:visible="dialogVisible" :style="{width: \'75vw\'}" :maximizable="true" :modal="true" :content-style="{height: \'300px\'}">\n                    <p-treetable :value="nodes" :scrollable="true" scroll-height="flex">\n                    <p-column field="name" header="Name" :expander="true" style="min-width:200px"></p-column>\n                    <p-column field="size" header="Size" style="min-width:200px"></p-column>\n                    <p-column field="type" header="Type" style="min-width:200px"></p-column>\n                </p-treetable>\n                <template #footer>\n                    <p-button label="Ok" icon="pi pi-check" @click="closeDialog"></p-button>\n                </template>\n            </p-dialog>\n\n            <div class="card">\n                <h5>Horizontal and Vertical with Footer</h5>\n                <p-treetable :value="nodes" :scrollable="true" scroll-height="400px" scroll-direction="both">\n                    <p-column field="name" header="Name" footer="Name" :expander="true" style="width:300px"></p-column>\n                    <p-column header="Key" footer="Key" style="width:300px">\n                        <template #body="{node}">\n                            {{node.key}}\n                        </template>\n                    </p-column>\n                    <p-column field="size" header="Size" footer="Size" style="width:300px"></p-column>\n                    <p-column field="type" header="Type" footer="Type" style="width:300px"></p-column>\n                    <p-column header="Children" footer="Children" style="width:300px">\n                        <template #body="{node}">\n                            {{node.children ? node.children.length : 0}}\n                        </template>\n                    </p-column>\n                    <p-column header="Options" footer="Options" style="width:300px">\n                        <template #body>\n                            <p-button type="Button" icon="pi pi-check" label="Edit" class="mr-2"></p-button>\n                            <p-button type="Button" icon="pi pi-check" label="Delete" class="p-button-warning"></p-button>\n                        </template>\n                    </p-column>\n                </p-treetable>\n            </div>\n\n            <div class="card">\n                <h5>Frozen Columns</h5>\n                <p-togglebutton v-model="optionsFrozen" on-icon="pi pi-lock" off-icon="pi pi-lock-open" on-label="Unfreeze Options" off-label="Freeze Options" style="width: 12rem"></p-togglebutton>\n\n                <p-treetable :value="nodes" :scrollable="true" scroll-height="400px" scroll-direction="both" class="mt-3">\n                    <p-column field="name" header="Name" :expander="true" style="width:300px" frozen></p-column>\n                    <p-column header="Key" style="width:300px">\n                        <template #body="{node}">\n                            {{node.key}}\n                        </template>\n                    </p-column>\n                    <p-column field="size" header="Size" style="width:300px"></p-column>\n                    <p-column field="type" header="Type" style="width:300px"></p-column>\n                    <p-column header="Children" style="width:300px">\n                        <template #body="{node}">\n                            {{node.children ? node.children.length : 0}}\n                        </template>\n                    </p-column>\n                    <p-column header="Options" style="width:200px" alignFrozen="right" :frozen="optionsFrozen">\n                        <template #body>\n                            <p-button type="Button" icon="pi pi-check" label="Edit Item" class="mr-2" style="width:100%"></p-button>\n                        </template>\n                    </p-column>\n                </p-treetable>\n            </div>\n        </div>                    \n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n                })\n\n                const nodes = ref();\n                const nodeService = ref(new NodeService());\n                const dialogVisible = ref(false);\n                const optionsFrozen = ref(false);\n\n                const openDialog = () => {\n                    dialogVisible.value = true;\n                };\n                const closeDialog = () => {\n                    dialogVisible.value = false;\n                };\n\n                return { nodes, openDialog, closeDialog, dialogVisible, optionsFrozen }\n            },\n            components: {\n                "p-treetable": primevue.treetable,\n                "p-column": primevue.column,\n                "p-dialog": primevue.dialog,\n                "p-button": primevue.button,\n                "p-togglebutton": primevue.togglebutton\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},nodeService:null,created:function(){this.nodeService=new v["a"]},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))},methods:{openDialog:function(){this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1}}},g=(t("c1c4"),t("6b0d")),w=t.n(g);const O=w()(x,[["render",y],["__scopeId","data-v-1434ab00"]]);n["default"]=O},c1c4:function(e,n,t){"use strict";t("4d47")},f05d:function(e,n,t){var l=t("24fb");n=l(!1),n.push([e.i,"[data-v-1434ab00] .p-treetable-scrollable .p-frozen-column{font-weight:700}",""]),e.exports=n}}]);