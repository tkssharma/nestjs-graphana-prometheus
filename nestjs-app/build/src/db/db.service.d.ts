import { DataSource, EntityMetadata, Repository } from 'typeorm';
export declare class DatabaseService {
    private dataSource;
    constructor(dataSource: DataSource);
    getRepository<T>(entity: any): Promise<Repository<T>>;
    getAllRepository<T>(): Promise<EntityMetadata[]>;
    close<T>(): Promise<void>;
}
