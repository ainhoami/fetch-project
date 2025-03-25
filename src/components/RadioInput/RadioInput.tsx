interface RadioInputProps {
	options: Record<string, string>;
	selectedVal: [val: string, (val: string) => void];
}

const RadioInput = ({ options, selectedVal }: RadioInputProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = event.target;
		selectedVal[1](name);
	};
	return (
		<div className='p-4 bg-gray-100 rounded-lg shadow-md min-h-[128px]'>
			{Object.entries(options).map(([key, value]) => (
				<label
					key={key}
					className='cursor-pointer flex items-center space-x-2 mb-2'
				>
					<input
						type='radio'
						name={key}
						value={value}
						checked={selectedVal[0] === key}
						onChange={handleChange}
						className='appearance-none w-4 h-4 border border-gray-400 dark:border-gray-600 rounded-full checked:bg-blue-500 dark:checked:bg-blue-400 checked:border-transparent'
					/>
					<span className='text-black'>{value}</span>
				</label>
			))}
		</div>
	);
};

export default RadioInput;
