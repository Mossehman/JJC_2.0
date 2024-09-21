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

// Define a counter to ensure unique name attributes for each set of radio buttons

// Define the function to generate the HTML for each set of radio buttons with unique names
function generateRadioButtonsHTML(statType) {
    return `
    <div class="radioButtonsDiv">
        <div class="subG4Stats" id="${statType}Stats">
            <input type="radio" id="${statType}G4min3" name="${statType}" />
            <label for="${statType}G4min3">Grade 4 - 3 (0P)</label><br>
            <input type="radio" id="${statType}G4min2" name="${statType}" />
            <label for="${statType}G4min2">Grade 4 - 2 (0P)</label><br>
            <input type="radio" id="${statType}G4min1" name="${statType}" />
            <label for="${statType}G4min1">Grade 4 - 1 (0P)</label><br>
        </div>
        <input type="radio" id="${statType}G4" name="${statType}" checked="checked" />
        <label for="${statType}G4">Grade 4 (0P)</label><br>
        <input type="radio" id="${statType}G3" name="${statType}" />
        <label for="${statType}G3">Grade 3 (1P)</label><br>
        <input type="radio" id="${statType}G2" name="${statType}" />
        <label for="${statType}G2">Grade 2 (2P)</label><br>
        <input type="radio" id="${statType}G1" name="${statType}" />
        <label for="${statType}G1">Grade 1 (3P)</label><br>
        <input type="radio" id="${statType}SG" name="${statType}" />
        <label for="${statType}SG">Special Grade (4P)</label><br>
        <div class="superSGStats" id="${statType}Stats">
            <input type="radio" id="${statType}SGplus1" name="${statType}" />
            <label for="${statType}SGplus1">Special Grade + 1 (6P)</label><br>
            <input type="radio" id="${statType}SGplus2" name="${statType}" />
            <label for="${statType}SGplus2">Special Grade + 2 (8P)</label><br>
            <input type="radio" id="${statType}SGplus3" name="${statType}" />
            <label for="${statType}SGplus3">Special Grade + 3 (10P)</label><br>
        </div>
    </div>`;
}

// Select all elements with the class 'ocStat'
let ocStatElements = Array.from(document.getElementsByClassName('ocStat'));

// Loop through each element and insert a unique set of radio buttons after it
for (let i = 0; i < ocStatElements.length; i++) {
    ocStatElements[i].insertAdjacentHTML('afterend', generateRadioButtonsHTML(ocStatElements[i].id));
}




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