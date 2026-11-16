import { describe, expect, it } from "vitest";
import { MAX_AVATAR_BYTES, validateAvatarFile } from "./storage";

function makeFile(type: string, size: number, name = "photo"): File {
  const bytes = new Uint8Array(size);
  return new File([bytes], name, { type });
}

describe("validateAvatarFile", () => {
  it("accepts a supported image within the size limit", () => {
    expect(validateAvatarFile(makeFile("image/png", 1024, "a.png"))).toBeNull();
  });

  it("rejects unsupported file types", () => {
    expect(validateAvatarFile(makeFile("application/pdf", 1024))).toMatch(
      /JPG, PNG, WEBP/,
    );
  });

  it("rejects images larger than the limit", () => {
    expect(
      validateAvatarFile(makeFile("image/jpeg", MAX_AVATAR_BYTES + 1)),
    ).toMatch(/2MB/);
  });
});
