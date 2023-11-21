/*

Search Features and Pagination
    2 main benefits to pagination:
        UI - Loading thousands of results will look messy and take a VERY long time
        UX - By limiting the number of results, we don't overwhelm our users
    Should take in a page and size query string
    When writing our queries, we us a couple properties for pagination:
        limit - size
        offset - size * (page - 1)
    
    2 scenarios:
        If page or size are not provided, they should be set to defaults of 1 and 5 respectively
            This can be done by checking if the page or size variables are undefined

        If page or size are less than 1, add no pagination and return all results
            This can be done by writing a separate query, but this isn't very DRY
            Instead, we can create a pagination obj and let limit and offset in that obj


Search Parameters


Security




*/