# ElixirReactDemo

Requires Elixir 1.5+ ([install page here](https://elixir-lang.org/install.html)).

I can also Dockerize this if that's preferred.

To start your Phoenix server (I removed the Repo boot in the Supervisor so you won't need a DB):

  * Clone the repo and ```$ cd elixir-react-demo```
  * Install dependencies with `$ mix deps.get`
  * Install Node.js dependencies with `$ cd assets && npm install`
  * Start Phoenix endpoint with `$ cd .. && mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

A quick overview (Sorry it's a bit sloppy, only had a couple hours to throw something together):

1. [Here's a small GenServer](https://github.com/joeyrosztoczy/elixir-react-demo/blob/master/lib/elixir_react_demo/station.ex) that polls data from the NY Citi Bike API. It's booted via the application supervisor in lib/elixir_react_demo/application.ex. Once its booted, it polls the API every X seconds for updated data. It processes / formats the data and stores in the GenServer's state for on-demand in memory access. It also broadcasts the new state to all clients connected via the websocket.

2. [There's a channel](https://github.com/joeyrosztoczy/elixir-react-demo/blob/master/lib/elixir_react_demo_web/channels/summary_channel.ex) for interacting over the "summary:stations" room/topic. There's a client API for the Elixir code to use to handle the broadcast, and a server API that handles the React client sending requests over the socket.

3. The [Javascript client, here,](https://github.com/joeyrosztoczy/elixir-react-demo/blob/master/assets/js/socket.js) joins the room:topic when the main Summary component loads. It has access to a number of handlers, and get's the state from the server via the websocket and updates redux which then flows through the components via props.

4. I threw up a standard redux setup (went a little overkill with combineReducers etc but thought more code to talk about was better), which maps state to props / dispatch etc, and connects the [highest level Summary component](https://github.com/joeyrosztoczy/elixir-react-demo/blob/master/assets/js/summary/summary.js) here to the redux store.

It's getting a wee bit late, but hopefully this gives us some stuff to talk about! Cheers!
