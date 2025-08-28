const getAllTasks = (req, res) => {
    res.send('List of tasks');
}

const createTask = (req, res) => {
    res.json(res.body);
}

const updateTask = (req, res) => {
    res.send('Task updated');
}

const deleteTask = (req, res) => {
    res.send('Task deleted');
}

const getTask = (req, res) => {
    res.send('Task details');
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}