import { ObjectUtils, DomHandler, ZIndexUtils, ConnectedOverlayScrollHandler, UniqueComponentId } from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createElementBlock, Fragment, renderList, normalizeClass, withDirectives, createBlock, resolveDynamicComponent, toDisplayString, createCommentVNode, createElementVNode, mergeProps, renderSlot, createTextVNode, createVNode, withCtx, Transition } from 'vue';
import Portal from 'primevue/portal';

var script$1 = {
    name: 'CascadeSelectSub',
    emits: ['option-select','optiongroup-select'],
    props: {
        selectionPath: Array,
        level: Number,
        options: Array,
        optionLabel: String,
        optionValue: String,
        optionGroupLabel: String,
        optionGroupChildren: Array,
        parentActive: Boolean,
        dirty: Boolean,
        templates: null,
        root: Boolean
    },
    data() {
        return {
            activeOption: null
        }
    },
    mounted() {
        if (this.selectionPath && this.options && !this.dirty) {
            for (let option of this.options) {
                if (this.selectionPath.includes(option)) {
                    this.activeOption = option;
                    break;
                }
            }
        }

        if (!this.root) {
            this.position();
        }
    },
    watch: {
        parentActive(newValue) {
            if (!newValue) {
                this.activeOption = null;
            }
        }
    },
    methods: {
        onOptionClick(event, option) {
            if (this.isOptionGroup(option)) {
                this.activeOption = (this.activeOption === option) ? null : option;

                this.$emit('optiongroup-select', {
                    originalEvent: event,
                    value: option
                });
            }
            else {
                this.$emit('option-select', {
                    originalEvent: event,
                    value: this.getOptionValue(option)
                });
            }
        },
        onOptionSelect(event) {
            this.$emit('option-select', event);
        },
        onOptionGroupSelect(event) {
            this.$emit('optiongroup-select', event);
        },
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionGroupLabel(optionGroup) {
            return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[this.level]);
        },
        isOptionGroup(option) {
            return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[this.level]);
        },
        getOptionLabelToRender(option) {
            return this.isOptionGroup(option) ? this.getOptionGroupLabel(option) : this.getOptionLabel(option);
        },
        getItemClass(option) {
            return [
                'p-cascadeselect-item', {
                    'p-cascadeselect-item-group': this.isOptionGroup(option),
                    'p-cascadeselect-item-active p-highlight': this.isOptionActive(option)
                }
            ]
        },
        isOptionActive(option) {
            return this.activeOption === option;
        },
        onKeyDown(event, option, index) {
            switch (event.code) {
                case 'Down':
                case 'ArrowDown':
                    var nextItem = this.$el.children[index + 1];
                    if (nextItem) {
                        nextItem.children[0].focus();
                    }
                break;

                case 'Up':
                case 'ArrowUp':
                    var prevItem = this.$el.children[index - 1];
                    if (prevItem) {
                        prevItem.children[0].focus();
                    }
                break;

                case 'Right':
                case 'ArrowRight':
                    if (this.isOptionGroup(option)) {
                        if (this.isOptionActive(option)) {
                            event.currentTarget.nextElementSibling.children[0].children[0].focus();
                        }
                        else {
                            this.activeOption = option;
                        }
                    }
                break;

                case 'Left':
                case 'ArrowLeft':
                    this.activeOption = null;

                    var parentList = event.currentTarget.parentElement.parentElement.previousElementSibling;
                    if (parentList) {
                        parentList.focus();
                    }
                break;

                case 'Enter':
                case 'Space':
                    this.onOptionClick(event, option);
                break;
            }

            event.preventDefault();
        },
        position() {
            const parentItem = this.$el.parentElement;
            const containerOffset = DomHandler.getOffset(parentItem);
            const viewport = DomHandler.getViewport();
            const sublistWidth = this.$el.offsetParent ? this.$el.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$el);
            const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

            if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
                this.$el.style.left = '-100%';
            }
        }
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1$1 = ["role"];
const _hoisted_2$1 = ["aria-label", "aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-level"];
const _hoisted_3$1 = ["onClick", "onKeydown"];
const _hoisted_4$1 = {
  key: 1,
  class: "p-cascadeselect-item-text"
};
const _hoisted_5 = {
  key: 2,
  class: "p-cascadeselect-group-icon pi pi-angle-right"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CascadeSelectSub = resolveComponent("CascadeSelectSub", true);
  const _directive_ripple = resolveDirective("ripple");

  return (openBlock(), createElementBlock("ul", {
    class: "p-cascadeselect-panel p-cascadeselect-items",
    "aria-orientation": "horizontal",
    role: $props.root === true ? 'tree' : 'group'
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, index) => {
      return (openBlock(), createElementBlock("li", {
        key: $options.getOptionLabelToRender(option),
        class: normalizeClass($options.getItemClass(option)),
        role: "treeitem",
        "aria-label": $options.getOptionLabelToRender(option),
        "aria-selected": $options.isOptionActive(option),
        "aria-expanded": $options.isOptionActive(option),
        "aria-setsize": $props.options.length,
        "aria-posinset": index + 1,
        "aria-level": $props.level + 1
      }, [
        withDirectives((openBlock(), createElementBlock("div", {
          class: "p-cascadeselect-item-content",
          onClick: $event => ($options.onOptionClick($event, option)),
          tabindex: "0",
          onKeydown: $event => ($options.onKeyDown($event, option, index))
        }, [
          ($props.templates['option'])
            ? (openBlock(), createBlock(resolveDynamicComponent($props.templates['option']), {
                key: 0,
                option: option
              }, null, 8, ["option"]))
            : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString($options.getOptionLabelToRender(option)), 1)),
          ($options.isOptionGroup(option))
            ? (openBlock(), createElementBlock("span", _hoisted_5))
            : createCommentVNode("", true)
        ], 40, _hoisted_3$1)), [
          [_directive_ripple]
        ]),
        ($options.isOptionGroup(option) && $options.isOptionActive(option))
          ? (openBlock(), createBlock(_component_CascadeSelectSub, {
              key: 0,
              class: "p-cascadeselect-sublist",
              selectionPath: $props.selectionPath,
              options: $options.getOptionGroupChildren(option),
              optionLabel: $props.optionLabel,
              optionValue: $props.optionValue,
              level: $props.level + 1,
              onOptionSelect: $options.onOptionSelect,
              onOptiongroupSelect: $options.onOptionGroupSelect,
              optionGroupLabel: $props.optionGroupLabel,
              optionGroupChildren: $props.optionGroupChildren,
              parentActive: $options.isOptionActive(option),
              dirty: $props.dirty,
              templates: $props.templates,
              "aria-level": $props.level + 2
            }, null, 8, ["selectionPath", "options", "optionLabel", "optionValue", "level", "onOptionSelect", "onOptiongroupSelect", "optionGroupLabel", "optionGroupChildren", "parentActive", "dirty", "templates", "aria-level"]))
          : createCommentVNode("", true)
      ], 10, _hoisted_2$1))
    }), 128))
  ], 8, _hoisted_1$1))
}

