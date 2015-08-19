# API Homework

## API \#1: MLB Player Stats
[Link to API source on GitHub](https://github.com/swimclan/RESTfulMLB)

This API allows users to access Major League Baseball players stats and creating new and updating existing players.  It supports the following methods:

- GET - "/api/players" To access all players in the database
- GET - "/api/players/<id>" to access access any single player with the passed in id
- POST - "/api/players" to post a new player with the keys [name, number, batting_average, home_runs, etc, etc]
- PATCH - "/api/players" to patch an update to any single player.  The API supports changes to single fields or the entire listing
- DELETE - "/api/players/<id>" to delete a player record for the given id

## API \#2: Bands & Musicians Directory
[Link to API source on GitHub](https://github.com/swimclan/RESTfulBands)

This API allows users to access a listing of bands and the musicians that are in those bands.  It supports adding/updating/deleting new/existing bands/musicians.  The following methods are supported:

- GET - "/api/bands" To access all bands in the database including their respective musician members
- GET - "/api/bands/<id>" to access access any single band with the passed in id
- POST - "/api/bands" to post a new band with the keys [name, genre]
- POST - "/api/musicians" to post a new musician with the keys: [name, instrument, favorite_drug, band_id (the id of the band they are a member of)]
- PATCH - "/api/bands" to patch an update to any single band.  The API supports changes to single fields or the entire band listing
- PATCH - "/api/musicians" to patch an update to any single musician.  The API supports changes to single fields or the entire musician listing
- DELETE - "/api/bands/<id>" to delete a band record for the given id
- DELETE - "/api/musicians/<id>" to delete a musician record for the given id
