FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('sampleLayout', { header: "header", content: "home", footer: "footer" });
  }
});
