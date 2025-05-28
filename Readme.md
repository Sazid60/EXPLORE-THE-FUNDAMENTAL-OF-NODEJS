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
- after the HTTP Request the server will give us a `response` with `status code`, `message`.
- Response also holds a `response header` response header hold the `Access-Control-Allow-Credentials: true` `Content-Type :text/plain`.
- Response body shows the the data we have asked for after http request.

## 12-2 Frontend vs Backend Development

### lets understand Wast is frontend

- Normally We work with UI and this is frontend development
- Client/browser is needed for frontend
- frontend ui can be built on different technologies like angular, vue or react/next.js
- No matter what we use for building ui ultimately converted to HTML, CSS AND JS since browser only understand these

### lets understand Wast is backend

- when the work is building logic, playing with data, calculation or computational related works.
- Server is required for backend development
- In backend we can use different languages like php, rails python,java,js.
- We are not running the backend in browser, we can think like that backend itself is a computer and can run any language.
- Now a days we can use `node.js` as backend, Its javascript runtime now.
- js was made for frontend or browser related works. This was not made to write backend code. This lacking was filled by node.js run time. now we can wite backend code using js as well.
- Node.js is not a programming language. Js is a programming language and node.js(js run time) made a way for js to write code for backend.
- Other language like php, rails python,java these are self sufficient so that they do not need any others help to be able to be used for writing backend code.

  ![alt text](<WhatsApp Image 2025-05-27 at 21.54.00_9799f3bd.jpg>)

- Data are kept in backend as files. after a request to server server takes the files from backend and deliver to frontend.
- Other option is server can communicate with our database and serves processed data from database after a successful request. this is why backend is called an application.

### Two Types of Scenario Can Happen

#### Static Website

- In Previous day we used to store html, css js files like image videos were stored in backend `server`.
- Inside the backend server we were used to create a page and the copy of the page was used be sent to frontend.
- Frontend used to show the copy of the page created in backend like pre made food.

#### Dynamic Website

- Here pages are not pre made in server.
- In case of Dynamic Website when a request comes from client side, All the required data comes from `Database`.
- Required data comes to server from database.

- Then the server uses some templates like `HBS`, `PUG`, `EJS` (These are Template engine for making page) to build the page using the data came from database and then the page is sent to browser using server and shown to frontend. **This is Called Server side Rendering(SSR)**

![alt text](<WhatsApp Image 2025-05-27 at 22.56.15_a7bd8cd8.jpg>)
![alt text](<WhatsApp Image 2025-05-27 at 22.57.31_b0475654.jpg>)

**Now Lets See Client side Rendering(CSR) in dynamic Website**

- Another method is we can see the data in frontend using api.
- when request comes from client side then server will request the data from database and gets the data
- Then server modifies the data according to our requirement and send to browser
- Remember that here browser is just getting the raw data i mean no html css and js and others like images, browser is just getting the json data.
- Now the Browser is building the site using the data and the html css coming from frontend technology.
- The page can be build using any kind of frontend library like react, vue, angular etc.

![alt text](<WhatsApp Image 2025-05-27 at 23.04.09_0d8e708f.jpg>)

#### What are the benefits of Using API?

- When json data is coming from backend to frontend then it will support `CROSS` Device or platform.
- Can be seen in mobile browser UI, Desktop Browser UI, Desktop application or Mobile application.
- On the other hand the static website is like we have to make it for each and every device and platform. this is a hassle. So, east or west dynamic is the best.

![alt text](<WhatsApp Image 2025-05-27 at 23.30.38_4bbf945f.jpg>)

- Moreover API built site is also better than the server side rendering since if we use template engine to make page they should be made different for each app and each platform as well and this is time consuming our time to build a site.
- The best solution is use api and build in browser side using frontend library so that each and every device can access.

## 12-3 Why Node.js was invented

- HTML Gave us the structure of a website, CSS gave us the styling and JS made the website interactive.
- js runs in our browser using js engines like
  1. chrome ---> V8 Engine (Best Performance)
  2. Firefox ---> Spider Monkey
  3. Safari ---> JavascriptCore

#### Now Lets See How Js Works

- When we write a js code it is converted to a `Abstract Syntax Tree` Using a `Parser`.
- The Tree is interpreted (what is written we understand) using a `Interpreter`.
- Then the code is compiled using a compiler. This compiler is called Just in time compiler. Using the compiler we see the output.

![alt text](<WhatsApp Image 2025-05-28 at 08.59.05_07dc7a66.jpg>)

#### Now Lets See How is Js Under Th Hood.

- We have `call stack` where the functions are kept
- We have `Heap` where is memory management is done
- Then we have `Web Api`, `Dom` , `Fetch API`, `Callback Que (timers, click events)`

![alt text](<WhatsApp Image 2025-05-28 at 09.02.34_7604a37b.jpg>)

- We know js only runs in browser, we can not write js in server.
- Then people came up with an idea that lets make Js Universal. I mean they have made node js that helps us to write js in server.
- Node,js is basically a js run time that helps to run js in server.
- Node.js was made based on c++ and v8 engine.
- We can not write raw js without using node.js in server since js only gets the browser dom access where other language gets the full computer access like file system, networking and all. these gaps are filled by node.js

#### why Node.js is popular?

1. We can use js on server side.
2. Build Highly Scalable backend application.
3. It is single threaded, event driven and works on non blocking i/o.
4. Perfect for building data intensive streaming application.

#### Cons Of Node.js

- It can not perform Highly CPU Intensive tasks
- But now a days we can do highly cpu intensive tasks using worker threads.

#### Dependencies of Node.js

1. **V8 Engine :** Node.js runtime is based on v8 engine written in c++ and js. without v8 engine node js would never understand js code. Its most important dependency of node.js
2. **Libuv :** It is a open source library written on c++ which focuses on `asynchronous I/O` and gives node access to `COMPUTER OS`, `FILE SYSTEM`, `NETWORKING` etc.

#### **Libuv** Has two important parts

- **Event loop :**

  1. executes callback functions,
  2. Network I/o

- **Thread Pool :**

  1. Cpu Intensive tasks,
  2. File Access,
  3. File Compression,
  4. Cryptography

- Node.js transfers the intensive tasks to thread pool so that it takes less memory to make a task done.

#### Overall

- node.js is combination of v8 engine and Libuv. arther than these node.js has http-parser, c-areas, zlib, openssl.
- We will write pure js code and then the node.js will make it run in server.
