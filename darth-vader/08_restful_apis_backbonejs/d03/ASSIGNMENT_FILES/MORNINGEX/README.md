# More Public Data & API Help!
Chicago Public Data isn't the only public data available!
#### Check out: [Socrata](dev.socrata.com)

## AJAX!

```
$.ajax({
method: get,
url: "https://data.atf.gov/resource/37x6-x3cn.json?state=illinois",
dataType: 'json',
success:
  function(data){
  }
});
```

### Filters and Queries

Filter ex: ?state=illinois

Query example: ?$where=quantity>150
