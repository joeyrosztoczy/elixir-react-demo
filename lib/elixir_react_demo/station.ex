defmodule ElixirReactDemo.Station do
  @moduledoc """
  A genserver that polls for updates to NY CitiBike station data
  https://gbfs.citibikenyc.com
  """
  use GenServer

  alias ElixirReactDemoWeb.SummaryChannel

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

  @doc """
  Grab the latest list of station statuses from:
  https://gbfs.citibikenyc.com/gbfs/en/station_status.json
  """
  def handle_info(:poll_gbfs, _state) do
    response = HTTPoison.get!("https://gbfs.citibikenyc.com/gbfs/en/station_status.json")

    decoded_response = Jason.decode!(response.body)
    SummaryChannel.broadcast_stations(decoded_response["data"])
    schedule_update_in(2_000)

    {:noreply, response.body}
  end

  defp schedule_update_in(time_until_run) do
    Process.send_after(self(), :poll_gbfs, time_until_run)
  end
end
