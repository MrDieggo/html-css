/** help */
function log(message){
    console.log('>' + message)
}

/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    //log('CARD: Start Dragging')
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag(){
    //log('CARD: Is Dragging')
}

function dragend(){
    //log('CARD: Stop Drag')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

/** Dropzone */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    //log('DROP: Enter in Zone')
}
function dragover(){
    //log('DROP: Over')
    this.classList.add('over')

    //pegar o cartao
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}
function dragleave(){
    //log('DROP: Leave')
    this.classList.remove('over')
}
function drop(){
    log('DROP: Dropped')
}