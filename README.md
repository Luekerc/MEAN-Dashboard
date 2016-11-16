 
 This app was built following https://www.youtube.com/watch?v=OhPFgqHz68o&list=RDAEE7DY2AYvI&index=2

The basic layout was modeled after https://github.com/travist/meanapp

This was originally a MEAN movie app tutorial, but I have changed it to be a Time Tracking app.  The angular layout in client folder was built with Yeoman angular 


1. cd into the root folder
2. cd into server and run "mongod"
2. in another terminal, cd into server and run "node index.js"
3. in a 3rd terminal, cd into client and run "grunt serve"

Notes: 
--$PATH is /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/share -->

--yeoman, bower and grunt were installed with sudo npm install -g <name>

--had to install programs npm install <program> --save-dev as they threw errors in grunt serve

--had to install sudo gem install compass within client to get grunt serve to run