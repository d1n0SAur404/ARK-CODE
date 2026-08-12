
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model OAuthAccount
 * 
 */
export type OAuthAccount = $Result.DefaultSelection<Prisma.$OAuthAccountPayload>
/**
 * Model GameRecord
 * 
 */
export type GameRecord = $Result.DefaultSelection<Prisma.$GameRecordPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomPlayer
 * 
 */
export type RoomPlayer = $Result.DefaultSelection<Prisma.$RoomPlayerPayload>
/**
 * Model DailyChallenge
 * 
 */
export type DailyChallenge = $Result.DefaultSelection<Prisma.$DailyChallengePayload>
/**
 * Model Operator
 * 
 */
export type Operator = $Result.DefaultSelection<Prisma.$OperatorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const GameMode: {
  DAILY: 'DAILY',
  ENDLESS: 'ENDLESS',
  TIMED: 'TIMED',
  MULTIPLAYER: 'MULTIPLAYER',
  DRAW_GUESS: 'DRAW_GUESS'
};

export type GameMode = (typeof GameMode)[keyof typeof GameMode]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const GameResult: {
  WIN: 'WIN',
  LOSS: 'LOSS',
  GIVE_UP: 'GIVE_UP'
};

export type GameResult = (typeof GameResult)[keyof typeof GameResult]


