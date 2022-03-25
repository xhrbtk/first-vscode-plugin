const myTemplate = `
    <template>
        <div>{{ number }}</div>
    </template>

    <script lang="ts" setup>
    import { onMounted, ref } from 'vue
    import router from './router
    const number = 1
    onMounted(() => {
        console.log('onMounted')
    })
    </script>

    <!-- 或者 -->
    <script lang="ts">
    export default {
        components: {},
        props: {},
        setup(props, context){
            const number = 1
            const handler = () => {
                console.log('handler 函数')
            }
            return { number, handler }

        }
    }
    </script>

    <style lang="less" scoped>
    </style>
`

module.exports = myTemplate