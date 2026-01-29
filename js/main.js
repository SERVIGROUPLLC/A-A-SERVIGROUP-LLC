/**
 * A&A SERVIGROUP LLC - MAIN ENTRY POINT
 */

import { initNavigation } from './modules/navigation.js';
import { initServices } from './modules/services.js';
import { initForm } from './modules/form.js';
import { initAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize modules
    initNavigation();
    initServices();
    initForm();
    initAnimations();

    // Welcome Message
    console.log('%c✨ A&A SERVIGROUP LLC', 'color: #2563eb; font-size: 24px; font-weight: bold;');
});
