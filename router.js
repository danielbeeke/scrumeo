Router.route('/', function () {
  this.render('Home', {});
});

Router.route('/welcome', function () {
  this.render('Welcome', {});
});

