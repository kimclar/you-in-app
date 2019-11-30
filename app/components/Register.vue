<template lang="html">
    <Page>
        <ActionBar>
                <Label text="You In?"></Label>
        </ActionBar>

            <StackLayout class="form">
                <Label class =" h2 title" text="Register"/>
                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Username or Email"></Label>
                    <TextField class="input"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Password"></Label>
                    <TextField class="input"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Confirm Password"></Label>
                    <TextField class="input"></TextField>
                </StackLayout>

                <Button text="Register" class="action-label" @tap="login"></Button>
                <Label color="red" text="Have an account already?" class="action-label" @tap="login"></Label>
            </StackLayout>
    </Page>
</template>

<script>

    import Login from "./Login";
    export default {
        data: () => {
            return {
                message: "All your Circles!"
            };
        },
        methods: {
            login() {
                console.log("Login In")
                this.$navigateTo(Login)
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
