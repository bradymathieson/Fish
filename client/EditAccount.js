import { Template } from 'meteor/templating';
import './main.html';

Template.EditAccount.helpers({
    "DragName" : function() {
        return QueenInfo.findOne({
            userId: Meteor.userId
        }).DragName;
    }
});

Template.EditAccount.events({
    "submit form" : function(e) {
        e.preventDefault();
        let NameInput = e.target.NewName.value;
        Meteor.call("UpdateDragName", NameInput, function(error) {
            if (error) {
                console.log("Could not update drag name :", error);
            }
        });
        Session.set("EditAccount", false);
    }
})