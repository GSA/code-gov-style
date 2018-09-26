### Why Don't You Use Webpack?
Webpack is designed to produce files that don't operate on the global scope.  We unfortunately need to create web components files that operate on the global scope in order to support as many environments as possible.

