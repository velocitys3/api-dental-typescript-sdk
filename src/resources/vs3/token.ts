// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Token extends APIResource {
  retrieve(query: TokenRetrieveParams, options?: RequestOptions): APIPromise<TokenRetrieveResponse> {
    return this._client.get('/vs3/token/get', { query, ...options });
  }
}

export interface TokenRetrieveResponse {
  data?: TokenRetrieveResponse.Data;
}

export namespace TokenRetrieveResponse {
  export interface Data {
    accountId: string;
  }
}

export interface TokenRetrieveParams {
  /**
   * Type: string
   */
  accountId: string;
}

export declare namespace Token {
  export {
    type TokenRetrieveResponse as TokenRetrieveResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
  };
}
