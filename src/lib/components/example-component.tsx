import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function ExampleComponent() {
	const { t } = useTranslation();
	return (
		<View>
			<Text className='text-6xl font-bold'>
				TRANSLATION LANGUAGE IS --: {t('language')}
				and poppins fonts
			</Text>
		</View>
	);
}
