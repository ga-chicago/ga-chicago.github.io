// 7. Vanilla Selectors
//
// Create a vanilla Javascript selector to select the following:
// <section id='vanilla'>I really like artificial vanilla flavour</section>
// Console.log the interior content of this tag.

<section id='vanilla'>I really like artificial vanilla flavour</section>

<script>
function vanilla(){
  console.log(document.getElementById('vanilla').innerHTML)
};
vanilla();
</script>
