(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db2921a"],{e347:function(t,n,e){t.exports=e.p+"img/logo.d32bce0e.svg"},e77e:function(t,n,e){"use strict";e.r(n);var i=e("7a23"),l=e("e347"),p=e.n(l),c={class:"content-section introduction"},a=Object(i["k"])("div",{class:"feature-intro"},[Object(i["k"])("h1",null,"Menubar"),Object(i["k"])("p",null,"Menubar is a horizontal menu component.")],-1),o={class:"content-section implementation"},r={class:"card"},b=Object(i["k"])("img",{alt:"logo",src:p.a,height:"40",class:"mr-2"},null,-1);function s(t,n,e,l,p,s){var u=Object(i["P"])("AppDemoActions"),m=Object(i["P"])("InputText"),f=Object(i["P"])("Menubar"),d=Object(i["P"])("MenubarDoc");return Object(i["H"])(),Object(i["j"])("div",null,[Object(i["k"])("div",c,[a,Object(i["o"])(u)]),Object(i["k"])("div",o,[Object(i["k"])("div",r,[Object(i["o"])(f,{model:p.items},{start:Object(i["Z"])((function(){return[b]})),end:Object(i["Z"])((function(){return[Object(i["o"])(m,{placeholder:"Search",type:"text"})]})),_:1},8,["model"])])]),Object(i["o"])(d)])}var u=Object(i["k"])("h5",null,"Import via Module",-1),m=Object(i["k"])("code",null,"\nimport Menubar from 'primevue/menubar';\n\n",-1),f=[m],d=Object(i["k"])("h5",null,"Import via CDN",-1),w=Object(i["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/menubar/menubar.min.js"><\/script>\n\n',-1),j=[w],O=Object(i["k"])("h5",null,"MenuModel",-1),k=Object(i["n"])("Menubar uses the common MenuModel API to define the items, visit "),h=Object(i["n"])("MenuModel API"),v=Object(i["n"])(" for details."),g=Object(i["k"])("h5",null,"Getting Started",-1),x=Object(i["k"])("p",null,"Menubar requires a collection of menuitems as its model.",-1),y=Object(i["k"])("code",null,'\n<Menubar :model="items" />\n\n',-1),M=[y],A=Object(i["k"])("code",null,"\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                   label:'File',\n                   icon:'pi pi-fw pi-file',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-plus',\n                         items:[\n                            {\n                               label:'Bookmark',\n                               icon:'pi pi-fw pi-bookmark'\n                            },\n                            {\n                               label:'Video',\n                               icon:'pi pi-fw pi-video'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-trash'\n                      },\n                      {\n                         separator:true\n                      },\n                      {\n                         label:'Export',\n                         icon:'pi pi-fw pi-external-link'\n                      }\n                   ]\n                },\n                {\n                   label:'Edit',\n                   icon:'pi pi-fw pi-pencil',\n                   items:[\n                      {\n                         label:'Left',\n                         icon:'pi pi-fw pi-align-left'\n                      },\n                      {\n                         label:'Right',\n                         icon:'pi pi-fw pi-align-right'\n                      },\n                      {\n                         label:'Center',\n                         icon:'pi pi-fw pi-align-center'\n                      },\n                      {\n                         label:'Justify',\n                         icon:'pi pi-fw pi-align-justify'\n                      },\n\n                   ]\n                },\n                {\n                   label:'Users',\n                   icon:'pi pi-fw pi-user',\n                   items:[\n                      {\n                         label:'New',\n                         icon:'pi pi-fw pi-user-plus',\n\n                      },\n                      {\n                         label:'Delete',\n                         icon:'pi pi-fw pi-user-minus',\n\n                      },\n                      {\n                         label:'Search',\n                         icon:'pi pi-fw pi-users',\n                         items:[\n                            {\n                               label:'Filter',\n                               icon:'pi pi-fw pi-filter',\n                               items:[\n                                  {\n                                     label:'Print',\n                                     icon:'pi pi-fw pi-print'\n                                  }\n                               ]\n                            },\n                            {\n                               icon:'pi pi-fw pi-bars',\n                               label:'List'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   label:'Events',\n                   icon:'pi pi-fw pi-calendar',\n                   items:[\n                      {\n                         label:'Edit',\n                         icon:'pi pi-fw pi-pencil',\n                         items:[\n                            {\n                               label:'Save',\n                               icon:'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                               label:'Delete',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            },\n\n                         ]\n                      },\n                      {\n                         label:'Archieve',\n                         icon:'pi pi-fw pi-calendar-times',\n                         items:[\n                            {\n                               label:'Remove',\n                               icon:'pi pi-fw pi-calendar-minus'\n                            }\n                         ]\n                      }\n                   ]\n                },\n                {\n                   label:'Quit',\n                   icon:'pi pi-fw pi-power-off'\n                }\n             ]\n        }\n    }\n}\n\n",-1),D=[A],E=Object(i["k"])("h5",null,"Templating",-1),S=Object(i["k"])("p",null,[Object(i["n"])('Two slots named "start" and "end" are provided to embed content before or after the menubar. In additon Menubar, offers item customization with the '),Object(i["k"])("i",null,"item"),Object(i["n"])(" template that receives the menuitem instance from the model as a parameter.")],-1),N=Object(i["k"])("code",null,[Object(i["k"])("template",null,[Object(i["n"])('\n<Menubar :model="items">\n    <template #start>\n        Before\n    </template>\n    <template #item="{item}">\n        <a :href="item.url">{{item.label}}</a>\n    </template>\n    <template #end>\n        After\n    </template>\n</Menubar>\n')]),Object(i["n"])("\n")],-1),P=[N],R=Object(i["k"])("p",null,[Object(i["k"])("i",null,"router-link"),Object(i["n"])(" with route configuration can also be used within templating for further customization.")],-1),F=Object(i["k"])("code",null,[Object(i["k"])("template",null,[Object(i["n"])('\n<Menubar :model="items">\n    <template #item="{item}">\n        <router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}">\n            <a :href="href" @click="navigate" :class="{\'active-link\': isActive, \'active-link-exact\': isExactActive}">{{route.fullPath}}</a>\n        </router-link>\n    </template>\n</Menubar>\n')]),Object(i["n"])("\n")],-1),I=[F],L=Object(i["k"])("h5",null,"Properties",-1),H=Object(i["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),C=Object(i["k"])("div",{class:"doc-tablewrapper"},[Object(i["k"])("table",{class:"doc-table"},[Object(i["k"])("thead",null,[Object(i["k"])("tr",null,[Object(i["k"])("th",null,"Name"),Object(i["k"])("th",null,"Type"),Object(i["k"])("th",null,"Default"),Object(i["k"])("th",null,"Description")])]),Object(i["k"])("tbody",null,[Object(i["k"])("tr",null,[Object(i["k"])("td",null,"model"),Object(i["k"])("td",null,"array"),Object(i["k"])("td",null,"null"),Object(i["k"])("td",null,"An array of menuitems.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"exact"),Object(i["k"])("td",null,"boolean"),Object(i["k"])("td",null,"true"),Object(i["k"])("td",null,"Whether to apply 'router-link-active-exact' class if route exactly matches the item path.")])])])],-1),V=Object(i["k"])("h5",null,"Slots",-1),B=Object(i["k"])("div",{class:"doc-tablewrapper"},[Object(i["k"])("table",{class:"doc-table"},[Object(i["k"])("thead",null,[Object(i["k"])("tr",null,[Object(i["k"])("th",null,"Name"),Object(i["k"])("th",null,"Parameters")])]),Object(i["k"])("tbody",null,[Object(i["k"])("tr",null,[Object(i["k"])("td",null,"start"),Object(i["k"])("td",null,"-")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"end"),Object(i["k"])("td",null,"-")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"item"),Object(i["k"])("td",null,"item: Menuitem instance")])])])],-1),J=Object(i["k"])("h5",null,"Styling",-1),Q=Object(i["n"])("Following is the list of structural style classes, for theming classes visit "),T=Object(i["n"])("theming"),U=Object(i["n"])(" page."),Z=Object(i["k"])("div",{class:"doc-tablewrapper"},[Object(i["k"])("table",{class:"doc-table"},[Object(i["k"])("thead",null,[Object(i["k"])("tr",null,[Object(i["k"])("th",null,"Name"),Object(i["k"])("th",null,"Element")])]),Object(i["k"])("tbody",null,[Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-menubar"),Object(i["k"])("td",null,"Container element.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-menubar-root-list"),Object(i["k"])("td",null,"Root list element.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-submenu-list"),Object(i["k"])("td",null,"Submenu list element.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-menuitem"),Object(i["k"])("td",null,"Menuitem element.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-menuitem-text"),Object(i["k"])("td",null,"Label of a menuitem.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-menuitem-icon"),Object(i["k"])("td",null,"Icon of a menuitem.")]),Object(i["k"])("tr",null,[Object(i["k"])("td",null,"p-submenu-icon"),Object(i["k"])("td",null,"Arrow icon of a submenu.")])])])],-1),_=Object(i["k"])("h5",null,"Dependencies",-1),z=Object(i["k"])("p",null,"None.",-1);function W(t,n,e,l,p,c){var a=Object(i["P"])("router-link"),o=Object(i["P"])("AppDoc"),r=Object(i["Q"])("code");return Object(i["H"])(),Object(i["h"])(o,{name:"MenubarDemo",sources:p.sources,github:"menubar/MenubarDemo.vue"},{default:Object(i["Z"])((function(){return[u,Object(i["ab"])((Object(i["H"])(),Object(i["j"])("pre",null,f)),[[r,void 0,void 0,{script:!0}]]),d,Object(i["ab"])((Object(i["H"])(),Object(i["j"])("pre",null,j)),[[r]]),O,Object(i["k"])("p",null,[k,Object(i["o"])(a,{to:"/menumodel"},{default:Object(i["Z"])((function(){return[h]})),_:1}),v]),g,x,Object(i["ab"])((Object(i["H"])(),Object(i["j"])("pre",null,M)),[[r]]),Object(i["ab"])((Object(i["H"])(),Object(i["j"])("pre",null,D)),[[r,void 0,void 0,{script:!0}]]),E,S,Object(i["ab"])((Object(i["H"])(),Object(i["j"])("pre",null,P)),[[r]]),R,Object(i["ab"])((Object(i["H"])(),Object(i["j"])("pre",null,I)),[[r]]),L,H,C,V,B,J,Object(i["k"])("p",null,[Q,Object(i["o"])(a,{to:"/theming"},{default:Object(i["Z"])((function(){return[T]})),_:1}),U]),Z,_,z]})),_:1},8,["sources"])}var q={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n\t\t<template>\n\t\t\t<div>\n\t\t\t\t<Menubar :model=\"items\">\n\t\t\t\t\t<template #start>\n\t\t\t\t\t\t<img alt=\"logo\" src=\"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\" height=\"40\" class=\"mr-2\">\n\t\t\t\t\t</template>\n\t\t\t\t\t<template #end>\n\t\t\t\t\t\t<InputText placeholder=\"Search\" type=\"text\" />\n\t\t\t\t\t</template>\n\t\t\t\t</Menubar>\n\t\t\t</div>\n\t\t</template>\n\n\t\t<script>\n\t\texport default {\n\t\t\tdata() {\n\t\t\t\treturn {\n\t\t\t\t\titems: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlabel:'File',\n\t\t\t\t\t\t\ticon:'pi pi-fw pi-file',\n\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'New',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-plus',\n\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Bookmark',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-bookmark'\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Video',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-video'\n\t\t\t\t\t\t\t\t\t\t},\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-trash'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tseparator:true\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Export',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-external-link'\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlabel:'Edit',\n\t\t\t\t\t\t\ticon:'pi pi-fw pi-pencil',\n\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Left',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-left'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Right',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-right'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Center',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-center'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Justify',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-justify'\n\t\t\t\t\t\t\t\t},\n\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlabel:'Users',\n\t\t\t\t\t\t\ticon:'pi pi-fw pi-user',\n\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'New',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-user-plus',\n\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-user-minus',\n\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Search',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-users',\n\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Filter',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-filter',\n\t\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tlabel:'Print',\n\t\t\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-print'\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-bars',\n\t\t\t\t\t\t\t\t\t\tlabel:'List'\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlabel:'Events',\n\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar',\n\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Edit',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-pencil',\n\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Save',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-plus'\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-minus'\n\t\t\t\t\t\t\t\t\t\t},\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tlabel:'Archieve',\n\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-times',\n\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Remove',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-minus'\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlabel:'Quit',\n\t\t\t\t\t\t\ticon:'pi pi-fw pi-power-off'\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t<\\/script>\n\t\t"},"composition-api":{tabName:"Composition API Source",content:"\n\t\t<template>\n\t\t\t<div>\n\t\t\t\t<Menubar :model=\"items\">\n\t\t\t\t\t<template #start>\n\t\t\t\t\t\t<img alt=\"logo\" src=\"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\" height=\"40\" class=\"mr-2\">\n\t\t\t\t\t</template>\n\t\t\t\t\t<template #end>\n\t\t\t\t\t\t<InputText placeholder=\"Search\" type=\"text\" />\n\t\t\t\t\t</template>\n\t\t\t\t</Menubar>\n\t\t\t</div>\n\t\t</template>\n\n\t\t<script>\n\t\timport { ref } from 'vue';\n\n\t\texport default {\n\t\t\tsetup() {\n\t\t\t\tconst items = ref([\n\t\t\t\t\t{\n\t\t\t\t\tlabel:'File',\n\t\t\t\t\ticon:'pi pi-fw pi-file',\n\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'New',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-plus',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Bookmark',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-bookmark'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Video',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-video'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-trash'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tseparator:true\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Export',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-external-link'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Edit',\n\t\t\t\t\t\ticon:'pi pi-fw pi-pencil',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Left',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-left'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Right',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-right'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Center',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-center'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Justify',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-justify'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Users',\n\t\t\t\t\t\ticon:'pi pi-fw pi-user',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'New',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-user-plus',\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-user-minus',\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Search',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-users',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Filter',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-filter',\n\t\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tlabel:'Print',\n\t\t\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-print'\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-bars',\n\t\t\t\t\t\t\t\t\t\tlabel:'List'\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Events',\n\t\t\t\t\t\ticon:'pi pi-fw pi-calendar',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Edit',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-pencil',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Save',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-plus'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-minus'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Archieve',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-times',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Remove',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-minus'\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Quit',\n\t\t\t\t\t\ticon:'pi pi-fw pi-power-off'\n\t\t\t\t\t}\n\t\t\t\t]);\n\n\t\t\t\treturn { items }\n\t\t\t}\n\t\t}\n\t\t<\\/script>\n\t\t"},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>\n\t\t<script src="https://unpkg.com/primevue@^3/menubar/menubar.min.js"><\\/script>',content:"<div id=\"app\">\n\t\t\t<p-menubar :model=\"items\">\n\t\t\t\t<template #start>\n\t\t\t\t\t<img alt=\"logo\" src=\"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png\" height=\"40\" class=\"mr-2\">\n\t\t\t\t</template>\n\t\t\t\t<template #end>\n\t\t\t\t\t<p-inputtext placeholder=\"Search\" type=\"text\"></p-inputtext>\n\t\t\t\t</template>\n\t\t\t</p-menubar>\n\t\t</div>\n\n\t\t<script type=\"module\">\n\t\tconst { createApp, ref } = Vue;\n\n\t\tconst App = {\n\t\t\tsetup() {\n\t\t\t\tconst items = ref([\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'File',\n\t\t\t\t\t\ticon:'pi pi-fw pi-file',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'New',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-plus',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Bookmark',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-bookmark'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Video',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-video'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-trash'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tseparator:true\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Export',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-external-link'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Edit',\n\t\t\t\t\t\ticon:'pi pi-fw pi-pencil',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Left',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-left'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Right',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-right'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Center',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-center'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Justify',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-align-justify'\n\t\t\t\t\t\t\t},\n\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Users',\n\t\t\t\t\t\ticon:'pi pi-fw pi-user',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'New',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-user-plus',\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-user-minus',\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Search',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-users',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Filter',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-filter',\n\t\t\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t\t\tlabel:'Print',\n\t\t\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-print'\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-bars',\n\t\t\t\t\t\t\t\t\t\tlabel:'List'\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Events',\n\t\t\t\t\t\ticon:'pi pi-fw pi-calendar',\n\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Edit',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-pencil',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Save',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-plus'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Delete',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-minus'\n\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tlabel:'Archieve',\n\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-times',\n\t\t\t\t\t\t\t\titems:[\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\tlabel:'Remove',\n\t\t\t\t\t\t\t\t\t\ticon:'pi pi-fw pi-calendar-minus'\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tlabel:'Quit',\n\t\t\t\t\t\ticon:'pi pi-fw pi-power-off'\n\t\t\t\t\t}\n\t\t\t\t]);\n\n\t\t\t\treturn { items }\n\t\t\t},\n\t\t\tcomponents: {\n\t\t\t\t\"p-menubar\": primevue.menubar,\n\t\t\t\t\"p-inputtext\": primevue.inputtext\n\t\t\t}\n\t\t};\n\n\t\tconst routes = [{ path: \"/\", component: App }];\n\n        const router = VueRouter.createRouter({\n            history: VueRouter.createWebHashHistory(),\n            routes\n        });\n\n\t\tcreateApp(App)\n\t\t\t.use(router)\n            .use(primevue.config.default)\n            .mount(\"#app\");\n\t\t<\\/script>\n\t\t"}}}}},G=e("6b0d"),K=e.n(G);const X=K()(q,[["render",W]]);var Y=X,$={data:function(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}},components:{MenubarDoc:Y}};const tt=K()($,[["render",s]]);n["default"]=tt}}]);