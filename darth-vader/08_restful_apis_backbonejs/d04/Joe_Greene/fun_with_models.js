<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>fun_with_models</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min.js"></script>
    <script type="text/javascript" src="/scripts/app.js"></script>
    <link rel="stylesheet" href="/style/main.css">
  </head>
  <body>
      <script type="text/javascript">

        var madisonApp = madisonApp || {};

        madisonApp.madisonModel = Backbone.Model.extend({
            url: 'https://data.cityofmadison.com/resource/4ng4-nf3c.json',
            initialize: function(){
              console.log('the model is ready');
              this.on('change', function(event) {
                console.log(this.attributes);
                console.log('I hope this works!');

     });
   }

 });

 var madison = new madisonApp.madisonModel();
 movie.fetch();

</script>

  </body>
</html>
