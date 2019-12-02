<template>
    <Page>
        <ActionBar>
            <GridLayout columns="*,2*,*" horizontalAlignment="right">
                <Label text="My Circles!" col="1" class="action-label"></Label>
                
                <StackLayout col="2" @tap="createCircle">
                    <Label text.decode="&#xf500;" col="2" class="action-label icon fas"></Label>
                </StackLayout>
                
            </GridLayout>
        </ActionBar>

        <StackLayout>
        <Button text="Add Cricles" @tap="onTap" class="btn btn-primary"></Button>

            <ListView for="item in itemsObs">
                <v-template>
                    <Label :text="item" />
                </v-template>
            </ListView>
        </StackLayout>
<!--
        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf0c0;"></Label>
            <Label class="page__content-placeholder" :text="message"></Label>
        </GridLayout>
        -->
    </Page>
</template>

<script>
    import CreateCircle from "./CreateCircle";
/*
    export default {
        data: () => {
            return {
                message: "All your Circles!"
            };
        },
        methods: {
            createCircle() {
                this.$showModal(CreateCircle);
            }
        }
    }

*/

    import { ObservableArray } from "tns-core-modules/data/observable-array";

    export default {
        data() {
            return {
                counter: 1,
                itemsObs: new ObservableArray(["All your Circles!"])
            };
        },

        methods: {

            createCircle() {
                this.$showModal(CreateCircle);
            },

            onTap() {
                const newItem = "Circle " + this.counter++;
                this.itemsObs.push(newItem);
            }
        }
    };


</script>

<style lang="scss" scoped>
    // Start custom common variables
    @import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables
    // Custom styles
    Button {
        color: black;
    }
   
</style>
