# Eligibility

Types:

- <code><a href="./src/resources/eligibility.ts">PayerInput</a></code>
- <code><a href="./src/resources/eligibility.ts">ProviderInput</a></code>
- <code><a href="./src/resources/eligibility.ts">SubscriberInput</a></code>
- <code><a href="./src/resources/eligibility.ts">EligibilityCheckResponse</a></code>

Methods:

- <code title="post /Eligibility">client.eligibility.<a href="./src/resources/eligibility.ts">check</a>({ ...params }) -> EligibilityCheckResponse</code>

# Payer

Types:

- <code><a href="./src/resources/payer.ts">PayerRetrieveResponse</a></code>

Methods:

- <code title="get /Payer">client.payer.<a href="./src/resources/payer.ts">retrieve</a>() -> PayerRetrieveResponse</code>

# Apidental

Types:

- <code><a href="./src/resources/apidental.ts">ApidentalCreateEligibilityResponse</a></code>
- <code><a href="./src/resources/apidental.ts">ApidentalListPayersResponse</a></code>

Methods:

- <code title="post /apidental/Post_eligibility">client.apidental.<a href="./src/resources/apidental.ts">createEligibility</a>({ ...params }) -> ApidentalCreateEligibilityResponse</code>
- <code title="get /apidental/Payer_list">client.apidental.<a href="./src/resources/apidental.ts">listPayers</a>() -> ApidentalListPayersResponse</code>

# DB

Types:

- <code><a href="./src/resources/db.ts">BoolFieldUpdateOperationsInput</a></code>
- <code><a href="./src/resources/db.ts">DateTimeFieldUpdateOperationsInput</a></code>
- <code><a href="./src/resources/db.ts">IntFieldUpdateOperationsInput</a></code>
- <code><a href="./src/resources/db.ts">NestedBoolFilter</a></code>
- <code><a href="./src/resources/db.ts">NestedDateTimeFilter</a></code>
- <code><a href="./src/resources/db.ts">NestedIntFilter</a></code>
- <code><a href="./src/resources/db.ts">NestedIntNullableFilter</a></code>
- <code><a href="./src/resources/db.ts">NestedStringFilter</a></code>
- <code><a href="./src/resources/db.ts">NestedStringNullableFilter</a></code>
- <code><a href="./src/resources/db.ts">NullableIntFieldUpdateOperationsInput</a></code>
- <code><a href="./src/resources/db.ts">NullableStringFieldUpdateOperationsInput</a></code>
- <code><a href="./src/resources/db.ts">StringFieldUpdateOperationsInput</a></code>
- <code><a href="./src/resources/db.ts">UsageCreateInput</a></code>
- <code><a href="./src/resources/db.ts">UsageWhereInput</a></code>
- <code><a href="./src/resources/db.ts">UsageWhereInput2</a></code>
- <code><a href="./src/resources/db.ts">UsageWhereUniqueInput</a></code>
- <code><a href="./src/resources/db.ts">UsersBillingCreateEnvelopeInput</a></code>
- <code><a href="./src/resources/db.ts">UsersBillingCreateInput</a></code>
- <code><a href="./src/resources/db.ts">UsersBillingUpdateEnvelopeInput</a></code>
- <code><a href="./src/resources/db.ts">UsersBillingWhereInput</a></code>
- <code><a href="./src/resources/db.ts">UsersWhereInput</a></code>
- <code><a href="./src/resources/db.ts">UsersWhereInput2</a></code>
- <code><a href="./src/resources/db.ts">UsersWhereUniqueInput</a></code>
- <code><a href="./src/resources/db.ts">DBAggregateUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBAggregateUsageRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBAggregateUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBAggregateUsersRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBCreateManyUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBCreateManyUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBCreateOneUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBCreateOneUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBDeleteManyUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBDeleteManyUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBDeleteOneUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBDeleteOneUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBExecuteRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindFirstUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindFirstUsageOrThrowResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindFirstUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindFirstUsersOrThrowResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindManyUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindManyUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindUniqueUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindUniqueUsageOrThrowResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindUniqueUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindUniqueUsersOrThrowResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindUsageRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBFindUsersRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBGroupByUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBGroupByUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBQueryRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBQueryRawJsonResponse</a></code>
- <code><a href="./src/resources/db.ts">DBRunCommandRawResponse</a></code>
- <code><a href="./src/resources/db.ts">DBUpdateManyUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBUpdateManyUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBUpdateOneUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBUpdateOneUsersResponse</a></code>
- <code><a href="./src/resources/db.ts">DBUpsertOneUsageResponse</a></code>
- <code><a href="./src/resources/db.ts">DBUpsertOneUsersResponse</a></code>

