defmodule CoherenceSpaWeb.PageController do
  use CoherenceSpaWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
