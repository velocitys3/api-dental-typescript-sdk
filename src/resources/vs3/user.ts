// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class User extends APIResource {
  retrieve(query: UserRetrieveParams, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get('/vs3/user/get', { query, ...options });
  }
}

export interface UserRetrieveResponse {
  data?: unknown;
}

export interface UserRetrieveParams {
  /**
   * Type: string
   */
  email: string;
}

export declare namespace User {
  export { type UserRetrieveResponse as UserRetrieveResponse, type UserRetrieveParams as UserRetrieveParams };
}
