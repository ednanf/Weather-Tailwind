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
} from 'react-icons/wi';

export function useIcon(id) {
	switch (id) {
		case id >= 200 && id <= 232:
			return <WiThunderstorm />;
		case id >= 300 && id <= 321:
			return <WiRainMix />;
		case id >= 500 && id <= 531:
			return <WiRain />;
		case id >= 600 && id <= 622:
			return <WiSnow />;
		case id === 701:
			return <WiFog />;
		case id === 711:
			return <WiSmoke />;
		case id === 721:
			return <WiFog />;
		case id === 731:
			return <WiDust />;
		case id === 741:
			return <WiFog />;
		case id === 751:
			return <WiSandstorm />;
		case id === 761:
			return <WiDust />;
		case id === 762:
			return <WiDust />;
		case id === 771:
			return <WiCloudyWindy />;
		case id === 781:
			return <WiTornado />;
		case id === 800:
			return <WiDaySunny />;
		case id >= 801 && id <= 804:
			return <WiCloudy />;
	}
}
