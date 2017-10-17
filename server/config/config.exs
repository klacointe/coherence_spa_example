# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :coherence_spa,
  ecto_repos: [CoherenceSpa.Repo]

# Configures the endpoint
config :coherence_spa, CoherenceSpaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "pd3KIhkKyW2/4oDNt2F291OOWRXC1qs0Kmn1rEF7//K4lZMVfnpTyB03bmkiKyDE",
  render_errors: [view: CoherenceSpaWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: CoherenceSpa.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# %% Coherence Configuration %%   Don't remove this line
config :coherence,
  user_schema: CoherenceSpa.Coherence.User,
  repo: CoherenceSpa.Repo,
  module: CoherenceSpa,
  web_module: CoherenceSpaWeb,
  router: CoherenceSpaWeb.Router,
  messages_backend: CoherenceSpaWeb.Coherence.Messages,
  logged_out_url: "/",
  email_from_name: "Your Name",
  email_from_email: "yourname@example.com",
  opts: [:authenticatable, :recoverable, :lockable, :trackable, :unlockable_with_token, :invitable, :registerable, :confirmable]

config :coherence, CoherenceSpaWeb.Coherence.Mailer,
  adapter: Swoosh.Adapters.Sendgrid,
  api_key: "your api key here"
# %% End Coherence Configuration %%
