# Static Shortener
Link shortener for static sites built using GitHub Gist

## How to setup
1. Create a gist on GitHub like [this example](https://gist.github.com/tommarmstrong/99eaaed67a9aee61c0fb)
1. Clone the repo into your static site directory
1. Name the directory what you want to have in the path of your short URIs or setup up routing (eg. mine is named ```l``` so that I can send people to http://tomma.so/l#link)
1. Edit the app.js the app.js file
    1. Set gistID to the id of the gist (the last part of the URL when viewing the gist)
    1. Set defaultURL to the url you want to redirect people to when no link is specified
1. Deploy your site

## How to use
Add new links by editing your gist.  Each ```link``` is an object within the ```links``` object.  The key is the short text you want in the URI and the link object has one property which is the URI of the original link.  

Once you've added a new link you can access it by navigating to /{directory-name}#{short-link-key}.

## To-do
* Add admin interface
* Improve 404s
* Improve install process
