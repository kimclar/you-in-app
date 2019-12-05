<template>

  <StackLayout width="350" height="550" class="p-10">
    <GridLayout columns="*,2*,*", width="700" height="40" backgroundColor=#3C5AFD>
      <Label :text="event.title" col="1" verticalAlignment="center" class="modal-title"></Label>
      <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
    </GridLayout>

    <StackLayout height="10"></StackLayout>

    <StackLayout class="form">
      <StackLayout class="input-field">
        <Label class="event-section" text="What?*"></Label>
        <TextField :text= "event.title" v-model="etitle" backgroundColor="white" class="input"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <Label class="event-section" text="When?*"></Label>
        <TextField backgroundColor="white" class="input" v-model="edateTime" :text= "event.dateTime"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <Label class="event-section" text="Where?*"></Label>
        <TextField backgroundColor="white" v-model="elocation" :text= "event.location" class="input"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <Label class="event-section" text="Details [Optional]"></Label>
        <TextField backgroundColor="white" v-model="edetails" :text= "event.details" class="input"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <check-box :checked="event.isSharable" text="Allow your circles to share this event?" textWrap="true" @checkedChange="onCheckChange($event)"/>
      </StackLayout>

      <Label class="guests" text="Who's in?"></Label>
        <ListView for="attendee in event.attendees" height="70">
      <Label :text="attendee" :key="attendee" class="input"></Label>
        </ListView>

      <GridLayout columns="5*,5*" height="40">
        <Button width="150" col="0" color="white" backgroundColor="green" text="Save" @tap="saveRequest" />
        <Button width="150" col="1" color="white" backgroundColor="#e60000" text="Delete" @tap="deleteEvent(event)" />
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
    data() {
      return {
        etitle: this.event.title,
        elocation: this.event.location,
        edateTime: this.event.dateTime,
        eattendees:  this.event.attendees,
        hostName: this.event.host.name,
        hostCircles: this.event.host.circles,
        edetails: this.event.details,
        eisSharable: this.event.isSharable,
        eid: this.event.id
      }
    },
    methods: {
      deleteEvent(passEvent){
        this.$showModal(ConfirmDeleteEvent, {
          props: {
            event: passEvent,
            animated: true,
            transition: {
              name: "slide",
              duration: 200,
              curve: "ease"
            }
          }
        })
        this.$modal.close();
      },
      onCheckChange(event) {
        this.eisSharable = event.value;
      },
      saveRequest(){
        alert({
                title: "",
                message: "Your event has been saved!",
                okButtonText: "OK"
              }).then(() => {
          console.log("Alert dialog closed");
        });
        this.$store.commit('editEvent', {id: this.eid , title: this.etitle, location: this.elocation, dateTime: this.edateTime, host: {name: this.hostName, circles: this.hostCircles}, attendees: this.eattendees, details: this.edetails, isSharable: this.eisSharable}, this.eid);
        this.$modal.close();
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
  .guests {
    text-decoration: underline;
    font-weight: bold;
    font-size: 15;
    padding-top: 5;
    padding-bottom: 5;
  }
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
    font-weight: bold;
    font-size: 15;
    vertical-align: left;
  }
  .input {
    font-size: 15;
  }
</style>
