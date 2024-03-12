import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort()
console.log(numbersCollection.data);

const charCollection = new CharCollection('Xaaaby');
charCollection.sort()
console.log(charCollection.data);


const linkedlist = new LinkedList();
linkedlist.add(600);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);

linkedlist.sort();
linkedlist.print();