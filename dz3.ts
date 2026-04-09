// Написать на TypeScript реализацию Map в виде класса.
// Класс Map с методами: set, delete, get, clear
// Хранить данные в buckets, hash которых рассчитывать по какой логике
// Если hash одинаков, элементы backet связываются друг с другом

type Entry<K, V> = {
  key: K;
  value: V;
  next: Entry<K, V> | null;
};

class MyMap<K, V> {
  private buckets: Array<Entry<K, V> | null>;
  private capacity: number;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
  }

  private hash(key: K): number {
    const strKey = String(key);
    let hash = 0;

    for (let i = 0; i < strKey.length; i++) {
      hash += strKey.charCodeAt(i);
    }

    return hash % this.capacity;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);

    let current = this.buckets[index];

    if (!current) {
      this.buckets[index] = { key, value, next: null };
      return;
    }

    let prev: Entry<K, V> | null = null;

    while (current) {
      if (current.key === key) {
        current.value = value; // обновление
        return;
      }
      prev = current;
      current = current.next;
    }

    prev!.next = { key, value, next: null };
  }

  get(key: K): V | undefined {
    const index = this.hash(key);

    let current = this.buckets[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return undefined;
  }

  delete(key: K): boolean {
    const index = this.hash(key);

    let current = this.buckets[index];
    let prev: Entry<K, V> | null = null;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.buckets[index] = current.next;
        }
        return true;
      }

      prev = current;
      current = current.next;
    }

    return false;
  }

  clear(): void {
    this.buckets = new Array(this.capacity).fill(null);
  }
}
