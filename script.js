function run() {

    update();


    requestAnimationFrame(run); //run recursively calls itself at the end of the code
}


let pointCap = 0;

let headerButtons = Array.from(document.getElementsByClassName('HeaderButton'));
let titleText = Array.from(document.getElementsByClassName('titleText'));
let sectionDivs = Array.from(document.getElementsByClassName('inputData'));

for (let i = 0; i < headerButtons.length; i++) {
    headerButtons[i].addEventListener('click', function () {
        for (let j = 0; j < sectionDivs.length; j++) {
            titleText[j].style.display = 'none';
            sectionDivs[j].style.display = 'none';
        };
        titleText[i].style.display = 'block';
        sectionDivs[i].style.display = 'block';
    });
};


document.getElementById('addOcNickname').addEventListener('click', function () {
    // Create the div element for a new nickname
    const newNicknameDiv = document.createElement('div');
    newNicknameDiv.classList.add('ocNicknameDiv'); // Make sure the class matches the CSS

    // Create the input element for the nickname
    const newNicknameInput = document.createElement('input');
    newNicknameInput.type = 'text';
    newNicknameInput.name = 'ocNickname';
    newNicknameInput.placeholder = 'New OC Nickname';
    newNicknameInput.id = 'ocNickname'; // Add class for nickname styling

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.id = 'removeOcNickname'; // Add class for remove button styling
    removeButton.addEventListener('click', function () {
        newNicknameDiv.remove();
    });

    // Append the input and remove button to the new div
    newNicknameDiv.appendChild(newNicknameInput);
    newNicknameDiv.appendChild(removeButton);

    // Find the target to insert before (ocAffiliation)
    const ocAffiliationInput = document.querySelector('input[list="ocAffiliationPlaceholders"]');

    // Insert the new div before the ocAffiliation input
    ocAffiliationInput.parentNode.insertBefore(newNicknameDiv, ocAffiliationHeader);
});

const gradePointList = document.getElementById('gradePointList');
const toggleButton = document.getElementById('showGradePoints');

toggleButton.addEventListener('click', function () {
    if (gradePointList.style.maxHeight && gradePointList.style.maxHeight !== '0px') {
        // Collapse the list
        gradePointList.style.maxHeight = '0px';
    } else {
        // Expand the list and set max-height dynamically
        gradePointList.style.maxHeight = gradePointList.scrollHeight + 'px';
    }
});



function update() {

}


run();