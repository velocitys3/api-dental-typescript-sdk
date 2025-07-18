// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Eligibility extends APIResource {
  check(body: EligibilityCheckParams, options?: RequestOptions): APIPromise<EligibilityCheckResponse> {
    return this._client.post('/Eligibility', { body, ...options });
  }
}

export interface PayerInput {
  id?: string | null;
}

export interface ProviderInput {
  npi?: string | null;

  tax_id?: string | null;
}

export interface SubscriberInput {
  dob?: string | null;

  first_name?: string | null;

  group_number?: string | null;

  last_name?: string | null;

  member_id?: string | null;
}

export interface EligibilityCheckResponse {
  data?: EligibilityCheckResponse.Data;
}

export namespace EligibilityCheckResponse {
  export interface Data {
    apidental_post_eligibility?: unknown;
  }
}

export interface EligibilityCheckParams {
  payer: PayerInput;

  provider: ProviderInput;

  subscriber: SubscriberInput;

  version: string;
}

export declare namespace Eligibility {
  export {
    type PayerInput as PayerInput,
    type ProviderInput as ProviderInput,
    type SubscriberInput as SubscriberInput,
    type EligibilityCheckResponse as EligibilityCheckResponse,
    type EligibilityCheckParams as EligibilityCheckParams,
  };
}
