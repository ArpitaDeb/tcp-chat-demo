# TCP Chat Client

### How do I run this?
Run `node server.js` to spin up the chat server. Chat clients can connect by using `netcat` (similar to `telnet`) to visit your IP address (`option + click` on the wifi icon on a mac to see yours), and include port `:1234`. 

This should look like: `nc 192.168.x.xx 1234`

### Lecture Notes 📢
(Many of these notes are borrowed with ❤️ from [Travis Borsa](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week2/Day1/lecture) in Vancouver.

Today we looked at:
- protocol
- network layers
- Http requests

But first let's get an overview on how the internet works.

---

## Internet 101 🖥


We know that in order to load a webpage, we type a URL (aka URI) into the address bar of the browser and... [BAAM](https://theuselessweb.com/) the page lands on the screen.

In order for your computer's browser 💻 (aka client, where frontend code lives to be able to load a webpage 📃, it starts communicating with a server 💽. (Another computer or networked device connected to the internet). Your computer sends a request for the resources that it needs from the server in the form of a URL, and the server in turn responds with the requested data.

This is achieved with a communication channel called HTTP (Hyper-Text-Transfer-Protocol) 

---

## HTTP 📬

Http is the backbone of the web and the primary way we communicate over it. If the internet is the information highway 🛣️ http makes up some of the rules of the road.

Http stands for hypertext transfer protocol. Which is the technical lingo for:
> Helping devices communicate over a network by a series of requests↪️ and responses↩️

---

## Protocol 📔

If http is a protocol then what exactly is a protocol?

>__*1. the official procedure or system of rules governing affairs of state or diplomatic occasions.*__

>__*"protocol forbids the prince from making any public statement in his defense"*__

Protocols are everywhere,
An informal protocol could be the rules that govern a phone call.📱

What are some other informal protocols?

For these examples each involved party must know the rules in order to communicate effectively.

---

In the context of networks like the internet:
> __Protocols are the rules that determine how to send, format, and recieved data between networked devices. These could be servers, routers, phones, personal computers and more.__

---

### Layers 🌈

The internet is like an ogre, and ogres are like onions, and onions have layers.

---

#### cont'd

The internet is divided into layers.
Each of these network layers have protocols that use and build on the layers underneath them.

The bottom layer handles how bits (0/1's) are physically transmitted from point a to point b so that the higher layers don't have to .

Lets look at some of the things each layer does. 

---

### Protocols 📔

What are some network protocols that you have heard of or used?

---

Here are some more.

- FTP [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol)
- POP3 [Post Office Protocol](https://en.wikipedia.org/wiki/Post_Office_Protocol)
- IMAP [Internet Message Access Protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)
- SMTP [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
- BitTorrent [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent)
- DHCP [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)
- DNS [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)

---

### Hyper Text Transfer Protocol 📬

Http sits in the highest network layer the application layer 👑. The application layer is responsible for process to process communication over the network.

HTTP is used when one machine wants to share documents 📃 and Any number of clients can make requests on these documents. Using the request response model.


---

## Request and Response

 There are two parties. A server that sits at home waiting for someone to knock on their door and a client that can at any time walk up to the door, knock and ask for something.

---

#  🚪🚶‍

The server sits at home waiting for someone to knock on their door.

---

# 💃 🚪🚶‍
 
The client can ask for a cup of sugar, flour ..

All the client needs is a way to ask, and a thing to ask for.  
'May I please have a cup of sugar?' might be better than 'Give me that sugar!'.

---

# 🚣 🍬

The server will go into their kitchen to grab a cup of sugar. 

---

# 💃🚪🤾 

The server then makes a response. They can come back with the thing that was asked for or they could also come back and say 'I couldn't find that.' to the client

---

# 💁 🍬 🧒

This is what happens when you type a URL into your browser.

---

Curl, postman examples  
https://example.com  
https://swapi.co/api/films


---

## Tools 🔧

Typically it is the client software making requests. The most common example of this would be your Web Browser. There are other options that can be used specifically for development purposes.

- [cURL](https://curl.haxx.se/)
- [Postman](https://www.getpostman.com/)
- [HTTPie](https://httpie.org/)
- [Paw](https://paw.cloud/)
- [What happened to `telnet` on macOS?](https://medium.com/ayuth/bring-telnet-back-on-macos-high-sierra-11de98de1544)
---
