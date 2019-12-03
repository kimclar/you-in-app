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
          <GridLayout columns="3*,8*" height="50">
            <Label col="0" text="Details" class="editLabel"></Label>
            <Label col="1" :text="event.details" textWrap="true" class="h3 font-weight-bold"></Label>
          </GridLayout>
          <Label class="guests" text="Who's in?"></Label>
          <Label :text="event.host.name + ' (host)'" fontSize="14"></Label>
          <Label v-for="attendee in event.attendees" :text="attendee" :key="attendee" class="h3 font-weight-bold"></Label>
        </StackLayout>
      </StackLayout>


    <Button v-if="attending" width="200" class="h3" color="white"
            backgroundColor="#cd5c5c" text="Count me Out!" @tap="tapLeave(event.title)"></Button>
    <Button v-else width="200" class="h3" color="white"
            backgroundColor="#30CE91" text="Count me In!" @tap="tapJoin(event.title)"></Button>
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
    },
    data() {
      return {
        me: "Ricky",
        attending: (this.event.attendees.indexOf(this.me) > -1)
      }
    },
    methods: {
      tapJoin(eventName){
        this.$store.commit('joinEvent', eventName, this.me)
      },
      tapLeave(eventName){
        this.$store.commit('leaveEvent', eventName, this.me)
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
</style>
