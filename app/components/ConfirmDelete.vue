<template>
    <StackLayout width="400" height="300" backgroundColor="white" class="p-20">
        <Label class="h3 text-center" text="Are you sure you want to delete this event?" />


        <Button width="180" backgroundColor="red" class="btn btn-outline" text="YES" @tap="$modal.close()" />
        <Button width="180" backgroundColor="green" class="btn btn-outline" text="NO" @tap="$modal.close()" />
    </StackLayout>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>
