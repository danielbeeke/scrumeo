// Welcome page.
if (Session.get("username") == '') {
  Router.go('/welcome');
}
