import { Text, View } from 'react-native';
import ExampleComponent from '../lib/components/example-component';

export default function Index() {
	return (
		<View className='h-full bg-blue-500'>
			<ExampleComponent />
		</View>
	);
}
