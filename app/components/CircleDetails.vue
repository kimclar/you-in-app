<template>

    <FlexboxLayout flexDirection="column" justifyContent="space-between">

        <StackLayout width="300" height="400" class="p-10">
            <GridLayout columns="*,3*,*", width="700" height="40" backgroundColor=#3C5AFD>
                <Label text="Circle Details" col="1" verticalAlignment="center" class="modal-title"></Label>
                <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
            </GridLayout>

                    <StackLayout>
                        <Label class="circleList" text="Circle name:"></Label>
                        <TextField :hint="circle.name" class="infoText"></TextField>
                        <Label class="circleList" text="Who's in:"></Label>
                        <template v-for="i in friends">
                            <template v-for="j in circle.includedFriends">
                                <template v-if="i.nickname == j">
                                    <checkbox checked="true" :text="i.nickname" class="infoText"/>
                                </template>
                                <template v-else>
                                    <checkbox :text="i.nickname" class="infoText"/>
                                </template>
                            </template>
                        </template>
                        <!--<template v-for="friends in circle.includedFriends">
                            <Label :text="friends" class="infoText"/>
                        </template>-->

                    </StackLayout>
        </StackLayout>

            <Button width="200" class="h3" color="white"
                    backgroundColor="green" text="Save" @tap="sendRequest"></Button>
            <Button width="200" class="h3" color="white"
                    backgroundColor="red" text="Delete" @tap="deleteCircle"></Button>


    </FlexboxLayout>
</template>

<script>
    import ConfirmDeleteCircle from "./ConfirmDeleteCircle";

    export default {
        computed: {
            friends() {
                return this.$store.getters.friends;
            }
        },
        props: {
            circle: {
                type: Object,
                default: function () {
                    return {
                        name: "Name",
                        includedFriends: ["Friend1", "Friend2","Friend3","Friend4"]
                    }
                }
            }
        },
        methods: {
            deleteCircle(){
                this.$showModal(ConfirmDeleteCircle)
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

    .circleList {
        padding-top: 8;
        text-decoration: underline;
        font-weight: bold;
        font-size: 18;
    }

    .infoText {
        color: voilet;
        font-size: 16;
        padding-top: 4;
    }
</style>
