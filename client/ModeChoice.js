import { Template } from 'meteor/templating';
import './main.html';

Template.ModeChoice.events({
    "click #STT" : function () { 
        Session.set("TakeTheShade", false);
        Session.set("SpillTheTea", true);
    },
    "click #TTS" : function() {
        Session.set("SpillTheTea", false);
        Session.set("TakeTheShade", true);
    }
});