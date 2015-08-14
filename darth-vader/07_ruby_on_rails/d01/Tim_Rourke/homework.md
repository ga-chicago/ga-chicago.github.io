# Ugh, Unicorn is a PIA to configure

Took me forever, but I discovered that my session was being reset. Turns out the reverse proxy with nginx invalidated the domain of my cookie, so I had to use Rack's more specific cookie configuration method to set explicit path, domain, expire, etc. Will need to revise for proper, safe usage, etc.

For now, however, seems to work. Felt surprisingly productive working in nano on a remote server. Ugly way to work, but it reminds me how important it will be for me in the long run to have a box running Ubuntu at home to replicate the server environment as exactly as possible. 

Ugh.

http://104.236.8.122/