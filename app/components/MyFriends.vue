<template lang="html">
    <Page>
        <ActionBar>
            <Label text="My Friends"></Label>
        </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf500;"></Label>
            <Label class="page__content-placeholder" :text="message"></Label>
        </GridLayout>
    </Page>
</template>

<script>
export default {
    data: () => {
        return {
            message: "All your Friends!"
        };
    }
}
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>
