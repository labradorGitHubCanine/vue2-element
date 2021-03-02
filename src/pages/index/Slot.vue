<template>
    <div>
        <slot-test :list="list">
            <div prop="name"></div>
            <div prop="txt"></div>
        </slot-test>
    </div>
</template>
<script>
    import SlotTest from "@/components/SlotTest";

    export default {
        components: {SlotTest},
        data: () => ({
            list: [
                {name: 'aaa', txt: '123'},
                {name: 'bbb', txt: '321'},
                {name: 'ccc', txt: '222'},
                {name: 'ddd', txt: '333'},
            ]
        })
    }
</script>
