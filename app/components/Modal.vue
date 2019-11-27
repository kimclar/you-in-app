<template>
    <StackLayout width="500" height="500" backgroundColor="white" class="p-20">
        <Label class="h2 text-center" text="This is a modal page." />
        <Button width="200" class="btn btn-outline" text="Close Modal" @tap="$modal.close()" />
    </StackLayout>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style>
</style>
