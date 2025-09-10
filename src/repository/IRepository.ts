export interface IRepository<T> {

    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(data: Omit<T, "id"> ): Promise<T>;
    update(id: number, data: Partial<T>): Promise<T | null>;
    delete(id: number): Promise<void>;

}       