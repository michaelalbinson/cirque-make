# make

This is the heart of the project, where all the sections are pieced together into one big cohesive website. The process is pretty simple, `cd` into the `make` directory and run `make` and the makefile will take care of the rest. All of the files will be compiled and exported as the regular webiste in the rot directory.

In its essence the makefile just outlines a series of bash commands to be run to compile a resource. `make` checks to see if any changes have been make in the source files, and then executes the bash commands if re-compilation is required.

## Question
Couldn't I take all this and put it into a normal templating language/different programming language?

*YES* but that's a project for you 😃. I will say that make and bash can be a finnicky duo at times and there are several advantages to converting this into a python/javascript based project, as they're a bit easier to work with than bash. BUT I will also say that both are quite powerful, good to know generally if you intend to deeper into programming and, in particular, very useful to understand if you own a UNIX-like computer.
