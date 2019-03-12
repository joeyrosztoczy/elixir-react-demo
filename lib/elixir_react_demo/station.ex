defmodule ElixirReactDemo.Station do
  @moduledoc """
  A genserver that polls for updates to NY CitiBike station data
  https://gbfs.citibikenyc.com
  """
  use GenServer

  alias ElixirReactDemoWeb.SummaryChannel

  @bike_station_url "https://gbfs.citibikenyc.com/gbfs/en/station_status.json"
  # Client API
  def start_link(default \\ []) do
    GenServer.start_link(__MODULE__, default, name: __MODULE__)
  end

  def get_stations() do
    GenServer.call(__MODULE__, :get_stations)
  end

  # Server API
  def init(state) do
    schedule_update_in(2_000)
    {:ok, state}
  end

  def handle_call(:get_stations, _from, state) do
    {:reply, {:ok, state}, state}
  end

  def handle_info(:poll_gbfs, _state) do
    stations =
      @bike_station_url
      |> get_bike_stations()
      |> Enum.sort(fn station_one, station_two ->
        station_one["station_id"] < station_two["station_id"]
      end)

    SummaryChannel.broadcast_stations(stations)
    schedule_update_in(2_000)

    {:noreply, stations}
  end

  defp get_bike_stations(url) do
    response = HTTPoison.get!(url)
    decoded_response = Jason.decode!(response.body)
    decoded_response["data"]["stations"]
  end

  defp schedule_update_in(time_until_run) do
    Process.send_after(self(), :poll_gbfs, time_until_run)
  end
end
