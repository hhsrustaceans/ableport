import 'server-only';
import {DataSource, DataSourceOptions} from "typeorm"
import * as entities from "@/lib/types/models/index";

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    entities: entities,
    logging: true,
    synchronize: true, // DO NOT USE IN PRODUCTION
};

// export const appDataSource = new DataSource(dataSourceOptions);
 
//  const main = async () => {
//      await appDataSource.initialize();
//  };
 
//  main().catch(err => {
//      console.error(err);
//  });