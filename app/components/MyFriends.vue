<template lang="html">
    <Page>
        <ActionBar>
            <Label text="My Friends"></Label>
        </ActionBar>

        <ListView for="friend in friends">
            <v-template>
                <StackLayout orientation="horizontal">
                    <Label :text="friend.nickname" textWrap="true"></Label>
                </StackLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
import friendsData from './mockData/friendsData.json';

export default {
    data: () => {
        return {
            friends: friendsData
        };
    },
/*    methods: {
        onItemTap (args) {
            const view = args.view;
            const page = view.page;
            const tappedItem = view.bindingContext;

            this.$navigateTo(ItemDetails, {
                props: {
                    context: tappedItem,
                    animated: true,
                    transition: {
                        name: "slide",
                        duration: 200,
                        curve: "ease"
                    }}});
        }
    }*/
}
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>
