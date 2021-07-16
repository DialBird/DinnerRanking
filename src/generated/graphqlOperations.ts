import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "supers" */
  delete_supers?: Maybe<Supers_Mutation_Response>;
  /** delete single row from the table: "supers" */
  delete_supers_by_pk?: Maybe<Supers>;
  /** insert data into the table: "supers" */
  insert_supers?: Maybe<Supers_Mutation_Response>;
  /** insert a single row into the table: "supers" */
  insert_supers_one?: Maybe<Supers>;
  /** update data of the table: "supers" */
  update_supers?: Maybe<Supers_Mutation_Response>;
  /** update single row of the table: "supers" */
  update_supers_by_pk?: Maybe<Supers>;
};


/** mutation root */
export type Mutation_RootDelete_SupersArgs = {
  where: Supers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_SupersArgs = {
  objects: Array<Supers_Insert_Input>;
  on_conflict?: Maybe<Supers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supers_OneArgs = {
  object: Supers_Insert_Input;
  on_conflict?: Maybe<Supers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_SupersArgs = {
  _inc?: Maybe<Supers_Inc_Input>;
  _set?: Maybe<Supers_Set_Input>;
  where: Supers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supers_By_PkArgs = {
  _inc?: Maybe<Supers_Inc_Input>;
  _set?: Maybe<Supers_Set_Input>;
  pk_columns: Supers_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "supers" */
  supers: Array<Supers>;
  /** fetch aggregated fields from the table: "supers" */
  supers_aggregate: Supers_Aggregate;
  /** fetch data from the table: "supers" using primary key columns */
  supers_by_pk?: Maybe<Supers>;
};


export type Query_RootSupersArgs = {
  distinct_on?: Maybe<Array<Supers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supers_Order_By>>;
  where?: Maybe<Supers_Bool_Exp>;
};


export type Query_RootSupers_AggregateArgs = {
  distinct_on?: Maybe<Array<Supers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supers_Order_By>>;
  where?: Maybe<Supers_Bool_Exp>;
};


export type Query_RootSupers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "supers" */
  supers: Array<Supers>;
  /** fetch aggregated fields from the table: "supers" */
  supers_aggregate: Supers_Aggregate;
  /** fetch data from the table: "supers" using primary key columns */
  supers_by_pk?: Maybe<Supers>;
};


export type Subscription_RootSupersArgs = {
  distinct_on?: Maybe<Array<Supers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supers_Order_By>>;
  where?: Maybe<Supers_Bool_Exp>;
};


export type Subscription_RootSupers_AggregateArgs = {
  distinct_on?: Maybe<Array<Supers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supers_Order_By>>;
  where?: Maybe<Supers_Bool_Exp>;
};


export type Subscription_RootSupers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "supers" */
export type Supers = {
  __typename?: 'supers';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "supers" */
export type Supers_Aggregate = {
  __typename?: 'supers_aggregate';
  aggregate?: Maybe<Supers_Aggregate_Fields>;
  nodes: Array<Supers>;
};

/** aggregate fields of "supers" */
export type Supers_Aggregate_Fields = {
  __typename?: 'supers_aggregate_fields';
  avg?: Maybe<Supers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supers_Max_Fields>;
  min?: Maybe<Supers_Min_Fields>;
  stddev?: Maybe<Supers_Stddev_Fields>;
  stddev_pop?: Maybe<Supers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supers_Stddev_Samp_Fields>;
  sum?: Maybe<Supers_Sum_Fields>;
  var_pop?: Maybe<Supers_Var_Pop_Fields>;
  var_samp?: Maybe<Supers_Var_Samp_Fields>;
  variance?: Maybe<Supers_Variance_Fields>;
};


/** aggregate fields of "supers" */
export type Supers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Supers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supers_Avg_Fields = {
  __typename?: 'supers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supers". All fields are combined with a logical 'AND'. */
export type Supers_Bool_Exp = {
  _and?: Maybe<Array<Supers_Bool_Exp>>;
  _not?: Maybe<Supers_Bool_Exp>;
  _or?: Maybe<Array<Supers_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "supers" */
export enum Supers_Constraint {
  /** unique or primary key constraint */
  SupersPkey = 'supers_pkey'
}

/** input type for incrementing numeric columns in table "supers" */
export type Supers_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "supers" */
export type Supers_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Supers_Max_Fields = {
  __typename?: 'supers_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Supers_Min_Fields = {
  __typename?: 'supers_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "supers" */
export type Supers_Mutation_Response = {
  __typename?: 'supers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Supers>;
};

/** on conflict condition type for table "supers" */
export type Supers_On_Conflict = {
  constraint: Supers_Constraint;
  update_columns?: Array<Supers_Update_Column>;
  where?: Maybe<Supers_Bool_Exp>;
};

/** Ordering options when selecting data from "supers". */
export type Supers_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: supers */
export type Supers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "supers" */
export enum Supers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "supers" */
export type Supers_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Supers_Stddev_Fields = {
  __typename?: 'supers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supers_Stddev_Pop_Fields = {
  __typename?: 'supers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supers_Stddev_Samp_Fields = {
  __typename?: 'supers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Supers_Sum_Fields = {
  __typename?: 'supers_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "supers" */
export enum Supers_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Supers_Var_Pop_Fields = {
  __typename?: 'supers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supers_Var_Samp_Fields = {
  __typename?: 'supers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supers_Variance_Fields = {
  __typename?: 'supers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = (
  { __typename?: 'query_root' }
  & { supers: Array<(
    { __typename?: 'supers' }
    & Pick<Supers, 'id' | 'name'>
  )> }
);


export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"supers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;