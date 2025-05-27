# MODULE-12: EXPLORE-THE-FUNDAMENTAL-OF-NODEJS

Welcome to the new mission, today we pull back the curtain on how the web truly works and introduce you to the powerful world of Node.js! 🌐

In this module, you'll gain a solid understanding of the internet’s backbone—from how a browser talks to a server, to the difference between frontend and backend, and why Node.js is a game-changer in modern development.

We’ll explore:

The magic of the event loop 🌀 and how Node.js handles millions of requests without breaking a sweat,
The single-threaded nature of Node.js and how it still manages to stay lightning fast ⚡,
How to install Node.js like a pro using fnm (no more versioning nightmares!),
And master the modular system that makes Node.js both clean and powerful—CommonJS, ES Modules, IIFE, index exports—you’ll cover it all!

By the end of this module, you’ll not only understand the “what” but the “why” behind Node.js and how it's structured to be efficient, modular, and scalable. Whether you're building APIs, tools, or full-stack apps, these concepts will level up your backend journey in no time.

Node.JS Documentation: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

Let’s get started and unlock the server-side superpowers of JavaScript! 💪

## 12-1 How the web works

After hitting a url we can see a data in our ui. Request can come from web browses or mobile app.

- First of all a client sends request to `server` and then in return server sends us the response with the data or the error. This is called `Request Response Model` or `Client-Server Architecture`.

![alt text](<WhatsApp Image 2025-05-27 at 19.01.34_19514dd2.jpg>)

- There are some rules of happening request and response to the server.

![alt text](<WhatsApp Image 2025-05-27 at 19.37.09_fae233cc.jpg>)

1. **Protocol :** `https://` or `http://` is called `Protocol`. This means the rules or regulation. By this we are setting a rules that in which protocol the client server connection will be maintained, i mean by maintaining which protocol the data transfer will happen between client and server.
2. **Domain Name:** This is the actual website name.
3. **Resource :** This means By going to the domain where we want to go or what we want to see. we can Compare with a home. Domain name is the home and the resources are like which room is whose or in which room we will get the specific data contained by the room.

- Domain name is not the real address of a website. It like we are giving a name to our home like House#20, This name is not the actual address of the place. Actual name is named by government.
- And this kind of actual name of the domain name is `ip address`. Where the ip address is written is called `DNS Server`.
- `DNS server` is like a government directory where the plot information are saved and our given name of the home does not holds the plot information. In the same way `IP Addresses` Are saved in the `DNS Server`.

![alt text](<WhatsApp Image 2025-05-27 at 19.50.42_9587675a.jpg>)

- When we hit a `domain name` or URL from client browser the it sees in `DNS Server` that if any `ip address` is available matching to the domain name. If available the dns server give the ip address to the browser. `IP address` Works Under Th hood of domain name.Server do not even know the domain name.
- The matching IP address is the expected `server` address. request is sent to the server ip and the server send response with data.

![alt text](<WhatsApp Image 2025-05-27 at 20.07.50_e754ef05.jpg>)

- When the connection between the server and the client is building the protocol is called `TCP/ IP SOCKET CONNECTION`. these are rules and regulation of the connection.
- `TCP` means the transmission control protocol. and `IP` means internet protocol.
- The protocols are must to maintained while doing connection.
- the process is like after `HTTP Request` the `TCP/ IP SOCKET CONNECTION` is built and then the `HTTP Response` is sent.

#### Lets Summarize the Process.

![alt text](<WhatsApp Image 2025-05-27 at 20.06.33_1b22ae77.jpg>)

- We will send `request` to server from client side using some `methods` like `GET`, `DELETE`, `PUT`, `PATCH`, `POST`.
- Request holds some `request headers` like `HOST: www.sazid.com`, `Accept-Encoding : gzip, deflate, br, zstd`, `Cookies`
- When we want to create update a data or create a data we have to give the data inside the `Request Body`
- after tHE HTTP Request the server will give us a `response` with `status code`, `message`.
- Response also holds a `response header` response header hold the `Access-Control-Allow-Credentials: true` `Content-Type :text/plain`.
- Response body shows the the data we have asked for after http request.
