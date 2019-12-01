<template>
    <ScrollView>
            <StackLayout width="300" height="400" class="p-10">

            <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()" />


            <StackLayout class="form">

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Circle Name:"></Label>
                    <TextField class="input"></TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <Label class="inputLabel" text="Who's In?"></Label>
                    <TextField class="input"></TextField>
                </StackLayout>

                <Button text="Save" color="white" backgroundColor="green" class="action-label" @tap="myCircles"></Button>
            </StackLayout>

        </StackLayout>
    </ScrollView>


</template>

<script>
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
