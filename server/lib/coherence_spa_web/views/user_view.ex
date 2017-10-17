defmodule CoherenceSpaWeb.UserView do
  use CoherenceSpaWeb, :view

  def render("show.json", %{user: user}) do
    %{
      user: %{
        id: user.id,
        email: user.email,
        name: user.name
      }
    }
  end
end
