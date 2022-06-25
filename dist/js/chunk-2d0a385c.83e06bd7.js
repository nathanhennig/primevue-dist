(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a385c"],{"0314":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),a=Object(n["k"])("div",{class:"content-section introduction"},[Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,"Accessibility"),Object(n["k"])("p",null,"An introduction to accessibility and how it translates to Vue UI Components.")])],-1),o={class:"content-section documentation"},s=Object(n["m"])('<p class="line-height-3 bg-indigo-600 text-white p-3 text-lg" style="border-radius:10px;">Accessibility is a major concern of the Prime UI libraries and PrimeVue is no exception. <a href="https://www.primetek.com.tr" class="text-white">PrimeTek</a> teams have initiated a significant process to review and enhance the accessibility features of the components. This guide documents the foundation of the general guidelines that PrimeVue will follow and each component documentation will have a separate <b>Accessibility</b> section that states the keyboard support, screen reader compatibility, the implementation details along with tips to achieve WCAG compliancy. This work has been initiated in Q2 2022 and planned to be completed by early Q3. PrimeReact will be the reference implementation which then will be ported to PrimeFaces, PrimeNG and PrimeVue. </p><h3>Introduction</h3><p>According to the World Health Organization, 15% of the world population has a disability to some degree. As a result, accessibility features in any context such as a ramp for wheelchair users or a multimedia with captions are crucial to ensure content can be consumed by anyone.</p><h5>Disabilities</h5><p>Types of disabilities are diverse so you need to know your audience well and how they interact with the content created. There four main categories;</p><h6>Visual Impairments</h6><p>Blindness, low-level vision or color blindness are the common types of visual impairments. Screen magnifiers and the color blind mode are usually built-in features of the browsers whereas for people who rely on screen readers, page developers are required to make sure content is readable by the readers. Popular readers are <a href="https://www.nvaccess.org" alt="NVDA Reader">NVDA</a>, <a href="https://www.freedomscientific.com/Products/software/JAWS/" alt="JAWS Reader">JAWS</a> and <a href="https://www.chromevox.com" alt="ChromeVox Reader">ChromeVox</a>. </p><h6>Hearing Impairments</h6><p>Deafness or hearing loss refers to the inability to hear sounds totally or partially. People with hearing impairments use assistive devices however it may not be enough when interacting with a web page. Common implementation is providing textual alternatives, transcripts and captions for content with audio. </p><h6>Mobility Impairments</h6><p>People with mobility impairments have disabilities related to movement due to loss of a limb, paralysis or other varying reasons. Assistive technologies like a head pointer is a device to interact with a screen whereas keyboard or a trackpad remain as solutions for people who are not able to utilize a mouse. </p><h6>Cognitive Impairments</h6><p>Cognitive impairments have a wider range that includes people with learning disabilities, depression and dyslexia. A well designed content also leads to better user experience for people without disabilities so designing for cognitive impairments result in better design for any user. </p><h3>Web Content</h3><p>Correct page structure with the aid of assistive technologies are the core ingridients for an accessible web content. HTML is based on an accessible foundation, form controls can be used by keyboard by default and semantic HTML is easier to be processed by a screen reader.</p><h5>WCAG</h5><p><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" alt="WCAG Website">WCAG</a> refers to <strong>Web Content Accessibility Guideline</strong>, a standard managed by the WAI (Web Accessibility Initiative) of W3C (World Wide Web Consortium). WCAG consists of recommendations for making the web content more accessible. PrimeVue components aim high level of WCAG compliancy in the near future.</p><p>Various countries around the globe have governmental policies regarding web accessibility as well. Most well known of these are <a href="https://www.section508.gov/manage/laws-and-policies/">Section 508</a> in the US and <a href="https://digital-strategy.ec.europa.eu/en/policies/web-accessibility">Web Accessibility Directive</a> of the European Union.</p><h5>Form Controls</h5><p>Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be used with space key as well to trigger. </p>',20),r=Object(n["k"])("code",null,'\n<button @click="onButtonClick(event)">Click</button>\n\n',-1),c=[r],l=Object(n["k"])("p",null,"On the other hand, a fancy css based button using a div has no keyboard or screen reader support.",-1),d=Object(n["k"])("code",null,'\n<button class="fancy-button" @click="onButtonClick(event)">Click</button>\n\n',-1),b=[d],h=Object(n["k"])("p",null,[Object(n["k"])("i",null,"tabindex"),Object(n["n"])(" is required to make a div element accessible in addition to use a keydown to bring the keyboard support back. To avoid the overload and implementing functionality that is already provided by the browser, native form controls should be preferred.")],-1),p=Object(n["k"])("code",null,'\n<div class="fancy-button" @click="onClick(event)" @keydown="onKeyDown(event)" tabindex="0">Click</div>\n\n',-1),u=[p],m=Object(n["k"])("h5",null,"Relations",-1),v=Object(n["k"])("p",null,[Object(n["n"])("Form components must be related to another element that describes what the form element is used for. This is usually achieved with the "),Object(n["k"])("i",null,"label"),Object(n["n"])(" element.")],-1),f=Object(n["k"])("code",null,'\n<label for="myinput">Username:</label>\n<input id="myinput" type="text" name="username" />\n\n',-1),w=[f],k=Object(n["k"])("h5",null,"Semantic HTML",-1),g=Object(n["k"])("p",null,[Object(n["n"])("HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular "),Object(n["k"])("i",null,"div"),Object(n["n"])(" elements with classes are used. Consider the following example that do not mean too much for readers. ")],-1),y=Object(n["k"])("code",null,'\n<div class="header">\n    <div class="header-text">Header</div>\n</div>\n\n<div class="nav"></div>\n\n<div class="main">\n    <div class="content">\n    </div>\n\n    <div class="sidebar">\n    </div>\n</div>\n\n<div class="footer">\n</div>\n\n',-1),j=[y],O=Object(n["k"])("p",null,"Same layout can be achieved using the semantic elements with screen reader support built-in.",-1),x=Object(n["k"])("code",null,"\n<header>\n    <h1>Header</h1>\n</header>\n\n<nav></nav>\n\n<main>\n    <article></article>\n\n    <aside></aside>\n</main>\n\n<footer>\n</footer>\n\n",-1),A=[x],C=Object(n["m"])("<h5>WAI-ARIA</h5><p>ARIA refers to &quot;Accessible Rich Internet Applications&quot; is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components such as a datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeVue. These types of components must provide keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized. </p><p>ARIA consists of roles, properties and attributes. <b>Roles</b> define what the element is mainly used for e.g. <i>checkbox</i>, <i>dialog</i>, <i>tablist</i> whereas <b>States</b> and <b>Properties</b> define the metadata of the element like <i>aria-checked</i>, <i>aria-disabled</i>.</p><p>Consider the following case of a native checkbox. It has built-in keyboard and screen reader support.</p>",4),I=Object(n["k"])("code",null,'\n<input type="checkbox" value="Prime" name="ui" checked>\n\n',-1),H=[I],W=Object(n["k"])("p",null,"A fancy checkbox with css animations might look more appealing but accessibility might be lacking. Checkbox below may display a checked font icon with animations however it is not tabbable, cannot be checked with space key and cannot be read by a reader. ",-1),P=Object(n["k"])("code",null,'\n<div class="fancy-checkbox">\n    <i class="checked-icon" v-if="checked"></i>\n</div>\n\n',-1),V=[P],T=Object(n["k"])("p",null,[Object(n["n"])("One alternative is using ARIA roles for readers and use javascript for keyboard support. Notice the usage of "),Object(n["k"])("i",null,"aria-labelledby"),Object(n["n"])(" as a replacement of the "),Object(n["k"])("i",null,"label"),Object(n["n"])(" tag with htmlFor.")],-1),R=Object(n["k"])("code",null,'\n<span id="chk-label">Remember Me</span>\n<div class="fancy-checkbox" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk-label"\n    @click="toggle" @keydown="onKeyDown(event)">\n    <i class="checked-icon" v-if="checked"></i>\n</div>\n\n',-1),M=[R],D=Object(n["k"])("p",null,[Object(n["n"])("However the best practice is combining semantic HTML for accessibility while keeping the design for UX. This approach involves hiding a native checkbox for accessibility and using javascript events to update its state. Notice the usage of "),Object(n["k"])("i",null,"p-sr-only"),Object(n["n"])(" that hides the elements from the user but not from the screen reader. ")],-1),G=Object(n["k"])("code",null,'\n<label for="chkbox">Remember Me</label>\n<div class="fancy-checkbox" @click="toggle">\n    <input class="p-sr-only" type="checkbox" id="chkbox" @focus="updateParentVisuals" @blur="updateParentVisuals"\n        @keydown="onKeyDown(event)">\n    <i class="checked-icon" v-if="checked"></i>\n</div>\n\n',-1),S=[G],U=Object(n["k"])("p",null,"A working sample is the PrimeVue checkbox that is tabbable, keyboard accessible and is compliant with a screen reader. Instead of ARIA roles it relies on a hidden native checkbox. ",-1),L={class:"flex align-items-center"},N=Object(n["k"])("label",{for:"binary",class:"mr-2"},"Remember Me",-1),q=Object(n["m"])('<h5>Colors</h5><p>Colors on a web page should aim a contrast ratio of at least <strong>4.5:1</strong> and consider a selection of colors that do not cause vibration.</p><h6>Good Contrast</h6><p>Color contrast between the background and the foreground content should be sufficient enough to ensure readability. Example below displays two cases with good and bad samples.</p><div class="flex"><div class="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-600" style="border-radius:10px;"><span class="text-white">GOOD</span></div><div class="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-400" style="border-radius:10px;"><span class="text-white">BAD</span></div></div><h6>Vibration</h6><p>Color vibration is leads to an illusion of motion due to choosing colors that have low visibility against each other. Color combinations need to be picked with caution to avoid vibration. </p><div class="flex"><div class="h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-pink-500" style="border-radius:10px;"><span class="text-blue-500">VIBRATE</span></div></div><h6>Dark Mode</h6><p>Highly saturated colors should be avoided when used within a dark design scheme as they cause eye strain. Instead desaturated colors should be preferred.</p><div class="flex"><div class="h-8rem w-8rem flex flex-column justify-content-center align-items-center mr-5 font-bold bg-gray-900" style="border-radius:10px;"><span class="text-indigo-500">Indigo 500</span><i class="text-indigo-500 pi pi-times-circle mt-3 text-xl"></i></div><div class="h-8rem w-8rem flex flex-column justify-content-center align-items-center mr-5 font-bold bg-gray-900" style="border-radius:10px;"><span class="text-indigo-200">Indigo 200</span><i class="text-indigo-200 pi pi-check-circle mt-3 text-xl"></i></div></div>',11);function z(e,t,i,r,d,p){var f=Object(n["P"])("Checkbox"),y=Object(n["Q"])("code");return Object(n["H"])(),Object(n["j"])("div",null,[a,Object(n["k"])("div",o,[s,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,c)),[[y,void 0,void 0,{script:!0}]]),l,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,b)),[[y,void 0,void 0,{script:!0}]]),h,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,u)),[[y,void 0,void 0,{script:!0}]]),m,v,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,w)),[[y,void 0,void 0,{script:!0}]]),k,g,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,j)),[[y,void 0,void 0,{script:!0}]]),O,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,A)),[[y,void 0,void 0,{script:!0}]]),C,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,H)),[[y,void 0,void 0,{script:!0}]]),W,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,V)),[[y,void 0,void 0,{script:!0}]]),T,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,M)),[[y,void 0,void 0,{script:!0}]]),D,Object(n["ab"])((Object(n["H"])(),Object(n["j"])("pre",null,S)),[[y,void 0,void 0,{script:!0}]]),U,Object(n["k"])("div",L,[N,Object(n["o"])(f,{id:"binary",binary:"",modelValue:d.checked,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.checked=e})},null,8,["modelValue"])]),q])])}var B={data:function(){return{checked:!1}}},J=i("6b0d"),F=i.n(J);const E=F()(B,[["render",z]]);t["default"]=E}}]);