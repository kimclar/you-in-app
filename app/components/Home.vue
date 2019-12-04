<template>
  <Page>
    <ActionBar>
      <GridLayout columns="*,2*,*" horizontalAlignment="right">
        <Label text="Home" col="1" class="action-label"></Label>
        <StackLayout col="2" @tap="signout">
          <Label text.decode="&#xf011;" col="2" class="icon-label icon fas"></Label>
        </StackLayout>
      </GridLayout>
    </ActionBar>

    <ListView for="event in othersEvents" @itemTap="onItemTap">
      <v-template if="event.isAttending">
       <card-view class="attendingCard" margin="10" elevation="40" radius="5">
         <StackLayout>
           <label class="listItems" :text="event.title"></label>
           <GridLayout columns="*,*" horizontalAlignment="right">
             <Label col="0" class="secondaryListItems" :text="event.dateTime"></Label>
           <Label col="1" class="secondaryListItems pull-right" :text="event.attendees[0]+' + '+ event.attendees.length+' others'"></Label>
           </GridLayout>
         </StackLayout>
       </card-view>
      </v-template>
      <v-template>
        <card-view margin="10" elevation="40" radius="5">
          <StackLayout>
            <label class="listItems" :text="event.title"></label>
            <GridLayout columns="*,*" horizontalAlignment="right">
              <Label col="0" class="secondaryListItems" :text="event.dateTime"></Label>
              <Label col="1" class="secondaryListItems pull-right" :text="event.attendees[0]+' + '+ event.attendees.length+' others'"></Label>
            </GridLayout>
          </StackLayout>
        </card-view>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
  import EventDetails from "./EventDetails";
  import Login from "./Login";

  export default {
    computed: {
      othersEvents() {
        let otherEventsData = this.$store.getters.othersEvents;
        let i;
        for (i = 0; i < otherEventsData.length; i++) {
          let event = otherEventsData[i];
          event.isAttending = event.attendees.includes("Ricky");
        }
        return otherEventsData;
      }
    },
    methods: {
      checkAttending(eventAttendees){
        return (eventAttendees.indexOf("Ricky") > -1)
      },
      onItemTap(args) {
        console.log("Open Event")
        const view = args.view;
        const tappedItem = view.bindingContext;

        this.$showModal(EventDetails, {
          props: {
            event: tappedItem,
            animated: true,
            transition: {
              name: "slide",
              duration: 200,
              curve: "ease"
            }
          }
        });
      },
      signout() {
        this.$navigateTo(Login)
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";

  .action-label {
    color: #ffffff;
    font-size: 20;
    font-weight: bold;
    vertical-align: center;
  }

  .icon-label {
    color: #ffffff;
    font-size: 20;
    font-weight: bold;
    vertical-align: center;
    padding-right: 15;
  }

  .listItems {
    font-size: 18;
    font-weight: bold;
  }

  .secondaryListItems {
      font-size: 14;
    color: indigo;
  }
  .attendingCard {
    background-color: #87cefa;
  }

</style>
