import { Text, View } from 'react-native';
import ExampleComponent from '../lib/components/example-component';
import { isProd } from '../lib/config/env-variables';

export default function App() {
	console.log(isProd, 'isPrxod');
	return (
		<View className='h-full bg-blue-500'>
			<ExampleComponent />
		</View>
	);
}
