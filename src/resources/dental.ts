// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Dental extends APIResource {
  checkEligibility(
    body: DentalCheckEligibilityParams,
    options?: RequestOptions,
  ): APIPromise<DentalCheckEligibilityResponse> {
    return this._client.post('/dental/eligibility', { body, ...options });
  }
}

export interface DentalCheckEligibilityResponse {
  data?: DentalCheckEligibilityResponse.Data;
}

export namespace DentalCheckEligibilityResponse {
  export interface Data {
    resp: unknown;
  }
}

export interface DentalCheckEligibilityParams {
  input?: unknown;
}

export declare namespace Dental {
  export {
    type DentalCheckEligibilityResponse as DentalCheckEligibilityResponse,
    type DentalCheckEligibilityParams as DentalCheckEligibilityParams,
  };
}
