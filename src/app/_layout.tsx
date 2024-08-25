import { Stack } from "expo-router";
import "../translations/i18n"; // Importa la configuración de traducciones
import { useLoadFonts } from "../lib/hooks/use-load-fonts";
import LoadingScreen from "../lib/components/loading-screen";
import { fonts } from "../styles/fonts";

export default function RootLayout() {
  const [appReady] = useLoadFonts(fonts);

  if (!appReady) {
    return <LoadingScreen />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
