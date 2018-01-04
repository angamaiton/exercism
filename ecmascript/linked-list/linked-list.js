class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    if (!this.tail) {
      this.head = this.tail = new Node(val);
      this.length++;
    } else {
      this.tail = this.tail.next = new Node(val, null, this.tail);
      this.length++;
    }
  }
  pop() {
    const value = this.tail.data;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.length--;
    return value;
  }
  shift() {
    const value = this.head.data;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null;
    }
    this.length--;
    return value;
  }
  unshift(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
      this.length++;
    } else {
      this.head = this.head.previous = new Node(val, this.head);
      this.length++;
    }
  }
  count() {
    return this.length;
  }
  delete(val) {
    let current = this.head;
    while (current) {
      if (current.data === val) {
        if (current.next) {
          current.next.previous = current.previous;
        }
        if (current.previous) {
          current.previous.next = current.next;
        }
        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = current.previous;
        }
        this.length--;
        return;
      }
      current = current.next;
    }
  }
}

export default LinkedList;
