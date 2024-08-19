document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');

    addItemButton.addEventListener('click', () => {
        const newItemText = itemInput.value.trim();

        if (newItemText !== "") {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            itemInput.value = ""; 
        }
    });

    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItemButton.click();
        }
    });
});
