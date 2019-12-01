<template>
    <ScrollView>

        <StackLayout width="600" height="600" class="p-10">

            <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()" />


            <StackLayout class="form">

                    <SearchBar hint="Enter username" @textChange="onTextChanged"/>
                <<ListView for="friend in friends" height="900">
                    <v-template>
                        <Label :text="friend.username" textWrap="true"></Label>
                        <Button class="pull-right" width="80" text="Send"></Button>
                    </v-template>
            </ListView>

            </StackLayout>



        </StackLayout>
    </ScrollView>


</template>

<script>
    import friendsData from './mockData/friendsData.json';

    export default {
        data: () => {
            return {
                friends: friendsData
            };
        },
        methods:{
            onTextChanged(){
            }
        }
    }
</script>