Methods:

- <code title="get /db/Aggregateusage">client.db.<a href="./src/resources/db.ts">aggregateUsage</a>({ ...params }) -> DBAggregateUsageResponse</code>
- <code title="get /db/AggregateusageRaw">client.db.<a href="./src/resources/db.ts">aggregateUsageRaw</a>({ ...params }) -> DBAggregateUsageRawResponse</code>
- <code title="get /db/Aggregateusers">client.db.<a href="./src/resources/db.ts">aggregateUsers</a>({ ...params }) -> DBAggregateUsersResponse</code>
- <code title="get /db/AggregateusersRaw">client.db.<a href="./src/resources/db.ts">aggregateUsersRaw</a>({ ...params }) -> DBAggregateUsersRawResponse</code>
- <code title="post /db/CreateManyusage">client.db.<a href="./src/resources/db.ts">createManyUsage</a>({ ...params }) -> DBCreateManyUsageResponse</code>
- <code title="post /db/CreateManyusers">client.db.<a href="./src/resources/db.ts">createManyUsers</a>({ ...params }) -> DBCreateManyUsersResponse</code>
- <code title="post /db/CreateOneusage">client.db.<a href="./src/resources/db.ts">createOneUsage</a>({ ...params }) -> DBCreateOneUsageResponse</code>
- <code title="post /db/CreateOneusers">client.db.<a href="./src/resources/db.ts">createOneUsers</a>({ ...params }) -> DBCreateOneUsersResponse</code>
- <code title="post /db/DeleteManyusage">client.db.<a href="./src/resources/db.ts">deleteManyUsage</a>({ ...params }) -> DBDeleteManyUsageResponse</code>
- <code title="post /db/DeleteManyusers">client.db.<a href="./src/resources/db.ts">deleteManyUsers</a>({ ...params }) -> DBDeleteManyUsersResponse</code>
- <code title="post /db/DeleteOneusage">client.db.<a href="./src/resources/db.ts">deleteOneUsage</a>({ ...params }) -> DBDeleteOneUsageResponse</code>
- <code title="post /db/DeleteOneusers">client.db.<a href="./src/resources/db.ts">deleteOneUsers</a>({ ...params }) -> DBDeleteOneUsersResponse</code>
- <code title="post /db/ExecuteRaw">client.db.<a href="./src/resources/db.ts">executeRaw</a>({ ...params }) -> DBExecuteRawResponse</code>
- <code title="get /db/FindFirstusage">client.db.<a href="./src/resources/db.ts">findFirstUsage</a>({ ...params }) -> DBFindFirstUsageResponse</code>
- <code title="get /db/FindFirstusageOrThrow">client.db.<a href="./src/resources/db.ts">findFirstUsageOrThrow</a>({ ...params }) -> DBFindFirstUsageOrThrowResponse</code>
- <code title="get /db/FindFirstusers">client.db.<a href="./src/resources/db.ts">findFirstUsers</a>({ ...params }) -> DBFindFirstUsersResponse</code>
- <code title="get /db/FindFirstusersOrThrow">client.db.<a href="./src/resources/db.ts">findFirstUsersOrThrow</a>({ ...params }) -> DBFindFirstUsersOrThrowResponse</code>
- <code title="get /db/FindManyusage">client.db.<a href="./src/resources/db.ts">findManyUsage</a>({ ...params }) -> DBFindManyUsageResponse</code>
- <code title="get /db/FindManyusers">client.db.<a href="./src/resources/db.ts">findManyUsers</a>({ ...params }) -> DBFindManyUsersResponse</code>
- <code title="get /db/FindUniqueusage">client.db.<a href="./src/resources/db.ts">findUniqueUsage</a>() -> DBFindUniqueUsageResponse</code>
- <code title="get /db/FindUniqueusageOrThrow">client.db.<a href="./src/resources/db.ts">findUniqueUsageOrThrow</a>() -> DBFindUniqueUsageOrThrowResponse</code>
- <code title="get /db/FindUniqueusers">client.db.<a href="./src/resources/db.ts">findUniqueUsers</a>() -> DBFindUniqueUsersResponse</code>
- <code title="get /db/FindUniqueusersOrThrow">client.db.<a href="./src/resources/db.ts">findUniqueUsersOrThrow</a>() -> DBFindUniqueUsersOrThrowResponse</code>
- <code title="get /db/FindusageRaw">client.db.<a href="./src/resources/db.ts">findUsageRaw</a>() -> DBFindUsageRawResponse</code>
- <code title="get /db/FindusersRaw">client.db.<a href="./src/resources/db.ts">findUsersRaw</a>() -> DBFindUsersRawResponse</code>
- <code title="get /db/GroupByusage">client.db.<a href="./src/resources/db.ts">groupByUsage</a>({ ...params }) -> DBGroupByUsageResponse</code>
- <code title="get /db/GroupByusers">client.db.<a href="./src/resources/db.ts">groupByUsers</a>({ ...params }) -> DBGroupByUsersResponse</code>
- <code title="get /db/QueryRaw">client.db.<a href="./src/resources/db.ts">queryRaw</a>({ ...params }) -> DBQueryRawResponse</code>
- <code title="get /db/QueryRawJSON">client.db.<a href="./src/resources/db.ts">queryRawJson</a>({ ...params }) -> DBQueryRawJsonResponse</code>
- <code title="post /db/RunCommandRaw">client.db.<a href="./src/resources/db.ts">runCommandRaw</a>({ ...params }) -> DBRunCommandRawResponse</code>
- <code title="post /db/UpdateManyusage">client.db.<a href="./src/resources/db.ts">updateManyUsage</a>({ ...params }) -> DBUpdateManyUsageResponse</code>
- <code title="post /db/UpdateManyusers">client.db.<a href="./src/resources/db.ts">updateManyUsers</a>({ ...params }) -> DBUpdateManyUsersResponse</code>
- <code title="post /db/UpdateOneusage">client.db.<a href="./src/resources/db.ts">updateOneUsage</a>({ ...params }) -> DBUpdateOneUsageResponse</code>
- <code title="post /db/UpdateOneusers">client.db.<a href="./src/resources/db.ts">updateOneUsers</a>({ ...params }) -> DBUpdateOneUsersResponse</code>
- <code title="post /db/UpsertOneusage">client.db.<a href="./src/resources/db.ts">upsertOneUsage</a>({ ...params }) -> DBUpsertOneUsageResponse</code>
- <code title="post /db/UpsertOneusers">client.db.<a href="./src/resources/db.ts">upsertOneUsers</a>({ ...params }) -> DBUpsertOneUsersResponse</code>

