import { Template } from 'meteor/templating';
import './main.html';

Template.Logout.events({
    "click #logout" : function() {
        Meteor.logout();
        console.log("Logging out of : ", Meteor.user());
    }
});