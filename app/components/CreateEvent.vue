<template>
    <ScrollView>

        <StackLayout width="400" height="500" backgroundColor="white" class="p-10">

        <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()" />


                <StackLayout class="form">

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="What?"></Label>
                    <TextField backgroundColor="white" class="input"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="When?"></Label>
                    <TextField backgroundColor="white" class="input"></TextField>
                    <!--<DatePicker class="date-picker"></DatePicker>
                    <TimePicker class="date-picker"></TimePicker>-->
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Where?"></Label>
                    <TextField backgroundColor="white" class="input"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Who?"></Label>
                    <TextField backgroundColor="white" class="input"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Details [Optional]"></Label>
                    <TextField backgroundColor="white" class="input"></TextField>
                </StackLayout>


                <Button width ="150" text="POST" backgroundColor="green" color="white"
                        class="action-label" @tap="myEvents"></Button>

            </StackLayout>



    </StackLayout>
    </ScrollView>


</template>

<script>
    import HostedEvents from "./HostedEvents";

    export default {
        data() {
            return {};
        },
        methods:{
            myCircles(){
            }
        }
    }
</script>

