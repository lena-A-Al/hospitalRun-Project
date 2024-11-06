/** we can export all the files in query file
 * this will help us when we import files from the resolvers directory; if we have
 * many files, we do not have to write import {query} from "./resolvers/Query"
 * we can just use import {Query, mutation, other files} from "./resolvers/index"
 * when we import index file; we do not have to specifie it, by default it is imported.
 */
export * from "./Query";
export * from "./mutation/Mutation";
