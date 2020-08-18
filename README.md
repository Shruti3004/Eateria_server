<h1 align= "center"><b>Eateria</b></h1>

<p align="center">Chaos in the cafeteria, not being able to pay in cash, confusion in what to eat, and a huge crowd in the cafeteria were some problems that were enough for a motivation to bring a single platform that would offer a convenient solution to all of these.
'Eateria' is the name of this solution, disguised as an app, which tackles all these problems indisputably. The most promising feature of this app is that it provides you a complete list of the menu prepared in the cafeteria on the present day and also its price.
Along with this user can pre-book the meal and a table for him as well, with the meal delivery time written on the screen, his overall eating experience becomes easy pocket friendly and structured.</p>


<h3><b>Technology Used</b></h3>
<ul>
<li>Bootstrap 4.x</li>
<li>ReactJS</li>
<li>Firebase</li>
<li>Nodejs</li>
</ul>
<h4>Using React hooks to improve the app performance</h4>
<ul>
<li>React Hooks are the way to use stateful functions inside a functional component. Functional components are components written as a function, so they take some input (props) and return a react element.</li>
<li>More information https://reactjs.org/docs/hooks-intro.html</li>
<li>Using React Hooks will improve the performance of our project as it uses memorization techniques to avoid re-rendering of the component.</li>
</ul>
 
<h3><b>Features</b></h3>

- [ ] Email Authentication
- [ ] Expected Time
- [ ] Search Bar
- [ ] Details of a dish
- [ ] Payment Functionality

<h2 align= "center"><b>Project Maintainer</b></h2>
<a href="https://github.com/Shruti3004" align="center"><b>Shruti Agarwal</b></h4></a>

### __Made with 💖 for open source__



Quick Start rocket
Add a default.json file in config folder with the following
{
   "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "CLOUD_NAME": "Cloudiary Cloud name",
  "API_ID":"Cloudinary API ID",
  "API_SECRET":"Cloudinary API secret", 
}
Install server dependencies
npm install
Install client dependencies
cd client
npm install
Run both Express & React from root
npm run dev
Build for production
cd client
npm run build
Test production before deploy
After running a build in the client point_up_2, cd into the root of the project.
And run...

NODE_ENV=production node index.js
Check in browser on http://localhost:5000/
