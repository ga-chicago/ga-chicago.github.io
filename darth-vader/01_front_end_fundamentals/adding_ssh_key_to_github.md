
## Adding an SSH Key to Github

1. First, we need a key. Let's generate one in whatever directory you're currently in: `ssh-keygen -t rsa -b 4096 -C "email_you_use_for_github@example.com"`
2. When asked, give this file a name. Let's call it `your-github-username`.
3. You don't need to add a passphrase if you don't intend on sharing this file.
4. Now we need to tell our Mac to store our newly created SSH key. `eval "$(ssh-agent -s)"`.
5. Next, we'll add our new SSH Key: `ssh-add ~/.ssh/your-github-username` (the file you created in **Step 2**).
6. It is time for us to copy the new key to the keyboard! Let's do so using `pbcopy < your-github-username.pub` Alternatively, you can just open the file using your handy-dandy text editor and copy the contents (however you should be careful to avoid new lines/whitespace).
7. Browse to https://github.com/settings/ssh
8. Select "Add new SSH Key"
9. Give it a title. 
10. Copy the contents of your `*.pub` file (what you used to copy with `pbcopy`.
11. Attempt to clone and then push to a repository using ssh!

