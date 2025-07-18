// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TokenAPI from './token';
import { Token, TokenRetrieveParams, TokenRetrieveResponse } from './token';
import * as UserAPI from './user';
import { User, UserRetrieveParams, UserRetrieveResponse } from './user';

export class Vs3 extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);
}

Vs3.Token = Token;
Vs3.User = User;

export declare namespace Vs3 {
  export {
    Token as Token,
    type TokenRetrieveResponse as TokenRetrieveResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
  };

  export {
    User as User,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserRetrieveParams as UserRetrieveParams,
  };
}