export const RoomStatus: {
  WAITING: 'WAITING',
  PLAYING: 'PLAYING',
  FINISHED: 'FINISHED'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type GameMode = $Enums.GameMode

export const GameMode: typeof $Enums.GameMode

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type GameResult = $Enums.GameResult

export const GameResult: typeof $Enums.GameResult

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthAccount`: Exposes CRUD operations for the **OAuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthAccounts
    * const oAuthAccounts = await prisma.oAuthAccount.findMany()
    * ```
    */
  get oAuthAccount(): Prisma.OAuthAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameRecord`: Exposes CRUD operations for the **GameRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameRecords
    * const gameRecords = await prisma.gameRecord.findMany()
    * ```
    */
  get gameRecord(): Prisma.GameRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomPlayer`: Exposes CRUD operations for the **RoomPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomPlayers
    * const roomPlayers = await prisma.roomPlayer.findMany()
    * ```
    */
  get roomPlayer(): Prisma.RoomPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyChallenge`: Exposes CRUD operations for the **DailyChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyChallenges
    * const dailyChallenges = await prisma.dailyChallenge.findMany()
    * ```
    */
  get dailyChallenge(): Prisma.DailyChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operator`: Exposes CRUD operations for the **Operator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operators
    * const operators = await prisma.operator.findMany()
    * ```
    */
  get operator(): Prisma.OperatorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    OAuthAccount: 'OAuthAccount',
    GameRecord: 'GameRecord',
    UserAchievement: 'UserAchievement',
    Room: 'Room',
    RoomPlayer: 'RoomPlayer',
    DailyChallenge: 'DailyChallenge',
    Operator: 'Operator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "oAuthAccount" | "gameRecord" | "userAchievement" | "room" | "roomPlayer" | "dailyChallenge" | "operator"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      OAuthAccount: {
        payload: Prisma.$OAuthAccountPayload<ExtArgs>
        fields: Prisma.OAuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          findFirst: {
            args: Prisma.OAuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          findMany: {
            args: Prisma.OAuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          create: {
            args: Prisma.OAuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          createMany: {
            args: Prisma.OAuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          delete: {
            args: Prisma.OAuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          update: {
            args: Prisma.OAuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.OAuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OAuthAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>[]
          }
          upsert: {
            args: Prisma.OAuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccountPayload>
          }
          aggregate: {
            args: Prisma.OAuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthAccount>
          }
          groupBy: {
            args: Prisma.OAuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccountCountAggregateOutputType> | number
          }
        }
      }
      GameRecord: {
        payload: Prisma.$GameRecordPayload<ExtArgs>
        fields: Prisma.GameRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          findFirst: {
            args: Prisma.GameRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          findMany: {
            args: Prisma.GameRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>[]
          }
          create: {
            args: Prisma.GameRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          createMany: {
            args: Prisma.GameRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>[]
          }
          delete: {
            args: Prisma.GameRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          update: {
            args: Prisma.GameRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          deleteMany: {
            args: Prisma.GameRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>[]
          }
          upsert: {
            args: Prisma.GameRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameRecordPayload>
          }
          aggregate: {
            args: Prisma.GameRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameRecord>
          }
          groupBy: {
            args: Prisma.GameRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GameRecordCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomPlayer: {
        payload: Prisma.$RoomPlayerPayload<ExtArgs>
        fields: Prisma.RoomPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>
          }
          findFirst: {
            args: Prisma.RoomPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>
          }
          findMany: {
            args: Prisma.RoomPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>[]
          }
          create: {
            args: Prisma.RoomPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>
          }
          createMany: {
            args: Prisma.RoomPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>[]
          }
          delete: {
            args: Prisma.RoomPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>
          }
          update: {
            args: Prisma.RoomPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>
          }
          deleteMany: {
            args: Prisma.RoomPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>[]
          }
          upsert: {
            args: Prisma.RoomPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPlayerPayload>
          }
          aggregate: {
            args: Prisma.RoomPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomPlayer>
          }
          groupBy: {
            args: Prisma.RoomPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<RoomPlayerCountAggregateOutputType> | number
          }
        }
      }
      DailyChallenge: {
        payload: Prisma.$DailyChallengePayload<ExtArgs>
        fields: Prisma.DailyChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          findFirst: {
            args: Prisma.DailyChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          findMany: {
            args: Prisma.DailyChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>[]
          }
          create: {
            args: Prisma.DailyChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          createMany: {
            args: Prisma.DailyChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>[]
          }
          delete: {
            args: Prisma.DailyChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          update: {
            args: Prisma.DailyChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          deleteMany: {
            args: Prisma.DailyChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>[]
          }
          upsert: {
            args: Prisma.DailyChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyChallengePayload>
          }
          aggregate: {
            args: Prisma.DailyChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyChallenge>
          }
          groupBy: {
            args: Prisma.DailyChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<DailyChallengeCountAggregateOutputType> | number
          }
        }
      }
      Operator: {
        payload: Prisma.$OperatorPayload<ExtArgs>
        fields: Prisma.OperatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findFirst: {
            args: Prisma.OperatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          findMany: {
            args: Prisma.OperatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          create: {
            args: Prisma.OperatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          createMany: {
            args: Prisma.OperatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          delete: {
            args: Prisma.OperatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          update: {
            args: Prisma.OperatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          deleteMany: {
            args: Prisma.OperatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>[]
          }
          upsert: {
            args: Prisma.OperatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatorPayload>
          }
          aggregate: {
            args: Prisma.OperatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperator>
          }
          groupBy: {
            args: Prisma.OperatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatorCountArgs<ExtArgs>
            result: $Utils.Optional<OperatorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    oAuthAccount?: OAuthAccountOmit
    gameRecord?: GameRecordOmit
    userAchievement?: UserAchievementOmit
    room?: RoomOmit
    roomPlayer?: RoomPlayerOmit
    dailyChallenge?: DailyChallengeOmit
    operator?: OperatorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    oauthAccounts: number
    gameRecords: number
    achievements: number
    roomPlayers: number
    hostedRooms: number
    dailyChallenges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs
    gameRecords?: boolean | UserCountOutputTypeCountGameRecordsArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
    roomPlayers?: boolean | UserCountOutputTypeCountRoomPlayersArgs
    hostedRooms?: boolean | UserCountOutputTypeCountHostedRoomsArgs
    dailyChallenges?: boolean | UserCountOutputTypeCountDailyChallengesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPlayerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyChallengeWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    players: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | RoomCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPlayerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    avatar: string | null
    bio: string | null
    gender: $Enums.Gender | null
    points: number | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    avatar: string | null
    bio: string | null
    gender: $Enums.Gender | null
    points: number | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    avatar: number
    bio: number
    gender: number
    points: number
    role: number
    isVerified: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    avatar?: true
    bio?: true
    gender?: true
    points?: true
    role?: true
    isVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    avatar?: true
    bio?: true
    gender?: true
    points?: true
    role?: true
    isVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    avatar?: true
    bio?: true
    gender?: true
    points?: true
    role?: true
    isVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    avatar: string | null
    bio: string | null
    gender: $Enums.Gender
    points: number
    role: $Enums.UserRole
    isVerified: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    avatar?: boolean
    bio?: boolean
    gender?: boolean
    points?: boolean
    role?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    gameRecords?: boolean | User$gameRecordsArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    roomPlayers?: boolean | User$roomPlayersArgs<ExtArgs>
    hostedRooms?: boolean | User$hostedRoomsArgs<ExtArgs>
    dailyChallenges?: boolean | User$dailyChallengesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    avatar?: boolean
    bio?: boolean
    gender?: boolean
    points?: boolean
    role?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    avatar?: boolean
    bio?: boolean
    gender?: boolean
    points?: boolean
    role?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    avatar?: boolean
    bio?: boolean
    gender?: boolean
    points?: boolean
    role?: boolean
    isVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "avatar" | "bio" | "gender" | "points" | "role" | "isVerified" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    gameRecords?: boolean | User$gameRecordsArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    roomPlayers?: boolean | User$roomPlayersArgs<ExtArgs>
    hostedRooms?: boolean | User$hostedRoomsArgs<ExtArgs>
    dailyChallenges?: boolean | User$dailyChallengesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      oauthAccounts: Prisma.$OAuthAccountPayload<ExtArgs>[]
      gameRecords: Prisma.$GameRecordPayload<ExtArgs>[]
      achievements: Prisma.$UserAchievementPayload<ExtArgs>[]
      roomPlayers: Prisma.$RoomPlayerPayload<ExtArgs>[]
      hostedRooms: Prisma.$RoomPayload<ExtArgs>[]
      dailyChallenges: Prisma.$DailyChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      avatar: string | null
      bio: string | null
      gender: $Enums.Gender
      points: number
      role: $Enums.UserRole
      isVerified: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthAccounts<T extends User$oauthAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameRecords<T extends User$gameRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$gameRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomPlayers<T extends User$roomPlayersArgs<ExtArgs> = {}>(args?: Subset<T, User$roomPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hostedRooms<T extends User$hostedRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$hostedRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyChallenges<T extends User$dailyChallengesArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly points: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.oauthAccounts
   */
  export type User$oauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    where?: OAuthAccountWhereInput
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    cursor?: OAuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * User.gameRecords
   */
  export type User$gameRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    cursor?: GameRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * User.roomPlayers
   */
  export type User$roomPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    where?: RoomPlayerWhereInput
    orderBy?: RoomPlayerOrderByWithRelationInput | RoomPlayerOrderByWithRelationInput[]
    cursor?: RoomPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPlayerScalarFieldEnum | RoomPlayerScalarFieldEnum[]
  }

  /**
   * User.hostedRooms
   */
  export type User$hostedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.dailyChallenges
   */
  export type User$dailyChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    where?: DailyChallengeWhereInput
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    cursor?: DailyChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    ip: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    ip: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    ip: number
    userAgent: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ip?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ip?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ip?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    ip: string | null
    userAgent: string | null
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    ip?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "ip" | "userAgent" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      ip: string | null
      userAgent: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model OAuthAccount
   */

  export type AggregateOAuthAccount = {
    _count: OAuthAccountCountAggregateOutputType | null
    _min: OAuthAccountMinAggregateOutputType | null
    _max: OAuthAccountMaxAggregateOutputType | null
  }

  export type OAuthAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerId: string | null
    providerEmail: string | null
    createdAt: Date | null
  }

  export type OAuthAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerId: string | null
    providerEmail: string | null
    createdAt: Date | null
  }

  export type OAuthAccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerId: number
    providerEmail: number
    createdAt: number
    _all: number
  }


  export type OAuthAccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    providerEmail?: true
    createdAt?: true
  }

  export type OAuthAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    providerEmail?: true
    createdAt?: true
  }

  export type OAuthAccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    providerEmail?: true
    createdAt?: true
    _all?: true
  }

  export type OAuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccount to aggregate.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthAccounts
    **/
    _count?: true | OAuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthAccountMaxAggregateInputType
  }

  export type GetOAuthAccountAggregateType<T extends OAuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthAccount[P]>
      : GetScalarType<T[P], AggregateOAuthAccount[P]>
  }




  export type OAuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccountWhereInput
    orderBy?: OAuthAccountOrderByWithAggregationInput | OAuthAccountOrderByWithAggregationInput[]
    by: OAuthAccountScalarFieldEnum[] | OAuthAccountScalarFieldEnum
    having?: OAuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthAccountCountAggregateInputType | true
    _min?: OAuthAccountMinAggregateInputType
    _max?: OAuthAccountMaxAggregateInputType
  }

  export type OAuthAccountGroupByOutputType = {
    id: string
    userId: string
    provider: string
    providerId: string
    providerEmail: string | null
    createdAt: Date
    _count: OAuthAccountCountAggregateOutputType | null
    _min: OAuthAccountMinAggregateOutputType | null
    _max: OAuthAccountMaxAggregateOutputType | null
  }

  type GetOAuthAccountGroupByPayload<T extends OAuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type OAuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    providerEmail?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    providerEmail?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    providerEmail?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccount"]>

  export type OAuthAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    providerEmail?: boolean
    createdAt?: boolean
  }

  export type OAuthAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerId" | "providerEmail" | "createdAt", ExtArgs["result"]["oAuthAccount"]>
  export type OAuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      providerId: string
      providerEmail: string | null
      createdAt: Date
    }, ExtArgs["result"]["oAuthAccount"]>
    composites: {}
  }

  type OAuthAccountGetPayload<S extends boolean | null | undefined | OAuthAccountDefaultArgs> = $Result.GetResult<Prisma.$OAuthAccountPayload, S>

  type OAuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthAccountCountAggregateInputType | true
    }

  export interface OAuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthAccount'], meta: { name: 'OAuthAccount' } }
    /**
     * Find zero or one OAuthAccount that matches the filter.
     * @param {OAuthAccountFindUniqueArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthAccountFindUniqueArgs>(args: SelectSubset<T, OAuthAccountFindUniqueArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthAccountFindUniqueOrThrowArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindFirstArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthAccountFindFirstArgs>(args?: SelectSubset<T, OAuthAccountFindFirstArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindFirstOrThrowArgs} args - Arguments to find a OAuthAccount
     * @example
     * // Get one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthAccounts
     * const oAuthAccounts = await prisma.oAuthAccount.findMany()
     * 
     * // Get first 10 OAuthAccounts
     * const oAuthAccounts = await prisma.oAuthAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthAccountFindManyArgs>(args?: SelectSubset<T, OAuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthAccount.
     * @param {OAuthAccountCreateArgs} args - Arguments to create a OAuthAccount.
     * @example
     * // Create one OAuthAccount
     * const OAuthAccount = await prisma.oAuthAccount.create({
     *   data: {
     *     // ... data to create a OAuthAccount
     *   }
     * })
     * 
     */
    create<T extends OAuthAccountCreateArgs>(args: SelectSubset<T, OAuthAccountCreateArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthAccounts.
     * @param {OAuthAccountCreateManyArgs} args - Arguments to create many OAuthAccounts.
     * @example
     * // Create many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthAccountCreateManyArgs>(args?: SelectSubset<T, OAuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthAccounts and returns the data saved in the database.
     * @param {OAuthAccountCreateManyAndReturnArgs} args - Arguments to create many OAuthAccounts.
     * @example
     * // Create many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthAccounts and only return the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthAccount.
     * @param {OAuthAccountDeleteArgs} args - Arguments to delete one OAuthAccount.
     * @example
     * // Delete one OAuthAccount
     * const OAuthAccount = await prisma.oAuthAccount.delete({
     *   where: {
     *     // ... filter to delete one OAuthAccount
     *   }
     * })
     * 
     */
    delete<T extends OAuthAccountDeleteArgs>(args: SelectSubset<T, OAuthAccountDeleteArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthAccount.
     * @param {OAuthAccountUpdateArgs} args - Arguments to update one OAuthAccount.
     * @example
     * // Update one OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthAccountUpdateArgs>(args: SelectSubset<T, OAuthAccountUpdateArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthAccounts.
     * @param {OAuthAccountDeleteManyArgs} args - Arguments to filter OAuthAccounts to delete.
     * @example
     * // Delete a few OAuthAccounts
     * const { count } = await prisma.oAuthAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthAccountDeleteManyArgs>(args?: SelectSubset<T, OAuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthAccountUpdateManyArgs>(args: SelectSubset<T, OAuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccounts and returns the data updated in the database.
     * @param {OAuthAccountUpdateManyAndReturnArgs} args - Arguments to update many OAuthAccounts.
     * @example
     * // Update many OAuthAccounts
     * const oAuthAccount = await prisma.oAuthAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OAuthAccounts and only return the `id`
     * const oAuthAccountWithIdOnly = await prisma.oAuthAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OAuthAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, OAuthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OAuthAccount.
     * @param {OAuthAccountUpsertArgs} args - Arguments to update or create a OAuthAccount.
     * @example
     * // Update or create a OAuthAccount
     * const oAuthAccount = await prisma.oAuthAccount.upsert({
     *   create: {
     *     // ... data to create a OAuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends OAuthAccountUpsertArgs>(args: SelectSubset<T, OAuthAccountUpsertArgs<ExtArgs>>): Prisma__OAuthAccountClient<$Result.GetResult<Prisma.$OAuthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountCountArgs} args - Arguments to filter OAuthAccounts to count.
     * @example
     * // Count the number of OAuthAccounts
     * const count = await prisma.oAuthAccount.count({
     *   where: {
     *     // ... the filter for the OAuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends OAuthAccountCountArgs>(
      args?: Subset<T, OAuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthAccountAggregateArgs>(args: Subset<T, OAuthAccountAggregateArgs>): Prisma.PrismaPromise<GetOAuthAccountAggregateType<T>>

    /**
     * Group by OAuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccountGroupByArgs} args - Group by arguments.
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
      T extends OAuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: OAuthAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OAuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthAccount model
   */
  readonly fields: OAuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OAuthAccount model
   */
  interface OAuthAccountFieldRefs {
    readonly id: FieldRef<"OAuthAccount", 'String'>
    readonly userId: FieldRef<"OAuthAccount", 'String'>
    readonly provider: FieldRef<"OAuthAccount", 'String'>
    readonly providerId: FieldRef<"OAuthAccount", 'String'>
    readonly providerEmail: FieldRef<"OAuthAccount", 'String'>
    readonly createdAt: FieldRef<"OAuthAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthAccount findUnique
   */
  export type OAuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount findUniqueOrThrow
   */
  export type OAuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount findFirst
   */
  export type OAuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount findFirstOrThrow
   */
  export type OAuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccount to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccounts.
     */
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount findMany
   */
  export type OAuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccounts to fetch.
     */
    where?: OAuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccounts to fetch.
     */
    orderBy?: OAuthAccountOrderByWithRelationInput | OAuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthAccounts.
     */
    cursor?: OAuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccounts.
     */
    skip?: number
    distinct?: OAuthAccountScalarFieldEnum | OAuthAccountScalarFieldEnum[]
  }

  /**
   * OAuthAccount create
   */
  export type OAuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthAccount.
     */
    data: XOR<OAuthAccountCreateInput, OAuthAccountUncheckedCreateInput>
  }

  /**
   * OAuthAccount createMany
   */
  export type OAuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthAccounts.
     */
    data: OAuthAccountCreateManyInput | OAuthAccountCreateManyInput[]
  }

  /**
   * OAuthAccount createManyAndReturn
   */
  export type OAuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthAccounts.
     */
    data: OAuthAccountCreateManyInput | OAuthAccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccount update
   */
  export type OAuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthAccount.
     */
    data: XOR<OAuthAccountUpdateInput, OAuthAccountUncheckedUpdateInput>
    /**
     * Choose, which OAuthAccount to update.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount updateMany
   */
  export type OAuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthAccounts.
     */
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccounts to update
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to update.
     */
    limit?: number
  }

  /**
   * OAuthAccount updateManyAndReturn
   */
  export type OAuthAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * The data used to update OAuthAccounts.
     */
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccounts to update
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccount upsert
   */
  export type OAuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthAccount to update in case it exists.
     */
    where: OAuthAccountWhereUniqueInput
    /**
     * In case the OAuthAccount found by the `where` argument doesn't exist, create a new OAuthAccount with this data.
     */
    create: XOR<OAuthAccountCreateInput, OAuthAccountUncheckedCreateInput>
    /**
     * In case the OAuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthAccountUpdateInput, OAuthAccountUncheckedUpdateInput>
  }

  /**
   * OAuthAccount delete
   */
  export type OAuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
    /**
     * Filter which OAuthAccount to delete.
     */
    where: OAuthAccountWhereUniqueInput
  }

  /**
   * OAuthAccount deleteMany
   */
  export type OAuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccounts to delete
     */
    where?: OAuthAccountWhereInput
    /**
     * Limit how many OAuthAccounts to delete.
     */
    limit?: number
  }

  /**
   * OAuthAccount without action
   */
  export type OAuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccount
     */
    select?: OAuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccount
     */
    omit?: OAuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model GameRecord
   */

  export type AggregateGameRecord = {
    _count: GameRecordCountAggregateOutputType | null
    _avg: GameRecordAvgAggregateOutputType | null
    _sum: GameRecordSumAggregateOutputType | null
    _min: GameRecordMinAggregateOutputType | null
    _max: GameRecordMaxAggregateOutputType | null
  }

  export type GameRecordAvgAggregateOutputType = {
    guessCount: number | null
    timeSpent: number | null
  }

  export type GameRecordSumAggregateOutputType = {
    guessCount: number | null
    timeSpent: number | null
  }

  export type GameRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mode: $Enums.GameMode | null
    difficulty: $Enums.Difficulty | null
    result: $Enums.GameResult | null
    targetId: string | null
    guessCount: number | null
    timeSpent: number | null
    shareGrid: string | null
    playedAt: Date | null
    createdAt: Date | null
  }

  export type GameRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mode: $Enums.GameMode | null
    difficulty: $Enums.Difficulty | null
    result: $Enums.GameResult | null
    targetId: string | null
    guessCount: number | null
    timeSpent: number | null
    shareGrid: string | null
    playedAt: Date | null
    createdAt: Date | null
  }

  export type GameRecordCountAggregateOutputType = {
    id: number
    userId: number
    mode: number
    difficulty: number
    result: number
    targetId: number
    guessCount: number
    timeSpent: number
    shareGrid: number
    playedAt: number
    createdAt: number
    _all: number
  }


  export type GameRecordAvgAggregateInputType = {
    guessCount?: true
    timeSpent?: true
  }

  export type GameRecordSumAggregateInputType = {
    guessCount?: true
    timeSpent?: true
  }

  export type GameRecordMinAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    difficulty?: true
    result?: true
    targetId?: true
    guessCount?: true
    timeSpent?: true
    shareGrid?: true
    playedAt?: true
    createdAt?: true
  }

  export type GameRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    difficulty?: true
    result?: true
    targetId?: true
    guessCount?: true
    timeSpent?: true
    shareGrid?: true
    playedAt?: true
    createdAt?: true
  }

  export type GameRecordCountAggregateInputType = {
    id?: true
    userId?: true
    mode?: true
    difficulty?: true
    result?: true
    targetId?: true
    guessCount?: true
    timeSpent?: true
    shareGrid?: true
    playedAt?: true
    createdAt?: true
    _all?: true
  }

  export type GameRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRecord to aggregate.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameRecords
    **/
    _count?: true | GameRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameRecordMaxAggregateInputType
  }

  export type GetGameRecordAggregateType<T extends GameRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGameRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameRecord[P]>
      : GetScalarType<T[P], AggregateGameRecord[P]>
  }




  export type GameRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameRecordWhereInput
    orderBy?: GameRecordOrderByWithAggregationInput | GameRecordOrderByWithAggregationInput[]
    by: GameRecordScalarFieldEnum[] | GameRecordScalarFieldEnum
    having?: GameRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameRecordCountAggregateInputType | true
    _avg?: GameRecordAvgAggregateInputType
    _sum?: GameRecordSumAggregateInputType
    _min?: GameRecordMinAggregateInputType
    _max?: GameRecordMaxAggregateInputType
  }

  export type GameRecordGroupByOutputType = {
    id: string
    userId: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId: string | null
    guessCount: number
    timeSpent: number | null
    shareGrid: string | null
    playedAt: Date
    createdAt: Date
    _count: GameRecordCountAggregateOutputType | null
    _avg: GameRecordAvgAggregateOutputType | null
    _sum: GameRecordSumAggregateOutputType | null
    _min: GameRecordMinAggregateOutputType | null
    _max: GameRecordMaxAggregateOutputType | null
  }

  type GetGameRecordGroupByPayload<T extends GameRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GameRecordGroupByOutputType[P]>
        }
      >
    >


  export type GameRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    difficulty?: boolean
    result?: boolean
    targetId?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    shareGrid?: boolean
    playedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRecord"]>

  export type GameRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    difficulty?: boolean
    result?: boolean
    targetId?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    shareGrid?: boolean
    playedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRecord"]>

  export type GameRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mode?: boolean
    difficulty?: boolean
    result?: boolean
    targetId?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    shareGrid?: boolean
    playedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameRecord"]>

  export type GameRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    mode?: boolean
    difficulty?: boolean
    result?: boolean
    targetId?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    shareGrid?: boolean
    playedAt?: boolean
    createdAt?: boolean
  }

  export type GameRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mode" | "difficulty" | "result" | "targetId" | "guessCount" | "timeSpent" | "shareGrid" | "playedAt" | "createdAt", ExtArgs["result"]["gameRecord"]>
  export type GameRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mode: $Enums.GameMode
      difficulty: $Enums.Difficulty
      result: $Enums.GameResult
      targetId: string | null
      guessCount: number
      timeSpent: number | null
      shareGrid: string | null
      playedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["gameRecord"]>
    composites: {}
  }

  type GameRecordGetPayload<S extends boolean | null | undefined | GameRecordDefaultArgs> = $Result.GetResult<Prisma.$GameRecordPayload, S>

  type GameRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameRecordCountAggregateInputType | true
    }

  export interface GameRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameRecord'], meta: { name: 'GameRecord' } }
    /**
     * Find zero or one GameRecord that matches the filter.
     * @param {GameRecordFindUniqueArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameRecordFindUniqueArgs>(args: SelectSubset<T, GameRecordFindUniqueArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameRecordFindUniqueOrThrowArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GameRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordFindFirstArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameRecordFindFirstArgs>(args?: SelectSubset<T, GameRecordFindFirstArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordFindFirstOrThrowArgs} args - Arguments to find a GameRecord
     * @example
     * // Get one GameRecord
     * const gameRecord = await prisma.gameRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GameRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameRecords
     * const gameRecords = await prisma.gameRecord.findMany()
     * 
     * // Get first 10 GameRecords
     * const gameRecords = await prisma.gameRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameRecordWithIdOnly = await prisma.gameRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameRecordFindManyArgs>(args?: SelectSubset<T, GameRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameRecord.
     * @param {GameRecordCreateArgs} args - Arguments to create a GameRecord.
     * @example
     * // Create one GameRecord
     * const GameRecord = await prisma.gameRecord.create({
     *   data: {
     *     // ... data to create a GameRecord
     *   }
     * })
     * 
     */
    create<T extends GameRecordCreateArgs>(args: SelectSubset<T, GameRecordCreateArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameRecords.
     * @param {GameRecordCreateManyArgs} args - Arguments to create many GameRecords.
     * @example
     * // Create many GameRecords
     * const gameRecord = await prisma.gameRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameRecordCreateManyArgs>(args?: SelectSubset<T, GameRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameRecords and returns the data saved in the database.
     * @param {GameRecordCreateManyAndReturnArgs} args - Arguments to create many GameRecords.
     * @example
     * // Create many GameRecords
     * const gameRecord = await prisma.gameRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameRecords and only return the `id`
     * const gameRecordWithIdOnly = await prisma.gameRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GameRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameRecord.
     * @param {GameRecordDeleteArgs} args - Arguments to delete one GameRecord.
     * @example
     * // Delete one GameRecord
     * const GameRecord = await prisma.gameRecord.delete({
     *   where: {
     *     // ... filter to delete one GameRecord
     *   }
     * })
     * 
     */
    delete<T extends GameRecordDeleteArgs>(args: SelectSubset<T, GameRecordDeleteArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameRecord.
     * @param {GameRecordUpdateArgs} args - Arguments to update one GameRecord.
     * @example
     * // Update one GameRecord
     * const gameRecord = await prisma.gameRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameRecordUpdateArgs>(args: SelectSubset<T, GameRecordUpdateArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameRecords.
     * @param {GameRecordDeleteManyArgs} args - Arguments to filter GameRecords to delete.
     * @example
     * // Delete a few GameRecords
     * const { count } = await prisma.gameRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameRecordDeleteManyArgs>(args?: SelectSubset<T, GameRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameRecords
     * const gameRecord = await prisma.gameRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameRecordUpdateManyArgs>(args: SelectSubset<T, GameRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameRecords and returns the data updated in the database.
     * @param {GameRecordUpdateManyAndReturnArgs} args - Arguments to update many GameRecords.
     * @example
     * // Update many GameRecords
     * const gameRecord = await prisma.gameRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameRecords and only return the `id`
     * const gameRecordWithIdOnly = await prisma.gameRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GameRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameRecord.
     * @param {GameRecordUpsertArgs} args - Arguments to update or create a GameRecord.
     * @example
     * // Update or create a GameRecord
     * const gameRecord = await prisma.gameRecord.upsert({
     *   create: {
     *     // ... data to create a GameRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameRecord we want to update
     *   }
     * })
     */
    upsert<T extends GameRecordUpsertArgs>(args: SelectSubset<T, GameRecordUpsertArgs<ExtArgs>>): Prisma__GameRecordClient<$Result.GetResult<Prisma.$GameRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordCountArgs} args - Arguments to filter GameRecords to count.
     * @example
     * // Count the number of GameRecords
     * const count = await prisma.gameRecord.count({
     *   where: {
     *     // ... the filter for the GameRecords we want to count
     *   }
     * })
    **/
    count<T extends GameRecordCountArgs>(
      args?: Subset<T, GameRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameRecordAggregateArgs>(args: Subset<T, GameRecordAggregateArgs>): Prisma.PrismaPromise<GetGameRecordAggregateType<T>>

    /**
     * Group by GameRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameRecordGroupByArgs} args - Group by arguments.
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
      T extends GameRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameRecordGroupByArgs['orderBy'] }
        : { orderBy?: GameRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameRecord model
   */
  readonly fields: GameRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameRecord model
   */
  interface GameRecordFieldRefs {
    readonly id: FieldRef<"GameRecord", 'String'>
    readonly userId: FieldRef<"GameRecord", 'String'>
    readonly mode: FieldRef<"GameRecord", 'GameMode'>
    readonly difficulty: FieldRef<"GameRecord", 'Difficulty'>
    readonly result: FieldRef<"GameRecord", 'GameResult'>
    readonly targetId: FieldRef<"GameRecord", 'String'>
    readonly guessCount: FieldRef<"GameRecord", 'Int'>
    readonly timeSpent: FieldRef<"GameRecord", 'Int'>
    readonly shareGrid: FieldRef<"GameRecord", 'String'>
    readonly playedAt: FieldRef<"GameRecord", 'DateTime'>
    readonly createdAt: FieldRef<"GameRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameRecord findUnique
   */
  export type GameRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord findUniqueOrThrow
   */
  export type GameRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord findFirst
   */
  export type GameRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRecords.
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRecords.
     */
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * GameRecord findFirstOrThrow
   */
  export type GameRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecord to fetch.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameRecords.
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameRecords.
     */
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * GameRecord findMany
   */
  export type GameRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter, which GameRecords to fetch.
     */
    where?: GameRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameRecords to fetch.
     */
    orderBy?: GameRecordOrderByWithRelationInput | GameRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameRecords.
     */
    cursor?: GameRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameRecords.
     */
    skip?: number
    distinct?: GameRecordScalarFieldEnum | GameRecordScalarFieldEnum[]
  }

  /**
   * GameRecord create
   */
  export type GameRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a GameRecord.
     */
    data: XOR<GameRecordCreateInput, GameRecordUncheckedCreateInput>
  }

  /**
   * GameRecord createMany
   */
  export type GameRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameRecords.
     */
    data: GameRecordCreateManyInput | GameRecordCreateManyInput[]
  }

  /**
   * GameRecord createManyAndReturn
   */
  export type GameRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GameRecords.
     */
    data: GameRecordCreateManyInput | GameRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRecord update
   */
  export type GameRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a GameRecord.
     */
    data: XOR<GameRecordUpdateInput, GameRecordUncheckedUpdateInput>
    /**
     * Choose, which GameRecord to update.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord updateMany
   */
  export type GameRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameRecords.
     */
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyInput>
    /**
     * Filter which GameRecords to update
     */
    where?: GameRecordWhereInput
    /**
     * Limit how many GameRecords to update.
     */
    limit?: number
  }

  /**
   * GameRecord updateManyAndReturn
   */
  export type GameRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * The data used to update GameRecords.
     */
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyInput>
    /**
     * Filter which GameRecords to update
     */
    where?: GameRecordWhereInput
    /**
     * Limit how many GameRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameRecord upsert
   */
  export type GameRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the GameRecord to update in case it exists.
     */
    where: GameRecordWhereUniqueInput
    /**
     * In case the GameRecord found by the `where` argument doesn't exist, create a new GameRecord with this data.
     */
    create: XOR<GameRecordCreateInput, GameRecordUncheckedCreateInput>
    /**
     * In case the GameRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameRecordUpdateInput, GameRecordUncheckedUpdateInput>
  }

  /**
   * GameRecord delete
   */
  export type GameRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
    /**
     * Filter which GameRecord to delete.
     */
    where: GameRecordWhereUniqueInput
  }

  /**
   * GameRecord deleteMany
   */
  export type GameRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameRecords to delete
     */
    where?: GameRecordWhereInput
    /**
     * Limit how many GameRecords to delete.
     */
    limit?: number
  }

  /**
   * GameRecord without action
   */
  export type GameRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameRecord
     */
    select?: GameRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameRecord
     */
    omit?: GameRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameRecordInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    achievement: string | null
    unlockedAt: Date | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    achievement: string | null
    unlockedAt: Date | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievement: number
    unlockedAt: number
    _all: number
  }


  export type UserAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievement?: true
    unlockedAt?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievement?: true
    unlockedAt?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievement?: true
    unlockedAt?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: string
    userId: string
    achievement: string
    unlockedAt: Date
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievement?: boolean
    unlockedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievement?: boolean
    unlockedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievement?: boolean
    unlockedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievement?: boolean
    unlockedAt?: boolean
  }

  export type UserAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievement" | "unlockedAt", ExtArgs["result"]["userAchievement"]>
  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      achievement: string
      unlockedAt: Date
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
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
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'String'>
    readonly userId: FieldRef<"UserAchievement", 'String'>
    readonly achievement: FieldRef<"UserAchievement", 'String'>
    readonly unlockedAt: FieldRef<"UserAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    maxPlayers: number | null
    roundCount: number | null
  }

  export type RoomSumAggregateOutputType = {
    maxPlayers: number | null
    roundCount: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    code: string | null
    hostId: string | null
    status: $Enums.RoomStatus | null
    maxPlayers: number | null
    mode: $Enums.GameMode | null
    difficulty: $Enums.Difficulty | null
    roundCount: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    code: string | null
    hostId: string | null
    status: $Enums.RoomStatus | null
    maxPlayers: number | null
    mode: $Enums.GameMode | null
    difficulty: $Enums.Difficulty | null
    roundCount: number | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    code: number
    hostId: number
    status: number
    maxPlayers: number
    mode: number
    difficulty: number
    roundCount: number
    startedAt: number
    finishedAt: number
    createdAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    maxPlayers?: true
    roundCount?: true
  }

  export type RoomSumAggregateInputType = {
    maxPlayers?: true
    roundCount?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    code?: true
    hostId?: true
    status?: true
    maxPlayers?: true
    mode?: true
    difficulty?: true
    roundCount?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    code?: true
    hostId?: true
    status?: true
    maxPlayers?: true
    mode?: true
    difficulty?: true
    roundCount?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    code?: true
    hostId?: true
    status?: true
    maxPlayers?: true
    mode?: true
    difficulty?: true
    roundCount?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    code: string
    hostId: string
    status: $Enums.RoomStatus
    maxPlayers: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount: number
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    hostId?: boolean
    status?: boolean
    maxPlayers?: boolean
    mode?: boolean
    difficulty?: boolean
    roundCount?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Room$playersArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    hostId?: boolean
    status?: boolean
    maxPlayers?: boolean
    mode?: boolean
    difficulty?: boolean
    roundCount?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    hostId?: boolean
    status?: boolean
    maxPlayers?: boolean
    mode?: boolean
    difficulty?: boolean
    roundCount?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    code?: boolean
    hostId?: boolean
    status?: boolean
    maxPlayers?: boolean
    mode?: boolean
    difficulty?: boolean
    roundCount?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "hostId" | "status" | "maxPlayers" | "mode" | "difficulty" | "roundCount" | "startedAt" | "finishedAt" | "createdAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Room$playersArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      players: Prisma.$RoomPlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      hostId: string
      status: $Enums.RoomStatus
      maxPlayers: number
      mode: $Enums.GameMode
      difficulty: $Enums.Difficulty
      roundCount: number
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Room$playersArgs<ExtArgs> = {}>(args?: Subset<T, Room$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly code: FieldRef<"Room", 'String'>
    readonly hostId: FieldRef<"Room", 'String'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly maxPlayers: FieldRef<"Room", 'Int'>
    readonly mode: FieldRef<"Room", 'GameMode'>
    readonly difficulty: FieldRef<"Room", 'Difficulty'>
    readonly roundCount: FieldRef<"Room", 'Int'>
    readonly startedAt: FieldRef<"Room", 'DateTime'>
    readonly finishedAt: FieldRef<"Room", 'DateTime'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.players
   */
  export type Room$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    where?: RoomPlayerWhereInput
    orderBy?: RoomPlayerOrderByWithRelationInput | RoomPlayerOrderByWithRelationInput[]
    cursor?: RoomPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPlayerScalarFieldEnum | RoomPlayerScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomPlayer
   */

  export type AggregateRoomPlayer = {
    _count: RoomPlayerCountAggregateOutputType | null
    _avg: RoomPlayerAvgAggregateOutputType | null
    _sum: RoomPlayerSumAggregateOutputType | null
    _min: RoomPlayerMinAggregateOutputType | null
    _max: RoomPlayerMaxAggregateOutputType | null
  }

  export type RoomPlayerAvgAggregateOutputType = {
    score: number | null
  }

  export type RoomPlayerSumAggregateOutputType = {
    score: number | null
  }

  export type RoomPlayerMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    score: number | null
    isReady: boolean | null
    joinedAt: Date | null
  }

  export type RoomPlayerMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    score: number | null
    isReady: boolean | null
    joinedAt: Date | null
  }

  export type RoomPlayerCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    score: number
    isReady: number
    joinedAt: number
    _all: number
  }


  export type RoomPlayerAvgAggregateInputType = {
    score?: true
  }

  export type RoomPlayerSumAggregateInputType = {
    score?: true
  }

  export type RoomPlayerMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    score?: true
    isReady?: true
    joinedAt?: true
  }

  export type RoomPlayerMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    score?: true
    isReady?: true
    joinedAt?: true
  }

  export type RoomPlayerCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    score?: true
    isReady?: true
    joinedAt?: true
    _all?: true
  }

  export type RoomPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPlayer to aggregate.
     */
    where?: RoomPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPlayers to fetch.
     */
    orderBy?: RoomPlayerOrderByWithRelationInput | RoomPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomPlayers
    **/
    _count?: true | RoomPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomPlayerMaxAggregateInputType
  }

  export type GetRoomPlayerAggregateType<T extends RoomPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomPlayer[P]>
      : GetScalarType<T[P], AggregateRoomPlayer[P]>
  }




  export type RoomPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPlayerWhereInput
    orderBy?: RoomPlayerOrderByWithAggregationInput | RoomPlayerOrderByWithAggregationInput[]
    by: RoomPlayerScalarFieldEnum[] | RoomPlayerScalarFieldEnum
    having?: RoomPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomPlayerCountAggregateInputType | true
    _avg?: RoomPlayerAvgAggregateInputType
    _sum?: RoomPlayerSumAggregateInputType
    _min?: RoomPlayerMinAggregateInputType
    _max?: RoomPlayerMaxAggregateInputType
  }

  export type RoomPlayerGroupByOutputType = {
    id: string
    roomId: string
    userId: string
    score: number
    isReady: boolean
    joinedAt: Date
    _count: RoomPlayerCountAggregateOutputType | null
    _avg: RoomPlayerAvgAggregateOutputType | null
    _sum: RoomPlayerSumAggregateOutputType | null
    _min: RoomPlayerMinAggregateOutputType | null
    _max: RoomPlayerMaxAggregateOutputType | null
  }

  type GetRoomPlayerGroupByPayload<T extends RoomPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], RoomPlayerGroupByOutputType[P]>
        }
      >
    >


  export type RoomPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    score?: boolean
    isReady?: boolean
    joinedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPlayer"]>

  export type RoomPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    score?: boolean
    isReady?: boolean
    joinedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPlayer"]>

  export type RoomPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    score?: boolean
    isReady?: boolean
    joinedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPlayer"]>

  export type RoomPlayerSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    score?: boolean
    isReady?: boolean
    joinedAt?: boolean
  }

  export type RoomPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "score" | "isReady" | "joinedAt", ExtArgs["result"]["roomPlayer"]>
  export type RoomPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomPlayer"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      userId: string
      score: number
      isReady: boolean
      joinedAt: Date
    }, ExtArgs["result"]["roomPlayer"]>
    composites: {}
  }

  type RoomPlayerGetPayload<S extends boolean | null | undefined | RoomPlayerDefaultArgs> = $Result.GetResult<Prisma.$RoomPlayerPayload, S>

  type RoomPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomPlayerCountAggregateInputType | true
    }

  export interface RoomPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomPlayer'], meta: { name: 'RoomPlayer' } }
    /**
     * Find zero or one RoomPlayer that matches the filter.
     * @param {RoomPlayerFindUniqueArgs} args - Arguments to find a RoomPlayer
     * @example
     * // Get one RoomPlayer
     * const roomPlayer = await prisma.roomPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomPlayerFindUniqueArgs>(args: SelectSubset<T, RoomPlayerFindUniqueArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomPlayerFindUniqueOrThrowArgs} args - Arguments to find a RoomPlayer
     * @example
     * // Get one RoomPlayer
     * const roomPlayer = await prisma.roomPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerFindFirstArgs} args - Arguments to find a RoomPlayer
     * @example
     * // Get one RoomPlayer
     * const roomPlayer = await prisma.roomPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomPlayerFindFirstArgs>(args?: SelectSubset<T, RoomPlayerFindFirstArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerFindFirstOrThrowArgs} args - Arguments to find a RoomPlayer
     * @example
     * // Get one RoomPlayer
     * const roomPlayer = await prisma.roomPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomPlayers
     * const roomPlayers = await prisma.roomPlayer.findMany()
     * 
     * // Get first 10 RoomPlayers
     * const roomPlayers = await prisma.roomPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomPlayerWithIdOnly = await prisma.roomPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomPlayerFindManyArgs>(args?: SelectSubset<T, RoomPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomPlayer.
     * @param {RoomPlayerCreateArgs} args - Arguments to create a RoomPlayer.
     * @example
     * // Create one RoomPlayer
     * const RoomPlayer = await prisma.roomPlayer.create({
     *   data: {
     *     // ... data to create a RoomPlayer
     *   }
     * })
     * 
     */
    create<T extends RoomPlayerCreateArgs>(args: SelectSubset<T, RoomPlayerCreateArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomPlayers.
     * @param {RoomPlayerCreateManyArgs} args - Arguments to create many RoomPlayers.
     * @example
     * // Create many RoomPlayers
     * const roomPlayer = await prisma.roomPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomPlayerCreateManyArgs>(args?: SelectSubset<T, RoomPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomPlayers and returns the data saved in the database.
     * @param {RoomPlayerCreateManyAndReturnArgs} args - Arguments to create many RoomPlayers.
     * @example
     * // Create many RoomPlayers
     * const roomPlayer = await prisma.roomPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomPlayers and only return the `id`
     * const roomPlayerWithIdOnly = await prisma.roomPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomPlayer.
     * @param {RoomPlayerDeleteArgs} args - Arguments to delete one RoomPlayer.
     * @example
     * // Delete one RoomPlayer
     * const RoomPlayer = await prisma.roomPlayer.delete({
     *   where: {
     *     // ... filter to delete one RoomPlayer
     *   }
     * })
     * 
     */
    delete<T extends RoomPlayerDeleteArgs>(args: SelectSubset<T, RoomPlayerDeleteArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomPlayer.
     * @param {RoomPlayerUpdateArgs} args - Arguments to update one RoomPlayer.
     * @example
     * // Update one RoomPlayer
     * const roomPlayer = await prisma.roomPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomPlayerUpdateArgs>(args: SelectSubset<T, RoomPlayerUpdateArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomPlayers.
     * @param {RoomPlayerDeleteManyArgs} args - Arguments to filter RoomPlayers to delete.
     * @example
     * // Delete a few RoomPlayers
     * const { count } = await prisma.roomPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomPlayerDeleteManyArgs>(args?: SelectSubset<T, RoomPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomPlayers
     * const roomPlayer = await prisma.roomPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomPlayerUpdateManyArgs>(args: SelectSubset<T, RoomPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPlayers and returns the data updated in the database.
     * @param {RoomPlayerUpdateManyAndReturnArgs} args - Arguments to update many RoomPlayers.
     * @example
     * // Update many RoomPlayers
     * const roomPlayer = await prisma.roomPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomPlayers and only return the `id`
     * const roomPlayerWithIdOnly = await prisma.roomPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomPlayer.
     * @param {RoomPlayerUpsertArgs} args - Arguments to update or create a RoomPlayer.
     * @example
     * // Update or create a RoomPlayer
     * const roomPlayer = await prisma.roomPlayer.upsert({
     *   create: {
     *     // ... data to create a RoomPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomPlayer we want to update
     *   }
     * })
     */
    upsert<T extends RoomPlayerUpsertArgs>(args: SelectSubset<T, RoomPlayerUpsertArgs<ExtArgs>>): Prisma__RoomPlayerClient<$Result.GetResult<Prisma.$RoomPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerCountArgs} args - Arguments to filter RoomPlayers to count.
     * @example
     * // Count the number of RoomPlayers
     * const count = await prisma.roomPlayer.count({
     *   where: {
     *     // ... the filter for the RoomPlayers we want to count
     *   }
     * })
    **/
    count<T extends RoomPlayerCountArgs>(
      args?: Subset<T, RoomPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomPlayerAggregateArgs>(args: Subset<T, RoomPlayerAggregateArgs>): Prisma.PrismaPromise<GetRoomPlayerAggregateType<T>>

    /**
     * Group by RoomPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPlayerGroupByArgs} args - Group by arguments.
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
      T extends RoomPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomPlayerGroupByArgs['orderBy'] }
        : { orderBy?: RoomPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomPlayer model
   */
  readonly fields: RoomPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomPlayer model
   */
  interface RoomPlayerFieldRefs {
    readonly id: FieldRef<"RoomPlayer", 'String'>
    readonly roomId: FieldRef<"RoomPlayer", 'String'>
    readonly userId: FieldRef<"RoomPlayer", 'String'>
    readonly score: FieldRef<"RoomPlayer", 'Int'>
    readonly isReady: FieldRef<"RoomPlayer", 'Boolean'>
    readonly joinedAt: FieldRef<"RoomPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomPlayer findUnique
   */
  export type RoomPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RoomPlayer to fetch.
     */
    where: RoomPlayerWhereUniqueInput
  }

  /**
   * RoomPlayer findUniqueOrThrow
   */
  export type RoomPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RoomPlayer to fetch.
     */
    where: RoomPlayerWhereUniqueInput
  }

  /**
   * RoomPlayer findFirst
   */
  export type RoomPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RoomPlayer to fetch.
     */
    where?: RoomPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPlayers to fetch.
     */
    orderBy?: RoomPlayerOrderByWithRelationInput | RoomPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPlayers.
     */
    cursor?: RoomPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPlayers.
     */
    distinct?: RoomPlayerScalarFieldEnum | RoomPlayerScalarFieldEnum[]
  }

  /**
   * RoomPlayer findFirstOrThrow
   */
  export type RoomPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RoomPlayer to fetch.
     */
    where?: RoomPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPlayers to fetch.
     */
    orderBy?: RoomPlayerOrderByWithRelationInput | RoomPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPlayers.
     */
    cursor?: RoomPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPlayers.
     */
    distinct?: RoomPlayerScalarFieldEnum | RoomPlayerScalarFieldEnum[]
  }

  /**
   * RoomPlayer findMany
   */
  export type RoomPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RoomPlayers to fetch.
     */
    where?: RoomPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPlayers to fetch.
     */
    orderBy?: RoomPlayerOrderByWithRelationInput | RoomPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomPlayers.
     */
    cursor?: RoomPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPlayers.
     */
    skip?: number
    distinct?: RoomPlayerScalarFieldEnum | RoomPlayerScalarFieldEnum[]
  }

  /**
   * RoomPlayer create
   */
  export type RoomPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomPlayer.
     */
    data: XOR<RoomPlayerCreateInput, RoomPlayerUncheckedCreateInput>
  }

  /**
   * RoomPlayer createMany
   */
  export type RoomPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomPlayers.
     */
    data: RoomPlayerCreateManyInput | RoomPlayerCreateManyInput[]
  }

  /**
   * RoomPlayer createManyAndReturn
   */
  export type RoomPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many RoomPlayers.
     */
    data: RoomPlayerCreateManyInput | RoomPlayerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomPlayer update
   */
  export type RoomPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomPlayer.
     */
    data: XOR<RoomPlayerUpdateInput, RoomPlayerUncheckedUpdateInput>
    /**
     * Choose, which RoomPlayer to update.
     */
    where: RoomPlayerWhereUniqueInput
  }

  /**
   * RoomPlayer updateMany
   */
  export type RoomPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomPlayers.
     */
    data: XOR<RoomPlayerUpdateManyMutationInput, RoomPlayerUncheckedUpdateManyInput>
    /**
     * Filter which RoomPlayers to update
     */
    where?: RoomPlayerWhereInput
    /**
     * Limit how many RoomPlayers to update.
     */
    limit?: number
  }

  /**
   * RoomPlayer updateManyAndReturn
   */
  export type RoomPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * The data used to update RoomPlayers.
     */
    data: XOR<RoomPlayerUpdateManyMutationInput, RoomPlayerUncheckedUpdateManyInput>
    /**
     * Filter which RoomPlayers to update
     */
    where?: RoomPlayerWhereInput
    /**
     * Limit how many RoomPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomPlayer upsert
   */
  export type RoomPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomPlayer to update in case it exists.
     */
    where: RoomPlayerWhereUniqueInput
    /**
     * In case the RoomPlayer found by the `where` argument doesn't exist, create a new RoomPlayer with this data.
     */
    create: XOR<RoomPlayerCreateInput, RoomPlayerUncheckedCreateInput>
    /**
     * In case the RoomPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomPlayerUpdateInput, RoomPlayerUncheckedUpdateInput>
  }

  /**
   * RoomPlayer delete
   */
  export type RoomPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
    /**
     * Filter which RoomPlayer to delete.
     */
    where: RoomPlayerWhereUniqueInput
  }

  /**
   * RoomPlayer deleteMany
   */
  export type RoomPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPlayers to delete
     */
    where?: RoomPlayerWhereInput
    /**
     * Limit how many RoomPlayers to delete.
     */
    limit?: number
  }

  /**
   * RoomPlayer without action
   */
  export type RoomPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPlayer
     */
    select?: RoomPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPlayer
     */
    omit?: RoomPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPlayerInclude<ExtArgs> | null
  }


  /**
   * Model DailyChallenge
   */

  export type AggregateDailyChallenge = {
    _count: DailyChallengeCountAggregateOutputType | null
    _avg: DailyChallengeAvgAggregateOutputType | null
    _sum: DailyChallengeSumAggregateOutputType | null
    _min: DailyChallengeMinAggregateOutputType | null
    _max: DailyChallengeMaxAggregateOutputType | null
  }

  export type DailyChallengeAvgAggregateOutputType = {
    guessCount: number | null
    timeSpent: number | null
  }

  export type DailyChallengeSumAggregateOutputType = {
    guessCount: number | null
    timeSpent: number | null
  }

  export type DailyChallengeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    targetId: string | null
    result: $Enums.GameResult | null
    guessCount: number | null
    timeSpent: number | null
    completedAt: Date | null
  }

  export type DailyChallengeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: string | null
    targetId: string | null
    result: $Enums.GameResult | null
    guessCount: number | null
    timeSpent: number | null
    completedAt: Date | null
  }

  export type DailyChallengeCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    targetId: number
    result: number
    guessCount: number
    timeSpent: number
    completedAt: number
    _all: number
  }


  export type DailyChallengeAvgAggregateInputType = {
    guessCount?: true
    timeSpent?: true
  }

  export type DailyChallengeSumAggregateInputType = {
    guessCount?: true
    timeSpent?: true
  }

  export type DailyChallengeMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    targetId?: true
    result?: true
    guessCount?: true
    timeSpent?: true
    completedAt?: true
  }

  export type DailyChallengeMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    targetId?: true
    result?: true
    guessCount?: true
    timeSpent?: true
    completedAt?: true
  }

  export type DailyChallengeCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    targetId?: true
    result?: true
    guessCount?: true
    timeSpent?: true
    completedAt?: true
    _all?: true
  }

  export type DailyChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyChallenge to aggregate.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyChallenges
    **/
    _count?: true | DailyChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyChallengeMaxAggregateInputType
  }

  export type GetDailyChallengeAggregateType<T extends DailyChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyChallenge[P]>
      : GetScalarType<T[P], AggregateDailyChallenge[P]>
  }




  export type DailyChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyChallengeWhereInput
    orderBy?: DailyChallengeOrderByWithAggregationInput | DailyChallengeOrderByWithAggregationInput[]
    by: DailyChallengeScalarFieldEnum[] | DailyChallengeScalarFieldEnum
    having?: DailyChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyChallengeCountAggregateInputType | true
    _avg?: DailyChallengeAvgAggregateInputType
    _sum?: DailyChallengeSumAggregateInputType
    _min?: DailyChallengeMinAggregateInputType
    _max?: DailyChallengeMaxAggregateInputType
  }

  export type DailyChallengeGroupByOutputType = {
    id: string
    userId: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount: number
    timeSpent: number | null
    completedAt: Date
    _count: DailyChallengeCountAggregateOutputType | null
    _avg: DailyChallengeAvgAggregateOutputType | null
    _sum: DailyChallengeSumAggregateOutputType | null
    _min: DailyChallengeMinAggregateOutputType | null
    _max: DailyChallengeMaxAggregateOutputType | null
  }

  type GetDailyChallengeGroupByPayload<T extends DailyChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], DailyChallengeGroupByOutputType[P]>
        }
      >
    >


  export type DailyChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    targetId?: boolean
    result?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyChallenge"]>

  export type DailyChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    targetId?: boolean
    result?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyChallenge"]>

  export type DailyChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    targetId?: boolean
    result?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyChallenge"]>

  export type DailyChallengeSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    targetId?: boolean
    result?: boolean
    guessCount?: boolean
    timeSpent?: boolean
    completedAt?: boolean
  }

  export type DailyChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "targetId" | "result" | "guessCount" | "timeSpent" | "completedAt", ExtArgs["result"]["dailyChallenge"]>
  export type DailyChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyChallenge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: string
      targetId: string
      result: $Enums.GameResult
      guessCount: number
      timeSpent: number | null
      completedAt: Date
    }, ExtArgs["result"]["dailyChallenge"]>
    composites: {}
  }

  type DailyChallengeGetPayload<S extends boolean | null | undefined | DailyChallengeDefaultArgs> = $Result.GetResult<Prisma.$DailyChallengePayload, S>

  type DailyChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyChallengeCountAggregateInputType | true
    }

  export interface DailyChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyChallenge'], meta: { name: 'DailyChallenge' } }
    /**
     * Find zero or one DailyChallenge that matches the filter.
     * @param {DailyChallengeFindUniqueArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyChallengeFindUniqueArgs>(args: SelectSubset<T, DailyChallengeFindUniqueArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyChallengeFindUniqueOrThrowArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeFindFirstArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyChallengeFindFirstArgs>(args?: SelectSubset<T, DailyChallengeFindFirstArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeFindFirstOrThrowArgs} args - Arguments to find a DailyChallenge
     * @example
     * // Get one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyChallenges
     * const dailyChallenges = await prisma.dailyChallenge.findMany()
     * 
     * // Get first 10 DailyChallenges
     * const dailyChallenges = await prisma.dailyChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyChallengeWithIdOnly = await prisma.dailyChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyChallengeFindManyArgs>(args?: SelectSubset<T, DailyChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyChallenge.
     * @param {DailyChallengeCreateArgs} args - Arguments to create a DailyChallenge.
     * @example
     * // Create one DailyChallenge
     * const DailyChallenge = await prisma.dailyChallenge.create({
     *   data: {
     *     // ... data to create a DailyChallenge
     *   }
     * })
     * 
     */
    create<T extends DailyChallengeCreateArgs>(args: SelectSubset<T, DailyChallengeCreateArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyChallenges.
     * @param {DailyChallengeCreateManyArgs} args - Arguments to create many DailyChallenges.
     * @example
     * // Create many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyChallengeCreateManyArgs>(args?: SelectSubset<T, DailyChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyChallenges and returns the data saved in the database.
     * @param {DailyChallengeCreateManyAndReturnArgs} args - Arguments to create many DailyChallenges.
     * @example
     * // Create many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyChallenges and only return the `id`
     * const dailyChallengeWithIdOnly = await prisma.dailyChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyChallenge.
     * @param {DailyChallengeDeleteArgs} args - Arguments to delete one DailyChallenge.
     * @example
     * // Delete one DailyChallenge
     * const DailyChallenge = await prisma.dailyChallenge.delete({
     *   where: {
     *     // ... filter to delete one DailyChallenge
     *   }
     * })
     * 
     */
    delete<T extends DailyChallengeDeleteArgs>(args: SelectSubset<T, DailyChallengeDeleteArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyChallenge.
     * @param {DailyChallengeUpdateArgs} args - Arguments to update one DailyChallenge.
     * @example
     * // Update one DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyChallengeUpdateArgs>(args: SelectSubset<T, DailyChallengeUpdateArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyChallenges.
     * @param {DailyChallengeDeleteManyArgs} args - Arguments to filter DailyChallenges to delete.
     * @example
     * // Delete a few DailyChallenges
     * const { count } = await prisma.dailyChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyChallengeDeleteManyArgs>(args?: SelectSubset<T, DailyChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyChallengeUpdateManyArgs>(args: SelectSubset<T, DailyChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyChallenges and returns the data updated in the database.
     * @param {DailyChallengeUpdateManyAndReturnArgs} args - Arguments to update many DailyChallenges.
     * @example
     * // Update many DailyChallenges
     * const dailyChallenge = await prisma.dailyChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyChallenges and only return the `id`
     * const dailyChallengeWithIdOnly = await prisma.dailyChallenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyChallenge.
     * @param {DailyChallengeUpsertArgs} args - Arguments to update or create a DailyChallenge.
     * @example
     * // Update or create a DailyChallenge
     * const dailyChallenge = await prisma.dailyChallenge.upsert({
     *   create: {
     *     // ... data to create a DailyChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyChallenge we want to update
     *   }
     * })
     */
    upsert<T extends DailyChallengeUpsertArgs>(args: SelectSubset<T, DailyChallengeUpsertArgs<ExtArgs>>): Prisma__DailyChallengeClient<$Result.GetResult<Prisma.$DailyChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeCountArgs} args - Arguments to filter DailyChallenges to count.
     * @example
     * // Count the number of DailyChallenges
     * const count = await prisma.dailyChallenge.count({
     *   where: {
     *     // ... the filter for the DailyChallenges we want to count
     *   }
     * })
    **/
    count<T extends DailyChallengeCountArgs>(
      args?: Subset<T, DailyChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyChallengeAggregateArgs>(args: Subset<T, DailyChallengeAggregateArgs>): Prisma.PrismaPromise<GetDailyChallengeAggregateType<T>>

    /**
     * Group by DailyChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyChallengeGroupByArgs} args - Group by arguments.
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
      T extends DailyChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyChallengeGroupByArgs['orderBy'] }
        : { orderBy?: DailyChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyChallenge model
   */
  readonly fields: DailyChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyChallenge model
   */
  interface DailyChallengeFieldRefs {
    readonly id: FieldRef<"DailyChallenge", 'String'>
    readonly userId: FieldRef<"DailyChallenge", 'String'>
    readonly date: FieldRef<"DailyChallenge", 'String'>
    readonly targetId: FieldRef<"DailyChallenge", 'String'>
    readonly result: FieldRef<"DailyChallenge", 'GameResult'>
    readonly guessCount: FieldRef<"DailyChallenge", 'Int'>
    readonly timeSpent: FieldRef<"DailyChallenge", 'Int'>
    readonly completedAt: FieldRef<"DailyChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyChallenge findUnique
   */
  export type DailyChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge findUniqueOrThrow
   */
  export type DailyChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge findFirst
   */
  export type DailyChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyChallenges.
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyChallenges.
     */
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * DailyChallenge findFirstOrThrow
   */
  export type DailyChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenge to fetch.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyChallenges.
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyChallenges.
     */
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * DailyChallenge findMany
   */
  export type DailyChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter, which DailyChallenges to fetch.
     */
    where?: DailyChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyChallenges to fetch.
     */
    orderBy?: DailyChallengeOrderByWithRelationInput | DailyChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyChallenges.
     */
    cursor?: DailyChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyChallenges.
     */
    skip?: number
    distinct?: DailyChallengeScalarFieldEnum | DailyChallengeScalarFieldEnum[]
  }

  /**
   * DailyChallenge create
   */
  export type DailyChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyChallenge.
     */
    data: XOR<DailyChallengeCreateInput, DailyChallengeUncheckedCreateInput>
  }

  /**
   * DailyChallenge createMany
   */
  export type DailyChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyChallenges.
     */
    data: DailyChallengeCreateManyInput | DailyChallengeCreateManyInput[]
  }

  /**
   * DailyChallenge createManyAndReturn
   */
  export type DailyChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many DailyChallenges.
     */
    data: DailyChallengeCreateManyInput | DailyChallengeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyChallenge update
   */
  export type DailyChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyChallenge.
     */
    data: XOR<DailyChallengeUpdateInput, DailyChallengeUncheckedUpdateInput>
    /**
     * Choose, which DailyChallenge to update.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge updateMany
   */
  export type DailyChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyChallenges.
     */
    data: XOR<DailyChallengeUpdateManyMutationInput, DailyChallengeUncheckedUpdateManyInput>
    /**
     * Filter which DailyChallenges to update
     */
    where?: DailyChallengeWhereInput
    /**
     * Limit how many DailyChallenges to update.
     */
    limit?: number
  }

  /**
   * DailyChallenge updateManyAndReturn
   */
  export type DailyChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * The data used to update DailyChallenges.
     */
    data: XOR<DailyChallengeUpdateManyMutationInput, DailyChallengeUncheckedUpdateManyInput>
    /**
     * Filter which DailyChallenges to update
     */
    where?: DailyChallengeWhereInput
    /**
     * Limit how many DailyChallenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyChallenge upsert
   */
  export type DailyChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyChallenge to update in case it exists.
     */
    where: DailyChallengeWhereUniqueInput
    /**
     * In case the DailyChallenge found by the `where` argument doesn't exist, create a new DailyChallenge with this data.
     */
    create: XOR<DailyChallengeCreateInput, DailyChallengeUncheckedCreateInput>
    /**
     * In case the DailyChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyChallengeUpdateInput, DailyChallengeUncheckedUpdateInput>
  }

  /**
   * DailyChallenge delete
   */
  export type DailyChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
    /**
     * Filter which DailyChallenge to delete.
     */
    where: DailyChallengeWhereUniqueInput
  }

  /**
   * DailyChallenge deleteMany
   */
  export type DailyChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyChallenges to delete
     */
    where?: DailyChallengeWhereInput
    /**
     * Limit how many DailyChallenges to delete.
     */
    limit?: number
  }

  /**
   * DailyChallenge without action
   */
  export type DailyChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyChallenge
     */
    select?: DailyChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyChallenge
     */
    omit?: DailyChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Operator
   */

  export type AggregateOperator = {
    _count: OperatorCountAggregateOutputType | null
    _avg: OperatorAvgAggregateOutputType | null
    _sum: OperatorSumAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  export type OperatorAvgAggregateOutputType = {
    rarity: number | null
  }

  export type OperatorSumAggregateOutputType = {
    rarity: number | null
  }

  export type OperatorMinAggregateOutputType = {
    id: string | null
    name: string | null
    codename: string | null
    rarity: number | null
    profession: string | null
    subProfession: string | null
    race: string | null
    birthplace: string | null
    faction: string | null
    nation: string | null
    combatExperience: string | null
    oripathy: string | null
    isAlter: boolean | null
    alterOf: string | null
  }

  export type OperatorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    codename: string | null
    rarity: number | null
    profession: string | null
    subProfession: string | null
    race: string | null
    birthplace: string | null
    faction: string | null
    nation: string | null
    combatExperience: string | null
    oripathy: string | null
    isAlter: boolean | null
    alterOf: string | null
  }

  export type OperatorCountAggregateOutputType = {
    id: number
    name: number
    codename: number
    rarity: number
    profession: number
    subProfession: number
    race: number
    birthplace: number
    faction: number
    nation: number
    combatExperience: number
    oripathy: number
    isAlter: number
    alterOf: number
    _all: number
  }


  export type OperatorAvgAggregateInputType = {
    rarity?: true
  }

  export type OperatorSumAggregateInputType = {
    rarity?: true
  }

  export type OperatorMinAggregateInputType = {
    id?: true
    name?: true
    codename?: true
    rarity?: true
    profession?: true
    subProfession?: true
    race?: true
    birthplace?: true
    faction?: true
    nation?: true
    combatExperience?: true
    oripathy?: true
    isAlter?: true
    alterOf?: true
  }

  export type OperatorMaxAggregateInputType = {
    id?: true
    name?: true
    codename?: true
    rarity?: true
    profession?: true
    subProfession?: true
    race?: true
    birthplace?: true
    faction?: true
    nation?: true
    combatExperience?: true
    oripathy?: true
    isAlter?: true
    alterOf?: true
  }

  export type OperatorCountAggregateInputType = {
    id?: true
    name?: true
    codename?: true
    rarity?: true
    profession?: true
    subProfession?: true
    race?: true
    birthplace?: true
    faction?: true
    nation?: true
    combatExperience?: true
    oripathy?: true
    isAlter?: true
    alterOf?: true
    _all?: true
  }

  export type OperatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operator to aggregate.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operators
    **/
    _count?: true | OperatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatorMaxAggregateInputType
  }

  export type GetOperatorAggregateType<T extends OperatorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperator[P]>
      : GetScalarType<T[P], AggregateOperator[P]>
  }




  export type OperatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatorWhereInput
    orderBy?: OperatorOrderByWithAggregationInput | OperatorOrderByWithAggregationInput[]
    by: OperatorScalarFieldEnum[] | OperatorScalarFieldEnum
    having?: OperatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatorCountAggregateInputType | true
    _avg?: OperatorAvgAggregateInputType
    _sum?: OperatorSumAggregateInputType
    _min?: OperatorMinAggregateInputType
    _max?: OperatorMaxAggregateInputType
  }

  export type OperatorGroupByOutputType = {
    id: string
    name: string
    codename: string | null
    rarity: number
    profession: string
    subProfession: string | null
    race: string | null
    birthplace: string | null
    faction: string | null
    nation: string | null
    combatExperience: string | null
    oripathy: string | null
    isAlter: boolean
    alterOf: string | null
    _count: OperatorCountAggregateOutputType | null
    _avg: OperatorAvgAggregateOutputType | null
    _sum: OperatorSumAggregateOutputType | null
    _min: OperatorMinAggregateOutputType | null
    _max: OperatorMaxAggregateOutputType | null
  }

  type GetOperatorGroupByPayload<T extends OperatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatorGroupByOutputType[P]>
            : GetScalarType<T[P], OperatorGroupByOutputType[P]>
        }
      >
    >


  export type OperatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    codename?: boolean
    rarity?: boolean
    profession?: boolean
    subProfession?: boolean
    race?: boolean
    birthplace?: boolean
    faction?: boolean
    nation?: boolean
    combatExperience?: boolean
    oripathy?: boolean
    isAlter?: boolean
    alterOf?: boolean
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    codename?: boolean
    rarity?: boolean
    profession?: boolean
    subProfession?: boolean
    race?: boolean
    birthplace?: boolean
    faction?: boolean
    nation?: boolean
    combatExperience?: boolean
    oripathy?: boolean
    isAlter?: boolean
    alterOf?: boolean
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    codename?: boolean
    rarity?: boolean
    profession?: boolean
    subProfession?: boolean
    race?: boolean
    birthplace?: boolean
    faction?: boolean
    nation?: boolean
    combatExperience?: boolean
    oripathy?: boolean
    isAlter?: boolean
    alterOf?: boolean
  }, ExtArgs["result"]["operator"]>

  export type OperatorSelectScalar = {
    id?: boolean
    name?: boolean
    codename?: boolean
    rarity?: boolean
    profession?: boolean
    subProfession?: boolean
    race?: boolean
    birthplace?: boolean
    faction?: boolean
    nation?: boolean
    combatExperience?: boolean
    oripathy?: boolean
    isAlter?: boolean
    alterOf?: boolean
  }

  export type OperatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "codename" | "rarity" | "profession" | "subProfession" | "race" | "birthplace" | "faction" | "nation" | "combatExperience" | "oripathy" | "isAlter" | "alterOf", ExtArgs["result"]["operator"]>

  export type $OperatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      codename: string | null
      rarity: number
      profession: string
      subProfession: string | null
      race: string | null
      birthplace: string | null
      faction: string | null
      nation: string | null
      combatExperience: string | null
      oripathy: string | null
      isAlter: boolean
      alterOf: string | null
    }, ExtArgs["result"]["operator"]>
    composites: {}
  }

  type OperatorGetPayload<S extends boolean | null | undefined | OperatorDefaultArgs> = $Result.GetResult<Prisma.$OperatorPayload, S>

  type OperatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatorCountAggregateInputType | true
    }

  export interface OperatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operator'], meta: { name: 'Operator' } }
    /**
     * Find zero or one Operator that matches the filter.
     * @param {OperatorFindUniqueArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatorFindUniqueArgs>(args: SelectSubset<T, OperatorFindUniqueArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperatorFindUniqueOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatorFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatorFindFirstArgs>(args?: SelectSubset<T, OperatorFindFirstArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindFirstOrThrowArgs} args - Arguments to find a Operator
     * @example
     * // Get one Operator
     * const operator = await prisma.operator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatorFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operators
     * const operators = await prisma.operator.findMany()
     * 
     * // Get first 10 Operators
     * const operators = await prisma.operator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatorWithIdOnly = await prisma.operator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatorFindManyArgs>(args?: SelectSubset<T, OperatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operator.
     * @param {OperatorCreateArgs} args - Arguments to create a Operator.
     * @example
     * // Create one Operator
     * const Operator = await prisma.operator.create({
     *   data: {
     *     // ... data to create a Operator
     *   }
     * })
     * 
     */
    create<T extends OperatorCreateArgs>(args: SelectSubset<T, OperatorCreateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operators.
     * @param {OperatorCreateManyArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatorCreateManyArgs>(args?: SelectSubset<T, OperatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operators and returns the data saved in the database.
     * @param {OperatorCreateManyAndReturnArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operator = await prisma.operator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operators and only return the `id`
     * const operatorWithIdOnly = await prisma.operator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperatorCreateManyAndReturnArgs>(args?: SelectSubset<T, OperatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operator.
     * @param {OperatorDeleteArgs} args - Arguments to delete one Operator.
     * @example
     * // Delete one Operator
     * const Operator = await prisma.operator.delete({
     *   where: {
     *     // ... filter to delete one Operator
     *   }
     * })
     * 
     */
    delete<T extends OperatorDeleteArgs>(args: SelectSubset<T, OperatorDeleteArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operator.
     * @param {OperatorUpdateArgs} args - Arguments to update one Operator.
     * @example
     * // Update one Operator
     * const operator = await prisma.operator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatorUpdateArgs>(args: SelectSubset<T, OperatorUpdateArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operators.
     * @param {OperatorDeleteManyArgs} args - Arguments to filter Operators to delete.
     * @example
     * // Delete a few Operators
     * const { count } = await prisma.operator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatorDeleteManyArgs>(args?: SelectSubset<T, OperatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatorUpdateManyArgs>(args: SelectSubset<T, OperatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators and returns the data updated in the database.
     * @param {OperatorUpdateManyAndReturnArgs} args - Arguments to update many Operators.
     * @example
     * // Update many Operators
     * const operator = await prisma.operator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operators and only return the `id`
     * const operatorWithIdOnly = await prisma.operator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperatorUpdateManyAndReturnArgs>(args: SelectSubset<T, OperatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operator.
     * @param {OperatorUpsertArgs} args - Arguments to update or create a Operator.
     * @example
     * // Update or create a Operator
     * const operator = await prisma.operator.upsert({
     *   create: {
     *     // ... data to create a Operator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operator we want to update
     *   }
     * })
     */
    upsert<T extends OperatorUpsertArgs>(args: SelectSubset<T, OperatorUpsertArgs<ExtArgs>>): Prisma__OperatorClient<$Result.GetResult<Prisma.$OperatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorCountArgs} args - Arguments to filter Operators to count.
     * @example
     * // Count the number of Operators
     * const count = await prisma.operator.count({
     *   where: {
     *     // ... the filter for the Operators we want to count
     *   }
     * })
    **/
    count<T extends OperatorCountArgs>(
      args?: Subset<T, OperatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperatorAggregateArgs>(args: Subset<T, OperatorAggregateArgs>): Prisma.PrismaPromise<GetOperatorAggregateType<T>>

    /**
     * Group by Operator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorGroupByArgs} args - Group by arguments.
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
      T extends OperatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatorGroupByArgs['orderBy'] }
        : { orderBy?: OperatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operator model
   */
  readonly fields: OperatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operator model
   */
  interface OperatorFieldRefs {
    readonly id: FieldRef<"Operator", 'String'>
    readonly name: FieldRef<"Operator", 'String'>
    readonly codename: FieldRef<"Operator", 'String'>
    readonly rarity: FieldRef<"Operator", 'Int'>
    readonly profession: FieldRef<"Operator", 'String'>
    readonly subProfession: FieldRef<"Operator", 'String'>
    readonly race: FieldRef<"Operator", 'String'>
    readonly birthplace: FieldRef<"Operator", 'String'>
    readonly faction: FieldRef<"Operator", 'String'>
    readonly nation: FieldRef<"Operator", 'String'>
    readonly combatExperience: FieldRef<"Operator", 'String'>
    readonly oripathy: FieldRef<"Operator", 'String'>
    readonly isAlter: FieldRef<"Operator", 'Boolean'>
    readonly alterOf: FieldRef<"Operator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Operator findUnique
   */
  export type OperatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findUniqueOrThrow
   */
  export type OperatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator findFirst
   */
  export type OperatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findFirstOrThrow
   */
  export type OperatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Filter, which Operator to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operators.
     */
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator findMany
   */
  export type OperatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Filter, which Operators to fetch.
     */
    where?: OperatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operators to fetch.
     */
    orderBy?: OperatorOrderByWithRelationInput | OperatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operators.
     */
    cursor?: OperatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operators.
     */
    skip?: number
    distinct?: OperatorScalarFieldEnum | OperatorScalarFieldEnum[]
  }

  /**
   * Operator create
   */
  export type OperatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data needed to create a Operator.
     */
    data: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
  }

  /**
   * Operator createMany
   */
  export type OperatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
  }

  /**
   * Operator createManyAndReturn
   */
  export type OperatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data used to create many Operators.
     */
    data: OperatorCreateManyInput | OperatorCreateManyInput[]
  }

  /**
   * Operator update
   */
  export type OperatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data needed to update a Operator.
     */
    data: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
    /**
     * Choose, which Operator to update.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator updateMany
   */
  export type OperatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to update.
     */
    limit?: number
  }

  /**
   * Operator updateManyAndReturn
   */
  export type OperatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The data used to update Operators.
     */
    data: XOR<OperatorUpdateManyMutationInput, OperatorUncheckedUpdateManyInput>
    /**
     * Filter which Operators to update
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to update.
     */
    limit?: number
  }

  /**
   * Operator upsert
   */
  export type OperatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * The filter to search for the Operator to update in case it exists.
     */
    where: OperatorWhereUniqueInput
    /**
     * In case the Operator found by the `where` argument doesn't exist, create a new Operator with this data.
     */
    create: XOR<OperatorCreateInput, OperatorUncheckedCreateInput>
    /**
     * In case the Operator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatorUpdateInput, OperatorUncheckedUpdateInput>
  }

  /**
   * Operator delete
   */
  export type OperatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
    /**
     * Filter which Operator to delete.
     */
    where: OperatorWhereUniqueInput
  }

  /**
   * Operator deleteMany
   */
  export type OperatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operators to delete
     */
    where?: OperatorWhereInput
    /**
     * Limit how many Operators to delete.
     */
    limit?: number
  }

  /**
   * Operator without action
   */
  export type OperatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operator
     */
    select?: OperatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operator
     */
    omit?: OperatorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    avatar: 'avatar',
    bio: 'bio',
    gender: 'gender',
    points: 'points',
    role: 'role',
    isVerified: 'isVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    ip: 'ip',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const OAuthAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    providerEmail: 'providerEmail',
    createdAt: 'createdAt'
  };

  export type OAuthAccountScalarFieldEnum = (typeof OAuthAccountScalarFieldEnum)[keyof typeof OAuthAccountScalarFieldEnum]


  export const GameRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mode: 'mode',
    difficulty: 'difficulty',
    result: 'result',
    targetId: 'targetId',
    guessCount: 'guessCount',
    timeSpent: 'timeSpent',
    shareGrid: 'shareGrid',
    playedAt: 'playedAt',
    createdAt: 'createdAt'
  };

  export type GameRecordScalarFieldEnum = (typeof GameRecordScalarFieldEnum)[keyof typeof GameRecordScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievement: 'achievement',
    unlockedAt: 'unlockedAt'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    code: 'code',
    hostId: 'hostId',
    status: 'status',
    maxPlayers: 'maxPlayers',
    mode: 'mode',
    difficulty: 'difficulty',
    roundCount: 'roundCount',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomPlayerScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    score: 'score',
    isReady: 'isReady',
    joinedAt: 'joinedAt'
  };

  export type RoomPlayerScalarFieldEnum = (typeof RoomPlayerScalarFieldEnum)[keyof typeof RoomPlayerScalarFieldEnum]


  export const DailyChallengeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    targetId: 'targetId',
    result: 'result',
    guessCount: 'guessCount',
    timeSpent: 'timeSpent',
    completedAt: 'completedAt'
  };

  export type DailyChallengeScalarFieldEnum = (typeof DailyChallengeScalarFieldEnum)[keyof typeof DailyChallengeScalarFieldEnum]


  export const OperatorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    codename: 'codename',
    rarity: 'rarity',
    profession: 'profession',
    subProfession: 'subProfession',
    race: 'race',
    birthplace: 'birthplace',
    faction: 'faction',
    nation: 'nation',
    combatExperience: 'combatExperience',
    oripathy: 'oripathy',
    isAlter: 'isAlter',
    alterOf: 'alterOf'
  };

  export type OperatorScalarFieldEnum = (typeof OperatorScalarFieldEnum)[keyof typeof OperatorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'GameMode'
   */
  export type EnumGameModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameMode'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'GameResult'
   */
  export type EnumGameResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameResult'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    points?: IntFilter<"User"> | number
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    oauthAccounts?: OAuthAccountListRelationFilter
    gameRecords?: GameRecordListRelationFilter
    achievements?: UserAchievementListRelationFilter
    roomPlayers?: RoomPlayerListRelationFilter
    hostedRooms?: RoomListRelationFilter
    dailyChallenges?: DailyChallengeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    gender?: SortOrder
    points?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    oauthAccounts?: OAuthAccountOrderByRelationAggregateInput
    gameRecords?: GameRecordOrderByRelationAggregateInput
    achievements?: UserAchievementOrderByRelationAggregateInput
    roomPlayers?: RoomPlayerOrderByRelationAggregateInput
    hostedRooms?: RoomOrderByRelationAggregateInput
    dailyChallenges?: DailyChallengeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    points?: IntFilter<"User"> | number
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    oauthAccounts?: OAuthAccountListRelationFilter
    gameRecords?: GameRecordListRelationFilter
    achievements?: UserAchievementListRelationFilter
    roomPlayers?: RoomPlayerListRelationFilter
    hostedRooms?: RoomListRelationFilter
    dailyChallenges?: DailyChallengeListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    gender?: SortOrder
    points?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    points?: IntWithAggregatesFilter<"User"> | number
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    ip?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    ip?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    ip?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type OAuthAccountWhereInput = {
    AND?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    OR?: OAuthAccountWhereInput[]
    NOT?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    id?: StringFilter<"OAuthAccount"> | string
    userId?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerId?: StringFilter<"OAuthAccount"> | string
    providerEmail?: StringNullableFilter<"OAuthAccount"> | string | null
    createdAt?: DateTimeFilter<"OAuthAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OAuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    providerEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OAuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerId?: OAuthAccountProviderProviderIdCompoundUniqueInput
    AND?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    OR?: OAuthAccountWhereInput[]
    NOT?: OAuthAccountWhereInput | OAuthAccountWhereInput[]
    userId?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerId?: StringFilter<"OAuthAccount"> | string
    providerEmail?: StringNullableFilter<"OAuthAccount"> | string | null
    createdAt?: DateTimeFilter<"OAuthAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerId">

  export type OAuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    providerEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OAuthAccountCountOrderByAggregateInput
    _max?: OAuthAccountMaxOrderByAggregateInput
    _min?: OAuthAccountMinOrderByAggregateInput
  }

  export type OAuthAccountScalarWhereWithAggregatesInput = {
    AND?: OAuthAccountScalarWhereWithAggregatesInput | OAuthAccountScalarWhereWithAggregatesInput[]
    OR?: OAuthAccountScalarWhereWithAggregatesInput[]
    NOT?: OAuthAccountScalarWhereWithAggregatesInput | OAuthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthAccount"> | string
    userId?: StringWithAggregatesFilter<"OAuthAccount"> | string
    provider?: StringWithAggregatesFilter<"OAuthAccount"> | string
    providerId?: StringWithAggregatesFilter<"OAuthAccount"> | string
    providerEmail?: StringNullableWithAggregatesFilter<"OAuthAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OAuthAccount"> | Date | string
  }

  export type GameRecordWhereInput = {
    AND?: GameRecordWhereInput | GameRecordWhereInput[]
    OR?: GameRecordWhereInput[]
    NOT?: GameRecordWhereInput | GameRecordWhereInput[]
    id?: StringFilter<"GameRecord"> | string
    userId?: StringFilter<"GameRecord"> | string
    mode?: EnumGameModeFilter<"GameRecord"> | $Enums.GameMode
    difficulty?: EnumDifficultyFilter<"GameRecord"> | $Enums.Difficulty
    result?: EnumGameResultFilter<"GameRecord"> | $Enums.GameResult
    targetId?: StringNullableFilter<"GameRecord"> | string | null
    guessCount?: IntFilter<"GameRecord"> | number
    timeSpent?: IntNullableFilter<"GameRecord"> | number | null
    shareGrid?: StringNullableFilter<"GameRecord"> | string | null
    playedAt?: DateTimeFilter<"GameRecord"> | Date | string
    createdAt?: DateTimeFilter<"GameRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    result?: SortOrder
    targetId?: SortOrderInput | SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    shareGrid?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GameRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameRecordWhereInput | GameRecordWhereInput[]
    OR?: GameRecordWhereInput[]
    NOT?: GameRecordWhereInput | GameRecordWhereInput[]
    userId?: StringFilter<"GameRecord"> | string
    mode?: EnumGameModeFilter<"GameRecord"> | $Enums.GameMode
    difficulty?: EnumDifficultyFilter<"GameRecord"> | $Enums.Difficulty
    result?: EnumGameResultFilter<"GameRecord"> | $Enums.GameResult
    targetId?: StringNullableFilter<"GameRecord"> | string | null
    guessCount?: IntFilter<"GameRecord"> | number
    timeSpent?: IntNullableFilter<"GameRecord"> | number | null
    shareGrid?: StringNullableFilter<"GameRecord"> | string | null
    playedAt?: DateTimeFilter<"GameRecord"> | Date | string
    createdAt?: DateTimeFilter<"GameRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GameRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    result?: SortOrder
    targetId?: SortOrderInput | SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    shareGrid?: SortOrderInput | SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    _count?: GameRecordCountOrderByAggregateInput
    _avg?: GameRecordAvgOrderByAggregateInput
    _max?: GameRecordMaxOrderByAggregateInput
    _min?: GameRecordMinOrderByAggregateInput
    _sum?: GameRecordSumOrderByAggregateInput
  }

  export type GameRecordScalarWhereWithAggregatesInput = {
    AND?: GameRecordScalarWhereWithAggregatesInput | GameRecordScalarWhereWithAggregatesInput[]
    OR?: GameRecordScalarWhereWithAggregatesInput[]
    NOT?: GameRecordScalarWhereWithAggregatesInput | GameRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameRecord"> | string
    userId?: StringWithAggregatesFilter<"GameRecord"> | string
    mode?: EnumGameModeWithAggregatesFilter<"GameRecord"> | $Enums.GameMode
    difficulty?: EnumDifficultyWithAggregatesFilter<"GameRecord"> | $Enums.Difficulty
    result?: EnumGameResultWithAggregatesFilter<"GameRecord"> | $Enums.GameResult
    targetId?: StringNullableWithAggregatesFilter<"GameRecord"> | string | null
    guessCount?: IntWithAggregatesFilter<"GameRecord"> | number
    timeSpent?: IntNullableWithAggregatesFilter<"GameRecord"> | number | null
    shareGrid?: StringNullableWithAggregatesFilter<"GameRecord"> | string | null
    playedAt?: DateTimeWithAggregatesFilter<"GameRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GameRecord"> | Date | string
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievement?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievement?: SortOrder
    unlockedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_achievement?: UserAchievementUserIdAchievementCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userId?: StringFilter<"UserAchievement"> | string
    achievement?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_achievement">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievement?: SortOrder
    unlockedAt?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievement"> | string
    userId?: StringWithAggregatesFilter<"UserAchievement"> | string
    achievement?: StringWithAggregatesFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    hostId?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    maxPlayers?: IntFilter<"Room"> | number
    mode?: EnumGameModeFilter<"Room"> | $Enums.GameMode
    difficulty?: EnumDifficultyFilter<"Room"> | $Enums.Difficulty
    roundCount?: IntFilter<"Room"> | number
    startedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: RoomPlayerListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    roundCount?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    host?: UserOrderByWithRelationInput
    players?: RoomPlayerOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    hostId?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    maxPlayers?: IntFilter<"Room"> | number
    mode?: EnumGameModeFilter<"Room"> | $Enums.GameMode
    difficulty?: EnumDifficultyFilter<"Room"> | $Enums.Difficulty
    roundCount?: IntFilter<"Room"> | number
    startedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: RoomPlayerListRelationFilter
  }, "id" | "code">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    roundCount?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    code?: StringWithAggregatesFilter<"Room"> | string
    hostId?: StringWithAggregatesFilter<"Room"> | string
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    maxPlayers?: IntWithAggregatesFilter<"Room"> | number
    mode?: EnumGameModeWithAggregatesFilter<"Room"> | $Enums.GameMode
    difficulty?: EnumDifficultyWithAggregatesFilter<"Room"> | $Enums.Difficulty
    roundCount?: IntWithAggregatesFilter<"Room"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomPlayerWhereInput = {
    AND?: RoomPlayerWhereInput | RoomPlayerWhereInput[]
    OR?: RoomPlayerWhereInput[]
    NOT?: RoomPlayerWhereInput | RoomPlayerWhereInput[]
    id?: StringFilter<"RoomPlayer"> | string
    roomId?: StringFilter<"RoomPlayer"> | string
    userId?: StringFilter<"RoomPlayer"> | string
    score?: IntFilter<"RoomPlayer"> | number
    isReady?: BoolFilter<"RoomPlayer"> | boolean
    joinedAt?: DateTimeFilter<"RoomPlayer"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomPlayerOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    isReady?: SortOrder
    joinedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_userId?: RoomPlayerRoomIdUserIdCompoundUniqueInput
    AND?: RoomPlayerWhereInput | RoomPlayerWhereInput[]
    OR?: RoomPlayerWhereInput[]
    NOT?: RoomPlayerWhereInput | RoomPlayerWhereInput[]
    roomId?: StringFilter<"RoomPlayer"> | string
    userId?: StringFilter<"RoomPlayer"> | string
    score?: IntFilter<"RoomPlayer"> | number
    isReady?: BoolFilter<"RoomPlayer"> | boolean
    joinedAt?: DateTimeFilter<"RoomPlayer"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "roomId_userId">

  export type RoomPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    isReady?: SortOrder
    joinedAt?: SortOrder
    _count?: RoomPlayerCountOrderByAggregateInput
    _avg?: RoomPlayerAvgOrderByAggregateInput
    _max?: RoomPlayerMaxOrderByAggregateInput
    _min?: RoomPlayerMinOrderByAggregateInput
    _sum?: RoomPlayerSumOrderByAggregateInput
  }

  export type RoomPlayerScalarWhereWithAggregatesInput = {
    AND?: RoomPlayerScalarWhereWithAggregatesInput | RoomPlayerScalarWhereWithAggregatesInput[]
    OR?: RoomPlayerScalarWhereWithAggregatesInput[]
    NOT?: RoomPlayerScalarWhereWithAggregatesInput | RoomPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomPlayer"> | string
    roomId?: StringWithAggregatesFilter<"RoomPlayer"> | string
    userId?: StringWithAggregatesFilter<"RoomPlayer"> | string
    score?: IntWithAggregatesFilter<"RoomPlayer"> | number
    isReady?: BoolWithAggregatesFilter<"RoomPlayer"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"RoomPlayer"> | Date | string
  }

  export type DailyChallengeWhereInput = {
    AND?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    OR?: DailyChallengeWhereInput[]
    NOT?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    id?: StringFilter<"DailyChallenge"> | string
    userId?: StringFilter<"DailyChallenge"> | string
    date?: StringFilter<"DailyChallenge"> | string
    targetId?: StringFilter<"DailyChallenge"> | string
    result?: EnumGameResultFilter<"DailyChallenge"> | $Enums.GameResult
    guessCount?: IntFilter<"DailyChallenge"> | number
    timeSpent?: IntNullableFilter<"DailyChallenge"> | number | null
    completedAt?: DateTimeFilter<"DailyChallenge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyChallengeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    targetId?: SortOrder
    result?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyChallengeUserIdDateCompoundUniqueInput
    AND?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    OR?: DailyChallengeWhereInput[]
    NOT?: DailyChallengeWhereInput | DailyChallengeWhereInput[]
    userId?: StringFilter<"DailyChallenge"> | string
    date?: StringFilter<"DailyChallenge"> | string
    targetId?: StringFilter<"DailyChallenge"> | string
    result?: EnumGameResultFilter<"DailyChallenge"> | $Enums.GameResult
    guessCount?: IntFilter<"DailyChallenge"> | number
    timeSpent?: IntNullableFilter<"DailyChallenge"> | number | null
    completedAt?: DateTimeFilter<"DailyChallenge"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    targetId?: SortOrder
    result?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    _count?: DailyChallengeCountOrderByAggregateInput
    _avg?: DailyChallengeAvgOrderByAggregateInput
    _max?: DailyChallengeMaxOrderByAggregateInput
    _min?: DailyChallengeMinOrderByAggregateInput
    _sum?: DailyChallengeSumOrderByAggregateInput
  }

  export type DailyChallengeScalarWhereWithAggregatesInput = {
    AND?: DailyChallengeScalarWhereWithAggregatesInput | DailyChallengeScalarWhereWithAggregatesInput[]
    OR?: DailyChallengeScalarWhereWithAggregatesInput[]
    NOT?: DailyChallengeScalarWhereWithAggregatesInput | DailyChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyChallenge"> | string
    userId?: StringWithAggregatesFilter<"DailyChallenge"> | string
    date?: StringWithAggregatesFilter<"DailyChallenge"> | string
    targetId?: StringWithAggregatesFilter<"DailyChallenge"> | string
    result?: EnumGameResultWithAggregatesFilter<"DailyChallenge"> | $Enums.GameResult
    guessCount?: IntWithAggregatesFilter<"DailyChallenge"> | number
    timeSpent?: IntNullableWithAggregatesFilter<"DailyChallenge"> | number | null
    completedAt?: DateTimeWithAggregatesFilter<"DailyChallenge"> | Date | string
  }

  export type OperatorWhereInput = {
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    id?: StringFilter<"Operator"> | string
    name?: StringFilter<"Operator"> | string
    codename?: StringNullableFilter<"Operator"> | string | null
    rarity?: IntFilter<"Operator"> | number
    profession?: StringFilter<"Operator"> | string
    subProfession?: StringNullableFilter<"Operator"> | string | null
    race?: StringNullableFilter<"Operator"> | string | null
    birthplace?: StringNullableFilter<"Operator"> | string | null
    faction?: StringNullableFilter<"Operator"> | string | null
    nation?: StringNullableFilter<"Operator"> | string | null
    combatExperience?: StringNullableFilter<"Operator"> | string | null
    oripathy?: StringNullableFilter<"Operator"> | string | null
    isAlter?: BoolFilter<"Operator"> | boolean
    alterOf?: StringNullableFilter<"Operator"> | string | null
  }

  export type OperatorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    codename?: SortOrderInput | SortOrder
    rarity?: SortOrder
    profession?: SortOrder
    subProfession?: SortOrderInput | SortOrder
    race?: SortOrderInput | SortOrder
    birthplace?: SortOrderInput | SortOrder
    faction?: SortOrderInput | SortOrder
    nation?: SortOrderInput | SortOrder
    combatExperience?: SortOrderInput | SortOrder
    oripathy?: SortOrderInput | SortOrder
    isAlter?: SortOrder
    alterOf?: SortOrderInput | SortOrder
  }

  export type OperatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OperatorWhereInput | OperatorWhereInput[]
    OR?: OperatorWhereInput[]
    NOT?: OperatorWhereInput | OperatorWhereInput[]
    codename?: StringNullableFilter<"Operator"> | string | null
    rarity?: IntFilter<"Operator"> | number
    profession?: StringFilter<"Operator"> | string
    subProfession?: StringNullableFilter<"Operator"> | string | null
    race?: StringNullableFilter<"Operator"> | string | null
    birthplace?: StringNullableFilter<"Operator"> | string | null
    faction?: StringNullableFilter<"Operator"> | string | null
    nation?: StringNullableFilter<"Operator"> | string | null
    combatExperience?: StringNullableFilter<"Operator"> | string | null
    oripathy?: StringNullableFilter<"Operator"> | string | null
    isAlter?: BoolFilter<"Operator"> | boolean
    alterOf?: StringNullableFilter<"Operator"> | string | null
  }, "id" | "name">

  export type OperatorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    codename?: SortOrderInput | SortOrder
    rarity?: SortOrder
    profession?: SortOrder
    subProfession?: SortOrderInput | SortOrder
    race?: SortOrderInput | SortOrder
    birthplace?: SortOrderInput | SortOrder
    faction?: SortOrderInput | SortOrder
    nation?: SortOrderInput | SortOrder
    combatExperience?: SortOrderInput | SortOrder
    oripathy?: SortOrderInput | SortOrder
    isAlter?: SortOrder
    alterOf?: SortOrderInput | SortOrder
    _count?: OperatorCountOrderByAggregateInput
    _avg?: OperatorAvgOrderByAggregateInput
    _max?: OperatorMaxOrderByAggregateInput
    _min?: OperatorMinOrderByAggregateInput
    _sum?: OperatorSumOrderByAggregateInput
  }

  export type OperatorScalarWhereWithAggregatesInput = {
    AND?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    OR?: OperatorScalarWhereWithAggregatesInput[]
    NOT?: OperatorScalarWhereWithAggregatesInput | OperatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operator"> | string
    name?: StringWithAggregatesFilter<"Operator"> | string
    codename?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    rarity?: IntWithAggregatesFilter<"Operator"> | number
    profession?: StringWithAggregatesFilter<"Operator"> | string
    subProfession?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    race?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    birthplace?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    faction?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    nation?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    combatExperience?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    oripathy?: StringNullableWithAggregatesFilter<"Operator"> | string | null
    isAlter?: BoolWithAggregatesFilter<"Operator"> | boolean
    alterOf?: StringNullableWithAggregatesFilter<"Operator"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    ip?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    ip?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    ip?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountCreateInput = {
    id?: string
    provider: string
    providerId: string
    providerEmail?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOauthAccountsInput
  }

  export type OAuthAccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    providerId: string
    providerEmail?: string | null
    createdAt?: Date | string
  }

  export type OAuthAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOauthAccountsNestedInput
  }

  export type OAuthAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountCreateManyInput = {
    id?: string
    userId: string
    provider: string
    providerId: string
    providerEmail?: string | null
    createdAt?: Date | string
  }

  export type OAuthAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordCreateInput = {
    id?: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId?: string | null
    guessCount?: number
    timeSpent?: number | null
    shareGrid?: string | null
    playedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGameRecordsInput
  }

  export type GameRecordUncheckedCreateInput = {
    id?: string
    userId: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId?: string | null
    guessCount?: number
    timeSpent?: number | null
    shareGrid?: string | null
    playedAt?: Date | string
    createdAt?: Date | string
  }

  export type GameRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGameRecordsNestedInput
  }

  export type GameRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordCreateManyInput = {
    id?: string
    userId: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId?: string | null
    guessCount?: number
    timeSpent?: number | null
    shareGrid?: string | null
    playedAt?: Date | string
    createdAt?: Date | string
  }

  export type GameRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateInput = {
    id?: string
    achievement: string
    unlockedAt?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: string
    userId: string
    achievement: string
    unlockedAt?: Date | string
  }

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyInput = {
    id?: string
    userId: string
    achievement: string
    unlockedAt?: Date | string
  }

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    code: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutHostedRoomsInput
    players?: RoomPlayerCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    code: string
    hostId: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    players?: RoomPlayerUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedRoomsNestedInput
    players?: RoomPlayerUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: RoomPlayerUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    code: string
    hostId: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerCreateInput = {
    id?: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
    room: RoomCreateNestedOneWithoutPlayersInput
    user: UserCreateNestedOneWithoutRoomPlayersInput
  }

  export type RoomPlayerUncheckedCreateInput = {
    id?: string
    roomId: string
    userId: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
  }

  export type RoomPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPlayersNestedInput
    user?: UserUpdateOneRequiredWithoutRoomPlayersNestedInput
  }

  export type RoomPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerCreateManyInput = {
    id?: string
    roomId: string
    userId: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
  }

  export type RoomPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeCreateInput = {
    id?: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount?: number
    timeSpent?: number | null
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyChallengesInput
  }

  export type DailyChallengeUncheckedCreateInput = {
    id?: string
    userId: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount?: number
    timeSpent?: number | null
    completedAt?: Date | string
  }

  export type DailyChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyChallengesNestedInput
  }

  export type DailyChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeCreateManyInput = {
    id?: string
    userId: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount?: number
    timeSpent?: number | null
    completedAt?: Date | string
  }

  export type DailyChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatorCreateInput = {
    id?: string
    name: string
    codename?: string | null
    rarity: number
    profession: string
    subProfession?: string | null
    race?: string | null
    birthplace?: string | null
    faction?: string | null
    nation?: string | null
    combatExperience?: string | null
    oripathy?: string | null
    isAlter?: boolean
    alterOf?: string | null
  }

  export type OperatorUncheckedCreateInput = {
    id?: string
    name: string
    codename?: string | null
    rarity: number
    profession: string
    subProfession?: string | null
    race?: string | null
    birthplace?: string | null
    faction?: string | null
    nation?: string | null
    combatExperience?: string | null
    oripathy?: string | null
    isAlter?: boolean
    alterOf?: string | null
  }

  export type OperatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    codename?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    profession?: StringFieldUpdateOperationsInput | string
    subProfession?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    faction?: NullableStringFieldUpdateOperationsInput | string | null
    nation?: NullableStringFieldUpdateOperationsInput | string | null
    combatExperience?: NullableStringFieldUpdateOperationsInput | string | null
    oripathy?: NullableStringFieldUpdateOperationsInput | string | null
    isAlter?: BoolFieldUpdateOperationsInput | boolean
    alterOf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OperatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    codename?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    profession?: StringFieldUpdateOperationsInput | string
    subProfession?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    faction?: NullableStringFieldUpdateOperationsInput | string | null
    nation?: NullableStringFieldUpdateOperationsInput | string | null
    combatExperience?: NullableStringFieldUpdateOperationsInput | string | null
    oripathy?: NullableStringFieldUpdateOperationsInput | string | null
    isAlter?: BoolFieldUpdateOperationsInput | boolean
    alterOf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OperatorCreateManyInput = {
    id?: string
    name: string
    codename?: string | null
    rarity: number
    profession: string
    subProfession?: string | null
    race?: string | null
    birthplace?: string | null
    faction?: string | null
    nation?: string | null
    combatExperience?: string | null
    oripathy?: string | null
    isAlter?: boolean
    alterOf?: string | null
  }

  export type OperatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    codename?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    profession?: StringFieldUpdateOperationsInput | string
    subProfession?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    faction?: NullableStringFieldUpdateOperationsInput | string | null
    nation?: NullableStringFieldUpdateOperationsInput | string | null
    combatExperience?: NullableStringFieldUpdateOperationsInput | string | null
    oripathy?: NullableStringFieldUpdateOperationsInput | string | null
    isAlter?: BoolFieldUpdateOperationsInput | boolean
    alterOf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OperatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    codename?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: IntFieldUpdateOperationsInput | number
    profession?: StringFieldUpdateOperationsInput | string
    subProfession?: NullableStringFieldUpdateOperationsInput | string | null
    race?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace?: NullableStringFieldUpdateOperationsInput | string | null
    faction?: NullableStringFieldUpdateOperationsInput | string | null
    nation?: NullableStringFieldUpdateOperationsInput | string | null
    combatExperience?: NullableStringFieldUpdateOperationsInput | string | null
    oripathy?: NullableStringFieldUpdateOperationsInput | string | null
    isAlter?: BoolFieldUpdateOperationsInput | boolean
    alterOf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type OAuthAccountListRelationFilter = {
    every?: OAuthAccountWhereInput
    some?: OAuthAccountWhereInput
    none?: OAuthAccountWhereInput
  }

  export type GameRecordListRelationFilter = {
    every?: GameRecordWhereInput
    some?: GameRecordWhereInput
    none?: GameRecordWhereInput
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type RoomPlayerListRelationFilter = {
    every?: RoomPlayerWhereInput
    some?: RoomPlayerWhereInput
    none?: RoomPlayerWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type DailyChallengeListRelationFilter = {
    every?: DailyChallengeWhereInput
    some?: DailyChallengeWhereInput
    none?: DailyChallengeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    gender?: SortOrder
    points?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    gender?: SortOrder
    points?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    gender?: SortOrder
    points?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthAccountProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type OAuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    providerEmail?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    providerEmail?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    providerEmail?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type EnumGameResultFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameResult[]
    notIn?: $Enums.GameResult[]
    not?: NestedEnumGameResultFilter<$PrismaModel> | $Enums.GameResult
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GameRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    result?: SortOrder
    targetId?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrder
    shareGrid?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GameRecordAvgOrderByAggregateInput = {
    guessCount?: SortOrder
    timeSpent?: SortOrder
  }

  export type GameRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    result?: SortOrder
    targetId?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrder
    shareGrid?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GameRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    result?: SortOrder
    targetId?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrder
    shareGrid?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GameRecordSumOrderByAggregateInput = {
    guessCount?: SortOrder
    timeSpent?: SortOrder
  }

  export type EnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type EnumGameResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameResult[]
    notIn?: $Enums.GameResult[]
    not?: NestedEnumGameResultWithAggregatesFilter<$PrismaModel> | $Enums.GameResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameResultFilter<$PrismaModel>
    _max?: NestedEnumGameResultFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserAchievementUserIdAchievementCompoundUniqueInput = {
    userId: string
    achievement: string
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievement?: SortOrder
    unlockedAt?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievement?: SortOrder
    unlockedAt?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievement?: SortOrder
    unlockedAt?: SortOrder
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    roundCount?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    maxPlayers?: SortOrder
    roundCount?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    roundCount?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    hostId?: SortOrder
    status?: SortOrder
    maxPlayers?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    roundCount?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    maxPlayers?: SortOrder
    roundCount?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomPlayerRoomIdUserIdCompoundUniqueInput = {
    roomId: string
    userId: string
  }

  export type RoomPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    isReady?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoomPlayerAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RoomPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    isReady?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoomPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    isReady?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoomPlayerSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type DailyChallengeUserIdDateCompoundUniqueInput = {
    userId: string
    date: string
  }

  export type DailyChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    targetId?: SortOrder
    result?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyChallengeAvgOrderByAggregateInput = {
    guessCount?: SortOrder
    timeSpent?: SortOrder
  }

  export type DailyChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    targetId?: SortOrder
    result?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    targetId?: SortOrder
    result?: SortOrder
    guessCount?: SortOrder
    timeSpent?: SortOrder
    completedAt?: SortOrder
  }

  export type DailyChallengeSumOrderByAggregateInput = {
    guessCount?: SortOrder
    timeSpent?: SortOrder
  }

  export type OperatorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    codename?: SortOrder
    rarity?: SortOrder
    profession?: SortOrder
    subProfession?: SortOrder
    race?: SortOrder
    birthplace?: SortOrder
    faction?: SortOrder
    nation?: SortOrder
    combatExperience?: SortOrder
    oripathy?: SortOrder
    isAlter?: SortOrder
    alterOf?: SortOrder
  }

  export type OperatorAvgOrderByAggregateInput = {
    rarity?: SortOrder
  }

  export type OperatorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    codename?: SortOrder
    rarity?: SortOrder
    profession?: SortOrder
    subProfession?: SortOrder
    race?: SortOrder
    birthplace?: SortOrder
    faction?: SortOrder
    nation?: SortOrder
    combatExperience?: SortOrder
    oripathy?: SortOrder
    isAlter?: SortOrder
    alterOf?: SortOrder
  }

  export type OperatorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    codename?: SortOrder
    rarity?: SortOrder
    profession?: SortOrder
    subProfession?: SortOrder
    race?: SortOrder
    birthplace?: SortOrder
    faction?: SortOrder
    nation?: SortOrder
    combatExperience?: SortOrder
    oripathy?: SortOrder
    isAlter?: SortOrder
    alterOf?: SortOrder
  }

  export type OperatorSumOrderByAggregateInput = {
    rarity?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type OAuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
  }

  export type GameRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<GameRecordCreateWithoutUserInput, GameRecordUncheckedCreateWithoutUserInput> | GameRecordCreateWithoutUserInput[] | GameRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutUserInput | GameRecordCreateOrConnectWithoutUserInput[]
    createMany?: GameRecordCreateManyUserInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type RoomPlayerCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomPlayerCreateWithoutUserInput, RoomPlayerUncheckedCreateWithoutUserInput> | RoomPlayerCreateWithoutUserInput[] | RoomPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutUserInput | RoomPlayerCreateOrConnectWithoutUserInput[]
    createMany?: RoomPlayerCreateManyUserInputEnvelope
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutHostInput = {
    create?: XOR<RoomCreateWithoutHostInput, RoomUncheckedCreateWithoutHostInput> | RoomCreateWithoutHostInput[] | RoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostInput | RoomCreateOrConnectWithoutHostInput[]
    createMany?: RoomCreateManyHostInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type DailyChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyChallengeCreateWithoutUserInput, DailyChallengeUncheckedCreateWithoutUserInput> | DailyChallengeCreateWithoutUserInput[] | DailyChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutUserInput | DailyChallengeCreateOrConnectWithoutUserInput[]
    createMany?: DailyChallengeCreateManyUserInputEnvelope
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type OAuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
  }

  export type GameRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameRecordCreateWithoutUserInput, GameRecordUncheckedCreateWithoutUserInput> | GameRecordCreateWithoutUserInput[] | GameRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutUserInput | GameRecordCreateOrConnectWithoutUserInput[]
    createMany?: GameRecordCreateManyUserInputEnvelope
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type RoomPlayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomPlayerCreateWithoutUserInput, RoomPlayerUncheckedCreateWithoutUserInput> | RoomPlayerCreateWithoutUserInput[] | RoomPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutUserInput | RoomPlayerCreateOrConnectWithoutUserInput[]
    createMany?: RoomPlayerCreateManyUserInputEnvelope
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<RoomCreateWithoutHostInput, RoomUncheckedCreateWithoutHostInput> | RoomCreateWithoutHostInput[] | RoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostInput | RoomCreateOrConnectWithoutHostInput[]
    createMany?: RoomCreateManyHostInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type DailyChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyChallengeCreateWithoutUserInput, DailyChallengeUncheckedCreateWithoutUserInput> | DailyChallengeCreateWithoutUserInput[] | DailyChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutUserInput | DailyChallengeCreateOrConnectWithoutUserInput[]
    createMany?: DailyChallengeCreateManyUserInputEnvelope
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type OAuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccountUpsertWithWhereUniqueWithoutUserInput | OAuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    set?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    disconnect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    delete?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    update?: OAuthAccountUpdateWithWhereUniqueWithoutUserInput | OAuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccountUpdateManyWithWhereWithoutUserInput | OAuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
  }

  export type GameRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameRecordCreateWithoutUserInput, GameRecordUncheckedCreateWithoutUserInput> | GameRecordCreateWithoutUserInput[] | GameRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutUserInput | GameRecordCreateOrConnectWithoutUserInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutUserInput | GameRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameRecordCreateManyUserInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutUserInput | GameRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutUserInput | GameRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type RoomPlayerUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomPlayerCreateWithoutUserInput, RoomPlayerUncheckedCreateWithoutUserInput> | RoomPlayerCreateWithoutUserInput[] | RoomPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutUserInput | RoomPlayerCreateOrConnectWithoutUserInput[]
    upsert?: RoomPlayerUpsertWithWhereUniqueWithoutUserInput | RoomPlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomPlayerCreateManyUserInputEnvelope
    set?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    disconnect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    delete?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    update?: RoomPlayerUpdateWithWhereUniqueWithoutUserInput | RoomPlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomPlayerUpdateManyWithWhereWithoutUserInput | RoomPlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomPlayerScalarWhereInput | RoomPlayerScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutHostNestedInput = {
    create?: XOR<RoomCreateWithoutHostInput, RoomUncheckedCreateWithoutHostInput> | RoomCreateWithoutHostInput[] | RoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostInput | RoomCreateOrConnectWithoutHostInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHostInput | RoomUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: RoomCreateManyHostInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHostInput | RoomUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHostInput | RoomUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type DailyChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyChallengeCreateWithoutUserInput, DailyChallengeUncheckedCreateWithoutUserInput> | DailyChallengeCreateWithoutUserInput[] | DailyChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutUserInput | DailyChallengeCreateOrConnectWithoutUserInput[]
    upsert?: DailyChallengeUpsertWithWhereUniqueWithoutUserInput | DailyChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyChallengeCreateManyUserInputEnvelope
    set?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    disconnect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    delete?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    update?: DailyChallengeUpdateWithWhereUniqueWithoutUserInput | DailyChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyChallengeUpdateManyWithWhereWithoutUserInput | DailyChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type OAuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput> | OAuthAccountCreateWithoutUserInput[] | OAuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccountCreateOrConnectWithoutUserInput | OAuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccountUpsertWithWhereUniqueWithoutUserInput | OAuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccountCreateManyUserInputEnvelope
    set?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    disconnect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    delete?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    connect?: OAuthAccountWhereUniqueInput | OAuthAccountWhereUniqueInput[]
    update?: OAuthAccountUpdateWithWhereUniqueWithoutUserInput | OAuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccountUpdateManyWithWhereWithoutUserInput | OAuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
  }

  export type GameRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameRecordCreateWithoutUserInput, GameRecordUncheckedCreateWithoutUserInput> | GameRecordCreateWithoutUserInput[] | GameRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameRecordCreateOrConnectWithoutUserInput | GameRecordCreateOrConnectWithoutUserInput[]
    upsert?: GameRecordUpsertWithWhereUniqueWithoutUserInput | GameRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameRecordCreateManyUserInputEnvelope
    set?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    disconnect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    delete?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    connect?: GameRecordWhereUniqueInput | GameRecordWhereUniqueInput[]
    update?: GameRecordUpdateWithWhereUniqueWithoutUserInput | GameRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameRecordUpdateManyWithWhereWithoutUserInput | GameRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type RoomPlayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomPlayerCreateWithoutUserInput, RoomPlayerUncheckedCreateWithoutUserInput> | RoomPlayerCreateWithoutUserInput[] | RoomPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutUserInput | RoomPlayerCreateOrConnectWithoutUserInput[]
    upsert?: RoomPlayerUpsertWithWhereUniqueWithoutUserInput | RoomPlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomPlayerCreateManyUserInputEnvelope
    set?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    disconnect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    delete?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    update?: RoomPlayerUpdateWithWhereUniqueWithoutUserInput | RoomPlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomPlayerUpdateManyWithWhereWithoutUserInput | RoomPlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomPlayerScalarWhereInput | RoomPlayerScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<RoomCreateWithoutHostInput, RoomUncheckedCreateWithoutHostInput> | RoomCreateWithoutHostInput[] | RoomUncheckedCreateWithoutHostInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostInput | RoomCreateOrConnectWithoutHostInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHostInput | RoomUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: RoomCreateManyHostInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHostInput | RoomUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHostInput | RoomUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type DailyChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyChallengeCreateWithoutUserInput, DailyChallengeUncheckedCreateWithoutUserInput> | DailyChallengeCreateWithoutUserInput[] | DailyChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyChallengeCreateOrConnectWithoutUserInput | DailyChallengeCreateOrConnectWithoutUserInput[]
    upsert?: DailyChallengeUpsertWithWhereUniqueWithoutUserInput | DailyChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyChallengeCreateManyUserInputEnvelope
    set?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    disconnect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    delete?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    connect?: DailyChallengeWhereUniqueInput | DailyChallengeWhereUniqueInput[]
    update?: DailyChallengeUpdateWithWhereUniqueWithoutUserInput | DailyChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyChallengeUpdateManyWithWhereWithoutUserInput | DailyChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    upsert?: UserUpsertWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthAccountsInput, UserUpdateWithoutOauthAccountsInput>, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserCreateNestedOneWithoutGameRecordsInput = {
    create?: XOR<UserCreateWithoutGameRecordsInput, UserUncheckedCreateWithoutGameRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGameModeFieldUpdateOperationsInput = {
    set?: $Enums.GameMode
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type EnumGameResultFieldUpdateOperationsInput = {
    set?: $Enums.GameResult
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGameRecordsNestedInput = {
    create?: XOR<UserCreateWithoutGameRecordsInput, UserUncheckedCreateWithoutGameRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameRecordsInput
    upsert?: UserUpsertWithoutGameRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameRecordsInput, UserUpdateWithoutGameRecordsInput>, UserUncheckedUpdateWithoutGameRecordsInput>
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserCreateNestedOneWithoutHostedRoomsInput = {
    create?: XOR<UserCreateWithoutHostedRoomsInput, UserUncheckedCreateWithoutHostedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomPlayerCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomPlayerCreateWithoutRoomInput, RoomPlayerUncheckedCreateWithoutRoomInput> | RoomPlayerCreateWithoutRoomInput[] | RoomPlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutRoomInput | RoomPlayerCreateOrConnectWithoutRoomInput[]
    createMany?: RoomPlayerCreateManyRoomInputEnvelope
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
  }

  export type RoomPlayerUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomPlayerCreateWithoutRoomInput, RoomPlayerUncheckedCreateWithoutRoomInput> | RoomPlayerCreateWithoutRoomInput[] | RoomPlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutRoomInput | RoomPlayerCreateOrConnectWithoutRoomInput[]
    createMany?: RoomPlayerCreateManyRoomInputEnvelope
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type UserUpdateOneRequiredWithoutHostedRoomsNestedInput = {
    create?: XOR<UserCreateWithoutHostedRoomsInput, UserUncheckedCreateWithoutHostedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostedRoomsInput
    upsert?: UserUpsertWithoutHostedRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostedRoomsInput, UserUpdateWithoutHostedRoomsInput>, UserUncheckedUpdateWithoutHostedRoomsInput>
  }

  export type RoomPlayerUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomPlayerCreateWithoutRoomInput, RoomPlayerUncheckedCreateWithoutRoomInput> | RoomPlayerCreateWithoutRoomInput[] | RoomPlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutRoomInput | RoomPlayerCreateOrConnectWithoutRoomInput[]
    upsert?: RoomPlayerUpsertWithWhereUniqueWithoutRoomInput | RoomPlayerUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomPlayerCreateManyRoomInputEnvelope
    set?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    disconnect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    delete?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    update?: RoomPlayerUpdateWithWhereUniqueWithoutRoomInput | RoomPlayerUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomPlayerUpdateManyWithWhereWithoutRoomInput | RoomPlayerUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomPlayerScalarWhereInput | RoomPlayerScalarWhereInput[]
  }

  export type RoomPlayerUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomPlayerCreateWithoutRoomInput, RoomPlayerUncheckedCreateWithoutRoomInput> | RoomPlayerCreateWithoutRoomInput[] | RoomPlayerUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPlayerCreateOrConnectWithoutRoomInput | RoomPlayerCreateOrConnectWithoutRoomInput[]
    upsert?: RoomPlayerUpsertWithWhereUniqueWithoutRoomInput | RoomPlayerUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomPlayerCreateManyRoomInputEnvelope
    set?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    disconnect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    delete?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    connect?: RoomPlayerWhereUniqueInput | RoomPlayerWhereUniqueInput[]
    update?: RoomPlayerUpdateWithWhereUniqueWithoutRoomInput | RoomPlayerUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomPlayerUpdateManyWithWhereWithoutRoomInput | RoomPlayerUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomPlayerScalarWhereInput | RoomPlayerScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutPlayersInput = {
    create?: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPlayersInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomPlayersInput = {
    create?: XOR<UserCreateWithoutRoomPlayersInput, UserUncheckedCreateWithoutRoomPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomPlayersInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPlayersInput
    upsert?: RoomUpsertWithoutPlayersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPlayersInput, RoomUpdateWithoutPlayersInput>, RoomUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateOneRequiredWithoutRoomPlayersNestedInput = {
    create?: XOR<UserCreateWithoutRoomPlayersInput, UserUncheckedCreateWithoutRoomPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomPlayersInput
    upsert?: UserUpsertWithoutRoomPlayersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomPlayersInput, UserUpdateWithoutRoomPlayersInput>, UserUncheckedUpdateWithoutRoomPlayersInput>
  }

  export type UserCreateNestedOneWithoutDailyChallengesInput = {
    create?: XOR<UserCreateWithoutDailyChallengesInput, UserUncheckedCreateWithoutDailyChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyChallengesNestedInput = {
    create?: XOR<UserCreateWithoutDailyChallengesInput, UserUncheckedCreateWithoutDailyChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyChallengesInput
    upsert?: UserUpsertWithoutDailyChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyChallengesInput, UserUpdateWithoutDailyChallengesInput>, UserUncheckedUpdateWithoutDailyChallengesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumGameResultFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameResult[]
    notIn?: $Enums.GameResult[]
    not?: NestedEnumGameResultFilter<$PrismaModel> | $Enums.GameResult
  }

  export type NestedEnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumGameResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameResult | EnumGameResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameResult[]
    notIn?: $Enums.GameResult[]
    not?: NestedEnumGameResultWithAggregatesFilter<$PrismaModel> | $Enums.GameResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameResultFilter<$PrismaModel>
    _max?: NestedEnumGameResultFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    ip?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    ip?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type OAuthAccountCreateWithoutUserInput = {
    id?: string
    provider: string
    providerId: string
    providerEmail?: string | null
    createdAt?: Date | string
  }

  export type OAuthAccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerId: string
    providerEmail?: string | null
    createdAt?: Date | string
  }

  export type OAuthAccountCreateOrConnectWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    create: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccountCreateManyUserInputEnvelope = {
    data: OAuthAccountCreateManyUserInput | OAuthAccountCreateManyUserInput[]
  }

  export type GameRecordCreateWithoutUserInput = {
    id?: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId?: string | null
    guessCount?: number
    timeSpent?: number | null
    shareGrid?: string | null
    playedAt?: Date | string
    createdAt?: Date | string
  }

  export type GameRecordUncheckedCreateWithoutUserInput = {
    id?: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId?: string | null
    guessCount?: number
    timeSpent?: number | null
    shareGrid?: string | null
    playedAt?: Date | string
    createdAt?: Date | string
  }

  export type GameRecordCreateOrConnectWithoutUserInput = {
    where: GameRecordWhereUniqueInput
    create: XOR<GameRecordCreateWithoutUserInput, GameRecordUncheckedCreateWithoutUserInput>
  }

  export type GameRecordCreateManyUserInputEnvelope = {
    data: GameRecordCreateManyUserInput | GameRecordCreateManyUserInput[]
  }

  export type UserAchievementCreateWithoutUserInput = {
    id?: string
    achievement: string
    unlockedAt?: Date | string
  }

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: string
    achievement: string
    unlockedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementCreateManyUserInputEnvelope = {
    data: UserAchievementCreateManyUserInput | UserAchievementCreateManyUserInput[]
  }

  export type RoomPlayerCreateWithoutUserInput = {
    id?: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
    room: RoomCreateNestedOneWithoutPlayersInput
  }

  export type RoomPlayerUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
  }

  export type RoomPlayerCreateOrConnectWithoutUserInput = {
    where: RoomPlayerWhereUniqueInput
    create: XOR<RoomPlayerCreateWithoutUserInput, RoomPlayerUncheckedCreateWithoutUserInput>
  }

  export type RoomPlayerCreateManyUserInputEnvelope = {
    data: RoomPlayerCreateManyUserInput | RoomPlayerCreateManyUserInput[]
  }

  export type RoomCreateWithoutHostInput = {
    id?: string
    code: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    players?: RoomPlayerCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHostInput = {
    id?: string
    code: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    players?: RoomPlayerUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHostInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHostInput, RoomUncheckedCreateWithoutHostInput>
  }

  export type RoomCreateManyHostInputEnvelope = {
    data: RoomCreateManyHostInput | RoomCreateManyHostInput[]
  }

  export type DailyChallengeCreateWithoutUserInput = {
    id?: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount?: number
    timeSpent?: number | null
    completedAt?: Date | string
  }

  export type DailyChallengeUncheckedCreateWithoutUserInput = {
    id?: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount?: number
    timeSpent?: number | null
    completedAt?: Date | string
  }

  export type DailyChallengeCreateOrConnectWithoutUserInput = {
    where: DailyChallengeWhereUniqueInput
    create: XOR<DailyChallengeCreateWithoutUserInput, DailyChallengeUncheckedCreateWithoutUserInput>
  }

  export type DailyChallengeCreateManyUserInputEnvelope = {
    data: DailyChallengeCreateManyUserInput | DailyChallengeCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    ip?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type OAuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    update: XOR<OAuthAccountUpdateWithoutUserInput, OAuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthAccountCreateWithoutUserInput, OAuthAccountUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthAccountWhereUniqueInput
    data: XOR<OAuthAccountUpdateWithoutUserInput, OAuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type OAuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: OAuthAccountScalarWhereInput
    data: XOR<OAuthAccountUpdateManyMutationInput, OAuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthAccountScalarWhereInput = {
    AND?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
    OR?: OAuthAccountScalarWhereInput[]
    NOT?: OAuthAccountScalarWhereInput | OAuthAccountScalarWhereInput[]
    id?: StringFilter<"OAuthAccount"> | string
    userId?: StringFilter<"OAuthAccount"> | string
    provider?: StringFilter<"OAuthAccount"> | string
    providerId?: StringFilter<"OAuthAccount"> | string
    providerEmail?: StringNullableFilter<"OAuthAccount"> | string | null
    createdAt?: DateTimeFilter<"OAuthAccount"> | Date | string
  }

  export type GameRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: GameRecordWhereUniqueInput
    update: XOR<GameRecordUpdateWithoutUserInput, GameRecordUncheckedUpdateWithoutUserInput>
    create: XOR<GameRecordCreateWithoutUserInput, GameRecordUncheckedCreateWithoutUserInput>
  }

  export type GameRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: GameRecordWhereUniqueInput
    data: XOR<GameRecordUpdateWithoutUserInput, GameRecordUncheckedUpdateWithoutUserInput>
  }

  export type GameRecordUpdateManyWithWhereWithoutUserInput = {
    where: GameRecordScalarWhereInput
    data: XOR<GameRecordUpdateManyMutationInput, GameRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type GameRecordScalarWhereInput = {
    AND?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
    OR?: GameRecordScalarWhereInput[]
    NOT?: GameRecordScalarWhereInput | GameRecordScalarWhereInput[]
    id?: StringFilter<"GameRecord"> | string
    userId?: StringFilter<"GameRecord"> | string
    mode?: EnumGameModeFilter<"GameRecord"> | $Enums.GameMode
    difficulty?: EnumDifficultyFilter<"GameRecord"> | $Enums.Difficulty
    result?: EnumGameResultFilter<"GameRecord"> | $Enums.GameResult
    targetId?: StringNullableFilter<"GameRecord"> | string | null
    guessCount?: IntFilter<"GameRecord"> | number
    timeSpent?: IntNullableFilter<"GameRecord"> | number | null
    shareGrid?: StringNullableFilter<"GameRecord"> | string | null
    playedAt?: DateTimeFilter<"GameRecord"> | Date | string
    createdAt?: DateTimeFilter<"GameRecord"> | Date | string
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievement?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
  }

  export type RoomPlayerUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomPlayerWhereUniqueInput
    update: XOR<RoomPlayerUpdateWithoutUserInput, RoomPlayerUncheckedUpdateWithoutUserInput>
    create: XOR<RoomPlayerCreateWithoutUserInput, RoomPlayerUncheckedCreateWithoutUserInput>
  }

  export type RoomPlayerUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomPlayerWhereUniqueInput
    data: XOR<RoomPlayerUpdateWithoutUserInput, RoomPlayerUncheckedUpdateWithoutUserInput>
  }

  export type RoomPlayerUpdateManyWithWhereWithoutUserInput = {
    where: RoomPlayerScalarWhereInput
    data: XOR<RoomPlayerUpdateManyMutationInput, RoomPlayerUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomPlayerScalarWhereInput = {
    AND?: RoomPlayerScalarWhereInput | RoomPlayerScalarWhereInput[]
    OR?: RoomPlayerScalarWhereInput[]
    NOT?: RoomPlayerScalarWhereInput | RoomPlayerScalarWhereInput[]
    id?: StringFilter<"RoomPlayer"> | string
    roomId?: StringFilter<"RoomPlayer"> | string
    userId?: StringFilter<"RoomPlayer"> | string
    score?: IntFilter<"RoomPlayer"> | number
    isReady?: BoolFilter<"RoomPlayer"> | boolean
    joinedAt?: DateTimeFilter<"RoomPlayer"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutHostInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHostInput, RoomUncheckedUpdateWithoutHostInput>
    create: XOR<RoomCreateWithoutHostInput, RoomUncheckedCreateWithoutHostInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHostInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHostInput, RoomUncheckedUpdateWithoutHostInput>
  }

  export type RoomUpdateManyWithWhereWithoutHostInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHostInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    code?: StringFilter<"Room"> | string
    hostId?: StringFilter<"Room"> | string
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    maxPlayers?: IntFilter<"Room"> | number
    mode?: EnumGameModeFilter<"Room"> | $Enums.GameMode
    difficulty?: EnumDifficultyFilter<"Room"> | $Enums.Difficulty
    roundCount?: IntFilter<"Room"> | number
    startedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type DailyChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyChallengeWhereUniqueInput
    update: XOR<DailyChallengeUpdateWithoutUserInput, DailyChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<DailyChallengeCreateWithoutUserInput, DailyChallengeUncheckedCreateWithoutUserInput>
  }

  export type DailyChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyChallengeWhereUniqueInput
    data: XOR<DailyChallengeUpdateWithoutUserInput, DailyChallengeUncheckedUpdateWithoutUserInput>
  }

  export type DailyChallengeUpdateManyWithWhereWithoutUserInput = {
    where: DailyChallengeScalarWhereInput
    data: XOR<DailyChallengeUpdateManyMutationInput, DailyChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyChallengeScalarWhereInput = {
    AND?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
    OR?: DailyChallengeScalarWhereInput[]
    NOT?: DailyChallengeScalarWhereInput | DailyChallengeScalarWhereInput[]
    id?: StringFilter<"DailyChallenge"> | string
    userId?: StringFilter<"DailyChallenge"> | string
    date?: StringFilter<"DailyChallenge"> | string
    targetId?: StringFilter<"DailyChallenge"> | string
    result?: EnumGameResultFilter<"DailyChallenge"> | $Enums.GameResult
    guessCount?: IntFilter<"DailyChallenge"> | number
    timeSpent?: IntNullableFilter<"DailyChallenge"> | number | null
    completedAt?: DateTimeFilter<"DailyChallenge"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOauthAccountsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
  }

  export type UserUpsertWithoutOauthAccountsInput = {
    update: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGameRecordsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGameRecordsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGameRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameRecordsInput, UserUncheckedCreateWithoutGameRecordsInput>
  }

  export type UserUpsertWithoutGameRecordsInput = {
    update: XOR<UserUpdateWithoutGameRecordsInput, UserUncheckedUpdateWithoutGameRecordsInput>
    create: XOR<UserCreateWithoutGameRecordsInput, UserUncheckedCreateWithoutGameRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameRecordsInput, UserUncheckedUpdateWithoutGameRecordsInput>
  }

  export type UserUpdateWithoutGameRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGameRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAchievementsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHostedRoomsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHostedRoomsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHostedRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostedRoomsInput, UserUncheckedCreateWithoutHostedRoomsInput>
  }

  export type RoomPlayerCreateWithoutRoomInput = {
    id?: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutRoomPlayersInput
  }

  export type RoomPlayerUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
  }

  export type RoomPlayerCreateOrConnectWithoutRoomInput = {
    where: RoomPlayerWhereUniqueInput
    create: XOR<RoomPlayerCreateWithoutRoomInput, RoomPlayerUncheckedCreateWithoutRoomInput>
  }

  export type RoomPlayerCreateManyRoomInputEnvelope = {
    data: RoomPlayerCreateManyRoomInput | RoomPlayerCreateManyRoomInput[]
  }

  export type UserUpsertWithoutHostedRoomsInput = {
    update: XOR<UserUpdateWithoutHostedRoomsInput, UserUncheckedUpdateWithoutHostedRoomsInput>
    create: XOR<UserCreateWithoutHostedRoomsInput, UserUncheckedCreateWithoutHostedRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostedRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostedRoomsInput, UserUncheckedUpdateWithoutHostedRoomsInput>
  }

  export type UserUpdateWithoutHostedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHostedRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomPlayerUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomPlayerWhereUniqueInput
    update: XOR<RoomPlayerUpdateWithoutRoomInput, RoomPlayerUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomPlayerCreateWithoutRoomInput, RoomPlayerUncheckedCreateWithoutRoomInput>
  }

  export type RoomPlayerUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomPlayerWhereUniqueInput
    data: XOR<RoomPlayerUpdateWithoutRoomInput, RoomPlayerUncheckedUpdateWithoutRoomInput>
  }

  export type RoomPlayerUpdateManyWithWhereWithoutRoomInput = {
    where: RoomPlayerScalarWhereInput
    data: XOR<RoomPlayerUpdateManyMutationInput, RoomPlayerUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutPlayersInput = {
    id?: string
    code: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutHostedRoomsInput
  }

  export type RoomUncheckedCreateWithoutPlayersInput = {
    id?: string
    code: string
    hostId: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutPlayersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
  }

  export type UserCreateWithoutRoomPlayersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomPlayersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
    dailyChallenges?: DailyChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomPlayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomPlayersInput, UserUncheckedCreateWithoutRoomPlayersInput>
  }

  export type RoomUpsertWithoutPlayersInput = {
    update: XOR<RoomUpdateWithoutPlayersInput, RoomUncheckedUpdateWithoutPlayersInput>
    create: XOR<RoomCreateWithoutPlayersInput, RoomUncheckedCreateWithoutPlayersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPlayersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPlayersInput, RoomUncheckedUpdateWithoutPlayersInput>
  }

  export type RoomUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostedRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutRoomPlayersInput = {
    update: XOR<UserUpdateWithoutRoomPlayersInput, UserUncheckedUpdateWithoutRoomPlayersInput>
    create: XOR<UserCreateWithoutRoomPlayersInput, UserUncheckedCreateWithoutRoomPlayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomPlayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomPlayersInput, UserUncheckedUpdateWithoutRoomPlayersInput>
  }

  export type UserUpdateWithoutRoomPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
    dailyChallenges?: DailyChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyChallengesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerCreateNestedManyWithoutUserInput
    hostedRooms?: RoomCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutDailyChallengesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    avatar?: string | null
    bio?: string | null
    gender?: $Enums.Gender
    points?: number
    role?: $Enums.UserRole
    isVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuthAccountUncheckedCreateNestedManyWithoutUserInput
    gameRecords?: GameRecordUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    roomPlayers?: RoomPlayerUncheckedCreateNestedManyWithoutUserInput
    hostedRooms?: RoomUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutDailyChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyChallengesInput, UserUncheckedCreateWithoutDailyChallengesInput>
  }

  export type UserUpsertWithoutDailyChallengesInput = {
    update: XOR<UserUpdateWithoutDailyChallengesInput, UserUncheckedUpdateWithoutDailyChallengesInput>
    create: XOR<UserCreateWithoutDailyChallengesInput, UserUncheckedCreateWithoutDailyChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyChallengesInput, UserUncheckedUpdateWithoutDailyChallengesInput>
  }

  export type UserUpdateWithoutDailyChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    points?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuthAccountUncheckedUpdateManyWithoutUserNestedInput
    gameRecords?: GameRecordUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    roomPlayers?: RoomPlayerUncheckedUpdateManyWithoutUserNestedInput
    hostedRooms?: RoomUncheckedUpdateManyWithoutHostNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    ip?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthAccountCreateManyUserInput = {
    id?: string
    provider: string
    providerId: string
    providerEmail?: string | null
    createdAt?: Date | string
  }

  export type GameRecordCreateManyUserInput = {
    id?: string
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    result: $Enums.GameResult
    targetId?: string | null
    guessCount?: number
    timeSpent?: number | null
    shareGrid?: string | null
    playedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserAchievementCreateManyUserInput = {
    id?: string
    achievement: string
    unlockedAt?: Date | string
  }

  export type RoomPlayerCreateManyUserInput = {
    id?: string
    roomId: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
  }

  export type RoomCreateManyHostInput = {
    id?: string
    code: string
    status?: $Enums.RoomStatus
    maxPlayers?: number
    mode: $Enums.GameMode
    difficulty: $Enums.Difficulty
    roundCount?: number
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DailyChallengeCreateManyUserInput = {
    id?: string
    date: string
    targetId: string
    result: $Enums.GameResult
    guessCount?: number
    timeSpent?: number | null
    completedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    shareGrid?: NullableStringFieldUpdateOperationsInput | string | null
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievement?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type RoomPlayerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: RoomPlayerUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: RoomPlayerUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    roundCount?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    result?: EnumGameResultFieldUpdateOperationsInput | $Enums.GameResult
    guessCount?: IntFieldUpdateOperationsInput | number
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerCreateManyRoomInput = {
    id?: string
    userId: string
    score?: number
    isReady?: boolean
    joinedAt?: Date | string
  }

  export type RoomPlayerUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomPlayersNestedInput
  }

  export type RoomPlayerUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPlayerUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}