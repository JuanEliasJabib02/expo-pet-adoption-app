import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

type FontsMap = {
  [fontName: string]: any;
};

type useLoadFontsReturn = [boolean, boolean | undefined];

export function useLoadFonts(fonts: FontsMap): useLoadFontsReturn {
  const [fontsLoaded, fontsError] = useFonts(fonts);
  const [appReady, setAppReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded || fontsError) {
          await SplashScreen.hideAsync();
          setAppReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded, fontsError]);

  const isError = fontsError ? true : undefined;

  return [appReady, isError];
}
