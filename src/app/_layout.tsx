import { Stack } from 'expo-router';
import '././../translations/i18n'; // This line active the translations.
export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen name='index' />
		</Stack>
	);
}
