import json
from firebase import firebase
from firebase import jsonutil
import collections
firebase = firebase.FirebaseApplication('https://python-backendops.firebaseio.com/')

#Retrieving the latest record
result = firebase.get('/users', '')
jsonData = json.dumps(result)
result = collections.OrderedDict(sorted(result.items()))
values = result.values()[-1]
email = json.dumps(values['Email'])
email = email.replace('"', '')
name = json.dumps(values['Name'])
name = name.replace('"', '')
#print(result)

data =  {'Email': email,
         'Name': name
         }
result = firebase.post('/userInformation/',data)
#print(result)

#Sending email
import smtplib

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login("saisaranyagurram@gmail.com", "ptlookfavtbnyhaj")

msg = "Dear {}, Welcome to our app".format(name)
print(msg)
server.sendmail("saisaranyagurram@gmail.com", email, msg)
server.quit()
