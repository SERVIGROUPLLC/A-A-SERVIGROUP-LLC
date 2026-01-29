/**
 * Services Module
 * Handles expandable service cards and sub-option tabs.
 */

export function initServices() {
    const serviceCards = document.querySelectorAll('.service-card--expandable');
    
    serviceCards.forEach(card => {
        const toggleBtn = card.querySelector('.service-card__toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close others
                serviceCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('service-card--expanded')) {
                        otherCard.classList.remove('service-card--expanded');
                        const otherBtn = otherCard.querySelector('.service-card__toggle');
                        if (otherBtn) {
                            otherBtn.setAttribute('aria-expanded', 'false');
                            const span = otherBtn.querySelector('span');
                            if (span) span.textContent = 'View Details';
                        }
                    }
                });
                
                card.classList.toggle('service-card--expanded');
                const isExpanded = card.classList.contains('service-card--expanded');
                this.setAttribute('aria-expanded', isExpanded);
                const span = this.querySelector('span');
                if (span) span.textContent = isExpanded ? 'Hide Details' : 'View Details';
            });
        }
    });

    // Sub-options Tabs
    const suboptions = document.querySelectorAll('.service-suboptions');
    suboptions.forEach(suboption => {
        const tabs = suboption.querySelectorAll('.service-suboptions__tab');
        const panels = suboption.querySelectorAll('.service-suboptions__panel');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.stopPropagation();
                const targetPanel = this.dataset.tab;
                
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                
                this.classList.add('active');
                const panel = suboption.querySelector(`[data-panel="${targetPanel}"]`);
                if (panel) panel.classList.add('active');
            });
        });
    });
}
