/*

Scopes
    Dries up our code
    Ensuring we are retrieving data from our DB that we intend to receive

    Default scope
        In the last obj in our model init, we add a defaultScope key with a value of an object containing the properties we want applied to all queries

    Scopes property
        In the last obj in our model init, we add a scopes key with a value of an object containing KV pairs with the key being the name of the scope, and the value being an object containing the properties we want applied
        When applying a non-default scope, we have to adjust our query
            We have to add .scope() after our model name
            <model>.scope(<scopes>).<query method>()
        
        If we apply a named scope to a query, the defaultScope is no longer applied by default

        We can also create a function scope
            Function scopes get passed in as another obj with a key of 'method', and a value of an array: [<function name>, <args>]




*/