<template>
    <div>
        <editor v-model="container"></editor>
    </div>
</template>

<script>
    import editor from '@/components/QuillEditor.vue';
    export default {
        components: {
            editor
        },
        data() {
            return {
                container: '',
            }
        },
    }
</script>

<style scoped xml:lang="less">

    .edit-blog {
        width: 60%;
        min-width: 600px;
        display: inline-block;
        padding: 30px 0 10px;

    }

    .edit-blog .el-form-item:first-child {
        text-align: left;
    }
</style>
