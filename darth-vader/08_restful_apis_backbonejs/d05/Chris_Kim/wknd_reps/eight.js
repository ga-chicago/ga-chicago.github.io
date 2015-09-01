// 8. jQuery Selectors
//
// Create a jQuery Javascript selector to select the following:
// <article id='strawberry'>I really like strawberry milkshakes from McDonalds!</article>
// Console.log the interior content of this tag.


<article id='strawberry'>I really like strawberry milkshakes from McDonalds!</article>

<script>
$(document).ready(function(){
  console.log($('#strawberry').html());
});
</script>
