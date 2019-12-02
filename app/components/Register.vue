
<template lang="html">
    <Page>
        <ActionBar>
            <Label text="You In?" class="action-label"></Label>
        </ActionBar>

        <card-view margin="50" elevation="40" height="400" radius="5" class="signIn">
            <StackLayout class="form p-20">
            <Label class ="title" text="Register"/>
                <Label></Label>
            <StackLayout class="input-field">
                <Label class="inputLabel" text="Username or Email*"></Label>
                <TextField class="input"></TextField>
            </StackLayout>

            <StackLayout class="input-field">
                <Label class="inputLabel" text="Password*"></Label>
                <TextField class="input"></TextField>
            </StackLayout>

            <StackLayout class="input-field">
                <Label class="inputLabel" text="Confirm Password*"></Label>
                <TextField class="input"></TextField>
            </StackLayout>

            <Button text="Register" color="white" backgroundColor="blue" class="button-label" @tap="login"></Button>
            <Label color="red" text="Have an account already?" class="button-label" @tap="login"></Label>
        </StackLayout>
        </card-view>
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
                console.log("Login In");
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

    .action-label {
        color: #ffffff;
        font-size: 20;
        font-weight: bold;
        vertical-align: center;
    }

    .title {
        text-shadow: 2px 2px;
        text-align: center;
        font-size: 20;
        font-weight: bold;
    }

    .button-label {
        font-size: 14;
        font-weight: bold;
    }

    .inputLabel {
        font-size: 14;
    }

</style>
