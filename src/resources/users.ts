// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  retrieve(query: UserRetrieveParams, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get('/users/get', { query, ...options });
  }

  update(body: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    return this._client.post('/users/update', { body, ...options });
  }

  subscribe(query: UserSubscribeParams, options?: RequestOptions): APIPromise<UserSubscribeResponse> {
    return this._client.get('/users/subscribe', { query, ...options });
  }
}

export interface UserRetrieveResponse {
  data?: UserRetrieveResponse.Data;
}

export namespace UserRetrieveResponse {
  export interface Data {
    id: string;

    bio: string;

    name: string;
  }
}

export interface UserUpdateResponse {
  data?: UserUpdateResponse.Data;
}

export namespace UserUpdateResponse {
  export interface Data {
    id: string;

    bio: string;

    name: string;
  }
}

export interface UserSubscribeResponse {
  data?: UserSubscribeResponse.Data;
}

export namespace UserSubscribeResponse {
  export interface Data {
    id: string;

    bio: string;

    name: string;

    time: string;
  }
}

export interface UserRetrieveParams {
  /**
   * Type: string
   */
  id: string;
}

export interface UserUpdateParams {
  id: string;

  bio: string;

  name: string;
}

export interface UserSubscribeParams {
  /**
   * Type: string
   */
  id: string;
}

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserSubscribeResponse as UserSubscribeResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserSubscribeParams as UserSubscribeParams,
  };
}
