defmodule CoherenceSpaWeb.UserController do
  use CoherenceSpaWeb, :controller

  def me(conn, _params) do
    conn
    |> render("show.json", user: conn.assigns[:current_user])
  end
end
