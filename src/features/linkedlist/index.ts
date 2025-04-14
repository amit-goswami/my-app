class Node<T> {
  public data: T;
  public next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  append(value: T) {
    const node = new Node(value);

    if (!this.head) {
      return (this.head = node);
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  printList() {
    if (!this.head) {
      return console.log("No Length");
    }

    let current = this.head;
    let answer = "";

    while (current !== null) {
      answer += `${current.data} ->`;
      current = current.next as Node<T>;
    }

    console.log("Print List", answer);
  }
}

const LLinkedList = new LinkedList();
console.log(LLinkedList.printList());
console.log(LLinkedList.append(2));
console.log(LLinkedList.append(3));
console.log(LLinkedList.append(4));
console.log(LLinkedList.printList());
