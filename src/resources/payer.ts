// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payer extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<PayerRetrieveResponse> {
    return this._client.get('/Payer', options);
  }
}

export interface PayerRetrieveResponse {
  data?: PayerRetrieveResponse.Data;
}

export namespace PayerRetrieveResponse {
  export interface Data {
    apidental_payer_list?: Array<Data.ApidentalPayerList>;
  }

  export namespace Data {
    export interface ApidentalPayerList {
      id: string;

      name: string;

      alt_payer_ids?: Array<string>;

      features?: Array<string>;

      onederfulPayerId?: string;

      status?: string;
    }
  }
}

export declare namespace Payer {
  export { type PayerRetrieveResponse as PayerRetrieveResponse };
}
