<template>
    <ScrollView>
        <StackLayout width="700" height="400" class="p-10">
            <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>
            <Label text="Edit Circle" class="h2"></Label>

            <ListView for="eachCircle in circles" height="900">
                <v-template>
                    <StackLayout>
                        <Label :text="eachCircle.name" class="h2 bold"></Label>
                        <template v-for="i in eachCircle.includedFriends">
                            <check-box :checked="isChecked" :text="i" textWrap="true"/>
                        </template>

                    </StackLayout>
                </v-template>
            </ListView>

            <Button width="200" class="h3" color="white"
                    backgroundColor="blue" text="Save" @tap="sendRequest"></Button>
            <Button width="200" class="h3" color="white"
                    backgroundColor="red" text="Delete" @tap="sendRequest"></Button>
        </StackLayout>
    </ScrollView>
</template>

<script>
    export default {
        computed: {
            circles() {
                return this.$store.getters.circles;
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
