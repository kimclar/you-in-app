<template>
    <StackLayout width="300" height="200" backgroundColor="white" class="p-10">
        <StackLayout height="100">
            <StackLayout height="30"></StackLayout>
            <Label fontSize="20" text="Are you sure you want to delete this friend?" textWrap="true" textAlignment="center"/>
        </StackLayout>
        <GridLayout columns="*, *">
            <Button col="0" width="100" backgroundColor="#e60000" color="white"
                    class="btn btn-outline" text="YES" @tap="confirmDelete(friend)"/>
            <Button col="1" width="100" backgroundColor="#009933" color="white"
                    class="btn btn-outline" text="NO" @tap="$modal.close()"/>
        </GridLayout>
    </StackLayout>
</template>

<script>
    export default {
        props: {
            friend: {
                type: Object,
                default: function () {
                    return {
                        username: "username",
                        nickname: "nickname",
                        circles: "circles"
                    }
                }
            }
        },
        methods: {
            confirmDelete(friend){
                this.$store.commit('removeFriend', friend.username);
                this.$modal.close();
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
