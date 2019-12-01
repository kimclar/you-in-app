<template>
    <ScrollView>

        <StackLayout width="700" height="600" class="p-10">

            <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()" />


            <StackLayout class="form">

                <SearchBar hint="Enter username" @textChange="onTextChanged"/>
                <ListView for="eachUser in friends" height="900">
                <v-template>
                    <StackLayout>
                    <Label :text="eachUser.username" class="h3 font-weight-bold"></Label>
                    <Button class="h5 bg-primary pull-right" text="Send Request" @tap="sendRequest"></Button>
                    </StackLayout>
                </v-template>
            </ListView>

            </StackLayout>



        </StackLayout>
    </ScrollView>


</template>

<script>
    import userData from './mockData/userData.json';
    import friendData from'./mockData/friendsData.json';

    export default {
        data: () => {
            return {
                allUsers: userData,
                friends: friendData
            };
        },
        methods:{
            onTextChanged(){
            },
            sendRequest () {
                var dialogs = require("tns-core-modules/ui/dialogs");
                dialogs.alert({
                                  title: "",
                                  message: "Request Sent!",
                                  okButtonText: "OK"
                              })
            },
        }
    }
</script>

