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

JWT - JSON Web Token
    This is how we handle User Auth
        If we want to log a user in, we create a token. If we want to log a user out, we delete that token.

    How can we keep data safe as we transport it across the web?
        Encode
            Not very secure. Can easily be decoded.
        Encrypt
            More secure. Can't be decrypted unless they have the password/secret key
            If a bad actor gets that secret, we are in trouble
        Hash
            Cannot be reverse engineered
            Hashing is deterministic
            There is a problem here: There is a possibility that multiple strings could end up hashing to the same value
                This is called a hash collision
            We use something called a Salt to avoid this issue

    Consists of 3 parts:
        Header
            Contain the type of token
            Indicator for the algo that we used for the hash
        Payload
            The data we are transmitting
            Can add claims - such as an expiration
            ONLY encoded
        Signature
            Hash of the header, payload, and a secret key
            Allows us to validate that our token hasn't been tampered with.

    We can create a token using the jwt.sign method that takes in the payload and a secret key

    We can validate a token using the jwt.verify method that takes in the token and the secret key
        If the token is verified, it returns the payload
        If the token has been tampered with, it will throw a JsonWebTokenError
        Can also take in a 3rd arg, which is a callback function



*/