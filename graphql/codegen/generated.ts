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



export type Mutation = {
  __typename?: 'Mutation';
  createOneTodo: Todo;
};


export type MutationCreateOneTodoArgs = {
  data: TodoCreateInput;
};

export type Query = {
  __typename?: 'Query';
  prova?: Maybe<Scalars['String']>;
  todos: Array<Todo>;
};


export type QueryTodosArgs = {
  after?: Maybe<TodoWhereUniqueInput>;
  before?: Maybe<TodoWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  description: Scalars['String'];
  id: Scalars['Int'];
};

export type TodoCreateInput = {
  description: Scalars['String'];
};

export type TodoWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type FirstQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FirstQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'prova'>
);


export const FirstQueryDocument = gql`
    query FirstQuery {
  prova
}
    `;

/**
 * __useFirstQueryQuery__
 *
 * To run a query within a React component, call `useFirstQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFirstQueryQuery(baseOptions?: Apollo.QueryHookOptions<FirstQueryQuery, FirstQueryQueryVariables>) {
        return Apollo.useQuery<FirstQueryQuery, FirstQueryQueryVariables>(FirstQueryDocument, baseOptions);
      }
export function useFirstQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FirstQueryQuery, FirstQueryQueryVariables>) {
          return Apollo.useLazyQuery<FirstQueryQuery, FirstQueryQueryVariables>(FirstQueryDocument, baseOptions);
        }
export type FirstQueryQueryHookResult = ReturnType<typeof useFirstQueryQuery>;
export type FirstQueryLazyQueryHookResult = ReturnType<typeof useFirstQueryLazyQuery>;
export type FirstQueryQueryResult = Apollo.QueryResult<FirstQueryQuery, FirstQueryQueryVariables>;