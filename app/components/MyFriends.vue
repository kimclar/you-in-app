<template lang="html">
    <Page>
        <ActionBar>
            <GridLayout columns="*,2*,*" horizontalAlignment="right">
                <Label text="My Friends" col="1" class="action-label"></Label>
                <Image src="~/components/icons/addFriend.png" col="2" class="action-image"></Image>
            </GridLayout>
        </ActionBar>

        <StackLayout>
            <Label text="Pending Requests" class="section-title"></Label>
            <ListView for="request in friendRequest">
                <v-template>
                    <GridLayout columns="3*,*,*" orientation="horizontal">
                        <Label text="request.fromUser" col="0" textWrap="true"></Label>
                        <Image src="~/components/icons/acceptRequest.png" col="1" class="request-action-image"></Image>
                        <Image src="~/components/icons/rejectRequest.png" col="2" class="request-action-image"></Image>
                    </GridLayout>
                </v-template>
            </ListView>
            <Label text="Friends" class="section-title"></Label>
            <TextField v-model="textFieldValue" hint="Search friend by nickname..."/>
            <ListView for="friend in friends">
                <v-template>
                    <StackLayout orientation="horizontal">
                        <Label :text="friend.nickname" textWrap="true"></Label>
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import friendsData from './mockData/friendsData.json';
    import friendRequestData from './mockData/friendRequestData.json';

    export default {
        data() {
            return {textFieldValue: "", textFieldValue: "",}
        },
        data: () => {
            return {
                friends: friendsData,
                friendRequest: friendRequestData
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

    .section-title {
        background-color: #CCCCCC;
        color: black;
        font-size: 20;
        font-weight: bold;

    }

    .request-action-image {
        width: 30;
        height: 30;
        vertical-align: center;
        horizontal-align: right;
    }

</style>
