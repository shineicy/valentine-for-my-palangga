const messages = [
    "sure ka???",
    "sureness??",
    "weeehhhhh sure baaa?",
    "finaaaal najuddd??",
    "basin naa pakay finaaaall ",
    "pinaka finaaal najjudddd? huhu",
    "pag sure baaaaaaaa",
    "mamatay mga manok sainyong silingan??",
    "kkk fineee di nako mag ask hmpp",
    "jk, pag yes na pls huhu"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

