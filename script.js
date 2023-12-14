function mincost(arr)
{ 
//write your code here
	 // Convert the input array to a min heap
  const heapify = () => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      heapifyDown(i);
    }
  };

  const heapifyDown = (index) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < arr.length && arr[left] < arr[smallest]) {
      smallest = left;
    }

    if (right < arr.length && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [arr[index], arr[smallest]] = [arr[smallest], arr[index]];
      heapifyDown(smallest);
    }
  };

  heapify();

  // Initialize the total cost
  let totalCost = 0;

  // Continue until there is only one rope left
  while (arr.length > 1) {
    // Extract the two smallest ropes from the heap
    const rope1 = arr.shift();
    const rope2 = arr.shift();

    // Calculate the cost of connecting the two ropes
    const cost = rope1 + rope2;

    // Add the cost to the total
    totalCost += cost;

    // Add the newly created rope back to the heap
    arr.push(cost);
    heapifyDown(arr.length - 1);
  }

  return totalCost;
// return the min cost
  
}

module.exports = mincost;
