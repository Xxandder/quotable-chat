interface IRepository<T> {
  create(item: T): Promise<T>;

  findById(id: string): Promise<T | null>;

  findAll(query?: unknown): Promise<T[]>;

  update(id: string, item: Partial<T>): Promise<T | null>;

  delete(id: string): Promise<boolean>;
}

export { IRepository };
