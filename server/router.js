const router = require('express').Router();
const fs = require('fs')

/**
 * @method GET
 * Get all todo data
 */
router.get("/get-all-todo", (req, res) => {
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    res.json({
        data: data
    })
})

/**
 * @method GET
 * Get all completed todo data
 */
router.get("/get-all-complited-todo", (req, res) => {
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let complitedTodo = []
    for(let todo in data) {
        if (data[todo].status == true) {
            complitedTodo.push(data[todo])
        }
    }
    res.json({
        data: complitedTodo
    })
})

/**
 * @method GET
 * Get all in completed todo data
 */
router.get("/get-all-incomplited-todo", (req, res) => {
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let incomplitedTodo = []
    for(let todo in data) {
        if (data[todo].status == false) {
            incomplitedTodo.push(data[todo])
        }
    }
    res.json({
        data: incomplitedTodo
    })
})

/**
 * @method POST
 * Create new todo
 */
router.post('/create-todo', (req,res)=>{
    let task_name = req.body.task_name;
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let prepareOldData = []
    for(let todo in data) {
        prepareOldData.push(data[todo])
    }
    let newTodo = {
        id: Math.floor(Math.random() * 100000),
        task_name: task_name,
        status: false
    }
    prepareOldData.push(newTodo)
    
    fs.writeFileSync('data.json', JSON.stringify(prepareOldData), function (err) {
        if (err) console.log(err)
    })

    res.json({
        data: prepareOldData
    })
});

/**
 * @method PUT
 * Update todo name
 */
router.put("/update-todo", (req, res) => {
    let id = req.body.id
    let task_name = req.body.task_name;
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let newData = []
    for(let todo in data) {
        if (data[todo].id == id) {
            data[todo].task_name = task_name
            newData.push(data[todo])
        } else {
            newData.push(data[todo])
        }
    }
    fs.writeFileSync('data.json', JSON.stringify(newData))
    res.json({
        data: newData
    })
})

/**
 * @method POST
 * Delete todo
 */
router.post("/delete-todo", (req, res) => {
    let id = req.body.id
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let newData = []
    for(let todo in data) {
        if (data[todo].id != id) {
            newData.push(data[todo])
        }
    }
    fs.writeFileSync('data.json', JSON.stringify(newData))
    res.json({
        data: newData
    })
})

/**
 * @method PUT
 * Mark as completed
 */
router.put("/complete-todo", (req, res) => {
    let id = req.body.id
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let newData = []
    for(let todo in data) {
        if (data[todo].id == id) {
            data[todo].status = true
            newData.push(data[todo])
        } else {
            newData.push(data[todo])
        }
    }
    fs.writeFileSync('data.json', JSON.stringify(newData))
    res.json({
        data: newData
    })
})

/**
 * @method POST
 * Delete all completed todo
 */
router.post("/delete-all-completed", (req, res) => {
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let newData = []
    for(let todo in data) {
        if (data[todo].status == false) {
            newData.push(data[todo])
        } 
    }
    fs.writeFileSync('data.json', JSON.stringify(newData))
    res.json({
        data: newData
    })
})

/**
 * @method GET
 * Count all active todo
 */
router.get('/count-active-todo', (req, res) => {
    var data = fs.readFileSync('data.json', 'utf8');
    data = JSON.parse(data)
    let count = 0
    for(let todo in data) {
        if (data[todo].status == false) {
            count += 1
        }
    }
    res.json({
        data: count
    })
})

module.exports = router;