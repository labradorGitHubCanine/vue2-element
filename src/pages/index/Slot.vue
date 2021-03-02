<template>
    <div>
        <slot-test>
            123
        </slot-test>
    </div>
</template>
<script>
    import SlotTest from "@/components/SlotTest";

    export default {
        components: {SlotTest}
    }
</script>