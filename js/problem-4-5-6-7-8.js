//৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো।

/*
http cookies or internet cookies are built specially for internet web browser's to track, personalize and save informations about each user's session.

Browser cookies are identified and read by name-value pairs. It's used for session management, personalization & tracking.

cookies are basically two types:
1.Session cookies: which is deleted after each session
2. Parmanent cookies: Which has never gone away.

*/

//৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

/*
localStorage persists the storage across browser sessions. So even if the domain is opened in a new tab, or the browser is closed and reopened, the storage is saved. There is no expiration.

sessionStorage is cleared when the page session ends. A page session lasts as long as the tab or the browser is open. Therefore, when you open a new tab or a new window, this creates a new session and new storage.

localStorage and sessionStorage are almost the same. Both have the following rules:

They store key/value pairs for a particular domain.
The values stored may only be strings.
They have a limit of around 5MB of storage space.
*/

//৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো।

/* 
Every browser has a engine which is used to run javascript code. Chrome uses V8 engine and Firefox uses spidermonkey engine.

Step 1: Parser

This is the first stage of the engine, every time we run a JavaScript program, our code is first received by the "parser" inside the JS engine. The parser's job is to check the JavaScript code for syntactic errors in line by line manner because JavaScript is an interpretive scripting language, so whenever an error is detected by the parser, it throws a kind of error and stops execution of the code.

In short, we can say that it parses JavaScript code.

Step 2: AST

Once the parser checks all JavaScript codes and gets satisfied that there are no mistakes/errors in the code, it creates the data structure called AST (it stands for Abstract Syntax Tree).

Step 3: Conversion to Machine code

Once the Abstract Syntax Tree is created by the parser, the JavaScript engine converts the JavaScript code into the machine code (or in the language that machine can understand).

Step 4: Machine code

When the program written in the JavaScript gets converted in the machine language (or in byte code), the converted code is sent to the system for execution, and finally, that byte code run by the system/engine just like we observe in our first example.
*/ 

//৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। 

/* 
1.fetch()
2.setTimeout()
3.setInterval()

*/

//৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 


/* 
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.
*/



















