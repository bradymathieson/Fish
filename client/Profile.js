import { Template } from 'meteor/templating';
import './main.html';

Template.ProfileInfo.helpers({
    "DragName" : function() {
        return QueenInfo.findOne({
            userId: Meteor.userId
        }).DragName;
    },
    "PictureUrl" : function() {
        return Meteor.user().services.instagram.profile_picture;
    }
});

Template.ProfileInfo.events({
    "click #EditAccount" : function() {
        Session.set("EditAccount", true);
    }
});