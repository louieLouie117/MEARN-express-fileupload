# MEARN-express-fileupload
file uploader with express-fileupload


# Progress log

Today at 6:39 am I was able to get the client side to communicate with the server side. I was able to do this my making some modifications. First, in my models I committed out two files in my schema so that only the file was being submitted. In the controllers I change the req to req.files.file. Lastly, in the frontend side I was able to fix the undefined log I was getting in the server side by using FormData() to append the file so that it could be read by the server. The next thing that needs to get fix is the ability to submit a photo with multiple schema files.

# Tasks
## Backend Development
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


## Frontend Development
- [x] set up client
- [x] npm axios
- [x] npm @reach/router
- [x] Render Items from db
- [x] Create new item
- [X] Delete Item from db
- [ ] Update Items from db
- [x] find a way to have items not be undefined :)
- [ ] find a way to somite photo with other models



# Acknowledgment
I would like to thank all of the amazing instructors and TAs at Coding Dojo for teaching me the skills needed to become a self-sufficient developer. I will also like to thank Kim that inspired me to get this working.

# Documentation
The documentation I used was from npm, Inc you can find the article I read to get the file uploader to work [here](https://www.npmjs.com/package/express-fileupload)

You wil need to use postman to POST the data you can find more information on postman [here](https://www.postman.com/)



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
# Frontend dependencies

```bash
npm install axios
````

```bash
npm install @reach/router
````
