// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DBAPI from './db';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DB extends APIResource {
  aggregateUsage(
    query: DBAggregateUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBAggregateUsageResponse> {
    return this._client.get('/db/Aggregateusage', { query, ...options });
  }

  aggregateUsageRaw(
    query: DBAggregateUsageRawParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBAggregateUsageRawResponse> {
    return this._client.get('/db/AggregateusageRaw', { query, ...options });
  }

  aggregateUsers(
    query: DBAggregateUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBAggregateUsersResponse> {
    return this._client.get('/db/Aggregateusers', { query, ...options });
  }

  aggregateUsersRaw(
    query: DBAggregateUsersRawParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBAggregateUsersRawResponse> {
    return this._client.get('/db/AggregateusersRaw', { query, ...options });
  }

  createManyUsage(
    body: DBCreateManyUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBCreateManyUsageResponse> {
    return this._client.post('/db/CreateManyusage', { body, ...options });
  }

  createManyUsers(
    body: DBCreateManyUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBCreateManyUsersResponse> {
    return this._client.post('/db/CreateManyusers', { body, ...options });
  }

  createOneUsage(
    body: DBCreateOneUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBCreateOneUsageResponse> {
    return this._client.post('/db/CreateOneusage', { body, ...options });
  }

  createOneUsers(
    body: DBCreateOneUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBCreateOneUsersResponse> {
    return this._client.post('/db/CreateOneusers', { body, ...options });
  }

  deleteManyUsage(
    body: DBDeleteManyUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBDeleteManyUsageResponse> {
    return this._client.post('/db/DeleteManyusage', { body, ...options });
  }

  deleteManyUsers(
    body: DBDeleteManyUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBDeleteManyUsersResponse> {
    return this._client.post('/db/DeleteManyusers', { body, ...options });
  }

  deleteOneUsage(
    body: DBDeleteOneUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBDeleteOneUsageResponse> {
    return this._client.post('/db/DeleteOneusage', { body, ...options });
  }

  deleteOneUsers(
    body: DBDeleteOneUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBDeleteOneUsersResponse> {
    return this._client.post('/db/DeleteOneusers', { body, ...options });
  }

  executeRaw(body: DBExecuteRawParams, options?: RequestOptions): APIPromise<DBExecuteRawResponse> {
    return this._client.post('/db/ExecuteRaw', { body, ...options });
  }

  findFirstUsage(
    query: DBFindFirstUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBFindFirstUsageResponse> {
    return this._client.get('/db/FindFirstusage', { query, ...options });
  }

  findFirstUsageOrThrow(
    query: DBFindFirstUsageOrThrowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBFindFirstUsageOrThrowResponse> {
    return this._client.get('/db/FindFirstusageOrThrow', { query, ...options });
  }

  findFirstUsers(
    query: DBFindFirstUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBFindFirstUsersResponse> {
    return this._client.get('/db/FindFirstusers', { query, ...options });
  }

  findFirstUsersOrThrow(
    query: DBFindFirstUsersOrThrowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBFindFirstUsersOrThrowResponse> {
    return this._client.get('/db/FindFirstusersOrThrow', { query, ...options });
  }

  findManyUsage(
    query: DBFindManyUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBFindManyUsageResponse> {
    return this._client.get('/db/FindManyusage', { query, ...options });
  }

  findManyUsers(
    query: DBFindManyUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBFindManyUsersResponse> {
    return this._client.get('/db/FindManyusers', { query, ...options });
  }

  findUniqueUsage(options?: RequestOptions): APIPromise<DBFindUniqueUsageResponse> {
    return this._client.get('/db/FindUniqueusage', options);
  }

  findUniqueUsageOrThrow(options?: RequestOptions): APIPromise<DBFindUniqueUsageOrThrowResponse> {
    return this._client.get('/db/FindUniqueusageOrThrow', options);
  }

  findUniqueUsers(options?: RequestOptions): APIPromise<DBFindUniqueUsersResponse> {
    return this._client.get('/db/FindUniqueusers', options);
  }

  findUniqueUsersOrThrow(options?: RequestOptions): APIPromise<DBFindUniqueUsersOrThrowResponse> {
    return this._client.get('/db/FindUniqueusersOrThrow', options);
  }

  findUsageRaw(options?: RequestOptions): APIPromise<DBFindUsageRawResponse> {
    return this._client.get('/db/FindusageRaw', options);
  }

  findUsersRaw(options?: RequestOptions): APIPromise<DBFindUsersRawResponse> {
    return this._client.get('/db/FindusersRaw', options);
  }

  groupByUsage(
    query: DBGroupByUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBGroupByUsageResponse> {
    return this._client.get('/db/GroupByusage', { query, ...options });
  }

  groupByUsers(
    query: DBGroupByUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DBGroupByUsersResponse> {
    return this._client.get('/db/GroupByusers', { query, ...options });
  }

  queryRaw(query: DBQueryRawParams, options?: RequestOptions): APIPromise<DBQueryRawResponse> {
    return this._client.get('/db/QueryRaw', { query, ...options });
  }

  queryRawJson(query: DBQueryRawJsonParams, options?: RequestOptions): APIPromise<DBQueryRawJsonResponse> {
    return this._client.get('/db/QueryRawJSON', { query, ...options });
  }

  runCommandRaw(body: DBRunCommandRawParams, options?: RequestOptions): APIPromise<DBRunCommandRawResponse> {
    return this._client.post('/db/RunCommandRaw', { body, ...options });
  }

  updateManyUsage(
    body: DBUpdateManyUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBUpdateManyUsageResponse> {
    return this._client.post('/db/UpdateManyusage', { body, ...options });
  }

  updateManyUsers(
    body: DBUpdateManyUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBUpdateManyUsersResponse> {
    return this._client.post('/db/UpdateManyusers', { body, ...options });
  }

  updateOneUsage(
    body: DBUpdateOneUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBUpdateOneUsageResponse> {
    return this._client.post('/db/UpdateOneusage', { body, ...options });
  }

  updateOneUsers(
    body: DBUpdateOneUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBUpdateOneUsersResponse> {
    return this._client.post('/db/UpdateOneusers', { body, ...options });
  }

  upsertOneUsage(
    body: DBUpsertOneUsageParams,
    options?: RequestOptions,
  ): APIPromise<DBUpsertOneUsageResponse> {
    return this._client.post('/db/UpsertOneusage', { body, ...options });
  }

  upsertOneUsers(
    body: DBUpsertOneUsersParams,
    options?: RequestOptions,
  ): APIPromise<DBUpsertOneUsersResponse> {
    return this._client.post('/db/UpsertOneusers', { body, ...options });
  }
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean | null;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: string | null;
}

export interface IntFieldUpdateOperationsInput {
  decrement?: number | null;

  divide?: number | null;

  increment?: number | null;

  multiply?: number | null;

  set?: number | null;
}

export interface NestedBoolFilter {
  equals?: boolean | null;

  not?: NestedBoolFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: string | null;

  gt?: string | null;

  gte?: string | null;

  in?: Array<string | null> | null;

  lt?: string | null;

  lte?: string | null;

  not?: NestedDateTimeFilter | null;

  notIn?: Array<string | null> | null;
}

export interface NestedIntFilter {
  equals?: number | null;

  gt?: number | null;

  gte?: number | null;

  in?: Array<number | null> | null;

  lt?: number | null;

  lte?: number | null;

  not?: NestedIntFilter | null;

  notIn?: Array<number | null> | null;
}

export interface NestedIntNullableFilter {
  equals?: number | null;

  gt?: number | null;

  gte?: number | null;

  in?: Array<number | null> | null;

  isSet?: boolean | null;

  lt?: number | null;

  lte?: number | null;

  not?: NestedIntNullableFilter | null;

  notIn?: Array<number | null> | null;
}

export interface NestedStringFilter {
  contains?: string | null;

  endsWith?: string | null;

  equals?: string | null;

  gt?: string | null;

  gte?: string | null;

  in?: Array<string | null> | null;

  lt?: string | null;

  lte?: string | null;

  not?: NestedStringFilter | null;

  notIn?: Array<string | null> | null;

  startsWith?: string | null;
}

export interface NestedStringNullableFilter {
  contains?: string | null;

  endsWith?: string | null;

  equals?: string | null;

  gt?: string | null;

  gte?: string | null;

  in?: Array<string | null> | null;

  isSet?: boolean | null;

  lt?: string | null;

  lte?: string | null;

  not?: NestedStringNullableFilter | null;

  notIn?: Array<string | null> | null;

  startsWith?: string | null;
}

export interface NullableIntFieldUpdateOperationsInput {
  decrement?: number | null;

  divide?: number | null;

  increment?: number | null;

  multiply?: number | null;

  set?: number | null;

  unset?: boolean | null;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;

  unset?: boolean | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface UsageCreateInput {
  createdAt: string;

  domain: string;

  operationName: string;

  requestTime: string;

  userId: string;

  id?: string | null;

  datadogTraceId?: unknown;

  errorMsg?: string | null;

  statusCode?: number | null;
}

export interface UsageWhereInput {
  id?: UsageWhereInput.ID | null;

  AND?: UsageWhereInput | null;

  createdAt?: UsageWhereInput.CreatedAt | null;

  datadogTraceId?: UsageWhereInput.DatadogTraceID | null;

  domain?: UsageWhereInput.Domain | null;

  errorMsg?: UsageWhereInput.ErrorMsg | null;

  NOT?: UsageWhereInput | null;

  operationName?: UsageWhereInput.OperationName | null;

  OR?: Array<UsageWhereInput | null> | null;

  requestTime?: UsageWhereInput.RequestTime | null;

  statusCode?: UsageWhereInput.StatusCode | null;

  userId?: UsageWhereInput.UserID | null;
}

export namespace UsageWhereInput {
  export interface ID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface CreatedAt {
    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    not?: DBAPI.NestedDateTimeFilter | null;

    notIn?: Array<string | null> | null;
  }

  export interface DatadogTraceID {
    equals?: unknown;

    isSet?: boolean | null;

    not?: unknown;
  }

  export interface Domain {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface ErrorMsg {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    isSet?: boolean | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringNullableFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface OperationName {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface RequestTime {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface StatusCode {
    equals?: number | null;

    gt?: number | null;

    gte?: number | null;

    in?: Array<number | null> | null;

    isSet?: boolean | null;

    lt?: number | null;

    lte?: number | null;

    not?: DBAPI.NestedIntNullableFilter | null;

    notIn?: Array<number | null> | null;
  }

  export interface UserID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }
}

export interface UsageWhereInput2 {
  id?: UsageWhereInput2.ID | null;

  AND?: UsageWhereInput2 | null;

  createdAt?: UsageWhereInput2.CreatedAt | null;

  datadogTraceId?: UsageWhereInput2.DatadogTraceID | null;

  domain?: UsageWhereInput2.Domain | null;

  errorMsg?: UsageWhereInput2.ErrorMsg | null;

  NOT?: UsageWhereInput2 | null;

  operationName?: UsageWhereInput2.OperationName | null;

  OR?: Array<UsageWhereInput2 | null> | null;

  requestTime?: UsageWhereInput2.RequestTime | null;

  statusCode?: UsageWhereInput2.StatusCode | null;

  userId?: UsageWhereInput2.UserID | null;
}

export namespace UsageWhereInput2 {
  export interface ID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface CreatedAt {
    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    not?: DBAPI.NestedDateTimeFilter | null;

    notIn?: Array<string | null> | null;
  }

  export interface DatadogTraceID {
    equals?: unknown;

    isSet?: boolean | null;

    not?: unknown;
  }

  export interface Domain {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface ErrorMsg {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    isSet?: boolean | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringNullableFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface OperationName {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface RequestTime {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface StatusCode {
    equals?: number | null;

    gt?: number | null;

    gte?: number | null;

    in?: Array<number | null> | null;

    isSet?: boolean | null;

    lt?: number | null;

    lte?: number | null;

    not?: DBAPI.NestedIntNullableFilter | null;

    notIn?: Array<number | null> | null;
  }

  export interface UserID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }
}

export interface UsageWhereUniqueInput {
  id?: string | null;
}

export interface UsersBillingCreateEnvelopeInput {
  set?: UsersBillingCreateInput | null;
}

export interface UsersBillingCreateInput {
  customer_id?: string;

  isTrialExpired?: boolean;

  isTrialPeriod?: boolean;

  plan_id?: string;

  subscription_id?: string;
}

export interface UsersBillingUpdateEnvelopeInput {
  set?: UsersBillingCreateInput | null;

  update?: UsersBillingUpdateEnvelopeInput.Update | null;
}

export namespace UsersBillingUpdateEnvelopeInput {
  export interface Update {
    customer_id?: DBAPI.StringFieldUpdateOperationsInput | null;

    isTrialExpired?: DBAPI.BoolFieldUpdateOperationsInput | null;

    isTrialPeriod?: DBAPI.BoolFieldUpdateOperationsInput | null;

    plan_id?: DBAPI.StringFieldUpdateOperationsInput | null;

    subscription_id?: DBAPI.StringFieldUpdateOperationsInput | null;
  }
}

export interface UsersBillingWhereInput {
  AND?: UsersBillingWhereInput | null;

  customer_id?: UsersBillingWhereInput.CustomerID | null;

  isTrialExpired?: UsersBillingWhereInput.IsTrialExpired | null;

  isTrialPeriod?: UsersBillingWhereInput.IsTrialPeriod | null;

  NOT?: UsersBillingWhereInput | null;

  OR?: Array<UsersBillingWhereInput | null> | null;

  plan_id?: UsersBillingWhereInput.PlanID | null;

  subscription_id?: UsersBillingWhereInput.SubscriptionID | null;
}

export namespace UsersBillingWhereInput {
  export interface CustomerID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface IsTrialExpired {
    equals?: boolean | null;

    not?: DBAPI.NestedBoolFilter | null;
  }

  export interface IsTrialPeriod {
    equals?: boolean | null;

    not?: DBAPI.NestedBoolFilter | null;
  }

  export interface PlanID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface SubscriptionID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }
}

export interface UsersWhereInput {
  id?: UsersWhereInput.ID | null;

  AND?: UsersWhereInput | null;

  auth_token?: UsersWhereInput.AuthToken | null;

  billing?: UsersWhereInput.Billing | null;

  createdDate?: UsersWhereInput.CreatedDate | null;

  email?: UsersWhereInput.Email | null;

  first_name?: UsersWhereInput.FirstName | null;

  last_name?: UsersWhereInput.LastName | null;

  NOT?: UsersWhereInput | null;

  OR?: Array<UsersWhereInput | null> | null;

  usageCounter?: UsersWhereInput.UsageCounter | null;
}

export namespace UsersWhereInput {
  export interface ID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface AuthToken {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface Billing {
    equals?: Billing.Equals | null;

    is?: DBAPI.UsersBillingWhereInput | null;

    isNot?: DBAPI.UsersBillingWhereInput | null;
  }

  export namespace Billing {
    export interface Equals {
      customer_id?: string;

      isTrialExpired?: boolean;

      isTrialPeriod?: boolean;

      plan_id?: string;

      subscription_id?: string;
    }
  }

  export interface CreatedDate {
    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    not?: DBAPI.NestedDateTimeFilter | null;

    notIn?: Array<string | null> | null;
  }

  export interface Email {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface FirstName {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface LastName {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface UsageCounter {
    equals?: number | null;

    gt?: number | null;

    gte?: number | null;

    in?: Array<number | null> | null;

    lt?: number | null;

    lte?: number | null;

    not?: DBAPI.NestedIntFilter | null;

    notIn?: Array<number | null> | null;
  }
}

export interface UsersWhereInput2 {
  id?: UsersWhereInput2.ID | null;

  AND?: UsersWhereInput2 | null;

  auth_token?: UsersWhereInput2.AuthToken | null;

  billing?: UsersWhereInput2.Billing | null;

  createdDate?: UsersWhereInput2.CreatedDate | null;

  email?: UsersWhereInput2.Email | null;

  first_name?: UsersWhereInput2.FirstName | null;

  last_name?: UsersWhereInput2.LastName | null;

  NOT?: UsersWhereInput2 | null;

  OR?: Array<UsersWhereInput2 | null> | null;

  usageCounter?: UsersWhereInput2.UsageCounter | null;
}

export namespace UsersWhereInput2 {
  export interface ID {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface AuthToken {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface Billing {
    equals?: Billing.Equals | null;

    is?: DBAPI.UsersBillingWhereInput | null;

    isNot?: DBAPI.UsersBillingWhereInput | null;
  }

  export namespace Billing {
    export interface Equals {
      customer_id?: string;

      isTrialExpired?: boolean;

      isTrialPeriod?: boolean;

      plan_id?: string;

      subscription_id?: string;
    }
  }

  export interface CreatedDate {
    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    not?: DBAPI.NestedDateTimeFilter | null;

    notIn?: Array<string | null> | null;
  }

  export interface Email {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface FirstName {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface LastName {
    contains?: string | null;

    endsWith?: string | null;

    equals?: string | null;

    gt?: string | null;

    gte?: string | null;

    in?: Array<string | null> | null;

    lt?: string | null;

    lte?: string | null;

    mode?: 'default' | 'insensitive' | null;

    not?: DBAPI.NestedStringFilter | null;

    notIn?: Array<string | null> | null;

    startsWith?: string | null;
  }

  export interface UsageCounter {
    equals?: number | null;

    gt?: number | null;

    gte?: number | null;

    in?: Array<number | null> | null;

    lt?: number | null;

    lte?: number | null;

    not?: DBAPI.NestedIntFilter | null;

    notIn?: Array<number | null> | null;
  }
}

export interface UsersWhereUniqueInput {
  id?: string | null;
}

export interface DBAggregateUsageResponse {
  data?: DBAggregateUsageResponse.Data;
}

export namespace DBAggregateUsageResponse {
  export interface Data {
    db_aggregateusage: Data.DBAggregateusage;
  }

  export namespace Data {
    export interface DBAggregateusage {
      _avg?: DBAggregateusage._Avg;

      _count?: DBAggregateusage._Count;

      _max?: DBAggregateusage._Max;

      _min?: DBAggregateusage._Min;

      _sum?: DBAggregateusage._Sum;
    }

    export namespace DBAggregateusage {
      export interface _Avg {
        statusCode?: number;
      }

      export interface _Count {
        id: number;

        _all: number;

        createdAt: number;

        datadogTraceId: number;

        domain: number;

        errorMsg: number;

        operationName: number;

        requestTime: number;

        statusCode: number;

        userId: number;
      }

      export interface _Max {
        id?: string;

        createdAt?: string;

        domain?: string;

        errorMsg?: string;

        operationName?: string;

        requestTime?: string;

        statusCode?: number;

        userId?: string;
      }

      export interface _Min {
        id?: string;

        createdAt?: string;

        domain?: string;

        errorMsg?: string;

        operationName?: string;

        requestTime?: string;

        statusCode?: number;

        userId?: string;
      }

      export interface _Sum {
        statusCode?: number;
      }
    }
  }
}

export interface DBAggregateUsageRawResponse {
  data?: DBAggregateUsageRawResponse.Data;
}

export namespace DBAggregateUsageRawResponse {
  export interface Data {
    db_aggregateusageRaw: unknown;
  }
}

export interface DBAggregateUsersResponse {
  data?: DBAggregateUsersResponse.Data;
}

export namespace DBAggregateUsersResponse {
  export interface Data {
    db_aggregateusers: Data.DBAggregateusers;
  }

  export namespace Data {
    export interface DBAggregateusers {
      _avg?: DBAggregateusers._Avg;

      _count?: DBAggregateusers._Count;

      _max?: DBAggregateusers._Max;

      _min?: DBAggregateusers._Min;

      _sum?: DBAggregateusers._Sum;
    }

    export namespace DBAggregateusers {
      export interface _Avg {
        usageCounter?: number;
      }

      export interface _Count {
        id: number;

        _all: number;

        auth_token: number;

        createdDate: number;

        email: number;

        first_name: number;

        last_name: number;

        usageCounter: number;
      }

      export interface _Max {
        id?: string;

        auth_token?: string;

        createdDate?: string;

        email?: string;

        first_name?: string;

        last_name?: string;

        usageCounter?: number;
      }

      export interface _Min {
        id?: string;

        auth_token?: string;

        createdDate?: string;

        email?: string;

        first_name?: string;

        last_name?: string;

        usageCounter?: number;
      }

      export interface _Sum {
        usageCounter?: number;
      }
    }
  }
}

export interface DBAggregateUsersRawResponse {
  data?: DBAggregateUsersRawResponse.Data;
}

export namespace DBAggregateUsersRawResponse {
  export interface Data {
    db_aggregateusersRaw: unknown;
  }
}

export interface DBCreateManyUsageResponse {
  data?: DBCreateManyUsageResponse.Data;
}

export namespace DBCreateManyUsageResponse {
  export interface Data {
    db_createManyusage?: Data.DBCreateManyusage;
  }

  export namespace Data {
    export interface DBCreateManyusage {
      count: number;
    }
  }
}

export interface DBCreateManyUsersResponse {
  data?: DBCreateManyUsersResponse.Data;
}

export namespace DBCreateManyUsersResponse {
  export interface Data {
    db_createManyusers?: Data.DBCreateManyusers;
  }

  export namespace Data {
    export interface DBCreateManyusers {
      count: number;
    }
  }
}

export interface DBCreateOneUsageResponse {
  data?: DBCreateOneUsageResponse.Data;
}

export namespace DBCreateOneUsageResponse {
  export interface Data {
    db_createOneusage?: Data.DBCreateOneusage;
  }

  export namespace Data {
    export interface DBCreateOneusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBCreateOneUsersResponse {
  data?: DBCreateOneUsersResponse.Data;
}

export namespace DBCreateOneUsersResponse {
  export interface Data {
    db_createOneusers?: Data.DBCreateOneusers;
  }

  export namespace Data {
    export interface DBCreateOneusers {
      id: string;

      auth_token: string;

      billing: DBCreateOneusers.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBCreateOneusers {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBDeleteManyUsageResponse {
  data?: DBDeleteManyUsageResponse.Data;
}

export namespace DBDeleteManyUsageResponse {
  export interface Data {
    db_deleteManyusage?: Data.DBDeleteManyusage;
  }

  export namespace Data {
    export interface DBDeleteManyusage {
      count: number;
    }
  }
}

export interface DBDeleteManyUsersResponse {
  data?: DBDeleteManyUsersResponse.Data;
}

export namespace DBDeleteManyUsersResponse {
  export interface Data {
    db_deleteManyusers?: Data.DBDeleteManyusers;
  }

  export namespace Data {
    export interface DBDeleteManyusers {
      count: number;
    }
  }
}

export interface DBDeleteOneUsageResponse {
  data?: DBDeleteOneUsageResponse.Data;
}

export namespace DBDeleteOneUsageResponse {
  export interface Data {
    db_deleteOneusage?: Data.DBDeleteOneusage;
  }

  export namespace Data {
    export interface DBDeleteOneusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBDeleteOneUsersResponse {
  data?: DBDeleteOneUsersResponse.Data;
}

export namespace DBDeleteOneUsersResponse {
  export interface Data {
    db_deleteOneusers?: Data.DBDeleteOneusers;
  }

  export namespace Data {
    export interface DBDeleteOneusers {
      id: string;

      auth_token: string;

      billing: DBDeleteOneusers.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBDeleteOneusers {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBExecuteRawResponse {
  data?: DBExecuteRawResponse.Data;
}

export namespace DBExecuteRawResponse {
  export interface Data {
    db_executeRaw: number;
  }
}

export interface DBFindFirstUsageResponse {
  data?: DBFindFirstUsageResponse.Data;
}

export namespace DBFindFirstUsageResponse {
  export interface Data {
    db_findFirstusage?: Data.DBFindFirstusage;
  }

  export namespace Data {
    export interface DBFindFirstusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBFindFirstUsageOrThrowResponse {
  data?: DBFindFirstUsageOrThrowResponse.Data;
}

export namespace DBFindFirstUsageOrThrowResponse {
  export interface Data {
    db_findFirstusageOrThrow?: Data.DBFindFirstusageOrThrow;
  }

  export namespace Data {
    export interface DBFindFirstusageOrThrow {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBFindFirstUsersResponse {
  data?: DBFindFirstUsersResponse.Data;
}

export namespace DBFindFirstUsersResponse {
  export interface Data {
    db_findFirstusers?: Data.DBFindFirstusers;
  }

  export namespace Data {
    export interface DBFindFirstusers {
      id: string;

      auth_token: string;

      billing: DBFindFirstusers.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBFindFirstusers {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBFindFirstUsersOrThrowResponse {
  data?: DBFindFirstUsersOrThrowResponse.Data;
}

export namespace DBFindFirstUsersOrThrowResponse {
  export interface Data {
    db_findFirstusersOrThrow?: Data.DBFindFirstusersOrThrow;
  }

  export namespace Data {
    export interface DBFindFirstusersOrThrow {
      id: string;

      auth_token: string;

      billing: DBFindFirstusersOrThrow.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBFindFirstusersOrThrow {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBFindManyUsageResponse {
  data?: DBFindManyUsageResponse.Data;
}

export namespace DBFindManyUsageResponse {
  export interface Data {
    db_findManyusage: Array<Data.DBFindManyusage>;
  }

  export namespace Data {
    export interface DBFindManyusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBFindManyUsersResponse {
  data?: DBFindManyUsersResponse.Data;
}

export namespace DBFindManyUsersResponse {
  export interface Data {
    db_findManyusers: Array<Data.DBFindManyuser>;
  }

  export namespace Data {
    export interface DBFindManyuser {
      id: string;

      auth_token: string;

      billing: DBFindManyuser.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBFindManyuser {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBFindUniqueUsageResponse {
  data?: DBFindUniqueUsageResponse.Data;
}

export namespace DBFindUniqueUsageResponse {
  export interface Data {
    db_findUniqueusage?: Data.DBFindUniqueusage;
  }

  export namespace Data {
    export interface DBFindUniqueusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBFindUniqueUsageOrThrowResponse {
  data?: DBFindUniqueUsageOrThrowResponse.Data;
}

export namespace DBFindUniqueUsageOrThrowResponse {
  export interface Data {
    db_findUniqueusageOrThrow?: Data.DBFindUniqueusageOrThrow;
  }

  export namespace Data {
    export interface DBFindUniqueusageOrThrow {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBFindUniqueUsersResponse {
  data?: DBFindUniqueUsersResponse.Data;
}

export namespace DBFindUniqueUsersResponse {
  export interface Data {
    db_findUniqueusers?: Data.DBFindUniqueusers;
  }

  export namespace Data {
    export interface DBFindUniqueusers {
      id: string;

      auth_token: string;

      billing: DBFindUniqueusers.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBFindUniqueusers {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBFindUniqueUsersOrThrowResponse {
  data?: DBFindUniqueUsersOrThrowResponse.Data;
}

export namespace DBFindUniqueUsersOrThrowResponse {
  export interface Data {
    db_findUniqueusersOrThrow?: Data.DBFindUniqueusersOrThrow;
  }

  export namespace Data {
    export interface DBFindUniqueusersOrThrow {
      id: string;

      auth_token: string;

      billing: DBFindUniqueusersOrThrow.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBFindUniqueusersOrThrow {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBFindUsageRawResponse {
  data?: DBFindUsageRawResponse.Data;
}

export namespace DBFindUsageRawResponse {
  export interface Data {
    db_findusageRaw: unknown;
  }
}

export interface DBFindUsersRawResponse {
  data?: DBFindUsersRawResponse.Data;
}

export namespace DBFindUsersRawResponse {
  export interface Data {
    db_findusersRaw: unknown;
  }
}

export interface DBGroupByUsageResponse {
  data?: DBGroupByUsageResponse.Data;
}

export namespace DBGroupByUsageResponse {
  export interface Data {
    db_groupByusage: Array<Data.DBGroupByusage>;
  }

  export namespace Data {
    export interface DBGroupByusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      _avg?: DBGroupByusage._Avg;

      _count?: DBGroupByusage._Count;

      _max?: DBGroupByusage._Max;

      _min?: DBGroupByusage._Min;

      _sum?: DBGroupByusage._Sum;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }

    export namespace DBGroupByusage {
      export interface _Avg {
        statusCode?: number;
      }

      export interface _Count {
        id: number;

        _all: number;

        createdAt: number;

        datadogTraceId: number;

        domain: number;

        errorMsg: number;

        operationName: number;

        requestTime: number;

        statusCode: number;

        userId: number;
      }

      export interface _Max {
        id?: string;

        createdAt?: string;

        domain?: string;

        errorMsg?: string;

        operationName?: string;

        requestTime?: string;

        statusCode?: number;

        userId?: string;
      }

      export interface _Min {
        id?: string;

        createdAt?: string;

        domain?: string;

        errorMsg?: string;

        operationName?: string;

        requestTime?: string;

        statusCode?: number;

        userId?: string;
      }

      export interface _Sum {
        statusCode?: number;
      }
    }
  }
}

export interface DBGroupByUsersResponse {
  data?: DBGroupByUsersResponse.Data;
}

export namespace DBGroupByUsersResponse {
  export interface Data {
    db_groupByusers: Array<Data.DBGroupByuser>;
  }

  export namespace Data {
    export interface DBGroupByuser {
      id: string;

      auth_token: string;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;

      _avg?: DBGroupByuser._Avg;

      _count?: DBGroupByuser._Count;

      _max?: DBGroupByuser._Max;

      _min?: DBGroupByuser._Min;

      _sum?: DBGroupByuser._Sum;
    }

    export namespace DBGroupByuser {
      export interface _Avg {
        usageCounter?: number;
      }

      export interface _Count {
        id: number;

        _all: number;

        auth_token: number;

        createdDate: number;

        email: number;

        first_name: number;

        last_name: number;

        usageCounter: number;
      }

      export interface _Max {
        id?: string;

        auth_token?: string;

        createdDate?: string;

        email?: string;

        first_name?: string;

        last_name?: string;

        usageCounter?: number;
      }

      export interface _Min {
        id?: string;

        auth_token?: string;

        createdDate?: string;

        email?: string;

        first_name?: string;

        last_name?: string;

        usageCounter?: number;
      }

      export interface _Sum {
        usageCounter?: number;
      }
    }
  }
}

export interface DBQueryRawResponse {
  data?: DBQueryRawResponse.Data;
}

export namespace DBQueryRawResponse {
  export interface Data {
    db_queryRaw: Array<Data.DBQueryRaw>;
  }

  export namespace Data {
    export interface DBQueryRaw {
      Array: Array<DBQueryRaw.Array_>;

      Boolean: boolean;

      DateTime: string;

      Float: number;

      ID: string;

      Int: number;

      JSON: unknown;

      Object: DBQueryRaw.Object;

      OptionalArray: Array<DBQueryRaw.OptionalArray>;

      String: string;

      OptionalBoolean?: boolean;

      OptionalDateTime?: string;

      OptionalFloat?: number;

      OptionalID?: string;

      OptionalInt?: number;

      OptionalJSON?: unknown;

      OptionalObject?: DBQueryRaw.OptionalObject;

      OptionalString?: string;
    }

    export namespace DBQueryRaw {
      export interface Array_ {
        Boolean: boolean;

        DateTime: string;

        Float: number;

        ID: string;

        Int: number;

        JSON: unknown;

        String: string;

        OptionalBoolean?: boolean;

        OptionalDateTime?: string;

        OptionalFloat?: number;

        OptionalID?: string;

        OptionalInt?: number;

        OptionalJSON?: unknown;

        OptionalString?: string;
      }

      export interface Object {
        Boolean: boolean;

        DateTime: string;

        Float: number;

        ID: string;

        Int: number;

        JSON: unknown;

        String: string;

        OptionalBoolean?: boolean;

        OptionalDateTime?: string;

        OptionalFloat?: number;

        OptionalID?: string;

        OptionalInt?: number;

        OptionalJSON?: unknown;

        OptionalString?: string;
      }

      export interface OptionalArray {
        Boolean: boolean;

        DateTime: string;

        Float: number;

        ID: string;

        Int: number;

        JSON: unknown;

        String: string;

        OptionalBoolean?: boolean;

        OptionalDateTime?: string;

        OptionalFloat?: number;

        OptionalID?: string;

        OptionalInt?: number;

        OptionalJSON?: unknown;

        OptionalString?: string;
      }

      export interface OptionalObject {
        Boolean: boolean;

        DateTime: string;

        Float: number;

        ID: string;

        Int: number;

        JSON: unknown;

        String: string;

        OptionalBoolean?: boolean;

        OptionalDateTime?: string;

        OptionalFloat?: number;

        OptionalID?: string;

        OptionalInt?: number;

        OptionalJSON?: unknown;

        OptionalString?: string;
      }
    }
  }
}

export interface DBQueryRawJsonResponse {
  data?: DBQueryRawJsonResponse.Data;
}

export namespace DBQueryRawJsonResponse {
  export interface Data {
    db_queryRawJSON?: unknown;
  }
}

export interface DBRunCommandRawResponse {
  data?: DBRunCommandRawResponse.Data;
}

export namespace DBRunCommandRawResponse {
  export interface Data {
    db_runCommandRaw?: unknown;
  }
}

export interface DBUpdateManyUsageResponse {
  data?: DBUpdateManyUsageResponse.Data;
}

export namespace DBUpdateManyUsageResponse {
  export interface Data {
    db_updateManyusage?: Data.DBUpdateManyusage;
  }

  export namespace Data {
    export interface DBUpdateManyusage {
      count: number;
    }
  }
}

export interface DBUpdateManyUsersResponse {
  data?: DBUpdateManyUsersResponse.Data;
}

export namespace DBUpdateManyUsersResponse {
  export interface Data {
    db_updateManyusers?: Data.DBUpdateManyusers;
  }

  export namespace Data {
    export interface DBUpdateManyusers {
      count: number;
    }
  }
}

export interface DBUpdateOneUsageResponse {
  data?: DBUpdateOneUsageResponse.Data;
}

export namespace DBUpdateOneUsageResponse {
  export interface Data {
    db_updateOneusage?: Data.DBUpdateOneusage;
  }

  export namespace Data {
    export interface DBUpdateOneusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBUpdateOneUsersResponse {
  data?: DBUpdateOneUsersResponse.Data;
}

export namespace DBUpdateOneUsersResponse {
  export interface Data {
    db_updateOneusers?: Data.DBUpdateOneusers;
  }

  export namespace Data {
    export interface DBUpdateOneusers {
      id: string;

      auth_token: string;

      billing: DBUpdateOneusers.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBUpdateOneusers {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBUpsertOneUsageResponse {
  data?: DBUpsertOneUsageResponse.Data;
}

export namespace DBUpsertOneUsageResponse {
  export interface Data {
    db_upsertOneusage?: Data.DBUpsertOneusage;
  }

  export namespace Data {
    export interface DBUpsertOneusage {
      id: string;

      createdAt: string;

      domain: string;

      operationName: string;

      requestTime: string;

      userId: string;

      datadogTraceId?: unknown;

      errorMsg?: string;

      statusCode?: number;
    }
  }
}

export interface DBUpsertOneUsersResponse {
  data?: DBUpsertOneUsersResponse.Data;
}

export namespace DBUpsertOneUsersResponse {
  export interface Data {
    db_upsertOneusers?: Data.DBUpsertOneusers;
  }

  export namespace Data {
    export interface DBUpsertOneusers {
      id: string;

      auth_token: string;

      billing: DBUpsertOneusers.Billing;

      createdDate: string;

      email: string;

      first_name: string;

      last_name: string;

      usageCounter: number;
    }

    export namespace DBUpsertOneusers {
      export interface Billing {
        customer_id: string;

        isTrialExpired: boolean;

        isTrialPeriod: boolean;

        plan_id: string;

        subscription_id: string;
      }
    }
  }
}

export interface DBAggregateUsageParams {
  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBAggregateUsageRawParams {
  /**
   * Type: array,null
   */
  pipeline?: Array<unknown> | null;
}

export interface DBAggregateUsersParams {
  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBAggregateUsersRawParams {
  /**
   * Type: array,null
   */
  pipeline?: Array<unknown> | null;
}

export interface DBCreateManyUsageParams {
  data: Array<DBCreateManyUsageParams.Data | null>;
}

export namespace DBCreateManyUsageParams {
  export interface Data {
    id?: string | null;

    createdAt?: string;

    datadogTraceId?: unknown;

    domain?: string;

    errorMsg?: string | null;

    operationName?: string;

    requestTime?: string;

    statusCode?: number | null;

    userId?: string;
  }
}

export interface DBCreateManyUsersParams {
  data: Array<DBCreateManyUsersParams.Data | null>;
}

export namespace DBCreateManyUsersParams {
  export interface Data {
    id?: string | null;

    auth_token?: string;

    billing?: DBAPI.UsersBillingCreateEnvelopeInput;

    createdDate?: string;

    email?: string;

    first_name?: string;

    last_name?: string;

    usageCounter?: number;
  }
}

export interface DBCreateOneUsageParams {
  data: UsageCreateInput;
}

export interface DBCreateOneUsersParams {
  data: DBCreateOneUsersParams.Data;
}

export namespace DBCreateOneUsersParams {
  export interface Data {
    auth_token: string;

    billing: DBAPI.UsersBillingCreateEnvelopeInput;

    createdDate: string;

    email: string;

    first_name: string;

    last_name: string;

    usageCounter: number;

    id?: string | null;
  }
}

export interface DBDeleteManyUsageParams {
  where?: UsageWhereInput | null;
}

export interface DBDeleteManyUsersParams {
  where?: UsersWhereInput | null;
}

export interface DBDeleteOneUsageParams {
  where: UsageWhereUniqueInput;
}

export interface DBDeleteOneUsersParams {
  where: UsersWhereUniqueInput;
}

export interface DBExecuteRawParams {
  query: string;

  parameters?: Array<string | null> | null;
}

export interface DBFindFirstUsageParams {
  /**
   * Type: array,null
   */
  distinct?: Array<unknown> | null;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBFindFirstUsageOrThrowParams {
  /**
   * Type: array,null
   */
  distinct?: Array<unknown> | null;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBFindFirstUsersParams {
  /**
   * Type: array,null
   */
  distinct?: Array<unknown> | null;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBFindFirstUsersOrThrowParams {
  /**
   * Type: array,null
   */
  distinct?: Array<unknown> | null;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBFindManyUsageParams {
  /**
   * Type: array,null
   */
  distinct?: Array<unknown> | null;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBFindManyUsersParams {
  /**
   * Type: array,null
   */
  distinct?: Array<unknown> | null;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export interface DBGroupByUsageParams {
  by?: DBGroupByUsageParams.By;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export namespace DBGroupByUsageParams {
  export interface By {
    /**
     * Type: string,null
     */
    '0'?: string | null;
  }
}

export interface DBGroupByUsersParams {
  by?: DBGroupByUsersParams.By;

  /**
   * Type: array,null
   */
  orderBy?: Array<unknown> | null;

  /**
   * Type: integer,null
   */
  skip?: number | null;

  /**
   * Type: integer,null
   */
  take?: number | null;
}

export namespace DBGroupByUsersParams {
  export interface By {
    /**
     * Type: string,null
     */
    '0'?: string | null;
  }
}

export interface DBQueryRawParams {
  /**
   * Type: string
   */
  query: string;

  /**
   * Type: array,null
   */
  parameters?: Array<unknown> | null;
}

export interface DBQueryRawJsonParams {
  /**
   * Type: string
   */
  query: string;

  /**
   * Type: array,null
   */
  parameters?: Array<unknown> | null;
}

export interface DBRunCommandRawParams {
  command: unknown;
}

export interface DBUpdateManyUsageParams {
  data: DBUpdateManyUsageParams.Data;

  where?: UsageWhereInput2 | null;
}

export namespace DBUpdateManyUsageParams {
  export interface Data {
    createdAt?: DBAPI.DateTimeFieldUpdateOperationsInput | null;

    datadogTraceId?: unknown;

    domain?: DBAPI.StringFieldUpdateOperationsInput | null;

    errorMsg?: DBAPI.NullableStringFieldUpdateOperationsInput | null;

    operationName?: DBAPI.StringFieldUpdateOperationsInput | null;

    requestTime?: DBAPI.StringFieldUpdateOperationsInput | null;

    statusCode?: DBAPI.NullableIntFieldUpdateOperationsInput | null;

    userId?: DBAPI.StringFieldUpdateOperationsInput | null;
  }
}

export interface DBUpdateManyUsersParams {
  data: DBUpdateManyUsersParams.Data;

  where?: UsersWhereInput2 | null;
}

export namespace DBUpdateManyUsersParams {
  export interface Data {
    auth_token?: DBAPI.StringFieldUpdateOperationsInput | null;

    billing?: DBAPI.UsersBillingUpdateEnvelopeInput | null;

    createdDate?: DBAPI.DateTimeFieldUpdateOperationsInput | null;

    email?: DBAPI.StringFieldUpdateOperationsInput | null;

    first_name?: DBAPI.StringFieldUpdateOperationsInput | null;

    last_name?: DBAPI.StringFieldUpdateOperationsInput | null;

    usageCounter?: DBAPI.IntFieldUpdateOperationsInput | null;
  }
}

export interface DBUpdateOneUsageParams {
  data: DBUpdateOneUsageParams.Data;

  where: UsageWhereUniqueInput;
}

export namespace DBUpdateOneUsageParams {
  export interface Data {
    createdAt?: DBAPI.DateTimeFieldUpdateOperationsInput | null;

    datadogTraceId?: unknown;

    domain?: DBAPI.StringFieldUpdateOperationsInput | null;

    errorMsg?: DBAPI.NullableStringFieldUpdateOperationsInput | null;

    operationName?: DBAPI.StringFieldUpdateOperationsInput | null;

    requestTime?: DBAPI.StringFieldUpdateOperationsInput | null;

    statusCode?: DBAPI.NullableIntFieldUpdateOperationsInput | null;

    userId?: DBAPI.StringFieldUpdateOperationsInput | null;
  }
}

export interface DBUpdateOneUsersParams {
  data: DBUpdateOneUsersParams.Data;

  where: UsersWhereUniqueInput;
}

export namespace DBUpdateOneUsersParams {
  export interface Data {
    auth_token?: DBAPI.StringFieldUpdateOperationsInput | null;

    billing?: DBAPI.UsersBillingUpdateEnvelopeInput | null;

    createdDate?: DBAPI.DateTimeFieldUpdateOperationsInput | null;

    email?: DBAPI.StringFieldUpdateOperationsInput | null;

    first_name?: DBAPI.StringFieldUpdateOperationsInput | null;

    last_name?: DBAPI.StringFieldUpdateOperationsInput | null;

    usageCounter?: DBAPI.IntFieldUpdateOperationsInput | null;
  }
}

export interface DBUpsertOneUsageParams {
  create: UsageCreateInput;

  update: DBUpsertOneUsageParams.Update;

  where: UsageWhereUniqueInput;
}

export namespace DBUpsertOneUsageParams {
  export interface Update {
    createdAt?: DBAPI.DateTimeFieldUpdateOperationsInput | null;

    datadogTraceId?: unknown;

    domain?: DBAPI.StringFieldUpdateOperationsInput | null;

    errorMsg?: DBAPI.NullableStringFieldUpdateOperationsInput | null;

    operationName?: DBAPI.StringFieldUpdateOperationsInput | null;

    requestTime?: DBAPI.StringFieldUpdateOperationsInput | null;

    statusCode?: DBAPI.NullableIntFieldUpdateOperationsInput | null;

    userId?: DBAPI.StringFieldUpdateOperationsInput | null;
  }
}

export interface DBUpsertOneUsersParams {
  create: DBUpsertOneUsersParams.Create;

  update: DBUpsertOneUsersParams.Update;

  where: UsersWhereUniqueInput;
}

export namespace DBUpsertOneUsersParams {
  export interface Create {
    auth_token: string;

    billing: DBAPI.UsersBillingCreateEnvelopeInput;

    createdDate: string;

    email: string;

    first_name: string;

    last_name: string;

    usageCounter: number;

    id?: string | null;
  }

  export interface Update {
    auth_token?: DBAPI.StringFieldUpdateOperationsInput | null;

    billing?: DBAPI.UsersBillingUpdateEnvelopeInput | null;

    createdDate?: DBAPI.DateTimeFieldUpdateOperationsInput | null;

    email?: DBAPI.StringFieldUpdateOperationsInput | null;

    first_name?: DBAPI.StringFieldUpdateOperationsInput | null;

    last_name?: DBAPI.StringFieldUpdateOperationsInput | null;

    usageCounter?: DBAPI.IntFieldUpdateOperationsInput | null;
  }
}

export declare namespace DB {
  export {
    type BoolFieldUpdateOperationsInput as BoolFieldUpdateOperationsInput,
    type DateTimeFieldUpdateOperationsInput as DateTimeFieldUpdateOperationsInput,
    type IntFieldUpdateOperationsInput as IntFieldUpdateOperationsInput,
    type NestedBoolFilter as NestedBoolFilter,
    type NestedDateTimeFilter as NestedDateTimeFilter,
    type NestedIntFilter as NestedIntFilter,
    type NestedIntNullableFilter as NestedIntNullableFilter,
    type NestedStringFilter as NestedStringFilter,
    type NestedStringNullableFilter as NestedStringNullableFilter,
    type NullableIntFieldUpdateOperationsInput as NullableIntFieldUpdateOperationsInput,
    type NullableStringFieldUpdateOperationsInput as NullableStringFieldUpdateOperationsInput,
    type StringFieldUpdateOperationsInput as StringFieldUpdateOperationsInput,
    type UsageCreateInput as UsageCreateInput,
    type UsageWhereInput as UsageWhereInput,
    type UsageWhereInput2 as UsageWhereInput2,
    type UsageWhereUniqueInput as UsageWhereUniqueInput,
    type UsersBillingCreateEnvelopeInput as UsersBillingCreateEnvelopeInput,
    type UsersBillingCreateInput as UsersBillingCreateInput,
    type UsersBillingUpdateEnvelopeInput as UsersBillingUpdateEnvelopeInput,
    type UsersBillingWhereInput as UsersBillingWhereInput,
    type UsersWhereInput as UsersWhereInput,
    type UsersWhereInput2 as UsersWhereInput2,
    type UsersWhereUniqueInput as UsersWhereUniqueInput,
    type DBAggregateUsageResponse as DBAggregateUsageResponse,
    type DBAggregateUsageRawResponse as DBAggregateUsageRawResponse,
    type DBAggregateUsersResponse as DBAggregateUsersResponse,
    type DBAggregateUsersRawResponse as DBAggregateUsersRawResponse,
    type DBCreateManyUsageResponse as DBCreateManyUsageResponse,
    type DBCreateManyUsersResponse as DBCreateManyUsersResponse,
    type DBCreateOneUsageResponse as DBCreateOneUsageResponse,
    type DBCreateOneUsersResponse as DBCreateOneUsersResponse,
    type DBDeleteManyUsageResponse as DBDeleteManyUsageResponse,
    type DBDeleteManyUsersResponse as DBDeleteManyUsersResponse,
    type DBDeleteOneUsageResponse as DBDeleteOneUsageResponse,
    type DBDeleteOneUsersResponse as DBDeleteOneUsersResponse,
    type DBExecuteRawResponse as DBExecuteRawResponse,
    type DBFindFirstUsageResponse as DBFindFirstUsageResponse,
    type DBFindFirstUsageOrThrowResponse as DBFindFirstUsageOrThrowResponse,
    type DBFindFirstUsersResponse as DBFindFirstUsersResponse,
    type DBFindFirstUsersOrThrowResponse as DBFindFirstUsersOrThrowResponse,
    type DBFindManyUsageResponse as DBFindManyUsageResponse,
    type DBFindManyUsersResponse as DBFindManyUsersResponse,
    type DBFindUniqueUsageResponse as DBFindUniqueUsageResponse,
    type DBFindUniqueUsageOrThrowResponse as DBFindUniqueUsageOrThrowResponse,
    type DBFindUniqueUsersResponse as DBFindUniqueUsersResponse,
    type DBFindUniqueUsersOrThrowResponse as DBFindUniqueUsersOrThrowResponse,
    type DBFindUsageRawResponse as DBFindUsageRawResponse,
    type DBFindUsersRawResponse as DBFindUsersRawResponse,
    type DBGroupByUsageResponse as DBGroupByUsageResponse,
    type DBGroupByUsersResponse as DBGroupByUsersResponse,
    type DBQueryRawResponse as DBQueryRawResponse,
    type DBQueryRawJsonResponse as DBQueryRawJsonResponse,
    type DBRunCommandRawResponse as DBRunCommandRawResponse,
    type DBUpdateManyUsageResponse as DBUpdateManyUsageResponse,
    type DBUpdateManyUsersResponse as DBUpdateManyUsersResponse,
    type DBUpdateOneUsageResponse as DBUpdateOneUsageResponse,
    type DBUpdateOneUsersResponse as DBUpdateOneUsersResponse,
    type DBUpsertOneUsageResponse as DBUpsertOneUsageResponse,
    type DBUpsertOneUsersResponse as DBUpsertOneUsersResponse,
    type DBAggregateUsageParams as DBAggregateUsageParams,
    type DBAggregateUsageRawParams as DBAggregateUsageRawParams,
    type DBAggregateUsersParams as DBAggregateUsersParams,
    type DBAggregateUsersRawParams as DBAggregateUsersRawParams,
    type DBCreateManyUsageParams as DBCreateManyUsageParams,
    type DBCreateManyUsersParams as DBCreateManyUsersParams,
    type DBCreateOneUsageParams as DBCreateOneUsageParams,
    type DBCreateOneUsersParams as DBCreateOneUsersParams,
    type DBDeleteManyUsageParams as DBDeleteManyUsageParams,
    type DBDeleteManyUsersParams as DBDeleteManyUsersParams,
    type DBDeleteOneUsageParams as DBDeleteOneUsageParams,
    type DBDeleteOneUsersParams as DBDeleteOneUsersParams,
    type DBExecuteRawParams as DBExecuteRawParams,
    type DBFindFirstUsageParams as DBFindFirstUsageParams,
    type DBFindFirstUsageOrThrowParams as DBFindFirstUsageOrThrowParams,
    type DBFindFirstUsersParams as DBFindFirstUsersParams,
    type DBFindFirstUsersOrThrowParams as DBFindFirstUsersOrThrowParams,
    type DBFindManyUsageParams as DBFindManyUsageParams,
    type DBFindManyUsersParams as DBFindManyUsersParams,
    type DBGroupByUsageParams as DBGroupByUsageParams,
    type DBGroupByUsersParams as DBGroupByUsersParams,
    type DBQueryRawParams as DBQueryRawParams,
    type DBQueryRawJsonParams as DBQueryRawJsonParams,
    type DBRunCommandRawParams as DBRunCommandRawParams,
    type DBUpdateManyUsageParams as DBUpdateManyUsageParams,
    type DBUpdateManyUsersParams as DBUpdateManyUsersParams,
    type DBUpdateOneUsageParams as DBUpdateOneUsageParams,
    type DBUpdateOneUsersParams as DBUpdateOneUsersParams,
    type DBUpsertOneUsageParams as DBUpsertOneUsageParams,
    type DBUpsertOneUsersParams as DBUpsertOneUsersParams,
  };
}
