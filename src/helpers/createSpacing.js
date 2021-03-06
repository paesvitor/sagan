import { spacing, sides } from "../defaultTheme";

const createSpacing = (property, shortName) => {
  return Object.keys(spacing).map(size => {
    return Object.keys(sides).map(
      side =>
        `.${shortName}${side === "0" ? "" : side}-${size} {
                ${property}${sides[side] ? "-" : ""}${sides[side]}: ${
          spacing[size]
        }rem
            }`
    );
  });
};

export default createSpacing;
