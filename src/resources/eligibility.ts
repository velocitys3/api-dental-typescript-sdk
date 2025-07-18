// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Eligibility extends APIResource {
  /**
   * Request Eligibility
   */
  checkEligibility(body: EligibilityCheckEligibilityParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/Eligibility', { body, ...options });
  }
}

export interface PayerInput {
  id: string;
}

export interface ProviderInput {
  npi: string;

  tax_id: string;
}

export interface SubscriberInput {
  dob: string;

  first_name: string;

  group_number: string;

  last_name: string;

  member_id: string;
}

export type EligibilityCheckEligibilityResponse = unknown;

export interface EligibilityCheckEligibilityParams {
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
    type EligibilityCheckEligibilityResponse as EligibilityCheckEligibilityResponse,
    type EligibilityCheckEligibilityParams as EligibilityCheckEligibilityParams,
  };
}
