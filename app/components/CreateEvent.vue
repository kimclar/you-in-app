<template>

    <StackLayout width="350" height="800" class="p-10">
      <GridLayout columns="*,2*,*", width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="New Event" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout height="10"></StackLayout>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label class="event-section" text="What?*"></Label>
          <TextField v-model="etitle" backgroundColor="white" class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="event-section" text="When?*"></Label>
          <TextField v-model="edateTime" backgroundColor="white" class="input" hint="[For Ex. January 01 2000, 10:00am]"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="event-section" text="Where?*"></Label>
          <TextField v-model="elocation" backgroundColor="white" class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="event-section" text="Who?*"></Label>
          <ListView for="circleName in myCircles" height="225">
            <v-template>
              <check-box :checked="isChecked" :text="circleName.name" textWrap="true"/>
            </v-template>
          </ListView>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="event-section" text="Details [Optional]"></Label>
          <TextField v-model="edetails" backgroundColor="white" class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <check-box :checked="isChecked" text="Allow your circles to share this event?" textWrap="true" @checkedChange="onCheckChange($event)"/>
        </StackLayout>

        <Button width="150" text="POST" backgroundColor="green" color="white"
                class="action-label" @tap="createEvent()"></Button>

      </StackLayout>
    </StackLayout>

</template>

<script>
  export default {
    data() {
      return {
        etitle: "",
        elocation: "",
        edateTime: "",
        eattendees:  ["Ricky"],
        edetails: "",
        eisSharable: false
      }
    },
    computed: {
      myCircles() {
        return this.$store.getters.circles;
      }
    },
    methods: {
        createEvent() {
            console.log("loaded");
            if (this.etitle.trim() === "" || this.elocation.trim()=== "" || this.edateTime.trim() === "") {
                alert({
                          title: "Event Creation Error",
                          message: "Please fill all required fields.",
                          okButtonText: "OK"
                      }).then(() => {
                    console.log("Alert dialog closed");
                });
            } else {
                this.$store.commit('addEvent', {title: this.etitle, location: this.elocation, dateTime: this.edateTime, host: {name: "Ricky", circles: "BFFs"}, attendees: this.eattendees, details: this.edetails, isSharable: this.eisSharable});
                this.$modal.close();
            }
        },
      onCheckChange(event) {
        this.eisSharable = event.value;
      }
    }
  }
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
  }
  .event-section {
    color: black;
    background-color: transparent;
    font-size: 18;
    font-weight: bold;
    vertical-align: left;
  }
</style>
