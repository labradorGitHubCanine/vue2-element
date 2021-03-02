<template>
    <div>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log(this.$slots, '$slots');
            console.log(this.$scopedSlots, '$scopedSlots');
        }
    }
</script>