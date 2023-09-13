document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastscrollPosition > 0 ? 'down' : 'up'; 
    const sections = [...document.querySelectorAll('section')];

    const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered;
    if (destIndex >= 0 && destIndex < sections.length){
        window.scroll (0, sections[destIndex].offsetTop);
    }

    sections.forEach((section, index) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
        
        }
    })
    document.lastScrollPosition = window.pageYOffset;
    
}



