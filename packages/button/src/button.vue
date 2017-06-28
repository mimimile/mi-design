<template>
    <button :disabled="disabled" class="mi-btn"
        @click="handleClick"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
            type ? 'mi-btn-' + type : '',
            size ? 'mi-btn-' + size : '',
            {
                'is-disabled' : disabled,
                'is-loading' : loading,
                'is-plain' : plain
            }
        ]"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'MiButton',

        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            nativeType: {
                type: String,
                default: 'button'
            },
            loading: Boolean,
            disabled: Boolean,
            plain: Boolean,
            autofocus: Boolean
        },

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    }
</script>