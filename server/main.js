import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  
});

Meteor.methods({
    "UpdateDragName" : function(name) {
        QueenInfo.update({
            userId: Meteor.userId
        }, {
            $set : {
                DragName: name
            }
        });
    }
});
