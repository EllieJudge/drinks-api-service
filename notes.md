Routes - The paths that our server cares about, e.g. “/” or “/home”

Controllers - Maps a route to the business logic. Controllers understand how to get the right data from a Request and what to put in a Response. But they don’t know anything about the actual application logic! That is the job of…

Services - The actual business logic. These don’t know anything about routes or requests - they understand things like “I get the correct flavour of coffee” or “I retrieve the product by an id”. The service shouldn’t know about where the data is actually stored, that is the job of…

Models - The underlying data layer. The services don’t know if data is in a database or a file or stored in memory or retrieved from some other system entirely. All of that is handled by Models, which do things like “get a product from the database by id” or “update the name of product with id [x]”.
