(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b33be"],{2802:function(t,e,n){"use strict";n.r(e);var l=n("7a23"),i={class:"content-section introduction"},c=Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,"Splitter"),Object(l["k"])("p",null,"Splitter is utilized to separate and resize panels.")],-1),r={class:"content-section implementation"},a={class:"card"},s=Object(l["k"])("h5",null,"Horizontal",-1),p=Object(l["n"])(" Panel 1 "),u=Object(l["n"])(" Panel 2 "),o={class:"card"},b=Object(l["k"])("h5",null,"Vertical",-1),j=Object(l["n"])(" Panel 1 "),O=Object(l["n"])(" Panel 2 "),d={class:"card"},f=Object(l["k"])("h5",null,"Nested",-1),S=Object(l["n"])(" Panel 1 "),k=Object(l["n"])(" Panel 2 "),h=Object(l["n"])(" Panel 3 "),P=Object(l["n"])(" Panel 4 ");function m(t,e,n,m,g,y){var v=Object(l["P"])("AppDemoActions"),z=Object(l["P"])("SplitterPanel"),x=Object(l["P"])("Splitter"),w=Object(l["P"])("SplitterDoc");return Object(l["H"])(),Object(l["j"])("div",null,[Object(l["k"])("div",i,[c,Object(l["o"])(v)]),Object(l["k"])("div",r,[Object(l["k"])("div",a,[s,Object(l["o"])(x,{style:{height:"300px"},class:"mb-5"},{default:Object(l["Z"])((function(){return[Object(l["o"])(z,{class:"flex align-items-center justify-content-center"},{default:Object(l["Z"])((function(){return[p]})),_:1}),Object(l["o"])(z,{class:"flex align-items-center justify-content-center"},{default:Object(l["Z"])((function(){return[u]})),_:1})]})),_:1})]),Object(l["k"])("div",o,[b,Object(l["o"])(x,{style:{height:"300px"},layout:"vertical"},{default:Object(l["Z"])((function(){return[Object(l["o"])(z,{class:"flex align-items-center justify-content-center"},{default:Object(l["Z"])((function(){return[j]})),_:1}),Object(l["o"])(z,{class:"flex align-items-center justify-content-center"},{default:Object(l["Z"])((function(){return[O]})),_:1})]})),_:1})]),Object(l["k"])("div",d,[f,Object(l["o"])(x,{style:{height:"300px"}},{default:Object(l["Z"])((function(){return[Object(l["o"])(z,{class:"flex align-items-center justify-content-center",size:20,minSize:10},{default:Object(l["Z"])((function(){return[S]})),_:1}),Object(l["o"])(z,{size:80},{default:Object(l["Z"])((function(){return[Object(l["o"])(x,{layout:"vertical"},{default:Object(l["Z"])((function(){return[Object(l["o"])(z,{class:"flex align-items-center justify-content-center",size:15},{default:Object(l["Z"])((function(){return[k]})),_:1}),Object(l["o"])(z,{size:85},{default:Object(l["Z"])((function(){return[Object(l["o"])(x,null,{default:Object(l["Z"])((function(){return[Object(l["o"])(z,{class:"flex align-items-center justify-content-center",size:20},{default:Object(l["Z"])((function(){return[h]})),_:1}),Object(l["o"])(z,{class:"flex align-items-center justify-content-center",size:80},{default:Object(l["Z"])((function(){return[P]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]),Object(l["o"])(w)])}var g=Object(l["k"])("h5",null,"Import via Module",-1),y=Object(l["k"])("code",null,"\nimport Splitter from 'primevue/splitter';\nimport SplitterPanel from 'primevue/splitterpanel';\n\n",-1),v=[y],z=Object(l["k"])("h5",null,"Import via CDN",-1),x=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/splitter/splitter.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/splitterpanel/splitterpanel.min.js"><\/script>\n\n',-1),w=[x],D=Object(l["k"])("h5",null,"Getting Started",-1),Z=Object(l["k"])("p",null,"Splitter requires two SplitterPanel components to wrap.",-1),_=Object(l["k"])("code",null,'\n<Splitter style="height: 300px">\n\t<SplitterPanel>\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel>\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n\n',-1),H=[_],N=Object(l["k"])("h5",null,"Multiple Panels",-1),A=Object(l["k"])("p",null,"Any number of panels can be nested inside a Splitter.",-1),C=Object(l["k"])("code",null,[Object(l["k"])("template",null,[Object(l["n"])('\n<Splitter style="height: 300px">\n\t<SplitterPanel v-for="item of items" :key="item.key">\n\t\t{{item.content}}\n\t</SplitterPanel>\t\n</Splitter>\n')]),Object(l["n"])("\n")],-1),I=[C],M=Object(l["k"])("h5",null,"Layout",-1),V=Object(l["k"])("p",null,[Object(l["n"])("Default orientation is configured with the "),Object(l["k"])("i",null,"layout"),Object(l["n"])(' property and default is the "horizontal" whereas other alternative is the "vertical".')],-1),E=Object(l["k"])("code",null,'\n<Splitter style="height: 300px" layout="vertical">\n\t<SplitterPanel>\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel>\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n\n',-1),F=[E],K=Object(l["k"])("h5",null,"Initial Sizes",-1),G=Object(l["k"])("p",null,[Object(l["n"])("When no size is defined, panels are split 50/50, use the "),Object(l["k"])("i",null,"size"),Object(l["n"])(" property to give relative widths e.g. 20/80.")],-1),J=Object(l["k"])("code",null,'\n<Splitter style="height: 300px">\n\t<SplitterPanel :size="20" >\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel  :size="80">\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n\n',-1),T=[J],q=Object(l["k"])("h5",null,"Minimum Size",-1),B=Object(l["k"])("p",null,"Minimum size defines the lowest boundary for the size of a panel.",-1),L=Object(l["k"])("code",null,'\n<Splitter style="height: 300px">\n\t<SplitterPanel :size="20" :minSize="10">\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel  :size="80" :minSize="20">\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n\n',-1),Q=[L],W=Object(l["k"])("h5",null,"Nested Panels",-1),R=Object(l["k"])("p",null,"Splitters can be combined to create advanced layouts.",-1),U=Object(l["k"])("code",null,'\n<Splitter style="height: 300px">\n\t<SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel :size="80">\n\t\t<Splitter layout="vertical">\n\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="15">\n\t\t\t\tPanel 2\n\t\t\t</SplitterPanel>\n\t\t\t<SplitterPanel :size="85">\n\t\t\t\t<Splitter>\n\t\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="20">\n\t\t\t\t\t\tPanel 3\n\t\t\t\t\t</SplitterPanel>\n\t\t\t\t\t<SplitterPanel class="flex align-items-center justify-content-center" :size="80">\n\t\t\t\t\t\tPanel 4\n\t\t\t\t\t</SplitterPanel>\n\t\t\t\t</Splitter>\n\t\t\t</SplitterPanel>\n\t\t</Splitter>\n\t</SplitterPanel>\n</Splitter>\n\n',-1),X=[U],Y=Object(l["k"])("h5",null,"Stateful",-1),$=Object(l["k"])("p",null,[Object(l["n"])("Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes can be restored. Define a "),Object(l["k"])("i",null,"stateKey"),Object(l["n"])(" to enable this feature. Default location of the state is session storage and other option is the local storage which can be configured using the "),Object(l["k"])("i",null,"stateStorage"),Object(l["n"])(" property.")],-1),tt=Object(l["k"])("code",null,'\n<Splitter stateKey="mykey" stateStorage="local">\n\t<SplitterPanel>\n\t\tPanel 1\n\t</SplitterPanel>\n\t<SplitterPanel>\n\t\tPanel 2\n\t</SplitterPanel>\n</Splitter>\n\n',-1),et=[tt],nt=Object(l["k"])("h5",null,"Properties of SplitterPanel",-1),lt=Object(l["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),it=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"size"),Object(l["k"])("td",null,"number"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Size of the element relative to 100%.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"minSize"),Object(l["k"])("td",null,"number"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Minimum size of the element relative to 100%.")])])])],-1),ct=Object(l["k"])("h5",null,"Properties of Splitter",-1),rt=Object(l["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),at=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"layout"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"horizontal"),Object(l["k"])("td",null,'Orientation of the panels, valid values are "horizontal" and "vertical".')]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"gutterSize"),Object(l["k"])("td",null,"number"),Object(l["k"])("td",null,"4"),Object(l["k"])("td",null,"Size of the divider in pixels.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"stateKey"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Storage identifier of a stateful Splitter.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"stateStorage"),Object(l["k"])("td",null,"string"),Object(l["k"])("td",null,"session"),Object(l["k"])("td",null,'Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.')])])])],-1),st=Object(l["k"])("h5",null,"Events of Splitter",-1),pt=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Parameters"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"resizeend"),Object(l["k"])("td",null,[Object(l["n"])("event.originalEvent: Original event "),Object(l["k"])("br"),Object(l["n"])(" event.sizes: Sizes of the panels as an array ")]),Object(l["k"])("td",null,"Callback to invoke when resize ends.")])])])],-1),ut=Object(l["k"])("h5",null,"Styling",-1),ot=Object(l["n"])("Following is the list of structural style classes, for theming classes visit "),bt=Object(l["n"])("theming"),jt=Object(l["n"])(" page."),Ot=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Element")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter"),Object(l["k"])("td",null,"Container element.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter"),Object(l["k"])("td",null,"Container element during resize.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter-horizontal"),Object(l["k"])("td",null,"Container element with horizontal layout.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter-vertical"),Object(l["k"])("td",null,"Container element with vertical layout.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter-panel"),Object(l["k"])("td",null,"Splitter panel element.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter-gutter"),Object(l["k"])("td",null,"Gutter element to use when resizing the panels.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-splitter-gutter-handle"),Object(l["k"])("td",null,"Handl element of the gutter.")])])])],-1),dt=Object(l["k"])("h5",null,"Dependencies",-1),ft=Object(l["k"])("p",null,"None.",-1);function St(t,e,n,i,c,r){var a=Object(l["P"])("router-link"),s=Object(l["P"])("AppDoc"),p=Object(l["Q"])("code");return Object(l["H"])(),Object(l["h"])(s,{name:"SplitterDemo",sources:c.sources,github:"splitter/SplitterDemo.vue"},{default:Object(l["Z"])((function(){return[g,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,v)),[[p,void 0,void 0,{script:!0}]]),z,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,w)),[[p]]),D,Z,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,H)),[[p]]),N,A,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,I)),[[p]]),M,V,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,F)),[[p]]),K,G,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,T)),[[p]]),q,B,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,Q)),[[p]]),W,R,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,X)),[[p]]),Y,$,Object(l["ab"])((Object(l["H"])(),Object(l["j"])("pre",null,et)),[[p]]),nt,lt,it,ct,rt,at,st,pt,ut,Object(l["k"])("p",null,[ot,Object(l["o"])(a,{to:"/theming"},{default:Object(l["Z"])((function(){return[bt]})),_:1}),jt]),Ot,dt,ft]})),_:1},8,["sources"])}var kt={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Horizontal</h5>\n            <Splitter style="height: 300px" class="mb-5">\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 1\n                </SplitterPanel>\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 2\n                </SplitterPanel>\n            </Splitter>\n        </div>\n\n        <div class="card">\n            <h5>Vertical</h5>\n            <Splitter style="height: 300px" layout="vertical">\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 1\n                </SplitterPanel>\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 2\n                </SplitterPanel>\n            </Splitter>\n        </div>\n\n        <div class="card">\n            <h5>Nested</h5>\n            <Splitter style="height: 300px">\n                <SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">\n                    Panel 1\n                </SplitterPanel>\n                <SplitterPanel :size="80">\n                    <Splitter layout="vertical">\n                        <SplitterPanel class="flex align-items-center justify-content-center" :size="15">\n                            Panel 2\n                        </SplitterPanel>\n                        <SplitterPanel :size="85">\n                            <Splitter>\n                                <SplitterPanel class="flex align-items-center justify-content-center" :size="20">\n                                    Panel 3\n                                </SplitterPanel>\n                                <SplitterPanel class="flex align-items-center justify-content-center" :size="80">\n                                    Panel 4\n                                </SplitterPanel>\n                            </Splitter>\n                        </SplitterPanel>\n                    </Splitter>\n                </SplitterPanel>\n            </Splitter>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Horizontal</h5>\n            <Splitter style="height: 300px" class="mb-5">\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 1\n                </SplitterPanel>\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 2\n                </SplitterPanel>\n            </Splitter>\n        </div>\n\n        <div class="card">\n            <h5>Vertical</h5>\n            <Splitter style="height: 300px" layout="vertical">\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 1\n                </SplitterPanel>\n                <SplitterPanel class="flex align-items-center justify-content-center">\n                    Panel 2\n                </SplitterPanel>\n            </Splitter>\n        </div>\n\n        <div class="card">\n            <h5>Nested</h5>\n            <Splitter style="height: 300px">\n                <SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">\n                    Panel 1\n                </SplitterPanel>\n                <SplitterPanel :size="80">\n                    <Splitter layout="vertical">\n                        <SplitterPanel class="flex align-items-center justify-content-center" :size="15">\n                            Panel 2\n                        </SplitterPanel>\n                        <SplitterPanel :size="85">\n                            <Splitter>\n                                <SplitterPanel class="flex align-items-center justify-content-center" :size="20">\n                                    Panel 3\n                                </SplitterPanel>\n                                <SplitterPanel class="flex align-items-center justify-content-center" :size="80">\n                                    Panel 4\n                                </SplitterPanel>\n                            </Splitter>\n                        </SplitterPanel>\n                    </Splitter>\n                </SplitterPanel>\n            </Splitter>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/splitter/splitter.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/splitterpanel/splitterpanel.min.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Horizontal</h5>\n                <p-splitter style="height: 300px" class="mb-5">\n                    <p-splitterpanel class="flex align-items-center justify-content-center">\n                        Panel 1\n                    </p-splitterpanel>\n                    <p-splitterpanel class="flex align-items-center justify-content-center">\n                        Panel 2\n                    </p-splitterpanel>\n                </p-splitter>\n            </div>\n\n            <div class="card">\n                <h5>Vertical</h5>\n                <p-splitter style="height: 300px" layout="vertical">\n                    <p-splitterpanel class="flex align-items-center justify-content-center">\n                        Panel 1\n                    </p-splitterpanel>\n                    <p-splitterpanel class="flex align-items-center justify-content-center">\n                        Panel 2\n                    </p-splitterpanel>\n                </p-splitter>\n            </div>\n\n            <div class="card">\n                <h5>Nested</h5>\n                <p-splitter style="height: 300px">\n                    <p-splitterpanel class="flex align-items-center justify-content-center" :size="20" :minSize="10">\n                        Panel 1\n                    </p-splitterpanel>\n                    <p-splitterpanel :size="80">\n                        <p-splitter layout="vertical">\n                            <p-splitterpanel class="flex align-items-center justify-content-center" :size="15">\n                                Panel 2\n                            </p-splitterpanel>\n                            <p-splitterpanel :size="85">\n                                <p-splitter>\n                                    <p-splitterpanel class="flex align-items-center justify-content-center" :size="20">\n                                        Panel 3\n                                    </p-splitterpanel>\n                                    <p-splitterpanel class="flex align-items-center justify-content-center" :size="80">\n                                        Panel 4\n                                    </p-splitterpanel>\n                                </p-splitter>\n                            </p-splitterpanel>\n                        </p-splitter>\n                    </p-splitterpanel>\n                </p-splitter>\n            </div>\n        </div>\n\n<script>\nconst { createApp } = Vue;\n\nconst App = {\n    components: {\n        "p-splitter": primevue.splitter,\n        "p-splitterpanel": primevue.splitterpanel\n    }\n};\n\ncreateApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n<\\/script>'}}}}},ht=n("6b0d"),Pt=n.n(ht);const mt=Pt()(kt,[["render",St]]);var gt=mt,yt={components:{SplitterDoc:gt}};const vt=Pt()(yt,[["render",m]]);e["default"]=vt}}]);