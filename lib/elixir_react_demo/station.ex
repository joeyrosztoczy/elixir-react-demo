defmodule ElixirReactDemo.Station do
  @moduledoc """
  A genserver that polls for updates to NY CitiBike station data
  https://gbfs.citibikenyc.com
  """
  use GenServer

  # Client API
  def start_link(default \\ %{}) do
    GenServer.start_link(__MODULE__, default)
  end

  # Server API
  def init(state) do
    send(self(), :poll_gbfs)
    {:ok, state}
  end

  @doc """
  Grab the latest list of station statuses from:
  https://gbfs.citibikenyc.com/gbfs/en/station_status.json
  """
  def handle_info(:poll_gbfs, state) do
    response = HTTPoison.get!("https://gbfs.citibikenyc.com/gbfs/en/station_status.json")
    IO.inspect(response)
    schedule_update_in(2_000)
    {:noreply, state}
  end

  defp schedule_update_in(time_until_run) do
    Process.send_after(self(), :poll_gbfs, time_until_run)
  end
end
