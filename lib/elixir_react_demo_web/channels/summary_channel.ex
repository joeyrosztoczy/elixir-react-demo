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
    ElixirReactDemoWeb.Endpoint.broadcast!("summary:stations", "stations_updated", stations)
  end

  # Server API
  def handle_in("request_stations", _body, socket) do
    {:ok, response} = Station.get_stations()
    response = Jason.decode!(response)
    stations = response["data"]

    {:reply, {:ok, stations}, socket}
  end
end
