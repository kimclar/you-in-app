<template lang="html">
    <Page>
        <ActionBar>
            <GridLayout columns="*,2*,*" horizontalAlignment="right">
                <Label text="My Friends" col="1" class="action-label"></Label>
                <Image src="~/components/icons/addFriend.png" col="2" class="action-image"></Image>
            </GridLayout>
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
.action-image {
    width: 40;
    height: 40;
    vertical-align: center;
    horizontal-align: right;
}

.action-label {
    color: #ffffff;
    font-size: 24;
    font-weight: bold;
    vertical-align: center;
}

</style>
