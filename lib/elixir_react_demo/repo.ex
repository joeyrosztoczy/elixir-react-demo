defmodule ElixirReactDemo.Repo do
  use Ecto.Repo,
    otp_app: :elixir_react_demo,
    adapter: Ecto.Adapters.Postgres
end
