# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     CoherenceSpa.Repo.insert!(%CoherenceSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
CoherenceSpa.Repo.delete_all CoherenceSpa.Coherence.User

CoherenceSpa.Coherence.User.changeset(%CoherenceSpa.Coherence.User{}, %{name: "Test User", email: "testuser@example.com", password: "secret", password_confirmation: "secret"})
|> CoherenceSpa.Repo.insert!
|> Coherence.Controller.confirm!
