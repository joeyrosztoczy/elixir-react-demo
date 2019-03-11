# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :elixir_react_demo,
  ecto_repos: [ElixirReactDemo.Repo]

# Configures the endpoint
config :elixir_react_demo, ElixirReactDemoWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "zWVxXzmH103Kz+2wCsrTCl7NiKEdt4yOLM5qf4q8ftId3lFvrALloTS+6A/dr/ul",
  render_errors: [view: ElixirReactDemoWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ElixirReactDemo.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
