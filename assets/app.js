const btn = document.querySelector('.section__button button');
const description = document.querySelector('.section__description');

btn.addEventListener('click', () => {
    description.classList.toggle('expanded');
    if (description.classList.contains('expanded')) {
        btn.textContent = 'Show less';
    }else{
        btn.textContent = 'Learn more';
    }
});

const section = document.querySelector('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
    }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(section);
  