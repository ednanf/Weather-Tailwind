import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { GEO_API_URL, geoAPIOptions } from '../support/SearchAPI';

const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);

	// Generate the content to be loaded in the search list
	const loadOptions = (inputValue) => {
		return fetch(`${GEO_API_URL}namePrefix=${inputValue}`, geoAPIOptions)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							lat: city.latitude,
							lon: city.longitude,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			})
			.catch((err) => console.error(err));
	};

	// When the field changes, set the received search data and also send to App.jsx
	const handleChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	// Search bar styling via styles prop (necessary for this component)
	const customStyles = {
		control: (provided) => ({
			...provided,
			borderRadius: '8px',
			border: 'none',
			boxShadow:
				'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused ? '#3699FF' : null,
			color: state.isFocused ? 'white' : null,
		}),
	};

	return (
		<div className="mb-5">
			<AsyncPaginate
				placeholder="Search for a city..."
				debounceTimeout={1500}
				value={search}
				onChange={handleChange}
				loadOptions={loadOptions}
				styles={customStyles}
			/>
		</div>
	);
};

export default Search;
