// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payer extends APIResource {
  /**
   * List Payers
   */
  listPayers(options?: RequestOptions): APIPromise<PayerListPayersResponse> {
    return this._client.get('/Payer', options);
  }
}

export type PayerListPayersResponse = Array<PayerListPayersResponse.PayerListPayersResponseItem>;

export namespace PayerListPayersResponse {
  export interface PayerListPayersResponseItem {
    id?: string;

    alt_payer_ids?: Array<string>;

    features?: Array<string>;

    name?: string;

    onederfulPayerId?: string;

    status?: string;
  }
}

export declare namespace Payer {
  export { type PayerListPayersResponse as PayerListPayersResponse };
}
