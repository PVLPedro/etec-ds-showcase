const btnStart = document.getElementById('start-button');

btnStart.addEventListener('click', () => {
    document.body.classList.add('started');
})

const buttons = document.querySelectorAll('.button');
const contents = document.querySelectorAll('.content');

function switchSection(targetId) {

    contents.forEach(content => {
        
        content.classList.toggle(
            'is-active',
            content.id === targetId
        );
    });
}

buttons.forEach(button => {

    button.addEventListener('click', () => {
        switchSection(button.dataset.target);
    });
});

switchSection('candidatos');