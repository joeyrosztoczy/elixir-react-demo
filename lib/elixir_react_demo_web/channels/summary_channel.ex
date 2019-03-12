defmodule ElixirReactDemoWeb.SummaryChannel do
  @moduledoc """
  Channel to provide data to react via websockets.
  """
  use ElixirReactDemoWeb, :channel

  alias ElixirReactDemo.Station

  def join("summary:stations", _payload, socket) do
    # Would demo auth but in a hurry
    {:ok, socket}
  end

  # Client API
  def broadcast_stations(stations) do
    ElixirReactDemoWeb.Endpoint.broadcast!("summary:stations", "stations_updated", %{
      stations: stations
    })
  end

  # Server API
  def handle_in("request_stations", _body, socket) do
    {:ok, stations} = Station.get_stations()
    IO.inspect(stations)

    {:reply, {:ok, %{stations: stations}}, socket}
  end
end
