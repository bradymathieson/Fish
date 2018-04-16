import { Template } from 'meteor/templating';
import './main.html';

Template.Main.onCreated(function (){
    Session.set("SpillTheTea", false);
    Session.set("TakeTheShade", false);
    Session.set("EditAccount", false);
});

Template.Main.helpers({
    "NeedMoreInfo" : function() {
        return !QueenInfo.find({
            userId: Meteor.userId
        }).count();
    },
    "SpillTheTeaEnabled" : function() {
        return Session.get("SpillTheTea");
    },
    "TakeTheShadeEnabled" : function() {
        return Session.get("TakeTheShade");
    },
    "EditAccountEnabled" : function() {
        return Session.get("EditAccount");
    }
});