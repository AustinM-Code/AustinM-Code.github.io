// Interactive and animated effects for links and buttons

document.addEventListener('DOMContentLoaded', function() {
    // Animate nav links on hover
    document.querySelectorAll('.navbar a').forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            link.style.transform = 'scale(1.15)';
            link.style.textShadow = '0 0 8px #ffd700';
        });
        link.addEventListener('mouseleave', function() {
            link.style.transform = '';
            link.style.textShadow = '';
        });
    });

    // Animate buttons on hover and click
    document.querySelectorAll('.cta, button').forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            btn.style.transform = 'scale(1.08)';
            btn.style.boxShadow = '0 0 16px #ffd700';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.transform = '';
            btn.style.boxShadow = '';
        });
        btn.addEventListener('click', function(e) {
            // Ripple effect
            let ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            btn.appendChild(ripple);
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
});

// Ripple effect CSS (injects style if not present)
(function() {
    if (!document.getElementById('ripple-style')) {
        var style = document.createElement('style');
        style.id = 'ripple-style';
        style.innerHTML = `
        .ripple {
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(255, 215, 0, 0.5);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%) scale(0);
            animation: ripple-effect 0.6s linear;
            z-index: 2;
        }
        @keyframes ripple-effect {
            to {
                transform: translate(-50%, -50%) scale(2.5);
                opacity: 0;
            }
        }
        .cta, button {
            position: relative;
            overflow: hidden;
        }
        `;
        document.head.appendChild(style);
    }
})();
