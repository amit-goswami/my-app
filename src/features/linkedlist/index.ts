interface IPushAt<T> {
  index: number;
  value: T;
}

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

  prepend(value: T) {
    const node = new Node(value);

    if (!this.head) {
      return (this.head = node);
    }

    node.next = this.head;
    this.head = node;
  }

  printList() {
    if (!this.head) {
      return console.log("EMPTY LIST");
    }

    let current = this.head;
    let ans = "";

    while (current) {
      ans += `${current.data} =>`;
      current = current.next as Node<T>;
    }

    console.log("LIST: ", ans);
    return ans;
  }

  size() {
    let size = 0;
    if (!this.head) {
      return size;
    }

    let current = this.head;
    while (current) {
      size = size + 1;
      current = current.next as Node<T>;
    }

    console.log("SIZE: ", size);
    return size;
  }

  clear() {
    return (this.head = null);
  }

  pushat(index: IPushAt<T>["index"], value: IPushAt<T>["value"]) {
    const currentSize = this.size();
    if (index > currentSize) {
      return console.log("OVERFLOW");
    }

    if (!this.head || index === 0) {
      return console.log("NO PLACE TO INSET NODE");
    }

    let size = 0;
    let current = this.head;

    while (size !== index) {
      const nextIndex = size + 1;
      if (nextIndex === index) {
        const node = new Node(value);
        node.next = current.next;
        current.next = node;
      }
      current = current.next as Node<T>;
      size++;
    }
  }
}

const LLinkedList = new LinkedList();
console.log(LLinkedList.printList());
console.log(LLinkedList.append(1));
console.log(LLinkedList.printList());
console.log(LLinkedList.printList());
console.log(LLinkedList.size());
console.log(LLinkedList.pushat(1, 2));
console.log(LLinkedList.pushat(1, 3));
console.log(LLinkedList.pushat(2, 4));
console.log(LLinkedList.printList());
