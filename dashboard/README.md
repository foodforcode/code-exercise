# 📬 Stable Dashboard

This full stack web application displays the mail and status information of mail recieved at your Stable address.
Each individual piece can be quickly and easily identified and viewed with up-to-date information on your requests.

## Demo (Public):
Navigate to the [Stable Dashboard]() *** in your brower to view and demo dashboard.

## Demo (Local):
### Pre-Installation requirements:
- Node.js (v16)
- npm (v6)
- Git (v2)

### Installation:
1. `git clone https://github.com/foodforcode/code-exercise.git`
2. `cd dashboard/` into the dashboard directory
3. `npm install` in your terminal will install all dependencies
4. `npm start` in your terminal will start server and build bundle using webpack

### View in browser:
Navigate to localhost:3000 in your browser to view and use dashboard

### Requirements:
1. ✅  The web application resembles the provided mock ups

   *Note: Requirements state Noto Sans font, however mocks ups utilize IBM Plex Sans font*

   The web application aligns with mocks ups from top to bottom, including favicon to page change button hover effects.  

2. ✅  The web application is accessible from the public internet

   Deployed via Vercel: [Stable Dashboard]()  

3. ✅  Users are able to view 6 mail items per page, with a maximum of 3 items per row

   The dashboard is limited to two rows of three mail items per page to view for a total of 6 items per page

4. ✅  Users can click through multiple pages when there are more than 6 mail items to display

   Next and previous buttons allow users to view additional pages when there are greater than 6 mail items

5. ✅  Users can easily interact with the web application in all screen sizes

   Reactstrap used for easy configuring of responsive components for different screen sizes. Mail gallery will re-arrange to optimize for user screen size.

6. ✅  The mock mail item data provided in the data.json file is served to the frontend via an endpoint

   Data is served via an Node/Express server at the `/mail` endpoint

7. ✅  The codebase is pushed to a remote repository

   The codebase is hosted as a git repository on Github: [Source Code](https://github.com/foodforcode/code-exercise) 

### Architecture:
- Front end:

> React w/ hooks: A modern, popular front end framework used to create this Single Page Application that allows for seamless re-rendering of data without reloading. Hooks allow for the simple state management this project required, without use of additional libraries. React is fast and highly scalable.


> Reactstrap powered by Bootstrap: A toolkit for building mobile-first sites with responsive components. Provides increased accesibility which is a standard and requirement. Great for getting this mvp completed in a timely manner and keep components uniform. Easily integrates with Sass.


> Axios: A promise-based library for making HTTP requests and handling responses.


> Moment: A simple library used to convert the Unix timestamp in provided data, to the Month, DD, YYY format. (Deprecated; an oldie but a goodie.)


- Back end:
> Node/Express server: A powerful, lighweight, non-blocking server to handle requests incoming HTTP request for mail and server static assests. Highly scalable to serve other data and make third party API or database requests.


> Nodemon: A utility used for ease in development by restarting application upon file changes. Efficient for viewing changes during development.


- Build tools:


> Webpack: This webpack is a custom configuration for this dashboard, chosen over use of Create React App for customizability and scalability. Webpack with Babel is used as a compiler and transpiler and bundler to allow browers to read code written in jsx as js in one convenient but large bundle. Can easily be configured for the addition of Sass and other libraries as needed during scaling.

> Vercel: Integrates with Github for quick and easy automatic deployments.
### Technologies:
* [React v17](https://reactjs.org/) + [Webpack v5](https://webpack.js.org/)
* [Reactstrap v8.10.0](https://reactstrap.github.io/)
* [Axios v0.21.1](https://www.npmjs.com/package/axios)
* [Moment](https://momentjs.com/)
* [Node v16.6.1](https://nodejs.org/dist/latest-v16.x/docs/api/) + [Nodemon v2.0.12](https://www.npmjs.com/package/nodemon) + [Express v4.17.1](https://expressjs.com/)
* [Vercel](https://vercel.com/)

### Future Development:
1. Add test Coverage
2. Implement responsive components for mobile and tablet view
3. Implement functionality to search, filter, sort mail by attributes
4. Implement card modals to view and make requests for individual mail items
5. Add Sass preprocesser
