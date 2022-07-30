<template>
    <span class="p-paginator-pages">
        <button v-for="pageLink of value" :key="pageLink" :class="['p-paginator-page p-paginator-element p-link', {'p-highlight': ((pageLink - 1) === page)}]" type="button"
            :aria-current="currentPage(pageLink, page)" @click="onPageLinkClick($event, pageLink)" v-ripple>{{pageLink}}</button>
    </span>
</template>
<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'PageLinks',
    inheritAttrs: false,
    emits: ['click'],
    props: {
        value: Array,
        page: Number
    },
    methods: {
        onPageLinkClick(event, pageLink) {
            this.$emit('click', {
                originalEvent: event,
                value: pageLink
            });
        },
        currentPage(pageLink, page) {
            if ((pageLink - 1) === page) {
                return 'page'
            }

            return false
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
