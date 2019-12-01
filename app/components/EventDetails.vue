<template>
    <ScrollView>
    <StackLayout width="700" height="400" class="p-10">

        <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()" />
            <ListView for="eachEvent in events" height="900">
                <v-template>
                    <StackLayout>

                        <Label :text="eachEvent.title" class="h2 bold"></Label>
                        <Label :text="eachEvent.dateTime" class="h3 font-weight-bold"></Label>
                        <Label :text="eachEvent.location" class="h3 font-weight-bold"></Label>
                        <Label :text="eachEvent.details" class="h3 font-weight-bold"></Label>
                        <Label class="guests" text="Who's in?"></Label>
                        <Label :text="eachEvent.host[0].name" class="h3 font-weight-bold"></Label>
                        <Label :text="eachEvent.attendees[0]" class="h3 font-weight-bold"></Label>

                        <Button width="200" class="h3" color="white"
                                backgroundColor="blue" text="Count me In!" @tap="sendRequest"></Button>

                    </StackLayout>
                </v-template>
            </ListView>
    </StackLayout>
    </ScrollView>
</template>

<script>
   import EventData from './mockData/eventData.json'

    export default {
        data: () => {
            return {
                events: EventData
            };
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
