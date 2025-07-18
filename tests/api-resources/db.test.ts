// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import APIDentalProd from 'api-dental-prod';

const client = new APIDentalProd({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource db', () => {
  // skipped: tests are disabled for the time being
  test.skip('aggregateUsage', async () => {
    const responsePromise = client.db.aggregateUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.aggregateUsage({ orderBy: [{}], skip: 0, take: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsageRaw', async () => {
    const responsePromise = client.db.aggregateUsageRaw();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsageRaw: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.aggregateUsageRaw({ pipeline: [{}] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsers', async () => {
    const responsePromise = client.db.aggregateUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.aggregateUsers({ orderBy: [{}], skip: 0, take: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsersRaw', async () => {
    const responsePromise = client.db.aggregateUsersRaw();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('aggregateUsersRaw: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.aggregateUsersRaw({ pipeline: [{}] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createManyUsage: only required params', async () => {
    const responsePromise = client.db.createManyUsage({ data: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createManyUsage: required and optional params', async () => {
    const response = await client.db.createManyUsage({
      data: [
        {
          id: 'id',
          createdAt: 'createdAt',
          datadogTraceId: {},
          domain: 'domain',
          errorMsg: 'errorMsg',
          operationName: 'operationName',
          requestTime: 'requestTime',
          statusCode: 0,
          userId: 'userId',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createManyUsers: only required params', async () => {
    const responsePromise = client.db.createManyUsers({ data: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createManyUsers: required and optional params', async () => {
    const response = await client.db.createManyUsers({
      data: [
        {
          id: 'id',
          auth_token: 'auth_token',
          billing: {
            set: {
              customer_id: 'customer_id',
              isTrialExpired: true,
              isTrialPeriod: true,
              plan_id: 'plan_id',
              subscription_id: 'subscription_id',
            },
          },
          createdDate: 'createdDate',
          email: 'email',
          first_name: 'first_name',
          last_name: 'last_name',
          usageCounter: 0,
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createOneUsage: only required params', async () => {
    const responsePromise = client.db.createOneUsage({
      data: {
        createdAt: 'createdAt',
        domain: 'domain',
        operationName: 'operationName',
        requestTime: 'requestTime',
        userId: 'userId',
      },
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
  test.skip('createOneUsage: required and optional params', async () => {
    const response = await client.db.createOneUsage({
      data: {
        createdAt: 'createdAt',
        domain: 'domain',
        operationName: 'operationName',
        requestTime: 'requestTime',
        userId: 'userId',
        id: 'id',
        datadogTraceId: {},
        errorMsg: 'errorMsg',
        statusCode: 0,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createOneUsers: only required params', async () => {
    const responsePromise = client.db.createOneUsers({
      data: {
        auth_token: 'auth_token',
        billing: {},
        createdDate: 'createdDate',
        email: 'email',
        first_name: 'first_name',
        last_name: 'last_name',
        usageCounter: 0,
      },
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
  test.skip('createOneUsers: required and optional params', async () => {
    const response = await client.db.createOneUsers({
      data: {
        auth_token: 'auth_token',
        billing: {
          set: {
            customer_id: 'customer_id',
            isTrialExpired: true,
            isTrialPeriod: true,
            plan_id: 'plan_id',
            subscription_id: 'subscription_id',
          },
        },
        createdDate: 'createdDate',
        email: 'email',
        first_name: 'first_name',
        last_name: 'last_name',
        usageCounter: 0,
        id: 'id',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteManyUsage', async () => {
    const responsePromise = client.db.deleteManyUsage({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteManyUsers', async () => {
    const responsePromise = client.db.deleteManyUsers({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteOneUsage: only required params', async () => {
    const responsePromise = client.db.deleteOneUsage({ where: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteOneUsage: required and optional params', async () => {
    const response = await client.db.deleteOneUsage({ where: { id: 'id' } });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteOneUsers: only required params', async () => {
    const responsePromise = client.db.deleteOneUsers({ where: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteOneUsers: required and optional params', async () => {
    const response = await client.db.deleteOneUsers({ where: { id: 'id' } });
  });

  // skipped: tests are disabled for the time being
  test.skip('executeRaw: only required params', async () => {
    const responsePromise = client.db.executeRaw({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('executeRaw: required and optional params', async () => {
    const response = await client.db.executeRaw({ query: 'query', parameters: ['string'] });
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsage', async () => {
    const responsePromise = client.db.findFirstUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.findFirstUsage(
        { distinct: [{}], orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsageOrThrow', async () => {
    const responsePromise = client.db.findFirstUsageOrThrow();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsageOrThrow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.findFirstUsageOrThrow(
        { distinct: [{}], orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsers', async () => {
    const responsePromise = client.db.findFirstUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.findFirstUsers(
        { distinct: [{}], orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsersOrThrow', async () => {
    const responsePromise = client.db.findFirstUsersOrThrow();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findFirstUsersOrThrow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.findFirstUsersOrThrow(
        { distinct: [{}], orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('findManyUsage', async () => {
    const responsePromise = client.db.findManyUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findManyUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.findManyUsage(
        { distinct: [{}], orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('findManyUsers', async () => {
    const responsePromise = client.db.findManyUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findManyUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.findManyUsers(
        { distinct: [{}], orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('findUniqueUsage', async () => {
    const responsePromise = client.db.findUniqueUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findUniqueUsageOrThrow', async () => {
    const responsePromise = client.db.findUniqueUsageOrThrow();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findUniqueUsers', async () => {
    const responsePromise = client.db.findUniqueUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findUniqueUsersOrThrow', async () => {
    const responsePromise = client.db.findUniqueUsersOrThrow();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findUsageRaw', async () => {
    const responsePromise = client.db.findUsageRaw();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findUsersRaw', async () => {
    const responsePromise = client.db.findUsersRaw();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('groupByUsage', async () => {
    const responsePromise = client.db.groupByUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('groupByUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.groupByUsage(
        { by: { '0': '0' }, orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('groupByUsers', async () => {
    const responsePromise = client.db.groupByUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('groupByUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.db.groupByUsers(
        { by: { '0': '0' }, orderBy: [{}], skip: 0, take: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(APIDentalProd.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('queryRaw: only required params', async () => {
    const responsePromise = client.db.queryRaw({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('queryRaw: required and optional params', async () => {
    const response = await client.db.queryRaw({ query: 'query', parameters: [{}] });
  });

  // skipped: tests are disabled for the time being
  test.skip('queryRawJson: only required params', async () => {
    const responsePromise = client.db.queryRawJson({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('queryRawJson: required and optional params', async () => {
    const response = await client.db.queryRawJson({ query: 'query', parameters: [{}] });
  });

  // skipped: tests are disabled for the time being
  test.skip('runCommandRaw: only required params', async () => {
    const responsePromise = client.db.runCommandRaw({ command: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('runCommandRaw: required and optional params', async () => {
    const response = await client.db.runCommandRaw({ command: {} });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateManyUsage: only required params', async () => {
    const responsePromise = client.db.updateManyUsage({ data: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateManyUsage: required and optional params', async () => {
    const response = await client.db.updateManyUsage({
      data: {
        createdAt: { set: 'set' },
        datadogTraceId: {},
        domain: { set: 'set' },
        errorMsg: { set: 'set', unset: true },
        operationName: { set: 'set' },
        requestTime: { set: 'set' },
        statusCode: { decrement: 0, divide: 0, increment: 0, multiply: 0, set: 0, unset: true },
        userId: { set: 'set' },
      },
      where: {
        id: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        createdAt: {
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          not: {
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
          },
          notIn: ['string'],
        },
        datadogTraceId: { equals: {}, isSet: true, not: {} },
        domain: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        errorMsg: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          isSet: true,
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            isSet: true,
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        operationName: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        OR: [],
        requestTime: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        statusCode: {
          equals: 0,
          gt: 0,
          gte: 0,
          in: [0],
          isSet: true,
          lt: 0,
          lte: 0,
          not: { equals: 0, gt: 0, gte: 0, in: [0], isSet: true, lt: 0, lte: 0, notIn: [0] },
          notIn: [0],
        },
        userId: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateManyUsers: only required params', async () => {
    const responsePromise = client.db.updateManyUsers({ data: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateManyUsers: required and optional params', async () => {
    const response = await client.db.updateManyUsers({
      data: {
        auth_token: { set: 'set' },
        billing: {
          set: {
            customer_id: 'customer_id',
            isTrialExpired: true,
            isTrialPeriod: true,
            plan_id: 'plan_id',
            subscription_id: 'subscription_id',
          },
          update: {
            customer_id: { set: 'set' },
            isTrialExpired: { set: true },
            isTrialPeriod: { set: true },
            plan_id: { set: 'set' },
            subscription_id: { set: 'set' },
          },
        },
        createdDate: { set: 'set' },
        email: { set: 'set' },
        first_name: { set: 'set' },
        last_name: { set: 'set' },
        usageCounter: { decrement: 0, divide: 0, increment: 0, multiply: 0, set: 0 },
      },
      where: {
        id: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        auth_token: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        billing: {
          equals: {
            customer_id: 'customer_id',
            isTrialExpired: true,
            isTrialPeriod: true,
            plan_id: 'plan_id',
            subscription_id: 'subscription_id',
          },
          is: {
            customer_id: {
              contains: 'contains',
              endsWith: 'endsWith',
              equals: 'equals',
              gt: 'gt',
              gte: 'gte',
              in: ['string'],
              lt: 'lt',
              lte: 'lte',
              mode: 'default',
              not: {
                contains: 'contains',
                endsWith: 'endsWith',
                equals: 'equals',
                gt: 'gt',
                gte: 'gte',
                in: ['string'],
                lt: 'lt',
                lte: 'lte',
                notIn: ['string'],
                startsWith: 'startsWith',
              },
              notIn: ['string'],
              startsWith: 'startsWith',
            },
            isTrialExpired: { equals: true, not: { equals: true } },
            isTrialPeriod: { equals: true, not: { equals: true } },
            OR: [],
            plan_id: {
              contains: 'contains',
              endsWith: 'endsWith',
              equals: 'equals',
              gt: 'gt',
              gte: 'gte',
              in: ['string'],
              lt: 'lt',
              lte: 'lte',
              mode: 'default',
              not: {
                contains: 'contains',
                endsWith: 'endsWith',
                equals: 'equals',
                gt: 'gt',
                gte: 'gte',
                in: ['string'],
                lt: 'lt',
                lte: 'lte',
                notIn: ['string'],
                startsWith: 'startsWith',
              },
              notIn: ['string'],
              startsWith: 'startsWith',
            },
            subscription_id: {
              contains: 'contains',
              endsWith: 'endsWith',
              equals: 'equals',
              gt: 'gt',
              gte: 'gte',
              in: ['string'],
              lt: 'lt',
              lte: 'lte',
              mode: 'default',
              not: {
                contains: 'contains',
                endsWith: 'endsWith',
                equals: 'equals',
                gt: 'gt',
                gte: 'gte',
                in: ['string'],
                lt: 'lt',
                lte: 'lte',
                notIn: ['string'],
                startsWith: 'startsWith',
              },
              notIn: ['string'],
              startsWith: 'startsWith',
            },
          },
          isNot: {
            customer_id: {
              contains: 'contains',
              endsWith: 'endsWith',
              equals: 'equals',
              gt: 'gt',
              gte: 'gte',
              in: ['string'],
              lt: 'lt',
              lte: 'lte',
              mode: 'default',
              not: {
                contains: 'contains',
                endsWith: 'endsWith',
                equals: 'equals',
                gt: 'gt',
                gte: 'gte',
                in: ['string'],
                lt: 'lt',
                lte: 'lte',
                notIn: ['string'],
                startsWith: 'startsWith',
              },
              notIn: ['string'],
              startsWith: 'startsWith',
            },
            isTrialExpired: { equals: true, not: { equals: true } },
            isTrialPeriod: { equals: true, not: { equals: true } },
            OR: [],
            plan_id: {
              contains: 'contains',
              endsWith: 'endsWith',
              equals: 'equals',
              gt: 'gt',
              gte: 'gte',
              in: ['string'],
              lt: 'lt',
              lte: 'lte',
              mode: 'default',
              not: {
                contains: 'contains',
                endsWith: 'endsWith',
                equals: 'equals',
                gt: 'gt',
                gte: 'gte',
                in: ['string'],
                lt: 'lt',
                lte: 'lte',
                notIn: ['string'],
                startsWith: 'startsWith',
              },
              notIn: ['string'],
              startsWith: 'startsWith',
            },
            subscription_id: {
              contains: 'contains',
              endsWith: 'endsWith',
              equals: 'equals',
              gt: 'gt',
              gte: 'gte',
              in: ['string'],
              lt: 'lt',
              lte: 'lte',
              mode: 'default',
              not: {
                contains: 'contains',
                endsWith: 'endsWith',
                equals: 'equals',
                gt: 'gt',
                gte: 'gte',
                in: ['string'],
                lt: 'lt',
                lte: 'lte',
                notIn: ['string'],
                startsWith: 'startsWith',
              },
              notIn: ['string'],
              startsWith: 'startsWith',
            },
          },
        },
        createdDate: {
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          not: {
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
          },
          notIn: ['string'],
        },
        email: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        first_name: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        last_name: {
          contains: 'contains',
          endsWith: 'endsWith',
          equals: 'equals',
          gt: 'gt',
          gte: 'gte',
          in: ['string'],
          lt: 'lt',
          lte: 'lte',
          mode: 'default',
          not: {
            contains: 'contains',
            endsWith: 'endsWith',
            equals: 'equals',
            gt: 'gt',
            gte: 'gte',
            in: ['string'],
            lt: 'lt',
            lte: 'lte',
            notIn: ['string'],
            startsWith: 'startsWith',
          },
          notIn: ['string'],
          startsWith: 'startsWith',
        },
        OR: [],
        usageCounter: {
          equals: 0,
          gt: 0,
          gte: 0,
          in: [0],
          lt: 0,
          lte: 0,
          not: { equals: 0, gt: 0, gte: 0, in: [0], lt: 0, lte: 0, notIn: [0] },
          notIn: [0],
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOneUsage: only required params', async () => {
    const responsePromise = client.db.updateOneUsage({ data: {}, where: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOneUsage: required and optional params', async () => {
    const response = await client.db.updateOneUsage({
      data: {
        createdAt: { set: 'set' },
        datadogTraceId: {},
        domain: { set: 'set' },
        errorMsg: { set: 'set', unset: true },
        operationName: { set: 'set' },
        requestTime: { set: 'set' },
        statusCode: { decrement: 0, divide: 0, increment: 0, multiply: 0, set: 0, unset: true },
        userId: { set: 'set' },
      },
      where: { id: 'id' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOneUsers: only required params', async () => {
    const responsePromise = client.db.updateOneUsers({ data: {}, where: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateOneUsers: required and optional params', async () => {
    const response = await client.db.updateOneUsers({
      data: {
        auth_token: { set: 'set' },
        billing: {
          set: {
            customer_id: 'customer_id',
            isTrialExpired: true,
            isTrialPeriod: true,
            plan_id: 'plan_id',
            subscription_id: 'subscription_id',
          },
          update: {
            customer_id: { set: 'set' },
            isTrialExpired: { set: true },
            isTrialPeriod: { set: true },
            plan_id: { set: 'set' },
            subscription_id: { set: 'set' },
          },
        },
        createdDate: { set: 'set' },
        email: { set: 'set' },
        first_name: { set: 'set' },
        last_name: { set: 'set' },
        usageCounter: { decrement: 0, divide: 0, increment: 0, multiply: 0, set: 0 },
      },
      where: { id: 'id' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('upsertOneUsage: only required params', async () => {
    const responsePromise = client.db.upsertOneUsage({
      create: {
        createdAt: 'createdAt',
        domain: 'domain',
        operationName: 'operationName',
        requestTime: 'requestTime',
        userId: 'userId',
      },
      update: {},
      where: {},
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
  test.skip('upsertOneUsage: required and optional params', async () => {
    const response = await client.db.upsertOneUsage({
      create: {
        createdAt: 'createdAt',
        domain: 'domain',
        operationName: 'operationName',
        requestTime: 'requestTime',
        userId: 'userId',
        id: 'id',
        datadogTraceId: {},
        errorMsg: 'errorMsg',
        statusCode: 0,
      },
      update: {
        createdAt: { set: 'set' },
        datadogTraceId: {},
        domain: { set: 'set' },
        errorMsg: { set: 'set', unset: true },
        operationName: { set: 'set' },
        requestTime: { set: 'set' },
        statusCode: { decrement: 0, divide: 0, increment: 0, multiply: 0, set: 0, unset: true },
        userId: { set: 'set' },
      },
      where: { id: 'id' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('upsertOneUsers: only required params', async () => {
    const responsePromise = client.db.upsertOneUsers({
      create: {
        auth_token: 'auth_token',
        billing: {},
        createdDate: 'createdDate',
        email: 'email',
        first_name: 'first_name',
        last_name: 'last_name',
        usageCounter: 0,
      },
      update: {},
      where: {},
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
  test.skip('upsertOneUsers: required and optional params', async () => {
    const response = await client.db.upsertOneUsers({
      create: {
        auth_token: 'auth_token',
        billing: {
          set: {
            customer_id: 'customer_id',
            isTrialExpired: true,
            isTrialPeriod: true,
            plan_id: 'plan_id',
            subscription_id: 'subscription_id',
          },
        },
        createdDate: 'createdDate',
        email: 'email',
        first_name: 'first_name',
        last_name: 'last_name',
        usageCounter: 0,
        id: 'id',
      },
      update: {
        auth_token: { set: 'set' },
        billing: {
          set: {
            customer_id: 'customer_id',
            isTrialExpired: true,
            isTrialPeriod: true,
            plan_id: 'plan_id',
            subscription_id: 'subscription_id',
          },
          update: {
            customer_id: { set: 'set' },
            isTrialExpired: { set: true },
            isTrialPeriod: { set: true },
            plan_id: { set: 'set' },
            subscription_id: { set: 'set' },
          },
        },
        createdDate: { set: 'set' },
        email: { set: 'set' },
        first_name: { set: 'set' },
        last_name: { set: 'set' },
        usageCounter: { decrement: 0, divide: 0, increment: 0, multiply: 0, set: 0 },
      },
      where: { id: 'id' },
    });
  });
});
