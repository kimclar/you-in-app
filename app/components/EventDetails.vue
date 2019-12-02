<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between">
    <ScrollView>
      <StackLayout width="700" height="400" class="p-10">
        <GridLayout columns="5*,*", width="700" height="40" backgroundColor=#3C5AFD>
          <Label :text="event.title" col="0" verticalAlignment="center" horizontalAlignment="center" class="modal-title"></Label>
          <Label col="1" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
        </GridLayout>
        <StackLayout height="10"></StackLayout>
        <StackLayout>
          <Label :text="event.dateTime" class="h3 font-weight-bold"></Label>
          <Label :text="event.location" class="h3 font-weight-bold"></Label>
          <Label :text="event.details" class="h3 font-weight-bold"></Label>
          <Label class="guests" text="Who's in?"></Label>
          <Label :text="event.host.name + ' (host)'" class="h3 font-weight-bold"></Label>
          <Label v-for="attendee in event.attendees" :text="attendee" :key="attendee" class="h3 font-weight-bold"></Label>
        </StackLayout>
      </StackLayout>
    </ScrollView>

    <Button width="200" class="h3" color="white"
            backgroundColor="#30CE91" text="Count me In!" @tap="sendRequest"></Button>
  </FlexboxLayout>
</template>

<script>
  export default {
    props: {
      event: {
        type: Object,
        default: function () {
          return {
            title: "Title",
            location: "Location",
            dateTime: "January 01 2000, 12:00am",
            host: [{name: "HostName", circles: "everyone"}],
            attendees: ["Attendee1", "Attendee2", "Attendee3", "Attendee4"],
            details: "Optional Details",
            isSharable: false
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
