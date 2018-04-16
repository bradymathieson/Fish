import { Template } from 'meteor/templating';
import './main.html';

Template.TakeTheShade.events({
    "click #Back" : function() {
        Session.set("SpillTheTea", false);
        Session.set("TakeTheShade", false);
        Session.set("EditAccount", false);
    }
});