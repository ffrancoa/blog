import type { FontData } from "astro:assets";

export function getFontPathByWeight(
  fonts: FontData[],
  weight: number,
  options?: {
    style?: "normal" | "italic";
    format?: string;
  }
): string | undefined {
  const style = options?.style ?? "normal";
  const format = options?.format ?? "truetype";

  // A weight/style pair is spread across one entry per format, so every match
  // has to be checked before falling back to a format we didn't ask for.
  const matches = fonts.filter(
    font => font.weight === String(weight) && font.style === style
  );

  for (const font of matches) {
    const src = font.src.find(file => file.format === format);
    if (src) return src.url;
  }

  return matches[0]?.src[0]?.url;
}
