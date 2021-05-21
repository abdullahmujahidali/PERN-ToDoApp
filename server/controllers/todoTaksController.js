import models from '../models';

const { TodoTask, Todo } = models;

const todoTaks = {
    async create(req, res, next) {
        try {
            const { text, todoId } = req.body;
            const item = TodoTask.create({ text, todoId });
            return res.status(201).send(item);
        }
        catch (e) {
            return next(new Error(e));
        }
    },
    async fetchAll(req, res, next) {
        try {
            const { todoId } = req.params;
            // Validation
            if (!todoId) { return res.status(400).send({ error: 'todoId is required' }); }
            const items = await TodoItem.findAll({
                where: { todoId },
                include: [{
                    model: Todo,
                    as: 'todo'
                }],
            });
            return res.status(200).send(items);
        } catch (e) {
            return next(new Error(e));
        }
    },

    async fetchOne(req, res, next) {
        try {
            const { todoItemId } = req.params;
            // Validation
            if (!todoItemId) { return res.status(400).send({ error: 'todoItemId is required' }); }
            const items = await TodoItem.findOne({
                where: { id: todoItemId },
                include: [{
                    model: Todo,
                    as: 'todo'
                }],
            });
            return res.status(200).send(items);
        } catch (e) {
            return next(new Error(e));
        }
    },
};

export default todoTaks