import {Account} from '../Server/Model';

export enum AccessRights {
    CREATE,
    READ,
    UPDATE,
    DELETE,

}

export interface UserCredentials extends  Account{
    accessRights: AccessRights[]
}

export enum HTTP_CODES {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404
}

export enum HTTP_METHODS  {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE'
}

export interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    workingPosition: workingPosition
}

export enum workingPosition {
    JUNIOR,
    PROGRAMMER,
    ENGINEER,
    EXPERT,
    MANAGER
}