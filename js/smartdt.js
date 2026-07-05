/* =========================================================
   SMART DT GUIDE: PROTOTYPE INTERACTION ENGINE (CAMP21)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------
       1. SMOOTH PROGRESS BAR ANIMATION
       Gives a premium, fluid loading effect when the dashboard opens.
       --------------------------------------------------------- */
    const progressBar = document.querySelector('.progress-bar-fill');
    if (progressBar) {
        // Temporarily set to 0, then animate to 60% after a short delay
        const targetWidth = progressBar.style.width || '60%';
        progressBar.style.width = '0%';
        progressBar.style.transition = 'width 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
        
        setTimeout(() => {
            progressBar.style.width = targetWidth;
        }, 300);
    }

    /* ---------------------------------------------------------
       2. ONBOARDING STATE MANAGEMENT (INTRO -> DASHBOARD)
       Remembers if the student has completed the Introduction page.
       --------------------------------------------------------- */
    const unlockPhaseBtn = document.querySelector('.btn-start-journey');
    
    // If we are on the Intro page and click "Unlock Phase 01"
    if (unlockPhaseBtn) {
        unlockPhaseBtn.addEventListener('click', () => {
            localStorage.setItem('camp21_intro_completed', 'true');
        });
    }

    // If we are on the Dashboard page, check if the intro is completed
    const startHereCard = document.querySelector('.start-here-card');
    if (startHereCard && localStorage.getItem('camp21_intro_completed') === 'true') {
        
        // Morph the giant "Start Here" card into a minimal "Review" strip
        startHereCard.style.padding = '16px 24px';
        startHereCard.style.marginBottom = '24px';
        startHereCard.style.flexDirection = 'row';
        
        startHereCard.innerHTML = `
            <div style="display: flex; align-items: center; gap: 16px;">
                <span class="start-here-tag" style="margin: 0; background: rgba(255,255,255,0.05); color: var(--text-muted);">Completed</span>
                <h2 style="font-size: 16px; margin: 0; color: var(--text-muted);">Introduction to Design Thinking</h2>
            </div>
            <a href="intro-dt.html" class="btn-outline" style="padding: 8px 16px; font-size: 13px; border-radius: 12px;">Review Guide</a>
        `;
    }

    /* ---------------------------------------------------------
       3. TEMPLATE HOVER EFFECTS (3D ASSET INTERACTION)
       Subtle scaling when hovering over quick action buttons.
       --------------------------------------------------------- */
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const icon = btn.querySelector('img');
            if(icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        btn.addEventListener('mouseleave', () => {
            const icon = btn.querySelector('img');
            if(icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    /* ---------------------------------------------------------
       4. MOBILE NAVIGATION HIGHLIGHTING
       Dynamically highlights the active tab based on the URL.
       --------------------------------------------------------- */
    const currentPath = window.location.pathname.split('/').pop();
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const sidebarLinks = document.querySelectorAll('.sidebar-menu li');

    const updateActiveState = (links, isSidebar = false) => {
        links.forEach(link => {
            // Remove active classes
            if (isSidebar) link.classList.remove('active');
            else link.classList.remove('active');
            
            // Add active class if it matches the current URL
            const anchor = isSidebar ? link.querySelector('a') : link;
            if (anchor && anchor.getAttribute('href') === currentPath) {
                if (isSidebar) link.classList.add('active');
                else link.classList.add('active');
            }
        });
    };

    if (currentPath) {
        updateActiveState(mobileNavLinks, false);
        updateActiveState(sidebarLinks, true);
    }
});