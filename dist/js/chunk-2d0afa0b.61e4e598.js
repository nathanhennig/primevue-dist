(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afa0b"],{"0eaa":function(e,n,t){"use strict";t.r(n);var a=t("7a23"),l={class:"content-section introduction"},i=Object(a["k"])("div",{class:"feature-intro"},[Object(a["k"])("h1",null,[Object(a["n"])("DataTable "),Object(a["k"])("span",null,"VirtualScroll")]),Object(a["k"])("p",null,"VirtualScroller is a performant approach to handle huge data efficiently.")],-1),r={class:"content-section implementation"},o={class:"card"},d=Object(a["k"])("h5",null,"Preloaded Data (100000 Rows)",-1),s={class:"card"},c=Object(a["k"])("h5",null,"Lazy Loading from a Remote Datasource (100000 Rows)",-1),u={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},m={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},h={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},p={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},v={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}};function f(e,n,t,f,g,y){var w=Object(a["P"])("AppDemoActions"),x=Object(a["P"])("Column"),C=Object(a["P"])("DataTable"),b=Object(a["P"])("Skeleton"),z=Object(a["P"])("AppDoc");return Object(a["H"])(),Object(a["j"])("div",null,[Object(a["k"])("div",l,[i,Object(a["o"])(w)]),Object(a["k"])("div",r,[Object(a["k"])("div",o,[d,Object(a["o"])(C,{value:g.cars,scrollable:"",scrollHeight:"400px",virtualScrollerOptions:{itemSize:46}},{default:Object(a["Z"])((function(){return[Object(a["o"])(x,{field:"id",header:"Id",style:{"min-width":"'200px'"}}),Object(a["o"])(x,{field:"vin",header:"Vin",style:{"min-width":"'200px'"}}),Object(a["o"])(x,{field:"year",header:"Year",style:{"min-width":"'200px'"}}),Object(a["o"])(x,{field:"brand",header:"Brand",style:{"min-width":"'200px'"}}),Object(a["o"])(x,{field:"color",header:"Color",style:{"min-width":"'200px'"}})]})),_:1},8,["value"])]),Object(a["k"])("div",s,[c,Object(a["o"])(C,{value:g.virtualCars,scrollable:"",scrollHeight:"400px",virtualScrollerOptions:{lazy:!0,onLazyLoad:y.loadCarsLazy,itemSize:46,delay:200,showLoader:!0,loading:g.lazyLoading,numToleratedItems:10}},{default:Object(a["Z"])((function(){return[Object(a["o"])(x,{field:"id",header:"Id",style:{"min-width":"'200px'"}},{loading:Object(a["Z"])((function(){return[Object(a["k"])("div",u,[Object(a["o"])(b,{width:"60%",height:"1rem"})])]})),_:1}),Object(a["o"])(x,{field:"vin",header:"Vin",style:{"min-width":"'200px'"}},{loading:Object(a["Z"])((function(){return[Object(a["k"])("div",m,[Object(a["o"])(b,{width:"40%",height:"1rem"})])]})),_:1}),Object(a["o"])(x,{field:"year",header:"Year",style:{"min-width":"'200px'"}},{loading:Object(a["Z"])((function(){return[Object(a["k"])("div",h,[Object(a["o"])(b,{width:"30%",height:"1rem"})])]})),_:1}),Object(a["o"])(x,{field:"brand",header:"Brand",style:{"min-width":"'200px'"}},{loading:Object(a["Z"])((function(){return[Object(a["k"])("div",p,[Object(a["o"])(b,{width:"40%",height:"1rem"})])]})),_:1}),Object(a["o"])(x,{field:"color",header:"Color",style:{"min-width":"'200px'"}},{loading:Object(a["Z"])((function(){return[Object(a["k"])("div",v,[Object(a["o"])(b,{width:"60%",height:"1rem"})])]})),_:1})]})),_:1},8,["value","virtualScrollerOptions"])])]),Object(a["o"])(z,{name:"DataTableVirtualScrollDemo",sources:g.sources,service:["CarService"],github:"datatable/DataTableVirtualScrollDemo.vue"},null,8,["sources"])])}var g=t("2909"),y=(t("a630"),t("3ca3"),t("d81d"),t("fb6a"),t("a434"),t("99af"),t("d4ec")),w=t("bee2"),x=t("ade3"),C=function(){function e(){Object(y["a"])(this,e),Object(x["a"])(this,"brands",["Vapid","Carson","Kitano","Dabver","Ibex","Morello","Akira","Titan","Dover","Norma"]),Object(x["a"])(this,"colors",["Black","White","Red","Blue","Silver","Green","Yellow"])}return Object(w["a"])(e,[{key:"generateCar",value:function(e){return{id:e,vin:this.generateVin(),brand:this.generateBrand(),color:this.generateColor(),year:this.generateYear()}}},{key:"generateVin",value:function(){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=0;t<5;t++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}},{key:"generateBrand",value:function(){return this.brands[Math.floor(Math.random()*Math.floor(10))]}},{key:"generateColor",value:function(){return this.colors[Math.floor(Math.random()*Math.floor(7))]}},{key:"generateYear",value:function(){return 2e3+Math.floor(Math.random()*Math.floor(19))}}]),e}(),b={data:function(){return{cars:null,virtualCars:Array.from({length:1e5}),lazyLoading:!1,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n\t<div>\n         <div class="card">\n            <h5>Preloaded Data (100000 Rows)</h5>\n            <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">\n                <Column field="id" header="Id" style="min-width: \'200px\'"></Column>\n                <Column field="vin" header="Vin" style="min-width: \'200px\'"></Column>\n                <Column field="year" header="Year" style="min-width: \'200px\'"></Column>\n                <Column field="brand" header="Brand" style="min-width: \'200px\'"></Column>\n                <Column field="color" header="Color" style="min-width: \'200px\'"></Column>\n            </DataTable>\n        </div>\n        <div class="card">\n            <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>\n            <DataTable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">\n                <Column field="id" header="Id" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="60%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="vin" header="Vin" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="40%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="year" header="Year" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="30%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="brand" header="Brand" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="40%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="color" header="Color" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="60%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\t</div>\n</template>\n\n<script>\nimport CarService from \'./service/CarService\';\n\nexport default {\n    data() {\n        return {\n            cars: null,\n            virtualCars: Array.from({ length: 100000 }),\n            lazyLoading: false\n        }\n    },\n    carService: null,\n    loadLazyTimeout: null,\n    created() {\n        this.carService = new CarService();\n    },\n    mounted() {\n        this.cars = Array.from({ length: 100000 }).map((_, i) => this.carService.generateCar(i + 1));\n    },\n    methods: {\n        loadCarsLazy(event) {\n            !this.lazyLoading && (this.lazyLoading = true);\n\n            if (this.loadLazyTimeout) {\n                clearTimeout(this.loadLazyTimeout);\n            }\n\n            //simulate remote connection with a timeout\n            this.loadLazyTimeout = setTimeout(() => {\n                let virtualCars = [...this.virtualCars];\n                let { first, last } = event;\n\n                //load data of required page\n                const loadedCars = this.cars.slice(first, last);\n\n                //populate page of virtual cars\n                Array.prototype.splice.apply(virtualCars, [...[first, last - first], ...loadedCars]);\n\n                this.virtualCars = virtualCars;\n                this.lazyLoading = false;\n            }, Math.random() * 1000 + 250);\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n         <div class="card">\n            <h5>Preloaded Data (100000 Rows)</h5>\n            <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">\n                <Column field="id" header="Id" style="min-width: \'200px\'"></Column>\n                <Column field="vin" header="Vin" style="min-width: \'200px\'"></Column>\n                <Column field="year" header="Year" style="min-width: \'200px\'"></Column>\n                <Column field="brand" header="Brand" style="min-width: \'200px\'"></Column>\n                <Column field="color" header="Color" style="min-width: \'200px\'"></Column>\n            </DataTable>\n        </div>\n        <div class="card">\n            <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>\n            <DataTable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">\n                <Column field="id" header="Id" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="60%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="vin" header="Vin" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="40%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="year" header="Year" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="30%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="brand" header="Brand" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="40%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n                <Column field="color" header="Color" style="min-width: \'200px\'">\n                    <template #loading>\n                        <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                            <Skeleton width="60%" height="1rem" />\n                        </div>\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport { FilterMatchMode } from \'primevue/api\';\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            cars.value = Array.from({ length: 100000 }).map((_, i) => carService.value.generateCar(i + 1));\n        })\n\n        const cars = ref(null);\n        const virtualCars = ref(Array.from({ length: 100000 }));\n        const lazyLoading = ref(false);\n        const carService = ref(new CarService());\n        const loadLazyTimeout = ref();\n\n        const loadCarsLazy = (event) => {\n            !lazyLoading.value && (lazyLoading.value = true);\n\n            if (loadLazyTimeout.value) {\n                clearTimeout(loadLazyTimeout.value);\n            }\n\n            //simulate remote connection with a timeout\n            loadLazyTimeout.value = setTimeout(() => {\n                let _virtualCars = [...virtualCars.value];\n                let { first, last } = event;\n\n                //load data of required page\n                const loadedCars = cars.value.slice(first, last);\n\n                //populate page of virtual cars\n                Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);\n\n                virtualCars.value = _virtualCars;\n                lazyLoading.value = false;\n            }, Math.random() * 1000 + 250);\n        }\n\n        return { cars, virtualCars, lazyLoading, loadCarsLazy };\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/skeleton/skeleton.min.js"><\\/script>\n        <script src="./CarService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Preloaded Data (100000 Rows)</h5>\n                <p-datatable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }">\n                    <p-column field="id" header="Id" style="min-width: \'200px\'"></p-column>\n                    <p-column field="vin" header="Vin" style="min-width: \'200px\'"></p-column>\n                    <p-column field="year" header="Year" style="min-width: \'200px\'"></p-column>\n                    <p-column field="brand" header="Brand" style="min-width: \'200px\'"></p-column>\n                    <p-column field="color" header="Color" style="min-width: \'200px\'"></p-column>\n                </p-datatable>\n            </div>\n            <div class="card">\n                <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>\n                <p-datatable :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">\n                    <p-column field="id" header="Id" style="min-width: \'200px\'">\n                        <template #loading>\n                            <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                                <p-skeleton width="60%" height="1rem" />\n                            </div>\n                        </template>\n                    </p-column>\n                    <p-column field="vin" header="Vin" style="min-width: \'200px\'">\n                        <template #loading>\n                            <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                                <p-skeleton width="40%" height="1rem" />\n                            </div>\n                        </template>\n                    </p-column>\n                    <p-column field="year" header="Year" style="min-width: \'200px\'">\n                        <template #loading>\n                            <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                                <p-skeleton width="30%" height="1rem" />\n                            </div>\n                        </template>\n                    </p-column>\n                    <p-column field="brand" header="Brand" style="min-width: \'200px\'">\n                        <template #loading>\n                            <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                                <p-skeleton width="40%" height="1rem" />\n                            </div>\n                        </template>\n                    </p-column>\n                    <p-column field="color" header="Color" style="min-width: \'200px\'">\n                        <template #loading>\n                            <div class="flex align-items-center" :style="{height: \'17px\', \'flex-grow\': \'1\', overflow: \'hidden\'}">\n                                <p-skeleton width="60%" height="1rem" />\n                            </div>\n                        </template>\n                    </p-column>\n                </p-datatable>\n            </div>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    cars.value = Array.from({ length: 100000 }).map((_, i) => carService.value.generateCar(i + 1));\n                })\n\n                const cars = ref(null);\n                const virtualCars = ref(Array.from({ length: 100000 }));\n                const lazyLoading = ref(false);\n                const carService = ref(new CarService());\n                const loadLazyTimeout = ref();\n\n                const loadCarsLazy = (event) => {\n                    !lazyLoading.value && (lazyLoading.value = true);\n\n                    if (loadLazyTimeout.value) {\n                        clearTimeout(loadLazyTimeout.value);\n                    }\n\n                    //simulate remote connection with a timeout\n                    loadLazyTimeout.value = setTimeout(() => {\n                        let _virtualCars = [...virtualCars.value];\n                        let { first, last } = event;\n\n                        //load data of required page\n                        const loadedCars = cars.value.slice(first, last);\n\n                        //populate page of virtual cars\n                        Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);\n\n                        virtualCars.value = _virtualCars;\n                        lazyLoading.value = false;\n                    }, Math.random() * 1000 + 250);\n                }\n\n                return { cars, virtualCars, lazyLoading, loadCarsLazy };\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column,\n                "p-skeleton": primevue.skeleton\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},carService:null,loadLazyTimeout:null,created:function(){this.carService=new C},mounted:function(){var e=this;this.cars=Array.from({length:1e5}).map((function(n,t){return e.carService.generateCar(t+1)}))},methods:{loadCarsLazy:function(e){var n=this;!this.lazyLoading&&(this.lazyLoading=!0),this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout((function(){var t=Object(g["a"])(n.virtualCars),a=e.first,l=e.last,i=n.cars.slice(a,l);Array.prototype.splice.apply(t,[a,l-a].concat(Object(g["a"])(i))),n.virtualCars=t,n.lazyLoading=!1}),1e3*Math.random()+250)}}},z=t("6b0d"),L=t.n(z);const O=L()(b,[["render",f]]);n["default"]=O}}]);