script$1.render = render$1;

var script = {
    name: 'CascadeSelect',
    emits: ['update:modelValue','change','group-change', 'before-show','before-hide','hide','show','focus','blur'],
    data() {
        return {
            selectionPath: null,
            focused: false,
            overlayVisible: false,
            dirty: false
        };
    },
    props: {
        modelValue: null,
        options: Array,
        optionLabel: String,
        optionValue: String,
        optionGroupLabel: String,
        optionGroupChildren: Array,
        placeholder: String,
		disabled: Boolean,
        dataKey: null,
        tabindex: String,
        appendTo: {
            type: String,
            default: 'body'
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner pi-spin'
        },
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        panelClass: null,
        panelProps: null,
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    overlay: null,
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    },
    mounted() {
        this.updateSelectionPath();
    },
    watch: {
        modelValue() {
            this.updateSelectionPath();
        }
    },
    methods: {
        onOptionSelect(event) {
            this.$emit('update:modelValue', event.value);
            this.$emit('change', event);
            this.hide();
            this.$refs.focusInput.focus();
        },
        onOptionGroupSelect(event) {
            this.dirty = true;
            this.$emit('group-change', event);
        },
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionGroupChildren(optionGroup, level) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
        },
        isOptionGroup(option, level) {
            return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
        },
        updateSelectionPath() {
            let path;
            if (this.modelValue != null && this.options) {
                for (let option of this.options) {
                    path = this.findModelOptionInGroup(option, 0);
                    if (path) {
                        break;
                    }
                }
            }

            this.selectionPath = path;
        },
        findModelOptionInGroup(option, level) {
            if (this.isOptionGroup(option, level)) {
                let selectedOption;
                for (let childOption of this.getOptionGroupChildren(option, level)) {
                    selectedOption = this.findModelOptionInGroup(childOption, level + 1);
                    if (selectedOption) {
                        selectedOption.unshift(option);
                        return selectedOption;
                    }
                }
            }
            else if ((ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.dataKey))) {
                return [option];
            }

            return null;
        },
        show() {
            this.$emit('before-show');
            this.overlayVisible = true;
        },
        hide() {
            this.$emit('before-hide');
            this.overlayVisible = false;
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        onClick(event) {
            if (this.disabled || this.loading) {
                return;
            }

            if (!this.overlay || !this.overlay.contains(event.target)) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();

                this.$refs.focusInput.focus();
            }
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();
            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');
            this.overlay = null;
            this.dirty = false;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendTo === 'self') {
                DomHandler.relativePosition(this.overlay, this.$el);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.overlay && !this.$el.contains(event.target) && !this.overlay.contains(event.target)) {
                        this.hide();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
                        this.hide();
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        overlayRef(el) {
            this.overlay = el;
        },
        onKeyDown(event) {
            if (this.disabled || this.loading) {
                event.preventDefault();
                return;
            }

            switch(event.code) {
                case 'Down':
                case 'ArrowDown':
                    if (this.overlayVisible) {
                        if (DomHandler.findSingle(this.overlay, '.p-highlight')) {
                            DomHandler.findSingle(this.overlay, '.p-highlight').focus();
                        }
                        else DomHandler.findSingle(this.overlay, '.p-cascadeselect-item').children[0].focus();
                    }
                    else {
                        this.show();
                    }

                    event.preventDefault();
                break;

                case 'Space':
                case 'Enter':
                    if (this.overlayVisible) {
                        this.hide();
                    }
                    else {
                        this.show();
                    }

                    event.preventDefault();
                break;

                case 'Escape':
                case 'Tab':
                    if (this.overlayVisible) {
                        this.hide();
                        event.preventDefault();
                    }
                break;
            }
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        }
    },
    computed: {
        containerClass() {
            return [
                'p-cascadeselect p-component p-inputwrapper',
                {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': this.modelValue,
                    'p-inputwrapper-focus': this.focused || this.overlayVisible
                }
            ];
        },
        labelClass() {
            return [
                'p-cascadeselect-label',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-cascadeselect-label-empty': !this.$slots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
                }
            ];
        },
        label() {
            if (this.selectionPath)
                return this.getOptionLabel(this.selectionPath[this.selectionPath.length - 1]);
            else
                return this.placeholder||'p-emptylabel';
        },
        panelStyleClass() {
            return ['p-cascadeselect-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        dropdownIconClass() {
            return ['p-cascadeselect-trigger-icon', this.loading ? this.loadingIcon : 'pi pi-chevron-down'];
        },
        listId() {
            return this.overlayVisible ? UniqueComponentId() + '_list' : null;
        }
    },
    components: {
        'CascadeSelectSub': script$1,
        'Portal': Portal
    }
};

