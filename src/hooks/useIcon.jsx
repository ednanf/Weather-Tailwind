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

export function useIcon(id, iconSizePx = 100) {
	// The switch uses true since the comparison returns true or false!
	switch (true) {
		case id >= 200 && id <= 232:
			return <WiThunderstorm className={`text-[${iconSizePx}px] font-black`} />;
		case id >= 300 && id <= 321:
			return <WiRainMix className={`text-[${iconSizePx}px] font-black`} />;
		case id >= 500 && id <= 531:
			return <WiRain className={`text-[${iconSizePx}px] font-black`} />;
		case id >= 600 && id <= 622:
			return <WiSnow className={`text-[${iconSizePx}px] font-black`} />;
		case id === 701:
			return <WiFog className={`text-[${iconSizePx}px] font-black`} />;
		case id === 711:
			return <WiSmoke className={`text-[${iconSizePx}px] font-black`} />;
		case id === 721:
			return <WiFog className={`text-[${iconSizePx}px] font-black`} />;
		case id === 731:
			return <WiDust className={`text-[${iconSizePx}px] font-black`} />;
		case id === 741:
			return <WiFog className={`text-[${iconSizePx}px] font-black`} />;
		case id === 751:
			return <WiSandstorm className={`text-[${iconSizePx}px] font-black`} />;
		case id === 761:
			return <WiDust className={`text-[${iconSizePx}px] font-black`} />;
		case id === 762:
			return <WiDust className={`text-[${iconSizePx}px] font-black`} />;
		case id === 771:
			return <WiCloudyWindy className={`text-[${iconSizePx}px] font-black`} />;
		case id === 781:
			return <WiTornado className={`text-[${iconSizePx}px] font-black`} />;
		case id === 800:
			return <WiDaySunny className={`text-[${iconSizePx}px] font-black`} />;
		case id >= 801 && id <= 804:
			return <WiCloudy className={`text-[${iconSizePx}px] font-black`} />;
		default:
			return <WiNa className={`text-[${iconSizePx}px] font-black`} />;
	}
}
