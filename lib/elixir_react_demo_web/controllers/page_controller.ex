defmodule ElixirReactDemoWeb.PageController do
  use ElixirReactDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
