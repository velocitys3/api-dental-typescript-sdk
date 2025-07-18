// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import APIDentalProd from 'api-dental-prod';

const client = new APIDentalProd({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eligibility', () => {
  // skipped: tests are disabled for the time being
  test.skip('check: only required params', async () => {
    const responsePromise = client.eligibility.check({
      payer: {},
      provider: {},
      subscriber: {},
      version: 'version',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('check: required and optional params', async () => {
    const response = await client.eligibility.check({
      payer: { id: 'id' },
      provider: { npi: 'npi', tax_id: 'tax_id' },
      subscriber: {
        dob: 'dob',
        first_name: 'first_name',
        group_number: 'group_number',
        last_name: 'last_name',
        member_id: 'member_id',
      },
      version: 'version',
    });
  });
});
