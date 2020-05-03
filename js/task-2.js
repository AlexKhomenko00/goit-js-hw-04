const buttonRef = document.querySelector('.run-button-2');

buttonRef.addEventListener('click', function() {
  const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);

      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);

      this.items = this.items.filter(item => item !== itemName);
    },
  };

  const invokeInventoryAction = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action.call(inventory, itemName);
  };

  invokeInventoryAction('Medkit', inventory.add);
  // Invoking action on Medkit
  // Adding Medkit to inventory

  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
});
