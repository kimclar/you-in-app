<template>

    <FlexboxLayout flexDirection="column" justifyContent="space-between">
    <ScrollView>
        <StackLayout width="700" height="400" class="p-10">
            <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>
            <Label text="Edit Circle" class="h2"></Label>

                    <StackLayout>
                        <Label :text="circles.name" class="h2 bold"></Label>
                        <template v-for="friends in circles.includedFriends">
                            <check-box :checked="isChecked" :text="friends" :key="friends"/>
                        </template>

                    </StackLayout>
        </StackLayout>
    </ScrollView>

            <Button width="200" class="h3" color="white"
                    backgroundColor="blue" text="Edit" @tap="sendRequest"></Button>
            <Button width="200" class="h3" color="white"
                    backgroundColor="red" text="Delete" @tap="sendRequest"></Button>


    </FlexboxLayout>
</template>

<script>
    export default {
        props: {
            circles: {
                type: Object,
                default: function () {
                    return {
                        name: "Name",
                        includedFriends: ["Friend1", "Friend2"]
                    }
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles
    .guests {
        text-decoration: underline;
        font-size: 20;
    }
</style>
