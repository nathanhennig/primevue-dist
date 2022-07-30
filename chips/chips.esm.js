import { openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, renderSlot, toDisplayString, mergeProps } from 'vue';

var script = {
    name: 'Chips',
    emits: ['update:modelValue', 'add', 'remove', 'focus', 'blur'],
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        separator: {
            type: String,
            default: null
        },
        addOnBlur: {
            type: Boolean,
            default: null
        },
        allowDuplicate: {
            type: Boolean,
            default: true
        },
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        disabled: {
            type: Boolean,
            default: false
        },
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    data() {
        return {
            inputValue: null,
            focused: false,
            focusedIndex: null
        };
    },
    methods: {
        onWrapperClick() {
            this.$refs.input.focus();
        },
        onInput(event) {
            this.inputValue = event.target.value;
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedIndex = null;
            if (this.addOnBlur) {
                this.addItem(event, event.target.value, false);
            }
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            const inputValue = event.target.value;

            switch(event.code) {
                case 'Backspace':
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        if (this.focusedIndex !== null) {
                            this.removeItem(event, this.focusedIndex);
                        }
                        else this.removeItem(event, this.modelValue.length - 1);
                    }

                break;

                case 'Enter':
                    if (inputValue && inputValue.trim().length && !this.maxedOut) {
                        this.addItem(event, inputValue, true);
                    }
                break;

                case 'ArrowLeft':
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        if (this.focusedIndex === 0 || this.focusedIndex === null) this.focusedIndex = this.modelValue.length-1;
                        else this.focusedIndex--;
                    }
                break;

                case 'ArrowRight':
                    if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
                        if (this.focusedIndex === null || this.focusedIndex === this.modelValue.length-1) this.focusedIndex = 0;
                        else this.focusedIndex++;
                    }
                break;

                default:
                    if (this.separator) {
                        if (this.separator === ',' && event.key === ',') {
                            this.addItem(event, inputValue, true);
                        }
                    }
                break;
            }
        },
        onPaste(event) {
            if (this.separator) {
                let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');
                if (pastedData) {
                    let value = this.modelValue || [];
                    let pastedValues = pastedData.split(this.separator);
                    pastedValues = pastedValues.filter(val => (this.allowDuplicate || value.indexOf(val) === -1));
                    value = [...value, ...pastedValues];
                    this.updateModel(event, value, true);
                }
            }
        },
        updateModel(event, value, preventDefault) {
            this.$emit('update:modelValue', value);
            this.$emit('add', {
                originalEvent: event,
                value: value
            });
            this.$refs.input.value = '';
            this.inputValue = '';

            if (preventDefault) {
                event.preventDefault();
            }
        },
        addItem(event, item, preventDefault) {
            if (item && item.trim().length) {
                let value = this.modelValue ? [...this.modelValue]: [];
                if (this.allowDuplicate || value.indexOf(item) === -1) {
                    value.push(item);
                    this.updateModel(event, value, preventDefault);
                }
            }
        },
        removeItem(event, index) {
            if (this.disabled) {
                return;
            }

            let values = [...this.modelValue];
            const removedItem = values.splice(index, 1);
            if (values.length === 0) this.focusedIndex = null;
            this.$emit('update:modelValue', values);
            this.$emit('remove', {
                originalEvent: event,
                value: removedItem
            });
        }
    },
    computed: {
        maxedOut() {
            return this.max && this.modelValue && this.max === this.modelValue.length;
        },
        containerClass() {
            return ['p-chips p-component p-inputwrapper', {
                'p-inputwrapper-filled': ((this.modelValue && this.modelValue.length) || (this.inputValue && this.inputValue.length)),
                'p-inputwrapper-focus': this.focused
            }];
        }
    }
};

const _hoisted_1 = { class: "p-chips-token-label" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "p-chips-input-token" };
const _hoisted_4 = ["id", "disabled", "aria-labelledby", "aria-label"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass)
  }, [
    createElementVNode("ul", {
      class: normalizeClass(['p-inputtext p-chips-multiple-container', {'p-disabled': $props.disabled, 'p-focus': $data.focused}]),
      role: "listbox",
      "aria-orientation": "horizontal",
      onClick: _cache[5] || (_cache[5] = $event => ($options.onWrapperClick()))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.modelValue, (val, i) => {
        return (openBlock(), createElementBlock("li", {
          key: `${i}_${val}`,
          role: "option",
          class: normalizeClass(['p-chips-token', {'p-focus': $data.focusedIndex === i}])
        }, [
          renderSlot(_ctx.$slots, "chip", {
            value: val,
            ariaLabel: val
          }, () => [
            createElementVNode("span", _hoisted_1, toDisplayString(val), 1)
          ]),
          createElementVNode("span", {
            class: "p-chips-token-icon pi pi-times-circle",
            onClick: $event => ($options.removeItem($event, i))
          }, null, 8, _hoisted_2)
        ], 2))
      }), 128)),
      createElementVNode("li", _hoisted_3, [
        createElementVNode("input", mergeProps({
          ref: "input",
          type: "text",
          id: $props.inputId,
          class: $props.inputClass,
          style: $props.inputStyle,
          disabled: $props.disabled || $options.maxedOut,
          "aria-labelledby": _ctx.ariaLabelledby,
          "aria-label": _ctx.ariaLabel,
          onFocus: _cache[0] || (_cache[0] = $event => ($options.onFocus($event))),
          onBlur: _cache[1] || (_cache[1] = $event => ($options.onBlur($event))),
          onInput: _cache[2] || (_cache[2] = (...args) => ($options.onInput && $options.onInput(...args))),
          onKeydown: _cache[3] || (_cache[3] = $event => ($options.onKeyDown($event))),
          onPaste: _cache[4] || (_cache[4] = $event => ($options.onPaste($event)))
        }, $props.inputProps), null, 16, _hoisted_4)
      ])
    ], 2)
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

var css_248z = "\n.p-chips {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\n}\n.p-chips-multiple-container {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    cursor: text;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\n}\n.p-chips-token {\r\n    cursor: default;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\n}\n.p-chips-input-token {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\n}\n.p-chips-token-icon {\r\n    cursor: pointer;\n}\n.p-chips-input-token input {\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    background-color: transparent;\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-radius: 0;\r\n    width: 100%;\n}\n.p-fluid .p-chips {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\n}\n.p-chips .p-chips-multiple-container .p-chips-token.p-focus {\r\n    background-color: var(--primary-color);\n}\r\n";
styleInject(css_248z);

script.render = render;

export { script as default };
