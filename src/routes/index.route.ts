import { Response, Request, NextFunction } from "express";
const MyRouter = require('./base.route');
const LoginRouter = require('./login.route');
const DataRouter = require('./data.route');
const ModelToolsRouter = require('./model-tools.route');
const DataToolsRouter = require('./data-tools.route');
const VisualizationRouter = require('./visualization.route');
const CmpSolutionRouter = require('./cmp-solution.route');
const CmpTaskRouter = require('./cmp-task.route');
const CmpSceneRouter = require('./cmp-scene.route');

const router = new MyRouter();
module.exports = router;

router.use('/auth', LoginRouter);
router.use('/data', DataRouter);
router.use('/model-tools', ModelToolsRouter);
router.use('/data-tools', DataToolsRouter);
router.use('/visualization', VisualizationRouter);
router.use('/comparison/solutions', CmpSolutionRouter);
router.use('/comparison/tasks', CmpTaskRouter);
router.use('/comparison/scenes', CmpSceneRouter);
