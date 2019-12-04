<template>

  <FlexboxLayout flexDirection="column" justifyContent="space-between">

      <StackLayout width="380" height="400" class="p-10">
        <GridLayout columns="5*,*", width="700" height="40" backgroundColor=#3C5AFD>
          <Label :text="event.title" col="0" verticalAlignment="center" horizontalAlignment="center" class="modal-title"></Label>
          <Label col="1" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
        </GridLayout>
        <StackLayout height="10"></StackLayout>
        <!--<StackLayout>
          <Label :text="event.dateTime" class="infoText"></Label>
          <Label :text="event.location" class="infoText"></Label>
          <Label :text="event.details" class="infoText"></Label>
          <Label class="guests" text="Who's in?"></Label>
          <Label :text="event.host.name + ' (host)'" class="infoText"></Label>
          <Label v-for="attendee in event.attendees" :text="attendee" :key="attendee" class="infoText"></Label>
        </StackLayout>-->
        <StackLayout>
          <GridLayout columns="3*,8*" height="40">
            <Label col="0" text="Title" class="editLabel"></Label>
            <Label col="1" :text="event.title" class="h3 font-weight-bold"></Label>
          </GridLayout>
          <GridLayout columns="3*,8*" height="40">
            <Label col="0" text="Date & Time" class="editLabel"></Label>
            <Label col="1" :text="event.dateTime" class="h3 font-weight-bold"></Label>
          </GridLayout>
          <GridLayout columns="3*,8*" height="40">
            <Label col="0" text="Location" class="editLabel"></Label>
            <Label col="1" :text="event.location" class="h3 font-weight-bold"></Label>
          </GridLayout>
          <GridLayout columns="3*,8*" height="60">
            <Label col="0" text="Details" class="editLabel"></Label>
            <Label col="1" :text="event.details" class="h3 font-weight-bold" textWrap="true"></Label>
          </GridLayout>
          <Label class="guests" text="Who's in?"></Label>
          <Label :text="event.host.name + ' (host)'" class="host"></Label>
          <Label v-for="attendee in event.attendees" :text="attendee" :key="attendee" class="h3 font-weight-bold"></Label>
        </StackLayout>
      </StackLayout>


    <Button v-if="isAttending" width="200" class="h3" color="white"
            backgroundColor="#cd5c5c" text="Count me Out!" @tap="tapLeave(event.title)"></Button>
    <Button v-else width="200" class="h3" color="white"
            backgroundColor="#30CE91" text="Count me In!" @tap="tapJoin(event.title)"></Button>
  </FlexboxLayout>
</template>

<script>
  import EventDetails from "./EventDetails";

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
        me: "Ricky",
      }
    },
    computed: {
      isAttending() {
        return this.event.attendees.includes(this.me);
      }
    },
    methods: {
      tapJoin(eventName){
        this.$store.commit('joinEvent', eventName)
        this.$store.commit('addEvent', {title: "r3fr3sh3r", location: "", dateTime: "", host: {name: "", circles: ""}, attendees: [], details: "", isSharable: false});
        this.$store.commit('removeEvent', "r3fr3sh3r");
        this.$modal.close();
      },
      tapLeave(eventName){
        this.$store.commit('leaveEvent', eventName, this.me);
        this.$modal.close()
        this.$store.commit('addEvent', {title: "r3fr3sh3r", location: "", dateTime: "", host: {name: "", circles: ""}, attendees: [], details: "", isSharable: false});
        this.$store.commit('removeEvent', "r3fr3sh3r");
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
    font-weight: bold;
    font-size: 20;
    padding-top: 5;
    padding-bottom: 5;

  }
  .modal-title {
    color: white;
    background-color: #3C5AFD;
    font-size: 24;
    font-weight: bold;
    vertical-align: center;
    padding-left: 4;
  }
  .infoText {
    font-size: 16;
    padding-top: 5;
    padding-bottom: 5;
  }

  .editLabel {
    padding-right: 4;
    color: darkblue;
    text-align: right;
    font-size: 14;
    font-weight: bold;
  }

  .host {
    font-size: 15;
    color: darkblue;
    font-weight: bold;
  }
</style>
