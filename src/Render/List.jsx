
function List(){
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},  
                    {id: 3, name: "banna", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER
    fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC ORDER
    // sort() function sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
    
    //Here's when we use the filter() function to filter out the fruits with calories less than 100
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const listItems = lowCalFruits.map((lowCalFruit) => <li key={lowCalFruit.id}>
    //                                         {lowCalFruit.name}: &nbsp;
    //                                         <b>{lowCalFruit.calories}</b></li>);
    // filter() function creates a new array with all elements that pass the test implemented by the provided function.
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const listItems = highCalFruits.map((highCalFruit) => <li key={highCalFruit.id}>
                                            {highCalFruit.name}: &nbsp;
                                            <b>{highCalFruit.calories}</b></li>);

    // const listItems = fruits.map((fruit) => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calories}</b></li>);
    // map() function creates a new array with the results of calling a provided function on every element in the calling array.

    return(<ol>{listItems}</ol>);
    
}
export default List