<template>
    <Page>
        <ActionBar>
            <GridLayout columns="*,2*,*" horizontalAlignment="right">
                <Label text="My Circles" col="1" class="action-label"></Label>
                <StackLayout col="2" @tap="createCircle">
                    <Label text.decode="&#xf500;" col="2" class="action-label icon fas"></Label>
                </StackLayout>
            </GridLayout>
        </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf0c0;"></Label>
            <Label class="page__content-placeholder" :text="message"></Label>
        </GridLayout>
    </Page>
</template>

<script>
    import CreateCircle from "./CreateCircle";
    import ModalComponent from "./CreateEvent";
    export default {
        data: () => {
            return {
                message: "All your Circles!"
            };
        },
        methods: {
            createCircle() {
                console.log("Create circle")
                this.$showModal(CreateCircle);
            }
        }
    }
</script>

<style lang="scss" scoped>
    // Start custom common variables
    @import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables
    // Custom styles
</style>
