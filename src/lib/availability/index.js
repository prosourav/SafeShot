const findAllItems = () =>{
  let today = new Date();

  // Create an empty array to store the dates
  let dates = [];

  for (let i = 0; i < 10; i++) {
    // Copy the date object
    let date = new Date(today);
   
    date.setDate(date.getDate() + i);
    // Push the date to the array
    dates.push(date.toJSON().slice(0,10));
  };
  return dates;
};

module.exports = findAllItems;