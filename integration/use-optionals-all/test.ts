/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import Long = require("long");

export const protobufPackage = "optionalstest";

export enum StateEnum {
  UNKNOWN = 0,
  ON = 2,
  OFF = 3,
  UNRECOGNIZED = -1,
}

export function stateEnumFromJSON(object: any): StateEnum {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return StateEnum.UNKNOWN;
    case 2:
    case "ON":
      return StateEnum.ON;
    case 3:
    case "OFF":
      return StateEnum.OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StateEnum.UNRECOGNIZED;
  }
}

export function stateEnumToJSON(object: StateEnum): string {
  switch (object) {
    case StateEnum.UNKNOWN:
      return "UNKNOWN";
    case StateEnum.ON:
      return "ON";
    case StateEnum.OFF:
      return "OFF";
    case StateEnum.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface OptionalsTest {
  id?: number | undefined;
  child?: Child | undefined;
  state?: StateEnum | undefined;
  long?: number | undefined;
  truth?: boolean | undefined;
  description?: string | undefined;
  data?: Uint8Array | undefined;
  repId?: number[] | undefined;
  repChild?: Child[] | undefined;
  repState?: StateEnum[] | undefined;
  repLong?: number[] | undefined;
  repTruth?: boolean[] | undefined;
  repDescription?: string[] | undefined;
  repData?: Uint8Array[] | undefined;
  optId?: number | undefined;
  optChild?: Child | undefined;
  optState?: StateEnum | undefined;
  optLong?: number | undefined;
  optTruth?: boolean | undefined;
  optDescription?: string | undefined;
  optData?: Uint8Array | undefined;
  translations?: { [key: string]: string } | undefined;
  timestamp?: Date | undefined;
}

export interface OptionalsTest_TranslationsEntry {
  key: string;
  value: string;
}

export interface Child {
}

function createBaseOptionalsTest(): OptionalsTest {
  return {
    id: 0,
    child: undefined,
    state: 0,
    long: 0,
    truth: false,
    description: "",
    data: new Uint8Array(0),
    repId: [],
    repChild: [],
    repState: [],
    repLong: [],
    repTruth: [],
    repDescription: [],
    repData: [],
    optId: undefined,
    optChild: undefined,
    optState: undefined,
    optLong: undefined,
    optTruth: undefined,
    optDescription: undefined,
    optData: undefined,
    translations: {},
    timestamp: undefined,
  };
}

export const OptionalsTest = {
  encode(message: OptionalsTest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.child !== undefined) {
      Child.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== undefined && message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.long !== undefined && message.long !== 0) {
      writer.uint32(32).int64(message.long);
    }
    if (message.truth === true) {
      writer.uint32(40).bool(message.truth);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.data !== undefined && message.data.length !== 0) {
      writer.uint32(58).bytes(message.data);
    }
    if (message.repId !== undefined && message.repId.length !== 0) {
      writer.uint32(90).fork();
      for (const v of message.repId) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.repChild !== undefined && message.repChild.length !== 0) {
      for (const v of message.repChild) {
        Child.encode(v!, writer.uint32(98).fork()).ldelim();
      }
    }
    if (message.repState !== undefined && message.repState.length !== 0) {
      writer.uint32(106).fork();
      for (const v of message.repState) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.repLong !== undefined && message.repLong.length !== 0) {
      writer.uint32(114).fork();
      for (const v of message.repLong) {
        writer.int64(v);
      }
      writer.ldelim();
    }
    if (message.repTruth !== undefined && message.repTruth.length !== 0) {
      writer.uint32(122).fork();
      for (const v of message.repTruth) {
        writer.bool(v);
      }
      writer.ldelim();
    }
    if (message.repDescription !== undefined && message.repDescription.length !== 0) {
      for (const v of message.repDescription) {
        writer.uint32(130).string(v!);
      }
    }
    if (message.repData !== undefined && message.repData.length !== 0) {
      for (const v of message.repData) {
        writer.uint32(138).bytes(v!);
      }
    }
    if (message.optId !== undefined) {
      writer.uint32(168).int32(message.optId);
    }
    if (message.optChild !== undefined) {
      Child.encode(message.optChild, writer.uint32(178).fork()).ldelim();
    }
    if (message.optState !== undefined) {
      writer.uint32(184).int32(message.optState);
    }
    if (message.optLong !== undefined) {
      writer.uint32(192).int64(message.optLong);
    }
    if (message.optTruth !== undefined) {
      writer.uint32(200).bool(message.optTruth);
    }
    if (message.optDescription !== undefined) {
      writer.uint32(210).string(message.optDescription);
    }
    if (message.optData !== undefined) {
      writer.uint32(218).bytes(message.optData);
    }
    Object.entries(message.translations || {}).forEach(([key, value]) => {
      OptionalsTest_TranslationsEntry.encode({ key: key as any, value }, writer.uint32(242).fork()).ldelim();
    });
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalsTest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalsTest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.child = Child.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.long = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.truth = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 11:
          if (tag === 88) {
            message.repId!.push(reader.int32());

            continue;
          }

          if (tag === 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repId!.push(reader.int32());
            }

            continue;
          }

          break;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.repChild!.push(Child.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag === 104) {
            message.repState!.push(reader.int32() as any);

            continue;
          }

          if (tag === 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repState!.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 14:
          if (tag === 112) {
            message.repLong!.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repLong!.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 15:
          if (tag === 120) {
            message.repTruth!.push(reader.bool());

            continue;
          }

          if (tag === 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.repTruth!.push(reader.bool());
            }

            continue;
          }

          break;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.repDescription!.push(reader.string());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.repData!.push(reader.bytes());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.optId = reader.int32();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.optChild = Child.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.optState = reader.int32() as any;
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.optLong = longToNumber(reader.int64() as Long);
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.optTruth = reader.bool();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.optDescription = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.optData = reader.bytes();
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          const entry30 = OptionalsTest_TranslationsEntry.decode(reader, reader.uint32());
          if (entry30.value !== undefined) {
            message.translations![entry30.key] = entry30.value;
          }
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalsTest {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      child: isSet(object.child) ? Child.fromJSON(object.child) : undefined,
      state: isSet(object.state) ? stateEnumFromJSON(object.state) : 0,
      long: isSet(object.long) ? globalThis.Number(object.long) : 0,
      truth: isSet(object.truth) ? globalThis.Boolean(object.truth) : false,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      repId: globalThis.Array.isArray(object?.repId) ? object.repId.map((e: any) => globalThis.Number(e)) : [],
      repChild: globalThis.Array.isArray(object?.repChild) ? object.repChild.map((e: any) => Child.fromJSON(e)) : [],
      repState: globalThis.Array.isArray(object?.repState) ? object.repState.map((e: any) => stateEnumFromJSON(e)) : [],
      repLong: globalThis.Array.isArray(object?.repLong) ? object.repLong.map((e: any) => globalThis.Number(e)) : [],
      repTruth: globalThis.Array.isArray(object?.repTruth)
        ? object.repTruth.map((e: any) => globalThis.Boolean(e))
        : [],
      repDescription: globalThis.Array.isArray(object?.repDescription)
        ? object.repDescription.map((e: any) => globalThis.String(e))
        : [],
      repData: globalThis.Array.isArray(object?.repData) ? object.repData.map((e: any) => bytesFromBase64(e)) : [],
      optId: isSet(object.optId) ? globalThis.Number(object.optId) : undefined,
      optChild: isSet(object.optChild) ? Child.fromJSON(object.optChild) : undefined,
      optState: isSet(object.optState) ? stateEnumFromJSON(object.optState) : undefined,
      optLong: isSet(object.optLong) ? globalThis.Number(object.optLong) : undefined,
      optTruth: isSet(object.optTruth) ? globalThis.Boolean(object.optTruth) : undefined,
      optDescription: isSet(object.optDescription) ? globalThis.String(object.optDescription) : undefined,
      optData: isSet(object.optData) ? bytesFromBase64(object.optData) : undefined,
      translations: isObject(object.translations)
        ? Object.entries(object.translations).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: OptionalsTest): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.child !== undefined) {
      obj.child = Child.toJSON(message.child);
    }
    if (message.state !== undefined && message.state !== 0) {
      obj.state = stateEnumToJSON(message.state);
    }
    if (message.long !== undefined && message.long !== 0) {
      obj.long = Math.round(message.long);
    }
    if (message.truth === true) {
      obj.truth = message.truth;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.data !== undefined && message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.repId?.length) {
      obj.repId = message.repId.map((e) => Math.round(e));
    }
    if (message.repChild?.length) {
      obj.repChild = message.repChild.map((e) => Child.toJSON(e));
    }
    if (message.repState?.length) {
      obj.repState = message.repState.map((e) => stateEnumToJSON(e));
    }
    if (message.repLong?.length) {
      obj.repLong = message.repLong.map((e) => Math.round(e));
    }
    if (message.repTruth?.length) {
      obj.repTruth = message.repTruth;
    }
    if (message.repDescription?.length) {
      obj.repDescription = message.repDescription;
    }
    if (message.repData?.length) {
      obj.repData = message.repData.map((e) => base64FromBytes(e));
    }
    if (message.optId !== undefined) {
      obj.optId = Math.round(message.optId);
    }
    if (message.optChild !== undefined) {
      obj.optChild = Child.toJSON(message.optChild);
    }
    if (message.optState !== undefined) {
      obj.optState = stateEnumToJSON(message.optState);
    }
    if (message.optLong !== undefined) {
      obj.optLong = Math.round(message.optLong);
    }
    if (message.optTruth !== undefined) {
      obj.optTruth = message.optTruth;
    }
    if (message.optDescription !== undefined) {
      obj.optDescription = message.optDescription;
    }
    if (message.optData !== undefined) {
      obj.optData = base64FromBytes(message.optData);
    }
    if (message.translations) {
      const entries = Object.entries(message.translations);
      if (entries.length > 0) {
        obj.translations = {};
        entries.forEach(([k, v]) => {
          obj.translations[k] = v;
        });
      }
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OptionalsTest>, I>>(base?: I): OptionalsTest {
    return OptionalsTest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OptionalsTest>, I>>(object: I): OptionalsTest {
    const message = createBaseOptionalsTest();
    message.id = object.id ?? 0;
    message.child = (object.child !== undefined && object.child !== null) ? Child.fromPartial(object.child) : undefined;
    message.state = object.state ?? 0;
    message.long = object.long ?? 0;
    message.truth = object.truth ?? false;
    message.description = object.description ?? "";
    message.data = object.data ?? new Uint8Array(0);
    message.repId = object.repId?.map((e) => e) || [];
    message.repChild = object.repChild?.map((e) => Child.fromPartial(e)) || [];
    message.repState = object.repState?.map((e) => e) || [];
    message.repLong = object.repLong?.map((e) => e) || [];
    message.repTruth = object.repTruth?.map((e) => e) || [];
    message.repDescription = object.repDescription?.map((e) => e) || [];
    message.repData = object.repData?.map((e) => e) || [];
    message.optId = object.optId ?? undefined;
    message.optChild = (object.optChild !== undefined && object.optChild !== null)
      ? Child.fromPartial(object.optChild)
      : undefined;
    message.optState = object.optState ?? undefined;
    message.optLong = object.optLong ?? undefined;
    message.optTruth = object.optTruth ?? undefined;
    message.optDescription = object.optDescription ?? undefined;
    message.optData = object.optData ?? undefined;
    message.translations = Object.entries(object.translations ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseOptionalsTest_TranslationsEntry(): OptionalsTest_TranslationsEntry {
  return { key: "", value: "" };
}

export const OptionalsTest_TranslationsEntry = {
  encode(message: OptionalsTest_TranslationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalsTest_TranslationsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalsTest_TranslationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionalsTest_TranslationsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: OptionalsTest_TranslationsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OptionalsTest_TranslationsEntry>, I>>(base?: I): OptionalsTest_TranslationsEntry {
    return OptionalsTest_TranslationsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OptionalsTest_TranslationsEntry>, I>>(
    object: I,
  ): OptionalsTest_TranslationsEntry {
    const message = createBaseOptionalsTest_TranslationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseChild(): Child {
  return {};
}

export const Child = {
  encode(_: Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Child {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Child {
    return {};
  },

  toJSON(_: Child): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Child>, I>>(base?: I): Child {
    return Child.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Child>, I>>(_: I): Child {
    const message = createBaseChild();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
