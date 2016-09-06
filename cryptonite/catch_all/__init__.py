"""
The catch_all app has two views:

base_view is used to render a generic template. This is used because React
is being used on the client side to render the actual UI. The template
will include an __INITIAL_STATE__ object with the base information that
React will need to render the UI.

unknown_api is used to return a JSON response that indicates that there
is no endpoint for the requested resource.
"""
