import express from 'express';
const router = express.Router();
import EmailContactForm from '../../frontend/src/routes/Contact';

router.route('/contact').get(EmailContactForm);

export default router;
