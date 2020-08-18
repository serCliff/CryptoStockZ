const { app } = require('../bootstraps/swagger.bootstrap')

// routes
require('../routes/auth.routes')(app);
require('../routes/account.routes')(app);
require('../routes/views.routes')(app);
require('../routes/product.routes')(app);
require('../routes/cryptostockz.routes')(app);
