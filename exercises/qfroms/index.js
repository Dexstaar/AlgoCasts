// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
}
















// solution 1
// class Queue {
//     constructor() {
//         this.first = new Stack();
//         this.second = new Stack();
//     }

//     add(record) {
//         this.first.push(record);
//     }

//     remove() {
//         while (this.first.peek()) {
//             this.second.push(this.first.pop());
//         }

//         const record = this.second.pop();

//         while (this.second.peek()) {
//             this.first.push(this.second.pop());
//         }

//         return record;
//     }

//     peek() {
//         while (this.first.peek()) {
//             this.second.push(this.first.pop());
//         }

//         const record = this.second.peek();

//         while (this.second.peek()) {
//             this.first.push(this.second.pop());
//         }

//         return record;
//     }
// }

// My solution
// class Queue {
//     constructor() {
//         this.main = new Stack();
//         this.sub = new Stack();
//     }

//     add(element) {
//         while(this.main.peek()) {
//             this.sub.push(this.main.pop())
//         }

//         this.main.push(element);

//         while(this.sub.peek()) {
//             this.main.push(this.sub.pop());
//         }
//     }

//     remove() {
//         return this.main.pop();
//     }

//     peek() {
//         return this.main.peek();
//     }
// }

module.exports = Queue;
