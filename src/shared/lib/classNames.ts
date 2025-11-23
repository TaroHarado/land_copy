type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

export function classNames(...classes: ClassValue[]): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (typeof cls === "string" && cls.trim()) {
      result.push(cls.trim());
    } else if (typeof cls === "number" && cls !== 0) {
      result.push(String(cls));
    } else if (Array.isArray(cls)) {
      const nested = classNames(...cls);
      if (nested) {
        result.push(nested);
      }
    } else if (typeof cls === "object" && cls !== null) {
      for (const [key, value] of Object.entries(cls)) {
        if (value && key.trim()) {
          result.push(key.trim());
        }
      }
    }
  }

  return result.join(" ");
}

export default classNames;

export const cn = classNames;