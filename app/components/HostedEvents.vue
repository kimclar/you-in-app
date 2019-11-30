<template lang="html">
    <Page>
        <ActionBar>
            <Label text="My Hosted Events"></Label>
        </ActionBar>

                    <StackLayout class="home-panel m-20">
                        <Button text="Host an event?" @tap="showModal" class="btn btn-primary m-t-20" />
                    </StackLayout>

    </Page>
</template>



<script>
    import ModalComponent from "./ConfirmDelete";

    export default {
        methods: {
            showModal() {
                this.$showModal(ModalComponent);
            }
        }
    };
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";

// End custom common variables

// Custom styles

</style>
