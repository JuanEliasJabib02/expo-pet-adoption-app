import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function ExampleComponent() {
	const { t } = useTranslation();

	console.log(t);
	return (
		<View>
			<Text>TRANSLATION LANGUAGE IS : {t('language')}</Text>
		</View>
	);
}