# Dental

Types:

- <code><a href="./src/resources/dental.ts">DentalCheckEligibilityResponse</a></code>

Methods:

- <code title="post /dental/eligibility">client.dental.<a href="./src/resources/dental.ts">checkEligibility</a>({ ...params }) -> DentalCheckEligibilityResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserSubscribeResponse</a></code>

Methods:

- <code title="get /users/get">client.users.<a href="./src/resources/users.ts">retrieve</a>({ ...params }) -> UserRetrieveResponse</code>
- <code title="post /users/update">client.users.<a href="./src/resources/users.ts">update</a>({ ...params }) -> UserUpdateResponse</code>
- <code title="get /users/subscribe">client.users.<a href="./src/resources/users.ts">subscribe</a>({ ...params }) -> UserSubscribeResponse</code>

# Vs3

## Token

Types:

- <code><a href="./src/resources/vs3/token.ts">TokenRetrieveResponse</a></code>

Methods:

- <code title="get /vs3/token/get">client.vs3.token.<a href="./src/resources/vs3/token.ts">retrieve</a>({ ...params }) -> TokenRetrieveResponse</code>

## User

Types:

- <code><a href="./src/resources/vs3/user.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /vs3/user/get">client.vs3.user.<a href="./src/resources/vs3/user.ts">retrieve</a>({ ...params }) -> UserRetrieveResponse</code>
