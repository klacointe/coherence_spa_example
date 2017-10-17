defmodule CoherenceSpaWeb.Router do
  use CoherenceSpaWeb, :router
  use Coherence.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Coherence.Authentication.Session
  end

  pipeline :protected do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Coherence.Authentication.Session, protected: true
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_flash
    plug Coherence.Authentication.Session
  end

  pipeline :protected_api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_flash
    plug Coherence.Authentication.Session, protected: true
  end

  scope "/" do
    pipe_through :browser
    coherence_routes()
  end

  scope "/api" do
    pipe_through :api
    coherence_routes()
  end

  scope "/" do
    pipe_through :protected
    coherence_routes :protected
  end

  scope "/api" do
    pipe_through :protected_api
    coherence_routes :protected
  end

  scope "/", CoherenceSpaWeb do
    pipe_through :browser
    get "/", PageController, :index
  end

  scope "/", CoherenceSpaWeb do
    pipe_through :protected
  end

end
