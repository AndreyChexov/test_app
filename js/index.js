let animItems = document.querySelectorAll('.anim_item')

if (animItems.length > 0)
{
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let  animItemPoint = window.innerHeight - animItemHeight / animStart;

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ) {
                animItem.classList.add('__active');
            }
            else {
                animItem.classList.remove('__active');
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
             scrollLeft = window.pageXOffset ||  document.documentElement.scrollLeft;
                 scrollTop = window.pageYOffset  || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
}
