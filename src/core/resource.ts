// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { APIDentalProd } from '../client';

export abstract class APIResource {
  protected _client: APIDentalProd;

  constructor(client: APIDentalProd) {
    this._client = client;
  }
}