const _hoisted_1 = { class: "p-hidden-accessible" };
const _hoisted_2 = ["id", "disabled", "tabindex", "aria-labelledby", "aria-label", "aria-expanded", "aria-controls"];
const _hoisted_3 = ["aria-expanded"];
const _hoisted_4 = { class: "p-cascadeselect-items-wrapper" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CascadeSelectSub = resolveComponent("CascadeSelectSub");
  const _component_Portal = resolveComponent("Portal");

  return (openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass($options.containerClass),
    onClick: _cache[4] || (_cache[4] = $event => ($options.onClick($event)))
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("input", mergeProps({
        ref: "focusInput",
        role: "combobox",
        type: "text",
        id: $props.inputId,
        class: $props.inputClass,
        style: $props.inputStyle,
        readonly: "",
        disabled: $props.disabled,
        tabindex: $props.tabindex,
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-label": _ctx.ariaLabel,
        "aria-haspopup": "tree",
        "aria-expanded": $data.overlayVisible,
        "aria-controls": $options.listId,
        onFocus: _cache[0] || (_cache[0] = (...args) => ($options.onFocus && $options.onFocus(...args))),
        onBlur: _cache[1] || (_cache[1] = (...args) => ($options.onBlur && $options.onBlur(...args))),
        onKeydown: _cache[2] || (_cache[2] = (...args) => ($options.onKeyDown && $options.onKeyDown(...args)))
      }, $props.inputProps), null, 16, _hoisted_2)
    ]),
    createElementVNode("span", {
      class: normalizeClass($options.labelClass)
    }, [
      renderSlot(_ctx.$slots, "value", {
        value: $props.modelValue,
        placeholder: $props.placeholder
      }, () => [
        createTextVNode(toDisplayString($options.label), 1)
      ])
    ], 2),
    createElementVNode("div", {
      class: "p-cascadeselect-trigger",
      role: "button",
      "aria-haspopup": "tree",
      "aria-expanded": $data.overlayVisible
    }, [
      renderSlot(_ctx.$slots, "indicator", {}, () => [
        createElementVNode("span", {
          class: normalizeClass($options.dropdownIconClass)
        }, null, 2)
      ])
    ], 8, _hoisted_3),
    createVNode(_component_Portal, { appendTo: $props.appendTo }, {
      default: withCtx(() => [
        createVNode(Transition, {
          name: "p-connected-overlay",
          onEnter: $options.onOverlayEnter,
          onLeave: $options.onOverlayLeave,
          onAfterLeave: $options.onOverlayAfterLeave
        }, {
          default: withCtx(() => [
            ($data.overlayVisible)
              ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 0,
                  ref: $options.overlayRef,
                  class: $options.panelStyleClass,
                  onClick: _cache[3] || (_cache[3] = (...args) => ($options.onOverlayClick && $options.onOverlayClick(...args)))
                }, $props.panelProps), [
                  createElementVNode("div", _hoisted_4, [
                    createVNode(_component_CascadeSelectSub, {
                      id: $options.listId,
                      options: $props.options,
                      selectionPath: $data.selectionPath,
                      optionLabel: $props.optionLabel,
                      optionValue: $props.optionValue,
                      level: 0,
                      templates: _ctx.$slots,
                      optionGroupLabel: $props.optionGroupLabel,
                      optionGroupChildren: $props.optionGroupChildren,
                      onOptionSelect: $options.onOptionSelect,
                      onOptiongroupSelect: $options.onOptionGroupSelect,
                      dirty: $data.dirty,
                      root: true
                    }, null, 8, ["id", "options", "selectionPath", "optionLabel", "optionValue", "templates", "optionGroupLabel", "optionGroupChildren", "onOptionSelect", "onOptiongroupSelect", "dirty"])
                  ])
                ], 16))
              : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["onEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 1
    }, 8, ["appendTo"])
  ], 2))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-cascadeselect {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    cursor: pointer;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\n}\n.p-cascadeselect-trigger {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0;\n}\n.p-cascadeselect-label {\r\n    display: block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    width: 1%;\r\n    text-overflow: ellipsis;\r\n    cursor: pointer;\n}\n.p-cascadeselect-label-empty {\r\n    overflow: hidden;\r\n    visibility: hidden;\n}\n.p-cascadeselect .p-cascadeselect-panel {\r\n    min-width: 100%;\n}\n.p-cascadeselect-panel {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\n}\n.p-cascadeselect-item {\r\n    cursor: pointer;\r\n    font-weight: normal;\r\n    white-space: nowrap;\n}\n.p-cascadeselect-item-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    overflow: hidden;\r\n    position: relative;\n}\n.p-cascadeselect-group-icon {\r\n    margin-left: auto;\n}\n.p-cascadeselect-items {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    min-width: 100%;\n}\n.p-fluid .p-cascadeselect {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\n}\n.p-fluid .p-cascadeselect .p-cascadeselect-label {\r\n    width: 1%;\n}\n.p-cascadeselect-sublist {\r\n    position: absolute;\r\n    min-width: 100%;\r\n    z-index: 1;\r\n    display: none;\n}\n.p-cascadeselect-item-active {\r\n    overflow: visible !important;\n}\n.p-cascadeselect-item-active > .p-cascadeselect-sublist {\r\n    display: block;\r\n    left: 100%;\r\n    top: 0;\n}\r\n";
styleInject(css_248z);

script.render = render;

export { script as default };
