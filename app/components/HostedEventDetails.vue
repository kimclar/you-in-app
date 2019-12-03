<template>

  <StackLayout width="350" height="450" class="p-10">
    <GridLayout columns="*,2*,*", width="700" height="40" backgroundColor=#3C5AFD>
      <Label :text="event.title" col="1" verticalAlignment="center" class="modal-title"></Label>
      <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
    </GridLayout>

    <StackLayout height="10"></StackLayout>

    <StackLayout class="form">
      <StackLayout class="input-field">
        <Label class="event-section" text="What?*"></Label>
        <TextField :hint= "event.title" backgroundColor="white" class="input"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <Label class="event-section" text="When?*"></Label>
        <TextField backgroundColor="white" class="input" :hint= "event.dateTime"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <Label class="event-section" text="Where?*"></Label>
        <TextField backgroundColor="white" :hint= "event.location" class="input"></TextField>
      </StackLayout>

      <!--<StackLayout class="input-field">
        <Label class="event-section" text="Who?*"></Label>
        <ListView for="circleName in myCircles" height="225">
          <v-template>
            <check-box :checked="isChecked" :text="circleName.name" textWrap="true"/>
          </v-template>
        </ListView>
      </StackLayout>-->

      <StackLayout class="input-field">
        <Label class="event-section" text="Details [Optional]"></Label>
        <TextField backgroundColor="white" :hint= "event.details" class="input"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <check-box :checked="event.isSharable" text="Allow your circles to share this event?" textWrap="true"/>
      </StackLayout>

      <GridLayout columns="5*,5*" height="40">
        <Button width="150" col="0" color="white" backgroundColor="green" text="Save" @tap="sendRequest" />
        <Button width="150" col="1" color="white" backgroundColor="#e60000" text="Delete" @tap="deleteEvent" />
      </GridLayout>

    </StackLayout>
  </StackLayout>

</template>

<script>
  import ConfirmDeleteEvent from "./ConfirmDeleteEvent";

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
    },
    methods: {
      deleteEvent(){
        this.$showModal(ConfirmDeleteEvent)
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
  .modal-title {
    color: white;
    background-color: #3C5AFD;
    font-size: 24;
    font-weight: bold;
    vertical-align: center;
    text-align: left;
  }
  .event-section {
    color: black;
    background-color: transparent;
    font-size: 18;
    font-weight: bold;
    vertical-align: left;
  }
  .input {
    font-size: 16;
  }
</style>
