# Firebase_with_Python

I'm a learner when comes to Python. This is one of my practical experiment in this learning process.

I have three main files in this repository based on which I started this project.

Initialy I have created a basic frontend model with a web page "index.html" and a javascript "app.js" to control the actions of my web page. Here I just ask a new user entry with their mail id and name and save it as an object under a node "users" in firebase realtime database.

To work in the backend I chose to work with Python. I wrote few lines in python "python-backendops.py" to fetch the latest record from "users" node in firebase realtime database and save the same into another node "userInformation" inside the firebase. Also, my code allows us to send an Welcome mail to every new user on their entry (Please replace the Mailer's Id and password to make it work).

This is the basic flow which happens here.

Note: As of now you need to run both the frondend(HTML) and backend(Python) code one after the other to achieve the requirement. Since I already mentioned that I'm a learner, I'm still learning to remove this manual interuption. Also Since my task is to code the backend, hoping that this would serve the purpose..

## Pre-requisites to run the python code:
- Install Python-Firebase library to access Firebase database using Python.
  You can use the following commands to install python-firebase library on linux system,

    sudo pip install requests
    sudo pip install python-firebase

- To run this code, I have used Python version 2.7. So while running the code on terminal better use 
            
                  python filename.py
    instead of,   
                  python3 filename.py

Hope this helps....!
