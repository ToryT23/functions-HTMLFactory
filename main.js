/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */

const computer = {
  id: 1,
  manufacturer: "Apple",
  make: "Macbook",
  model: "Pro",
  specs: {
    memory: 32,
    hardDrive: "500 GB",
    processor: 2.4,
  },
};

// You have been given some starter code. It's an object representing an Apple Macbook Pro computer.
// You need to define a function that takes that object as input (needs a parameter), and outputs (returns)
// the following HTML representation of that computer.

const appleMacBook = (computerObject) => {
  const appleMacBookHtml = `
        <section id = computer--${computerObject.id}>
    <h1>  ${computerObject.manufacturer} ${computerObject.make} </h1>
   <div> ${computerObject.model} </div>
   <div> ${computerObject.specs.memory} </div>
    <div> ${computerObject.specs.hardDrive} </div>
   <div> ${computerObject.specs.processor} </div>
	</section>`;

  return appleMacBookHtml;
};

const descriptionOfMac = appleMacBook(computer);

console.log(descriptionOfMac);
