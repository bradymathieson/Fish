import { Template } from 'meteor/templating';

import './main.html';

// Helpers
function LoginWithInstagram() {
  console.log("Attempting to login with Instagram...");

  Meteor.loginWithInstagram(function(error) {
    if (error) {
      console.log("Login failed : ", error);
    } else {
      console.log("Successfully logged in : ", Meteor.user());
    }
  })
}

Template.LoginWithInstagram.events({
  "click #login": function() {
    LoginWithInstagram();
  }
})