# MEARN-express-fileupload
file uploader with express-fileupload


# Progress log
Wednesday, December 09 2020 at 6:39 am I was able to get the client-side to communicate with the server-side. I was able to do this by making some modifications. First, in my models, I committed out two files in my schema so that only the file was being submitted. In the controllers, I change the req to req.files.file. Lastly, on the frontend side, I was able to fix the undefined log I was getting on the server-side by using FormData() to append the file so that it could be read by the server. The next thing that needs to get fixed is the ability to submit a photo with multiple schema files.

Wednesday, December 09 I was in an Azure fundamentals lecture in Zoom, however my mind kept bringing my thoughts back to this file upload project. At 3:31 pm about 3.5 hours into the lecture, I made the decision to leave since my mind was focused on getting this project to work. I did not know yet but all the research and documentation reading I did had subconsciously sold the problem, and at 5:20 pm I was able to have Axios post a multiply schema with a file upload using the formDatat() function.

# Tasks
## Backend 
- [x] Set up sever
- [x] config
- [x] models
- [x] controllers
- [x] routes
- [x] find a way to get photo info
- [x] find a way to change the default model name
- [x] find a way to check if user has **selected** a photo to upload
- [x] find a way to check if it is an image file
- [x] fnd a way to save photo in file on the server


## Frontend 
- [x] set up client
- [x] npm axios
- [x] npm @reach/router
- [x] Render Items from db
- [x] Create new item
- [X] Delete Item from db
- [x] Update Items from db
- [x] find a way to have items not be undefined :)
- [X] find a way to somite photo with other models



# Acknowledgment
I would like to thank all of the amazing instructors and TAs at Coding Dojo for teaching me the skills needed to become a self-sufficient developer. I will also like to thank Kim that inspired me to get this working.

# Documentation
The documentation I used was from npm, Inc you can find the article I read to get the file uploader to work [here](https://www.npmjs.com/package/express-fileupload).

You wil need to use postman to POST the data you can find more information on postman [here](https://www.postman.com/).



# Backend dependencies
```bash
npm init -y
````

```bash
npm install mongoose
````
```bash
npm install express
````

```bash
npm install cors
````
```bash
npm i express-fileupload
````
# Frontend dependencies

```bash
npx create-react-app client
````

```bash
npm install axios
````

```bash
npm install @reach/router
````
