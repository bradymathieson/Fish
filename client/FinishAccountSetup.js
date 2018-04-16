import { Template } from 'meteor/templating';
import './main.html';

Template.FinishAccountSetup.events({
    "submit form" : function(e) {
        e.preventDefault();
        let NameInput = e.target.DNInput.value;
        QueenInfo.insert({
            userId: Meteor.userId,
            DragName: NameInput
        });
        console.log("Successfully added drag name :", NameInput);
    }
});