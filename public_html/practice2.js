document.getElementById('applyButton').addEventListener('click', function(){ 
    const borderR = document.getElementById('borderR').value;
    const borderG = document.getElementById('borderG').value;
    const borderB = document.getElementById('borderB').value;
    const borderWidth = document.getElementById('borderWidth').value;
    const backgroundR = document.getElementById('backgroundR').value;
    const backgroundG = document.getElementById('backgroundG').value;
    const backgroundB = document.getElementById('backgroundB').value;

    const box = document.getElementById('box');
    box.style.border = `${borderWidth}px solid rgb(${borderR}, ${borderG}, ${borderB})`;
    box.style.backgroundColor = `rgb(${backgroundR}, ${backgroundG}, ${backgroundB})`;
});