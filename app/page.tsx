import Dashboard from '@/components/Dashboard';
import Navbar from '@/components/Navbar';
import Todo from '@/components/Todo';
import { getWeatherData } from "@/actions/getWeatherData";
import CurrentWeather from '@/components/CurrentWeather';
import TenDayForecast from "@/components/widgets/TenDayForecast";
import { notFound } from "next/navigation"
import { DEFAULT_LOCATION } from "@/lib/config"
import {
  TenDayForecastData,
  WeatherData,
} from "@/lib/types"
import { getTenDayForecast } from '@/actions/getTenDayForecast';
import StockMarket from '@/components/StockMarket';

export default async function Home() {

  const { lat, lon } = DEFAULT_LOCATION.coord

  const WeatherDataRequest: WeatherData = await getWeatherData({
    lat,
    lon,
  })
  // const TenDayForecastRequest: TenDayForecastData = await getTenDayForecast({
  //   lat,
  //   lon,
  // })

  // const [weather_data, ten_day_forecast] =
  //   await Promise.all([
  //     WeatherDataRequest,
  //     TenDayForecastRequest,
  //   ])

  // if (!weather_data || !ten_day_forecast) return notFound()

  // console.log(weather_data);

  // console.log(ten_day_forecast);

  return (
    <div>
      <Navbar />
      <Dashboard />
      {/* <CurrentWeather data={weather_data} city={ten_day_forecast.city} /> */}
      {/* <TenDayForecast data={ten_day_forecast} /> */}
    </div>
  );
}
