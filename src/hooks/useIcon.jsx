import {
	WiThunderstorm,
	WiRainMix,
	WiRain,
	WiSnow,
	WiSmoke,
	WiFog,
	WiDust,
	WiSandstorm,
	WiCloudyWindy,
	WiTornado,
	WiDaySunny,
	WiCloudy,
	WiNa,
} from 'react-icons/wi';

// TODO: add colors to the icons

export function useIcon(id) {
	// The switch uses true since the comparison returns true or false!
	switch (true) {
		case id >= 200 && id <= 232:
			return <WiThunderstorm className={`font-black`} />;
		case id >= 300 && id <= 321:
			return <WiRainMix className={`font-black`} />;
		case id >= 500 && id <= 531:
			return <WiRain className={`font-black`} />;
		case id >= 600 && id <= 622:
			return <WiSnow className={`font-black`} />;
		case id === 701:
			return <WiFog className={`font-black`} />;
		case id === 711:
			return <WiSmoke className={`font-black`} />;
		case id === 721:
			return <WiFog className={`font-black`} />;
		case id === 731:
			return <WiDust className={`font-black`} />;
		case id === 741:
			return <WiFog className={`font-black`} />;
		case id === 751:
			return <WiSandstorm className={`font-black`} />;
		case id === 761:
			return <WiDust className={`font-black`} />;
		case id === 762:
			return <WiDust className={`font-black`} />;
		case id === 771:
			return <WiCloudyWindy className={`font-black`} />;
		case id === 781:
			return <WiTornado className={`font-black`} />;
		case id === 800:
			return <WiDaySunny className={`font-black`} />;
		case id >= 801 && id <= 804:
			return <WiCloudy className={`font-black`} />;
		default:
			return <WiNa className={`font-black`} />;
	}
}
