<template>

    <FlexboxLayout flexDirection="column" justifyContent="space-between">

    <ScrollView>
        <StackLayout width="700" height="400" class="p-10">
            <GridLayout columns="*,3*,*", width="700" height="40" backgroundColor=#3C5AFD>
                <Label text="Circle Details" col="1" verticalAlignment="center" class="modal-title"></Label>
                <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
            </GridLayout>

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

    .modal-title {
        color: white;
        background-color: #3C5AFD;
        font-size: 24;
        font-weight: bold;
        vertical-align: center;
    }
</style>
