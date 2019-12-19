interface ThemeColors {
  transparentAccent: string;
  primaryColor: string;
  subTextWhite: string;
  accentColor: string;
  subText: string;
  white: string;
  text: string;
}

interface ThemeMetrics {
  getHeightFromDP: number;
  extraLargeSize: number;
  getWidthFromDP: number;
  extraSmallSize: number;
  mediumSize: number;
  largeSize: number;
  smallSize: number;
  height: number;
  width: number;
}

export interface Theme {
  metrics: ThemeMetrics;
  colors: ThemeColors;
}
