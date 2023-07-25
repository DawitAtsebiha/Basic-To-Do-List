# To-Do
Simplistic To-Do List Website with Music Addition

In order to run, incorporate all of these files into an IDE and then run the HTML "To-Do List Application" file, the "website" in which you can add tasks will then be opened.

This software is simplistic and barebones on purpose, as the target audience is those who are less computer-savvy and require large lettering such as the aging population.

There is a music option for those more technically advanced. The website is preoaded with a forward and rewind feature (both at +/- 15 seconds) as well as a next and return both which completely skip and completely rewind a song respectively. 

In order for a song to be played you must first download an mp3 file and paste it into the directory in which you saved the three code files. After this you will need to edit the HTML code such that the name of the file is called on line 34. An example of such is below:

var audio = new Audio('MattHardy.mp3');

For additional songs add them to line 44 such as:

var nextAudioUrl = 'Shoota.mp3';


Hoping to incorporate Spotify API soon such that there will be a seamless connection between the music and the "website" as well as more choice.
