import { Router } from 'express';
import { syncHandler } from '../handlers/syncHandler';
import { statusHandler } from '../handlers/statusHandler';

const router = Router();

router.post('/sync', syncHandler);
router.get('/status', statusHandler);

export default router;