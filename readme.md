### [Name : Anwar Hossain, ID : 2020200010008, Couser : CSE472.1]
# TODO Manager
## How to run
##### Run : Api server 
- `cd /server`
- `npm install`
- `node app.js`
- api will listen port 7777 ('http://localhost:7777')
##### Run : Fronted
- `cd /fronted`
- open the index.html file in you browser

##### Porject description
This is a simple todo apllication

It's have two part
    1. Api (server)
    2. Fronted (fronted)
Fetures :
- Add todo
- Filter todo (completed, incompleted)
- Mark as done
- Delete todo
- Update todo

Process: fronted will call api server to get and update data, based on api response we are showing data in fronted.

Techology:
    - Fronted : HTML, CSS, JS, jQuery, Ajax
    - Server: Node.js, Express.js, FileSystem, JSON, CORS
    - Database : Json file (data.json)