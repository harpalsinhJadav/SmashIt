/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Owner
 *
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>;
/**
 * Model Court
 *
 */
export type Court = $Result.DefaultSelection<Prisma.$CourtPayload>;
/**
 * Model Slot
 *
 */
export type Slot = $Result.DefaultSelection<Prisma.$SlotPayload>;
/**
 * Model Booking
 *
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>;
/**
 * Model Review
 *
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    ADMIN: "ADMIN";
    OWNER: "OWNER";
    PLAYER: "PLAYER";
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const CourtType: {
    BADMINTON: "BADMINTON";
    TENNIS: "TENNIS";
    SQUASH: "SQUASH";
    BASKETBALL: "BASKETBALL";
    FOOTBALL: "FOOTBALL";
    CRICKET: "CRICKET";
  };

  export type CourtType = (typeof CourtType)[keyof typeof CourtType];

  export const Status: {
    ACTIVE: "ACTIVE";
    UNDER_REVIEW: "UNDER_REVIEW";
    MAINTENANCE: "MAINTENANCE";
    INACTIVE: "INACTIVE";
  };

  export type Status = (typeof Status)[keyof typeof Status];

  export const BookingStatus: {
    PENDING: "PENDING";
    CONFIRMED: "CONFIRMED";
    CANCELLED: "CANCELLED";
    COMPLETED: "COMPLETED";
  };

  export type BookingStatus =
    (typeof BookingStatus)[keyof typeof BookingStatus];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type CourtType = $Enums.CourtType;

export const CourtType: typeof $Enums.CourtType;

export type Status = $Enums.Status;

export const Status: typeof $Enums.Status;

export type BookingStatus = $Enums.BookingStatus;

export const BookingStatus: typeof $Enums.BookingStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P]
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number }
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   */
  get owner(): Prisma.OwnerDelegate<ExtArgs>;

  /**
   * `prisma.court`: Exposes CRUD operations for the **Court** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courts
   * const courts = await prisma.court.findMany()
   * ```
   */
  get court(): Prisma.CourtDelegate<ExtArgs>;

  /**
   * `prisma.slot`: Exposes CRUD operations for the **Slot** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Slots
   * const slots = await prisma.slot.findMany()
   * ```
   */
  get slot(): Prisma.SlotDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Owner: "Owner";
    Court: "Court";
    Slot: "Slot";
    Booking: "Booking";
    Review: "Review";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      this["params"]["clientOptions"]
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > = {
    meta: {
      modelProps: "user" | "owner" | "court" | "slot" | "booking" | "review";
      txIsolationLevel: never;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>;
        fields: Prisma.OwnerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>;
          };
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>;
          };
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[];
          };
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>;
          };
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>;
          };
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>;
          };
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>;
          };
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOwner>;
          };
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OwnerGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.OwnerFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.OwnerAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>;
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number;
          };
        };
      };
      Court: {
        payload: Prisma.$CourtPayload<ExtArgs>;
        fields: Prisma.CourtFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CourtFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CourtFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>;
          };
          findFirst: {
            args: Prisma.CourtFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CourtFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>;
          };
          findMany: {
            args: Prisma.CourtFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[];
          };
          create: {
            args: Prisma.CourtCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>;
          };
          createMany: {
            args: Prisma.CourtCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CourtDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>;
          };
          update: {
            args: Prisma.CourtUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>;
          };
          deleteMany: {
            args: Prisma.CourtDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CourtUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CourtUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>;
          };
          aggregate: {
            args: Prisma.CourtAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourt>;
          };
          groupBy: {
            args: Prisma.CourtGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourtGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.CourtFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.CourtAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.CourtCountArgs<ExtArgs>;
            result: $Utils.Optional<CourtCountAggregateOutputType> | number;
          };
        };
      };
      Slot: {
        payload: Prisma.$SlotPayload<ExtArgs>;
        fields: Prisma.SlotFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SlotFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SlotFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>;
          };
          findFirst: {
            args: Prisma.SlotFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SlotFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>;
          };
          findMany: {
            args: Prisma.SlotFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[];
          };
          create: {
            args: Prisma.SlotCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>;
          };
          createMany: {
            args: Prisma.SlotCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.SlotDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>;
          };
          update: {
            args: Prisma.SlotUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>;
          };
          deleteMany: {
            args: Prisma.SlotDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SlotUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.SlotUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>;
          };
          aggregate: {
            args: Prisma.SlotAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSlot>;
          };
          groupBy: {
            args: Prisma.SlotGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SlotGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.SlotFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.SlotAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.SlotCountArgs<ExtArgs>;
            result: $Utils.Optional<SlotCountAggregateOutputType> | number;
          };
        };
      };
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>;
        fields: Prisma.BookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.BookingFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.BookingAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>;
        fields: Prisma.ReviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[];
          };
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.ReviewFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.ReviewAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
    };
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number;
    reviews: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs;
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    courts: number;
  };

  export type OwnerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    courts?: boolean | OwnerCountOutputTypeCountCourtsArgs;
  };

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountCourtsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CourtWhereInput;
  };

  /**
   * Count Type CourtCountOutputType
   */

  export type CourtCountOutputType = {
    slots: number;
    bookings: number;
    reviews: number;
  };

  export type CourtCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    slots?: boolean | CourtCountOutputTypeCountSlotsArgs;
    bookings?: boolean | CourtCountOutputTypeCountBookingsArgs;
    reviews?: boolean | CourtCountOutputTypeCountReviewsArgs;
  };

  // Custom InputTypes
  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CourtCountOutputType
     */
    select?: CourtCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountSlotsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: SlotWhereInput;
  };

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountBookingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
  };

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountReviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ReviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    phoneNumber: string | null;
    avatarUrl: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    phoneNumber: string | null;
    avatarUrl: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    phoneNumber: number;
    avatarUrl: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    phoneNumber?: true;
    avatarUrl?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    phoneNumber?: true;
    avatarUrl?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    phoneNumber?: true;
    avatarUrl?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string | null;
    password: string;
    phoneNumber: string | null;
    avatarUrl: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      phoneNumber?: boolean;
      avatarUrl?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      bookings?: boolean | User$bookingsArgs<ExtArgs>;
      ownerProfile?: boolean | User$ownerProfileArgs<ExtArgs>;
      reviews?: boolean | User$reviewsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    phoneNumber?: boolean;
    avatarUrl?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>;
    ownerProfile?: boolean | User$ownerProfileArgs<ExtArgs>;
    reviews?: boolean | User$reviewsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "User";
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[];
      ownerProfile: Prisma.$OwnerPayload<ExtArgs> | null;
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string | null;
        password: string;
        phoneNumber: string | null;
        avatarUrl: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$bookingsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null
    >;
    ownerProfile<T extends User$ownerProfileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ownerProfileArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<
        Prisma.$OwnerPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      > | null,
      null,
      ExtArgs
    >;
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$reviewsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
    readonly phoneNumber: FieldRef<"User", "String">;
    readonly avatarUrl: FieldRef<"User", "String">;
    readonly role: FieldRef<"User", "Role">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.bookings
   */
  export type User$bookingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    cursor?: BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * User.ownerProfile
   */
  export type User$ownerProfileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    where?: OwnerWhereInput;
  };

  /**
   * User.reviews
   */
  export type User$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  export type OwnerMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
  };

  export type OwnerMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
  };

  export type OwnerCountAggregateOutputType = {
    id: number;
    userId: number;
    _all: number;
  };

  export type OwnerMinAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type OwnerMaxAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type OwnerCountAggregateInputType = {
    id?: true;
    userId?: true;
    _all?: true;
  };

  export type OwnerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Owners
     **/
    _count?: true | OwnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OwnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OwnerMaxAggregateInputType;
  };

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>;
  };

  export type OwnerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: OwnerWhereInput;
    orderBy?:
      | OwnerOrderByWithAggregationInput
      | OwnerOrderByWithAggregationInput[];
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum;
    having?: OwnerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
  };

  export type OwnerGroupByOutputType = {
    id: string;
    userId: string;
    _count: OwnerCountAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OwnerGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof OwnerGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>;
        }
      >
    >;

  export type OwnerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      courts?: boolean | Owner$courtsArgs<ExtArgs>;
      _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["owner"]
  >;

  export type OwnerSelectScalar = {
    id?: boolean;
    userId?: boolean;
  };

  export type OwnerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    courts?: boolean | Owner$courtsArgs<ExtArgs>;
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $OwnerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Owner";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      courts: Prisma.$CourtPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
      },
      ExtArgs["result"]["owner"]
    >;
    composites: {};
  };

  type OwnerGetPayload<
    S extends boolean | null | undefined | OwnerDefaultArgs
  > = $Result.GetResult<Prisma.$OwnerPayload, S>;

  type OwnerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<OwnerFindManyArgs, "select" | "include" | "distinct"> & {
    select?: OwnerCountAggregateInputType | true;
  };

  export interface OwnerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Owner"];
      meta: { name: "Owner" };
    };
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(
      args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(
      args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     *
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OwnerFindManyArgs>(
      args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     *
     */
    create<T extends OwnerCreateArgs>(
      args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OwnerCreateManyArgs>(
      args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     *
     */
    delete<T extends OwnerDeleteArgs>(
      args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OwnerUpdateArgs>(
      args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OwnerDeleteManyArgs>(
      args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OwnerUpdateManyArgs>(
      args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(
      args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Owners that matches the filter.
     * @param {OwnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const owner = await prisma.owner.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OwnerFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Owner.
     * @param {OwnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const owner = await prisma.owner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: OwnerAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
     **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OwnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OwnerAggregateArgs>(
      args: Subset<T, OwnerAggregateArgs>
    ): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs["orderBy"] }
        : { orderBy?: OwnerGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetOwnerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Owner model
     */
    readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    courts<T extends Owner$courtsArgs<ExtArgs> = {}>(
      args?: Subset<T, Owner$courtsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany"> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", "String">;
    readonly userId: FieldRef<"Owner", "String">;
  }

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput;
  };

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput;
  };

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Owners.
     */
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * Owner create
   */
  export type OwnerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>;
  };

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[];
  };

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>;
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput;
  };

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>;
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput;
  };

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput;
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>;
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>;
  };

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput;
  };

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput;
  };

  /**
   * Owner findRaw
   */
  export type OwnerFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Owner aggregateRaw
   */
  export type OwnerAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Owner.courts
   */
  export type Owner$courtsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    where?: CourtWhereInput;
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[];
    cursor?: CourtWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[];
  };

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null;
  };

  /**
   * Model Court
   */

  export type AggregateCourt = {
    _count: CourtCountAggregateOutputType | null;
    _avg: CourtAvgAggregateOutputType | null;
    _sum: CourtSumAggregateOutputType | null;
    _min: CourtMinAggregateOutputType | null;
    _max: CourtMaxAggregateOutputType | null;
  };

  export type CourtAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    pricePerHour: number | null;
  };

  export type CourtSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    pricePerHour: number | null;
  };

  export type CourtMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    location: string | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    type: $Enums.CourtType | null;
    status: $Enums.Status | null;
    pricePerHour: number | null;
    mainImage: string | null;
    ownerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CourtMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    location: string | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    type: $Enums.CourtType | null;
    status: $Enums.Status | null;
    pricePerHour: number | null;
    mainImage: string | null;
    ownerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CourtCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    location: number;
    address: number;
    latitude: number;
    longitude: number;
    type: number;
    status: number;
    facilities: number;
    pricePerHour: number;
    mainImage: number;
    ownerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CourtAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    pricePerHour?: true;
  };

  export type CourtSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    pricePerHour?: true;
  };

  export type CourtMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    location?: true;
    address?: true;
    latitude?: true;
    longitude?: true;
    type?: true;
    status?: true;
    pricePerHour?: true;
    mainImage?: true;
    ownerId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CourtMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    location?: true;
    address?: true;
    latitude?: true;
    longitude?: true;
    type?: true;
    status?: true;
    pricePerHour?: true;
    mainImage?: true;
    ownerId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CourtCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    location?: true;
    address?: true;
    latitude?: true;
    longitude?: true;
    type?: true;
    status?: true;
    facilities?: true;
    pricePerHour?: true;
    mainImage?: true;
    ownerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CourtAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Court to aggregate.
     */
    where?: CourtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CourtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Courts
     **/
    _count?: true | CourtCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CourtAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CourtSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourtMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourtMaxAggregateInputType;
  };

  export type GetCourtAggregateType<T extends CourtAggregateArgs> = {
    [P in keyof T & keyof AggregateCourt]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourt[P]>
      : GetScalarType<T[P], AggregateCourt[P]>;
  };

  export type CourtGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CourtWhereInput;
    orderBy?:
      | CourtOrderByWithAggregationInput
      | CourtOrderByWithAggregationInput[];
    by: CourtScalarFieldEnum[] | CourtScalarFieldEnum;
    having?: CourtScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourtCountAggregateInputType | true;
    _avg?: CourtAvgAggregateInputType;
    _sum?: CourtSumAggregateInputType;
    _min?: CourtMinAggregateInputType;
    _max?: CourtMaxAggregateInputType;
  };

  export type CourtGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    location: string;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    type: $Enums.CourtType;
    status: $Enums.Status;
    facilities: string[];
    pricePerHour: number;
    mainImage: string | null;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CourtCountAggregateOutputType | null;
    _avg: CourtAvgAggregateOutputType | null;
    _sum: CourtSumAggregateOutputType | null;
    _min: CourtMinAggregateOutputType | null;
    _max: CourtMaxAggregateOutputType | null;
  };

  type GetCourtGroupByPayload<T extends CourtGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CourtGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CourtGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtGroupByOutputType[P]>
            : GetScalarType<T[P], CourtGroupByOutputType[P]>;
        }
      >
    >;

  export type CourtSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      location?: boolean;
      address?: boolean;
      latitude?: boolean;
      longitude?: boolean;
      type?: boolean;
      status?: boolean;
      facilities?: boolean;
      pricePerHour?: boolean;
      mainImage?: boolean;
      ownerId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      owner?: boolean | OwnerDefaultArgs<ExtArgs>;
      slots?: boolean | Court$slotsArgs<ExtArgs>;
      bookings?: boolean | Court$bookingsArgs<ExtArgs>;
      reviews?: boolean | Court$reviewsArgs<ExtArgs>;
      _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["court"]
  >;

  export type CourtSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    location?: boolean;
    address?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    type?: boolean;
    status?: boolean;
    facilities?: boolean;
    pricePerHour?: boolean;
    mainImage?: boolean;
    ownerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CourtInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>;
    slots?: boolean | Court$slotsArgs<ExtArgs>;
    bookings?: boolean | Court$bookingsArgs<ExtArgs>;
    reviews?: boolean | Court$reviewsArgs<ExtArgs>;
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CourtPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Court";
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>;
      slots: Prisma.$SlotPayload<ExtArgs>[];
      bookings: Prisma.$BookingPayload<ExtArgs>[];
      reviews: Prisma.$ReviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        location: string;
        address: string | null;
        latitude: number | null;
        longitude: number | null;
        type: $Enums.CourtType;
        status: $Enums.Status;
        facilities: string[];
        pricePerHour: number;
        mainImage: string | null;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["court"]
    >;
    composites: {};
  };

  type CourtGetPayload<
    S extends boolean | null | undefined | CourtDefaultArgs
  > = $Result.GetResult<Prisma.$CourtPayload, S>;

  type CourtCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CourtFindManyArgs, "select" | "include" | "distinct"> & {
    select?: CourtCountAggregateInputType | true;
  };

  export interface CourtDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Court"];
      meta: { name: "Court" };
    };
    /**
     * Find zero or one Court that matches the filter.
     * @param {CourtFindUniqueArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtFindUniqueArgs>(
      args: SelectSubset<T, CourtFindUniqueArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Court that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtFindUniqueOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CourtFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Court that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtFindFirstArgs>(
      args?: SelectSubset<T, CourtFindFirstArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Court that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourtFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.court.findMany()
     *
     * // Get first 10 Courts
     * const courts = await prisma.court.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courtWithIdOnly = await prisma.court.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CourtFindManyArgs>(
      args?: SelectSubset<T, CourtFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Court.
     * @param {CourtCreateArgs} args - Arguments to create a Court.
     * @example
     * // Create one Court
     * const Court = await prisma.court.create({
     *   data: {
     *     // ... data to create a Court
     *   }
     * })
     *
     */
    create<T extends CourtCreateArgs>(
      args: SelectSubset<T, CourtCreateArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Courts.
     * @param {CourtCreateManyArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const court = await prisma.court.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourtCreateManyArgs>(
      args?: SelectSubset<T, CourtCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Court.
     * @param {CourtDeleteArgs} args - Arguments to delete one Court.
     * @example
     * // Delete one Court
     * const Court = await prisma.court.delete({
     *   where: {
     *     // ... filter to delete one Court
     *   }
     * })
     *
     */
    delete<T extends CourtDeleteArgs>(
      args: SelectSubset<T, CourtDeleteArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Court.
     * @param {CourtUpdateArgs} args - Arguments to update one Court.
     * @example
     * // Update one Court
     * const court = await prisma.court.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourtUpdateArgs>(
      args: SelectSubset<T, CourtUpdateArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Courts.
     * @param {CourtDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.court.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourtDeleteManyArgs>(
      args?: SelectSubset<T, CourtDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourtUpdateManyArgs>(
      args: SelectSubset<T, CourtUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Court.
     * @param {CourtUpsertArgs} args - Arguments to update or create a Court.
     * @example
     * // Update or create a Court
     * const court = await prisma.court.upsert({
     *   create: {
     *     // ... data to create a Court
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Court we want to update
     *   }
     * })
     */
    upsert<T extends CourtUpsertArgs>(
      args: SelectSubset<T, CourtUpsertArgs<ExtArgs>>
    ): Prisma__CourtClient<
      $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Courts that matches the filter.
     * @param {CourtFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const court = await prisma.court.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CourtFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Court.
     * @param {CourtAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const court = await prisma.court.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: CourtAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.court.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
     **/
    count<T extends CourtCountArgs>(
      args?: Subset<T, CourtCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CourtCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CourtAggregateArgs>(
      args: Subset<T, CourtAggregateArgs>
    ): Prisma.PrismaPromise<GetCourtAggregateType<T>>;

    /**
     * Group by Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CourtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtGroupByArgs["orderBy"] }
        : { orderBy?: CourtGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CourtGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCourtGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Court model
     */
    readonly fields: CourtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Court.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OwnerDefaultArgs<ExtArgs>>
    ): Prisma__OwnerClient<
      | $Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    slots<T extends Court$slotsArgs<ExtArgs> = {}>(
      args?: Subset<T, Court$slotsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany"> | Null
    >;
    bookings<T extends Court$bookingsArgs<ExtArgs> = {}>(
      args?: Subset<T, Court$bookingsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null
    >;
    reviews<T extends Court$reviewsArgs<ExtArgs> = {}>(
      args?: Subset<T, Court$reviewsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Court model
   */
  interface CourtFieldRefs {
    readonly id: FieldRef<"Court", "String">;
    readonly name: FieldRef<"Court", "String">;
    readonly description: FieldRef<"Court", "String">;
    readonly location: FieldRef<"Court", "String">;
    readonly address: FieldRef<"Court", "String">;
    readonly latitude: FieldRef<"Court", "Float">;
    readonly longitude: FieldRef<"Court", "Float">;
    readonly type: FieldRef<"Court", "CourtType">;
    readonly status: FieldRef<"Court", "Status">;
    readonly facilities: FieldRef<"Court", "String[]">;
    readonly pricePerHour: FieldRef<"Court", "Float">;
    readonly mainImage: FieldRef<"Court", "String">;
    readonly ownerId: FieldRef<"Court", "String">;
    readonly createdAt: FieldRef<"Court", "DateTime">;
    readonly updatedAt: FieldRef<"Court", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Court findUnique
   */
  export type CourtFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput;
  };

  /**
   * Court findUniqueOrThrow
   */
  export type CourtFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput;
  };

  /**
   * Court findFirst
   */
  export type CourtFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[];
  };

  /**
   * Court findFirstOrThrow
   */
  export type CourtFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[];
  };

  /**
   * Court findMany
   */
  export type CourtFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Courts.
     */
    cursor?: CourtWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courts.
     */
    skip?: number;
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[];
  };

  /**
   * Court create
   */
  export type CourtCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * The data needed to create a Court.
     */
    data: XOR<CourtCreateInput, CourtUncheckedCreateInput>;
  };

  /**
   * Court createMany
   */
  export type CourtCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Courts.
     */
    data: CourtCreateManyInput | CourtCreateManyInput[];
  };

  /**
   * Court update
   */
  export type CourtUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * The data needed to update a Court.
     */
    data: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>;
    /**
     * Choose, which Court to update.
     */
    where: CourtWhereUniqueInput;
  };

  /**
   * Court updateMany
   */
  export type CourtUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>;
    /**
     * Filter which Courts to update
     */
    where?: CourtWhereInput;
  };

  /**
   * Court upsert
   */
  export type CourtUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * The filter to search for the Court to update in case it exists.
     */
    where: CourtWhereUniqueInput;
    /**
     * In case the Court found by the `where` argument doesn't exist, create a new Court with this data.
     */
    create: XOR<CourtCreateInput, CourtUncheckedCreateInput>;
    /**
     * In case the Court was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>;
  };

  /**
   * Court delete
   */
  export type CourtDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
    /**
     * Filter which Court to delete.
     */
    where: CourtWhereUniqueInput;
  };

  /**
   * Court deleteMany
   */
  export type CourtDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Courts to delete
     */
    where?: CourtWhereInput;
  };

  /**
   * Court findRaw
   */
  export type CourtFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Court aggregateRaw
   */
  export type CourtAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Court.slots
   */
  export type Court$slotsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    where?: SlotWhereInput;
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[];
    cursor?: SlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[];
  };

  /**
   * Court.bookings
   */
  export type Court$bookingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    cursor?: BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Court.reviews
   */
  export type Court$reviewsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    where?: ReviewWhereInput;
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    cursor?: ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Court without action
   */
  export type CourtDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null;
  };

  /**
   * Model Slot
   */

  export type AggregateSlot = {
    _count: SlotCountAggregateOutputType | null;
    _avg: SlotAvgAggregateOutputType | null;
    _sum: SlotSumAggregateOutputType | null;
    _min: SlotMinAggregateOutputType | null;
    _max: SlotMaxAggregateOutputType | null;
  };

  export type SlotAvgAggregateOutputType = {
    price: number | null;
  };

  export type SlotSumAggregateOutputType = {
    price: number | null;
  };

  export type SlotMinAggregateOutputType = {
    id: string | null;
    courtId: string | null;
    startTime: string | null;
    endTime: string | null;
    price: number | null;
    isAvailable: boolean | null;
  };

  export type SlotMaxAggregateOutputType = {
    id: string | null;
    courtId: string | null;
    startTime: string | null;
    endTime: string | null;
    price: number | null;
    isAvailable: boolean | null;
  };

  export type SlotCountAggregateOutputType = {
    id: number;
    courtId: number;
    startTime: number;
    endTime: number;
    price: number;
    isAvailable: number;
    _all: number;
  };

  export type SlotAvgAggregateInputType = {
    price?: true;
  };

  export type SlotSumAggregateInputType = {
    price?: true;
  };

  export type SlotMinAggregateInputType = {
    id?: true;
    courtId?: true;
    startTime?: true;
    endTime?: true;
    price?: true;
    isAvailable?: true;
  };

  export type SlotMaxAggregateInputType = {
    id?: true;
    courtId?: true;
    startTime?: true;
    endTime?: true;
    price?: true;
    isAvailable?: true;
  };

  export type SlotCountAggregateInputType = {
    id?: true;
    courtId?: true;
    startTime?: true;
    endTime?: true;
    price?: true;
    isAvailable?: true;
    _all?: true;
  };

  export type SlotAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Slot to aggregate.
     */
    where?: SlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Slots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Slots
     **/
    _count?: true | SlotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SlotAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SlotSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SlotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SlotMaxAggregateInputType;
  };

  export type GetSlotAggregateType<T extends SlotAggregateArgs> = {
    [P in keyof T & keyof AggregateSlot]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlot[P]>
      : GetScalarType<T[P], AggregateSlot[P]>;
  };

  export type SlotGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: SlotWhereInput;
    orderBy?:
      | SlotOrderByWithAggregationInput
      | SlotOrderByWithAggregationInput[];
    by: SlotScalarFieldEnum[] | SlotScalarFieldEnum;
    having?: SlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SlotCountAggregateInputType | true;
    _avg?: SlotAvgAggregateInputType;
    _sum?: SlotSumAggregateInputType;
    _min?: SlotMinAggregateInputType;
    _max?: SlotMaxAggregateInputType;
  };

  export type SlotGroupByOutputType = {
    id: string;
    courtId: string;
    startTime: string;
    endTime: string;
    price: number | null;
    isAvailable: boolean;
    _count: SlotCountAggregateOutputType | null;
    _avg: SlotAvgAggregateOutputType | null;
    _sum: SlotSumAggregateOutputType | null;
    _min: SlotMinAggregateOutputType | null;
    _max: SlotMaxAggregateOutputType | null;
  };

  type GetSlotGroupByPayload<T extends SlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof SlotGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SlotGroupByOutputType[P]>
          : GetScalarType<T[P], SlotGroupByOutputType[P]>;
      }
    >
  >;

  export type SlotSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      courtId?: boolean;
      startTime?: boolean;
      endTime?: boolean;
      price?: boolean;
      isAvailable?: boolean;
      court?: boolean | CourtDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["slot"]
  >;

  export type SlotSelectScalar = {
    id?: boolean;
    courtId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    price?: boolean;
    isAvailable?: boolean;
  };

  export type SlotInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    court?: boolean | CourtDefaultArgs<ExtArgs>;
  };

  export type $SlotPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Slot";
    objects: {
      court: Prisma.$CourtPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        courtId: string;
        startTime: string;
        endTime: string;
        price: number | null;
        isAvailable: boolean;
      },
      ExtArgs["result"]["slot"]
    >;
    composites: {};
  };

  type SlotGetPayload<S extends boolean | null | undefined | SlotDefaultArgs> =
    $Result.GetResult<Prisma.$SlotPayload, S>;

  type SlotCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<SlotFindManyArgs, "select" | "include" | "distinct"> & {
    select?: SlotCountAggregateInputType | true;
  };

  export interface SlotDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Slot"];
      meta: { name: "Slot" };
    };
    /**
     * Find zero or one Slot that matches the filter.
     * @param {SlotFindUniqueArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotFindUniqueArgs>(
      args: SelectSubset<T, SlotFindUniqueArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Slot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotFindUniqueOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SlotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotFindFirstArgs>(
      args?: SelectSubset<T, SlotFindFirstArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SlotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slot.findMany()
     *
     * // Get first 10 Slots
     * const slots = await prisma.slot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const slotWithIdOnly = await prisma.slot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SlotFindManyArgs>(
      args?: SelectSubset<T, SlotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Slot.
     * @param {SlotCreateArgs} args - Arguments to create a Slot.
     * @example
     * // Create one Slot
     * const Slot = await prisma.slot.create({
     *   data: {
     *     // ... data to create a Slot
     *   }
     * })
     *
     */
    create<T extends SlotCreateArgs>(
      args: SelectSubset<T, SlotCreateArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Slots.
     * @param {SlotCreateManyArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SlotCreateManyArgs>(
      args?: SelectSubset<T, SlotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Slot.
     * @param {SlotDeleteArgs} args - Arguments to delete one Slot.
     * @example
     * // Delete one Slot
     * const Slot = await prisma.slot.delete({
     *   where: {
     *     // ... filter to delete one Slot
     *   }
     * })
     *
     */
    delete<T extends SlotDeleteArgs>(
      args: SelectSubset<T, SlotDeleteArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Slot.
     * @param {SlotUpdateArgs} args - Arguments to update one Slot.
     * @example
     * // Update one Slot
     * const slot = await prisma.slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SlotUpdateArgs>(
      args: SelectSubset<T, SlotUpdateArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Slots.
     * @param {SlotDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SlotDeleteManyArgs>(
      args?: SelectSubset<T, SlotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SlotUpdateManyArgs>(
      args: SelectSubset<T, SlotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Slot.
     * @param {SlotUpsertArgs} args - Arguments to update or create a Slot.
     * @example
     * // Update or create a Slot
     * const slot = await prisma.slot.upsert({
     *   create: {
     *     // ... data to create a Slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slot we want to update
     *   }
     * })
     */
    upsert<T extends SlotUpsertArgs>(
      args: SelectSubset<T, SlotUpsertArgs<ExtArgs>>
    ): Prisma__SlotClient<
      $Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Slots that matches the filter.
     * @param {SlotFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const slot = await prisma.slot.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SlotFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Slot.
     * @param {SlotAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const slot = await prisma.slot.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SlotAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slot.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
     **/
    count<T extends SlotCountArgs>(
      args?: Subset<T, SlotCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SlotCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SlotAggregateArgs>(
      args: Subset<T, SlotAggregateArgs>
    ): Prisma.PrismaPromise<GetSlotAggregateType<T>>;

    /**
     * Group by Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotGroupByArgs["orderBy"] }
        : { orderBy?: SlotGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, SlotGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetSlotGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Slot model
     */
    readonly fields: SlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CourtDefaultArgs<ExtArgs>>
    ): Prisma__CourtClient<
      | $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Slot model
   */
  interface SlotFieldRefs {
    readonly id: FieldRef<"Slot", "String">;
    readonly courtId: FieldRef<"Slot", "String">;
    readonly startTime: FieldRef<"Slot", "String">;
    readonly endTime: FieldRef<"Slot", "String">;
    readonly price: FieldRef<"Slot", "Float">;
    readonly isAvailable: FieldRef<"Slot", "Boolean">;
  }

  // Custom InputTypes
  /**
   * Slot findUnique
   */
  export type SlotFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput;
  };

  /**
   * Slot findUniqueOrThrow
   */
  export type SlotFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput;
  };

  /**
   * Slot findFirst
   */
  export type SlotFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Slots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[];
  };

  /**
   * Slot findFirstOrThrow
   */
  export type SlotFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Slots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[];
  };

  /**
   * Slot findMany
   */
  export type SlotFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Slots.
     */
    cursor?: SlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Slots.
     */
    skip?: number;
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[];
  };

  /**
   * Slot create
   */
  export type SlotCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * The data needed to create a Slot.
     */
    data: XOR<SlotCreateInput, SlotUncheckedCreateInput>;
  };

  /**
   * Slot createMany
   */
  export type SlotCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Slots.
     */
    data: SlotCreateManyInput | SlotCreateManyInput[];
  };

  /**
   * Slot update
   */
  export type SlotUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * The data needed to update a Slot.
     */
    data: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>;
    /**
     * Choose, which Slot to update.
     */
    where: SlotWhereUniqueInput;
  };

  /**
   * Slot updateMany
   */
  export type SlotUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyInput>;
    /**
     * Filter which Slots to update
     */
    where?: SlotWhereInput;
  };

  /**
   * Slot upsert
   */
  export type SlotUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * The filter to search for the Slot to update in case it exists.
     */
    where: SlotWhereUniqueInput;
    /**
     * In case the Slot found by the `where` argument doesn't exist, create a new Slot with this data.
     */
    create: XOR<SlotCreateInput, SlotUncheckedCreateInput>;
    /**
     * In case the Slot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>;
  };

  /**
   * Slot delete
   */
  export type SlotDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
    /**
     * Filter which Slot to delete.
     */
    where: SlotWhereUniqueInput;
  };

  /**
   * Slot deleteMany
   */
  export type SlotDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Slots to delete
     */
    where?: SlotWhereInput;
  };

  /**
   * Slot findRaw
   */
  export type SlotFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Slot aggregateRaw
   */
  export type SlotAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Slot without action
   */
  export type SlotDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null;
  };

  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingAvgAggregateOutputType = {
    totalAmount: number | null;
  };

  export type BookingSumAggregateOutputType = {
    totalAmount: number | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    courtId: string | null;
    userId: string | null;
    bookingDate: Date | null;
    startTime: string | null;
    endTime: string | null;
    totalAmount: number | null;
    status: $Enums.BookingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    courtId: string | null;
    userId: string | null;
    bookingDate: Date | null;
    startTime: string | null;
    endTime: string | null;
    totalAmount: number | null;
    status: $Enums.BookingStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    courtId: number;
    userId: number;
    bookingDate: number;
    startTime: number;
    endTime: number;
    totalAmount: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type BookingAvgAggregateInputType = {
    totalAmount?: true;
  };

  export type BookingSumAggregateInputType = {
    totalAmount?: true;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    courtId?: true;
    userId?: true;
    bookingDate?: true;
    startTime?: true;
    endTime?: true;
    totalAmount?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    courtId?: true;
    userId?: true;
    bookingDate?: true;
    startTime?: true;
    endTime?: true;
    totalAmount?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    courtId?: true;
    userId?: true;
    bookingDate?: true;
    startTime?: true;
    endTime?: true;
    totalAmount?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BookingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BookingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type BookingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithAggregationInput
      | BookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: BookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _avg?: BookingAvgAggregateInputType;
    _sum?: BookingSumAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    courtId: string;
    userId: string;
    bookingDate: Date;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status: $Enums.BookingStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookingGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof BookingGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>;
        }
      >
    >;

  export type BookingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      courtId?: boolean;
      userId?: boolean;
      bookingDate?: boolean;
      startTime?: boolean;
      endTime?: boolean;
      totalAmount?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      court?: boolean | CourtDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["booking"]
  >;

  export type BookingSelectScalar = {
    id?: boolean;
    courtId?: boolean;
    userId?: boolean;
    bookingDate?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    totalAmount?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type BookingInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    court?: boolean | CourtDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $BookingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Booking";
    objects: {
      court: Prisma.$CourtPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        courtId: string;
        userId: string;
        bookingDate: Date;
        startTime: string;
        endTime: string;
        totalAmount: number;
        status: $Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["booking"]
    >;
    composites: {};
  };

  type BookingGetPayload<
    S extends boolean | null | undefined | BookingDefaultArgs
  > = $Result.GetResult<Prisma.$BookingPayload, S>;

  type BookingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<BookingFindManyArgs, "select" | "include" | "distinct"> & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface BookingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Booking"];
      meta: { name: "Booking" };
    };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookingFindManyArgs>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     */
    create<T extends BookingCreateArgs>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookingCreateManyArgs>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     */
    delete<T extends BookingDeleteArgs>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookingUpdateArgs>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookingDeleteManyArgs>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookingUpdateManyArgs>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Bookings that matches the filter.
     * @param {BookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const booking = await prisma.booking.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BookingFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Booking.
     * @param {BookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const booking = await prisma.booking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: BookingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs["orderBy"] }
        : { orderBy?: BookingGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBookingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Booking model
     */
    readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CourtDefaultArgs<ExtArgs>>
    ): Prisma__CourtClient<
      | $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", "String">;
    readonly courtId: FieldRef<"Booking", "String">;
    readonly userId: FieldRef<"Booking", "String">;
    readonly bookingDate: FieldRef<"Booking", "DateTime">;
    readonly startTime: FieldRef<"Booking", "String">;
    readonly endTime: FieldRef<"Booking", "String">;
    readonly totalAmount: FieldRef<"Booking", "Float">;
    readonly status: FieldRef<"Booking", "BookingStatus">;
    readonly createdAt: FieldRef<"Booking", "DateTime">;
    readonly updatedAt: FieldRef<"Booking", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking create
   */
  export type BookingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
  };

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
  };

  /**
   * Booking update
   */
  export type BookingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
  };

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput;
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
  };

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput;
  };

  /**
   * Booking findRaw
   */
  export type BookingFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Booking aggregateRaw
   */
  export type BookingAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
  };

  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    userId: string | null;
    courtId: string | null;
    createdAt: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    userId: string | null;
    courtId: string | null;
    createdAt: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    comment: number;
    userId: number;
    courtId: number;
    createdAt: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    userId?: true;
    courtId?: true;
    createdAt?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    userId?: true;
    courtId?: true;
    createdAt?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    userId?: true;
    courtId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type ReviewGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ReviewWhereInput;
    orderBy?:
      | ReviewOrderByWithAggregationInput
      | ReviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: ReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number;
    comment: string | null;
    userId: string;
    courtId: string;
    createdAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ReviewGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ReviewGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
        }
      >
    >;

  export type ReviewSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      comment?: boolean;
      userId?: boolean;
      courtId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      court?: boolean | CourtDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["review"]
  >;

  export type ReviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    comment?: boolean;
    userId?: boolean;
    courtId?: boolean;
    createdAt?: boolean;
  };

  export type ReviewInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    court?: boolean | CourtDefaultArgs<ExtArgs>;
  };

  export type $ReviewPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Review";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      court: Prisma.$CourtPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number;
        comment: string | null;
        userId: string;
        courtId: string;
        createdAt: Date;
      },
      ExtArgs["result"]["review"]
    >;
    composites: {};
  };

  type ReviewGetPayload<
    S extends boolean | null | undefined | ReviewDefaultArgs
  > = $Result.GetResult<Prisma.$ReviewPayload, S>;

  type ReviewCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<ReviewFindManyArgs, "select" | "include" | "distinct"> & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface ReviewDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Review"];
      meta: { name: "Review" };
    };
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     */
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     */
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>
    ): Prisma__ReviewClient<
      $Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: ReviewAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs["orderBy"] }
        : { orderBy?: ReviewGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetReviewGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Review model
     */
    readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CourtDefaultArgs<ExtArgs>>
    ): Prisma__CourtClient<
      | $Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", "String">;
    readonly rating: FieldRef<"Review", "Int">;
    readonly comment: FieldRef<"Review", "String">;
    readonly userId: FieldRef<"Review", "String">;
    readonly courtId: FieldRef<"Review", "String">;
    readonly createdAt: FieldRef<"Review", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * Review create
   */
  export type ReviewCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
  };

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[];
  };

  /**
   * Review update
   */
  export type ReviewUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>;
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput;
  };

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput;
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>;
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>;
  };

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput;
  };

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput;
  };

  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    name: "name";
    password: "password";
    phoneNumber: "phoneNumber";
    avatarUrl: "avatarUrl";
    role: "role";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const OwnerScalarFieldEnum: {
    id: "id";
    userId: "userId";
  };

  export type OwnerScalarFieldEnum =
    (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];

  export const CourtScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    location: "location";
    address: "address";
    latitude: "latitude";
    longitude: "longitude";
    type: "type";
    status: "status";
    facilities: "facilities";
    pricePerHour: "pricePerHour";
    mainImage: "mainImage";
    ownerId: "ownerId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CourtScalarFieldEnum =
    (typeof CourtScalarFieldEnum)[keyof typeof CourtScalarFieldEnum];

  export const SlotScalarFieldEnum: {
    id: "id";
    courtId: "courtId";
    startTime: "startTime";
    endTime: "endTime";
    price: "price";
    isAvailable: "isAvailable";
  };

  export type SlotScalarFieldEnum =
    (typeof SlotScalarFieldEnum)[keyof typeof SlotScalarFieldEnum];

  export const BookingScalarFieldEnum: {
    id: "id";
    courtId: "courtId";
    userId: "userId";
    bookingDate: "bookingDate";
    startTime: "startTime";
    endTime: "endTime";
    totalAmount: "totalAmount";
    status: "status";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type BookingScalarFieldEnum =
    (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: "id";
    rating: "rating";
    comment: "comment";
    userId: "userId";
    courtId: "courtId";
    createdAt: "createdAt";
  };

  export type ReviewScalarFieldEnum =
    (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role"
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Role[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Reference to a field of type 'CourtType'
   */
  export type EnumCourtTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "CourtType"
  >;

  /**
   * Reference to a field of type 'CourtType[]'
   */
  export type ListEnumCourtTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "CourtType[]"
  >;

  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Status"
  >;

  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Status[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "BookingStatus"
  >;

  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "BookingStatus[]">;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    name?: StringNullableFilter<"User"> | string | null;
    password?: StringFilter<"User"> | string;
    phoneNumber?: StringNullableFilter<"User"> | string | null;
    avatarUrl?: StringNullableFilter<"User"> | string | null;
    role?: EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    bookings?: BookingListRelationFilter;
    ownerProfile?: XOR<OwnerNullableRelationFilter, OwnerWhereInput> | null;
    reviews?: ReviewListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    bookings?: BookingOrderByRelationAggregateInput;
    ownerProfile?: OwnerOrderByWithRelationInput;
    reviews?: ReviewOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<"User"> | string | null;
      password?: StringFilter<"User"> | string;
      phoneNumber?: StringNullableFilter<"User"> | string | null;
      avatarUrl?: StringNullableFilter<"User"> | string | null;
      role?: EnumRoleFilter<"User"> | $Enums.Role;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      bookings?: BookingListRelationFilter;
      ownerProfile?: XOR<OwnerNullableRelationFilter, OwnerWhereInput> | null;
      reviews?: ReviewListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    name?: StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: StringWithAggregatesFilter<"User"> | string;
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null;
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[];
    OR?: OwnerWhereInput[];
    NOT?: OwnerWhereInput | OwnerWhereInput[];
    id?: StringFilter<"Owner"> | string;
    userId?: StringFilter<"Owner"> | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    courts?: CourtListRelationFilter;
  };

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    courts?: CourtOrderByRelationAggregateInput;
  };

  export type OwnerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: OwnerWhereInput | OwnerWhereInput[];
      OR?: OwnerWhereInput[];
      NOT?: OwnerWhereInput | OwnerWhereInput[];
      user?: XOR<UserRelationFilter, UserWhereInput>;
      courts?: CourtListRelationFilter;
    },
    "id" | "userId"
  >;

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    _count?: OwnerCountOrderByAggregateInput;
    _max?: OwnerMaxOrderByAggregateInput;
    _min?: OwnerMinOrderByAggregateInput;
  };

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?:
      | OwnerScalarWhereWithAggregatesInput
      | OwnerScalarWhereWithAggregatesInput[];
    OR?: OwnerScalarWhereWithAggregatesInput[];
    NOT?:
      | OwnerScalarWhereWithAggregatesInput
      | OwnerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Owner"> | string;
    userId?: StringWithAggregatesFilter<"Owner"> | string;
  };

  export type CourtWhereInput = {
    AND?: CourtWhereInput | CourtWhereInput[];
    OR?: CourtWhereInput[];
    NOT?: CourtWhereInput | CourtWhereInput[];
    id?: StringFilter<"Court"> | string;
    name?: StringFilter<"Court"> | string;
    description?: StringNullableFilter<"Court"> | string | null;
    location?: StringFilter<"Court"> | string;
    address?: StringNullableFilter<"Court"> | string | null;
    latitude?: FloatNullableFilter<"Court"> | number | null;
    longitude?: FloatNullableFilter<"Court"> | number | null;
    type?: EnumCourtTypeFilter<"Court"> | $Enums.CourtType;
    status?: EnumStatusFilter<"Court"> | $Enums.Status;
    facilities?: StringNullableListFilter<"Court">;
    pricePerHour?: FloatFilter<"Court"> | number;
    mainImage?: StringNullableFilter<"Court"> | string | null;
    ownerId?: StringFilter<"Court"> | string;
    createdAt?: DateTimeFilter<"Court"> | Date | string;
    updatedAt?: DateTimeFilter<"Court"> | Date | string;
    owner?: XOR<OwnerRelationFilter, OwnerWhereInput>;
    slots?: SlotListRelationFilter;
    bookings?: BookingListRelationFilter;
    reviews?: ReviewListRelationFilter;
  };

  export type CourtOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    address?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    facilities?: SortOrder;
    pricePerHour?: SortOrder;
    mainImage?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    owner?: OwnerOrderByWithRelationInput;
    slots?: SlotOrderByRelationAggregateInput;
    bookings?: BookingOrderByRelationAggregateInput;
    reviews?: ReviewOrderByRelationAggregateInput;
  };

  export type CourtWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CourtWhereInput | CourtWhereInput[];
      OR?: CourtWhereInput[];
      NOT?: CourtWhereInput | CourtWhereInput[];
      name?: StringFilter<"Court"> | string;
      description?: StringNullableFilter<"Court"> | string | null;
      location?: StringFilter<"Court"> | string;
      address?: StringNullableFilter<"Court"> | string | null;
      latitude?: FloatNullableFilter<"Court"> | number | null;
      longitude?: FloatNullableFilter<"Court"> | number | null;
      type?: EnumCourtTypeFilter<"Court"> | $Enums.CourtType;
      status?: EnumStatusFilter<"Court"> | $Enums.Status;
      facilities?: StringNullableListFilter<"Court">;
      pricePerHour?: FloatFilter<"Court"> | number;
      mainImage?: StringNullableFilter<"Court"> | string | null;
      ownerId?: StringFilter<"Court"> | string;
      createdAt?: DateTimeFilter<"Court"> | Date | string;
      updatedAt?: DateTimeFilter<"Court"> | Date | string;
      owner?: XOR<OwnerRelationFilter, OwnerWhereInput>;
      slots?: SlotListRelationFilter;
      bookings?: BookingListRelationFilter;
      reviews?: ReviewListRelationFilter;
    },
    "id"
  >;

  export type CourtOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    address?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    facilities?: SortOrder;
    pricePerHour?: SortOrder;
    mainImage?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CourtCountOrderByAggregateInput;
    _avg?: CourtAvgOrderByAggregateInput;
    _max?: CourtMaxOrderByAggregateInput;
    _min?: CourtMinOrderByAggregateInput;
    _sum?: CourtSumOrderByAggregateInput;
  };

  export type CourtScalarWhereWithAggregatesInput = {
    AND?:
      | CourtScalarWhereWithAggregatesInput
      | CourtScalarWhereWithAggregatesInput[];
    OR?: CourtScalarWhereWithAggregatesInput[];
    NOT?:
      | CourtScalarWhereWithAggregatesInput
      | CourtScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Court"> | string;
    name?: StringWithAggregatesFilter<"Court"> | string;
    description?: StringNullableWithAggregatesFilter<"Court"> | string | null;
    location?: StringWithAggregatesFilter<"Court"> | string;
    address?: StringNullableWithAggregatesFilter<"Court"> | string | null;
    latitude?: FloatNullableWithAggregatesFilter<"Court"> | number | null;
    longitude?: FloatNullableWithAggregatesFilter<"Court"> | number | null;
    type?: EnumCourtTypeWithAggregatesFilter<"Court"> | $Enums.CourtType;
    status?: EnumStatusWithAggregatesFilter<"Court"> | $Enums.Status;
    facilities?: StringNullableListFilter<"Court">;
    pricePerHour?: FloatWithAggregatesFilter<"Court"> | number;
    mainImage?: StringNullableWithAggregatesFilter<"Court"> | string | null;
    ownerId?: StringWithAggregatesFilter<"Court"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Court"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Court"> | Date | string;
  };

  export type SlotWhereInput = {
    AND?: SlotWhereInput | SlotWhereInput[];
    OR?: SlotWhereInput[];
    NOT?: SlotWhereInput | SlotWhereInput[];
    id?: StringFilter<"Slot"> | string;
    courtId?: StringFilter<"Slot"> | string;
    startTime?: StringFilter<"Slot"> | string;
    endTime?: StringFilter<"Slot"> | string;
    price?: FloatNullableFilter<"Slot"> | number | null;
    isAvailable?: BoolFilter<"Slot"> | boolean;
    court?: XOR<CourtRelationFilter, CourtWhereInput>;
  };

  export type SlotOrderByWithRelationInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    price?: SortOrder;
    isAvailable?: SortOrder;
    court?: CourtOrderByWithRelationInput;
  };

  export type SlotWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      courtId_startTime_endTime?: SlotCourtIdStartTimeEndTimeCompoundUniqueInput;
      AND?: SlotWhereInput | SlotWhereInput[];
      OR?: SlotWhereInput[];
      NOT?: SlotWhereInput | SlotWhereInput[];
      courtId?: StringFilter<"Slot"> | string;
      startTime?: StringFilter<"Slot"> | string;
      endTime?: StringFilter<"Slot"> | string;
      price?: FloatNullableFilter<"Slot"> | number | null;
      isAvailable?: BoolFilter<"Slot"> | boolean;
      court?: XOR<CourtRelationFilter, CourtWhereInput>;
    },
    "id" | "courtId_startTime_endTime"
  >;

  export type SlotOrderByWithAggregationInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    price?: SortOrder;
    isAvailable?: SortOrder;
    _count?: SlotCountOrderByAggregateInput;
    _avg?: SlotAvgOrderByAggregateInput;
    _max?: SlotMaxOrderByAggregateInput;
    _min?: SlotMinOrderByAggregateInput;
    _sum?: SlotSumOrderByAggregateInput;
  };

  export type SlotScalarWhereWithAggregatesInput = {
    AND?:
      | SlotScalarWhereWithAggregatesInput
      | SlotScalarWhereWithAggregatesInput[];
    OR?: SlotScalarWhereWithAggregatesInput[];
    NOT?:
      | SlotScalarWhereWithAggregatesInput
      | SlotScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Slot"> | string;
    courtId?: StringWithAggregatesFilter<"Slot"> | string;
    startTime?: StringWithAggregatesFilter<"Slot"> | string;
    endTime?: StringWithAggregatesFilter<"Slot"> | string;
    price?: FloatNullableWithAggregatesFilter<"Slot"> | number | null;
    isAvailable?: BoolWithAggregatesFilter<"Slot"> | boolean;
  };

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[];
    OR?: BookingWhereInput[];
    NOT?: BookingWhereInput | BookingWhereInput[];
    id?: StringFilter<"Booking"> | string;
    courtId?: StringFilter<"Booking"> | string;
    userId?: StringFilter<"Booking"> | string;
    bookingDate?: DateTimeFilter<"Booking"> | Date | string;
    startTime?: StringFilter<"Booking"> | string;
    endTime?: StringFilter<"Booking"> | string;
    totalAmount?: FloatFilter<"Booking"> | number;
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus;
    createdAt?: DateTimeFilter<"Booking"> | Date | string;
    updatedAt?: DateTimeFilter<"Booking"> | Date | string;
    court?: XOR<CourtRelationFilter, CourtWhereInput>;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    userId?: SortOrder;
    bookingDate?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    totalAmount?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    court?: CourtOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type BookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BookingWhereInput | BookingWhereInput[];
      OR?: BookingWhereInput[];
      NOT?: BookingWhereInput | BookingWhereInput[];
      courtId?: StringFilter<"Booking"> | string;
      userId?: StringFilter<"Booking"> | string;
      bookingDate?: DateTimeFilter<"Booking"> | Date | string;
      startTime?: StringFilter<"Booking"> | string;
      endTime?: StringFilter<"Booking"> | string;
      totalAmount?: FloatFilter<"Booking"> | number;
      status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus;
      createdAt?: DateTimeFilter<"Booking"> | Date | string;
      updatedAt?: DateTimeFilter<"Booking"> | Date | string;
      court?: XOR<CourtRelationFilter, CourtWhereInput>;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    userId?: SortOrder;
    bookingDate?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    totalAmount?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: BookingCountOrderByAggregateInput;
    _avg?: BookingAvgOrderByAggregateInput;
    _max?: BookingMaxOrderByAggregateInput;
    _min?: BookingMinOrderByAggregateInput;
    _sum?: BookingSumOrderByAggregateInput;
  };

  export type BookingScalarWhereWithAggregatesInput = {
    AND?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    OR?: BookingScalarWhereWithAggregatesInput[];
    NOT?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Booking"> | string;
    courtId?: StringWithAggregatesFilter<"Booking"> | string;
    userId?: StringWithAggregatesFilter<"Booking"> | string;
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string;
    startTime?: StringWithAggregatesFilter<"Booking"> | string;
    endTime?: StringWithAggregatesFilter<"Booking"> | string;
    totalAmount?: FloatWithAggregatesFilter<"Booking"> | number;
    status?:
      | EnumBookingStatusWithAggregatesFilter<"Booking">
      | $Enums.BookingStatus;
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string;
  };

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[];
    OR?: ReviewWhereInput[];
    NOT?: ReviewWhereInput | ReviewWhereInput[];
    id?: StringFilter<"Review"> | string;
    rating?: IntFilter<"Review"> | number;
    comment?: StringNullableFilter<"Review"> | string | null;
    userId?: StringFilter<"Review"> | string;
    courtId?: StringFilter<"Review"> | string;
    createdAt?: DateTimeFilter<"Review"> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    court?: XOR<CourtRelationFilter, CourtWhereInput>;
  };

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    userId?: SortOrder;
    courtId?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    court?: CourtOrderByWithRelationInput;
  };

  export type ReviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ReviewWhereInput | ReviewWhereInput[];
      OR?: ReviewWhereInput[];
      NOT?: ReviewWhereInput | ReviewWhereInput[];
      rating?: IntFilter<"Review"> | number;
      comment?: StringNullableFilter<"Review"> | string | null;
      userId?: StringFilter<"Review"> | string;
      courtId?: StringFilter<"Review"> | string;
      createdAt?: DateTimeFilter<"Review"> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      court?: XOR<CourtRelationFilter, CourtWhereInput>;
    },
    "id"
  >;

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    userId?: SortOrder;
    courtId?: SortOrder;
    createdAt?: SortOrder;
    _count?: ReviewCountOrderByAggregateInput;
    _avg?: ReviewAvgOrderByAggregateInput;
    _max?: ReviewMaxOrderByAggregateInput;
    _min?: ReviewMinOrderByAggregateInput;
    _sum?: ReviewSumOrderByAggregateInput;
  };

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    OR?: ReviewScalarWhereWithAggregatesInput[];
    NOT?:
      | ReviewScalarWhereWithAggregatesInput
      | ReviewScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Review"> | string;
    rating?: IntWithAggregatesFilter<"Review"> | number;
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null;
    userId?: StringWithAggregatesFilter<"Review"> | string;
    courtId?: StringWithAggregatesFilter<"Review"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingCreateNestedManyWithoutUserInput;
    ownerProfile?: OwnerCreateNestedOneWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput;
    ownerProfile?: OwnerUncheckedCreateNestedOneWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUpdateManyWithoutUserNestedInput;
    ownerProfile?: OwnerUpdateOneWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput;
    ownerProfile?: OwnerUncheckedUpdateOneWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OwnerCreateInput = {
    id?: string;
    user: UserCreateNestedOneWithoutOwnerProfileInput;
    courts?: CourtCreateNestedManyWithoutOwnerInput;
  };

  export type OwnerUncheckedCreateInput = {
    id?: string;
    userId: string;
    courts?: CourtUncheckedCreateNestedManyWithoutOwnerInput;
  };

  export type OwnerUpdateInput = {
    user?: UserUpdateOneRequiredWithoutOwnerProfileNestedInput;
    courts?: CourtUpdateManyWithoutOwnerNestedInput;
  };

  export type OwnerUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    courts?: CourtUncheckedUpdateManyWithoutOwnerNestedInput;
  };

  export type OwnerCreateManyInput = {
    id?: string;
    userId: string;
  };

  export type OwnerUpdateManyMutationInput = {};

  export type OwnerUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type CourtCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: OwnerCreateNestedOneWithoutCourtsInput;
    slots?: SlotCreateNestedManyWithoutCourtInput;
    bookings?: BookingCreateNestedManyWithoutCourtInput;
    reviews?: ReviewCreateNestedManyWithoutCourtInput;
  };

  export type CourtUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    slots?: SlotUncheckedCreateNestedManyWithoutCourtInput;
    bookings?: BookingUncheckedCreateNestedManyWithoutCourtInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutCourtInput;
  };

  export type CourtUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: OwnerUpdateOneRequiredWithoutCourtsNestedInput;
    slots?: SlotUpdateManyWithoutCourtNestedInput;
    bookings?: BookingUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUpdateManyWithoutCourtNestedInput;
  };

  export type CourtUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    slots?: SlotUncheckedUpdateManyWithoutCourtNestedInput;
    bookings?: BookingUncheckedUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutCourtNestedInput;
  };

  export type CourtCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourtUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourtUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SlotCreateInput = {
    id?: string;
    startTime: string;
    endTime: string;
    price?: number | null;
    isAvailable?: boolean;
    court: CourtCreateNestedOneWithoutSlotsInput;
  };

  export type SlotUncheckedCreateInput = {
    id?: string;
    courtId: string;
    startTime: string;
    endTime: string;
    price?: number | null;
    isAvailable?: boolean;
  };

  export type SlotUpdateInput = {
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    court?: CourtUpdateOneRequiredWithoutSlotsNestedInput;
  };

  export type SlotUncheckedUpdateInput = {
    courtId?: StringFieldUpdateOperationsInput | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SlotCreateManyInput = {
    id?: string;
    courtId: string;
    startTime: string;
    endTime: string;
    price?: number | null;
    isAvailable?: boolean;
  };

  export type SlotUpdateManyMutationInput = {
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SlotUncheckedUpdateManyInput = {
    courtId?: StringFieldUpdateOperationsInput | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BookingCreateInput = {
    id?: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    court: CourtCreateNestedOneWithoutBookingsInput;
    user: UserCreateNestedOneWithoutBookingsInput;
  };

  export type BookingUncheckedCreateInput = {
    id?: string;
    courtId: string;
    userId: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BookingUpdateInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    court?: CourtUpdateOneRequiredWithoutBookingsNestedInput;
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput;
  };

  export type BookingUncheckedUpdateInput = {
    courtId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingCreateManyInput = {
    id?: string;
    courtId: string;
    userId: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BookingUpdateManyMutationInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingUncheckedUpdateManyInput = {
    courtId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutReviewsInput;
    court: CourtCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    userId: string;
    courtId: string;
    createdAt?: Date | string;
  };

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
    court?: CourtUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    courtId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewCreateManyInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    userId: string;
    courtId: string;
    createdAt?: Date | string;
  };

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    courtId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type BookingListRelationFilter = {
    every?: BookingWhereInput;
    some?: BookingWhereInput;
    none?: BookingWhereInput;
  };

  export type OwnerNullableRelationFilter = {
    is?: OwnerWhereInput | null;
    isNot?: OwnerWhereInput | null;
  };

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput;
    some?: ReviewWhereInput;
    none?: ReviewWhereInput;
  };

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    phoneNumber?: SortOrder;
    avatarUrl?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type CourtListRelationFilter = {
    every?: CourtWhereInput;
    some?: CourtWhereInput;
    none?: CourtWhereInput;
  };

  export type CourtOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type EnumCourtTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourtType | EnumCourtTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCourtTypeFilter<$PrismaModel> | $Enums.CourtType;
  };

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type OwnerRelationFilter = {
    is?: OwnerWhereInput;
    isNot?: OwnerWhereInput;
  };

  export type SlotListRelationFilter = {
    every?: SlotWhereInput;
    some?: SlotWhereInput;
    none?: SlotWhereInput;
  };

  export type SlotOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CourtCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    address?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    facilities?: SortOrder;
    pricePerHour?: SortOrder;
    mainImage?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourtAvgOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    pricePerHour?: SortOrder;
  };

  export type CourtMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    address?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    pricePerHour?: SortOrder;
    mainImage?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourtMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    address?: SortOrder;
    latitude?: SortOrder;
    longitude?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    pricePerHour?: SortOrder;
    mainImage?: SortOrder;
    ownerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CourtSumOrderByAggregateInput = {
    latitude?: SortOrder;
    longitude?: SortOrder;
    pricePerHour?: SortOrder;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type EnumCourtTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourtType | EnumCourtTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCourtTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CourtType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCourtTypeFilter<$PrismaModel>;
    _max?: NestedEnumCourtTypeFilter<$PrismaModel>;
  };

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumStatusFilter<$PrismaModel>;
    _max?: NestedEnumStatusFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type CourtRelationFilter = {
    is?: CourtWhereInput;
    isNot?: CourtWhereInput;
  };

  export type SlotCourtIdStartTimeEndTimeCompoundUniqueInput = {
    courtId: string;
    startTime: string;
    endTime: string;
  };

  export type SlotCountOrderByAggregateInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    price?: SortOrder;
    isAvailable?: SortOrder;
  };

  export type SlotAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type SlotMaxOrderByAggregateInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    price?: SortOrder;
    isAvailable?: SortOrder;
  };

  export type SlotMinOrderByAggregateInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    price?: SortOrder;
    isAvailable?: SortOrder;
  };

  export type SlotSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus;
  };

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    userId?: SortOrder;
    bookingDate?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    totalAmount?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BookingAvgOrderByAggregateInput = {
    totalAmount?: SortOrder;
  };

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    userId?: SortOrder;
    bookingDate?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    totalAmount?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder;
    courtId?: SortOrder;
    userId?: SortOrder;
    bookingDate?: SortOrder;
    startTime?: SortOrder;
    endTime?: SortOrder;
    totalAmount?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BookingSumOrderByAggregateInput = {
    totalAmount?: SortOrder;
  };

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.BookingStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>;
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    userId?: SortOrder;
    courtId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    userId?: SortOrder;
    courtId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    userId?: SortOrder;
    courtId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type OwnerCreateNestedOneWithoutUserInput = {
    create?: XOR<
      OwnerCreateWithoutUserInput,
      OwnerUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: OwnerCreateOrConnectWithoutUserInput;
    connect?: OwnerWhereUniqueInput;
  };

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type OwnerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      OwnerCreateWithoutUserInput,
      OwnerUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: OwnerCreateOrConnectWithoutUserInput;
    connect?: OwnerWhereUniqueInput;
  };

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutUserInput
      | BookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutUserInput
      | BookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutUserInput
      | BookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type OwnerUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      OwnerCreateWithoutUserInput,
      OwnerUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: OwnerCreateOrConnectWithoutUserInput;
    upsert?: OwnerUpsertWithoutUserInput;
    disconnect?: OwnerWhereInput | boolean;
    delete?: OwnerWhereInput | boolean;
    connect?: OwnerWhereUniqueInput;
    update?: XOR<
      XOR<
        OwnerUpdateToOneWithWhereWithoutUserInput,
        OwnerUpdateWithoutUserInput
      >,
      OwnerUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutUserInput
      | ReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutUserInput
      | ReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutUserInput
      | ReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutUserInput
      | BookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutUserInput
      | BookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutUserInput
      | BookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type OwnerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      OwnerCreateWithoutUserInput,
      OwnerUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: OwnerCreateOrConnectWithoutUserInput;
    upsert?: OwnerUpsertWithoutUserInput;
    disconnect?: OwnerWhereInput | boolean;
    delete?: OwnerWhereInput | boolean;
    connect?: OwnerWhereUniqueInput;
    update?: XOR<
      XOR<
        OwnerUpdateToOneWithWhereWithoutUserInput,
        OwnerUpdateWithoutUserInput
      >,
      OwnerUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
      | ReviewCreateWithoutUserInput[]
      | ReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutUserInput
      | ReviewCreateOrConnectWithoutUserInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutUserInput
      | ReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ReviewCreateManyUserInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutUserInput
      | ReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutUserInput
      | ReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutOwnerProfileInput = {
    create?: XOR<
      UserCreateWithoutOwnerProfileInput,
      UserUncheckedCreateWithoutOwnerProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOwnerProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type CourtCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<CourtCreateWithoutOwnerInput, CourtUncheckedCreateWithoutOwnerInput>
      | CourtCreateWithoutOwnerInput[]
      | CourtUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | CourtCreateOrConnectWithoutOwnerInput
      | CourtCreateOrConnectWithoutOwnerInput[];
    createMany?: CourtCreateManyOwnerInputEnvelope;
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
  };

  export type CourtUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<CourtCreateWithoutOwnerInput, CourtUncheckedCreateWithoutOwnerInput>
      | CourtCreateWithoutOwnerInput[]
      | CourtUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | CourtCreateOrConnectWithoutOwnerInput
      | CourtCreateOrConnectWithoutOwnerInput[];
    createMany?: CourtCreateManyOwnerInputEnvelope;
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutOwnerProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutOwnerProfileInput,
      UserUncheckedCreateWithoutOwnerProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOwnerProfileInput;
    upsert?: UserUpsertWithoutOwnerProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutOwnerProfileInput,
        UserUpdateWithoutOwnerProfileInput
      >,
      UserUncheckedUpdateWithoutOwnerProfileInput
    >;
  };

  export type CourtUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<CourtCreateWithoutOwnerInput, CourtUncheckedCreateWithoutOwnerInput>
      | CourtCreateWithoutOwnerInput[]
      | CourtUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | CourtCreateOrConnectWithoutOwnerInput
      | CourtCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | CourtUpsertWithWhereUniqueWithoutOwnerInput
      | CourtUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: CourtCreateManyOwnerInputEnvelope;
    set?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    disconnect?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    delete?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    update?:
      | CourtUpdateWithWhereUniqueWithoutOwnerInput
      | CourtUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | CourtUpdateManyWithWhereWithoutOwnerInput
      | CourtUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: CourtScalarWhereInput | CourtScalarWhereInput[];
  };

  export type CourtUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<CourtCreateWithoutOwnerInput, CourtUncheckedCreateWithoutOwnerInput>
      | CourtCreateWithoutOwnerInput[]
      | CourtUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?:
      | CourtCreateOrConnectWithoutOwnerInput
      | CourtCreateOrConnectWithoutOwnerInput[];
    upsert?:
      | CourtUpsertWithWhereUniqueWithoutOwnerInput
      | CourtUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: CourtCreateManyOwnerInputEnvelope;
    set?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    disconnect?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    delete?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    connect?: CourtWhereUniqueInput | CourtWhereUniqueInput[];
    update?:
      | CourtUpdateWithWhereUniqueWithoutOwnerInput
      | CourtUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?:
      | CourtUpdateManyWithWhereWithoutOwnerInput
      | CourtUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: CourtScalarWhereInput | CourtScalarWhereInput[];
  };

  export type CourtCreatefacilitiesInput = {
    set: string[];
  };

  export type OwnerCreateNestedOneWithoutCourtsInput = {
    create?: XOR<
      OwnerCreateWithoutCourtsInput,
      OwnerUncheckedCreateWithoutCourtsInput
    >;
    connectOrCreate?: OwnerCreateOrConnectWithoutCourtsInput;
    connect?: OwnerWhereUniqueInput;
  };

  export type SlotCreateNestedManyWithoutCourtInput = {
    create?:
      | XOR<SlotCreateWithoutCourtInput, SlotUncheckedCreateWithoutCourtInput>
      | SlotCreateWithoutCourtInput[]
      | SlotUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | SlotCreateOrConnectWithoutCourtInput
      | SlotCreateOrConnectWithoutCourtInput[];
    createMany?: SlotCreateManyCourtInputEnvelope;
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
  };

  export type BookingCreateNestedManyWithoutCourtInput = {
    create?:
      | XOR<
          BookingCreateWithoutCourtInput,
          BookingUncheckedCreateWithoutCourtInput
        >
      | BookingCreateWithoutCourtInput[]
      | BookingUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCourtInput
      | BookingCreateOrConnectWithoutCourtInput[];
    createMany?: BookingCreateManyCourtInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type ReviewCreateNestedManyWithoutCourtInput = {
    create?:
      | XOR<
          ReviewCreateWithoutCourtInput,
          ReviewUncheckedCreateWithoutCourtInput
        >
      | ReviewCreateWithoutCourtInput[]
      | ReviewUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutCourtInput
      | ReviewCreateOrConnectWithoutCourtInput[];
    createMany?: ReviewCreateManyCourtInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type SlotUncheckedCreateNestedManyWithoutCourtInput = {
    create?:
      | XOR<SlotCreateWithoutCourtInput, SlotUncheckedCreateWithoutCourtInput>
      | SlotCreateWithoutCourtInput[]
      | SlotUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | SlotCreateOrConnectWithoutCourtInput
      | SlotCreateOrConnectWithoutCourtInput[];
    createMany?: SlotCreateManyCourtInputEnvelope;
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
  };

  export type BookingUncheckedCreateNestedManyWithoutCourtInput = {
    create?:
      | XOR<
          BookingCreateWithoutCourtInput,
          BookingUncheckedCreateWithoutCourtInput
        >
      | BookingCreateWithoutCourtInput[]
      | BookingUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCourtInput
      | BookingCreateOrConnectWithoutCourtInput[];
    createMany?: BookingCreateManyCourtInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type ReviewUncheckedCreateNestedManyWithoutCourtInput = {
    create?:
      | XOR<
          ReviewCreateWithoutCourtInput,
          ReviewUncheckedCreateWithoutCourtInput
        >
      | ReviewCreateWithoutCourtInput[]
      | ReviewUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutCourtInput
      | ReviewCreateOrConnectWithoutCourtInput[];
    createMany?: ReviewCreateManyCourtInputEnvelope;
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
  };

  export type EnumCourtTypeFieldUpdateOperationsInput = {
    set?: $Enums.CourtType;
  };

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
  };

  export type CourtUpdatefacilitiesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type OwnerUpdateOneRequiredWithoutCourtsNestedInput = {
    create?: XOR<
      OwnerCreateWithoutCourtsInput,
      OwnerUncheckedCreateWithoutCourtsInput
    >;
    connectOrCreate?: OwnerCreateOrConnectWithoutCourtsInput;
    upsert?: OwnerUpsertWithoutCourtsInput;
    connect?: OwnerWhereUniqueInput;
    update?: XOR<
      XOR<
        OwnerUpdateToOneWithWhereWithoutCourtsInput,
        OwnerUpdateWithoutCourtsInput
      >,
      OwnerUncheckedUpdateWithoutCourtsInput
    >;
  };

  export type SlotUpdateManyWithoutCourtNestedInput = {
    create?:
      | XOR<SlotCreateWithoutCourtInput, SlotUncheckedCreateWithoutCourtInput>
      | SlotCreateWithoutCourtInput[]
      | SlotUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | SlotCreateOrConnectWithoutCourtInput
      | SlotCreateOrConnectWithoutCourtInput[];
    upsert?:
      | SlotUpsertWithWhereUniqueWithoutCourtInput
      | SlotUpsertWithWhereUniqueWithoutCourtInput[];
    createMany?: SlotCreateManyCourtInputEnvelope;
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    update?:
      | SlotUpdateWithWhereUniqueWithoutCourtInput
      | SlotUpdateWithWhereUniqueWithoutCourtInput[];
    updateMany?:
      | SlotUpdateManyWithWhereWithoutCourtInput
      | SlotUpdateManyWithWhereWithoutCourtInput[];
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[];
  };

  export type BookingUpdateManyWithoutCourtNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutCourtInput,
          BookingUncheckedCreateWithoutCourtInput
        >
      | BookingCreateWithoutCourtInput[]
      | BookingUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCourtInput
      | BookingCreateOrConnectWithoutCourtInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutCourtInput
      | BookingUpsertWithWhereUniqueWithoutCourtInput[];
    createMany?: BookingCreateManyCourtInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutCourtInput
      | BookingUpdateWithWhereUniqueWithoutCourtInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutCourtInput
      | BookingUpdateManyWithWhereWithoutCourtInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type ReviewUpdateManyWithoutCourtNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutCourtInput,
          ReviewUncheckedCreateWithoutCourtInput
        >
      | ReviewCreateWithoutCourtInput[]
      | ReviewUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutCourtInput
      | ReviewCreateOrConnectWithoutCourtInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutCourtInput
      | ReviewUpsertWithWhereUniqueWithoutCourtInput[];
    createMany?: ReviewCreateManyCourtInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutCourtInput
      | ReviewUpdateWithWhereUniqueWithoutCourtInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutCourtInput
      | ReviewUpdateManyWithWhereWithoutCourtInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type SlotUncheckedUpdateManyWithoutCourtNestedInput = {
    create?:
      | XOR<SlotCreateWithoutCourtInput, SlotUncheckedCreateWithoutCourtInput>
      | SlotCreateWithoutCourtInput[]
      | SlotUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | SlotCreateOrConnectWithoutCourtInput
      | SlotCreateOrConnectWithoutCourtInput[];
    upsert?:
      | SlotUpsertWithWhereUniqueWithoutCourtInput
      | SlotUpsertWithWhereUniqueWithoutCourtInput[];
    createMany?: SlotCreateManyCourtInputEnvelope;
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[];
    update?:
      | SlotUpdateWithWhereUniqueWithoutCourtInput
      | SlotUpdateWithWhereUniqueWithoutCourtInput[];
    updateMany?:
      | SlotUpdateManyWithWhereWithoutCourtInput
      | SlotUpdateManyWithWhereWithoutCourtInput[];
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[];
  };

  export type BookingUncheckedUpdateManyWithoutCourtNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutCourtInput,
          BookingUncheckedCreateWithoutCourtInput
        >
      | BookingCreateWithoutCourtInput[]
      | BookingUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutCourtInput
      | BookingCreateOrConnectWithoutCourtInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutCourtInput
      | BookingUpsertWithWhereUniqueWithoutCourtInput[];
    createMany?: BookingCreateManyCourtInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutCourtInput
      | BookingUpdateWithWhereUniqueWithoutCourtInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutCourtInput
      | BookingUpdateManyWithWhereWithoutCourtInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type ReviewUncheckedUpdateManyWithoutCourtNestedInput = {
    create?:
      | XOR<
          ReviewCreateWithoutCourtInput,
          ReviewUncheckedCreateWithoutCourtInput
        >
      | ReviewCreateWithoutCourtInput[]
      | ReviewUncheckedCreateWithoutCourtInput[];
    connectOrCreate?:
      | ReviewCreateOrConnectWithoutCourtInput
      | ReviewCreateOrConnectWithoutCourtInput[];
    upsert?:
      | ReviewUpsertWithWhereUniqueWithoutCourtInput
      | ReviewUpsertWithWhereUniqueWithoutCourtInput[];
    createMany?: ReviewCreateManyCourtInputEnvelope;
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[];
    update?:
      | ReviewUpdateWithWhereUniqueWithoutCourtInput
      | ReviewUpdateWithWhereUniqueWithoutCourtInput[];
    updateMany?:
      | ReviewUpdateManyWithWhereWithoutCourtInput
      | ReviewUpdateManyWithWhereWithoutCourtInput[];
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
  };

  export type CourtCreateNestedOneWithoutSlotsInput = {
    create?: XOR<
      CourtCreateWithoutSlotsInput,
      CourtUncheckedCreateWithoutSlotsInput
    >;
    connectOrCreate?: CourtCreateOrConnectWithoutSlotsInput;
    connect?: CourtWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type CourtUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<
      CourtCreateWithoutSlotsInput,
      CourtUncheckedCreateWithoutSlotsInput
    >;
    connectOrCreate?: CourtCreateOrConnectWithoutSlotsInput;
    upsert?: CourtUpsertWithoutSlotsInput;
    connect?: CourtWhereUniqueInput;
    update?: XOR<
      XOR<
        CourtUpdateToOneWithWhereWithoutSlotsInput,
        CourtUpdateWithoutSlotsInput
      >,
      CourtUncheckedUpdateWithoutSlotsInput
    >;
  };

  export type CourtCreateNestedOneWithoutBookingsInput = {
    create?: XOR<
      CourtCreateWithoutBookingsInput,
      CourtUncheckedCreateWithoutBookingsInput
    >;
    connectOrCreate?: CourtCreateOrConnectWithoutBookingsInput;
    connect?: CourtWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<
      UserCreateWithoutBookingsInput,
      UserUncheckedCreateWithoutBookingsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus;
  };

  export type CourtUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<
      CourtCreateWithoutBookingsInput,
      CourtUncheckedCreateWithoutBookingsInput
    >;
    connectOrCreate?: CourtCreateOrConnectWithoutBookingsInput;
    upsert?: CourtUpsertWithoutBookingsInput;
    connect?: CourtWhereUniqueInput;
    update?: XOR<
      XOR<
        CourtUpdateToOneWithWhereWithoutBookingsInput,
        CourtUpdateWithoutBookingsInput
      >,
      CourtUncheckedUpdateWithoutBookingsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<
      UserCreateWithoutBookingsInput,
      UserUncheckedCreateWithoutBookingsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput;
    upsert?: UserUpsertWithoutBookingsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBookingsInput,
        UserUpdateWithoutBookingsInput
      >,
      UserUncheckedUpdateWithoutBookingsInput
    >;
  };

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;
    connect?: UserWhereUniqueInput;
  };

  export type CourtCreateNestedOneWithoutReviewsInput = {
    create?: XOR<
      CourtCreateWithoutReviewsInput,
      CourtUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: CourtCreateOrConnectWithoutReviewsInput;
    connect?: CourtWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput;
    upsert?: UserUpsertWithoutReviewsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutReviewsInput,
        UserUpdateWithoutReviewsInput
      >,
      UserUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type CourtUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<
      CourtCreateWithoutReviewsInput,
      CourtUncheckedCreateWithoutReviewsInput
    >;
    connectOrCreate?: CourtCreateOrConnectWithoutReviewsInput;
    upsert?: CourtUpsertWithoutReviewsInput;
    connect?: CourtWhereUniqueInput;
    update?: XOR<
      XOR<
        CourtUpdateToOneWithWhereWithoutReviewsInput,
        CourtUpdateWithoutReviewsInput
      >,
      CourtUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedEnumCourtTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CourtType | EnumCourtTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCourtTypeFilter<$PrismaModel> | $Enums.CourtType;
  };

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type NestedEnumCourtTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourtType | EnumCourtTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CourtType[] | ListEnumCourtTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCourtTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CourtType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCourtTypeFilter<$PrismaModel>;
    _max?: NestedEnumCourtTypeFilter<$PrismaModel>;
  };

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumStatusFilter<$PrismaModel>;
    _max?: NestedEnumStatusFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus;
  };

  export type NestedEnumBookingStatusWithAggregatesFilter<
    $PrismaModel = never
  > = {
    equals?:
      | $Enums.BookingStatus
      | EnumBookingStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.BookingStatus[]
      | ListEnumBookingStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.BookingStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>;
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BookingCreateWithoutUserInput = {
    id?: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    court: CourtCreateNestedOneWithoutBookingsInput;
  };

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string;
    courtId: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutUserInput,
      BookingUncheckedCreateWithoutUserInput
    >;
  };

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[];
  };

  export type OwnerCreateWithoutUserInput = {
    id?: string;
    courts?: CourtCreateNestedManyWithoutOwnerInput;
  };

  export type OwnerUncheckedCreateWithoutUserInput = {
    id?: string;
    courts?: CourtUncheckedCreateNestedManyWithoutOwnerInput;
  };

  export type OwnerCreateOrConnectWithoutUserInput = {
    where: OwnerWhereUniqueInput;
    create: XOR<
      OwnerCreateWithoutUserInput,
      OwnerUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewCreateWithoutUserInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    court: CourtCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    courtId: string;
    createdAt?: Date | string;
  };

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutUserInput,
      ReviewUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[];
  };

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput;
    update: XOR<
      BookingUpdateWithoutUserInput,
      BookingUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      BookingCreateWithoutUserInput,
      BookingUncheckedCreateWithoutUserInput
    >;
  };

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput;
    data: XOR<
      BookingUpdateWithoutUserInput,
      BookingUncheckedUpdateWithoutUserInput
    >;
  };

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput;
    data: XOR<
      BookingUpdateManyMutationInput,
      BookingUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[];
    OR?: BookingScalarWhereInput[];
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[];
    id?: StringFilter<"Booking"> | string;
    courtId?: StringFilter<"Booking"> | string;
    userId?: StringFilter<"Booking"> | string;
    bookingDate?: DateTimeFilter<"Booking"> | Date | string;
    startTime?: StringFilter<"Booking"> | string;
    endTime?: StringFilter<"Booking"> | string;
    totalAmount?: FloatFilter<"Booking"> | number;
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus;
    createdAt?: DateTimeFilter<"Booking"> | Date | string;
    updatedAt?: DateTimeFilter<"Booking"> | Date | string;
  };

  export type OwnerUpsertWithoutUserInput = {
    update: XOR<
      OwnerUpdateWithoutUserInput,
      OwnerUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      OwnerCreateWithoutUserInput,
      OwnerUncheckedCreateWithoutUserInput
    >;
    where?: OwnerWhereInput;
  };

  export type OwnerUpdateToOneWithWhereWithoutUserInput = {
    where?: OwnerWhereInput;
    data: XOR<
      OwnerUpdateWithoutUserInput,
      OwnerUncheckedUpdateWithoutUserInput
    >;
  };

  export type OwnerUpdateWithoutUserInput = {
    courts?: CourtUpdateManyWithoutOwnerNestedInput;
  };

  export type OwnerUncheckedUpdateWithoutUserInput = {
    courts?: CourtUncheckedUpdateManyWithoutOwnerNestedInput;
  };

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutUserInput,
      ReviewUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ReviewCreateWithoutUserInput,
      ReviewUncheckedCreateWithoutUserInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutUserInput,
      ReviewUncheckedUpdateWithoutUserInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    OR?: ReviewScalarWhereInput[];
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[];
    id?: StringFilter<"Review"> | string;
    rating?: IntFilter<"Review"> | number;
    comment?: StringNullableFilter<"Review"> | string | null;
    userId?: StringFilter<"Review"> | string;
    courtId?: StringFilter<"Review"> | string;
    createdAt?: DateTimeFilter<"Review"> | Date | string;
  };

  export type UserCreateWithoutOwnerProfileInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingCreateNestedManyWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutOwnerProfileInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutOwnerProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutOwnerProfileInput,
      UserUncheckedCreateWithoutOwnerProfileInput
    >;
  };

  export type CourtCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    slots?: SlotCreateNestedManyWithoutCourtInput;
    bookings?: BookingCreateNestedManyWithoutCourtInput;
    reviews?: ReviewCreateNestedManyWithoutCourtInput;
  };

  export type CourtUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    slots?: SlotUncheckedCreateNestedManyWithoutCourtInput;
    bookings?: BookingUncheckedCreateNestedManyWithoutCourtInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutCourtInput;
  };

  export type CourtCreateOrConnectWithoutOwnerInput = {
    where: CourtWhereUniqueInput;
    create: XOR<
      CourtCreateWithoutOwnerInput,
      CourtUncheckedCreateWithoutOwnerInput
    >;
  };

  export type CourtCreateManyOwnerInputEnvelope = {
    data: CourtCreateManyOwnerInput | CourtCreateManyOwnerInput[];
  };

  export type UserUpsertWithoutOwnerProfileInput = {
    update: XOR<
      UserUpdateWithoutOwnerProfileInput,
      UserUncheckedUpdateWithoutOwnerProfileInput
    >;
    create: XOR<
      UserCreateWithoutOwnerProfileInput,
      UserUncheckedCreateWithoutOwnerProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutOwnerProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutOwnerProfileInput,
      UserUncheckedUpdateWithoutOwnerProfileInput
    >;
  };

  export type UserUpdateWithoutOwnerProfileInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutOwnerProfileInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type CourtUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CourtWhereUniqueInput;
    update: XOR<
      CourtUpdateWithoutOwnerInput,
      CourtUncheckedUpdateWithoutOwnerInput
    >;
    create: XOR<
      CourtCreateWithoutOwnerInput,
      CourtUncheckedCreateWithoutOwnerInput
    >;
  };

  export type CourtUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CourtWhereUniqueInput;
    data: XOR<
      CourtUpdateWithoutOwnerInput,
      CourtUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type CourtUpdateManyWithWhereWithoutOwnerInput = {
    where: CourtScalarWhereInput;
    data: XOR<
      CourtUpdateManyMutationInput,
      CourtUncheckedUpdateManyWithoutOwnerInput
    >;
  };

  export type CourtScalarWhereInput = {
    AND?: CourtScalarWhereInput | CourtScalarWhereInput[];
    OR?: CourtScalarWhereInput[];
    NOT?: CourtScalarWhereInput | CourtScalarWhereInput[];
    id?: StringFilter<"Court"> | string;
    name?: StringFilter<"Court"> | string;
    description?: StringNullableFilter<"Court"> | string | null;
    location?: StringFilter<"Court"> | string;
    address?: StringNullableFilter<"Court"> | string | null;
    latitude?: FloatNullableFilter<"Court"> | number | null;
    longitude?: FloatNullableFilter<"Court"> | number | null;
    type?: EnumCourtTypeFilter<"Court"> | $Enums.CourtType;
    status?: EnumStatusFilter<"Court"> | $Enums.Status;
    facilities?: StringNullableListFilter<"Court">;
    pricePerHour?: FloatFilter<"Court"> | number;
    mainImage?: StringNullableFilter<"Court"> | string | null;
    ownerId?: StringFilter<"Court"> | string;
    createdAt?: DateTimeFilter<"Court"> | Date | string;
    updatedAt?: DateTimeFilter<"Court"> | Date | string;
  };

  export type OwnerCreateWithoutCourtsInput = {
    id?: string;
    user: UserCreateNestedOneWithoutOwnerProfileInput;
  };

  export type OwnerUncheckedCreateWithoutCourtsInput = {
    id?: string;
    userId: string;
  };

  export type OwnerCreateOrConnectWithoutCourtsInput = {
    where: OwnerWhereUniqueInput;
    create: XOR<
      OwnerCreateWithoutCourtsInput,
      OwnerUncheckedCreateWithoutCourtsInput
    >;
  };

  export type SlotCreateWithoutCourtInput = {
    id?: string;
    startTime: string;
    endTime: string;
    price?: number | null;
    isAvailable?: boolean;
  };

  export type SlotUncheckedCreateWithoutCourtInput = {
    id?: string;
    startTime: string;
    endTime: string;
    price?: number | null;
    isAvailable?: boolean;
  };

  export type SlotCreateOrConnectWithoutCourtInput = {
    where: SlotWhereUniqueInput;
    create: XOR<
      SlotCreateWithoutCourtInput,
      SlotUncheckedCreateWithoutCourtInput
    >;
  };

  export type SlotCreateManyCourtInputEnvelope = {
    data: SlotCreateManyCourtInput | SlotCreateManyCourtInput[];
  };

  export type BookingCreateWithoutCourtInput = {
    id?: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutBookingsInput;
  };

  export type BookingUncheckedCreateWithoutCourtInput = {
    id?: string;
    userId: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BookingCreateOrConnectWithoutCourtInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutCourtInput,
      BookingUncheckedCreateWithoutCourtInput
    >;
  };

  export type BookingCreateManyCourtInputEnvelope = {
    data: BookingCreateManyCourtInput | BookingCreateManyCourtInput[];
  };

  export type ReviewCreateWithoutCourtInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutReviewsInput;
  };

  export type ReviewUncheckedCreateWithoutCourtInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    userId: string;
    createdAt?: Date | string;
  };

  export type ReviewCreateOrConnectWithoutCourtInput = {
    where: ReviewWhereUniqueInput;
    create: XOR<
      ReviewCreateWithoutCourtInput,
      ReviewUncheckedCreateWithoutCourtInput
    >;
  };

  export type ReviewCreateManyCourtInputEnvelope = {
    data: ReviewCreateManyCourtInput | ReviewCreateManyCourtInput[];
  };

  export type OwnerUpsertWithoutCourtsInput = {
    update: XOR<
      OwnerUpdateWithoutCourtsInput,
      OwnerUncheckedUpdateWithoutCourtsInput
    >;
    create: XOR<
      OwnerCreateWithoutCourtsInput,
      OwnerUncheckedCreateWithoutCourtsInput
    >;
    where?: OwnerWhereInput;
  };

  export type OwnerUpdateToOneWithWhereWithoutCourtsInput = {
    where?: OwnerWhereInput;
    data: XOR<
      OwnerUpdateWithoutCourtsInput,
      OwnerUncheckedUpdateWithoutCourtsInput
    >;
  };

  export type OwnerUpdateWithoutCourtsInput = {
    user?: UserUpdateOneRequiredWithoutOwnerProfileNestedInput;
  };

  export type OwnerUncheckedUpdateWithoutCourtsInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type SlotUpsertWithWhereUniqueWithoutCourtInput = {
    where: SlotWhereUniqueInput;
    update: XOR<
      SlotUpdateWithoutCourtInput,
      SlotUncheckedUpdateWithoutCourtInput
    >;
    create: XOR<
      SlotCreateWithoutCourtInput,
      SlotUncheckedCreateWithoutCourtInput
    >;
  };

  export type SlotUpdateWithWhereUniqueWithoutCourtInput = {
    where: SlotWhereUniqueInput;
    data: XOR<
      SlotUpdateWithoutCourtInput,
      SlotUncheckedUpdateWithoutCourtInput
    >;
  };

  export type SlotUpdateManyWithWhereWithoutCourtInput = {
    where: SlotScalarWhereInput;
    data: XOR<
      SlotUpdateManyMutationInput,
      SlotUncheckedUpdateManyWithoutCourtInput
    >;
  };

  export type SlotScalarWhereInput = {
    AND?: SlotScalarWhereInput | SlotScalarWhereInput[];
    OR?: SlotScalarWhereInput[];
    NOT?: SlotScalarWhereInput | SlotScalarWhereInput[];
    id?: StringFilter<"Slot"> | string;
    courtId?: StringFilter<"Slot"> | string;
    startTime?: StringFilter<"Slot"> | string;
    endTime?: StringFilter<"Slot"> | string;
    price?: FloatNullableFilter<"Slot"> | number | null;
    isAvailable?: BoolFilter<"Slot"> | boolean;
  };

  export type BookingUpsertWithWhereUniqueWithoutCourtInput = {
    where: BookingWhereUniqueInput;
    update: XOR<
      BookingUpdateWithoutCourtInput,
      BookingUncheckedUpdateWithoutCourtInput
    >;
    create: XOR<
      BookingCreateWithoutCourtInput,
      BookingUncheckedCreateWithoutCourtInput
    >;
  };

  export type BookingUpdateWithWhereUniqueWithoutCourtInput = {
    where: BookingWhereUniqueInput;
    data: XOR<
      BookingUpdateWithoutCourtInput,
      BookingUncheckedUpdateWithoutCourtInput
    >;
  };

  export type BookingUpdateManyWithWhereWithoutCourtInput = {
    where: BookingScalarWhereInput;
    data: XOR<
      BookingUpdateManyMutationInput,
      BookingUncheckedUpdateManyWithoutCourtInput
    >;
  };

  export type ReviewUpsertWithWhereUniqueWithoutCourtInput = {
    where: ReviewWhereUniqueInput;
    update: XOR<
      ReviewUpdateWithoutCourtInput,
      ReviewUncheckedUpdateWithoutCourtInput
    >;
    create: XOR<
      ReviewCreateWithoutCourtInput,
      ReviewUncheckedCreateWithoutCourtInput
    >;
  };

  export type ReviewUpdateWithWhereUniqueWithoutCourtInput = {
    where: ReviewWhereUniqueInput;
    data: XOR<
      ReviewUpdateWithoutCourtInput,
      ReviewUncheckedUpdateWithoutCourtInput
    >;
  };

  export type ReviewUpdateManyWithWhereWithoutCourtInput = {
    where: ReviewScalarWhereInput;
    data: XOR<
      ReviewUpdateManyMutationInput,
      ReviewUncheckedUpdateManyWithoutCourtInput
    >;
  };

  export type CourtCreateWithoutSlotsInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: OwnerCreateNestedOneWithoutCourtsInput;
    bookings?: BookingCreateNestedManyWithoutCourtInput;
    reviews?: ReviewCreateNestedManyWithoutCourtInput;
  };

  export type CourtUncheckedCreateWithoutSlotsInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingUncheckedCreateNestedManyWithoutCourtInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutCourtInput;
  };

  export type CourtCreateOrConnectWithoutSlotsInput = {
    where: CourtWhereUniqueInput;
    create: XOR<
      CourtCreateWithoutSlotsInput,
      CourtUncheckedCreateWithoutSlotsInput
    >;
  };

  export type CourtUpsertWithoutSlotsInput = {
    update: XOR<
      CourtUpdateWithoutSlotsInput,
      CourtUncheckedUpdateWithoutSlotsInput
    >;
    create: XOR<
      CourtCreateWithoutSlotsInput,
      CourtUncheckedCreateWithoutSlotsInput
    >;
    where?: CourtWhereInput;
  };

  export type CourtUpdateToOneWithWhereWithoutSlotsInput = {
    where?: CourtWhereInput;
    data: XOR<
      CourtUpdateWithoutSlotsInput,
      CourtUncheckedUpdateWithoutSlotsInput
    >;
  };

  export type CourtUpdateWithoutSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: OwnerUpdateOneRequiredWithoutCourtsNestedInput;
    bookings?: BookingUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUpdateManyWithoutCourtNestedInput;
  };

  export type CourtUncheckedUpdateWithoutSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUncheckedUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutCourtNestedInput;
  };

  export type CourtCreateWithoutBookingsInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: OwnerCreateNestedOneWithoutCourtsInput;
    slots?: SlotCreateNestedManyWithoutCourtInput;
    reviews?: ReviewCreateNestedManyWithoutCourtInput;
  };

  export type CourtUncheckedCreateWithoutBookingsInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    slots?: SlotUncheckedCreateNestedManyWithoutCourtInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutCourtInput;
  };

  export type CourtCreateOrConnectWithoutBookingsInput = {
    where: CourtWhereUniqueInput;
    create: XOR<
      CourtCreateWithoutBookingsInput,
      CourtUncheckedCreateWithoutBookingsInput
    >;
  };

  export type UserCreateWithoutBookingsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerProfile?: OwnerCreateNestedOneWithoutUserInput;
    reviews?: ReviewCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ownerProfile?: OwnerUncheckedCreateNestedOneWithoutUserInput;
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBookingsInput,
      UserUncheckedCreateWithoutBookingsInput
    >;
  };

  export type CourtUpsertWithoutBookingsInput = {
    update: XOR<
      CourtUpdateWithoutBookingsInput,
      CourtUncheckedUpdateWithoutBookingsInput
    >;
    create: XOR<
      CourtCreateWithoutBookingsInput,
      CourtUncheckedCreateWithoutBookingsInput
    >;
    where?: CourtWhereInput;
  };

  export type CourtUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CourtWhereInput;
    data: XOR<
      CourtUpdateWithoutBookingsInput,
      CourtUncheckedUpdateWithoutBookingsInput
    >;
  };

  export type CourtUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: OwnerUpdateOneRequiredWithoutCourtsNestedInput;
    slots?: SlotUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUpdateManyWithoutCourtNestedInput;
  };

  export type CourtUncheckedUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    slots?: SlotUncheckedUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutCourtNestedInput;
  };

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<
      UserUpdateWithoutBookingsInput,
      UserUncheckedUpdateWithoutBookingsInput
    >;
    create: XOR<
      UserCreateWithoutBookingsInput,
      UserUncheckedCreateWithoutBookingsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutBookingsInput,
      UserUncheckedUpdateWithoutBookingsInput
    >;
  };

  export type UserUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ownerProfile?: OwnerUpdateOneWithoutUserNestedInput;
    reviews?: ReviewUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ownerProfile?: OwnerUncheckedUpdateOneWithoutUserNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingCreateNestedManyWithoutUserInput;
    ownerProfile?: OwnerCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    name?: string | null;
    password: string;
    phoneNumber?: string | null;
    avatarUrl?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput;
    ownerProfile?: OwnerUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
  };

  export type CourtCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: OwnerCreateNestedOneWithoutCourtsInput;
    slots?: SlotCreateNestedManyWithoutCourtInput;
    bookings?: BookingCreateNestedManyWithoutCourtInput;
  };

  export type CourtUncheckedCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    ownerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    slots?: SlotUncheckedCreateNestedManyWithoutCourtInput;
    bookings?: BookingUncheckedCreateNestedManyWithoutCourtInput;
  };

  export type CourtCreateOrConnectWithoutReviewsInput = {
    where: CourtWhereUniqueInput;
    create: XOR<
      CourtCreateWithoutReviewsInput,
      CourtUncheckedCreateWithoutReviewsInput
    >;
  };

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<
      UserUpdateWithoutReviewsInput,
      UserUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      UserCreateWithoutReviewsInput,
      UserUncheckedCreateWithoutReviewsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutReviewsInput,
      UserUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUpdateManyWithoutUserNestedInput;
    ownerProfile?: OwnerUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput;
    ownerProfile?: OwnerUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type CourtUpsertWithoutReviewsInput = {
    update: XOR<
      CourtUpdateWithoutReviewsInput,
      CourtUncheckedUpdateWithoutReviewsInput
    >;
    create: XOR<
      CourtCreateWithoutReviewsInput,
      CourtUncheckedCreateWithoutReviewsInput
    >;
    where?: CourtWhereInput;
  };

  export type CourtUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CourtWhereInput;
    data: XOR<
      CourtUpdateWithoutReviewsInput,
      CourtUncheckedUpdateWithoutReviewsInput
    >;
  };

  export type CourtUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: OwnerUpdateOneRequiredWithoutCourtsNestedInput;
    slots?: SlotUpdateManyWithoutCourtNestedInput;
    bookings?: BookingUpdateManyWithoutCourtNestedInput;
  };

  export type CourtUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    ownerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    slots?: SlotUncheckedUpdateManyWithoutCourtNestedInput;
    bookings?: BookingUncheckedUpdateManyWithoutCourtNestedInput;
  };

  export type BookingCreateManyUserInput = {
    id?: string;
    courtId: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateManyUserInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    courtId: string;
    createdAt?: Date | string;
  };

  export type BookingUpdateWithoutUserInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    court?: CourtUpdateOneRequiredWithoutBookingsNestedInput;
  };

  export type BookingUncheckedUpdateWithoutUserInput = {
    courtId?: StringFieldUpdateOperationsInput | string;
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    courtId?: StringFieldUpdateOperationsInput | string;
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    court?: CourtUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    courtId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    courtId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CourtCreateManyOwnerInput = {
    id?: string;
    name: string;
    description?: string | null;
    location: string;
    address?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    type?: $Enums.CourtType;
    status?: $Enums.Status;
    facilities?: CourtCreatefacilitiesInput | string[];
    pricePerHour: number;
    mainImage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CourtUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    slots?: SlotUpdateManyWithoutCourtNestedInput;
    bookings?: BookingUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUpdateManyWithoutCourtNestedInput;
  };

  export type CourtUncheckedUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    slots?: SlotUncheckedUpdateManyWithoutCourtNestedInput;
    bookings?: BookingUncheckedUpdateManyWithoutCourtNestedInput;
    reviews?: ReviewUncheckedUpdateManyWithoutCourtNestedInput;
  };

  export type CourtUncheckedUpdateManyWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null;
    type?: EnumCourtTypeFieldUpdateOperationsInput | $Enums.CourtType;
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    facilities?: CourtUpdatefacilitiesInput | string[];
    pricePerHour?: FloatFieldUpdateOperationsInput | number;
    mainImage?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SlotCreateManyCourtInput = {
    id?: string;
    startTime: string;
    endTime: string;
    price?: number | null;
    isAvailable?: boolean;
  };

  export type BookingCreateManyCourtInput = {
    id?: string;
    userId: string;
    bookingDate: Date | string;
    startTime: string;
    endTime: string;
    totalAmount: number;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ReviewCreateManyCourtInput = {
    id?: string;
    rating?: number;
    comment?: string | null;
    userId: string;
    createdAt?: Date | string;
  };

  export type SlotUpdateWithoutCourtInput = {
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SlotUncheckedUpdateWithoutCourtInput = {
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type SlotUncheckedUpdateManyWithoutCourtInput = {
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    price?: NullableFloatFieldUpdateOperationsInput | number | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BookingUpdateWithoutCourtInput = {
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput;
  };

  export type BookingUncheckedUpdateWithoutCourtInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingUncheckedUpdateManyWithoutCourtInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: StringFieldUpdateOperationsInput | string;
    endTime?: StringFieldUpdateOperationsInput | string;
    totalAmount?: FloatFieldUpdateOperationsInput | number;
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUpdateWithoutCourtInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;
  };

  export type ReviewUncheckedUpdateWithoutCourtInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ReviewUncheckedUpdateManyWithoutCourtInput = {
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OwnerCountOutputTypeDefaultArgs instead
   */
  export type OwnerCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = OwnerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CourtCountOutputTypeDefaultArgs instead
   */
  export type CourtCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = CourtCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OwnerDefaultArgs instead
   */
  export type OwnerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = OwnerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CourtDefaultArgs instead
   */
  export type CourtArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = CourtDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SlotDefaultArgs instead
   */
  export type SlotArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = SlotDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use BookingDefaultArgs instead
   */
  export type BookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = BookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ReviewDefaultArgs instead
   */
  export type ReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = ReviewDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
