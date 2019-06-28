# cirque-make
The CIRQUE 2019 website, made a bit easier to navigate using the command line tool `make`.

## What's in the box?
`cirque-make` works by breaking the CIRQUE website into smaller, reusable pieces, and then putting it all together using `make` so that there are fewer individual components that need to be maintained. All of the magic happens in the `make` directory. To read more about the compilation process and how to modify the site using make, see the `make` directory.

Everything outside of the `make` directory is already compiled and ready to go, so if you're more of a let-me-edit-raw-html person, just use everything in here, and skip the `make` directory.

## Why `make`?
Make is cool, easy to learn and crazy flexible. It was also a great way to learn how to work with general purpose linux commands (if you have a Windows computer, I apologize but setup won't be covered here, take a look at (this)[http://gnuwin32.sourceforge.net/packages/make.htm]).

### TODO:
1. Filesystem watching script to auto-make on fs change
2. Three-division image bars between sections
