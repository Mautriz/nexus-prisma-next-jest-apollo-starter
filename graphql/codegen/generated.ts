import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Ciao = {
  __typename?: 'Ciao';
  helloWorld?: Maybe<Scalars['String']>;
};



export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type Post = {
  __typename?: 'Post';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type PostCreateManyWithoutUserInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutUserInput>>;
};

export type PostCreateWithoutUserInput = {
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  ciao?: Maybe<Ciao>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  posts: Array<Post>;
  username: Scalars['String'];
};


export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  posts?: Maybe<PostCreateManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = (
  { __typename?: 'Query' }
  & { ciao?: Maybe<(
    { __typename?: 'Ciao' }
    & Pick<Ciao, 'helloWorld'>
  )> }
);


export const MyQueryDocument = gql`
    query MyQuery {
  ciao {
    helloWorld
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;