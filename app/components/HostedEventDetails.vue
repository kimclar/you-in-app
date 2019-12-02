<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between">
    <ScrollView>
      <StackLayout width="700" height="400" class="p-10">
        <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>
        <StackLayout>
          <Label :text="event.title" class="h2 bold"></Label>
          <Label :text="event.dateTime" class="h3 font-weight-bold"></Label>
          <Label :text="event.location" class="h3 font-weight-bold"></Label>
          <Label :text="event.details" class="h3 font-weight-bold"></Label>
          <Label class="guests" text="Who's in?"></Label>
          <Label text="You" class="h3 font-weight-bold"></Label>
          <Label v-for="attendee in event.attendees" :text="attendee" :key="attendee" class="h3 font-weight-bold"></Label>
        </StackLayout>
      </StackLayout>
    </ScrollView>

    <Button width="200" class="h3" color="white" backgroundColor="blue" text="Edit" @tap="sendRequest" />
    <Button width="200" class="h3" color="white" backgroundColor="#8b0000" text="Delete" @tap="sendRequest" />
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
</style>
