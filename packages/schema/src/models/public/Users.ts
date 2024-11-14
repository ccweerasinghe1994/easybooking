// @generated
// This file is automatically generated by Kanel. Do not modify manually.

/** Identifier type for public.users */
export type UsersId = number & { __brand: 'UsersId' };

/** Represents the table public.users */
export default interface Users {
  id: UsersId;

  email: string;

  password: string;
}

/** Represents the initializer for the table public.users */
export interface UsersInitializer {
  /** Default value: nextval('users_id_seq'::regclass) */
  id?: UsersId;

  email: string;

  password: string;
}

/** Represents the mutator for the table public.users */
export interface UsersMutator {
  id?: UsersId;

  email?: string;

  password?: string;
}
