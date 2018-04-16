import { Template } from 'meteor/templating';
import './main.html';

Template.SpillTheTea.events({
    "click #Back" : function() {
        Session.set("SpillTheTea", false);
        Session.set("TakeTheShade", false);
    }
});