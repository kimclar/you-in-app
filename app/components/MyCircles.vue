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

        <ListView for="eachCircle in circles" @itemTap="onItemTap">
            <v-template>
                <StackLayout orientation="horizontal">
                    <Label class="h2" :text="eachCircle.name"></Label>
                </StackLayout>
            </v-template>
        </ListView>
    </Page>
</template>


<style lang="scss" scoped>
    // Start custom common variables
    @import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables
    // Custom styles
</style>


<script>
    import CreateCircle from "./CreateCircle";
    import CircleDetails from "./CircleDetails";

    export default {
        computed: {
            circles() {
                return this.$store.getters.circles;
            }
        },
        methods: {
            onItemTap(args) {
                console.log("Open Event")
                const view = args.view;
                const page = view.page;
                const tappedItem = view.bindingContext;

                this.$showModal(CircleDetails, {
                    props: {
                        context: tappedItem,
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    }
                });
            },
            createCircle() {
                this.$showModal(CreateCircle);
            }
        }
    };
</script>
