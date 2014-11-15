Template.Welcome.events({
  "keypress input.username": function (event) {
    var username = event.target.value

    Session.set('username', username)
  },
  "change .avatar-radio": function (event) {
    var avatar = 'avatar-' + $(event.target).attr('value')

    if (myDragDealer.getStep()[0] != $(event.target).attr('value')) {
      myDragDealer.setStep($(event.target).attr('value'), 0, true)
    }

    $('.welcome').attr('data-selected-avatar', avatar)
  }
});

Template.Welcome.helpers({
  username: function () {
    return Session.get('username')
  }
});

Template.Welcome.rendered = function(){
  window.myDragDealer = new Dragdealer('avatar-selector', {
    steps: 6,
    speed: 0.3,
    loose: true,
    requestAnimationFrame: true,
    callback: function () {
      $('#avatar-' + this.getStep()[0]).prop('checked', true).change()
    }
  });
};
