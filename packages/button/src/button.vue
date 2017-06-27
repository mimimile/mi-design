<template>
    <button :disabled="disabled" class="mi-button"
        @click="handleClick"
        :autofocus="autofocus"
        :type="nativeType"

    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'MiButton',

        props: {
            types: {
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