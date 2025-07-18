// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EligibilityAPI from './eligibility';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Apidental extends APIResource {
  createEligibility(
    body: ApidentalCreateEligibilityParams,
    options?: RequestOptions,
  ): APIPromise<ApidentalCreateEligibilityResponse> {
    return this._client.post('/apidental/Post_eligibility', { body, ...options });
  }

  listPayers(options?: RequestOptions): APIPromise<ApidentalListPayersResponse> {
    return this._client.get('/apidental/Payer_list', options);
  }
}

export interface ApidentalCreateEligibilityResponse {
  data?: ApidentalCreateEligibilityResponse.Data;
}

export namespace ApidentalCreateEligibilityResponse {
  export interface Data {
    apidental_post_eligibility?: unknown;
  }
}

export interface ApidentalListPayersResponse {
  data?: ApidentalListPayersResponse.Data;
}

export namespace ApidentalListPayersResponse {
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

export interface ApidentalCreateEligibilityParams {
  input?: ApidentalCreateEligibilityParams.Input | null;
}

export namespace ApidentalCreateEligibilityParams {
  export interface Input {
    dependent?: Input.Dependent | null;

    payer?: EligibilityAPI.PayerInput;

    provider?: EligibilityAPI.ProviderInput;

    subscriber?: EligibilityAPI.SubscriberInput;

    version?: string | null;
  }

  export namespace Input {
    export interface Dependent {
      dob?: string | null;

      first_name?: string | null;

      group_number?: string | null;

      last_name?: string | null;

      member_id?: string | null;
    }
  }
}

export declare namespace Apidental {
  export {
    type ApidentalCreateEligibilityResponse as ApidentalCreateEligibilityResponse,
    type ApidentalListPayersResponse as ApidentalListPayersResponse,
    type ApidentalCreateEligibilityParams as ApidentalCreateEligibilityParams,
  };
}
